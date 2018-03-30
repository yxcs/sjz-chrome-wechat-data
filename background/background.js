/* axios v0.16.1 | (c) 2017 by Matt Zabriskie */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.axios=e():t.axios=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){var e=new s(t),r=i(s.prototype.request,e);return o.extend(r,s.prototype,e),o.extend(r,e),r}var o=r(2),i=r(7),s=r(8),u=r(9),f=n(u);f.Axios=s,f.create=function(t){return n(o.merge(u,t))},f.Cancel=r(26),f.CancelToken=r(27),f.isCancel=r(23),f.all=function(t){return Promise.all(t)},f.spread=r(28),t.exports=f,t.exports.default=f},function(t,e,r){(function(e){"use strict";function n(t){return"[object Array]"===_.call(t)}function o(t){return"undefined"!=typeof e&&e.isBuffer&&e.isBuffer(t)}function i(t){return"[object ArrayBuffer]"===_.call(t)}function s(t){return"undefined"!=typeof FormData&&t instanceof FormData}function u(t){var e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function f(t){return"string"==typeof t}function a(t){return"number"==typeof t}function c(t){return"undefined"==typeof t}function h(t){return null!==t&&"object"==typeof t}function p(t){return"[object Date]"===_.call(t)}function l(t){return"[object File]"===_.call(t)}function d(t){return"[object Blob]"===_.call(t)}function g(t){return"[object Function]"===_.call(t)}function y(t){return h(t)&&g(t.pipe)}function w(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function m(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function E(t,e){if(null!==t&&"undefined"!=typeof t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function A(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=A(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)E(arguments[r],t);return e}function b(t,e,r){return E(e,function(e,n){r&&"function"==typeof e?t[n]=R(e,r):t[n]=e}),t}var R=r(7),_=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:i,isBuffer:o,isFormData:s,isArrayBufferView:u,isString:f,isNumber:a,isObject:h,isUndefined:c,isDate:p,isFile:l,isBlob:d,isFunction:g,isStream:y,isURLSearchParams:w,isStandardBrowserEnv:m,forEach:E,merge:A,extend:b,trim:v}}).call(e,r(3).Buffer)},function(t,e,r){(function(t){
"use strict";function n(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function o(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(o()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=s.prototype):(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,r){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return u(this,t,e,r)}function u(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?l(t,e,r,n):"string"==typeof e?h(t,e,r):d(t,e)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function a(t,e,r,n){return f(e),e<=0?i(t,e):void 0!==r?"string"==typeof n?i(t,e).fill(r,n):i(t,e).fill(r):i(t,e)}function c(t,e){if(f(e),t=i(t,e<0?0:0|g(e)),!s.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function h(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!s.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|w(e,r);t=i(t,n);var o=t.write(e,r);return o!==n&&(t=t.slice(0,o)),t}function p(t,e){var r=e.length<0?0:0|g(e.length);t=i(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function l(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),s.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=s.prototype):t=p(t,e),t}function d(t,e){if(s.isBuffer(e)){var r=0|g(e.length);return t=i(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||G(e.length)?i(t,0):p(t,e);if("Buffer"===e.type&&W(e.data))return p(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function g(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),s.alloc(+t)}function w(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return H(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return $(t).length;default:if(n)return H(t).length;e=(""+e).toLowerCase(),n=!0}}function v(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return L(this,e,r);case"utf8":case"utf-8":return x(this,e,r);case"ascii":return C(this,e,r);case"latin1":case"binary":return I(this,e,r);case"base64":return P(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function m(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function E(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=s.from(e,n)),s.isBuffer(e))return 0===e.length?-1:A(t,e,r,n,o);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):A(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function A(t,e,r,n,o){function i(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,u=t.length,f=e.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,u/=2,f/=2,r/=2}var a;if(o){var c=-1;for(a=r;a<u;a++)if(i(t,a)===i(e,c===-1?0:a-c)){if(c===-1&&(c=a),a-c+1===f)return c*s}else c!==-1&&(a-=a-c),c=-1}else for(r+f>u&&(r=u-f),a=r;a>=0;a--){for(var h=!0,p=0;p<f;p++)if(i(t,a+p)!==i(e,p)){h=!1;break}if(h)return a}return-1}function b(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n),n>o&&(n=o)):n=o;var i=e.length;if(i%2!==0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var s=0;s<n;++s){var u=parseInt(e.substr(2*s,2),16);if(isNaN(u))return s;t[r+s]=u}return s}function R(t,e,r,n){return K(H(e,t.length-r),t,r,n)}function _(t,e,r,n){return K(V(e),t,r,n)}function T(t,e,r,n){return _(t,e,r,n)}function B(t,e,r,n){return K($(e),t,r,n)}function S(t,e,r,n){return K(J(e,t.length-r),t,r,n)}function P(t,e,r){return 0===e&&r===t.length?Z.fromByteArray(t):Z.fromByteArray(t.slice(e,r))}function x(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i=t[o],s=null,u=i>239?4:i>223?3:i>191?2:1;if(o+u<=r){var f,a,c,h;switch(u){case 1:i<128&&(s=i);break;case 2:f=t[o+1],128===(192&f)&&(h=(31&i)<<6|63&f,h>127&&(s=h));break;case 3:f=t[o+1],a=t[o+2],128===(192&f)&&128===(192&a)&&(h=(15&i)<<12|(63&f)<<6|63&a,h>2047&&(h<55296||h>57343)&&(s=h));break;case 4:f=t[o+1],a=t[o+2],c=t[o+3],128===(192&f)&&128===(192&a)&&128===(192&c)&&(h=(15&i)<<18|(63&f)<<12|(63&a)<<6|63&c,h>65535&&h<1114112&&(s=h))}}null===s?(s=65533,u=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),o+=u}return U(n)}function U(t){var e=t.length;if(e<=tt)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=tt));return r}function C(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function I(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function L(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=X(t[i]);return o}function O(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function Y(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function D(t,e,r,n,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function N(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function j(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function M(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function k(t,e,r,n,o){return o||M(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(t,e,r,n,23,4),r+4}function q(t,e,r,n,o){return o||M(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(t,e,r,n,52,8),r+8}function F(t){if(t=z(t).replace(et,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function X(t){return t<16?"0"+t.toString(16):t.toString(16)}function H(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function V(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function J(t,e){for(var r,n,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}function $(t){return Z.toByteArray(F(t))}function K(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function G(t){return t!==t}var Z=r(4),Q=r(5),W=r(6);e.Buffer=s,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:n(),e.kMaxLength=o(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,r){return u(null,t,e,r)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,r){return a(null,t,e,r)},s.allocUnsafe=function(t){return c(null,t)},s.allocUnsafeSlow=function(t){return c(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!W(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=s.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(!s.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},s.byteLength=w,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?x(this,0,t):v.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,r,n,o){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,u=r-e,f=Math.min(i,u),a=this.slice(n,o),c=t.slice(e,r),h=0;h<f;++h)if(a[h]!==c[h]){i=a[h],u=c[h];break}return i<u?-1:u<i?1:0},s.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},s.prototype.indexOf=function(t,e,r){return E(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return E(this,t,e,r,!1)},s.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return R(this,t,e,r);case"ascii":return _(this,t,e,r);case"latin1":case"binary":return T(this,t,e,r);case"base64":return B(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;s.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);var n;if(s.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=s.prototype;else{var o=e-t;n=new s(o,void 0);for(var i=0;i<o;++i)n[i]=this[i+t]}return n},s.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},s.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},s.prototype.readUInt8=function(t,e){return e||Y(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||Y(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||Y(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||Y(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||Y(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},s.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},s.prototype.readInt8=function(t,e){return e||Y(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},s.prototype.readInt16LE=function(t,e){e||Y(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(t,e){e||Y(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return e||Y(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||Y(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||Y(t,4,this.length),Q.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||Y(t,4,this.length),Q.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||Y(t,8,this.length),Q.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||Y(t,8,this.length),Q.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var o=Math.pow(2,8*r)-1;D(this,t,e,r,o,0)}var i=1,s=0;for(this[e]=255&t;++s<r&&(i*=256);)this[e+s]=t/i&255;return e+r},s.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var o=Math.pow(2,8*r)-1;D(this,t,e,r,o,0)}var i=r-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+r},s.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):N(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):N(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):j(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):j(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);D(this,t,e,r,o-1,-o)}var i=0,s=1,u=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/s>>0)-u&255;return e+r},s.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);D(this,t,e,r,o-1,-o)}var i=r-1,s=1,u=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/s>>0)-u&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):N(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):N(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):j(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):j(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,r){return k(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return k(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return q(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return q(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!s.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},s.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var i;if("number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var u=s.isBuffer(t)?t:H(new s(t,n).toString()),f=u.length;for(i=0;i<r-e;++i)this[i+e]=u[i%f]}return this};var et=/[^+\/0-9A-Za-z-_]/g}).call(e,function(){return this}())},function(t,e){"use strict";function r(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function n(t){return 3*t.length/4-r(t)}function o(t){var e,n,o,i,s,u,f=t.length;s=r(t),u=new c(3*f/4-s),o=s>0?f-4:f;var h=0;for(e=0,n=0;e<o;e+=4,n+=3)i=a[t.charCodeAt(e)]<<18|a[t.charCodeAt(e+1)]<<12|a[t.charCodeAt(e+2)]<<6|a[t.charCodeAt(e+3)],u[h++]=i>>16&255,u[h++]=i>>8&255,u[h++]=255&i;return 2===s?(i=a[t.charCodeAt(e)]<<2|a[t.charCodeAt(e+1)]>>4,u[h++]=255&i):1===s&&(i=a[t.charCodeAt(e)]<<10|a[t.charCodeAt(e+1)]<<4|a[t.charCodeAt(e+2)]>>2,u[h++]=i>>8&255,u[h++]=255&i),u}function i(t){return f[t>>18&63]+f[t>>12&63]+f[t>>6&63]+f[63&t]}function s(t,e,r){for(var n,o=[],s=e;s<r;s+=3)n=(t[s]<<16)+(t[s+1]<<8)+t[s+2],o.push(i(n));return o.join("")}function u(t){for(var e,r=t.length,n=r%3,o="",i=[],u=16383,a=0,c=r-n;a<c;a+=u)i.push(s(t,a,a+u>c?c:a+u));return 1===n?(e=t[r-1],o+=f[e>>2],o+=f[e<<4&63],o+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],o+=f[e>>10],o+=f[e>>4&63],o+=f[e<<2&63],o+="="),i.push(o),i.join("")}e.byteLength=n,e.toByteArray=o,e.fromByteArray=u;for(var f=[],a=[],c="undefined"!=typeof Uint8Array?Uint8Array:Array,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,l=h.length;p<l;++p)f[p]=h[p],a[h.charCodeAt(p)]=p;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,r,n,o){var i,s,u=8*o-n-1,f=(1<<u)-1,a=f>>1,c=-7,h=r?o-1:0,p=r?-1:1,l=t[e+h];for(h+=p,i=l&(1<<-c)-1,l>>=-c,c+=u;c>0;i=256*i+t[e+h],h+=p,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+t[e+h],h+=p,c-=8);if(0===i)i=1-a;else{if(i===f)return s?NaN:(l?-1:1)*(1/0);s+=Math.pow(2,n),i-=a}return(l?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,u,f,a=8*i-o-1,c=(1<<a)-1,h=c>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:i-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),e+=s+h>=1?p/f:p*Math.pow(2,1-h),e*f>=2&&(s++,f/=2),s+h>=c?(u=0,s=c):s+h>=1?(u=(e*f-1)*Math.pow(2,o),s+=h):(u=e*Math.pow(2,h-1)*Math.pow(2,o),s=0));o>=8;t[r+l]=255&u,l+=d,u/=256,o-=8);for(s=s<<o|u,a+=o;a>0;t[r+l]=255&s,l+=d,s/=256,a-=8);t[r+l-d]|=128*g}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=r(9),i=r(2),s=r(20),u=r(21),f=r(24),a=r(25);n.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!f(t.url)&&(t.url=a(t.baseURL,t.url));var e=[u,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},i.forEach(["delete","get","head","options"],function(t){n.prototype[t]=function(e,r){return this.request(i.merge(r||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(i.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},function(t,e,r){"use strict";function n(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!=typeof XMLHttpRequest?t=r(11):"undefined"!=typeof process&&(t=r(11)),t}var i=r(2),s=r(10),u={"Content-Type":"application/x-www-form-urlencoded"},f={adapter:o(),transformRequest:[function(t,e){return s(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};f.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){f.headers[t]={}}),i.forEach(["post","put","patch"],function(t){f.headers[t]=i.merge(u)}),t.exports=f},function(t,e,r){"use strict";var n=r(2);t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},function(t,e,r){"use strict";var n=r(2),o=r(12),i=r(15),s=r(16),u=r(17),f=r(13),a="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(18);t.exports=function(t){return new Promise(function(e,c){var h=t.data,p=t.headers;n.isFormData(h)&&delete p["Content-Type"];var l=new XMLHttpRequest,d="onreadystatechange",g=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||u(t.url)||(l=new window.XDomainRequest,d="onload",g=!0,l.onprogress=function(){},l.ontimeout=function(){}),t.auth){var y=t.auth.username||"",w=t.auth.password||"";p.Authorization="Basic "+a(y+":"+w)}if(l.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,l[d]=function(){if(l&&(4===l.readyState||g)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?l.response:l.responseText,i={data:n,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:r,config:t,request:l};o(e,c,i),l=null}},l.onerror=function(){c(f("Network Error",t)),l=null},l.ontimeout=function(){c(f("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),l=null},n.isStandardBrowserEnv()){var v=r(19),m=(t.withCredentials||u(t.url))&&t.xsrfCookieName?v.read(t.xsrfCookieName):void 0;m&&(p[t.xsrfHeaderName]=m)}if("setRequestHeader"in l&&n.forEach(p,function(t,e){"undefined"==typeof h&&"content-type"===e.toLowerCase()?delete p[e]:l.setRequestHeader(e,t)}),t.withCredentials&&(l.withCredentials=!0),t.responseType)try{l.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){l&&(l.abort(),c(t),l=null)}),void 0===h&&(h=null),l.send(h)})}},function(t,e,r){"use strict";var n=r(13);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r)):t(r)}},function(t,e,r){"use strict";var n=r(14);t.exports=function(t,e,r,o){var i=new Error(t);return n(i,e,r,o)}},function(t,e){"use strict";t.exports=function(t,e,r,n){return t.config=e,r&&(t.code=r),t.response=n,t}},function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(2);t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&"undefined"!=typeof t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))}))}),i=s.join("&")}return i&&(t+=(t.indexOf("?")===-1?"?":"&")+i),t}},function(t,e,r){"use strict";var n=r(2);t.exports=function(t){var e,r,o,i={};return t?(n.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=n.trim(t.substr(0,o)).toLowerCase(),r=n.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+r:r)}),i):i}},function(t,e,r){"use strict";var n=r(2);t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e){"use strict";function r(){this.message="String contains an invalid character"}function n(t){for(var e,n,i=String(t),s="",u=0,f=o;i.charAt(0|u)||(f="=",u%1);s+=f.charAt(63&e>>8-u%1*8)){if(n=i.charCodeAt(u+=.75),n>255)throw new r;e=e<<8|n}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=n},function(t,e,r){"use strict";var n=r(2);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,s){var u=[];u.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(o)&&u.push("path="+o),n.isString(i)&&u.push("domain="+i),s===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r(2);n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r(2),i=r(22),s=r(23),u=r(9);t.exports=function(t){n(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||u.adapter;return e(t).then(function(e){return n(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(n(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,r){"use strict";var n=r(2);t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},function(t,e){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,r){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r(26);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t,e=new n(function(e){t=e});return{token:e,cancel:t}},t.exports=n},function(t,e){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}}])});
//# sourceMappingURL=axios.min.map

// 财务转账地址
const financingUrl = 'https://a.weixin.qq.com/financing';
let baseUrl = 'http://popularize-restapi.hzdongwu.com';
let baseWs = 'ws://183.131.0.28:10000';
// baseUrl = 'http://10.8.85.2:8081';
// baseWs = 'ws://10.8.85.2:10000';

let g_tk = null;
let isLogin = false;
let isServerLogin = false;
let sendAlert = false;
let isLoading = false;
let qrcodeUrl = null;
let logoutOperate = false;
let contentCookie = '';
let sessionInterval = null;
let connection = true;  // 判断websocket链接是否正常
let adminAccount = '';  // 用户名

// 获取notification权限
if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}

// 建立websockt链接
let globalSocket = null;
initWebSocket();
websocktHeartbit();

// 周期性重启socket
setInterval(_ => {
  initWebSocket();
}, 2 * 3600 * 1000);

// 开启循环任务，当登录成功会调用接口
getRecord();
uploadBalance();

chrome.webRequest.onCompleted.addListener(async details => {
  if (!isLogin && details.url.split('?').length > 1) {
    sendAlert = false;
    let params = parseUrlToObj(details.url.split('?')[1], '&');
    if (params.g_tk && !logoutOperate) {
      g_tk = params.g_tk;
      isLogin = true;
      contentCookie = '';

      // 获取用户信息
      g_tk && await getAccount();

      adminAccount && globalSocket && globalSocket.readyState === 1 && globalSocket.send(JSON.stringify({
        sendId: -1,
        action: 'login',
        requestType: 'request',
        status: 1,
        error: null,
        data: adminAccount
      }))

      // 成功获取接口所需参数，开始任务
      // 开始之后，新开tab保持登陆
      // 先关掉原有tab
      adminAccount && chrome.tabs.query({
        url: 'https://a.weixin.qq.com/*'
      }, tabs => {
        tabs.forEach(tab => {
          chrome.tabs.remove(tab.id)
        })
        let url = isLogin ?
          'https://a.weixin.qq.com/client?type=heartbit' :
          'https://a.weixin.qq.com/index.html#/login-0';
        chrome.tabs.create({
          url: url
        }, tab => {
          setTimeout(_ => {
            // 开始上传任务
            new Notification('开始上传爬取数据！')

            // 发送消息，回传页面的cookie
            chrome.tabs.sendMessage(tab.id, {
              type: 'get-cookie'
            })

            // 接收页面回传的cookie
            chrome.runtime.onMessage.addListener(msg => {
              if (msg.type === 'get-cookie') {
                contentCookie = msg.data;

                // 重置保持登陆的页面刷新
                clearInterval(sessionInterval);
                sessionInterval = setInterval(_ => {
                  chrome.tabs.query({
                    url: 'https://a.weixin.qq.com/*'
                  }, tabs => {
                    tabs.forEach(tab => {
                      chrome.tabs.remove(tab.id)
                    })
                    let url = isLogin ?
                      'https://a.weixin.qq.com/client?type=heartbit' :
                      'https://a.weixin.qq.com/index.html#/login-0';
                    chrome.tabs.create({
                      url: url
                    })
                  });
                }, 3600 * 1000)
              }
            })
          }, 2000)
        })
      })
    }
  }

  if (details.url.indexOf('https://open.weixin.qq.com/connect/qrcode/') === 0) {
    qrcodeUrl = details.url
  }
}, {
  urls: ['https://a.weixin.qq.com/cgi-bin/agency/getAgentAdMasterInfoList*',
  'https://open.weixin.qq.com/connect/qrcode/*',
  'https://a.weixin.qq.com/adres/htmledition/tpl/agency/login-0.tpl']
})

chrome.runtime.onMessage.addListener(message => {
  if (message.type === 'CHANGE_ENV') {
    if (message.env === 'PRODUCTION') {
      baseUrl = 'http://popularize-restapi.hzdongwu.com';
      baseWs = 'ws://183.131.0.28:10000';
      initWebSocket();
    } else if (message.env === 'TEST') {
      baseUrl = 'http://10.8.85.2:8081';
      baseWs = 'ws://10.8.85.2:10000';
      initWebSocket();
    }
  }
})

/**
 * @desc async/await 构建的异步过程同步调用的方法，定期上传充值记录
 */
async function getRecord () {
  while (true) {
    try {
      if (isLogin && adminAccount.length !== 0) {
        let balanceItems = [];
        let startTime = null;
        let lastTime = null;
        let endTime = null;

        // 每次爬取并上传记录之前，需要获取系统最近一次记录的时间
        let res = await fetch(`${baseUrl}/recharge/getLastRecordTime/adminAccount=${adminAccount}`);
        let timeData = await res.json();
        if (timeData.status === 1) {
          timeData.data ? startTime = new Date(timeData.data).toLocaleDateString() : startTime = new Date(Date.now() - 370 * 24 * 3600 * 1000).toLocaleDateString()
          lastTime = startTime;
          endTime = new Date().toLocaleDateString();

          // 假分页
          let wxRes =
            await fetch(
              `https://a.weixin.qq.com/cgi-bin/agency/checkAgentAccountRecords?cmdID=2&serviceID=&startTime=${startTime}&endTime=${endTime}&page=${1}&page_size=${1000}&from=1&g_tk=${g_tk}&_=${Date.now()}`,
              {
                method: 'GET',
                credentials: 'include'
              }
            )
          let listData = await wxRes.json();
          let list = [];

          // 判断微信接口返回是否正常
          if (listData.ret === 1201) {
            isLogin = false;
            throw new Error('账号退出登录');
          }
          if (!listData.list) {
            console.log('调用腾讯接口出错')
            console.log(listData)
          } else {
            list = list.concat(listData.list)
          }
          list && list.forEach(item => {

            // 该记录在上次截止时间之后方为有效
            if (new Date(item.time * 1000) > new Date(lastTime)) {
              balanceItems.push({
                gzhName: item.openName,
                billno: item.billno,
                balance: item.money,
                rechargeTime: item.time * 1000
              })
            }
          });

          // 开始上传所有合法充值记录
          let updateRecharge = await axios(`${baseUrl}/recharge/save`, {
            method: 'POST',
            data: {
              balanceItems: balanceItems,
              adminAccount
            }
          })
        } else {
          new Notification(data.details || '系统异常');
        }
      }
      await sleep(60000);
    } catch (error) {
      console.error(`${new Date().toLocaleString()} 上传充值记录异常`)
      console.trace(error)

      // 调用异常警报接口
      !sendAlert && axios(`${baseUrl}/warning/recharge`, {
        method: 'POST',
        data: {
          key: 123456,
          adminAccount,
        }
      }).then(res => {
        if (res.data.status === 1) {
          if (res.data.data) {
            sendAlert = true;
          }
        }
      })
      sendAlert = true;
      await sleep(60000);
    }
  }
}

/**
 * @desc 定期上传余额
 */
async function uploadBalance () {
  let page = 1;
  let pageSize = 20;

  while (true) {
    // 真分页
    try {
      if (isLogin && adminAccount.length !== 0) {
        let hasMoreBalance = true;
        let hasMoreCost = true;
        let startTime = new Date().toLocaleDateString();
        let endTime = new Date().toLocaleDateString();
        let balances = [];
        let costs = [];

        // 开始获取当天所有的账户余额
        while (hasMoreBalance) {
          // 获取微信余额
          let wxBalance =
          await fetch(
            `https://a.weixin.qq.com/cgi-bin/agency/getAccountMetrics?cmdID=0&serviceID=&startTime=${startTime}&endTime=${endTime}&page=${page}&page_size=${pageSize}&from=1&g_tk=${g_tk}&_=${Date.now()}`,
            {
              method: 'GET',
              credentials: 'include'
            }
          )
          let balanceList = await wxBalance.json();

          let pageInfo = {
            page: 1,
            page_size: 10,
            total: 0,
          };

          // 判断微信登录是否异常
          if (balanceList.ret === 1201) {
            isLogin = false;
            throw new Error('账号退出登录');
          }
          if (!balanceList.list) {
            console.log('调用腾讯接口出错!');
            console.log(balanceList);
          } else {
            balances = balances.concat(balanceList.list);
            pageInfo = balanceList.page_info
          }

          if (pageInfo.page * pageInfo.page_size <= pageInfo.total) {
            page++
            hasMoreBalance = true;
          } else {
            page = 1;
            hasMoreBalance = false;
          }
        }

        while (hasMoreCost) {
          // 获取账户今日花费
          let beginTime = new Date(new Date().toLocaleDateString()).getTime() / 1000;
          let endTime = (beginTime * 1000 + 24 * 3600 * 1000 - 60 * 1000) / 1000;
          let args = {
            agency_id: parseUrlToObj(contentCookie, ';').agency_id,
            wxname: '',
            begin_time: beginTime,
            end_time: endTime,
            report_type: 1,
            dimension: 1,
            page_info: {
              page: page,
              page_size: pageSize
            }
          }
          let wxCost =
            await fetch(
              `https://a.weixin.qq.com/cgi-bin/agency/get_report?args=${JSON.stringify(args)}&g_tk=${g_tk}&_=${Date.now()}`, {
                method: 'GET',
                credentials: 'include'
              }
            )
          let costList = await wxCost.json();
          costs = costs.concat(costList.records);
          let pageInfo = costList.page_info;
          if (pageInfo.page * pageInfo.page_size <= pageInfo.total) {
            page++;
            hasMoreCost = true;
          } else {
            page = 1;
            hasMoreCost = false;
          }
        }
        let leftMoneyItems = [];
        let todayCosts = [];

        balances.forEach(async item => {
          leftMoneyItems.push({
            gzhName: item.name,
            balance: item.balance,
            currentTime: Date.now()
          })
        })
        costs.forEach(async cost => {
          todayCosts.push({
            gzhName: cost.name,
            todayCost: cost.cost
          })
        })

        let uploadBalance = await axios(`${baseUrl}/popularize/balance/saveCurrent`, {
          method: 'POST',
          data: {
            balanceItems: leftMoneyItems
          }
        })
        let uploadCosts = await axios(`${baseUrl}/popularize/cost/saveCurrent`, {
          method: 'POST',
          data: {
            balanceItems: todayCosts
          }
        })
      }
      await sleep(50000);
    } catch (error) {
      console.error(`${new Date().toLocaleString()} 上传账户余额异常`)
      console.trace(error)

      // 调用异常警报接口
      !sendAlert && axios(`${baseUrl}/warning/recharge`, {
        method: 'POST',
        data: {
          key: 123456,
          adminAccount,
        }
      }).then(res => {
        if (res.data.status === 1) {
          if (res.data.data) {
            sendAlert = true;
          }
        }
      })
      sendAlert = true;
      await sleep(50000);
    }
  }
}

/**
 * @desc 暂停timeLog毫秒时间
 * @param {Long} timeLog
 */
function sleep (timeLog) {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      resolve();
    }, timeLog)
  })
}

/**
 *
 * @param {string} search
 * @param {string} code the key string code to split the search string
 */
function parseUrlToObj (search, code) {
  let obj = {};
  let objArr = search.split(code);
  objArr.forEach(item => {
    item = item.trim();
    let params = item.split('=');
    if (params.length === 2) {
      obj[params[0]] = params[1];
    }
  })
  return obj;
}

/**
 * @desc 判断登录状态
 */
function checkLoginStatus () {
  return new Promise((resolve, reject) => {

    // 关闭所有的服务商窗口
    chrome.tabs.query({
      url: 'https://a.weixin.qq.com/*'
    }, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.remove(tab.id)
      })

      // 新开一个tab
      chrome.tabs.create({
        url: 'https://a.weixin.qq.com/index.html#/login-0'
      }, tab => {

        setTimeout(_ => {
          // 发消息让content去检查是否有登录框
          chrome.tabs.sendMessage(tab.id, {
            type: 'check-login'
          })
        }, 2000)
      })
    })

    chrome.runtime.onMessage.addListener(req => {
      if (req.type === 'check-login') {
        if (!req.login) {
          resolve({
            isLogin: false,
            data: qrcodeUrl
          })
        } else {
          resolve({
            isLogin: true,
            data: null
          })
        }
      }
    })
  })
}

/**
 * @desc 主动退出登录
 */
function exitAdmin () {

  // 关闭所有微信服务商tab
  return new Promise((resolve, reject) => {
    chrome.tabs.query({
      url: 'https://a.weixin.qq.com/*'
    }, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.remove(tab.id)
      })

      // 打开登录页
      chrome.tabs.create({
        url: 'https://a.weixin.qq.com'
      }, tab => {

        setTimeout(_ => {
          chrome.tabs.sendMessage(tab.id, {
            type: 'exit-account'
          })
        }, 2000)
      })
    })

    // 监听账号退出情况
    chrome.runtime.onMessage.addListener(req => {
      if (req.type === 'exit-account') {
        // 是退出操作
        logoutOperate = true;

        // 退出成功
        if (req.exit) {
          resolve({
            exit: true
          })
        } else {
          resolve({
            exit: false
          })
        }
      }
    })
  })
}

/**
 * @desc 初始化或重启websocket
 */
function initWebSocket () {
  // 关闭后重启
  if (globalSocket) {
    globalSocket.close();
    // 当成功关闭websocket连接后再开启新的连接
    globalSocket.addEventListener('close', event => {
      console.log('socket连接关闭成功！')
      globalSocket = null;
      if (!globalSocket) {
        globalSocket = new WebSocket(baseWs);
      }
      globalSocket && attachEvents()
    })
  } else {
    globalSocket = new WebSocket(baseWs);
    globalSocket && attachEvents()
  }
}

function attachEvents () {
  globalSocket.addEventListener('open', event => {
    new Notification('WebSocket连接开启成功！')
    console.log(`${new Date().toLocaleString()} WebSocket连接开启成功！`)

    // 检查目标页面是否已经打开
    const contains = false
    chrome.tabs.query({
      url: '<all_urls>'
    }, tabs => {
      tabs.forEach(tab => {
        if (tab.url.indexOf('a.weixin.qq.com/client') !== -1) {
          contains = true
        }
      })
      if (!contains) {
        chrome.tabs.create({
          url: 'https://a.weixin.qq.com/client?type=heartbit'
        })
      }
    })

    // 重新服务端登录
    adminAccount && globalSocket && globalSocket.send(JSON.stringify({
      sendId: -1,
      action: 'login',
      requestType: 'request',
      status: 1,
      error: null,
      data: adminAccount
    }))

    // 初始化同步量
    isLoading = false;
    logoutOperate = false;

    // 重开服务商页面，开启上传
    chrome.tabs.query({
      url: 'https://a.weixin.qq.com/*'
    }, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.remove(tab.id);
      });
      let url = isLogin ?
        'https://a.weixin.qq.com/client?type=heartbit' :
        'https://a.weixin.qq.com/index.html#/login-0';
      chrome.tabs.create({
        url: url
      })
    })

    globalSocket.onmessage = async res => {
      try {
        const data = JSON.parse(res.data)
        switch (data.action) {
          case 'getWeixinAdminQrcode':

            if (!isLoading) {
              isLoading = true;

              // 30s后强制设置任务状态为已结束
              setTimeout(_ => {
                isLoading = false;
              }, 30 * 1000);

              // check login status
              let res = await checkLoginStatus();

              if (res.isLogin) {
                globalSocket.send(JSON.stringify({
                  adminAccount,
                  sendId: data.sendId,
                  action: data.action,
                  requestType: 'response',
                  status: 10002,
                  error: '服务商微信账号登陆状态正常',
                  data: res.data
                }))
              } else {
                if (res.data) {
                  globalSocket.send(JSON.stringify({
                    adminAccount,
                    sendId: data.sendId,
                    action: data.action,
                    requestType: 'response',
                    status: 200,
                    error: '获取二维码成功',
                    data: res.data
                  }))
                } else {
                  globalSocket.send(JSON.stringify({
                    adminAccount,
                    sendId: data.sendId,
                    action: data.action,
                    requestType: 'response',
                    status: 10001,
                    error: '获取二维码失败',
                    data: res.data
                  }))
                }
              }
              isLoading = false;
            } else {
              globalSocket.send(JSON.stringify({
                adminAccount,
                sendId: data.sendId,
                action: data.action,
                requestType: 'response',
                status: 10001,
                error: '获取二维码失败，当前有其他用户正在操作，请稍后再试',
                data: null
              }))
            }
            break;
          case 'exitWeixinAdmin':

            // start exit
            let exitResult = await exitAdmin();
            logoutOperate = false;

            // 退出成功
            if (exitResult.exit) {
              globalSocket.send(JSON.stringify({
                adminAccount,
                sendId: data.sendId,
                action: data.action,
                requestType: 'response',
                status: 200,
                error: '退出微信服务商后台成功',
                data: null
              }))

              // 发送预警，获取登录二维码链接
              // 调用异常警报接口
              !sendAlert && axios(`${baseUrl}/warning/recharge`, {
                method: 'POST',
                data: {
                  key: 123456,
                  adminAccount
                }
              }).then(res => {
                if (res.data.status === 1) {
                  if (res.data.data) {
                    sendAlert = true;
                  }
                }
                console.log(`${new Date().toLocaleString()} 主动退出成功，预警接口调用成功`)
              }).catch(e => {
                console.log(`${new Date().toLocaleString()} 预警接口调用失败`)
              })
            }
            break;
          case 'pingPong':
            if (data.data) {
              connection = true;
            }
            break;
          case 'login':
            if (data.data === adminAccount) {
              isServerLogin = true;
            } else {
              isServerLogin = false;
            }
            break;
          default:
            break;
        }
      } catch (error) {
        isLoading = false;
      }
    }
  })

  globalSocket.addEventListener('error', error => {
    console.log(`${new Date().toLocaleString()}`);
    console.trace(error);
  })
}

/**
 * @desc websocket ping/pong心跳
 */
async function websocktHeartbit () {
  while (true) {
    try {
      if (globalSocket.readyState === 1) {
        connection = false;
        globalSocket.send(JSON.stringify({
          action: 'pingPong',
          requestType: 'request',
          status: 200,
          error: null,
          data: true
        }));
        await sleep(10000);
        if (connection) {

          // 链接正常，收到请求
        } else {

          // 连接异常，重启socket
          initWebSocket();
        }
      } else if (globalSocket.readyState === 3) {

        // 连接异常，重启socket
        initWebSocket();
      } else {
        await sleep(10000);
      }
    } catch (error) {
      console.trace(error)
      await sleep(10000);

      // 连接异常，重启socket
      initWebSocket();
    }
  }
}

/**
 * @desc 登录成功后获取用户信息
 */
async function getAccount () {
  try {
    let accountResponse = await fetch(
      `https://a.weixin.qq.com/cgi-bin/agency/check_login?g_tk=${g_tk}&_=${Date.now()}`, {
        method: 'GET',
        credentials: 'include'
      }
    );
    let accountData = await accountResponse.json();
    if (accountData && accountData.data.length >= 1 && accountData.data[0].agencyname) {
      adminAccount = accountData.data[0].agencyname;
      localStorage.setItem('adminAccount', adminAccount);
    } else {
      adminAccount = localStorage.getItem('adminAccount');
    }
  } catch (error) {
    console.error(error);

    // 如果调用接口失败，读取缓存的adminAccount值
    adminAccount = localStorage.getItem('adminAccount');
  }
}