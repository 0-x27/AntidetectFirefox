// |reftest| skip -- jstests don't yet support module tests
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Binding is created and initialized to `undefined` for exported function
    declarations
esid: sec-moduledeclarationinstantiation
info: |
    [...]
    17. For each element d in lexDeclarations do
        a. For each element dn of the BoundNames of d do
           i. If IsConstantDeclaration of d is true, then
              [...]
           ii. Else,
               1. Perform ! envRec.CreateMutableBinding(dn, false).
    [...]
includes: [fnGlobalObject.js]
flags: [module]
---*/

var global = fnGlobalObject();

assert.sameValue(test262(), 23, 'initialized value');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);

test262 = null;

assert.sameValue(test262, null, 'binding is mutable');

export function test262() { return 23; }

reportCompare(0, 0);