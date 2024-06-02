/**
 * @generated SignedSource<<72c6763da6c39e70370889a487cdeaee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TransactionStatus = "CANCELLED" | "COMPLETED" | "DELETED" | "PENDING" | "%future added value";
export type TransactionType = "NORMAL" | "REQUEST" | "%future added value";
export type sendMoneyInput = {
  amount: number;
  description?: string | null | undefined;
  receiver: number;
  sender: number;
  type: TransactionType;
};
export type NewTransactionDialog_CreateMutation$variables = {
  sendMoneyInput: sendMoneyInput;
};
export type NewTransactionDialog_CreateMutation$data = {
  readonly createTransaction: {
    readonly amount: number;
    readonly description: string | null | undefined;
    readonly id: string;
    readonly receiver: {
      readonly User: {
        readonly email: string;
        readonly firstname: string;
        readonly lastname: string | null | undefined;
      };
      readonly account_number: number;
    };
    readonly sender: {
      readonly User: {
        readonly email: string;
        readonly firstname: string;
        readonly lastname: string | null | undefined;
      };
      readonly account_number: number;
    };
    readonly status: TransactionStatus;
    readonly type: TransactionType;
  };
};
export type NewTransactionDialog_CreateMutation = {
  response: NewTransactionDialog_CreateMutation$data;
  variables: NewTransactionDialog_CreateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sendMoneyInput"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "transaction_details",
    "variableName": "sendMoneyInput"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "account_number",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v7 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "storageKey": null
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v12 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v2/*: any*/)
    ],
    "storageKey": null
  },
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewTransactionDialog_CreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "createTransaction",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "sender",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "receiver",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NewTransactionDialog_CreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "createTransaction",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "sender",
            "plural": false,
            "selections": (v12/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "receiver",
            "plural": false,
            "selections": (v12/*: any*/),
            "storageKey": null
          },
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "396d5386e9aeedcc01e257e0a5adaa80",
    "id": null,
    "metadata": {},
    "name": "NewTransactionDialog_CreateMutation",
    "operationKind": "mutation",
    "text": "mutation NewTransactionDialog_CreateMutation(\n  $sendMoneyInput: sendMoneyInput!\n) {\n  createTransaction(transaction_details: $sendMoneyInput) {\n    id\n    sender {\n      account_number\n      User {\n        firstname\n        lastname\n        email\n        id\n      }\n      id\n    }\n    receiver {\n      account_number\n      User {\n        firstname\n        lastname\n        email\n        id\n      }\n      id\n    }\n    amount\n    type\n    status\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "26f9d379a0eeee82dc5e09e5cf3665c7";

export default node;
