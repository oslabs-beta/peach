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
      +english: ?string,
<<<<<<< Updated upstream
=======
      +native: ?string,
>>>>>>> Stashed changes
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
      english
<<<<<<< Updated upstream
=======
      native
>>>>>>> Stashed changes
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
            "name": "english",
            "storageKey": null
<<<<<<< Updated upstream
=======
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "native",
            "storageKey": null
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    "cacheID": "8d12112eb1ad99531b1df2e439e2de80",
=======
    "cacheID": "8c787910bff1c8b823366153135a1426",
>>>>>>> Stashed changes
    "id": null,
    "metadata": {},
    "name": "writtenQuery",
    "operationKind": "query",
<<<<<<< Updated upstream
    "text": "query writtenQuery(\n  $id: Int\n) {\n  Media(id: $id, type: ANIME) {\n    _id: id\n    title {\n      native\n      english\n    }\n  }\n}\n"
=======
    "text": "query writtenQuery(\n  $id: Int\n) {\n  Media(id: $id, type: ANIME) {\n    _id: id\n    title {\n      english\n      native\n    }\n  }\n}\n"
>>>>>>> Stashed changes
  }
};
})();
// prettier-ignore
<<<<<<< Updated upstream
(node/*: any*/).hash = 'be10a2f4a3950e2d8bf7aeba27646d85';
=======
(node/*: any*/).hash = '32f2a80b7c05c3a180a6478c0fede6e8';
>>>>>>> Stashed changes

module.exports = node;
