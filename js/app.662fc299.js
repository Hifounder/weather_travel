(function(e){function t(t){for(var n,r,s=t[0],c=t[1],u=t[2],l=0,h=[];l<s.length;l++)r=s[l],o[r]&&h.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({404:"404",Params:"Params",Search:"Search",Weather:"Weather",home:"home"}[e]||e)+"."+{404:"db27b2a5",Params:"8443cb8b",Search:"757862d1",Weather:"a04155e7",home:"2758409e"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={Params:1,Search:1,home:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise(function(t,a){for(var n="css/"+({404:"404",Params:"Params",Search:"Search",Weather:"Weather",home:"home"}[e]||e)+"."+{404:"31d6cfe0",Params:"5a969a44",Search:"d021e6a5",Weather:"31d6cfe0",home:"de814bf4"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){u=h[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.request=n,delete r[e],d.parentNode.removeChild(d),a(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(h);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}o[e]=void 0}};var h=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/weather_travel/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2111:function(e,t,a){},"2b06":function(e,t,a){"use strict";var n=a("5856"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar",{attrs:{siteData:e.siteData,place:e.place,weatherData:e.weatherData},on:{"update:place":function(t){e.place=t},"update:weatherData":function(t){e.weatherData=t}}}),!1===e.Loading?a("section",[a("Loading")],1):a("router-view",{attrs:{siteData:e.siteData,showData:e.showData,place:e.place,weatherData:e.weatherData},on:{"update:place":function(t){e.place=t},"update:weatherData":function(t){e.weatherData=t}}})],1)},o=[],i=(a("7f7f"),a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 pr-0"},[a("div",{staticClass:"header_logo"},[a("router-link",{attrs:{to:"/"}},[a("h3",[e._v("天氣旅行")])])],1)]),a("div",{staticClass:"col-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.getPlace,expression:"getPlace"}],staticClass:"header-select",attrs:{disabled:"search"==e.$route.name||"paramspage"==e.$route.name},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.getPlace=t.target.multiple?a:a[0]},e.navWeather]}},e._l(e.siteData,function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}),0)]),a("div",{staticClass:"col-6 ml-auto text-right"},[a("router-link",{staticClass:"header_href",attrs:{to:"/weather"}},[a("font-awesome-icon",{staticClass:"mt-3 pr-2",attrs:{size:"2x",icon:"cloud-sun-rain"}})],1),a("router-link",{staticClass:"header_href",attrs:{to:"/search"}},[a("font-awesome-icon",{staticClass:"mt-3 pr-2",attrs:{size:"2x",icon:"search"}})],1)],1)])])])}),s=[],c={name:"Navbar",props:{siteData:{type:Array,required:!0},place:{type:Object,required:!0},weatherData:{type:Object,required:!0}},computed:{getPlace:{get:function(){return this.place.siteNum},set:function(e){this.$emit("update:place",{siteNum:Number(e),siteName:String(this.siteData[e-1].name),areaNum:Number(this.siteData[e-1].towns[0].id),areaName:String(this.siteData[e-1].towns[0].name)})}},nav_dataWeather:{get:function(){return this.weatherData},set:function(e){this.$emit("update:weatherData",e)}}},methods:{navWeather:function(){var e=this,t=(new Date).getTime(),a="https://works.ioa.tw/weather/api/weathers/".concat(this.place.areaNum,".json?_=").concat(t);this.axios({method:"get",url:a}).then(function(t){e.Loading=!0,e.nav_dataWeather=t.data})}}},u=c,l=(a("fbe4"),a("2877")),h=Object(l["a"])(u,i,s,!1,null,"342195a2",null),d=h.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loading-bro"},[a("svg",{attrs:{id:"load",x:"0px",y:"0px",viewBox:"0 0 150 150"}},[a("circle",{attrs:{id:"loading-inner",cx:"75",cy:"75",r:"60"}})])])},m=[],f={name:"Loading"},v=f,g=(a("2b06"),Object(l["a"])(v,p,m,!1,null,"3a5127b5",null)),w=g.exports,b={name:"app",data:function(){return{Loading:!1,showData:[],siteData:[],weatherData:{},place:{siteNum:0,areaNum:0,siteName:"",areaName:""}}},components:{Navbar:d,Loading:w},mounted:function(){var e=this,t="https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";this.axios({method:"get",url:t}).then(function(t){e.Loading=!0,e.showData=t.data});var a=(new Date).getTime(),n="https://works.ioa.tw/weather/api/all.json?_=".concat(a);this.axios({method:"get",url:n}).then(function(t){e.Loading=!0,e.siteData=t.data,e.place.siteNum=Number(t.data[0].id),e.place.siteName=String(t.data[0].name),e.place.areaNum=Number(t.data[e.place.siteNum-1].towns[0].id),e.place.areaName=String(t.data[e.place.siteNum-1].towns[0].name)})}},y=b,D=(a("5c0b"),Object(l["a"])(y,r,o,!1,null,null,null)),N=D.exports,_=a("8c4f");n["a"].use(_["a"]);var x=new _["a"]({routes:[{path:"/",name:"home",component:function(){return a.e("home").then(a.bind(null,"bb51"))}},{path:"/weather",name:"weather",component:function(){return a.e("Weather").then(a.bind(null,"6a05"))}},{path:"/search",name:"search",component:function(){return a.e("Search").then(a.bind(null,"2d3b"))}},{path:"/search/:title",name:"paramspage",component:function(){return a.e("Params").then(a.bind(null,"4462"))}},{path:"*",name:"404",component:function(){return a.e("404").then(a.bind(null,"8cdb"))}}]}),P=a("2f62");n["a"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{}}),j=a("ecee"),C=a("c074"),O=a("ad3d");j["c"].add(C["j"],C["f"],C["e"],C["a"],C["c"],C["d"],C["l"],C["h"],C["i"],C["g"],C["b"],C["k"]);var k=n["a"].component("font-awesome-icon",O["a"]),T=a("bc3a"),W=a.n(T),E=a("a7fe"),L=a.n(E),$=a("ec7e"),A=a.n($);n["a"].use(L.a,W.a),n["a"].use(A.a),n["a"].config.productionTip=!1,new n["a"]({router:x,store:S,fontawesome:k,render:function(e){return e(N)}}).$mount("#app")},5856:function(e,t,a){},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(e,t,a){},fbe4:function(e,t,a){"use strict";var n=a("2111"),r=a.n(n);r.a}});
//# sourceMappingURL=app.662fc299.js.map