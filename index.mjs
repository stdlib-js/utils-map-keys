// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,n){var i,o,m;if("object"!=typeof s||null===s)throw new TypeError(r("invalid argument. First argument must be an object. Value: `%s`.",s));if(!t(n))throw new TypeError(r("invalid argument. Second argument must be a function. Value: `%s`.",n));for(o in i={},s)e(s,o)&&(i[o=n(o,m=s[o],s)]=m);return i}export{s as default};
//# sourceMappingURL=index.mjs.map
