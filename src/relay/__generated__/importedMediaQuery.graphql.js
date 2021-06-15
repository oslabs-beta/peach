/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type importedMediaQueryVariables = {||};
export type importedMediaQueryResponse = {|
  +Media: ?{|
    +title: ?{|
      +english: ?string,
      +romaji: ?string,
    |}
  |}
|};
export type importedMediaQuery = {|
  variables: importedMediaQueryVariables,
  response: importedMediaQueryResponse,
|};
*/


/*
query importedMediaQuery {
  Media(id: 80) {
    title {
      english
      romaji
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "romaji",
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
    "name": "importedMediaQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "importedMediaQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "489f7d7e4a82cdf6040a3dc0bd04287f",
    "id": null,
    "metadata": {},
    "name": "importedMediaQuery",
    "operationKind": "query",
    "text": "query importedMediaQuery {\n  Media(id: 80) {\n    title {\n      english\n      romaji\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cfe342451fa33e36af3ea4942fb48b1d';

module.exports = node;
