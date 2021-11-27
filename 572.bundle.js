(()=>{"use strict";var t,e,n={572:(t,e,n)=>{var r,o=n(375),i=n(872),a=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},u=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};importScripts("https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js");var l=function(t){function e(){var e=t.call(this)||this;return e.pyodide={},e.initialized=!1,e.globals=new Map,e}return a(e,t),e.prototype.launch=function(e,n,r){return s(this,void 0,void 0,(function(){var o,i,a=this;return u(this,(function(s){switch(s.label){case 0:return[4,t.prototype.launch.call(this,e,n,r)];case 1:return s.sent(),[4,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",fullStdLib:!1})];case 2:return o=s.sent(),this.pyodide=o,[4,this.runCode('\nfrom pyodide import to_js\nimport sys\n\ndef __override_builtins(cb):\n    __capture_stdout(cb)\n    __override_stdin(cb)\n    # set name to main instead of builtins\n    globals()["__name__"] = "__main__"\n\ndef __capture_stdout(cb):\n    class _OutputWriter:\n        def __init__(self):\n            self.encoding = "utf-8"\n            \n        def write(self, s):\n            cb(to_js({"type": "output", "data":s}))\n\n        def flush(self):\n            pass # Given data is always immediately written\n\n    sys.stdout = _OutputWriter()\n\ndef __override_stdin(cb):\n    global input\n    def __dodona_input(prompt=""):\n        print(prompt, end="")\n        user_value = cb(to_js({"type": "input", "data":prompt}))\n        print(user_value)\n        return user_value\n\n    input = __dodona_input\n',0)];case 3:return s.sent(),i=function(t){var e="toJs"in t?t.toJs():Object.fromEntries(t);a.onEvent(e)},this.pyodide.globals.get("__override_builtins")(i),this.globals=new Map(this.pyodide.globals.toJs()),this.initialized=!0,[2]}}))}))},e.prototype._cleanScope=function(){var t,e,n=this.pyodide.globals,r=[];try{for(var o=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(n.keys()),i=o.next();!i.done;i=o.next()){var a=i.value;this.globals.has(a)?n.set(a,this.globals.get(a)):r.push(a)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}r.forEach((function(t){return n.delete(t)}))},e.prototype._runCodeInternal=function(t){return s(this,void 0,void 0,(function(){var e;return u(this,(function(n){switch(n.label){case 0:return[4,this.pyodide.loadPackagesFromImports(t)];case 1:return n.sent(),this.initialized?(e=this.pyodide.runPython(t),this._cleanScope(),[2,e]):[2,this.pyodide.runPythonAsync(t)]}}))}))},e}(i.z);(0,o.Jj)(new l)}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return n[t](i,i.exports,o),i.exports}o.m=n,o.x=()=>{var t=o.O(void 0,[114],(()=>o(572)));return o.O(t)},t=[],o.O=(e,n,r,i)=>{if(!n){var a=1/0;for(c=0;c<t.length;c++){for(var[n,r,i]=t[c],s=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((t=>o.O[t](n[u])))?n.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,n)=>(o.f[n](t,e),e)),[])),o.u=t=>t+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={572:1};o.f.i=(e,n)=>{t[e]||importScripts(o.p+o.u(e))};var e=self.webpackChunkpapyros=self.webpackChunkpapyros||[],n=e.push.bind(e);e.push=e=>{var[r,i,a]=e;for(var s in i)o.o(i,s)&&(o.m[s]=i[s]);for(a&&a(o);r.length;)t[r.pop()]=1;n(e)}})(),e=o.x,o.x=()=>o.e(114).then(e),o.x()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9zdGFydHVwIGNodW5rIGRlcGVuZGVuY2llcyIsIndlYnBhY2s6Ly9wYXB5cm9zLy4vc3JjL3dvcmtlcnMvcHl0aG9uL1B5dGhvbldvcmtlci53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vcGFweXJvcy8uL3NyYy93b3JrZXJzL3B5dGhvbi9pbml0LnB5LnRzIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIG5leHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoMTE0KS50aGVuKG5leHQpO1xufTsiLCJpbXBvcnQgeyBleHBvc2UgfSBmcm9tIFwiY29tbGlua1wiO1xuaW1wb3J0IHsgQmFja2VuZCB9IGZyb20gXCIuLi8uLi9CYWNrZW5kXCI7XG5pbXBvcnQgeyBQYXB5cm9zRXZlbnQgfSBmcm9tIFwiLi4vLi4vUGFweXJvc0V2ZW50XCI7XG5pbXBvcnQgeyBJTklUSUFMSVpBVElPTl9DT0RFIH0gZnJvbSBcIi4vaW5pdC5weVwiO1xuXG5pbnRlcmZhY2UgUHlvZGlkZSB7XG4gICAgcnVuUHl0aG9uOiAoY29kZTogc3RyaW5nLCBnbG9iYWxzPzogYW55KSA9PiBhbnk7XG4gICAgcnVuUHl0aG9uQXN5bmM6IChjb2RlOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gICAgbG9hZFBhY2thZ2VzRnJvbUltcG9ydHM6IChjb2RlOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gICAgZ2xvYmFsczogTWFwPHN0cmluZywgYW55Pjtcbn1cbmRlY2xhcmUgZnVuY3Rpb24gaW1wb3J0U2NyaXB0cyguLi51cmxzOiBzdHJpbmdbXSk6IHZvaWQ7XG5kZWNsYXJlIGZ1bmN0aW9uIGxvYWRQeW9kaWRlKGFyZ3M6IHsgaW5kZXhVUkw6IHN0cmluZzsgZnVsbFN0ZExpYjogYm9vbGVhbiB9KTogUHJvbWlzZTxQeW9kaWRlPjtcblxuaW1wb3J0U2NyaXB0cyhcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9weW9kaWRlL3YwLjE4LjEvZnVsbC9weW9kaWRlLmpzXCIpO1xuXG5cbmNsYXNzIFB5dGhvbldvcmtlciBleHRlbmRzIEJhY2tlbmQge1xuICAgIHB5b2RpZGU6IFB5b2RpZGU7XG4gICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG4gICAgZ2xvYmFsczogTWFwPHN0cmluZywgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnB5b2RpZGUgPSB7fSBhcyBQeW9kaWRlO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2xvYmFscyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBhc3luYyBsYXVuY2gob25FdmVudDogKGU6IFBhcHlyb3NFdmVudCkgPT4gdm9pZCxcbiAgICAgICAgaW5wdXRUZXh0QXJyYXk/OiBVaW50OEFycmF5LCBpbnB1dE1ldGFEYXRhPzogSW50MzJBcnJheSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBzdXBlci5sYXVuY2gob25FdmVudCwgaW5wdXRUZXh0QXJyYXksIGlucHV0TWV0YURhdGEpO1xuICAgICAgICBjb25zdCBweW9kaWRlID0gYXdhaXQgbG9hZFB5b2RpZGUoe1xuICAgICAgICAgICAgaW5kZXhVUkw6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L3B5b2RpZGUvdjAuMTguMS9mdWxsL1wiLFxuICAgICAgICAgICAgZnVsbFN0ZExpYjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHlvZGlkZSA9IHB5b2RpZGU7XG4gICAgICAgIGF3YWl0IHRoaXMucnVuQ29kZShJTklUSUFMSVpBVElPTl9DT0RFLCAwKTtcbiAgICAgICAgLy8gUHl0aG9uIGNhbGxzIG91ciBmdW5jdGlvbiB3aXRoIGEgZGljdCwgd2hpY2ggbXVzdCBiZSBjb252ZXJ0ZWQgdG8gYSBQYXB5cm9zRXZlbnRcbiAgICAgICAgY29uc3QgZXZlbnRDYWxsYmFjayA9IChkYXRhOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzRXZlbnQ6IFBhcHlyb3NFdmVudCA9IFwidG9Kc1wiIGluIGRhdGEgPyBkYXRhLnRvSnMoKSA6IE9iamVjdC5mcm9tRW50cmllcyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMub25FdmVudChqc0V2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5weW9kaWRlLmdsb2JhbHMuZ2V0KFwiX19vdmVycmlkZV9idWlsdGluc1wiKShldmVudENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5nbG9iYWxzID0gbmV3IE1hcCgodGhpcy5weW9kaWRlLmdsb2JhbHMgYXMgYW55KS50b0pzKCkpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfY2xlYW5TY29wZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gRmluZCB0aGUgbmV3bHkgYWRkZWQgZ2xvYmFsc1xuICAgICAgICBjb25zdCBweW9kaWRlR2xvYmFscyA9IHRoaXMucHlvZGlkZS5nbG9iYWxzO1xuICAgICAgICBjb25zdCBrZXlzVG9SZW1vdmU6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgcHlvZGlkZUdsb2JhbHMua2V5cygpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2xvYmFscy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGtleXNUb1JlbW92ZS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHZhbHVlIGluIGNhc2UgaXQgd2FzIG92ZXJyaWRlblxuICAgICAgICAgICAgICAgIHB5b2RpZGVHbG9iYWxzLnNldChrZXksIHRoaXMuZ2xvYmFscy5nZXQoa2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRoZW0gZnJvbSB0aGUgYWN0dWFsIGdsb2JhbHNcbiAgICAgICAgLy8gU2VwYXJhdGUgcnVucyBvZiBjb2RlIHNob3VsZCBub3QgYmUgYWJsZSB0byBhY2Nlc3MgdmFyaWFibGVzL2Z1bmN0aW9uc1xuICAgICAgICAvLyB0aGF0IHdlcmUgZGVmaW5lZCBlYXJsaWVyIG9uLCBhcyB0aGlzIGNvdWxkIGNhdXNlIG5vbi1vYnZpb3VzIGJ1Z3NcbiAgICAgICAga2V5c1RvUmVtb3ZlLmZvckVhY2goayA9PiBweW9kaWRlR2xvYmFscy5kZWxldGUoaykpO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGFzeW5jIF9ydW5Db2RlSW50ZXJuYWwoY29kZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5weW9kaWRlLmxvYWRQYWNrYWdlc0Zyb21JbXBvcnRzKGNvZGUpO1xuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgLy8gcnVuIHRoZSBjb2RlLCBwb3RlbnRpYWxseSBwb2xsdXRpbmcgdGhlIG5hbWVzcGFjZVxuICAgICAgICAgICAgLy8gRnVuY3Rpb25zIGFuZCB2YXJpYWJsZXMgZGVmaW5lZCBieSB0aGUgdXNlciBiZWNvbWUgZ2xvYmFsXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRoZW0gdG8gYmUgZ2xvYmFsIHRvIGxldCBkb2N0ZXN0IHdvcmsgb3V0IG9mIHRoZSBib3hcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHlvZGlkZS5ydW5QeXRob24oY29kZSk7XG4gICAgICAgICAgICAvLyBDbGVhbnVwIHRoZSBzY29wZSBhZnRlciBjb21wdXRhdGlvbnMgYXJlIGRvbmVcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuU2NvcGUoKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5weW9kaWRlLnJ1blB5dGhvbkFzeW5jKGNvZGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvc2UobmV3IFB5dGhvbldvcmtlcigpKTtcbiIsImV4cG9ydCBjb25zdCBJTklUSUFMSVpBVElPTl9DT0RFID1cbiAgICBgXG5mcm9tIHB5b2RpZGUgaW1wb3J0IHRvX2pzXG5pbXBvcnQgc3lzXG5cbmRlZiBfX292ZXJyaWRlX2J1aWx0aW5zKGNiKTpcbiAgICBfX2NhcHR1cmVfc3Rkb3V0KGNiKVxuICAgIF9fb3ZlcnJpZGVfc3RkaW4oY2IpXG4gICAgIyBzZXQgbmFtZSB0byBtYWluIGluc3RlYWQgb2YgYnVpbHRpbnNcbiAgICBnbG9iYWxzKClbXCJfX25hbWVfX1wiXSA9IFwiX19tYWluX19cIlxuXG5kZWYgX19jYXB0dXJlX3N0ZG91dChjYik6XG4gICAgY2xhc3MgX091dHB1dFdyaXRlcjpcbiAgICAgICAgZGVmIF9faW5pdF9fKHNlbGYpOlxuICAgICAgICAgICAgc2VsZi5lbmNvZGluZyA9IFwidXRmLThcIlxuICAgICAgICAgICAgXG4gICAgICAgIGRlZiB3cml0ZShzZWxmLCBzKTpcbiAgICAgICAgICAgIGNiKHRvX2pzKHtcInR5cGVcIjogXCJvdXRwdXRcIiwgXCJkYXRhXCI6c30pKVxuXG4gICAgICAgIGRlZiBmbHVzaChzZWxmKTpcbiAgICAgICAgICAgIHBhc3MgIyBHaXZlbiBkYXRhIGlzIGFsd2F5cyBpbW1lZGlhdGVseSB3cml0dGVuXG5cbiAgICBzeXMuc3Rkb3V0ID0gX091dHB1dFdyaXRlcigpXG5cbmRlZiBfX292ZXJyaWRlX3N0ZGluKGNiKTpcbiAgICBnbG9iYWwgaW5wdXRcbiAgICBkZWYgX19kb2RvbmFfaW5wdXQocHJvbXB0PVwiXCIpOlxuICAgICAgICBwcmludChwcm9tcHQsIGVuZD1cIlwiKVxuICAgICAgICB1c2VyX3ZhbHVlID0gY2IodG9fanMoe1widHlwZVwiOiBcImlucHV0XCIsIFwiZGF0YVwiOnByb21wdH0pKVxuICAgICAgICBwcmludCh1c2VyX3ZhbHVlKVxuICAgICAgICByZXR1cm4gdXNlcl92YWx1ZVxuXG4gICAgaW5wdXQgPSBfX2RvZG9uYV9pbnB1dFxuYDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5cdC8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFsxMTRdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg1NzIpKSlcblx0X193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcblx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG59O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzIGFuZCBzaWJsaW5nIGNodW5rcyBmb3IgdGhlIGVudHJ5cG9pbnRcbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDU3MjogMVxufTtcblxuLy8gaW1wb3J0U2NyaXB0cyBjaHVuayBsb2FkaW5nXG52YXIgaW5zdGFsbENodW5rID0gKGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR3aGlsZShjaHVua0lkcy5sZW5ndGgpXG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzLnBvcCgpXSA9IDE7XG5cdHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xufTtcbl9fd2VicGFja19yZXF1aXJlX18uZi5pID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuXHRpZighaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdGltcG9ydFNjcmlwdHMoX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKTtcblx0XHR9XG5cdH1cbn07XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcGFweXJvc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwYXB5cm9zXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBpbnN0YWxsQ2h1bms7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJuYW1lcyI6WyJkZWZlcnJlZCIsIm5leHQiLCJpbXBvcnRTY3JpcHRzIiwicHlvZGlkZSIsImluaXRpYWxpemVkIiwiZ2xvYmFscyIsIk1hcCIsImxhdW5jaCIsIm9uRXZlbnQiLCJpbnB1dFRleHRBcnJheSIsImlucHV0TWV0YURhdGEiLCJsb2FkUHlvZGlkZSIsImluZGV4VVJMIiwiZnVsbFN0ZExpYiIsInRoaXMiLCJydW5Db2RlIiwiZXZlbnRDYWxsYmFjayIsImRhdGEiLCJqc0V2ZW50IiwidG9KcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZ2V0IiwiX2NsZWFuU2NvcGUiLCJweW9kaWRlR2xvYmFscyIsImtleXNUb1JlbW92ZSIsImtleXMiLCJrZXkiLCJoYXMiLCJzZXQiLCJwdXNoIiwiZm9yRWFjaCIsImsiLCJkZWxldGUiLCJfcnVuQ29kZUludGVybmFsIiwiY29kZSIsImxvYWRQYWNrYWdlc0Zyb21JbXBvcnRzIiwicmVzdWx0IiwicnVuUHl0aG9uIiwicnVuUHl0aG9uQXN5bmMiLCJCYWNrZW5kIiwiUHl0aG9uV29ya2VyIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJtIiwieCIsIl9fd2VicGFja19leHBvcnRzX18iLCJPIiwiY2h1bmtJZHMiLCJmbiIsInByaW9yaXR5Iiwibm90RnVsZmlsbGVkIiwiSW5maW5pdHkiLCJpIiwibGVuZ3RoIiwiZnVsZmlsbGVkIiwiaiIsImV2ZXJ5Iiwic3BsaWNlIiwiciIsImQiLCJkZWZpbml0aW9uIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImYiLCJlIiwiY2h1bmtJZCIsIlByb21pc2UiLCJhbGwiLCJyZWR1Y2UiLCJwcm9taXNlcyIsInUiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwid2luZG93Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNjcmlwdFVybCIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImluc3RhbGxlZENodW5rcyIsImNodW5rTG9hZGluZ0dsb2JhbCIsInNlbGYiLCJwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiIsImJpbmQiLCJtb3JlTW9kdWxlcyIsInJ1bnRpbWUiLCJwb3AiLCJ0aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==