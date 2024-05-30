/**
 * @generated SignedSource<<a5cfe28b2e934941357cbc796a1359c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LoginInput = {
  email: string;
  password: string;
};
export type SignInMutation$variables = {
  userInput?: LoginInput | null | undefined;
};
export type SignInMutation$data = {
  readonly login: {
    readonly createdAt: string;
    readonly firstname: string;
    readonly id: string;
    readonly tax_id: string;
    readonly token: string | null | undefined;
  };
};
export type SignInMutation = {
  response: SignInMutation$data;
  variables: SignInMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userInput",
        "variableName": "userInput"
      }
    ],
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "login",
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
        "name": "tax_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bc1825e75492a93ea8812a2c6e559971",
    "id": null,
    "metadata": {},
    "name": "SignInMutation",
    "operationKind": "mutation",
    "text": "mutation SignInMutation(\n  $userInput: LoginInput\n) {\n  login(userInput: $userInput) {\n    id\n    firstname\n    tax_id\n    createdAt\n    token\n  }\n}\n"
  }
};
})();

(node as any).hash = "df3b2a090239b907b7fe8a433a2520a7";

export default node;
