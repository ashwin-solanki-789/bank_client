/**
 * @generated SignedSource<<aff69656701150b3a71ff3ec9815aea4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TransactionStatus = "CANCELLED" | "COMPLETED" | "DELETED" | "PENDING" | "%future added value";
export type TransactionType = "NORMAL" | "REQUEST" | "%future added value";
export type Transactions_UpdateMutation$variables = {
  status: TransactionStatus;
  transaction_id: string;
};
export type Transactions_UpdateMutation$data = {
  readonly updateTransaction: {
    readonly amount: number;
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
export type Transactions_UpdateMutation = {
  response: Transactions_UpdateMutation$data;
  variables: Transactions_UpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "status"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "transaction_id"
},
v2 = [
  {
    "kind": "Variable",
    "name": "status",
    "variableName": "status"
  },
  {
    "kind": "Variable",
    "name": "transaction_id",
    "variableName": "transaction_id"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "account_number",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v11 = [
  (v7/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/)
    ],
    "storageKey": null
  }
],
v12 = [
  (v7/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v3/*: any*/)
    ],
    "storageKey": null
  },
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Transactions_UpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "updateTransaction",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "sender",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "receiver",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "Transactions_UpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "updateTransaction",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5eb24df349d2fd834ad2526674d847f2",
    "id": null,
    "metadata": {},
    "name": "Transactions_UpdateMutation",
    "operationKind": "mutation",
    "text": "mutation Transactions_UpdateMutation(\n  $transaction_id: ID!\n  $status: TransactionStatus!\n) {\n  updateTransaction(transaction_id: $transaction_id, status: $status) {\n    id\n    status\n    type\n    amount\n    sender {\n      account_number\n      User {\n        firstname\n        lastname\n        email\n        id\n      }\n      id\n    }\n    receiver {\n      account_number\n      User {\n        firstname\n        lastname\n        email\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0d5a4d8b6d654d9f01e01a5ba1e04854";

export default node;
