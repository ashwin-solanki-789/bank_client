/**
 * @generated SignedSource<<42e18bbb2a9ff113bf91b94f8aedbf4a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type OverviewGreetingSubscription$variables = {
  email: string;
};
export type OverviewGreetingSubscription$data = {
  readonly greetings: string | null | undefined;
};
export type OverviewGreetingSubscription = {
  response: OverviewGreetingSubscription$data;
  variables: OverviewGreetingSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      }
    ],
    "kind": "ScalarField",
    "name": "greetings",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OverviewGreetingSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OverviewGreetingSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6ef066607375e6c2c7df0475ce35a62f",
    "id": null,
    "metadata": {},
    "name": "OverviewGreetingSubscription",
    "operationKind": "subscription",
    "text": "subscription OverviewGreetingSubscription(\n  $email: String!\n) {\n  greetings(email: $email)\n}\n"
  }
};
})();

(node as any).hash = "b55d0cc15c9ddb17fa24c95835f1ab46";

export default node;
