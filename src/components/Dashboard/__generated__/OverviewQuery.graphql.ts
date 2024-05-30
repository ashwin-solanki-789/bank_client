/**
 * @generated SignedSource<<59dc7aca354b6a1b2b10a07dfc2795b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type OverviewQuery$variables = Record<PropertyKey, never>;
export type OverviewQuery$data = {
  readonly getUser: {
    readonly email?: string;
    readonly id?: string;
    readonly message?: string;
    readonly status_code?: number;
    readonly tax_id?: string;
  };
};
export type OverviewQuery = {
  response: OverviewQuery$data;
  variables: OverviewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tax_id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
},
v1 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status_code",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "Error",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OverviewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "getUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OverviewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "getUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b6fc0beee5b71d93c1cd404d89875863",
    "id": null,
    "metadata": {},
    "name": "OverviewQuery",
    "operationKind": "query",
    "text": "query OverviewQuery {\n  getUser {\n    __typename\n    ... on User {\n      id\n      email\n      tax_id\n    }\n    ... on Error {\n      status_code\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b2825491dc9407904adfc16f85414981";

export default node;
