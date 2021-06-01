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
<<<<<<< HEAD
      +romaji: ?string
=======
      +english: ?string,
      +native: ?string,
>>>>>>> dev
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
<<<<<<< HEAD
      romaji
=======
      english
      native
>>>>>>> dev
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
            "name": "native",
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
<<<<<<< HEAD
    "cacheID": "af1e50f4355e85fbdeb6a1f8bc6704e0",
=======
    "cacheID": "1d054acaff01fdfd4f2a43192b72ae15",
>>>>>>> dev
    "id": null,
    "metadata": {},
    "name": "importedQueryQuery",
    "operationKind": "query",
<<<<<<< HEAD
    "text": "query importedQueryQuery(\n  $id: Int\n) {\n  Media(id: $id, type: ANIME) {\n    _id: id\n    title {\n      romaji\n    }\n  }\n}\n"
=======
    "text": "query importedQueryQuery(\n  $id: Int\n) {\n  Media(id: $id, type: ANIME) {\n    _id: id\n    title {\n      english\n      native\n    }\n  }\n}\n"
>>>>>>> dev
  }
};
})();
// prettier-ignore
<<<<<<< HEAD
(node/*: any*/).hash = 'eb136b868fbb6f412b5cea5597dd07be';
=======
(node/*: any*/).hash = 'bf8c7d223dd7856bc9bb1f304709ef99';
>>>>>>> dev

module.exports = node;
