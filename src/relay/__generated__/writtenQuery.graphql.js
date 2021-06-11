/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type writtenQueryVariables = {||};
export type writtenQueryResponse = {|
  +Media: ?{|
    +title: ?{|
      +english: ?string
    |}
  |}
|};
export type writtenQuery = {|
  variables: writtenQueryVariables,
  response: writtenQueryResponse,
|};
*/


/*
query writtenQuery {
  Media(id: 80) {
    title {
      english
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
    "concreteType": "Media",
    "kind": "LinkedField",
    "name": "Media",
    "plural": false,
    "selections": [
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "Media(id:80)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "writtenQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "writtenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "756224db2a2f33d4ffc3a7734aec1f13",
    "id": null,
    "metadata": {},
    "name": "writtenQuery",
    "operationKind": "query",
    "text": "query writtenQuery {\n  Media(id: 80) {\n    title {\n      english\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aa2a1eeb5b78b1c9fbb011a800a37192';

module.exports = node;
