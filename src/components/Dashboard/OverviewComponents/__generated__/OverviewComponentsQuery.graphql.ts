/**
 * @generated SignedSource<<862de1ac2b0d8536406b9bacd99764b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TransactionStatus = "CANCELLED" | "COMPLETED" | "DELETED" | "PENDING" | "%future added value";
export type TransactionType = "NORMAL" | "REQUEST" | "%future added value";
export type OverviewComponentsQuery$variables = {
  account_id: number;
};
export type OverviewComponentsQuery$data = {
  readonly getAllTransaction: ReadonlyArray<{
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
  } | null | undefined> | null | undefined;
  readonly transactionStats: {
    readonly total_received: number | null | undefined;
    readonly total_send: number | null | undefined;
  } | null | undefined;
};
export type OverviewComponentsQuery = {
  response: OverviewComponentsQuery$data;
  variables: OverviewComponentsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "account_id"
  }
],
v1 = {
  "kind": "Variable",
  "name": "account_id",
  "variableName": "account_id"
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "status",
    "value": "COMPLETED"
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
  "name": "description",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "account_number",
  "storageKey": null
},
v13 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/)
    ],
    "storageKey": null
  },
  (v12/*: any*/)
],
v14 = {
  "alias": null,
  "args": [
    (v1/*: any*/)
  ],
  "concreteType": "TransactionsStats",
  "kind": "LinkedField",
  "name": "transactionStats",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total_send",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total_received",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v15 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v3/*: any*/)
    ],
    "storageKey": null
  },
  (v12/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OverviewComponentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "getAllTransaction",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "sender",
            "plural": false,
            "selections": (v13/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "receiver",
            "plural": false,
            "selections": (v13/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v14/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OverviewComponentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "getAllTransaction",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "sender",
            "plural": false,
            "selections": (v15/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PublicAccount",
            "kind": "LinkedField",
            "name": "receiver",
            "plural": false,
            "selections": (v15/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v14/*: any*/)
    ]
  },
  "params": {
    "cacheID": "f458c1457621def7b91a15430dd30955",
    "id": null,
    "metadata": {},
    "name": "OverviewComponentsQuery",
    "operationKind": "query",
    "text": "query OverviewComponentsQuery(\n  $account_id: Int!\n) {\n  getAllTransaction(account_id: $account_id, status: COMPLETED) {\n    id\n    status\n    type\n    amount\n    description\n    createdAt\n    sender {\n      User {\n        firstname\n        lastname\n        email\n        id\n      }\n      account_number\n      id\n    }\n    receiver {\n      User {\n        firstname\n        lastname\n        email\n        id\n      }\n      account_number\n      id\n    }\n  }\n  transactionStats(account_id: $account_id) {\n    total_send\n    total_received\n  }\n}\n"
  }
};
})();

(node as any).hash = "c0987eb2573470bf62cd0611dcc42b32";

export default node;
