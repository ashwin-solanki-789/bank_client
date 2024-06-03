/**
 * @generated SignedSource<<ffe0a1892a9dc6ec5a5a11c067148a53>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TransactionStatus = "CANCELLED" | "COMPLETED" | "DELETED" | "PENDING" | "%future added value";
export type TransactionType = "NORMAL" | "REQUEST" | "%future added value";
export type TransactionsMutation$variables = {
  account_id: number;
  length?: number | null | undefined;
  page_number?: number | null | undefined;
};
export type TransactionsMutation$data = {
  readonly paginationTransaction: {
    readonly Transactions: ReadonlyArray<{
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
    readonly page_number: number | null | undefined;
    readonly total: number | null | undefined;
  } | null | undefined;
};
export type TransactionsMutation = {
  response: TransactionsMutation$data;
  variables: TransactionsMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "account_id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "length"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page_number"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "account_id",
    "variableName": "account_id"
  },
  {
    "kind": "Variable",
    "name": "length",
    "variableName": "length"
  },
  {
    "kind": "Variable",
    "name": "page_number",
    "variableName": "page_number"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "total",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "page_number",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "account_number",
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
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/)
    ],
    "storageKey": null
  },
  (v13/*: any*/)
],
v15 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      (v4/*: any*/)
    ],
    "storageKey": null
  },
  (v13/*: any*/),
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TransactionsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PaginationData",
        "kind": "LinkedField",
        "name": "paginationTransaction",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Transaction",
            "kind": "LinkedField",
            "name": "Transactions",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
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
              {
                "alias": null,
                "args": null,
                "concreteType": "PublicAccount",
                "kind": "LinkedField",
                "name": "receiver",
                "plural": false,
                "selections": (v14/*: any*/),
                "storageKey": null
              }
            ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TransactionsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PaginationData",
        "kind": "LinkedField",
        "name": "paginationTransaction",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Transaction",
            "kind": "LinkedField",
            "name": "Transactions",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e7c6b21bea5d6021140ff021bea75482",
    "id": null,
    "metadata": {},
    "name": "TransactionsMutation",
    "operationKind": "mutation",
    "text": "mutation TransactionsMutation(\n  $account_id: Int!\n  $length: Int\n  $page_number: Int\n) {\n  paginationTransaction(account_id: $account_id, length: $length, page_number: $page_number) {\n    total\n    page_number\n    Transactions {\n      id\n      status\n      type\n      amount\n      description\n      createdAt\n      sender {\n        User {\n          firstname\n          lastname\n          email\n          id\n        }\n        account_number\n        id\n      }\n      receiver {\n        User {\n          firstname\n          lastname\n          email\n          id\n        }\n        account_number\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6c1cd415994630de0919f7cdaad2c73c";

export default node;
