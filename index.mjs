// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function e(e,o){var n,i,d;if("object"!=typeof e||null===e)throw new TypeError(s("0kV3X",e));if(!r(o))throw new TypeError(s("0kV2S",o));for(i in n={},e)t(e,i)&&(n[i=o(i,d=e[i],e)]=d);return n}export{e as default};
//# sourceMappingURL=index.mjs.map
