!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).PNotifyFontAwesome5Fix={})}(this,(function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?c(t):n}function f(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=o(t);if(n){var i=o(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return u(this,e)}}function a(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function s(){}function p(t){return t()}function y(){return Object.create(null)}function d(t){t.forEach(p)}function h(t){return"function"==typeof t}function b(t,e){return t!=t?e==e:t!==e||t&&"object"===n(t)||"function"==typeof t}function g(t){t.parentNode.removeChild(t)}function m(t){return Array.from(t.childNodes)}var v;function $(t){v=t}function _(t){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_destroy.push(t)}var k=[],w=[],x=[],O=[],j=Promise.resolve(),S=!1;function I(){S||(S=!0,j.then(T))}function P(){return I(),j}function A(t){x.push(t)}var E=!1,R=new Set;function T(){if(!E){E=!0;do{for(var t=0;t<k.length;t+=1){var n=k[t];$(n),C(n.$$)}for($(null),k.length=0;w.length;)w.pop()();for(var e=0;e<x.length;e+=1){var r=x[e];R.has(r)||(R.add(r),r())}x.length=0}while(k.length);for(;O.length;)O.pop()();S=!1,E=!1,R.clear()}}function C(t){if(null!==t.fragment){t.update(),d(t.before_update);var n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}var F=new Set;function M(t,n){t&&t.i&&(F.delete(t),t.i(n))}function N(t,n,e){var r=t.$$,o=r.fragment,i=r.on_mount,c=r.on_destroy,u=r.after_update;o&&o.m(n,e),A((function(){var n=i.map(p).filter(h);c?c.push.apply(c,a(n)):d(n),t.$$.on_mount=[]})),u.forEach(A)}function D(t,n){-1===t.$$.dirty[0]&&(k.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(t,n,e){var r,o,i,c=n.self,u=void 0===c?null:c,f=!1,a=!1,l=(u.icon,!0===u.icon?u.getIcon(u.type):u.icon),s="".concat(u.getIcon("sticker")," ").concat(u.hide?u.getIcon("unstuck"):u.getIcon("stuck")),p=u.on("pnotify:update",(function(){f||(r=u.icon,(o=!0===u.icon?u.getIcon(u.type):u.icon)!==l&&("string"==typeof o&&o.match(/(^| )fa[srlb]($| )/)||"string"==typeof l&&l.match(/(^| )fa[srlb]($| )/))?(e(0,u.icon=!1,u),f=!0,P().then((function(){e(0,u.icon=r,u),f=!1,r,l=o}))):(r,l=o))})),y=u.on("pnotify:update",(function(){a||(i="".concat(u.getIcon("sticker")," ").concat(u.hide?u.getIcon("unstuck"):u.getIcon("stuck")),u.sticker&&i!==s&&"string"==typeof i&&i.match(/(^| )fa[srlb]($| )/)?(e(0,u.sticker=!1,u),a=!0,P().then((function(){e(0,u.sticker=!0,u),a=!1,s=i}))):s=i)}));return _((function(){p&&p(),y&&y()})),t.$$set=function(t){"self"in t&&e(0,u=t.self)},[u]}var z=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(r,t);var n=f(r);function r(t){var o;return e(this,r),function(t,n,e,r,o,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=v;$(t);var f=n.props||{},a=t.$$={fragment:null,ctx:null,props:i,update:s,not_equal:o,bound:y(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:y(),dirty:c,skip_bound:!1},l=!1;if(a.ctx=e?e(t,f,(function(n,e){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:e;return a.ctx&&o(a.ctx[n],a.ctx[n]=r)&&(!a.skip_bound&&a.bound[n]&&a.bound[n](r),l&&D(t,n)),e})):[],a.update(),l=!0,d(a.before_update),a.fragment=!!r&&r(a.ctx),n.target){if(n.hydrate){var p=m(n.target);a.fragment&&a.fragment.l(p),p.forEach(g)}else a.fragment&&a.fragment.c();n.intro&&M(t.$$.fragment),N(t,n.target,n.anchor),T()}$(u)}(c(o=n.call(this)),t,q,null,b,{self:0}),o}return r}(function(){function t(){e(this,t)}var n,o,i;return n=t,(o=[{key:"$destroy",value:function(){var t,n;t=1,null!==(n=this.$$).fragment&&(d(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[]),this.$destroy=s}},{key:"$on",value:function(t,n){var e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1)}}},{key:"$set",value:function(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&r(n.prototype,o),i&&r(n,i),t}());t.default=z,t.defaults={},t.position="PrependContainer",Object.defineProperty(t,"__esModule",{value:!0})}));
