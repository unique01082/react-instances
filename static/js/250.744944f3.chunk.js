(this["webpackJsonpreact-instances-example"]=this["webpackJsonpreact-instances-example"]||[]).push([[250],{363:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,i=c.length;-1!==t.code.indexOf(r=n(a,i));)++i;return c[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(i){for(var s=0;s<i.length&&!(r>=o.length);s++){var p=i[s];if("string"===typeof p||p.content&&"string"===typeof p.content){var u=o[r],g=t.tokenStack[u],l="string"===typeof p?p:p.content,f=n(a,u),k=l.indexOf(f);if(k>-1){++r;var h=l.substring(0,k),m=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),d=l.substring(k+f.length),v=[];h&&v.push.apply(v,c([h])),v.push(m),d&&v.push.apply(v,c([d])),"string"===typeof p?i.splice.apply(i,[s,1].concat(v)):p.content=v}}else p.content&&c(p.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=250.744944f3.chunk.js.map