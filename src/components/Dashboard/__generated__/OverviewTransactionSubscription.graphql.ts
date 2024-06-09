/**
 * @generated SignedSource<<a1d6f0533bfdcd7f6267205c3a90cf16>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type TransactionStatus = "CANCELLED" | "COMPLETED" | "DELETED" | "PENDING" | "%future added value";
export type TransactionType = "NORMAL" | "REQUEST" | "%future added value";
export type OverviewTransactionSubscription$variables = {
  account_number: number;
};
export type OverviewTransactionSubscription$data = {
  readonly transactionSub: {
    readonly amount: number;
    readonly createdAt: string | null | undefined;
    readonly description: string | null | undefined;
    readonly id: string;
    readonly receiver: {
      readonly User: {
        readonly email: string;
        readonly firstname: string;
        readonly lastname: string | null | undefined;
      };
    };
    readonly receiverId: number;
    readonly sender: {
      readonly User: {
        readonly email: string;
        readonly firstname: string;
        readonly lastname: string | null | undefined;
      };
    };
    readonly senderId: number;
    readonly status: TransactionStatus;
    readonly type: TransactionType;
  } | null | undefined;
};
export type OverviewTransactionSubscription = {
  response: OverviewTransactionSubscription$data;
  variables: OverviewTransactionSubscription$variables;
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
    "kind": "Variable",
    "name": "account_number",
    "variableName": "account_number"
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
  "name": "type",
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
  "name": "amount",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/)
    ],
    "storageKey": null
  }
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "senderId",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "receiverId",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v14 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
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
    "name": "OverviewTransactionSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "transactionSub",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "sender",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "receiver",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OverviewTransactionSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "transactionSub",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "sender",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": null
          },
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "receiver",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d5a7c9f9512a3300e0b170f6bf73782d",
    "id": null,
    "metadata": {},
    "name": "OverviewTransactionSubscription",
    "operationKind": "subscription",
    "text": "subscription OverviewTransactionSubscription(\n  $account_number: Int!\n) {\n  transactionSub(account_number: $account_number) {\n    id\n    type\n    status\n    amount\n    sender {\n      User {\n        firstname\n        lastname\n        email\n        id\n      }\n      id\n    }\n    senderId\n    receiver {\n      User {\n        firstname\n        lastname\n        email\n        id\n      }\n      id\n    }\n    receiverId\n    description\n    createdAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "1e8457bbd049220f5143c841968d008b";

export default node;
