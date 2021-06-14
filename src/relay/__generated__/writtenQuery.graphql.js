/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type writtenQueryVariables = {|
  id?: ?number
|};
export type writtenQueryResponse = {|
  +Media: ?{|
    +_id: number,
    +title: ?{|
      +native: ?string,
      +romaji: ?string,
      +english: ?string,
    |},
  |}
|};
export type writtenQuery = {|
  variables: writtenQueryVariables,
  response: writtenQueryResponse,
|};
*/


/*
query writtenQuery(
  $id: Int
) {
  Media(id: $id, type: ANIME) {
    _id: id
    title {
      native
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
            "name": "native",
            "storageKey": null
          },
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
    "name": "writtenQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "writtenQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b58609cec13f6ea1793e0ad0013292ee",
    "id": null,
    "metadata": {},
    "name": "writtenQuery",
    "operationKind": "query",
    "text": "query writtenQuery(\n  $id: Int\n) {\n  Media(id: $id, type: ANIME) {\n    _id: id\n    title {\n      native\n      romaji\n      english\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '31db574a3cf00bedf05d314f4622a7ac';

module.exports = node;
