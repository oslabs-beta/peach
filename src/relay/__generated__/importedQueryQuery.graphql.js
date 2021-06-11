/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type importedQueryQueryVariables = {|
  id?: ?number
|};
export type importedQueryQueryResponse = {|
  +Media: ?{|
    +_id: number,
    +title: ?{|
      +native: ?string,
      +english: ?string,
      +userPreferred: ?string,
    |},
  |}
|};
export type importedQueryQuery = {|
  variables: importedQueryQueryVariables,
  response: importedQueryQueryResponse,
|};
*/


/*
query importedQueryQuery(
  $id: Int
) {
  Media(id: $id, type: ANIME) {
    _id: id
    title {
      native
      english
      userPreferred
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Literal",
        "name": "type",
        "value": "ANIME"
      }
    ],
    "concreteType": "Media",
    "kind": "LinkedField",
    "name": "Media",
    "plural": false,
    "selections": [
      {
        "alias": "_id",
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MediaTitle",
        "kind": "LinkedField",
        "name": "title",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "native",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "english",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userPreferred",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "importedQueryQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "importedQueryQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "90200a96425e0c8bc60d438cee16f30e",
    "id": null,
    "metadata": {},
    "name": "importedQueryQuery",
    "operationKind": "query",
    "text": "query importedQueryQuery(\n  $id: Int\n) {\n  Media(id: $id, type: ANIME) {\n    _id: id\n    title {\n      native\n      english\n      userPreferred\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6b0bc2b3e3ebba95adb76091dd76df81';

module.exports = node;
