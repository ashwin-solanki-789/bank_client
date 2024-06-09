/**
 * @generated SignedSource<<8be50bcb29609108cba3dd94ddb45193>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type OverviewVerifySubscription$variables = {
  account_number: number;
};
export type OverviewVerifySubscription$data = {
  readonly verify: boolean | null | undefined;
};
export type OverviewVerifySubscription = {
  response: OverviewVerifySubscription$data;
  variables: OverviewVerifySubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "account_number"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "account_number",
        "variableName": "account_number"
      }
    ],
    "kind": "ScalarField",
    "name": "verify",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OverviewVerifySubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OverviewVerifySubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2422ab7d6e017e981639eef5a09c3b1f",
    "id": null,
    "metadata": {},
    "name": "OverviewVerifySubscription",
    "operationKind": "subscription",
    "text": "subscription OverviewVerifySubscription(\n  $account_number: Int!\n) {\n  verify(account_number: $account_number)\n}\n"
  }
};
})();

(node as any).hash = "acf6b4c44c88d5c85573fc274e730393";

export default node;
