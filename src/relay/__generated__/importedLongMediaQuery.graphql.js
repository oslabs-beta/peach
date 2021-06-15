/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type importedLongMediaQueryVariables = {|
  id?: ?number
|};
export type importedLongMediaQueryResponse = {|
  +Media: ?{|
    +_id: number,
    +title: ?{|
      +native: ?string,
      +english: ?string,
    |},
  |}
|};
export type importedLongMediaQuery = {|
  variables: importedLongMediaQueryVariables,
  response: importedLongMediaQueryResponse,
|};
*/


/*
query importedLongMediaQuery(
  $id: Int
) {
  Media(id: $id, type: ANIME) {
    _id: id
    title {
      native
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
    "name": "importedLongMediaQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "importedLongMediaQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4a8b4c23ce8e82c15862b842b927767e",
    "id": null,
    "metadata": {},
    "name": "importedLongMediaQuery",
    "operationKind": "query",
    "text": "query importedLongMediaQuery(\n  $id: Int\n) {\n  Media(id: $id, type: ANIME) {\n    _id: id\n    title {\n      native\n      english\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e689d513285ffcd78498d3756cf3e3a4';

module.exports = node;
