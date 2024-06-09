/**
 * @generated SignedSource<<f9a2ce5c82ea3f9ac5cf4ee8a4c0a780>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type TransactionsVerifySubscription$variables = {
  account_number: number;
};
export type TransactionsVerifySubscription$data = {
  readonly verify: boolean | null | undefined;
};
export type TransactionsVerifySubscription = {
  response: TransactionsVerifySubscription$data;
  variables: TransactionsVerifySubscription$variables;
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
    "name": "TransactionsVerifySubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TransactionsVerifySubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d419b3e93c0c62179295c21e65462700",
    "id": null,
    "metadata": {},
    "name": "TransactionsVerifySubscription",
    "operationKind": "subscription",
    "text": "subscription TransactionsVerifySubscription(\n  $account_number: Int!\n) {\n  verify(account_number: $account_number)\n}\n"
  }
};
})();

(node as any).hash = "8611c707cb0c194ad6f18d5555e7ecbe";

export default node;
