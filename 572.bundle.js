(()=>{"use strict";var e,n,t={572:(e,n,t)=>{var r,o=t(375),i=t(872),a="__init_papyros",s="__process_code",l='\nfrom pyodide import to_js, eval_code_async\nfrom js import console\nimport sys\nimport ast\nimport json\nimport html\nimport types\nimport os\nimport micropip\n# temporarily until friendly_traceback does this automatically\nawait micropip.install("stack_data")\nimport stack_data\nawait micropip.install(\'friendly_traceback\')\nimport friendly_traceback\nfrom friendly_traceback.core import FriendlyTraceback\n\n__papyros = None\n\nclass __Papyros():\n    def __init__(self, cb):\n        self.cb = cb\n        self.line = ""\n        self.override_builtins()\n\n    def message(self, data):\n        return self.cb(to_js(data))\n\n    def override_builtins(self):\n        self.override_output()\n        self.override_input()\n\n    def override_output(self):\n        class __OutputWriter:\n            def __init__(self, type, on_write):\n                self.encoding = "utf-8"\n                self.type = type\n                self.on_write = on_write\n                \n            def write(self, s):\n                self.on_write(dict(type=self.type, data=s))\n\n            def flush(self):\n                pass # Given data is always immediately written\n        on_write = lambda d: self.message(d)\n        sys.stdout = __OutputWriter("output", on_write)\n        sys.stderr = __OutputWriter("error", on_write)\n\n    def readline(self, n=-1, prompt=""):\n        if not self.line:\n            self.line = self.message(dict(type="input", data=prompt)) + "\\n"\n        if n < 0 or n > len(self.line):\n            n = len(self.line)\n        to_return = self.line[0:n]\n        self.line = self.line[n:]\n        return to_return\n\n    def override_input(self):\n        global input\n        input = lambda prompt="": self.readline(prompt=prompt)[:-1] # Remove newline\n\n        sys.stdin.readline = self.readline\n\ndef clean_traceback(tb, filename):\n    # For some reason the first character of __file__ is lost in friendly_traceback\n    for prefix in ["\\"", "\\\'", " "]:\n        tb = tb.replace(prefix + filename[1:], prefix + filename)\n    return html.escape(tb)\n\ndef format_exception(filename, exc):\n    fr = FriendlyTraceback(type(exc), exc, exc.__traceback__)\n    fr.assign_generic()\n    fr.assign_cause()\n    tb = fr.info.get("simulated_python_traceback", "No traceback")\n    info = fr.info.get("generic", "No information available.")\n    why = fr.info.get("cause", "Unknown cause")\n    suggestions = fr.info.get("suggest", "No suggestions")\n    what = fr.info.get("message", "No message")\n    user_start = 0\n    tb_lines = tb.split("\\n")\n    while user_start < len(tb_lines) and filename not in tb_lines[user_start]:\n        user_start += 1\n    name = type(exc).__name__\n    user_end = user_start + 1\n    while user_end < len(tb_lines) and name not in tb_lines[user_end]:\n        user_end += 1\n    where = "\\n".join(tb_lines[user_start:user_end]) or "No location"\n    return json.dumps(\n        dict(\n            name=name,\n            traceback=tb,\n            info=info,\n            why=why,\n            where=where,\n            what=what,\n            suggestions=suggestions\n        )\n    )\n\ndef '.concat(a,"(cb):\n    global __papyros\n    __papyros = __Papyros(cb)\n\nasync def ").concat(s,'(code, run, filename="my_code.py"):\n    with open(filename, "w") as f:\n        f.write(code)\n    friendly_traceback.source_cache.cache.add(filename, code)\n    # temporary patch see top of file\n    stack_data.Source._class_local("__source_cache", {}).pop(filename, None)\n    mod = types.ModuleType("__main__")\n    mod.__file__ = filename\n    sys.modules["__main__"] = mod\n    try:\n        if run:\n            await eval_code_async(code, mod.__dict__, filename=filename, return_mode="none")\n        else: # Only compile code (TODO separate Backend endpoint)\n            compile(code, filename, mode="exec", flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)\n        return True\n    except Exception as e:\n        global __papyros\n        __papyros.message(dict(type="error", data=format_exception(filename, e)))\n        return False\n\n'),c=(r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),p=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}l((r=r.apply(e,n||[])).next())}))},f=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};importScripts("https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js");var u=function(e){function n(){var n=e.call(this)||this;return n.pyodide={},n.initialized=!1,n.globals=new Map,n}return c(n,e),n.prototype.launch=function(n,t,r){return p(this,void 0,void 0,(function(){var o,i,s=this;return f(this,(function(c){switch(c.label){case 0:return[4,e.prototype.launch.call(this,n,t,r)];case 1:return c.sent(),o=this,[4,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",fullStdLib:!1})];case 2:return o.pyodide=c.sent(),[4,this.runCode(l,0)];case 3:return c.sent(),i=function(e){var n="toJs"in e?e.toJs():Object.fromEntries(e);return s.onEvent(n)},this.pyodide.globals.get(a)(i),this.globals=new Map(this.pyodide.globals.toJs()),this.initialized=!0,[2]}}))}))},n.prototype._cleanScope=function(){var e,n,t=this.pyodide.globals,r=[];try{for(var o=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(t.keys()),i=o.next();!i.done;i=o.next()){var a=i.value;this.globals.has(a)?t.set(a,this.globals.get(a)):r.push(a)}}catch(n){e={error:n}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}r.forEach((function(e){return t.delete(e)}))},n.prototype._runCodeInternal=function(e){return p(this,void 0,void 0,(function(){return f(this,(function(n){switch(n.label){case 0:return this.initialized?[4,this.pyodide.globals.get(s)(e,!1)]:[3,5];case 1:return n.sent()?[4,this.pyodide.loadPackagesFromImports(e)]:[3,4];case 2:return n.sent(),[4,this.pyodide.globals.get(s)(e,!0)];case 3:n.sent(),n.label=4;case 4:return this._cleanScope(),[3,7];case 5:return[4,this.pyodide.loadPackagesFromImports(e)];case 6:return n.sent(),[2,this.pyodide.runPythonAsync(e)];case 7:return[2]}}))}))},n}(i.z);(0,o.Jj)(new u)}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.x=()=>{var e=o.O(void 0,[114],(()=>o(572)));return o.O(e)},e=[],o.O=(n,t,r,i)=>{if(!t){var a=1/0;for(p=0;p<e.length;p++){for(var[t,r,i]=e[p],s=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](t[l])))?t.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(p--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[t,r,i]},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((n,t)=>(o.f[t](e,n),n)),[])),o.u=e=>e+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={572:1};o.f.i=(n,t)=>{e[n]||importScripts(o.p+o.u(n))};var n=self.webpackChunkpapyros=self.webpackChunkpapyros||[],t=n.push.bind(n);n.push=n=>{var[r,i,a]=n;for(var s in i)o.o(i,s)&&(o.m[s]=i[s]);for(a&&a(o);r.length;)e[r.pop()]=1;t(n)}})(),n=o.x,o.x=()=>o.e(114).then(n),o.x()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVNNLFFBQ2RzQyxFQUFnQjVDLEVBQVNtRCxPQUFTLEVBQ25DSixFQUEyQm5GLEssR1ZuQnhCbkIsRUFBTzJDLEVBQW9CUSxFQUMvQlIsRUFBb0JRLEVBQUksSUFDaEJSLEVBQW9COEIsRUFBRSxLQUFLa0MsS0FBSzNHLEdXRGQyQyxFQUFvQlEsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9zdGFydHVwIGNodW5rIGRlcGVuZGVuY2llcyIsIndlYnBhY2s6Ly9wYXB5cm9zLy4vc3JjL3dvcmtlcnMvcHl0aG9uL2luaXQucHkudHMiLCJ3ZWJwYWNrOi8vcGFweXJvcy8uL3NyYy93b3JrZXJzL3B5dGhvbi9QeXRob25Xb3JrZXIud29ya2VyLnRzIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3BhcHlyb3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wYXB5cm9zL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGFweXJvcy93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIG5leHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoMTE0KS50aGVuKG5leHQpO1xufTsiLCJleHBvcnQgY29uc3QgSU5JVElBTElaRV9QWVRIT05fQkFDS0VORCA9IFwiX19pbml0X3BhcHlyb3NcIjtcbmV4cG9ydCBjb25zdCBQUk9DRVNTX1BZVEhPTl9DT0RFID0gXCJfX3Byb2Nlc3NfY29kZVwiO1xuZXhwb3J0IGNvbnN0IElOSVRJQUxJWkFUSU9OX0NPREUgPVxuICAgIGBcbmZyb20gcHlvZGlkZSBpbXBvcnQgdG9fanMsIGV2YWxfY29kZV9hc3luY1xuZnJvbSBqcyBpbXBvcnQgY29uc29sZVxuaW1wb3J0IHN5c1xuaW1wb3J0IGFzdFxuaW1wb3J0IGpzb25cbmltcG9ydCBodG1sXG5pbXBvcnQgdHlwZXNcbmltcG9ydCBvc1xuaW1wb3J0IG1pY3JvcGlwXG4jIHRlbXBvcmFyaWx5IHVudGlsIGZyaWVuZGx5X3RyYWNlYmFjayBkb2VzIHRoaXMgYXV0b21hdGljYWxseVxuYXdhaXQgbWljcm9waXAuaW5zdGFsbChcInN0YWNrX2RhdGFcIilcbmltcG9ydCBzdGFja19kYXRhXG5hd2FpdCBtaWNyb3BpcC5pbnN0YWxsKCdmcmllbmRseV90cmFjZWJhY2snKVxuaW1wb3J0IGZyaWVuZGx5X3RyYWNlYmFja1xuZnJvbSBmcmllbmRseV90cmFjZWJhY2suY29yZSBpbXBvcnQgRnJpZW5kbHlUcmFjZWJhY2tcblxuX19wYXB5cm9zID0gTm9uZVxuXG5jbGFzcyBfX1BhcHlyb3MoKTpcbiAgICBkZWYgX19pbml0X18oc2VsZiwgY2IpOlxuICAgICAgICBzZWxmLmNiID0gY2JcbiAgICAgICAgc2VsZi5saW5lID0gXCJcIlxuICAgICAgICBzZWxmLm92ZXJyaWRlX2J1aWx0aW5zKClcblxuICAgIGRlZiBtZXNzYWdlKHNlbGYsIGRhdGEpOlxuICAgICAgICByZXR1cm4gc2VsZi5jYih0b19qcyhkYXRhKSlcblxuICAgIGRlZiBvdmVycmlkZV9idWlsdGlucyhzZWxmKTpcbiAgICAgICAgc2VsZi5vdmVycmlkZV9vdXRwdXQoKVxuICAgICAgICBzZWxmLm92ZXJyaWRlX2lucHV0KClcblxuICAgIGRlZiBvdmVycmlkZV9vdXRwdXQoc2VsZik6XG4gICAgICAgIGNsYXNzIF9fT3V0cHV0V3JpdGVyOlxuICAgICAgICAgICAgZGVmIF9faW5pdF9fKHNlbGYsIHR5cGUsIG9uX3dyaXRlKTpcbiAgICAgICAgICAgICAgICBzZWxmLmVuY29kaW5nID0gXCJ1dGYtOFwiXG4gICAgICAgICAgICAgICAgc2VsZi50eXBlID0gdHlwZVxuICAgICAgICAgICAgICAgIHNlbGYub25fd3JpdGUgPSBvbl93cml0ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmIHdyaXRlKHNlbGYsIHMpOlxuICAgICAgICAgICAgICAgIHNlbGYub25fd3JpdGUoZGljdCh0eXBlPXNlbGYudHlwZSwgZGF0YT1zKSlcblxuICAgICAgICAgICAgZGVmIGZsdXNoKHNlbGYpOlxuICAgICAgICAgICAgICAgIHBhc3MgIyBHaXZlbiBkYXRhIGlzIGFsd2F5cyBpbW1lZGlhdGVseSB3cml0dGVuXG4gICAgICAgIG9uX3dyaXRlID0gbGFtYmRhIGQ6IHNlbGYubWVzc2FnZShkKVxuICAgICAgICBzeXMuc3Rkb3V0ID0gX19PdXRwdXRXcml0ZXIoXCJvdXRwdXRcIiwgb25fd3JpdGUpXG4gICAgICAgIHN5cy5zdGRlcnIgPSBfX091dHB1dFdyaXRlcihcImVycm9yXCIsIG9uX3dyaXRlKVxuXG4gICAgZGVmIHJlYWRsaW5lKHNlbGYsIG49LTEsIHByb21wdD1cIlwiKTpcbiAgICAgICAgaWYgbm90IHNlbGYubGluZTpcbiAgICAgICAgICAgIHNlbGYubGluZSA9IHNlbGYubWVzc2FnZShkaWN0KHR5cGU9XCJpbnB1dFwiLCBkYXRhPXByb21wdCkpICsgXCJcXFxcblwiXG4gICAgICAgIGlmIG4gPCAwIG9yIG4gPiBsZW4oc2VsZi5saW5lKTpcbiAgICAgICAgICAgIG4gPSBsZW4oc2VsZi5saW5lKVxuICAgICAgICB0b19yZXR1cm4gPSBzZWxmLmxpbmVbMDpuXVxuICAgICAgICBzZWxmLmxpbmUgPSBzZWxmLmxpbmVbbjpdXG4gICAgICAgIHJldHVybiB0b19yZXR1cm5cblxuICAgIGRlZiBvdmVycmlkZV9pbnB1dChzZWxmKTpcbiAgICAgICAgZ2xvYmFsIGlucHV0XG4gICAgICAgIGlucHV0ID0gbGFtYmRhIHByb21wdD1cIlwiOiBzZWxmLnJlYWRsaW5lKHByb21wdD1wcm9tcHQpWzotMV0gIyBSZW1vdmUgbmV3bGluZVxuXG4gICAgICAgIHN5cy5zdGRpbi5yZWFkbGluZSA9IHNlbGYucmVhZGxpbmVcblxuZGVmIGNsZWFuX3RyYWNlYmFjayh0YiwgZmlsZW5hbWUpOlxuICAgICMgRm9yIHNvbWUgcmVhc29uIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgX19maWxlX18gaXMgbG9zdCBpbiBmcmllbmRseV90cmFjZWJhY2tcbiAgICBmb3IgcHJlZml4IGluIFtcIlxcXFxcIlwiLCBcIlxcXFwnXCIsIFwiIFwiXTpcbiAgICAgICAgdGIgPSB0Yi5yZXBsYWNlKHByZWZpeCArIGZpbGVuYW1lWzE6XSwgcHJlZml4ICsgZmlsZW5hbWUpXG4gICAgcmV0dXJuIGh0bWwuZXNjYXBlKHRiKVxuXG5kZWYgZm9ybWF0X2V4Y2VwdGlvbihmaWxlbmFtZSwgZXhjKTpcbiAgICBmciA9IEZyaWVuZGx5VHJhY2ViYWNrKHR5cGUoZXhjKSwgZXhjLCBleGMuX190cmFjZWJhY2tfXylcbiAgICBmci5hc3NpZ25fZ2VuZXJpYygpXG4gICAgZnIuYXNzaWduX2NhdXNlKClcbiAgICB0YiA9IGZyLmluZm8uZ2V0KFwic2ltdWxhdGVkX3B5dGhvbl90cmFjZWJhY2tcIiwgXCJObyB0cmFjZWJhY2tcIilcbiAgICBpbmZvID0gZnIuaW5mby5nZXQoXCJnZW5lcmljXCIsIFwiTm8gaW5mb3JtYXRpb24gYXZhaWxhYmxlLlwiKVxuICAgIHdoeSA9IGZyLmluZm8uZ2V0KFwiY2F1c2VcIiwgXCJVbmtub3duIGNhdXNlXCIpXG4gICAgc3VnZ2VzdGlvbnMgPSBmci5pbmZvLmdldChcInN1Z2dlc3RcIiwgXCJObyBzdWdnZXN0aW9uc1wiKVxuICAgIHdoYXQgPSBmci5pbmZvLmdldChcIm1lc3NhZ2VcIiwgXCJObyBtZXNzYWdlXCIpXG4gICAgdXNlcl9zdGFydCA9IDBcbiAgICB0Yl9saW5lcyA9IHRiLnNwbGl0KFwiXFxcXG5cIilcbiAgICB3aGlsZSB1c2VyX3N0YXJ0IDwgbGVuKHRiX2xpbmVzKSBhbmQgZmlsZW5hbWUgbm90IGluIHRiX2xpbmVzW3VzZXJfc3RhcnRdOlxuICAgICAgICB1c2VyX3N0YXJ0ICs9IDFcbiAgICBuYW1lID0gdHlwZShleGMpLl9fbmFtZV9fXG4gICAgdXNlcl9lbmQgPSB1c2VyX3N0YXJ0ICsgMVxuICAgIHdoaWxlIHVzZXJfZW5kIDwgbGVuKHRiX2xpbmVzKSBhbmQgbmFtZSBub3QgaW4gdGJfbGluZXNbdXNlcl9lbmRdOlxuICAgICAgICB1c2VyX2VuZCArPSAxXG4gICAgd2hlcmUgPSBcIlxcXFxuXCIuam9pbih0Yl9saW5lc1t1c2VyX3N0YXJ0OnVzZXJfZW5kXSkgb3IgXCJObyBsb2NhdGlvblwiXG4gICAgcmV0dXJuIGpzb24uZHVtcHMoXG4gICAgICAgIGRpY3QoXG4gICAgICAgICAgICBuYW1lPW5hbWUsXG4gICAgICAgICAgICB0cmFjZWJhY2s9dGIsXG4gICAgICAgICAgICBpbmZvPWluZm8sXG4gICAgICAgICAgICB3aHk9d2h5LFxuICAgICAgICAgICAgd2hlcmU9d2hlcmUsXG4gICAgICAgICAgICB3aGF0PXdoYXQsXG4gICAgICAgICAgICBzdWdnZXN0aW9ucz1zdWdnZXN0aW9uc1xuICAgICAgICApXG4gICAgKVxuXG5kZWYgJHtJTklUSUFMSVpFX1BZVEhPTl9CQUNLRU5EfShjYik6XG4gICAgZ2xvYmFsIF9fcGFweXJvc1xuICAgIF9fcGFweXJvcyA9IF9fUGFweXJvcyhjYilcblxuYXN5bmMgZGVmICR7UFJPQ0VTU19QWVRIT05fQ09ERX0oY29kZSwgcnVuLCBmaWxlbmFtZT1cIm15X2NvZGUucHlcIik6XG4gICAgd2l0aCBvcGVuKGZpbGVuYW1lLCBcIndcIikgYXMgZjpcbiAgICAgICAgZi53cml0ZShjb2RlKVxuICAgIGZyaWVuZGx5X3RyYWNlYmFjay5zb3VyY2VfY2FjaGUuY2FjaGUuYWRkKGZpbGVuYW1lLCBjb2RlKVxuICAgICMgdGVtcG9yYXJ5IHBhdGNoIHNlZSB0b3Agb2YgZmlsZVxuICAgIHN0YWNrX2RhdGEuU291cmNlLl9jbGFzc19sb2NhbChcIl9fc291cmNlX2NhY2hlXCIsIHt9KS5wb3AoZmlsZW5hbWUsIE5vbmUpXG4gICAgbW9kID0gdHlwZXMuTW9kdWxlVHlwZShcIl9fbWFpbl9fXCIpXG4gICAgbW9kLl9fZmlsZV9fID0gZmlsZW5hbWVcbiAgICBzeXMubW9kdWxlc1tcIl9fbWFpbl9fXCJdID0gbW9kXG4gICAgdHJ5OlxuICAgICAgICBpZiBydW46XG4gICAgICAgICAgICBhd2FpdCBldmFsX2NvZGVfYXN5bmMoY29kZSwgbW9kLl9fZGljdF9fLCBmaWxlbmFtZT1maWxlbmFtZSwgcmV0dXJuX21vZGU9XCJub25lXCIpXG4gICAgICAgIGVsc2U6ICMgT25seSBjb21waWxlIGNvZGUgKFRPRE8gc2VwYXJhdGUgQmFja2VuZCBlbmRwb2ludClcbiAgICAgICAgICAgIGNvbXBpbGUoY29kZSwgZmlsZW5hbWUsIG1vZGU9XCJleGVjXCIsIGZsYWdzPWFzdC5QeUNGX0FMTE9XX1RPUF9MRVZFTF9BV0FJVClcbiAgICAgICAgcmV0dXJuIFRydWVcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGU6XG4gICAgICAgIGdsb2JhbCBfX3BhcHlyb3NcbiAgICAgICAgX19wYXB5cm9zLm1lc3NhZ2UoZGljdCh0eXBlPVwiZXJyb3JcIiwgZGF0YT1mb3JtYXRfZXhjZXB0aW9uKGZpbGVuYW1lLCBlKSkpXG4gICAgICAgIHJldHVybiBGYWxzZVxuXG5gO1xuIiwiaW1wb3J0IHsgZXhwb3NlIH0gZnJvbSBcImNvbWxpbmtcIjtcbmltcG9ydCB7IEJhY2tlbmQgfSBmcm9tIFwiLi4vLi4vQmFja2VuZFwiO1xuaW1wb3J0IHsgUGFweXJvc0V2ZW50IH0gZnJvbSBcIi4uLy4uL1BhcHlyb3NFdmVudFwiO1xuaW1wb3J0IHsgSU5JVElBTElaQVRJT05fQ09ERSwgSU5JVElBTElaRV9QWVRIT05fQkFDS0VORCwgUFJPQ0VTU19QWVRIT05fQ09ERSB9IGZyb20gXCIuL2luaXQucHlcIjtcblxuaW50ZXJmYWNlIFB5b2RpZGUge1xuICAgIHJ1blB5dGhvbjogKGNvZGU6IHN0cmluZywgZ2xvYmFscz86IGFueSkgPT4gYW55O1xuICAgIHJ1blB5dGhvbkFzeW5jOiAoY29kZTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIGxvYWRQYWNrYWdlc0Zyb21JbXBvcnRzOiAoY29kZTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIGdsb2JhbHM6IE1hcDxzdHJpbmcsIGFueT47XG59XG5kZWNsYXJlIGZ1bmN0aW9uIGltcG9ydFNjcmlwdHMoLi4udXJsczogc3RyaW5nW10pOiB2b2lkO1xuZGVjbGFyZSBmdW5jdGlvbiBsb2FkUHlvZGlkZShhcmdzOiB7IGluZGV4VVJMOiBzdHJpbmc7IGZ1bGxTdGRMaWI6IGJvb2xlYW4gfSk6IFByb21pc2U8UHlvZGlkZT47XG5cbmltcG9ydFNjcmlwdHMoXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvcHlvZGlkZS92MC4xOC4xL2Z1bGwvcHlvZGlkZS5qc1wiKTtcblxuXG5jbGFzcyBQeXRob25Xb3JrZXIgZXh0ZW5kcyBCYWNrZW5kIHtcbiAgICBweW9kaWRlOiBQeW9kaWRlO1xuICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xuICAgIGdsb2JhbHM6IE1hcDxzdHJpbmcsIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5weW9kaWRlID0ge30gYXMgUHlvZGlkZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdsb2JhbHMgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgYXN5bmMgbGF1bmNoKG9uRXZlbnQ6IChlOiBQYXB5cm9zRXZlbnQpID0+IHZvaWQsXG4gICAgICAgIGlucHV0VGV4dEFycmF5PzogVWludDhBcnJheSwgaW5wdXRNZXRhRGF0YT86IEludDMyQXJyYXkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgc3VwZXIubGF1bmNoKG9uRXZlbnQsIGlucHV0VGV4dEFycmF5LCBpbnB1dE1ldGFEYXRhKTtcbiAgICAgICAgdGhpcy5weW9kaWRlID0gYXdhaXQgbG9hZFB5b2RpZGUoe1xuICAgICAgICAgICAgaW5kZXhVUkw6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L3B5b2RpZGUvdjAuMTguMS9mdWxsL1wiLFxuICAgICAgICAgICAgZnVsbFN0ZExpYjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMucnVuQ29kZShJTklUSUFMSVpBVElPTl9DT0RFLCAwKTtcbiAgICAgICAgLy8gUHl0aG9uIGNhbGxzIG91ciBmdW5jdGlvbiB3aXRoIGEgZGljdCwgd2hpY2ggbXVzdCBiZSBjb252ZXJ0ZWQgdG8gYSBQYXB5cm9zRXZlbnRcbiAgICAgICAgY29uc3QgZXZlbnRDYWxsYmFjayA9IChkYXRhOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzRXZlbnQ6IFBhcHlyb3NFdmVudCA9IFwidG9Kc1wiIGluIGRhdGEgPyBkYXRhLnRvSnMoKSA6IE9iamVjdC5mcm9tRW50cmllcyhkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRXZlbnQoanNFdmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHlvZGlkZS5nbG9iYWxzLmdldChJTklUSUFMSVpFX1BZVEhPTl9CQUNLRU5EKShldmVudENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5nbG9iYWxzID0gbmV3IE1hcCgodGhpcy5weW9kaWRlLmdsb2JhbHMgYXMgYW55KS50b0pzKCkpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfY2xlYW5TY29wZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gRmluZCB0aGUgbmV3bHkgYWRkZWQgZ2xvYmFsc1xuICAgICAgICBjb25zdCBweW9kaWRlR2xvYmFscyA9IHRoaXMucHlvZGlkZS5nbG9iYWxzO1xuICAgICAgICBjb25zdCBrZXlzVG9SZW1vdmU6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgcHlvZGlkZUdsb2JhbHMua2V5cygpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2xvYmFscy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGtleXNUb1JlbW92ZS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHZhbHVlIGluIGNhc2UgaXQgd2FzIG92ZXJyaWRlblxuICAgICAgICAgICAgICAgIHB5b2RpZGVHbG9iYWxzLnNldChrZXksIHRoaXMuZ2xvYmFscy5nZXQoa2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRoZW0gZnJvbSB0aGUgYWN0dWFsIGdsb2JhbHNcbiAgICAgICAgLy8gU2VwYXJhdGUgcnVucyBvZiBjb2RlIHNob3VsZCBub3QgYmUgYWJsZSB0byBhY2Nlc3MgdmFyaWFibGVzL2Z1bmN0aW9uc1xuICAgICAgICAvLyB0aGF0IHdlcmUgZGVmaW5lZCBlYXJsaWVyIG9uLCBhcyB0aGlzIGNvdWxkIGNhdXNlIG5vbi1vYnZpb3VzIGJ1Z3NcbiAgICAgICAga2V5c1RvUmVtb3ZlLmZvckVhY2goayA9PiBweW9kaWRlR2xvYmFscy5kZWxldGUoaykpO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGFzeW5jIF9ydW5Db2RlSW50ZXJuYWwoY29kZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIC8vIHJ1biB0aGUgY29kZSwgcG90ZW50aWFsbHkgcG9sbHV0aW5nIHRoZSBuYW1lc3BhY2VcbiAgICAgICAgICAgIC8vIEZ1bmN0aW9ucyBhbmQgdmFyaWFibGVzIGRlZmluZWQgYnkgdGhlIHVzZXIgYmVjb21lIGdsb2JhbFxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0aGVtIHRvIGJlIGdsb2JhbCB0byBsZXQgZG9jdGVzdCB3b3JrIG91dCBvZiB0aGUgYm94XG4gICAgICAgICAgICBpZiAoYXdhaXQgdGhpcy5weW9kaWRlLmdsb2JhbHMuZ2V0KFBST0NFU1NfUFlUSE9OX0NPREUpKGNvZGUsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHlvZGlkZS5sb2FkUGFja2FnZXNGcm9tSW1wb3J0cyhjb2RlKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnB5b2RpZGUuZ2xvYmFscy5nZXQoUFJPQ0VTU19QWVRIT05fQ09ERSkoY29kZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDbGVhbnVwIHRoZSBzY29wZSBhZnRlciBjb21wdXRhdGlvbnMgYXJlIGRvbmVcbiAgICAgICAgICAgIC8vIEV2ZW4gaW4gY2FzZSBvZiBlcnJvcnNcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuU2NvcGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHlvZGlkZS5sb2FkUGFja2FnZXNGcm9tSW1wb3J0cyhjb2RlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB5b2RpZGUucnVuUHl0aG9uQXN5bmMoY29kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9zZShuZXcgUHl0aG9uV29ya2VyKCkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcblx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5cdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzExNF0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDU3MikpKVxuXHRfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbn07XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3MgYW5kIHNpYmxpbmcgY2h1bmtzIGZvciB0aGUgZW50cnlwb2ludFxuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0NTcyOiAxXG59O1xuXG4vLyBpbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmdcbnZhciBpbnN0YWxsQ2h1bmsgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmkgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW1wb3J0U2NyaXB0cyhfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCkpO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwYXB5cm9zXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BhcHlyb3NcIl0gfHwgW107XG52YXIgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24gPSBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IGluc3RhbGxDaHVuaztcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sIm5hbWVzIjpbImRlZmVycmVkIiwibmV4dCIsIklOSVRJQUxJWkVfUFlUSE9OX0JBQ0tFTkQiLCJQUk9DRVNTX1BZVEhPTl9DT0RFIiwiSU5JVElBTElaQVRJT05fQ09ERSIsImltcG9ydFNjcmlwdHMiLCJweW9kaWRlIiwiaW5pdGlhbGl6ZWQiLCJnbG9iYWxzIiwiTWFwIiwibGF1bmNoIiwib25FdmVudCIsImlucHV0VGV4dEFycmF5IiwiaW5wdXRNZXRhRGF0YSIsInRoaXMiLCJsb2FkUHlvZGlkZSIsImluZGV4VVJMIiwiZnVsbFN0ZExpYiIsInJ1bkNvZGUiLCJldmVudENhbGxiYWNrIiwiZGF0YSIsImpzRXZlbnQiLCJ0b0pzIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJnZXQiLCJfY2xlYW5TY29wZSIsInB5b2RpZGVHbG9iYWxzIiwia2V5c1RvUmVtb3ZlIiwia2V5cyIsImtleSIsImhhcyIsInNldCIsInB1c2giLCJmb3JFYWNoIiwiayIsImRlbGV0ZSIsIl9ydW5Db2RlSW50ZXJuYWwiLCJjb2RlIiwibG9hZFBhY2thZ2VzRnJvbUltcG9ydHMiLCJydW5QeXRob25Bc3luYyIsIkJhY2tlbmQiLCJQeXRob25Xb3JrZXIiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm0iLCJ4IiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIk8iLCJyZXN1bHQiLCJjaHVua0lkcyIsImZuIiwicHJpb3JpdHkiLCJub3RGdWxmaWxsZWQiLCJJbmZpbml0eSIsImkiLCJsZW5ndGgiLCJmdWxmaWxsZWQiLCJqIiwiZXZlcnkiLCJzcGxpY2UiLCJyIiwiZCIsImRlZmluaXRpb24iLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZiIsImUiLCJjaHVua0lkIiwiUHJvbWlzZSIsImFsbCIsInJlZHVjZSIsInByb21pc2VzIiwidSIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJ3aW5kb3ciLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic2NyaXB0VXJsIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJFcnJvciIsInJlcGxhY2UiLCJwIiwiaW5zdGFsbGVkQ2h1bmtzIiwiY2h1bmtMb2FkaW5nR2xvYmFsIiwic2VsZiIsInBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uIiwiYmluZCIsIm1vcmVNb2R1bGVzIiwicnVudGltZSIsInBvcCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9