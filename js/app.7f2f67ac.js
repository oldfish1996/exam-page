(function(e){function t(t){for(var r,o,a=t[0],c=t[1],l=t[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},u=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-066805a9":"f05f5ce1","chunk-48ec5d3b":"3b19cdc6","chunk-1c671459":"fae9de26","chunk-d6976a0e":"0a54f976"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-066805a9":1,"chunk-1c671459":1,"chunk-d6976a0e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-066805a9":"f99544a3","chunk-48ec5d3b":"31d6cfe0","chunk-1c671459":"7516b5b3","chunk-d6976a0e":"42b57df3"}[e]+".css",i=c.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===i))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){l=f[a],d=l.getAttribute("data-href");if(d===r||d===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||i,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],m.parentNode.removeChild(m),n(u)},m.href=i;var s=document.getElementsByTagName("head")[0];s.appendChild(m)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=a(e);var f=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/exam-page/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var m=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("9e1f"),n("450d");var r=n("6ed5"),o=n.n(r),i=(n("0fb7"),n("f529")),u=n.n(i),a=(n("672e"),n("101e")),c=n.n(a),l=(n("ae26"),n("845f")),d=n.n(l),f=(n("fe07"),n("6ac5")),m=n.n(f),s=(n("b5d8"),n("f494")),p=n.n(s),h=(n("1951"),n("eedf")),b=n.n(h),v=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},y=[],w={name:"App"},k=w,T=(n("034f"),n("2877")),I=Object(T["a"])(k,g,y,!1,null,null,null),N=I.exports,j=n("8c4f"),O=(n("d3b7"),n("3ca3"),n("ddb0"),function(){return n.e("chunk-066805a9").then(n.bind(null,"f5b8"))}),P=function(){return Promise.all([n.e("chunk-48ec5d3b"),n.e("chunk-d6976a0e")]).then(n.bind(null,"db55"))},_=function(){return Promise.all([n.e("chunk-48ec5d3b"),n.e("chunk-1c671459")]).then(n.bind(null,"7d76"))},A=new j["a"]({routes:[{path:"",redirect:"/home"},{path:"/home",component:O},{path:"/items",component:P},{path:"/score",component:_}]}),C=n("2f62");v["default"].use(C["a"]);var S={init:function(e){e.commit("INIT")},nextItem:function(e){e.commit("addItemNum")},prevItem:function(e){e.commit("subItemNum")},jumpToItem:function(e,t){e.commit("jumpItemNum",t)},stopTimer:function(e){e.commit("STOP")}},x={INIT:function(e){e.itemNum=1,e.user_answer.length=0,e.leftTime=3600,e.fullTime=0,clearInterval(e.timer),e.timer=setInterval((function(){e.leftTime--,e.fullTime++,e.leftTime<=0&&clearInterval(e.timer)}),1e3)},addItemNum:function(e){e.itemNum++},subItemNum:function(e){e.itemNum--},jumpItemNum:function(e,t){e.itemNum=t},STOP:function(e){clearInterval(e.timer)}},E={itemNum:1,timer:null,leftTime:3600,fullTime:0,right_answer:[0,3,1,1,2,3],user_answer:[],itemDetails:[{title:"题目1",name:"item1",answers:[{id:0,content:"题目1选项A(正确答案)"},{id:1,content:"题目1选项B"},{id:2,content:"题目1选项C"},{id:3,content:"题目1选项D"}]},{title:"题目2",name:"item2",answers:[{id:0,content:"题目2选项A"},{id:1,content:"题目2选项B"},{id:2,content:"题目2选项C"},{id:3,content:"题目2选项D(正确答案)"}]},{title:"题目3",name:"item3",answers:[{id:0,content:"题目3选项A"},{id:1,content:"题目3选项B(正确答案)"},{id:2,content:"题目3选项C"},{id:3,content:"题目3选项D"}]},{title:"题目4",name:"item4",answers:[{id:0,content:"题目4选项A"},{id:1,content:"题目4选项B(正确答案)"},{id:2,content:"题目4选项C"},{id:3,content:"题目4选项D"}]},{title:"题目5",name:"item5",answers:[{id:0,content:"题目5选项A"},{id:1,content:"题目5选项B"},{id:2,content:"题目5选项C(正确答案)"},{id:3,content:"题目5选项D"}]},{title:"题目6",name:"item6",answers:[{id:0,content:"题目6选项A"},{id:1,content:"题目6选项B"},{id:2,content:"题目6选项C"},{id:3,content:"题目6选项D(正确答案)"}]}]},B=new C["a"].Store({actions:S,mutations:x,state:E});v["default"].config.productionTip=!1,v["default"].use(j["a"]),v["default"].use(b.a),v["default"].use(p.a),v["default"].use(m.a),v["default"].use(d.a),v["default"].use(c.a),v["default"].prototype.$message=u.a,v["default"].prototype.$confirm=o.a.confirm,new v["default"]({render:function(e){return e(N)},router:A,store:B}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.7f2f67ac.js.map