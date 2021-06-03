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
      +romaji: ?string,
      +english: ?string,
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
      romaji
      english
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
            "name": "romaji",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "english",
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
    "cacheID": "3b44d494a3128e7875cba4afff1542b0",
    "id": null,
    "metadata": {},
    "name": "importedQueryQuery",
    "operationKind": "query",
    "text": "query importedQueryQuery(\n  $id: Int\n) {\n  Media(id: $id, type: ANIME) {\n    _id: id\n    title {\n      romaji\n      english\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '66e8a11fc7a9bc032753efa2c8ff92ad';

module.exports = node;
