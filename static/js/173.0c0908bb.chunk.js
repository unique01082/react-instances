(this["webpackJsonpreact-instances-example"]=this["webpackJsonpreact-instances-example"]||[]).push([[173],{304:function(e,t){!function(e){e.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var t,a,n,s=e.languages,p={"application/javascript":s.javascript,"application/json":s.json||s.javascript,"application/xml":s.xml,"text/xml":s.xml,"text/html":s.html,"text/css":s.css},i={"application/json":!0,"application/xml":!0};for(var r in p)if(p[r]){t=t||{};var l=i[r]?(n=(a=r).replace(/^[a-z]+\//,""),"(?:"+a+"|\\w+/(?:[\\w.-]+\\+)+"+n+"(?![+\\w.-]))"):r;t[r.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+l+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:p[r]}}t&&e.languages.insertBefore("http","header-name",t)}(Prism)}}]);
//# sourceMappingURL=173.0c0908bb.chunk.js.map