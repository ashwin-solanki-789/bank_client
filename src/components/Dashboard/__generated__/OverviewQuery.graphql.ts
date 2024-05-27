/**
 * @generated SignedSource<<04f13cabf9ad8484ec3e3006b3647ddc>>
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
    readonly createdAt: string | null | undefined;
    readonly email: string;
    readonly firstname: string;
    readonly id: string;
    readonly tax_id: string;
  };
};
export type OverviewQuery = {
  response: OverviewQuery$data;
  variables: OverviewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getUser",
    "plural": false,
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
        "name": "firstname",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OverviewQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OverviewQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "89469f0888da49a3a35cced63e8f85a3",
    "id": null,
    "metadata": {},
    "name": "OverviewQuery",
    "operationKind": "query",
    "text": "query OverviewQuery {\n  getUser {\n    id\n    firstname\n    email\n    tax_id\n    createdAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "ffb14c7dc46700e2acd37b0b9552c88d";

export default node;
