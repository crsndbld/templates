/**
 * @generated SignedSource<<8aaa33dd2b6c36cac7602b0a1b27ec0e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProductListQuery$variables = {};
export type ProductListQuery$data = {
  readonly node: {
    readonly id?: string;
    readonly name?: string;
    readonly createdat?: any;
    readonly updatedat?: any;
  } | null;
};
export type ProductListQuery = {
  variables: ProductListQuery$variables;
  response: ProductListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "WzEsICJlY29tbWVyY2UiLCAicHJvZHVjdHMiLCAiNDQ5MmNmNzktMjM3NC00YTczLWFhNTAtYTUzZjMwMzgyYWRlIl0="
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdat",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedat",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "type": "ecommerce_products",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"WzEsICJlY29tbWVyY2UiLCAicHJvZHVjdHMiLCAiNDQ5MmNmNzktMjM3NC00YTczLWFhNTAtYTUzZjMwMzgyYWRlIl0=\")"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProductListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "type": "ecommerce_products",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"WzEsICJlY29tbWVyY2UiLCAicHJvZHVjdHMiLCAiNDQ5MmNmNzktMjM3NC00YTczLWFhNTAtYTUzZjMwMzgyYWRlIl0=\")"
      }
    ]
  },
  "params": {
    "cacheID": "eeb93381cb88793e9d30b751bca5a1b1",
    "id": null,
    "metadata": {},
    "name": "ProductListQuery",
    "operationKind": "query",
    "text": "query ProductListQuery {\n  node(id: \"WzEsICJlY29tbWVyY2UiLCAicHJvZHVjdHMiLCAiNDQ5MmNmNzktMjM3NC00YTczLWFhNTAtYTUzZjMwMzgyYWRlIl0=\") {\n    __typename\n    ... on ecommerce_products {\n      id\n      name\n      createdat\n      updatedat\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d67eee24e5028fc32ada243693e5c0b3";

export default node;
