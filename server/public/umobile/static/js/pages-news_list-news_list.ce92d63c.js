(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news_list-news_list"],{"0196":function(t,e,i){"use strict";i.r(e);var a=i("7fd5"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"0358":function(t,e,i){"use strict";i.r(e);var a=i("58e4"),n=i("4bfc");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("4424");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"1b4a51d1",null,!1,a["a"],r);e["default"]=l.exports},"0373":function(t,e,i){var a=i("bd4d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6db3db8c",a,!0,{sourceMap:!1,shadowMode:!1})},"152b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},components:{},props:{status:{type:String,default:"loading"},errorText:{type:String,default:"加载失败，点击重新加载"},loadingText:{type:String,default:"加载中..."},finishedText:{type:String,default:"我可是有底线的～"},slotEmpty:{type:Boolean,default:!1},color:{type:String,default:"#666"}},methods:{onRefresh:function(){this.$emit("refresh")}}};e.default=a},"168c":function(t,e,i){"use strict";i.r(e);var a=i("7c43"),n=i("d9ac");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("e8ad");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5a16d5ab",null,!1,a["a"],r);e["default"]=l.exports},1697:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={swipers:i("168c").default,tabs:i("22f3").default,tab:i("3ade").default,loadingFooter:i("0358").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"news_list"},[i("v-uni-view",{staticClass:"contain"},[i("v-uni-view",{staticClass:"banner"},[i("swipers",{attrs:{pid:t.type?11:8,height:"300rpx",radius:"0rpx"}})],1),t.categoryList.length?i("tabs",{attrs:{active:t.active},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeActive.apply(void 0,arguments)}}},[i("tab",{attrs:{title:"全部"}}),t._l(t.categoryList,(function(t,e){return i("tab",{key:e,attrs:{title:t.name}})}))],2):t._e(),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"article-list"},t._l(t.newsList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"article-item bg-white",attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title lg line2 mb20"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"row lighter line2"},[i("v-uni-view",[t._v(t._s(e.synopsis))])],1)],1),i("v-uni-image",{staticClass:"img ml20",attrs:{width:"240rpx",height:"180rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"row-between mt20"},[i("v-uni-view",{staticClass:"xs muted"},[t._v("发布时间: "+t._s(e.create_time))]),i("v-uni-view",{staticClass:"row"},[i("v-uni-image",{staticClass:"icon-sm",attrs:{src:"/static/images/icon_see.png"}}),i("v-uni-view",{staticClass:"ml10 xs muted"},[t._v(t._s(e.visit)+"人浏览")])],1)],1)],1)})),1),i("loading-footer",{attrs:{status:t.status,slotEmpty:!0}},[i("v-uni-view",{staticClass:"column-center",staticStyle:{"padding-top":"200rpx"}},[i("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/news_null.png"}}),i("v-uni-text",{staticClass:"nr muted"},[t._v("暂无数据～")])],1)],1)],1)],1)],1)],1)},o=[]},"20bc":function(t,e,i){"use strict";var a=i("2914"),n=i.n(a);n.a},"22f3":function(t,e,i){"use strict";i.r(e);var a=i("6429"),n=i("d461");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("20bc");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"2cead4d8",null,!1,a["a"],r);e["default"]=l.exports},2914:function(t,e,i){var a=i("2c38");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("06a198ce",a,!0,{sourceMap:!1,shadowMode:!1})},"2a84":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'[data-v-49a28488]:host{font-size:0;line-height:1}.loading[data-v-49a28488]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc}.loading__spinner[data-v-49a28488]{position:relative;box-sizing:border-box;width:%?45?%;max-width:100%;max-height:100%;height:%?45?%;-webkit-animation:rotate-data-v-49a28488 .8s linear infinite;animation:rotate-data-v-49a28488 .8s linear infinite}.loading__spinner--spinner[data-v-49a28488]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.loading__spinner--circular[data-v-49a28488]{border:%?2?% solid transparent;border-top-color:initial;border-radius:100%}.loading__text[data-v-49a28488]{margin-left:%?16?%;color:#969799;font-size:%?28?%;line-height:%?40?%}.loading__text[data-v-49a28488]:empty{display:none}.loading--vertical[data-v-49a28488]{-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.loading--vertical .loading__text[data-v-49a28488]{margin:%?16?% 0 0}.loading__dot[data-v-49a28488]{position:absolute;top:0;left:0;width:100%;height:100%}.loading__dot[data-v-49a28488]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.loading__dot[data-v-49a28488]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.loading__dot[data-v-49a28488]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.loading__dot[data-v-49a28488]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.loading__dot[data-v-49a28488]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.loading__dot[data-v-49a28488]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.loading__dot[data-v-49a28488]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.loading__dot[data-v-49a28488]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.loading__dot[data-v-49a28488]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.loading__dot[data-v-49a28488]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.loading__dot[data-v-49a28488]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.loading__dot[data-v-49a28488]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.loading__dot[data-v-49a28488]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"2c38":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */._tab-box[data-v-2cead4d8]{width:100%;font-size:%?26?%;position:relative;z-index:10}._tab-box .scroll-view-h[data-v-2cead4d8]{height:%?80?%;line-height:%?80?%;white-space:nowrap;width:100%;box-sizing:border-box}._tab-box .scroll-view-h ._scroll-content[data-v-2cead4d8]{width:100%;height:100%;position:relative}._tab-box .scroll-view-h ._scroll-content ._tab-item-box[data-v-2cead4d8]{height:100%}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._flex[data-v-2cead4d8]{display:-webkit-box;display:-webkit-flex;display:flex}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._flex ._item[data-v-2cead4d8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._clamp ._item[data-v-2cead4d8]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._tab-box .scroll-view-h ._scroll-content ._tab-item-box ._item[data-v-2cead4d8]{height:100%;display:inline-block;text-align:center;position:relative;text-align:center;color:#333}._tab-box .scroll-view-h ._scroll-content ._tab-item-box ._item._active[data-v-2cead4d8]{color:#e54d42}._tab-box .scroll-view-h ._scroll-content ._underline[data-v-2cead4d8]{height:%?4?%;background-color:#e54d42;border-radius:%?6?%;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;position:absolute;bottom:0}',""]),t.exports=e},3732:function(t,e,i){"use strict";i.r(e);var a=i("58c9"),n=i("7ba2");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("77bb");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"49a28488",null,!1,a["a"],r);e["default"]=l.exports},"3a60":function(t,e,i){"use strict";var a=i("e6bc"),n=i.n(a);n.a},"3ade":function(t,e,i){"use strict";i.r(e);var a=i("5632"),n=i("0196");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("3a60");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"328c42bf",null,!1,a["a"],r);e["default"]=l.exports},"407d":function(t,e,i){var a=i("6bcf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7a94baf9",a,!0,{sourceMap:!1,shadowMode:!1})},4424:function(t,e,i){"use strict";var a=i("0373"),n=i.n(a);n.a},"4bfc":function(t,e,i){"use strict";i.r(e);var a=i("152b"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"4cb5":function(t,e,i){var a=i("2a84");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6027f111",a,!0,{sourceMap:!1,shadowMode:!1})},5632:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{active:t.active,inactive:!t.active,tab:!0},style:t.shouldShow?"":"display: none;"},[t.shouldRender?t._t("default"):t._e()],2)},o=[]},"58c9":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:"loading "+(t.vertical?"loading--vertical":"")},[i("v-uni-view",{class:"loading__spinner loading__spinner--"+t.type,style:{color:t.color,width:t.size+"rpx",height:t.size+"rpx"}},t._l(t.array12,(function(e,a){return"spinner"===t.type?i("v-uni-view",{key:a,staticClass:"loading__dot"}):t._e()})),1),i("v-uni-view",{staticClass:"loading__text",style:{"font-size":t.textSize+"rpx",color:t.color}},[t._t("default")],2)],1)},o=[]},"58e4":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={loading:i("3732").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"loading-footer row-center",style:"color: "+t.color},["loading"===t.status?i("v-uni-view",{staticClass:"loading row"},[i("loading",{staticClass:"mr20",attrs:{color:t.color}}),i("v-uni-text",{style:"color: "+t.color},[t._v(t._s(t.loadingText))])],1):t._e(),"finished"===t.status?i("v-uni-view",{staticClass:"finished"},[t._v(t._s(t.finishedText))]):t._e(),"error"===t.status?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRefresh.apply(void 0,arguments)}}},[t._v(t._s(t.errorText))]):t._e(),"empty"===t.status?i("v-uni-view",{staticClass:"empty"},[t.slotEmpty?t._t("empty"):i("v-uni-text",[t._v("暂无数据")])],2):t._e()],1)},o=[]},"5a42":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCategoryList=o,e.getArticleList=r,e.getArticleDetail=s;var n=a(i("0dbb"));function o(t){var e=t.type,i=e?"help/category":"article/category";return delete t.type,n.default.get(i)}function r(t){var e=t.type,i=e?"help/lists":"article/lists";return delete t.type,n.default.get(i,{params:t})}function s(t){var e=t.type,i=e?"help/detail":"article/detail";return delete t.type,n.default.get(i,{params:{id:t.id}})}},6429:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"_tab-box",style:{fontSize:t.defaultConfig.fontSize+"rpx",color:t.defaultConfig.color}},[i("v-uni-scroll-view",{staticClass:"scroll-view-h",attrs:{id:"_scroll","scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.slider.scrollLeft}},[i("v-uni-view",{staticClass:"_scroll-content",style:{backgroundColor:t.defaultConfig.bgColor}},[i("v-uni-view",{staticClass:"_tab-item-box",class:[t.defaultConfig.itemWidth?"_clamp":"_flex"]},[t._l(t.tabList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"_item",class:{_active:t.tagIndex===a},style:{color:t.tagIndex==a?t.defaultConfig.activeColor:t.defaultConfig.color,width:t.defaultConfig.itemWidth?t.defaultConfig.itemWidth+"rpx":""},attrs:{id:"_tab_"+a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(a)}}},[t._v(t._s(e.title))])]}))],2),i("v-uni-view",{staticClass:"_underline",style:{transform:"translateX("+t.slider.left+"px)",width:t.slider.width+"px",height:t.defaultConfig.underLineHeight+"rpx",backgroundColor:t.defaultConfig.underLineColor}})],1)],1),i("v-uni-view",{staticClass:"tab-content"},[i("v-uni-view",[t._t("default")],2)],1)],1)},o=[]},"6a23":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2909")),o=i("5a42"),r=i("809b"),s=a(i("168c")),l={data:function(){return{active:0,showLoading:!0,categoryList:[],newsList:[],page:1,status:r.loadingType.LOADING,bannerList:[],type:0}},components:{swipers:s.default},props:{},onLoad:function(t){this.id=t.id,this.type=t.type||"",this.type?uni.setNavigationBarTitle({title:"帮助中心"}):uni.setNavigationBarTitle({title:"商城资讯"}),this.getCategoryListFun()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){this.getArticleListFun()},onShareAppMessage:function(t){},methods:{changeActive:function(t){var e=this;this.active=t,this.page=1,this.newsList=[],this.status=r.loadingType.LOADING,setTimeout((function(){e.getArticleListFun()}),100)},getCategoryListFun:function(){var t=this;(0,o.getCategoryList)({type:this.type}).then((function(e){1==e.code&&(t.categoryList=e.data,console.log(t.categoryList),t.getArticleListFun())}))},getArticleListFun:function(){var t=this,e=this.active,i=this.page,a=this.newsList,s=this.status;s!=r.loadingType.FINISHED&&(0,o.getArticleList)({type:this.type,id:e?e.toString():"",page_no:i}).then((function(e){if(1==e.code){var i=e.data,o=i.list,s=i.more;a.push.apply(a,(0,n.default)(o)),t.newsList=a,t.page++,t.showLoading=!1,t.$nextTick((function(){s||(t.status=r.loadingType.FINISHED),a.length<=0&&(t.status=r.loadingType.EMPTY)}))}}))},goPage:function(t){var e=t.currentTarget.dataset.id;uni.navigateTo({url:"/pages/news_details/news_details?id=".concat(e,"&type=").concat(this.type)})}}};e.default=l},"6bcf":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/information/information.wxss */.news_list .main .article-list[data-v-cf9efc82]{padding-top:%?20?%}.news_list .main .article-list .article-item[data-v-cf9efc82]{padding:%?20?%;border-bottom:var(--border);-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.news_list .main .article-list .article-item .info[data-v-cf9efc82]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.news_list .main .article-list .article-item .img[data-v-cf9efc82]{width:%?240?%;height:%?180?%;-webkit-box-flex:0;-webkit-flex:none;flex:none}.news_list .main .article-list[data-v-cf9efc82]:last-of-type{border:none}.news_list .footer[data-v-cf9efc82]{padding:%?30?% 0}uni-page-body .van-tabs .van-tab--active[data-v-cf9efc82]{color:#333}.news_list .van-tab[data-v-cf9efc82]{width:25%;-webkit-box-flex:0;-webkit-flex:none;flex:none}',""]),t.exports=e},"77bb":function(t,e,i){"use strict";var a=i("4cb5"),n=i.n(a);n.a},"7ba2":function(t,e,i){"use strict";i.r(e);var a=i("92d5"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"7c43":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.lists.length?i("v-uni-view",{staticClass:"swiper",style:{height:t.height,padding:t.padding,"border-radius":t.radius}},[i("v-uni-swiper",{attrs:{autoplay:t.autoplay,circular:t.circular},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.lists,(function(e,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-view",{staticStyle:{width:"100%",height:"100%"},attrs:{"data-item":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(e)}}},[i("v-uni-image",{staticClass:"slide-image",style:{"border-radius":t.radius},attrs:{fit:"cover",src:e.image}})],1)],1)})),1),t.lists.length>1?i("v-uni-view",{staticClass:"dots"},t._l(t.lists,(function(e,a){return i("v-uni-view",{key:a,class:"dot "+(a==t.currentSwiper?"active":"")})})),1):t._e()],1):t._e()},o=[]},"7fd5":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{dot:{type:Boolean},info:{type:null},title:{type:String},titleStyle:{type:String},name:{type:[Number,String],value:""}},inject:["tabs"],data:function(){return{active:!1,shouldShow:!1,shouldRender:!1}},created:function(){this.tabs.childrens.push(this)},mounted:function(){this.update()},methods:{getComputedName:function(){return""!==this.data.name?this.data.name:this.index},updateRender:function(t,e){this.inited=this.inited||t,this.active=t,this.shouldRender=this.inited,this.shouldShow=t},update:function(){this.tabs&&this.tabs.updateTabs()}},computed:{changeData:function(){var t=this.dot,e=this.info,i=this.title,a=this.titleStyle;return{dot:t,info:e,title:i,titleStyle:a}}},watch:{changeData:function(t){this.update()}}};e.default=a},8261:function(t,e,i){"use strict";i("4160"),i("d81d"),i("a9e3"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tabs",props:{active:{type:Number,default:0},config:{type:Object,default:function(){return{}}}},provide:function(){return{tabs:this}},data:function(){return{tabList:[],tagIndex:0,slider:{left:0,width:0,scrollLeft:0},scorll:{},defaultConfig:{bgColor:"#fff",fontSize:26,color:"#333",activeColor:"#FF2C3C",itemWidth:0,underLinePadding:10,underLineWidth:0,underLineHeight:4,underLineColor:"#FF2C3C"}}},watch:{},created:function(){this.childrens=[]},mounted:function(){this.updateTabs()},methods:{updateTabs:function(){var t=this;this.tabList=this.childrens.map((function(t){var e=t.title,i=t.info,a=t.name,n=t.dot,o=t.titleStyle,r=t.active,s=t.updateRender;return{title:e,info:i,name:a,dot:n,titleStyle:o,active:r,updateRender:s}})),this.updateConfig(),this.tagIndex=this.active,this.$nextTick((function(){t.calcScrollPosition()}))},updateConfig:function(){this.defaultConfig=Object.assign(this.defaultConfig,this.config)},calcScrollPosition:function(){var t=this,e=uni.createSelectorQuery().in(this);e.select("#_scroll").boundingClientRect((function(e){t.scorll=e,t.updateTabWidth()})).exec()},updateTabWidth:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=this.tabList;if(0==i.length)return!1;var a=uni.createSelectorQuery().in(this);a.select("#_tab_"+e).boundingClientRect((function(a){i[e]._slider={width:a.width,left:a.left,scrollLeft:a.left-(i[e-1]?i[e-1]._slider.width:0)},t.tagIndex==e&&t.tabToIndex(t.tagIndex),e++,i.length>e&&t.updateTabWidth(e)})).exec()},tabToIndex:function(t){var e=this,i=this.tabList[t]._slider,a=uni.upx2px(this.defaultConfig.underLineWidth);a||(a=this.defaultConfig.itemWidth?uni.upx2px(this.defaultConfig.itemWidth)/3:this.tabList[t]["title"].length*uni.upx2px(this.defaultConfig.fontSize),a+=2*uni.upx2px(this.defaultConfig.underLinePadding)),this.childrens.forEach((function(i,a){var n=a===t;console.log(n),n===i.active&&i.inited||i.updateRender(n,e)}));var n=this.scorll.left||0;this.slider={left:i.left-n+(i.width-a)/2,width:a,scrollLeft:i.scrollLeft-n}},tabClick:function(t){this.tagIndex=t,this.tabToIndex(t),this.$emit("change",t)}}};e.default=a},8692:function(t,e,i){"use strict";i.r(e);var a=i("1697"),n=i("a28c");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("ddd3");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"cf9efc82",null,!1,a["a"],r);e["default"]=l.exports},"92d5":function(t,e,i){"use strict";i("a630"),i("a9e3"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{color:String,vertical:Boolean,type:{type:String,default:"spinner"},size:{type:Number,default:40},textSize:String},data:function(){return{array12:Array.from({length:12})}}};e.default=a},"9ab1":function(t,e,i){var a=i("f5d8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("822976aa",a,!0,{sourceMap:!1,shadowMode:!1})},a28c:function(t,e,i){"use strict";i.r(e);var a=i("6a23"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},bc56:function(t,e,i){"use strict";var a=i("4ea4");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),o=i("758f"),r=i("f9b6"),s={data:function(){return{lists:[],currentSwiper:0}},components:{},props:{pid:{type:Number},circular:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!0},height:{type:String},radius:{type:String,default:"10rpx"},padding:{type:String,default:"0rpx"}},created:function(){this.getAdListFun()},watch:{pid:function(t){this.getAdListFun()}},methods:{getAdListFun:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getAdList)({client:2,pid:t.pid});case 2:i=e.sent,a=i.code,n=i.data,1==a&&(t.lists=n);case 6:case"end":return e.stop()}}),e)})))()},swiperChange:function(t){this.currentSwiper=t.detail.current},goPage:function(t){var e=t.link,i=t.link_type,a=(t.params,t.is_tab);switch(i){case 1:case 2:a?uni.switchTab({url:e}):uni.navigateTo({url:e+(0,r.paramsToStr)(args)});break;case 3:uni.navigateTo({url:"/pages/webview/webview?url="+e});break}}}};e.default=s},bd4d:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".loading-footer[data-v-1b4a51d1]{padding:%?30?% 0;color:#666}",""]),t.exports=e},cd0e:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".tab.active[data-v-328c42bf]{height:auto}.tab.inactive[data-v-328c42bf]{height:0;overflow:visible}",""]),t.exports=e},d461:function(t,e,i){"use strict";i.r(e);var a=i("8261"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},d9ac:function(t,e,i){"use strict";i.r(e);var a=i("bc56"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},ddd3:function(t,e,i){"use strict";var a=i("407d"),n=i.n(a);n.a},e6bc:function(t,e,i){var a=i("cd0e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6fc0ea42",a,!0,{sourceMap:!1,shadowMode:!1})},e8ad:function(t,e,i){"use strict";var a=i("9ab1"),n=i.n(a);n.a},f5d8:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.swiper[data-v-5a16d5ab]{position:relative;overflow:hidden}.swiper uni-swiper[data-v-5a16d5ab]{width:100%;height:100%;position:relative}.swiper uni-swiper .slide-image[data-v-5a16d5ab]{width:100%;height:100%}.swiper .dots[data-v-5a16d5ab]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex}.swiper .dots .dot[data-v-5a16d5ab]{width:%?8?%;height:%?8?%;border-radius:50%;margin-right:%?10?%;background-color:#fff}.swiper .dots .dot.active[data-v-5a16d5ab]{width:%?16?%;border-radius:%?8?%;background-color:#ff2c3c}',""]),t.exports=e}}]);