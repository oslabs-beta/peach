/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AppFragment$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type QueryContainerFragment$ref: FragmentReference;
declare export opaque type QueryContainerFragment$fragmentType: QueryContainerFragment$ref;
export type QueryContainerFragment = {|
  +$fragmentRefs: AppFragment$ref,
  +$refType: QueryContainerFragment$ref,
|};
export type QueryContainerFragment$data = QueryContainerFragment;
export type QueryContainerFragment$key = {
  +$data?: QueryContainerFragment$data,
  +$fragmentRefs: QueryContainerFragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QueryContainerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '15cd5571310b3628506650205edaaab7';

module.exports = node;
