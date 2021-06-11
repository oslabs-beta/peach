/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type importedUserQueryVariables = {||};
export type importedUserQueryResponse = {|
  +User: ?{|
    +name: string
  |}
|};
export type importedUserQuery = {|
  variables: importedUserQueryVariables,
  response: importedUserQueryResponse,
|};
*/


/*
query importedUserQuery {
  User(id: 80) {
    name
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": "User(id:80)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "importedUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "importedUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "486938f8ff6a34c4bbec52c4937a0951",
    "id": null,
    "metadata": {},
    "name": "importedUserQuery",
    "operationKind": "query",
    "text": "query importedUserQuery {\n  User(id: 80) {\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba6c76fd019a2d76d55f991ca8b89fe2';

module.exports = node;
