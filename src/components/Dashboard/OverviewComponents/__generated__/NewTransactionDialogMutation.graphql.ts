/**
 * @generated SignedSource<<4529698f6de3ac7a352471051039c50b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type NewTransactionDialogMutation$variables = {
  account_number: number;
};
export type NewTransactionDialogMutation$data = {
  readonly verifyAccount: boolean;
};
export type NewTransactionDialogMutation = {
  response: NewTransactionDialogMutation$data;
  variables: NewTransactionDialogMutation$variables;
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
    "name": "verifyAccount",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewTransactionDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NewTransactionDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4f6f75edf7b0185ce7ac5abbd80414c9",
    "id": null,
    "metadata": {},
    "name": "NewTransactionDialogMutation",
    "operationKind": "mutation",
    "text": "mutation NewTransactionDialogMutation(\n  $account_number: Int!\n) {\n  verifyAccount(account_number: $account_number)\n}\n"
  }
};
})();

(node as any).hash = "a575f6ddd5c6e55b5e6d2e066907fc93";

export default node;
