/**
 * @generated SignedSource<<1e6b0bfb29bc56544c751a095809da2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateInput = {
  email: string;
  firstname: string;
  lastname: string;
};
export type ProfileEditMutation$variables = {
  UpdateInput: UpdateInput;
};
export type ProfileEditMutation$data = {
  readonly updateUser: {
    readonly email: string;
    readonly firstname: string;
    readonly id: string;
    readonly lastname: string;
  };
};
export type ProfileEditMutation = {
  response: ProfileEditMutation$data;
  variables: ProfileEditMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "UpdateInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "updateInput",
        "variableName": "UpdateInput"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "updateUser",
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
        "name": "email",
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
    "name": "ProfileEditMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfileEditMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "da9957d8c772e59ba32f58dd7bc34504",
    "id": null,
    "metadata": {},
    "name": "ProfileEditMutation",
    "operationKind": "mutation",
    "text": "mutation ProfileEditMutation(\n  $UpdateInput: UpdateInput!\n) {\n  updateUser(updateInput: $UpdateInput) {\n    id\n    email\n    firstname\n    lastname\n  }\n}\n"
  }
};
})();

(node as any).hash = "76d8729ecb529891f13aa6f6c19f1dd4";

export default node;
