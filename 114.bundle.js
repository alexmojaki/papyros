"use strict";(self.webpackChunkpapyros=self.webpackChunkpapyros||[]).push([[114],{872:(e,t,n)=>{var r;n.d(t,{z:()=>c}),function(e){e.Python="Python",e.JavaScript="JavaScript"}(r||(r={})),r.Python,r.JavaScript,new Map([["python",r.Python],["javascript",r.JavaScript]]),r.Python;var a,o=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},i=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};function s(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=e!==a.Debug;r&&(e===a.Error?console.error.apply(console,i([],o(t),!1)):console.log.apply(console,i([],o(t),!1)))}!function(e){e[e.Debug=0]="Debug",e[e.Error=1]="Error",e[e.Important=2]="Important"}(a||(a={}));var c=function(){function e(){this.onEvent=function(){},this.runId=0}return e.prototype.launch=function(e,t,n){var r=this,a=function(e,t){if(e&&t){var n=new TextDecoder;return function(){for(;"timed-out"===Atomics.wait(t,0,0,100););Atomics.store(t,0,0);var r=Atomics.exchange(t,1,0),a=e.slice(0,r);return n.decode(a)}}return function(){var e=new XMLHttpRequest;do{e.open("GET","/__papyros_input",!1),e.send(null)}while(e.status>=400);return e.responseText}}(t,n);return this.onEvent=function(t){if(t.runId=r.runId,e(t),"input"===t.type)return a()},Promise.resolve()},e.prototype.runCode=function(e,t){return n=this,r=void 0,i=function(){var n,r,o;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(i){switch(i.label){case 0:this.runId=t,s(a.Debug,"Running code in worker: ",e),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._runCodeInternal(e)];case 2:return n=i.sent(),s(a.Important,"ran code: "+e+" and received: ",n),[2,this.onEvent({type:"success",data:n,runId:t})];case 3:return r=i.sent(),o="toString"in r?r.toString():JSON.stringify(r),s(a.Error,"Error during execution: ",r,o),[2,this.onEvent({type:"error",data:o,runId:t})];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function a(e){try{c(i.next(e))}catch(e){t(e)}}function s(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,s)}c((i=i.apply(n,r||[])).next())}));var n,r,o,i},e}()},375:(e,t,n)=>{n.d(t,{Jj:()=>u});const r=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),i=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>s(e)&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return u(e,t),[n,[n]]},deserialize:e=>(e.start(),f(e,[],undefined))}],["throw",{canHandle:e=>s(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=self){t.addEventListener("message",(function n(a){if(!a||!a.data)return;const{id:o,type:s,path:c}=Object.assign({path:[]},a.data),p=(a.data.argumentList||[]).map(v);let f;try{const t=c.slice(0,-1).reduce(((e,t)=>e[t]),e),n=c.reduce(((e,t)=>e[t]),e);switch(s){case"GET":f=n;break;case"SET":t[c.slice(-1)[0]]=v(a.data.value),f=!0;break;case"APPLY":f=n.apply(t,p);break;case"CONSTRUCT":f=function(e){return Object.assign(e,{[r]:!0})}(new n(...p));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;u(e,n),f=function(e,t){return y.set(e,t),e}(t,[t])}break;case"RELEASE":f=void 0;break;default:return}}catch(e){f={value:e,[i]:0}}Promise.resolve(f).catch((e=>({value:e,[i]:0}))).then((e=>{const[r,a]=d(e);t.postMessage(Object.assign(Object.assign({},r),{id:o}),a),"RELEASE"===s&&(t.removeEventListener("message",n),l(t))}))})),t.start&&t.start()}function l(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function p(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e,t=[],n=function(){}){let r=!1;const i=new Proxy(n,{get(n,a){if(p(r),a===o)return()=>m(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{l(e),r=!0}));if("then"===a){if(0===t.length)return{then:()=>i};const n=m(e,{type:"GET",path:t.map((e=>e.toString()))}).then(v);return n.then.bind(n)}return f(e,[...t,a])},set(n,a,o){p(r);const[i,s]=d(o);return m(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:i},s).then(v)},apply(n,o,i){p(r);const s=t[t.length-1];if(s===a)return m(e,{type:"ENDPOINT"}).then(v);if("bind"===s)return f(e,t.slice(0,-1));const[c,u]=h(i);return m(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(v)},construct(n,a){p(r);const[o,i]=h(a);return m(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},i).then(v)}});return i}function h(e){const t=e.map(d);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const y=new WeakMap;function d(e){for(const[t,n]of c)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},y.get(e)||[]]}function v(e){switch(e.type){case"HANDLER":return c.get(e.name).deserialize(e.value);case"RAW":return e.value}}function m(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJMkQsRUFBSzFDLEdBQ3JDLE9BQU8sSUFBSXhELFNBQVNDLElBQ2hCLE1BQU0yQyxFQWVILElBQUlnRCxNQUFNLEdBQ1pPLEtBQUssR0FDTHBELEtBQUksSUFBTXFELEtBQUtDLE1BQU1ELEtBQUtFLFNBQVdDLE9BQU9DLGtCQUFrQmhHLFNBQVMsTUFDdkVpRyxLQUFLLEtBakJObEUsRUFBR0UsaUJBQWlCLFdBQVcsU0FBU2lFLEVBQUUvRCxHQUNqQ0EsRUFBR3RDLE1BQVNzQyxFQUFHdEMsS0FBS3VDLElBQU1ELEVBQUd0QyxLQUFLdUMsS0FBT0EsSUFHOUNMLEVBQUc0QixvQkFBb0IsVUFBV3VDLEdBQ2xDekcsRUFBUTBDLEVBQUd0QyxVQUVYa0MsRUFBR1gsT0FDSFcsRUFBR1gsUUFFUFcsRUFBRzJCLFlBQVk3QixPQUFPQyxPQUFPLENBQUVNLEdBQUFBLEdBQU1zRCxHQUFNMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXB5cm9zLy4vc3JjL1Byb2dyYW1taW5nTGFuZ3VhZ2UudHMiLCJ3ZWJwYWNrOi8vcGFweXJvcy8uL3NyYy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vcGFweXJvcy8uL3NyYy91dGlsL0xvZ2dpbmcudHMiLCJ3ZWJwYWNrOi8vcGFweXJvcy8uL3NyYy9CYWNrZW5kLnRzIiwid2VicGFjazovL3BhcHlyb3MvLi9ub2RlX21vZHVsZXMvY29tbGluay9kaXN0L2VzbS9jb21saW5rLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBQcm9ncmFtbWluZ0xhbmd1YWdlIHtcbiAgICBQeXRob24gPSBcIlB5dGhvblwiLFxuICAgIEphdmFTY3JpcHQgPSBcIkphdmFTY3JpcHRcIlxufVxuXG5leHBvcnQgY29uc3QgUFJPR1JBTU1JTkdfTEFOR1VBR0VTID0gW1xuICAgIFByb2dyYW1taW5nTGFuZ3VhZ2UuUHl0aG9uLFxuICAgIFByb2dyYW1taW5nTGFuZ3VhZ2UuSmF2YVNjcmlwdFxuXTtcblxuY29uc3QgTEFOR1VBR0VfTUFQID0gbmV3IE1hcChbXG4gICAgW1wicHl0aG9uXCIsIFByb2dyYW1taW5nTGFuZ3VhZ2UuUHl0aG9uXSxcbiAgICBbXCJqYXZhc2NyaXB0XCIsIFByb2dyYW1taW5nTGFuZ3VhZ2UuSmF2YVNjcmlwdF1cbl0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcGxGcm9tU3RyaW5nKGxhbmd1YWdlOiBzdHJpbmcpOiBQcm9ncmFtbWluZ0xhbmd1YWdlIHtcbiAgICBjb25zdCBsYW5nTEMgPSBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChMQU5HVUFHRV9NQVAuaGFzKGxhbmdMQykpIHtcbiAgICAgICAgcmV0dXJuIExBTkdVQUdFX01BUC5nZXQobGFuZ0xDKSE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBsYW5ndWFnZTogJHtsYW5ndWFnZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQcm9ncmFtbWluZ0xhbmd1YWdlIH0gZnJvbSBcIi4vUHJvZ3JhbW1pbmdMYW5ndWFnZVwiO1xuXG5leHBvcnQgY29uc3QgTUFJTl9BUFBfSUQgPSBcInBhcHlyb3NcIjtcblxuZXhwb3J0IGNvbnN0IE9VVFBVVF9UQV9JRCA9IFwiY29kZS1vdXRwdXQtYXJlYVwiO1xuZXhwb3J0IGNvbnN0IElOUFVUX1RBX0lEID0gXCJjb2RlLWlucHV0LWFyZWFcIjtcbmV4cG9ydCBjb25zdCBFRElUT1JfV1JBUFBFUl9JRCA9IFwiY29kZS1hcmVhXCI7XG5cbmV4cG9ydCBjb25zdCBTVEFURV9TUElOTkVSX0lEID0gXCJzdGF0ZS1zcGlubmVyXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fU1RBVEVfVEVYVF9JRCA9IFwiYXBwbGljYXRpb24tc3RhdGUtdGV4dFwiO1xuXG5leHBvcnQgY29uc3QgUlVOX0JUTl9JRCA9IFwicnVuLWNvZGUtYnRuXCI7XG5leHBvcnQgY29uc3QgVEVSTUlOQVRFX0JUTl9JRCA9IFwidGVybWluYXRlLWJ0blwiO1xuXG5leHBvcnQgY29uc3QgUFJPR1JBTU1JTkdfTEFOR1VBR0VfU0VMRUNUX0lEID0gXCJwcm9ncmFtbWluZy1sYW5ndWFnZS1zZWxlY3RcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST0dSQU1NSU5HX0xBTkdVQUdFID0gUHJvZ3JhbW1pbmdMYW5ndWFnZS5QeXRob247XG5cbmV4cG9ydCBjb25zdCBMT0NBTEVfU0VMRUNUX0lEID0gXCJsb2NhbGUtc2VsZWN0XCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0NBTEUgPSBcIm5sXCI7XG5cbmV4cG9ydCBjb25zdCBJTlBVVF9SRUxBVElWRV9VUkwgPSBcIi9fX3BhcHlyb3NfaW5wdXRcIjtcblxuIiwiZXhwb3J0IGVudW0gTG9nVHlwZSB7XG4gICAgRGVidWcsIEVycm9yLCBJbXBvcnRhbnRcbn1cblxuY29uc3QgRU5WSVJPTk1FTlQ6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcbmV4cG9ydCBmdW5jdGlvbiBwYXB5cm9zTG9nKGxvZ1R5cGU6IExvZ1R5cGUsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgY29uc3QgZG9Mb2cgPSBFTlZJUk9OTUVOVCAhPT0gXCJwcm9kdWN0aW9uXCIgfHwgbG9nVHlwZSAhPT0gTG9nVHlwZS5EZWJ1ZztcbiAgICBpZiAoZG9Mb2cpIHtcbiAgICAgICAgaWYgKGxvZ1R5cGUgPT09IExvZ1R5cGUuRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IElOUFVUX1JFTEFUSVZFX1VSTCB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFweXJvc0V2ZW50IH0gZnJvbSBcIi4vUGFweXJvc0V2ZW50XCI7XG5pbXBvcnQgeyBMb2dUeXBlLCBwYXB5cm9zTG9nIH0gZnJvbSBcIi4vdXRpbC9Mb2dnaW5nXCI7XG5cbmZ1bmN0aW9uIGdldElucHV0Q2FsbGJhY2soaW5wdXRUZXh0QXJyYXk/OiBVaW50OEFycmF5LCBpbnB1dE1ldGFEYXRhPzogSW50MzJBcnJheSk6ICgpID0+IHN0cmluZyB7XG4gICAgaWYgKGlucHV0VGV4dEFycmF5ICYmIGlucHV0TWV0YURhdGEpIHtcbiAgICAgICAgY29uc3QgdGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKEF0b21pY3Mud2FpdChpbnB1dE1ldGFEYXRhLCAwLCAwLCAxMDApID09PSBcInRpbWVkLW91dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcHlyb3NMb2cubG9nKFwid2FpdGluZyBvbiBpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGludGVycnVwdEJ1ZmZlclswXSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAvLyAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBdG9taWNzLnN0b3JlKGlucHV0TWV0YURhdGEsIDAsIDApO1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IEF0b21pY3MuZXhjaGFuZ2UoaW5wdXRNZXRhRGF0YSwgMSwgMCk7XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IGlucHV0VGV4dEFycmF5LnNsaWNlKDAsIHNpemUpO1xuICAgICAgICAgICAgcmV0dXJuIHRleHREZWNvZGVyLmRlY29kZShieXRlcyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIElOUFVUX1JFTEFUSVZFX1VSTCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZChudWxsKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHJlcXVlc3Quc3RhdHVzID49IDQwMCk7IC8vIHRvZG8gYmV0dGVyIGVycm9yIGhhbmRsaW5nXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdC5yZXNwb25zZVRleHQ7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFja2VuZCB7XG4gICAgb25FdmVudDogKGU6IFBhcHlyb3NFdmVudCkgPT4gYW55O1xuICAgIHJ1bklkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgICAgICB0aGlzLm9uRXZlbnQgPSAoKSA9PiB7IH07XG4gICAgICAgIHRoaXMucnVuSWQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIGJhY2tlbmQsIHNldHRpbmcgdXAgYW55IGdsb2JhbHMgcmVxdWlyZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKFBhcHlyb3NFdmVudCk6dm9pZH0gb25FdmVudCBDYWxsYmFjayBmb3Igd2hlbiBldmVudHMgb2NjdXJcbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGlucHV0VGV4dEFycmF5IE9wdGlvbmFsIHNoYXJlZCBidWZmZXIgZm9yIGlucHV0XG4gICAgICogQHBhcmFtIHtJbnQzMkFycmF5fSBpbnB1dE1ldGFEYXRhIE9wdGlvbmFsIHNoYXJlZCBidWZmZXIgZm9yIG1ldGFkYXRhIGFib3V0IGlucHV0XG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUHJvbWlzZSBvZiBsYXVuY2hpbmdcbiAgICAgKi9cbiAgICBsYXVuY2gob25FdmVudDogKGU6IFBhcHlyb3NFdmVudCkgPT4gdm9pZCxcbiAgICAgICAgaW5wdXRUZXh0QXJyYXk/OiBVaW50OEFycmF5LCBpbnB1dE1ldGFEYXRhPzogSW50MzJBcnJheSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBpbnB1dENhbGxiYWNrID0gZ2V0SW5wdXRDYWxsYmFjayhpbnB1dFRleHRBcnJheSwgaW5wdXRNZXRhRGF0YSk7XG4gICAgICAgIHRoaXMub25FdmVudCA9IChlOiBQYXB5cm9zRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucnVuSWQgPSB0aGlzLnJ1bklkO1xuICAgICAgICAgICAgb25FdmVudChlKTtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBfcnVuQ29kZUludGVybmFsKGNvZGU6IHN0cmluZyk6IFByb21pc2U8YW55PjtcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIGFuZCBydW4gYXJiaXRyYXJ5IGNvZGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSBUaGUgY29kZSB0byBydW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVuSWQgVGhlIHV1aWQgZm9yIHRoaXMgZXhlY3V0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUHJvbWlzZSBvZiBleGVjdXRpb25cbiAgICAgKi9cbiAgICBhc3luYyBydW5Db2RlKGNvZGU6IHN0cmluZywgcnVuSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnJ1bklkID0gcnVuSWQ7XG4gICAgICAgIHBhcHlyb3NMb2coTG9nVHlwZS5EZWJ1ZywgXCJSdW5uaW5nIGNvZGUgaW4gd29ya2VyOiBcIiwgY29kZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fcnVuQ29kZUludGVybmFsKGNvZGUpO1xuICAgICAgICAgICAgcGFweXJvc0xvZyhMb2dUeXBlLkltcG9ydGFudCwgXCJyYW4gY29kZTogXCIgKyBjb2RlICsgXCIgYW5kIHJlY2VpdmVkOiBcIiwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkV2ZW50KHsgdHlwZTogXCJzdWNjZXNzXCIsIGRhdGE6IGRhdGEsIHJ1bklkOiBydW5JZCB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JTdHJpbmcgPSBcInRvU3RyaW5nXCIgaW4gZXJyb3IgPyBlcnJvci50b1N0cmluZygpIDogSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xuICAgICAgICAgICAgcGFweXJvc0xvZyhMb2dUeXBlLkVycm9yLCBcIkVycm9yIGR1cmluZyBleGVjdXRpb246IFwiLCBlcnJvciwgZXJyb3JTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25FdmVudCh7IHR5cGU6IFwiZXJyb3JcIiwgZGF0YTogZXJyb3JTdHJpbmcsIHJ1bklkOiBydW5JZCB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNvbnN0IHByb3h5TWFya2VyID0gU3ltYm9sKFwiQ29tbGluay5wcm94eVwiKTtcclxuY29uc3QgY3JlYXRlRW5kcG9pbnQgPSBTeW1ib2woXCJDb21saW5rLmVuZHBvaW50XCIpO1xyXG5jb25zdCByZWxlYXNlUHJveHkgPSBTeW1ib2woXCJDb21saW5rLnJlbGVhc2VQcm94eVwiKTtcclxuY29uc3QgdGhyb3dNYXJrZXIgPSBTeW1ib2woXCJDb21saW5rLnRocm93blwiKTtcclxuY29uc3QgaXNPYmplY3QgPSAodmFsKSA9PiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJiB2YWwgIT09IG51bGwpIHx8IHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIjtcclxuLyoqXHJcbiAqIEludGVybmFsIHRyYW5zZmVyIGhhbmRsZSB0byBoYW5kbGUgb2JqZWN0cyBtYXJrZWQgdG8gcHJveHkuXHJcbiAqL1xyXG5jb25zdCBwcm94eVRyYW5zZmVySGFuZGxlciA9IHtcclxuICAgIGNhbkhhbmRsZTogKHZhbCkgPT4gaXNPYmplY3QodmFsKSAmJiB2YWxbcHJveHlNYXJrZXJdLFxyXG4gICAgc2VyaWFsaXplKG9iaikge1xyXG4gICAgICAgIGNvbnN0IHsgcG9ydDEsIHBvcnQyIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcclxuICAgICAgICBleHBvc2Uob2JqLCBwb3J0MSk7XHJcbiAgICAgICAgcmV0dXJuIFtwb3J0MiwgW3BvcnQyXV07XHJcbiAgICB9LFxyXG4gICAgZGVzZXJpYWxpemUocG9ydCkge1xyXG4gICAgICAgIHBvcnQuc3RhcnQoKTtcclxuICAgICAgICByZXR1cm4gd3JhcChwb3J0KTtcclxuICAgIH0sXHJcbn07XHJcbi8qKlxyXG4gKiBJbnRlcm5hbCB0cmFuc2ZlciBoYW5kbGVyIHRvIGhhbmRsZSB0aHJvd24gZXhjZXB0aW9ucy5cclxuICovXHJcbmNvbnN0IHRocm93VHJhbnNmZXJIYW5kbGVyID0ge1xyXG4gICAgY2FuSGFuZGxlOiAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSAmJiB0aHJvd01hcmtlciBpbiB2YWx1ZSxcclxuICAgIHNlcmlhbGl6ZSh7IHZhbHVlIH0pIHtcclxuICAgICAgICBsZXQgc2VyaWFsaXplZDtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICBzZXJpYWxpemVkID0ge1xyXG4gICAgICAgICAgICAgICAgaXNFcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdmFsdWUubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB2YWx1ZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrOiB2YWx1ZS5zdGFjayxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXJpYWxpemVkID0geyBpc0Vycm9yOiBmYWxzZSwgdmFsdWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtzZXJpYWxpemVkLCBbXV07XHJcbiAgICB9LFxyXG4gICAgZGVzZXJpYWxpemUoc2VyaWFsaXplZCkge1xyXG4gICAgICAgIGlmIChzZXJpYWxpemVkLmlzRXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbihuZXcgRXJyb3Ioc2VyaWFsaXplZC52YWx1ZS5tZXNzYWdlKSwgc2VyaWFsaXplZC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IHNlcmlhbGl6ZWQudmFsdWU7XHJcbiAgICB9LFxyXG59O1xyXG4vKipcclxuICogQWxsb3dzIGN1c3RvbWl6aW5nIHRoZSBzZXJpYWxpemF0aW9uIG9mIGNlcnRhaW4gdmFsdWVzLlxyXG4gKi9cclxuY29uc3QgdHJhbnNmZXJIYW5kbGVycyA9IG5ldyBNYXAoW1xyXG4gICAgW1wicHJveHlcIiwgcHJveHlUcmFuc2ZlckhhbmRsZXJdLFxyXG4gICAgW1widGhyb3dcIiwgdGhyb3dUcmFuc2ZlckhhbmRsZXJdLFxyXG5dKTtcclxuZnVuY3Rpb24gZXhwb3NlKG9iaiwgZXAgPSBzZWxmKSB7XHJcbiAgICBlcC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiBjYWxsYmFjayhldikge1xyXG4gICAgICAgIGlmICghZXYgfHwgIWV2LmRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGlkLCB0eXBlLCBwYXRoIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZXYuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgYXJndW1lbnRMaXN0ID0gKGV2LmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoZnJvbVdpcmVWYWx1ZSk7XHJcbiAgICAgICAgbGV0IHJldHVyblZhbHVlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHBhdGguc2xpY2UoMCwgLTEpLnJlZHVjZSgob2JqLCBwcm9wKSA9PiBvYmpbcHJvcF0sIG9iaik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhd1ZhbHVlID0gcGF0aC5yZWR1Y2UoKG9iaiwgcHJvcCkgPT4gb2JqW3Byb3BdLCBvYmopO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJHRVRcIiAvKiBHRVQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTRVRcIiAvKiBTRVQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRbcGF0aC5zbGljZSgtMSlbMF1dID0gZnJvbVdpcmVWYWx1ZShldi5kYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBUFBMWVwiIC8qIEFQUExZICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSByYXdWYWx1ZS5hcHBseShwYXJlbnQsIGFyZ3VtZW50TGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNPTlNUUlVDVFwiIC8qIENPTlNUUlVDVCAqLzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IHJhd1ZhbHVlKC4uLmFyZ3VtZW50TGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gcHJveHkodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFTkRQT0lOVFwiIC8qIEVORFBPSU5UICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwb3J0MSwgcG9ydDIgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvc2Uob2JqLCBwb3J0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdHJhbnNmZXIocG9ydDEsIFtwb3J0MV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJSRUxFQVNFXCIgLyogUkVMRUFTRSAqLzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHsgdmFsdWUsIFt0aHJvd01hcmtlcl06IDAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHJldHVyblZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlLCBbdGhyb3dNYXJrZXJdOiAwIH07XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJldHVyblZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFt3aXJlVmFsdWUsIHRyYW5zZmVyYWJsZXNdID0gdG9XaXJlVmFsdWUocmV0dXJuVmFsdWUpO1xyXG4gICAgICAgICAgICBlcC5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdpcmVWYWx1ZSksIHsgaWQgfSksIHRyYW5zZmVyYWJsZXMpO1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJSRUxFQVNFXCIgLyogUkVMRUFTRSAqLykge1xyXG4gICAgICAgICAgICAgICAgLy8gZGV0YWNoIGFuZCBkZWFjdGl2ZSBhZnRlciBzZW5kaW5nIHJlbGVhc2UgcmVzcG9uc2UgYWJvdmUuXHJcbiAgICAgICAgICAgICAgICBlcC5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUVuZFBvaW50KGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoZXAuc3RhcnQpIHtcclxuICAgICAgICBlcC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzTWVzc2FnZVBvcnQoZW5kcG9pbnQpIHtcclxuICAgIHJldHVybiBlbmRwb2ludC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk1lc3NhZ2VQb3J0XCI7XHJcbn1cclxuZnVuY3Rpb24gY2xvc2VFbmRQb2ludChlbmRwb2ludCkge1xyXG4gICAgaWYgKGlzTWVzc2FnZVBvcnQoZW5kcG9pbnQpKVxyXG4gICAgICAgIGVuZHBvaW50LmNsb3NlKCk7XHJcbn1cclxuZnVuY3Rpb24gd3JhcChlcCwgdGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gY3JlYXRlUHJveHkoZXAsIFtdLCB0YXJnZXQpO1xyXG59XHJcbmZ1bmN0aW9uIHRocm93SWZQcm94eVJlbGVhc2VkKGlzUmVsZWFzZWQpIHtcclxuICAgIGlmIChpc1JlbGVhc2VkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJveHkgaGFzIGJlZW4gcmVsZWFzZWQgYW5kIGlzIG5vdCB1c2VhYmxlXCIpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVByb3h5KGVwLCBwYXRoID0gW10sIHRhcmdldCA9IGZ1bmN0aW9uICgpIHsgfSkge1xyXG4gICAgbGV0IGlzUHJveHlSZWxlYXNlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkodGFyZ2V0LCB7XHJcbiAgICAgICAgZ2V0KF90YXJnZXQsIHByb3ApIHtcclxuICAgICAgICAgICAgdGhyb3dJZlByb3h5UmVsZWFzZWQoaXNQcm94eVJlbGVhc2VkKTtcclxuICAgICAgICAgICAgaWYgKHByb3AgPT09IHJlbGVhc2VQcm94eSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFJlc3BvbnNlTWVzc2FnZShlcCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJFTEVBU0VcIiAvKiBSRUxFQVNFICovLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLm1hcCgocCkgPT4gcC50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VFbmRQb2ludChlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJveHlSZWxlYXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcInRoZW5cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gcHJveHkgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlKGVwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIiAvKiBHRVQgKi8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aC5tYXAoKHApID0+IHAudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZyb21XaXJlVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHIudGhlbi5iaW5kKHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm94eShlcCwgWy4uLnBhdGgsIHByb3BdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldChfdGFyZ2V0LCBwcm9wLCByYXdWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aHJvd0lmUHJveHlSZWxlYXNlZChpc1Byb3h5UmVsZWFzZWQpO1xyXG4gICAgICAgICAgICAvLyBGSVhNRTogRVM2IFByb3h5IEhhbmRsZXIgYHNldGAgbWV0aG9kcyBhcmUgc3VwcG9zZWQgdG8gcmV0dXJuIGFcclxuICAgICAgICAgICAgLy8gYm9vbGVhbi4gVG8gc2hvdyBnb29kIHdpbGwsIHdlIHJldHVybiB0cnVlIGFzeW5jaHJvbm91c2x5IMKvXFxfKOODhClfL8KvXHJcbiAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgdHJhbnNmZXJhYmxlc10gPSB0b1dpcmVWYWx1ZShyYXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlKGVwLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNFVFwiIC8qIFNFVCAqLyxcclxuICAgICAgICAgICAgICAgIHBhdGg6IFsuLi5wYXRoLCBwcm9wXS5tYXAoKHApID0+IHAudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgfSwgdHJhbnNmZXJhYmxlcykudGhlbihmcm9tV2lyZVZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFwcGx5KF90YXJnZXQsIF90aGlzQXJnLCByYXdBcmd1bWVudExpc3QpIHtcclxuICAgICAgICAgICAgdGhyb3dJZlByb3h5UmVsZWFzZWQoaXNQcm94eVJlbGVhc2VkKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgaWYgKGxhc3QgPT09IGNyZWF0ZUVuZHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFJlc3BvbnNlTWVzc2FnZShlcCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRU5EUE9JTlRcIiAvKiBFTkRQT0lOVCAqLyxcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnJvbVdpcmVWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gV2UganVzdCBwcmV0ZW5kIHRoYXQgYGJpbmQoKWAgZGlkbuKAmXQgaGFwcGVuLlxyXG4gICAgICAgICAgICBpZiAobGFzdCA9PT0gXCJiaW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm94eShlcCwgcGF0aC5zbGljZSgwLCAtMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IFthcmd1bWVudExpc3QsIHRyYW5zZmVyYWJsZXNdID0gcHJvY2Vzc0FyZ3VtZW50cyhyYXdBcmd1bWVudExpc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFJlc3BvbnNlTWVzc2FnZShlcCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJBUFBMWVwiIC8qIEFQUExZICovLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aC5tYXAoKHApID0+IHAudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudExpc3QsXHJcbiAgICAgICAgICAgIH0sIHRyYW5zZmVyYWJsZXMpLnRoZW4oZnJvbVdpcmVWYWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25zdHJ1Y3QoX3RhcmdldCwgcmF3QXJndW1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgIHRocm93SWZQcm94eVJlbGVhc2VkKGlzUHJveHlSZWxlYXNlZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IFthcmd1bWVudExpc3QsIHRyYW5zZmVyYWJsZXNdID0gcHJvY2Vzc0FyZ3VtZW50cyhyYXdBcmd1bWVudExpc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFJlc3BvbnNlTWVzc2FnZShlcCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJDT05TVFJVQ1RcIiAvKiBDT05TVFJVQ1QgKi8sXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLm1hcCgocCkgPT4gcC50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50TGlzdCxcclxuICAgICAgICAgICAgfSwgdHJhbnNmZXJhYmxlcykudGhlbihmcm9tV2lyZVZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcHJveHk7XHJcbn1cclxuZnVuY3Rpb24gbXlGbGF0KGFycikge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFycik7XHJcbn1cclxuZnVuY3Rpb24gcHJvY2Vzc0FyZ3VtZW50cyhhcmd1bWVudExpc3QpIHtcclxuICAgIGNvbnN0IHByb2Nlc3NlZCA9IGFyZ3VtZW50TGlzdC5tYXAodG9XaXJlVmFsdWUpO1xyXG4gICAgcmV0dXJuIFtwcm9jZXNzZWQubWFwKCh2KSA9PiB2WzBdKSwgbXlGbGF0KHByb2Nlc3NlZC5tYXAoKHYpID0+IHZbMV0pKV07XHJcbn1cclxuY29uc3QgdHJhbnNmZXJDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XHJcbmZ1bmN0aW9uIHRyYW5zZmVyKG9iaiwgdHJhbnNmZXJzKSB7XHJcbiAgICB0cmFuc2ZlckNhY2hlLnNldChvYmosIHRyYW5zZmVycyk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIHByb3h5KG9iaikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ob2JqLCB7IFtwcm94eU1hcmtlcl06IHRydWUgfSk7XHJcbn1cclxuZnVuY3Rpb24gd2luZG93RW5kcG9pbnQodywgY29udGV4dCA9IHNlbGYsIHRhcmdldE9yaWdpbiA9IFwiKlwiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc3RNZXNzYWdlOiAobXNnLCB0cmFuc2ZlcmFibGVzKSA9PiB3LnBvc3RNZXNzYWdlKG1zZywgdGFyZ2V0T3JpZ2luLCB0cmFuc2ZlcmFibGVzKSxcclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBjb250ZXh0LmFkZEV2ZW50TGlzdGVuZXIuYmluZChjb250ZXh0KSxcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBjb250ZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZChjb250ZXh0KSxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdG9XaXJlVmFsdWUodmFsdWUpIHtcclxuICAgIGZvciAoY29uc3QgW25hbWUsIGhhbmRsZXJdIG9mIHRyYW5zZmVySGFuZGxlcnMpIHtcclxuICAgICAgICBpZiAoaGFuZGxlci5jYW5IYW5kbGUodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtzZXJpYWxpemVkVmFsdWUsIHRyYW5zZmVyYWJsZXNdID0gaGFuZGxlci5zZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiSEFORExFUlwiIC8qIEhBTkRMRVIgKi8sXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VyaWFsaXplZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRyYW5zZmVyYWJsZXMsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUkFXXCIgLyogUkFXICovLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRyYW5zZmVyQ2FjaGUuZ2V0KHZhbHVlKSB8fCBbXSxcclxuICAgIF07XHJcbn1cclxuZnVuY3Rpb24gZnJvbVdpcmVWYWx1ZSh2YWx1ZSkge1xyXG4gICAgc3dpdGNoICh2YWx1ZS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkhBTkRMRVJcIiAvKiBIQU5ETEVSICovOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmZXJIYW5kbGVycy5nZXQodmFsdWUubmFtZSkuZGVzZXJpYWxpemUodmFsdWUudmFsdWUpO1xyXG4gICAgICAgIGNhc2UgXCJSQVdcIiAvKiBSQVcgKi86XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS52YWx1ZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlKGVwLCBtc2csIHRyYW5zZmVycykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBnZW5lcmF0ZVVVSUQoKTtcclxuICAgICAgICBlcC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiBsKGV2KSB7XHJcbiAgICAgICAgICAgIGlmICghZXYuZGF0YSB8fCAhZXYuZGF0YS5pZCB8fCBldi5kYXRhLmlkICE9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGwpO1xyXG4gICAgICAgICAgICByZXNvbHZlKGV2LmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChlcC5zdGFydCkge1xyXG4gICAgICAgICAgICBlcC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlcC5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQgfSwgbXNnKSwgdHJhbnNmZXJzKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlVVVJRCgpIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkoNClcclxuICAgICAgICAuZmlsbCgwKVxyXG4gICAgICAgIC5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSlcclxuICAgICAgICAuam9pbihcIi1cIik7XHJcbn1cblxuZXhwb3J0IHsgY3JlYXRlRW5kcG9pbnQsIGV4cG9zZSwgcHJveHksIHByb3h5TWFya2VyLCByZWxlYXNlUHJveHksIHRyYW5zZmVyLCB0cmFuc2ZlckhhbmRsZXJzLCB3aW5kb3dFbmRwb2ludCwgd3JhcCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbGluay5tanMubWFwXG4iXSwibmFtZXMiOlsiUHJvZ3JhbW1pbmdMYW5ndWFnZSIsIlB5dGhvbiIsIkphdmFTY3JpcHQiLCJNYXAiLCJMb2dUeXBlIiwicGFweXJvc0xvZyIsImxvZ1R5cGUiLCJkb0xvZyIsIkRlYnVnIiwiRXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJhcmdzIiwibG9nIiwidGhpcyIsIm9uRXZlbnQiLCJydW5JZCIsImxhdW5jaCIsImlucHV0VGV4dEFycmF5IiwiaW5wdXRNZXRhRGF0YSIsImlucHV0Q2FsbGJhY2siLCJUZXh0RGVjb2RlciIsIkF0b21pY3MiLCJ3YWl0Iiwic3RvcmUiLCJzaXplIiwiZXhjaGFuZ2UiLCJieXRlcyIsInNsaWNlIiwiZGVjb2RlIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJnZXRJbnB1dENhbGxiYWNrIiwiZSIsInR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJ1bkNvZGUiLCJjb2RlIiwiX3J1bkNvZGVJbnRlcm5hbCIsImRhdGEiLCJJbXBvcnRhbnQiLCJlcnJvclN0cmluZyIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb3h5TWFya2VyIiwiU3ltYm9sIiwiY3JlYXRlRW5kcG9pbnQiLCJyZWxlYXNlUHJveHkiLCJ0aHJvd01hcmtlciIsImlzT2JqZWN0IiwidmFsIiwidHJhbnNmZXJIYW5kbGVycyIsImNhbkhhbmRsZSIsInNlcmlhbGl6ZSIsIm9iaiIsInBvcnQxIiwicG9ydDIiLCJNZXNzYWdlQ2hhbm5lbCIsImV4cG9zZSIsImRlc2VyaWFsaXplIiwicG9ydCIsInN0YXJ0IiwiY3JlYXRlUHJveHkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlcmlhbGl6ZWQiLCJpc0Vycm9yIiwibWVzc2FnZSIsIm5hbWUiLCJzdGFjayIsIk9iamVjdCIsImFzc2lnbiIsImVwIiwic2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWxsYmFjayIsImV2IiwiaWQiLCJwYXRoIiwiYXJndW1lbnRMaXN0IiwibWFwIiwiZnJvbVdpcmVWYWx1ZSIsInJldHVyblZhbHVlIiwicGFyZW50IiwicmVkdWNlIiwicHJvcCIsInJhd1ZhbHVlIiwiYXBwbHkiLCJwcm94eSIsInRyYW5zZmVycyIsInRyYW5zZmVyQ2FjaGUiLCJzZXQiLCJ0cmFuc2ZlciIsInVuZGVmaW5lZCIsImNhdGNoIiwidGhlbiIsIndpcmVWYWx1ZSIsInRyYW5zZmVyYWJsZXMiLCJ0b1dpcmVWYWx1ZSIsInBvc3RNZXNzYWdlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsb3NlRW5kUG9pbnQiLCJlbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiaXNNZXNzYWdlUG9ydCIsImNsb3NlIiwidGhyb3dJZlByb3h5UmVsZWFzZWQiLCJpc1JlbGVhc2VkIiwiaXNQcm94eVJlbGVhc2VkIiwiUHJveHkiLCJnZXQiLCJfdGFyZ2V0IiwicmVxdWVzdFJlc3BvbnNlTWVzc2FnZSIsInAiLCJsZW5ndGgiLCJyIiwiYmluZCIsIl90aGlzQXJnIiwicmF3QXJndW1lbnRMaXN0IiwibGFzdCIsInByb2Nlc3NBcmd1bWVudHMiLCJjb25zdHJ1Y3QiLCJwcm9jZXNzZWQiLCJ2IiwiYXJyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjb25jYXQiLCJXZWFrTWFwIiwiaGFuZGxlciIsInNlcmlhbGl6ZWRWYWx1ZSIsIm1zZyIsImZpbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiam9pbiIsImwiXSwic291cmNlUm9vdCI6IiJ9