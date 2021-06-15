/* 
handles the task of parsing schema.graphql into json, 
which allows other components to render and manipulate the data
*/
const { parse, visit, print } = require('graphql/language');
const path = require('path');
const fs = require('fs');

/* this function creates a JSON representation of the 
Schema and fields from the graphQL schema */ 
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
                  // if no notes, make sure this defaults to an empty string
                  note: text.split("\"")[3] || '', 
                  // sometimes there are no quotes or only quotes around the text
                  // in that case, we would want the full text, rather than an empty string
                  type: text.split('\"')[6] || text, 
                }
                );
          }
        });
        output.push(astObject);
        }
      });
    return output;
}


