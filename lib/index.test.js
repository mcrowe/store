"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const index_1 = require("./index");
ava_1.default('basics', t => {
    const store = new index_1.default({ a: 5 });
    const val = store.get();
    val.a = 6;
    t.is(store.get().a, 6);
    let calls = 0;
    store.subscribe(() => {
        calls += 1;
    });
    t.is(calls, 1);
});
