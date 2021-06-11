/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type importedCharacterQueryVariables = {||};
export type importedCharacterQueryResponse = {|
  +Character: ?{|
    +name: ?{|
      +full: ?string,
      +native: ?string,
    |}
  |}
|};
export type importedCharacterQuery = {|
  variables: importedCharacterQueryVariables,
  response: importedCharacterQueryResponse,
|};
*/


/*
query importedCharacterQuery {
  Character(id: 80) {
    name {
      full
      native
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": 80
      }
    ],
    "concreteType": "Character",
    "kind": "LinkedField",
    "name": "Character",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CharacterName",
        "kind": "LinkedField",
        "name": "name",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "full",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "native",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "Character(id:80)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "importedCharacterQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "importedCharacterQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1c7a485385ea24b010530c57cb814e53",
    "id": null,
    "metadata": {},
    "name": "importedCharacterQuery",
    "operationKind": "query",
    "text": "query importedCharacterQuery {\n  Character(id: 80) {\n    name {\n      full\n      native\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4aa5b73329819636bddeb6aaa5cd4649';

module.exports = node;
