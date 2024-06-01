/**
 * @generated SignedSource<<d9b62d34030fdcb1b1725b100ff4690a>>
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
    readonly email: string;
    readonly firstname: string;
    readonly id: string;
    readonly lastname: string | null | undefined;
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
        "name": "token",
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
        "name": "lastname",
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
    "cacheID": "89dec2db8d83d7769bcfd2a780013f4a",
    "id": null,
    "metadata": {},
    "name": "SignInMutation",
    "operationKind": "mutation",
    "text": "mutation SignInMutation(\n  $userInput: LoginInput\n) {\n  login(userInput: $userInput) {\n    id\n    token\n    firstname\n    lastname\n    email\n    tax_id\n    createdAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "4e3d70fb9c316392a3ed6a597f8d1971";

export default node;
