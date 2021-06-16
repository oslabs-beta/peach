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
      +english: ?string
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
    "cacheID": "6614549f14a36b9789a0079ac7e87d20",
    "id": null,
    "metadata": {},
    "name": "importedMediaQuery",
    "operationKind": "query",
    "text": "query importedMediaQuery {\n  Media(id: 80) {\n    title {\n      english\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '843bb8c6b1e72fc01d2e70e90b2d0e35';

module.exports = node;
