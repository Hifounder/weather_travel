(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Weather"],{"6a05":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"weather_detail"},[a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-sm-12"},[a("h1",{staticClass:"weather_place"},[t._v("\n            "+t._s(t.place.siteName)+"\n            "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.areaWeather,expression:"areaWeather"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.areaWeather=e.target.multiple?a:a[0]},function(e){t.weatherselectarea(e)}]}},t._l(t.selectSite,function(e,s,i){return a("option",{key:i,domProps:{value:e.id}},[t._v(t._s(e.name))])}),0)])]),a("div",{staticClass:"col-md-6 col-sm-12"},[a("div",[a("div",{staticClass:"weather_today_icon_out"},["多雲"===t.weatherData.desc?a("span",[a("font-awesome-icon",{staticClass:"weather_today_icon",attrs:{size:"1x",icon:"cloud"}})],1):"陰"===t.weatherData.desc?a("span",[a("font-awesome-icon",{staticClass:"weather_today_icon",staticStyle:{color:"#e4e4e4"},attrs:{size:"1x",icon:"cloud"}})],1):"晴"===t.weatherData.desc?a("span",[a("font-awesome-icon",{staticClass:"weather_today_icon",attrs:{size:"1x",icon:"sun"}})],1):"短暫雨"===t.weatherData.desc?a("span",[a("font-awesome-icon",{staticClass:"weather_today_icon",attrs:{size:"1x",icon:"cloud-showers-heavy"}})],1):a("span",[t._v(t._s(t.weatherData.desc))])])])]),void 0!=t.weatherData.specials?a("div",{staticClass:"col-12"},t._l(t.weatherData.specials,function(e){return a("div",{key:e,staticClass:"main"},[a("div",{staticClass:"main_title"},[a("h2",[t._v("天氣特報 - "+t._s(e.title))])]),a("div",[a("p",[t._v(t._s(e.desc))])])])}),0):a("div"),a("div",{staticClass:"col-12"},[a("div",{staticClass:"main"},[t._m(0),t._l(t.weatherData.histories,function(e,s,i){return a("div",{key:i,staticClass:"weather_detail_card"},[a("div",{staticClass:"weather_detail_icon"},["多雲"===e.desc?a("span",[a("font-awesome-icon",{attrs:{size:"2x",icon:"cloud"}})],1):"陰"===e.desc?a("span",[a("font-awesome-icon",{staticClass:"weather_today_icon",staticStyle:{color:"#e4e4e4"},attrs:{size:"2x",icon:"cloud"}})],1):"晴"===e.desc?a("span",[a("font-awesome-icon",{staticClass:"weather_today_icon",attrs:{size:"2x",icon:"sun"}})],1):"短暫陣雨"===e.desc?a("span",[a("font-awesome-icon",{staticClass:"weather_today_icon",attrs:{size:"2x",icon:"cloud-showers-heavy"}})],1):a("span",[t._v(t._s(e.desc))])]),a("div",{staticClass:"weather_detail_celsius"},[a("h2",{staticClass:"mb-0"},[t._v(t._s(e.temperature)+"℃")])]),a("div",{staticClass:"weather_detail_day"},[t._v(t._s(e.at))])])})],2)])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_title"},[a("h2",[t._v("歷史天氣")])])}],c=(a("c5f6"),a("7f7f"),{name:"weather",computed:{dataWeather:{get:function(){return this.weatherData},set:function(t){this.$emit("update:weatherData",t)}},selectSite:function(){return this.siteData[this.place.siteNum-1].towns},areaWeather:{get:function(){return this.place.areaNum},set:function(t){var e=this.siteData[this.place.siteNum-1].towns,a="";e.filter(function(e){if(t===e.id)return a=e.name}),this.$emit("update:place",{siteNum:Number(this.siteData[this.place.siteNum-1].id),siteName:String(this.siteData[this.place.siteNum-1].name),areaNum:Number(t),areaName:String(a)})}}},methods:{weatherselectarea:function(t){var e=this;""===t.target.value&&(this.areaWeather=this.siteData[this.place.siteNum-1].towns[0].id);var a=(new Date).getTime(),s="https://works.ioa.tw/weather/api/weathers/".concat(this.areaWeather,".json?_=").concat(a);this.axios({method:"get",url:s}).then(function(t){e.dataWeather=t.data})}},props:{showData:{type:Array,required:!0},siteData:{type:Array,required:!0},place:{type:Object,required:!0},weatherData:{type:Object,required:!0}},mounted:function(){var t=this,e=(new Date).getTime(),a="https://works.ioa.tw/weather/api/weathers/".concat(this.areaWeather,".json?_=").concat(e);this.axios({method:"get",url:a}).then(function(e){t.Loading=!0,t.dataWeather=e.data})}}),n=c,r=a("2877"),o=Object(r["a"])(n,s,i,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=Weather.ee274bdf.js.map