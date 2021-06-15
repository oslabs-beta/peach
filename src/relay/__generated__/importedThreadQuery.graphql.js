/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type importedThreadQueryVariables = {||};
export type importedThreadQueryResponse = {|
  +Thread: ?{|
    +title: ?string
  |}
|};
export type importedThreadQuery = {|
  variables: importedThreadQueryVariables,
  response: importedThreadQueryResponse,
|};
*/


/*
query importedThreadQuery {
  Thread(id: 80) {
    title
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
    "concreteType": "Thread",
    "kind": "LinkedField",
    "name": "Thread",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": "Thread(id:80)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "importedThreadQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "importedThreadQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9261e373240fa4960d3982041fe4eceb",
    "id": null,
    "metadata": {},
    "name": "importedThreadQuery",
    "operationKind": "query",
    "text": "query importedThreadQuery {\n  Thread(id: 80) {\n    title\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '746f15e7074c14e67bddd74a1b26be8b';

module.exports = node;
