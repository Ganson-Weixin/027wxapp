(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-add-or-update/forum-add-or-update"],{"21ab":function(t,n,e){"use strict";var r,i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}))},5677:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,r,i,u,a){try{var s=t[u](a),o=s.value}catch(c){return void e(c)}s.done?n(o):Promise.resolve(o).then(r,i)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var a=t.apply(n,e);function s(t){u(a,r,i,s,o,"next",t)}function o(t){u(a,r,i,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{forum:{content:"",id:"",title:"",isdone:"开放",parentid:0},index:0,options:["开放","关闭"],username:"",user:{}}},onLoad:function(){var n=a(r.default.mark((function n(e){var i,u,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.getStorageSync("nowTable"),n.next=3,this.$api.session(i);case 3:if(u=n.sent,this.user=u.data,"yonghu"==i&&(this.username=this.user.zhanghao),"maijia"==i&&(this.username=this.user.maijiahao),!e.id){n.next=13;break}return this.id=e.id,n.next=11,this.$api.info("forum",this.id);case 11:a=n.sent,this.forum=a.data;case 13:this.styleChange();case 14:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var t=a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.forum.username=this.username,!this.id){t.next=6;break}return t.next=4,this.$api.update("forum",this.forum);case 4:t.next=8;break;case 6:return t.next=8,this.$api.save("forum",this.forum);case 8:this.$utils.msgBack("操作成功");case 9:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),setIsDoneTap:function(t){this.index=t.target.value,this.forum.isdone=this.options[this.index]}}};n.default=s}).call(this,e("543d")["default"])},"6f51":function(t,n,e){},"9d9c":function(t,n,e){"use strict";e.r(n);var r=e("5677"),i=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=i.a},ba4f:function(t,n,e){"use strict";(function(t){e("38d7"),e("921b");r(e("66fd"));var n=r(e("c9e7"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},c9e7:function(t,n,e){"use strict";e.r(n);var r=e("21ab"),i=e("9d9c");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("cd3d");var a,s=e("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=o.exports},cd3d:function(t,n,e){"use strict";var r=e("6f51"),i=e.n(r);i.a}},[["ba4f","common/runtime","common/vendor"]]]);