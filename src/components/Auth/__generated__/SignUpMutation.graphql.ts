/**
 * @generated SignedSource<<83edb76ccc0c3cb61caca59c1e5a10eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RegisterInput = {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  tax_id: string;
};
export type SignUpMutation$variables = {
  registerInput?: RegisterInput | null | undefined;
};
export type SignUpMutation$data = {
  readonly register: {
    readonly createdAt: string;
    readonly email: string;
    readonly firstname: string;
    readonly id: string;
    readonly lastname: string | null | undefined;
    readonly tax_id: string;
    readonly token: string | null | undefined;
  };
};
export type SignUpMutation = {
  response: SignUpMutation$data;
  variables: SignUpMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "registerInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "registerInput",
        "variableName": "registerInput"
      }
    ],
    "concreteType": "PublicUser",
    "kind": "LinkedField",
    "name": "register",
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
    "name": "SignUpMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUpMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5e9b0415a048bc33a1d603600de9c6e7",
    "id": null,
    "metadata": {},
    "name": "SignUpMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpMutation(\n  $registerInput: RegisterInput\n) {\n  register(registerInput: $registerInput) {\n    id\n    firstname\n    lastname\n    email\n    tax_id\n    createdAt\n    token\n  }\n}\n"
  }
};
})();

(node as any).hash = "93744560282277f9706d23f8798abeca";

export default node;
