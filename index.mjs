// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=t,n=r,i=e;var o=function(t,r){var e,o,a;if("object"!=typeof t||null===t)throw new TypeError(i("invalid argument. First argument must be an object. Value: `%s`.",t));if(!s(r))throw new TypeError(i("invalid argument. Second argument must be a function. Value: `%s`.",r));for(o in e={},t)n(t,o)&&(e[o=r(o,a=t[o],t)]=a);return e};export{o as default};
//# sourceMappingURL=index.mjs.map
