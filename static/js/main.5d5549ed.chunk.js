(this["webpackJsonpreact-instances-example"]=this["webpackJsonpreact-instances-example"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),l=(a(93),a(94),a(17)),s=a(106),i=a(105),m=a(107),u=function(){return c.a.createElement("img",{alt:"coming soon.jpg",src:"https://images.squarespace-cdn.com/content/v1/5ba5d4bce5f7d1371dd93916/1538330115654-1V19SYVKRS6IX5P1VVG0/ke17ZwdGBToddI8pDm48kDFgITcRoterXoQdllT5ciUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcV7ZyRJyI8bwZiMJRrgPaAKqUaXS0tb9q_dTyNVba_kClt3J5x-w6oTQbPni4jzRa/coming+soon.jpg?format=1500w",style:{width:"100%",height:"100%",filter:"invert(100%)"}})},p=a(67),d=(a(35),a(70),Symbol("instances"));Symbol("observers");function h(e){return e[d]=new Map,e.getInstances=function(){return e[d]},e.getInstance=function(t){return e.getInstances().get(t)},e.addInstance=function(t,a){return e.getInstances().set(t,a)},e.removeInstance=function(t){return e.getInstances().delete(t)},e.isInstanceExist=function(t){return e.getInstances().has(t)&&e.getInstances().get(t)},e}var g=function(e){var t=h(e);return new Proxy(t,{get:Reflect.get,set:Reflect.set,apply:function(e,a,c){var r=c[0],o=c.slice(1),l=Reflect.apply(e,a,o);return t.addInstance(r,l),Object(n.useEffect)((function(){return function(){return t.removeInstance(r)}}),[]),l}})}(n.useState),f=function(){var e=g("state",0),t=Object(p.a)(e,1)[0];return c.a.createElement("p",null,t)},b=function(){return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement("button",{onClick:function(){console.log(g.getInstance("state"));var e=g.getInstance("state"),t=Object(p.a)(e,2),a=t[0];(0,t[1])(a+1)}},"useState"),c.a.createElement("button",{onClick:function(){var e=n.useState.getInstance("state"),t=Object(p.a)(e,2),a=t[0];(0,t[1])(a+1)}},"useState"))},E=function(e){var t=e.example;return c.a.createElement("iframe",{src:"https://codesandbox.io/embed/react-instances-example-".concat(t.codeSandboxId,"?autoresize=1&fontsize=14&hidenavigation=1&theme=light"),style:{width:"100%",height:"100%",border:0,borderRadius:4,overflow:"hidden"},title:"react-instances-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})},I=[{name:"Basic",path:"/basic",codeSandboxId:"psu2e"},{name:"Custom prop name",path:"/custom-prop-name",codeSandboxId:"6sfkm"},{name:"Manage existing class component",path:"/exist-cc",codeSandboxId:"rnlh7"},{name:"Manage hook instance",path:"/manage-hook",codeSandboxId:"cd47x"}],x=function(){return c.a.createElement(l.c,null,I.map((function(e){return c.a.createElement(l.a,{path:"".concat("/react-instances","/example").concat(e.path),key:e.path},c.a.createElement(E,{example:e}))})))},y=s.a.Title,v=i.a.Content,w=i.a.Sider;function S(){var e=Object(l.f)();return c.a.createElement(i.a,{style:{height:"100%"}},c.a.createElement(w,{theme:"light",width:300,style:{overflow:"auto",height:"100%"}},c.a.createElement(y,{level:3,style:{textAlign:"center"}},"react-instances"),c.a.createElement(m.a,{theme:"light",mode:"inline",onSelect:function(t){var a=t.key;return e.push(a)}},c.a.createElement(m.a.Item,{key:"".concat("/react-instances","/")},"Home"),c.a.createElement(m.a.Item,{key:"".concat("/react-instances","/api")},"API"),c.a.createElement(m.a.SubMenu,{key:"examples",title:"Examples"},I.map((function(e){return c.a.createElement(m.a.Item,{key:"".concat("/react-instances","/example").concat(e.path)},e.name)}))))),c.a.createElement(i.a,{className:"site-layout",style:{width:"auto",height:"100%"}},c.a.createElement(v,{style:{overflow:"initial",height:"100%"}},c.a.createElement("div",{className:"site-layout-background",style:{textAlign:"center",height:"100%"}},c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/api"},c.a.createElement(u,null)),c.a.createElement(l.a,{path:"/example"},c.a.createElement(x,null)),c.a.createElement(l.a,{path:"/"},c.a.createElement(b,null)))))))}var k=a(56);o.a.render(c.a.createElement(k.a,{hashType:"noslash"},c.a.createElement(S,null)),document.getElementById("root"))},86:function(e,t,a){e.exports=a(102)},93:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.5d5549ed.chunk.js.map