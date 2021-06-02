/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AppFragment$ref: FragmentReference;
declare export opaque type AppFragment$fragmentType: AppFragment$ref;
export type AppFragment = {|
  +Media: ?{|
    +_id: number,
    +title: ?{|
      +romaji: ?string,
      +english: ?string,
      +native: ?string,
    |},
  |},
  +$refType: AppFragment$ref,
|};
export type AppFragment$data = AppFragment;
export type AppFragment$key = {
  +$data?: AppFragment$data,
  +$fragmentRefs: AppFragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppFragment",
  "selections": [
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
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd6547476f2907745bad37cd2558603a7';

module.exports = node;
