!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=5)}([function(e,t){function i(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var o=n(r);return[i].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[i].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=c[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(o(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(o(i.parts[r]));c[i.id]={id:i.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function o(e){var t,i,n=document.querySelector("style["+v+'~="'+e.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(b){var o=f++;n=p||(p=r()),t=a.bind(null,n,o,!1),i=a.bind(null,n,o,!0)}else n=r(),t=s.bind(null,n),i=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function a(e,t,i,n){var r=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var i=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),g.ssrId&&e.setAttribute(v,t.id),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=i(9),c={},u=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,m=function(){},g=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i,r){h=i,g=r||{};var o=l(e,t);return n(o),function(t){for(var i=[],r=0;r<o.length;r++){var a=o[r],s=c[a.id];s.refs--,i.push(s)}t?(o=l(e,t),n(o)):o=[];for(var r=0;r<i.length;r++){var s=i[r];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete c[s.id]}}}};var w=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,i,n,r,o){var a,s=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(a=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,p=u?l.render:l.beforeCreate;u?(l._injectStyles=c,l.render=function(e,t){return c.call(t),p(e,t)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:a,exports:s,options:l}}},function(e,t,i){"use strict";var n=i(10);t.a={props:{config:{type:Array,default:function(){return[]}},color:{type:String,default:""}},data:function(){return{showEditModule:!1,activeIdx:0,defaultConfig:[],widthTran:{"1/3":1/3,"1/4":.25,"1/2":.5,"2/3":2/3,"3/4":.75,"100%":1}}},components:{editModule:n.a},watch:{config:{handler:function(e){this.defaultConfig=e},immediate:!0}},methods:{editModuleHdl:function(e){this.activeIdx=e,this.showEditModule=!0},closeEditHdl:function(){this.showEditModule=!1},chgEditHdl:function(e){this.showEditModule=!1,this.resizeModule(e)},resizeModule:function(e){var t=[],i=this.defaultConfig.concat();this.defaultConfig[this.activeIdx].order!==e.order&&(t=this.resizeOrder(this.defaultConfig[this.activeIdx].order,Number(e.order)),i.forEach(function(e,i){e.order=t[i]})),Object.assign(i[this.activeIdx],e),this.defaultConfig=i.concat(),this.$emit("resize",i)},resizeOrder:function(e,t){var i=this.defaultConfig.map(function(e){return Number(e.order)});return e<t?i.map(function(i){return i<=t&&i>=e?i-1:i==e?t:i}):i.map(function(i){return i<e&&i>=t?i+1:i==e?t:i})}}}},function(e,t,i){"use strict";t.a={props:{config:{type:Object,default:function(){return{}}},length:{type:Number,default:0},color:{type:String,default:""}},data:function(){return{name:"",nickName:"",order:0,rowsShow:0,width:"",height:0,moduleId:"0"}},watch:{config:{handler:function(e){this.name=e.name,this.nickName=e.nickName,this.order=e.order,this.width=e.width,this.height=e.height,this.moduleId=e.moduleId},deep:!0,immediate:!0}},methods:{backHdl:function(){this.$emit("closeEdit")},confHdl:function(){this.$emit("chgEdit",{name:this.name,nickName:this.nickName,order:this.order,width:this.width,height:this.height,moduleId:this.moduleId})},chgOrderHdl:function(){(this.order>this.length||this.order<=0)&&(this.order=1)},chgHeightHdl:function(){(this.height>800||this.height<50)&&(this.height=100)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(6);t.default=n.a,"undefined"!=typeof window&&window.Vue&&window.Vue.component("workbench",n.a)},function(e,t,i){"use strict";function n(e){i(7)}var r=i(3),o=i(14),a=i(2),s=n,d=a(r.a,o.a,!1,s,"data-v-0477c510",null);t.a=d.exports},function(e,t,i){var n=i(8);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(1)("637f309f",n,!0,{})},function(e,t,i){t=e.exports=i(0)(!1),t.push([e.i,".wb-page .wb-wrap[data-v-0477c510]{display:flex;flex-wrap:wrap;box-sizing:border-box;color:#3e3e3e}.wb-page .wb-wrap .wb-module[data-v-0477c510]{box-sizing:border-box;padding:4px;overflow:hidden}.wb-page .wb-wrap .wb-module .wb-block[data-v-0477c510]{border:1px solid #d3d3d3;border-top:#d3d3d3;border-left:#d3d3d3;border-right:#d3d3d3;box-shadow:0 0 0 1px #f1f1f1;border-radius:4px;height:100%;display:flex;flex-direction:column}.wb-page .wb-wrap .wb-module .wb-block .blk-header[data-v-0477c510]{display:flex;align-items:center;height:32px;padding:0 12px;border-bottom:1px solid #e0e0e0}.wb-page .wb-wrap .wb-module .wb-block .blk-header .blk-title[data-v-0477c510]{flex:1;margin:0 20px 0 0;font-size:14px;line-height:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.wb-page .wb-wrap .wb-module .wb-block .blk-header .blk-edit-btn[data-v-0477c510]{width:26px;font-size:12px;cursor:pointer}.wb-page .wb-wrap .wb-module .wb-block .blk-main[data-v-0477c510]{flex:1;padding:12px;overflow-x:auto;overflow-y:auto}",""])},function(e,t){e.exports=function(e,t){for(var i=[],n={},r=0;r<t.length;r++){var o=t[r],a=o[0],s=o[1],d=o[2],l=o[3],c={id:e+":"+r,css:s,media:d,sourceMap:l};n[a]?n[a].parts.push(c):i.push(n[a]={id:a,parts:[c]})}return i}},function(e,t,i){"use strict";function n(e){i(11)}var r=i(4),o=i(13),a=i(2),s=n,d=a(r.a,o.a,!1,s,"data-v-46a536a9",null);t.a=d.exports},function(e,t,i){var n=i(12);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(1)("421a5fd2",n,!0,{})},function(e,t,i){t=e.exports=i(0)(!1),t.push([e.i,'.em-wrap[data-v-46a536a9]{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;background-color:rgba(0,0,0,.3);z-index:2020}.em-wrap[data-v-46a536a9]:after{content:"";display:inline-block;height:100%;width:0;vertical-align:middle}.em-wrap .em-body[data-v-46a536a9]{display:inline-block;width:400px;vertical-align:middle;text-align:left;background-color:#fff;border-radius:4px;border:1px solid #d3d3d3;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);font-size:14px;color:#3e3e3e}.em-wrap .em-body .em-title[data-v-46a536a9]{display:flex;align-items:center;height:30px;margin:0;padding:8px 16px;border-bottom:1px solid #e0e0e0}.em-wrap .em-body .em-title .em-title-label[data-v-46a536a9]{width:64px}.em-wrap .em-body .em-title .em-title-name[data-v-46a536a9]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.em-wrap .em-body .cfg-list[data-v-46a536a9]{padding:12px 28px;font-size:13px}.em-wrap .em-body .cfg-list .cfg-item[data-v-46a536a9]{list-style-type:none;height:40px;display:flex;align-items:center}.em-wrap .em-body .cfg-list .cfg-item .label[data-v-46a536a9]{width:70px;margin:0 12px}.em-wrap .em-body .cfg-list .cfg-item input[data-v-46a536a9],.em-wrap .em-body .cfg-list .cfg-item select[data-v-46a536a9]{width:160;height:24px;padding:0 8px;border-radius:4px;border:1px solid #d3d3d3;font-size:13px}.em-wrap .em-body .cfg-list .cfg-item select[data-v-46a536a9]{width:174px}.em-wrap .em-body .em-footer[data-v-46a536a9]{height:30px;margin:0;padding:8px 16px;border-top:1px solid #e0e0e0}.em-wrap .em-body .em-footer .em-btn[data-v-46a536a9]{float:right;text-align:center;margin:0 8px;line-height:24px;width:44px;border:1px solid #d3d3d3;border-radius:4px;cursor:pointer}',""])},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"em-wrap"},[i("section",{staticClass:"em-body"},[i("p",{staticClass:"em-title"},[i("span",{staticClass:"em-title-name"},[e._v(e._s(e.name))])]),e._v(" "),i("ul",{staticClass:"cfg-list"},[i("li",{staticClass:"cfg-item"},[i("span",{staticClass:"label"},[e._v("昵称")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.nickName,expression:"nickName"}],attrs:{placeholder:"请输入模块昵称"},domProps:{value:e.nickName},on:{input:function(t){t.target.composing||(e.nickName=t.target.value)}}})]),e._v(" "),i("li",{staticClass:"cfg-item"},[i("span",{staticClass:"label"},[e._v("排序")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.order,expression:"order"}],attrs:{placeholder:"请输入数值(1~"+this.length+")"},domProps:{value:e.order},on:{change:e.chgOrderHdl,input:function(t){t.target.composing||(e.order=t.target.value)}}})]),e._v(" "),i("li",{staticClass:"cfg-item"},[i("span",{staticClass:"label"},[e._v("宽度")]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.width,expression:"width"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.width=t.target.multiple?i:i[0]}}},[i("option",[e._v("1/4")]),e._v(" "),i("option",[e._v("1/3")]),e._v(" "),i("option",[e._v("1/2")]),e._v(" "),i("option",[e._v("2/3")]),e._v(" "),i("option",[e._v("3/4")]),e._v(" "),i("option",[e._v("100%")])])]),e._v(" "),i("li",{staticClass:"cfg-item"},[i("span",{staticClass:"label"},[e._v("高度(px)")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.height,expression:"height"}],attrs:{placeholder:"请输入高度值(50~500)"},domProps:{value:e.height},on:{change:e.chgHeightHdl,input:function(t){t.target.composing||(e.height=t.target.value)}}})])]),e._v(" "),i("p",{staticClass:"em-footer"},[i("span",{staticClass:"em-btn confirm-btn",style:{backgroundColor:e.color?e.color:"transparent"},on:{click:e.confHdl}},[e._v("确定")]),e._v(" "),i("span",{staticClass:"em-btn cancel-btn",on:{click:e.backHdl}},[e._v("返回")])])])])},r=[],o={render:n,staticRenderFns:r};t.a=o},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wb-page"},[e.defaultConfig.length>0?i("div",{staticClass:"wb-wrap"},e._l(e.defaultConfig,function(t,n){return i("section",{key:n,staticClass:"wb-module",style:{width:100*e.widthTran[t.width]+"%",height:t.height+"px",order:t.order}},[i("div",{staticClass:"wb-block"},[i("header",{staticClass:"blk-header",style:{backgroundColor:e.color?e.color:"transparent"}},[i("p",{staticClass:"blk-title"},[e._v(e._s(t.nickName||t.name))]),e._v(" "),i("span",{staticClass:"blk-edit-btn",on:{click:function(t){return e.editModuleHdl(n)}}},[e._v("编辑")])]),e._v(" "),i("section",{staticClass:"blk-main"},[e._t("module"+t.moduleId)],2)])])}),0):e._e(),e._v(" "),e.showEditModule?i("edit-module",{attrs:{color:e.color,config:e.defaultConfig[e.activeIdx],length:e.defaultConfig.length},on:{closeEdit:e.closeEditHdl,chgEdit:e.chgEditHdl}}):e._e()],1)},r=[],o={render:n,staticRenderFns:r};t.a=o}])});
//# sourceMappingURL=index.js.map