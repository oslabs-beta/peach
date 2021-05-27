import { assertObjectType } from 'graphql';

const { parse, visit, print } = require('graphql/language');
const path = require('path');
const fs = require('fs');


/* 
    each schema, when parsed as JSON, will each have the following fields:

    kind: ""
    description: {...value: "",} | undefined
    "name": {kind: "name", value: "<the-actual-name>", loc: {...}}
    "interfaces": [] (possibly empty)
    "directives": [] (possibly empty)
    fields: [
        {
            kind: ''
            name: {kind: "name", value: "<the-actual-name>"} loc: {...}
            arguments: [] (possibly empty)
            type: {
                kind: ""
                name: <...as above>
                loc: {...}
            }
            directives: [] (possibly empty)
            loc: {...}
        }
    ]
    loc: {...}
*/ 

export default function makeJsonSchema() {
    const output = [];
    console.log(__dirname);
    const schemaString = fs.readFileSync('/Users/graham/Documents/projects/peach/src/relay/schema.graphql', 'utf8', async (err, data) => {
        if (err) console.error(err);
        return data;
    });
    parse(schemaString).definitions.forEach(ast => {
        if (ast.kind === 'ObjectTypeDefinition') {
            const astObject = {};
        astObject.name = ast.name.value;
        astObject.fields = [];
        visit(ast, {
          FieldDefinition(node) {
            const text = print(node);
            astObject.fields.push(
                {
                    note: text.split("\"")[3],
                    type: text.split('\"')[6]
                }
                );
          }
        });
        output.push(astObject);
        }
      });
    console.log(output);
    return output;
}



