(()=>{"use strict";var t,e,n={572:(t,e,n)=>{var r,o=n(375),i=n(872),a=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},u=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};importScripts("https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js");var l=function(t){function e(){var e=t.call(this)||this;return e.pyodide={},e.initialized=!1,e.globals=new Map,e}return a(e,t),e.prototype.launch=function(e,n,r){return s(this,void 0,void 0,(function(){var o,i,a=this;return u(this,(function(s){switch(s.label){case 0:return[4,t.prototype.launch.call(this,e,n,r)];case 1:return s.sent(),[4,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",fullStdLib:!1})];case 2:return o=s.sent(),this.pyodide=o,[4,this.runCode('\nfrom pyodide import to_js\nimport sys\n\ndef __override_builtins(cb):\n    __capture_stdout(cb)\n    __override_stdin(cb)\n    # set name to main instead of builtins\n    globals()["__name__"] = "__main__"\n\ndef __capture_stdout(cb):\n    class _OutputWriter:\n        def __init__(self):\n            self.encoding = "utf-8"\n            \n        def write(self, s):\n            cb(to_js({"type": "output", "data":s}))\n\n        def flush(self):\n            pass # Given data is always immediately written\n\n    sys.stdout = _OutputWriter()\n\ndef __override_stdin(cb):\n    global input\n    def __dodona_input(prompt=""):\n        print(prompt, end="")\n        user_value = cb(to_js({"type": "input", "data":prompt}))\n        print(user_value)\n        return user_value\n\n    input = __dodona_input\n',0)];case 3:return s.sent(),i=function(t){var e="toJs"in t?t.toJs():Object.fromEntries(t);return a.onEvent(e)},this.pyodide.globals.get("__override_builtins")(i),this.globals=new Map(this.pyodide.globals.toJs()),this.initialized=!0,[2]}}))}))},e.prototype._cleanScope=function(){var t,e,n=this.pyodide.globals,r=[];try{for(var o=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(n.keys()),i=o.next();!i.done;i=o.next()){var a=i.value;this.globals.has(a)?n.set(a,this.globals.get(a)):r.push(a)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}r.forEach((function(t){return n.delete(t)}))},e.prototype._runCodeInternal=function(t){return s(this,void 0,void 0,(function(){var e;return u(this,(function(n){switch(n.label){case 0:return[4,this.pyodide.loadPackagesFromImports(t)];case 1:return n.sent(),this.initialized?(e=this.pyodide.runPython(t),this._cleanScope(),[2,e]):[2,this.pyodide.runPythonAsync(t)]}}))}))},e}(i.z);(0,o.Jj)(new l)}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return n[t](i,i.exports,o),i.exports}o.m=n,o.x=()=>{var t=o.O(void 0,[114],(()=>o(572)));return o.O(t)},t=[],o.O=(e,n,r,i)=>{if(!n){var a=1/0;for(c=0;c<t.length;c++){for(var[n,r,i]=t[c],s=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((t=>o.O[t](n[u])))?n.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,n)=>(o.f[n](t,e),e)),[])),o.u=t=>t+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={572:1};o.f.i=(e,n)=>{t[e]||importScripts(o.p+o.u(e))};var e=self.webpackChunkpapyros=self.webpackChunkpapyros||[],n=e.push.bind(e);e.push=e=>{var[r,i,a]=e;for(var s in i)o.o(i,s)&&(o.m[s]=i[s]);for(a&&a(o);r.length;)t[r.pop()]=1;n(e)}})(),e=o.x,o.x=()=>o.e(114).then(e),o.x()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL3BhcHlyb3MvLi9zcmMvd29ya2Vycy9weXRob24vUHl0aG9uV29ya2VyLndvcmtlci50cyIsIndlYnBhY2s6Ly9wYXB5cm9zLy4vc3JjL3dvcmtlcnMvcHl0aG9uL2luaXQucHkudHMiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCJ2YXIgbmV4dCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZSgxMTQpLnRoZW4obmV4dCk7XG59OyIsImltcG9ydCB7IGV4cG9zZSB9IGZyb20gXCJjb21saW5rXCI7XG5pbXBvcnQgeyBCYWNrZW5kIH0gZnJvbSBcIi4uLy4uL0JhY2tlbmRcIjtcbmltcG9ydCB7IFBhcHlyb3NFdmVudCB9IGZyb20gXCIuLi8uLi9QYXB5cm9zRXZlbnRcIjtcbmltcG9ydCB7IElOSVRJQUxJWkFUSU9OX0NPREUgfSBmcm9tIFwiLi9pbml0LnB5XCI7XG5cbmludGVyZmFjZSBQeW9kaWRlIHtcbiAgICBydW5QeXRob246IChjb2RlOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkpID0+IGFueTtcbiAgICBydW5QeXRob25Bc3luYzogKGNvZGU6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgICBsb2FkUGFja2FnZXNGcm9tSW1wb3J0czogKGNvZGU6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgICBnbG9iYWxzOiBNYXA8c3RyaW5nLCBhbnk+O1xufVxuZGVjbGFyZSBmdW5jdGlvbiBpbXBvcnRTY3JpcHRzKC4uLnVybHM6IHN0cmluZ1tdKTogdm9pZDtcbmRlY2xhcmUgZnVuY3Rpb24gbG9hZFB5b2RpZGUoYXJnczogeyBpbmRleFVSTDogc3RyaW5nOyBmdWxsU3RkTGliOiBib29sZWFuIH0pOiBQcm9taXNlPFB5b2RpZGU+O1xuXG5pbXBvcnRTY3JpcHRzKFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L3B5b2RpZGUvdjAuMTguMS9mdWxsL3B5b2RpZGUuanNcIik7XG5cblxuY2xhc3MgUHl0aG9uV29ya2VyIGV4dGVuZHMgQmFja2VuZCB7XG4gICAgcHlvZGlkZTogUHlvZGlkZTtcbiAgICBpbml0aWFsaXplZDogYm9vbGVhbjtcbiAgICBnbG9iYWxzOiBNYXA8c3RyaW5nLCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHlvZGlkZSA9IHt9IGFzIFB5b2RpZGU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nbG9iYWxzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGFzeW5jIGxhdW5jaChvbkV2ZW50OiAoZTogUGFweXJvc0V2ZW50KSA9PiB2b2lkLFxuICAgICAgICBpbnB1dFRleHRBcnJheT86IFVpbnQ4QXJyYXksIGlucHV0TWV0YURhdGE/OiBJbnQzMkFycmF5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHN1cGVyLmxhdW5jaChvbkV2ZW50LCBpbnB1dFRleHRBcnJheSwgaW5wdXRNZXRhRGF0YSk7XG4gICAgICAgIGNvbnN0IHB5b2RpZGUgPSBhd2FpdCBsb2FkUHlvZGlkZSh7XG4gICAgICAgICAgICBpbmRleFVSTDogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvcHlvZGlkZS92MC4xOC4xL2Z1bGwvXCIsXG4gICAgICAgICAgICBmdWxsU3RkTGliOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5weW9kaWRlID0gcHlvZGlkZTtcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5Db2RlKElOSVRJQUxJWkFUSU9OX0NPREUsIDApO1xuICAgICAgICAvLyBQeXRob24gY2FsbHMgb3VyIGZ1bmN0aW9uIHdpdGggYSBkaWN0LCB3aGljaCBtdXN0IGJlIGNvbnZlcnRlZCB0byBhIFBhcHlyb3NFdmVudFxuICAgICAgICBjb25zdCBldmVudENhbGxiYWNrID0gKGRhdGE6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QganNFdmVudDogUGFweXJvc0V2ZW50ID0gXCJ0b0pzXCIgaW4gZGF0YSA/IGRhdGEudG9KcygpIDogT2JqZWN0LmZyb21FbnRyaWVzKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25FdmVudChqc0V2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5weW9kaWRlLmdsb2JhbHMuZ2V0KFwiX19vdmVycmlkZV9idWlsdGluc1wiKShldmVudENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5nbG9iYWxzID0gbmV3IE1hcCgodGhpcy5weW9kaWRlLmdsb2JhbHMgYXMgYW55KS50b0pzKCkpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfY2xlYW5TY29wZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gRmluZCB0aGUgbmV3bHkgYWRkZWQgZ2xvYmFsc1xuICAgICAgICBjb25zdCBweW9kaWRlR2xvYmFscyA9IHRoaXMucHlvZGlkZS5nbG9iYWxzO1xuICAgICAgICBjb25zdCBrZXlzVG9SZW1vdmU6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgcHlvZGlkZUdsb2JhbHMua2V5cygpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2xvYmFscy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGtleXNUb1JlbW92ZS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHZhbHVlIGluIGNhc2UgaXQgd2FzIG92ZXJyaWRlblxuICAgICAgICAgICAgICAgIHB5b2RpZGVHbG9iYWxzLnNldChrZXksIHRoaXMuZ2xvYmFscy5nZXQoa2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRoZW0gZnJvbSB0aGUgYWN0dWFsIGdsb2JhbHNcbiAgICAgICAgLy8gU2VwYXJhdGUgcnVucyBvZiBjb2RlIHNob3VsZCBub3QgYmUgYWJsZSB0byBhY2Nlc3MgdmFyaWFibGVzL2Z1bmN0aW9uc1xuICAgICAgICAvLyB0aGF0IHdlcmUgZGVmaW5lZCBlYXJsaWVyIG9uLCBhcyB0aGlzIGNvdWxkIGNhdXNlIG5vbi1vYnZpb3VzIGJ1Z3NcbiAgICAgICAga2V5c1RvUmVtb3ZlLmZvckVhY2goayA9PiBweW9kaWRlR2xvYmFscy5kZWxldGUoaykpO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGFzeW5jIF9ydW5Db2RlSW50ZXJuYWwoY29kZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5weW9kaWRlLmxvYWRQYWNrYWdlc0Zyb21JbXBvcnRzKGNvZGUpO1xuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgLy8gcnVuIHRoZSBjb2RlLCBwb3RlbnRpYWxseSBwb2xsdXRpbmcgdGhlIG5hbWVzcGFjZVxuICAgICAgICAgICAgLy8gRnVuY3Rpb25zIGFuZCB2YXJpYWJsZXMgZGVmaW5lZCBieSB0aGUgdXNlciBiZWNvbWUgZ2xvYmFsXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRoZW0gdG8gYmUgZ2xvYmFsIHRvIGxldCBkb2N0ZXN0IHdvcmsgb3V0IG9mIHRoZSBib3hcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHlvZGlkZS5ydW5QeXRob24oY29kZSk7XG4gICAgICAgICAgICAvLyBDbGVhbnVwIHRoZSBzY29wZSBhZnRlciBjb21wdXRhdGlvbnMgYXJlIGRvbmVcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuU2NvcGUoKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5weW9kaWRlLnJ1blB5dGhvbkFzeW5jKGNvZGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvc2UobmV3IFB5dGhvbldvcmtlcigpKTtcbiIsImV4cG9ydCBjb25zdCBJTklUSUFMSVpBVElPTl9DT0RFID1cbiAgICBgXG5mcm9tIHB5b2RpZGUgaW1wb3J0IHRvX2pzXG5pbXBvcnQgc3lzXG5cbmRlZiBfX292ZXJyaWRlX2J1aWx0aW5zKGNiKTpcbiAgICBfX2NhcHR1cmVfc3Rkb3V0KGNiKVxuICAgIF9fb3ZlcnJpZGVfc3RkaW4oY2IpXG4gICAgIyBzZXQgbmFtZSB0byBtYWluIGluc3RlYWQgb2YgYnVpbHRpbnNcbiAgICBnbG9iYWxzKClbXCJfX25hbWVfX1wiXSA9IFwiX19tYWluX19cIlxuXG5kZWYgX19jYXB0dXJlX3N0ZG91dChjYik6XG4gICAgY2xhc3MgX091dHB1dFdyaXRlcjpcbiAgICAgICAgZGVmIF9faW5pdF9fKHNlbGYpOlxuICAgICAgICAgICAgc2VsZi5lbmNvZGluZyA9IFwidXRmLThcIlxuICAgICAgICAgICAgXG4gICAgICAgIGRlZiB3cml0ZShzZWxmLCBzKTpcbiAgICAgICAgICAgIGNiKHRvX2pzKHtcInR5cGVcIjogXCJvdXRwdXRcIiwgXCJkYXRhXCI6c30pKVxuXG4gICAgICAgIGRlZiBmbHVzaChzZWxmKTpcbiAgICAgICAgICAgIHBhc3MgIyBHaXZlbiBkYXRhIGlzIGFsd2F5cyBpbW1lZGlhdGVseSB3cml0dGVuXG5cbiAgICBzeXMuc3Rkb3V0ID0gX091dHB1dFdyaXRlcigpXG5cbmRlZiBfX292ZXJyaWRlX3N0ZGluKGNiKTpcbiAgICBnbG9iYWwgaW5wdXRcbiAgICBkZWYgX19kb2RvbmFfaW5wdXQocHJvbXB0PVwiXCIpOlxuICAgICAgICBwcmludChwcm9tcHQsIGVuZD1cIlwiKVxuICAgICAgICB1c2VyX3ZhbHVlID0gY2IodG9fanMoe1widHlwZVwiOiBcImlucHV0XCIsIFwiZGF0YVwiOnByb21wdH0pKVxuICAgICAgICBwcmludCh1c2VyX3ZhbHVlKVxuICAgICAgICByZXR1cm4gdXNlcl92YWx1ZVxuXG4gICAgaW5wdXQgPSBfX2RvZG9uYV9pbnB1dFxuYDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5cdC8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFsxMTRdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg1NzIpKSlcblx0X193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcblx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG59O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzIGFuZCBzaWJsaW5nIGNodW5rcyBmb3IgdGhlIGVudHJ5cG9pbnRcbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDU3MjogMVxufTtcblxuLy8gaW1wb3J0U2NyaXB0cyBjaHVuayBsb2FkaW5nXG52YXIgaW5zdGFsbENodW5rID0gKGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR3aGlsZShjaHVua0lkcy5sZW5ndGgpXG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzLnBvcCgpXSA9IDE7XG5cdHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xufTtcbl9fd2VicGFja19yZXF1aXJlX18uZi5pID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuXHRpZighaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdGltcG9ydFNjcmlwdHMoX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKTtcblx0XHR9XG5cdH1cbn07XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcGFweXJvc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwYXB5cm9zXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBpbnN0YWxsQ2h1bms7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJuYW1lcyI6WyJkZWZlcnJlZCIsIm5leHQiLCJpbXBvcnRTY3JpcHRzIiwicHlvZGlkZSIsImluaXRpYWxpemVkIiwiZ2xvYmFscyIsIk1hcCIsImxhdW5jaCIsIm9uRXZlbnQiLCJpbnB1dFRleHRBcnJheSIsImlucHV0TWV0YURhdGEiLCJsb2FkUHlvZGlkZSIsImluZGV4VVJMIiwiZnVsbFN0ZExpYiIsInRoaXMiLCJydW5Db2RlIiwiZXZlbnRDYWxsYmFjayIsImRhdGEiLCJqc0V2ZW50IiwidG9KcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZ2V0IiwiX2NsZWFuU2NvcGUiLCJweW9kaWRlR2xvYmFscyIsImtleXNUb1JlbW92ZSIsImtleXMiLCJrZXkiLCJoYXMiLCJzZXQiLCJwdXNoIiwiZm9yRWFjaCIsImsiLCJkZWxldGUiLCJfcnVuQ29kZUludGVybmFsIiwiY29kZSIsImxvYWRQYWNrYWdlc0Zyb21JbXBvcnRzIiwicmVzdWx0IiwicnVuUHl0aG9uIiwicnVuUHl0aG9uQXN5bmMiLCJCYWNrZW5kIiwiUHl0aG9uV29ya2VyIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJtIiwieCIsIl9fd2VicGFja19leHBvcnRzX18iLCJPIiwiY2h1bmtJZHMiLCJmbiIsInByaW9yaXR5Iiwibm90RnVsZmlsbGVkIiwiSW5maW5pdHkiLCJpIiwibGVuZ3RoIiwiZnVsZmlsbGVkIiwiaiIsImV2ZXJ5Iiwic3BsaWNlIiwiciIsImQiLCJkZWZpbml0aW9uIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImYiLCJlIiwiY2h1bmtJZCIsIlByb21pc2UiLCJhbGwiLCJyZWR1Y2UiLCJwcm9taXNlcyIsInUiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwid2luZG93Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNjcmlwdFVybCIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImluc3RhbGxlZENodW5rcyIsImNodW5rTG9hZGluZ0dsb2JhbCIsInNlbGYiLCJwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiIsImJpbmQiLCJtb3JlTW9kdWxlcyIsInJ1bnRpbWUiLCJwb3AiLCJ0aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==