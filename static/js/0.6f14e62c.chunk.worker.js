!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/papyros/",n(n.s=2)}([function(t,e,n){t.exports=n(1)},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(R){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw i;return A()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=S(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=f(t,e,n);if("normal"===c.type){if(r=n.done?y:p,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=y,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",y="completed",d={};function v(){}function m(){}function g(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(k([])));_&&_!==n&&r.call(_,i)&&(b=_);var E=g.prototype=v.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=E.constructor=g,g.constructor=m,m.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new O(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),c(E,u,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function i(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e,n){return(f="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function h(t){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){return!e||"object"!==h(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){if(t){if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||v(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e,n){return(b=p()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function w(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=Symbol("Comlink.proxy"),E=Symbol("Comlink.endpoint"),j=Symbol("Comlink.releaseProxy"),O=Symbol("Comlink.thrown"),S=function(t){return"object"===typeof t&&null!==t||"function"===typeof t},x=new Map([["proxy",{canHandle:function(t){return S(t)&&t[_]},serialize:function(t){var e=new MessageChannel,n=e.port1,r=e.port2;return L(t,n),[r,[r]]},deserialize:function(t){return t.start(),A(t,[],e);var e}}],["throw",{canHandle:function(t){return S(t)&&O in t},serialize:function(t){var e=t.value;return[e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]]},deserialize:function(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;e.addEventListener("message",(function n(r){if(r&&r.data){var o,i=Object.assign({path:[]},r.data),a=i.id,u=i.type,c=i.path,s=(r.data.argumentList||[]).map(I);try{var f=c.slice(0,-1).reduce((function(t,e){return t[e]}),t),l=c.reduce((function(t,e){return t[e]}),t);switch(u){case"GET":o=l;break;case"SET":f[c.slice(-1)[0]]=I(r.data.value),o=!0;break;case"APPLY":o=l.apply(f,s);break;case"CONSTRUCT":var p;o=C(b(l,w(s)));break;case"ENDPOINT":var h=new MessageChannel,y=h.port1,d=h.port2;L(t,d),o=N(y,[y]);break;case"RELEASE":o=void 0;break;default:return}}catch(p){o=g({value:p},O,0)}Promise.resolve(o).catch((function(t){return g({value:t},O,0)})).then((function(t){var r=m(M(t),2),o=r[0],i=r[1];e.postMessage(Object.assign(Object.assign({},o),{id:a}),i),"RELEASE"===u&&(e.removeEventListener("message",n),P(e))}))}})),e.start&&e.start()}function P(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function k(t){if(t)throw new Error("Proxy has been released and is not useable")}function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=!1,o=new Proxy(n,{get:function(n,i){if(k(r),i===j)return function(){return G(t,{type:"RELEASE",path:e.map((function(t){return t.toString()}))}).then((function(){P(t),r=!0}))};if("then"===i){if(0===e.length)return{then:function(){return o}};var a=G(t,{type:"GET",path:e.map((function(t){return t.toString()}))}).then(I);return a.then.bind(a)}return A(t,[].concat(w(e),[i]))},set:function(n,o,i){k(r);var a=m(M(i),2),u=a[0],c=a[1];return G(t,{type:"SET",path:[].concat(w(e),[o]).map((function(t){return t.toString()})),value:u},c).then(I)},apply:function(n,o,i){k(r);var a=e[e.length-1];if(a===E)return G(t,{type:"ENDPOINT"}).then(I);if("bind"===a)return A(t,e.slice(0,-1));var u=m(R(i),2),c=u[0],s=u[1];return G(t,{type:"APPLY",path:e.map((function(t){return t.toString()})),argumentList:c},s).then(I)},construct:function(n,o){k(r);var i=m(R(o),2),a=i[0],u=i[1];return G(t,{type:"CONSTRUCT",path:e.map((function(t){return t.toString()})),argumentList:a},u).then(I)}});return o}function R(t){var e,n=t.map(M);return[n.map((function(t){return t[0]})),(e=n.map((function(t){return t[1]})),Array.prototype.concat.apply([],e))]}var T=new WeakMap;function N(t,e){return T.set(t,e),t}function C(t){return Object.assign(t,g({},_,!0))}function M(t){var e,n=function(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=v(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(x);try{for(n.s();!(e=n.n()).done;){var r=m(e.value,2),o=r[0],i=r[1];if(i.canHandle(t)){var a=m(i.serialize(t),2);return[{type:"HANDLER",name:o,value:a[0]},a[1]]}}}catch(u){n.e(u)}finally{n.f()}return[{type:"RAW",value:t},T.get(t)||[]]}function I(t){switch(t.type){case"HANDLER":return x.get(t.name).deserialize(t.value);case"RAW":return t.value}}function G(t,e,n){return new Promise((function(r){var o=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");t.addEventListener("message",(function e(n){n.data&&n.data.id&&n.data.id===o&&(t.removeEventListener("message",e),r(n.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:o},e),n)}))}var F=function(){function t(){a(this,t),this.onEvent=void 0,this.onEvent=function(t){}}return c(t,[{key:"launch",value:function(t,e,n){var r=function(t,e){if(t&&e){var n=new TextDecoder;return function(){for(;"timed-out"===Atomics.wait(e,0,0,100););Atomics.store(e,0,0);var r=Atomics.exchange(e,1,0),o=t.slice(0,r);return n.decode(o)}}return function(){var t=new XMLHttpRequest;do{t.open("GET","/input",!1),t.send(null)}while(t.status>=400);return t.responseText}}(e,n);return this.onEvent=function(e){if(t(e),"input"===e.type)return r()},Promise.resolve()}}]),t}();importScripts("https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js"),L(new(function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(n,t);var e=function(t){var e=p();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}(n);function n(){var t;return a(this,n),(t=e.call(this)).pyodide=void 0,t.pyodide={},t}return c(n,[{key:"launch",value:function(t,e,r){var o=this;return f(s(n.prototype),"launch",this).call(this,t,e,r).then((function(){return loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",fullStdLib:!0})})).then((function(t){return o.pyodide=t,o.runCode('\nfrom pyodide import to_js\nfrom js import console\nimport sys\n\ndef __override_builtins(cb):\n    __capture_stdout(cb)\n    __override_stdin(cb)\n\ndef __capture_stdout(cb):\n    console.log("Rerouting print")\n    class _OutputWriter:\n\n        def write(self, s):\n            console.log("Writing : " + s)\n            cb(to_js({"type": "output", "data":s}))\n            console.log("Called cb")\n\n        def flush(self):\n            pass # Given data is always immediately written\n\n    global print\n    __original_print = print\n    __writer = _OutputWriter()\n\n    def __dodona_print(*objects, sep=\' \', end=\'\\n\', file=sys.stdout, flush=False):\n        console.log(f"Called my print with {objects}")\n        if file == sys.stdout:\n            __original_print(*objects, sep=sep, end=end, file=__writer, flush=flush)\n        else:\n            __original_print(*objects, sep=sep, end=end, file=file, flush=flush)\n\n    print = __dodona_print\n\ndef __override_stdin(cb):\n    global input\n    def __dodona_input(prompt=""):\n        console.log("Called print with prompt: " + prompt)\n        print(prompt, end="")\n        user_value = cb(to_js({"type": "input", "data":prompt}))\n        print(user_value)\n        return user_value\n\n    input = __dodona_input\n')})).then((function(){o.pyodide.globals.get("__override_builtins")((function(t){return o.onEvent(Object.fromEntries(t))}))}))}},{key:"runCode",value:function(){var t,e=(t=o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Running code in worker: ",e),t.prev=1,t.next=4,this.pyodide.loadPackagesFromImports(e);case 4:return t.next=6,this.pyodide.runPythonAsync(e);case 6:t.t0=t.sent,n={type:"success",data:t.t0},console.log("ran code: "+e+" and received: ",n),t.next=15;break;case 11:t.prev=11,t.t1=t.catch(1),console.log("error in webworker:",t.t1),n={type:"error",data:t.t1};case 15:this.onEvent(n);case 16:case"end":return t.stop()}}),t,this,[[1,11]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}()}]),n}(F)))}]);
//# sourceMappingURL=0.6f14e62c.chunk.worker.js.map