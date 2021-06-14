/* 
handles the task of parsing schema.graphql into json, 
which allows other components to render and manipulate the data
*/

const { parse, visit, print } = require('graphql/language');
const path = require('path');
const fs = require('fs');

export default function makeJsonSchema() {
    const output = [];
    const pathToSchema = path.resolve('./schema.graphql');
    const schemaString = fs.readFileSync(pathToSchema, 'utf8', async (err, data) => {
        if (err) console.error(err);
        return data;
    });
    parse(schemaString).definitions.forEach(ast => {
      // currently ignoring the definitions that are not for Object Types
      // render therefore excludes things like Mutations, Subscriptions and Fragment definitions
      if (ast.kind === 'ObjectTypeDefinition') {
        const astObject = {};
        astObject.name = ast.name.value;
        astObject.fields = [];
        visit(ast, {
          FieldDefinition(node) {
            const text = print(node);
            astObject.fields.push(
                {
                  // note that the comments are saved as 'note' and maintained for rendering later
                  note: text.split("\"")[3],
                  type: text.split('\"')[6]
                }
                );
          }
        });
        output.push(astObject);
        }
      });
    return output;
}


