/**
 * @generated SignedSource<<49f0267c24f0ab52e03261a9c1d8cbcf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type OverviewGreetingSubscription$variables = Record<PropertyKey, never>;
export type OverviewGreetingSubscription$data = {
  readonly greetings: {
    readonly data: string | null | undefined;
  } | null | undefined;
};
export type OverviewGreetingSubscription = {
  response: OverviewGreetingSubscription$data;
  variables: OverviewGreetingSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "msg",
    "kind": "LinkedField",
    "name": "greetings",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "data",
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
    "name": "OverviewGreetingSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OverviewGreetingSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2a4dfff61505329aeb7cf81078e6d0ec",
    "id": null,
    "metadata": {},
    "name": "OverviewGreetingSubscription",
    "operationKind": "subscription",
    "text": "subscription OverviewGreetingSubscription {\n  greetings {\n    data\n  }\n}\n"
  }
};
})();

(node as any).hash = "fc4cee72e7815efa8f7d9f2b2d210235";

export default node;
