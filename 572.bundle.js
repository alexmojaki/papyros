(()=>{"use strict";var t,e,n={572:(t,e,n)=>{var r,o=n(375),i=n(872),s=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,u)}a((r=r.apply(t,e||[])).next())}))},a=function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};importScripts("https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js");var l=function(t){function e(){var e=t.call(this)||this;return e.pyodide={},e.initialized=!1,e}return s(e,t),e.prototype.launch=function(e,n,r){return u(this,void 0,void 0,(function(){var o,i,s=this;return a(this,(function(u){switch(u.label){case 0:return[4,t.prototype.launch.call(this,e,n,r)];case 1:return u.sent(),[4,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",fullStdLib:!0})];case 2:return o=u.sent(),this.pyodide=o,[4,this.runCode('\nfrom pyodide import to_js\nimport sys\n\ndef __override_builtins(cb):\n    __capture_stdout(cb)\n    __override_stdin(cb)\n\ndef __capture_stdout(cb):\n    class _OutputWriter:\n\n        def write(self, s):\n            cb(to_js({"type": "output", "data":s}))\n\n        def flush(self):\n            pass # Given data is always immediately written\n\n    global print\n    __original_print = print\n    __writer = _OutputWriter()\n\n    def __dodona_print(*objects, sep=\' \', end=\'\\n\', file=sys.stdout, flush=False):\n        if file == sys.stdout:\n            __original_print(*objects, sep=sep, end=end, file=__writer, flush=flush)\n        else:\n            __original_print(*objects, sep=sep, end=end, file=file, flush=flush)\n\n    print = __dodona_print\n\ndef __override_stdin(cb):\n    global input\n    def __dodona_input(prompt=""):\n        print(prompt, end="")\n        user_value = cb(to_js({"type": "input", "data":prompt}))\n        print(user_value)\n        return user_value\n\n    input = __dodona_input\n\ndef __run_code(code):\n    return exec(code, dict(globals()))\n',0)];case 3:return u.sent(),i=function(t){return s.onEvent(Object.fromEntries(t))},this.pyodide.globals.get("__override_builtins")(i),this.initialized=!0,[2]}}))}))},e.prototype._runCodeInternal=function(t){return u(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,this.pyodide.loadPackagesFromImports(t)];case 1:return e.sent(),this.initialized?[2,this.pyodide.globals.get("__run_code")(t)]:[2,this.pyodide.runPythonAsync(t)]}}))}))},e}(i.z);(0,o.Jj)(new l)}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return n[t](i,i.exports,o),i.exports}o.m=n,o.x=()=>{var t=o.O(void 0,[114],(()=>o(572)));return o.O(t)},t=[],o.O=(e,n,r,i)=>{if(!n){var s=1/0;for(c=0;c<t.length;c++){for(var[n,r,i]=t[c],u=!0,a=0;a<n.length;a++)(!1&i||s>=i)&&Object.keys(o.O).every((t=>o.O[t](n[a])))?n.splice(a--,1):(u=!1,i<s&&(s=i));if(u){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,n)=>(o.f[n](t,e),e)),[])),o.u=t=>t+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={572:1};o.f.i=(e,n)=>{t[e]||importScripts(o.p+o.u(e))};var e=self.webpackChunkpapyros=self.webpackChunkpapyros||[],n=e.push.bind(e);e.push=e=>{var[r,i,s]=e;for(var u in i)o.o(i,u)&&(o.m[u]=i[u]);for(s&&s(o);r.length;)t[r.pop()]=1;n(e)}})(),e=o.x,o.x=()=>o.e(114).then(e),o.x()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjFELGNBQWN5QixFQUFvQnlELEVBQUl6RCxFQUFvQnNDLEVBQUVMLEtBSy9ELElBQUkwQixFQUFxQkMsS0FBMEIsb0JBQUlBLEtBQTBCLHFCQUFLLEdBQ2xGQyxFQUE2QkYsRUFBbUJHLEtBQUtDLEtBQUtKLEdBQzlEQSxFQUFtQkcsS0F2QkMxRSxJQUNuQixJQUFLd0IsRUFBVW9ELEVBQWFDLEdBQVc3RSxFQUN2QyxJQUFJLElBQUlhLEtBQVkrRCxFQUNoQmhFLEVBQW9CNEIsRUFBRW9DLEVBQWEvRCxLQUNyQ0QsRUFBb0JPLEVBQUVOLEdBQVkrRCxFQUFZL0QsSUFJaEQsSUFER2dFLEdBQVNBLEVBQVFqRSxHQUNkWSxFQUFTTSxRQUNkd0MsRUFBZ0I5QyxFQUFTc0QsT0FBUyxFQUNuQ0wsRUFBMkJ6RSxLLEdWbkJ4QmQsRUFBTzBCLEVBQW9CUSxFQUMvQlIsRUFBb0JRLEVBQUksSUFDaEJSLEVBQW9CZ0MsRUFBRSxLQUFLbUMsS0FBSzdGLEdXRGQwQixFQUFvQlEsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9zdGFydHVwIGNodW5rIGRlcGVuZGVuY2llcyIsIndlYnBhY2s6Ly9wYXB5cm9zLy4vc3JjL3dvcmtlcnMvcHl0aG9uL1B5dGhvbldvcmtlci53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vcGFweXJvcy8uL3NyYy93b3JrZXJzL3B5dGhvbi9pbml0LnB5LnRzIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIG5leHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoMTE0KS50aGVuKG5leHQpO1xufTsiLCJpbXBvcnQgeyBleHBvc2UgfSBmcm9tIFwiY29tbGlua1wiO1xuaW1wb3J0IHsgQmFja2VuZCB9IGZyb20gXCIuLi8uLi9CYWNrZW5kXCI7XG5pbXBvcnQgeyBQYXB5cm9zRXZlbnQgfSBmcm9tIFwiLi4vLi4vUGFweXJvc0V2ZW50XCI7XG5pbXBvcnQgeyBJTklUSUFMSVpBVElPTl9DT0RFIH0gZnJvbSBcIi4vaW5pdC5weVwiO1xuXG5pbnRlcmZhY2UgTG9hZFB5b2RpZGVBcmdzIHtcbiAgICBpbmRleFVSTDogc3RyaW5nO1xuICAgIGZ1bGxTdGRMaWI6IGJvb2xlYW47XG59XG5pbnRlcmZhY2UgUHlvZGlkZSB7XG4gICAgcnVuUHl0aG9uQXN5bmM6IChjb2RlOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gICAgbG9hZFBhY2thZ2VzRnJvbUltcG9ydHM6IChjb2RlOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gICAgZ2xvYmFsczogTWFwPHN0cmluZywgYW55Pjtcbn1cbmRlY2xhcmUgZnVuY3Rpb24gaW1wb3J0U2NyaXB0cyguLi51cmxzOiBzdHJpbmdbXSk6IHZvaWQ7XG5kZWNsYXJlIGZ1bmN0aW9uIGxvYWRQeW9kaWRlKGFyZ3M6IExvYWRQeW9kaWRlQXJncyk6IFByb21pc2U8UHlvZGlkZT47XG5cbmltcG9ydFNjcmlwdHMoXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvcHlvZGlkZS92MC4xOC4xL2Z1bGwvcHlvZGlkZS5qc1wiKTtcblxuXG5jbGFzcyBQeXRob25Xb3JrZXIgZXh0ZW5kcyBCYWNrZW5kIHtcbiAgICBweW9kaWRlOiBQeW9kaWRlO1xuICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHlvZGlkZSA9IHt9IGFzIFB5b2RpZGU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBhc3luYyBsYXVuY2gob25FdmVudDogKGU6IFBhcHlyb3NFdmVudCkgPT4gdm9pZCxcbiAgICAgICAgaW5wdXRUZXh0QXJyYXk/OiBVaW50OEFycmF5LCBpbnB1dE1ldGFEYXRhPzogSW50MzJBcnJheSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBzdXBlci5sYXVuY2gob25FdmVudCwgaW5wdXRUZXh0QXJyYXksIGlucHV0TWV0YURhdGEpO1xuICAgICAgICBjb25zdCBweW9kaWRlID0gYXdhaXQgbG9hZFB5b2RpZGUoe1xuICAgICAgICAgICAgaW5kZXhVUkw6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L3B5b2RpZGUvdjAuMTguMS9mdWxsL1wiLFxuICAgICAgICAgICAgZnVsbFN0ZExpYjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5weW9kaWRlID0gcHlvZGlkZTtcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5Db2RlKElOSVRJQUxJWkFUSU9OX0NPREUsIDApO1xuICAgICAgICAvLyBQeXRob24gY2FsbHMgb3VyIGZ1bmN0aW9uIHdpdGggYSBkaWN0LCB3aGljaCBtdXN0IGJlIGNvbnZlcnRlZCB0byBhIFBhcHlyb3NFdmVudFxuICAgICAgICBjb25zdCBldmVudENhbGxiYWNrID0gKGRhdGE6IE1hcDxzdHJpbmcsIGFueT4pOiB2b2lkID0+XG4gICAgICAgICAgICB0aGlzLm9uRXZlbnQoT2JqZWN0LmZyb21FbnRyaWVzKGRhdGEpIGFzIFBhcHlyb3NFdmVudCk7XG4gICAgICAgIHRoaXMucHlvZGlkZS5nbG9iYWxzLmdldChcIl9fb3ZlcnJpZGVfYnVpbHRpbnNcIikoZXZlbnRDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGFzeW5jIF9ydW5Db2RlSW50ZXJuYWwoY29kZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5weW9kaWRlLmxvYWRQYWNrYWdlc0Zyb21JbXBvcnRzKGNvZGUpO1xuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHlvZGlkZS5nbG9iYWxzLmdldChcIl9fcnVuX2NvZGVcIikoY29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5weW9kaWRlLnJ1blB5dGhvbkFzeW5jKGNvZGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvc2UobmV3IFB5dGhvbldvcmtlcigpKTtcbiIsImV4cG9ydCBjb25zdCBJTklUSUFMSVpBVElPTl9DT0RFID1cbiAgICBgXG5mcm9tIHB5b2RpZGUgaW1wb3J0IHRvX2pzXG5pbXBvcnQgc3lzXG5cbmRlZiBfX292ZXJyaWRlX2J1aWx0aW5zKGNiKTpcbiAgICBfX2NhcHR1cmVfc3Rkb3V0KGNiKVxuICAgIF9fb3ZlcnJpZGVfc3RkaW4oY2IpXG5cbmRlZiBfX2NhcHR1cmVfc3Rkb3V0KGNiKTpcbiAgICBjbGFzcyBfT3V0cHV0V3JpdGVyOlxuXG4gICAgICAgIGRlZiB3cml0ZShzZWxmLCBzKTpcbiAgICAgICAgICAgIGNiKHRvX2pzKHtcInR5cGVcIjogXCJvdXRwdXRcIiwgXCJkYXRhXCI6c30pKVxuXG4gICAgICAgIGRlZiBmbHVzaChzZWxmKTpcbiAgICAgICAgICAgIHBhc3MgIyBHaXZlbiBkYXRhIGlzIGFsd2F5cyBpbW1lZGlhdGVseSB3cml0dGVuXG5cbiAgICBnbG9iYWwgcHJpbnRcbiAgICBfX29yaWdpbmFsX3ByaW50ID0gcHJpbnRcbiAgICBfX3dyaXRlciA9IF9PdXRwdXRXcml0ZXIoKVxuXG4gICAgZGVmIF9fZG9kb25hX3ByaW50KCpvYmplY3RzLCBzZXA9JyAnLCBlbmQ9J1xcXFxuJywgZmlsZT1zeXMuc3Rkb3V0LCBmbHVzaD1GYWxzZSk6XG4gICAgICAgIGlmIGZpbGUgPT0gc3lzLnN0ZG91dDpcbiAgICAgICAgICAgIF9fb3JpZ2luYWxfcHJpbnQoKm9iamVjdHMsIHNlcD1zZXAsIGVuZD1lbmQsIGZpbGU9X193cml0ZXIsIGZsdXNoPWZsdXNoKVxuICAgICAgICBlbHNlOlxuICAgICAgICAgICAgX19vcmlnaW5hbF9wcmludCgqb2JqZWN0cywgc2VwPXNlcCwgZW5kPWVuZCwgZmlsZT1maWxlLCBmbHVzaD1mbHVzaClcblxuICAgIHByaW50ID0gX19kb2RvbmFfcHJpbnRcblxuZGVmIF9fb3ZlcnJpZGVfc3RkaW4oY2IpOlxuICAgIGdsb2JhbCBpbnB1dFxuICAgIGRlZiBfX2RvZG9uYV9pbnB1dChwcm9tcHQ9XCJcIik6XG4gICAgICAgIHByaW50KHByb21wdCwgZW5kPVwiXCIpXG4gICAgICAgIHVzZXJfdmFsdWUgPSBjYih0b19qcyh7XCJ0eXBlXCI6IFwiaW5wdXRcIiwgXCJkYXRhXCI6cHJvbXB0fSkpXG4gICAgICAgIHByaW50KHVzZXJfdmFsdWUpXG4gICAgICAgIHJldHVybiB1c2VyX3ZhbHVlXG5cbiAgICBpbnB1dCA9IF9fZG9kb25hX2lucHV0XG5cbmRlZiBfX3J1bl9jb2RlKGNvZGUpOlxuICAgIHJldHVybiBleGVjKGNvZGUsIGRpY3QoZ2xvYmFscygpKSlcbmA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcblx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbMTE0XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNTcyKSkpXG5cdF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cdHJldHVybiBfX3dlYnBhY2tfZXhwb3J0c19fO1xufTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rcyBhbmQgc2libGluZyBjaHVua3MgZm9yIHRoZSBlbnRyeXBvaW50XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuYnVuZGxlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQ1NzI6IDFcbn07XG5cbi8vIGltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZ1xudmFyIGluc3RhbGxDaHVuayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRpbXBvcnRTY3JpcHRzKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSk7XG5cdFx0fVxuXHR9XG59O1xuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BhcHlyb3NcIl0gPSBzZWxmW1wid2VicGFja0NodW5rcGFweXJvc1wiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gaW5zdGFsbENodW5rO1xuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0IiwiLy8gcnVuIHN0YXJ0dXBcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwibmFtZXMiOlsiZGVmZXJyZWQiLCJuZXh0IiwiaW1wb3J0U2NyaXB0cyIsInB5b2RpZGUiLCJpbml0aWFsaXplZCIsImxhdW5jaCIsIm9uRXZlbnQiLCJpbnB1dFRleHRBcnJheSIsImlucHV0TWV0YURhdGEiLCJsb2FkUHlvZGlkZSIsImluZGV4VVJMIiwiZnVsbFN0ZExpYiIsInRoaXMiLCJydW5Db2RlIiwiZXZlbnRDYWxsYmFjayIsImRhdGEiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImdsb2JhbHMiLCJnZXQiLCJfcnVuQ29kZUludGVybmFsIiwiY29kZSIsImxvYWRQYWNrYWdlc0Zyb21JbXBvcnRzIiwicnVuUHl0aG9uQXN5bmMiLCJCYWNrZW5kIiwiUHl0aG9uV29ya2VyIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJtIiwieCIsIl9fd2VicGFja19leHBvcnRzX18iLCJPIiwicmVzdWx0IiwiY2h1bmtJZHMiLCJmbiIsInByaW9yaXR5Iiwibm90RnVsZmlsbGVkIiwiSW5maW5pdHkiLCJpIiwibGVuZ3RoIiwiZnVsZmlsbGVkIiwiaiIsImtleXMiLCJldmVyeSIsImtleSIsInNwbGljZSIsInIiLCJkIiwiZGVmaW5pdGlvbiIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJmIiwiZSIsImNodW5rSWQiLCJQcm9taXNlIiwiYWxsIiwicmVkdWNlIiwicHJvbWlzZXMiLCJ1IiwiZyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsIndpbmRvdyIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzY3JpcHRVcmwiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJpbnN0YWxsZWRDaHVua3MiLCJjaHVua0xvYWRpbmdHbG9iYWwiLCJzZWxmIiwicGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24iLCJwdXNoIiwiYmluZCIsIm1vcmVNb2R1bGVzIiwicnVudGltZSIsInBvcCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9