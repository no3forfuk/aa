(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{36:function(t,n,e){(t.exports=e(2)(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},37:function(t,n,e){var s=e(36);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(1).default)("d4a80ddc",s,!1,{})},46:function(t,n,e){"use strict";e.r(n);var s={data:()=>({rankList:[]}),created(){this.$ajax.get("/query/r1").then(t=>{this.rankList=t.data.rankList}).catch(()=>{})},methods:{deleteItem(t,n){this.rankList.splice(n,1)}}},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("div",[e("table",{staticClass:"table table table-hover table-striped table-bordered"},[t._m(1),t._v(" "),e("tbody",t._l(t.rankList,function(n,s){return e("tr",{key:s},[e("td",[t._v(t._s(n.id))]),t._v(" "),e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v(t._s(n.disc))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-default",attrs:{type:"btn"},on:{click:function(e){t.deleteItem(n,s)}}},[t._v("删除")])]),t._v(" "),e("td")])}))])])])};a._withStripped=!0;var i=e(0),r=!1;var c=function(t){r||e(37)},l=Object(i.a)(s,a,[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"page-header"},[n("h3",[this._v("推送任务")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("th",{staticClass:"text-center"},[t._v("ID")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("NAME")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("DISC")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("OPTIONS")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("备注")])])}],!1,c,"data-v-26fd477c",null);l.options.__file="src\\components\\pushTask\\pushTask.vue";n.default=l.exports}}]);