(this["webpackJsonpreact-instances-example"]=this["webpackJsonpreact-instances-example"]||[]).push([[120],{233:function(e,a){!function(e){e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"etlua",/<%[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"etlua")}))}(Prism)}}]);
//# sourceMappingURL=120.58ea9533.chunk.js.map