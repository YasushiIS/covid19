(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{461:function(t,e,r){"use strict";r(13),r(14),r(6),r(54);var n=r(19),o=r(29),l=r(26),c=r(17),d=r(18),f=r(72),h=r(463);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},y=function(t){Object(o.a)(r,t);var e=v(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).formattedDate=Object(h.a)(t.date),t}return r}(f.c);m([Object(f.b)()],y.prototype,"title",void 0),m([Object(f.b)()],y.prototype,"titleId",void 0),m([Object(f.b)()],y.prototype,"date",void 0),m([Object(f.b)()],y.prototype,"info",void 0),m([Object(f.b)()],y.prototype,"sourceText",void 0),m([Object(f.b)()],y.prototype,"sourceUrl",void 0),m([Object(f.b)()],y.prototype,"note",void 0);var D=y=m([f.a],y),x=(r(504),r(24)),_=r(53),w=r.n(_),j=r(449),O=r(447),S=r(624),C=r(142),T=r(458),V=r(623),component=Object(x.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"DataView pa-1"},[r("v-toolbar",{staticClass:"DataView-content",attrs:{flat:""}},[r("div",{staticClass:"DataView-TitleContainer"},[r("h3",{staticClass:"DataView-ToolbarTitle",attrs:{id:t.titleId}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t._t("button")],2),t._v(" "),r("v-spacer"),t._v(" "),t._t("infoPanel")],2),t._v(" "),r("v-card-text",{class:t.$vuetify.breakpoint.xs?"DataView-CardTextForXS":"DataView-CardText"},[t._t("default")],2),t._v(" "),r("v-footer",{staticClass:"DataView-Footer"},[r("div",{staticClass:"DataView-Footer-Note"},[t.note?r("span",[r("v-icon",{attrs:{size:"16"}},[t._v("\n          mdi-information\n        ")]),t._v("\n        "+t._s(t.note)+"\n      ")],1):t._e(),t._v(" "),t.sourceUrl&&t.sourceText?r("a",{staticClass:"OpenDataLink",attrs:{href:t.sourceUrl,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.sourceText)+"\n        "),r("v-icon",{attrs:{size:"12"}},[t._v("\n          mdi-open-in-new\n        ")])],1):t._e()]),t._v(" "),r("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date)+" 時点")])])],1)}),[],!1,null,null,null);e.a=component.exports;w()(component,{VCard:j.a,VCardText:O.a,VFooter:S.a,VIcon:C.a,VSpacer:T.a,VToolbar:V.a})},463:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return c}));var n=r(25),o=r.n(n),l=function(t){return o()(t).format("YYYY-MM-DDTHH:mm:ss")},c=function(t){return o()(t).format("YYYY-MM-DD")}},464:function(t,e,r){},465:function(t,e,r){"use strict";r(13),r(14),r(6),r(54);var n=r(19),o=r(29),l=r(26),c=r(17),d=r(18),f=r(72);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var v=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},m=function(t){Object(o.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(f.c);v([Object(f.b)()],m.prototype,"lText",void 0),v([Object(f.b)()],m.prototype,"sText",void 0),v([Object(f.b)()],m.prototype,"unit",void 0);var y=m=v([f.a],m),D=(r(506),r(24)),component=Object(D.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"DataView-DataInfo"},[r("span",{staticClass:"DataView-DataInfo-summary"},[t._v("\n    "+t._s(t.lText)+"\n    "),r("small",{staticClass:"DataView-DataInfo-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),r("br"),t._v(" "),r("small",{staticClass:"DataView-DataInfo-date"},[t._v(t._s(t.sText))])])}),[],!1,null,null,null);e.a=component.exports},466:function(t,e,r){"use strict";r(464)},467:function(t,e,r){},468:function(t,e,r){},469:function(t,e,r){},470:function(t,e,r){},472:function(t,e,r){},473:function(t,e,r){"use strict";var n=r(463),o={props:{title:{type:String,required:!0,default:""},icon:{type:String,required:!1,default:""},date:{type:String,required:!1,default:""}},data:function(){return{formattedDate:Object(n.b)(this.date)}}},l=(r(466),r(24)),c=r(53),d=r.n(c),f=r(142),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header mb-3"},[r("h2",{staticClass:"pageTitle"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),r("div",{staticClass:"date"},[r("span",[t._v("最終更新 ")]),t._v(" "),r("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])])])}),[],!1,null,null,null);e.a=component.exports;d()(component,{VIcon:f.a})},498:function(t,e,r){"use strict";var n=r(1).a.extend({props:{url:{type:String,default:""}}}),o=(r(511),r(24)),l=r(53),c=r.n(l),d=r(142),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n  "+t._s(t.$t("出典:"))+"\n  "),r("a",{staticClass:"OpenDataLink",attrs:{href:t.url,target:"_blank",rel:"noopener"}},[t._v("\n    "+t._s(t.$t("京都府公式HP"))+"\n    "),r("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"15","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[t._v("\n      mdi-open-in-new\n    ")])],1)])}),[],!1,null,null,null);e.a=component.exports;c()(component,{VIcon:d.a})},504:function(t,e,r){"use strict";r(467)},505:function(t,e,r){"use strict";r(468)},506:function(t,e,r){"use strict";r(469)},508:function(t,e,r){"use strict";r(470)},509:function(t,e,r){"use strict";e.a=function(data){var t=[],e=new Date,r=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var n=new Date(e["日付"]),o=e["小計"];isNaN(o)||(r+=o,t.push({label:n,transition:o,cumulative:r}))})),t}},510:function(t,e,r){"use strict";var n=r(25),o=r.n(n),l=[{text:"日付",value:"日付"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"}];e.a=function(data){var t={headers:l,datasets:[]};return data.forEach((function(e){var r,n,l,c,d={"日付":null!==(r=o()(e["発表日"]).format("MM/DD"))&&void 0!==r?r:"不明","居住地":null!==(n=e["住居地"])&&void 0!==n?n:"不明","年代":null!==(l=e["年代"])&&void 0!==l?l:"不明","性別":null!==(c=e["性別"])&&void 0!==c?c:"不明"};t.datasets.push(d)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}},511:function(t,e,r){"use strict";r(472)},512:function(t,e,r){"use strict";r(503);var n=r(25),o=r.n(n),l=r(461),c={name:"DataSelector",props:{value:{type:String,required:!1,default:""}}},d=(r(505),r(24)),f=r(53),h=r.n(f),v=r(515),m=r(626),y=r(162),D=r.n(y),x=r(55),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn-toggle",{staticClass:"DataSelector",attrs:{value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{value:"transition"}},[t._v("\n    日別\n  ")]),t._v(" "),r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{value:"cumulative"}},[t._v("\n    累計\n  ")])],1)}),[],!1,null,null,null),_=component.exports;h()(component,{VBtn:v.a,VBtnToggle:m.a}),D()(component,{Ripple:x.a});var w=r(465),j=(r(44),{name:"DateSelectSlider",props:{chartData:{type:Array,required:!0},value:{type:Array,required:!0},sliderMax:{type:Number,required:!0,default:1}},data:function(){var t=this;return{sliderValue:this.value,rules:[function(e){return Math.abs(e[0]-e[1])>14||t.$t("表示期間の最小範囲は１４日間です")}]}},watch:{sliderMax:function(){this.sliderValue=[0,this.sliderMax]},sliderValue:function(t,e){Math.abs(t[0]-t[1])<=14?this.sliderValue=e:this.$emit("sliderInput",t)}},methods:{getSliderLabels:function(t){return this.chartData&&0!==this.chartData.length?o()(this.chartData[t].label).format("M/D"):1}}}),O=r(625),S=Object(d.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-range-slider",{staticStyle:{"padding-top":"35px"},attrs:{value:t.sliderValue,label:t.$t("表示期間"),rules:t.rules,max:t.sliderMax,min:0,"thumb-label":"always",color:"#85005d","track-color":"#808080"},scopedSlots:t._u([{key:"thumb-label",fn:function(e){return[t._v("\n    "+t._s(t.getSliderLabels(e.value))+"\n  ")]}}]),model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})}),[],!1,null,null,null),C=S.exports;h()(S,{VRangeSlider:O.a});var T={components:{DataView:l.a,DataSelector:_,DataViewBasicInfoPanel:w.a,DateSelectSlider:C},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"time-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},unit:{type:String,required:!1,default:""},url:{type:String,required:!1,default:""},defaultdatakind:{type:String,required:!1,default:"transition"},sourceText:{type:String,required:!1,default:""},sourceUrl:{type:String,required:!1,default:""},note:{type:String,required:!1,default:""}},data:function(){return{dataKind:this.defaultdatakind,graphRange:[0,this.chartData.length-1]}},computed:{sliderMax:function(){return this.chartData&&0!==this.chartData.length?this.chartData.length-1:1},displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){if("transition"===this.dataKind)return{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"実績値（前日比：".concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit};var t=o()(this.chartData.slice(-1)[0].label).format("M/DD");return{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(t," 累計値（前日比：").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:"#85005d",borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:"#85005d",borderWidth:0}]}},displayOption:function(){var t=this.unit;return{animation:!1,tooltips:{displayColors:!1,callbacks:{label:function(e){return parseInt(e.value).toLocaleString()+t},title:function(t,data){return o()(data.labels[t[0].index]).format("M月D日")}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",type:"time",offset:!0,time:{tooltipFormat:"MM/DD",unit:"day",unitStepSize:1,displayFormats:{day:"D"},round:"day"},stacked:!0,gridLines:{display:!1},ticks:{min:this.chartData[this.graphRange[0]].label,max:this.chartData[this.graphRange[1]].label,fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,minRotation:0}},{id:"month",type:"time",stacked:!0,time:{unit:"month",unitStepSize:1,displayFormats:{month:"YYYY年M月"},round:"day"},gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{min:this.chartData[this.graphRange[0]].label,max:this.chartData[this.graphRange[1]].label,fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold",gridLines:{display:!0}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}}}},methods:{sliderUpdate:function(t){this.graphRange=t},formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}}},V=r(611),R=Object(d.a)(T,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,date:t.date,"title-id":t.titleId,"source-text":t.sourceText,"source-url":t.sourceUrl,note:t.note},scopedSlots:t._u([{key:"button",fn:function(){return[r("data-selector",{model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[r("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[t._v(" "),r("v-layout",{attrs:{column:""}},[r("bar",{attrs:{"chart-data":t.displayData,options:t.displayOption,height:240}}),t._v(" "),r("date-select-slider",{attrs:{"chart-data":t.chartData,value:[0,t.sliderMax],"slider-max":t.sliderMax},on:{sliderInput:t.sliderUpdate}})],1)],1)}),[],!1,null,null,null);e.a=R.exports;h()(R,{VLayout:V.a})},513:function(t,e,r){"use strict";var n=r(461),o=r(465),l={components:{DataView:n.a,DataViewBasicInfoPanel:o.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,required:!1,default:function(){}},url:{type:String,required:!1,default:""},sourceText:{type:String,required:!1,default:""},sourceUrl:{type:String,required:!1,default:""}}},c=(r(508),r(24)),d=r(53),f=r.n(d),h=r(613),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url,"source-text":t.sourceText,"source-url":t.sourceUrl},scopedSlots:t._u([{key:"button",fn:function(){return[r("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[r("data-view-basic-info-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0}])},[t._v(" "),r("v-data-table",{staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VDataTable:h.a})},527:function(t,e,r){},595:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/03/24","url":"https://www.city.nara.lg.jp/site/coronavirus/61310.html","text":"新型コロナウイルス感染防止のため施設等の一部休館について"},{"date":"2020/03/16","url":"https://www.city.nara.lg.jp/site/coronavirus/55138.html","text":"新型コロナウイルスによる感染拡大防止によるイベント中止一覧"},{"date":"2020/03/16","url":"https://www.city.nara.lg.jp/site/coronavirus/","text":"新型コロナウイルスに関する情報まとめ"}]}')},596:function(t,e,r){"use strict";r(527)},622:function(t,e,r){"use strict";r.r(e);var n=r(473),o=r(512),l=r(513),c=r(509),d=r(510),f=r(537),h=r(526),v=r(595),m={components:{PageHeader:n.a,TimeBarChart:o.a,ConfirmedCasesDetailsCardNaracity:f.a,DataTable:l.a},data:function(){var t=Object(c.a)(h.patients_summary.data),e=Object(d.a)(h.patients.data),r=Object(c.a)(h.querents.data),n=Object(c.a)(h.inspections.data),o={lText:h.main_summary.children[0].value,sText:h.main_summary.date+"現在",unit:"人"},data={Data:h,patientsTable:e,patientsGraph:t,querentsGraph:r,inspectionsGraph:n,sumInfoOfPatients:o,headerItem:{icon:"mdi-chart-timeline-variant",title:"奈良市内の最新感染動向",date:h.lastUpdate},newsItems:v.newsItems};return data},head:function(){return{title:"奈良市内の最新感染動向"}}},y=(r(596),r(24)),D=r(53),x=r.n(D),_=r(456),w=r(457),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"MainPagconfire"},[r("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.headerItem.date}}),t._v(" "),r("v-row",{staticClass:"DataBlock"},[r("confirmed-cases-details-card-naracity",{attrs:{"source-url":"https://www.city.nara.lg.jp/site/coronavirus/","source-text":"奈良市提供のデータを利用"}}),t._v(" "),r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("time-bar-chart",{attrs:{title:"陽性者数","title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":t.patientsGraph,date:t.Data.patients_summary.date,unit:"人","source-url":"https://www.city.nara.lg.jp/","source-text":"奈良市提供のデータを利用",note:"管外検査を含まないため検査陽性者の状況などと異なります。陽性結果が確認日のため報道発表日付と異なります。"}})],1),t._v(" "),r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("data-table",{attrs:{title:"陽性者の属性","title-id":"attributes-of-confirmed-cases","chart-data":t.patientsTable,"chart-option":{},date:t.Data.patients.date,info:t.sumInfoOfPatients,"source-url":"https://www.city.nara.lg.jp/","source-text":"奈良市提供のデータを利用"}})],1),t._v(" "),r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("time-bar-chart",{attrs:{title:"PCR検査実施数","title-id":"number-of-tested","chart-id":"time-bar-chart-inspections","chart-data":t.inspectionsGraph,date:t.Data.inspections.date,unit:"件","source-url":"https://www.city.nara.lg.jp/","source-text":"奈良市提供のデータを利用"}})],1),t._v(" "),r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("time-bar-chart",{attrs:{title:"新型コロナ相談件数","title-id":"number-of-reports-to-covid19-consultation-desk","chart-id":"time-bar-chart-querents","chart-data":t.querentsGraph,date:t.Data.querents.date,unit:"件",url:"","source-url":"https://www.city.nara.lg.jp/","source-text":"奈良市提供のデータを利用"}})],1)],1)],1)}),[],!1,null,"09e1e019",null);e.default=component.exports;x()(component,{VCol:_.a,VRow:w.a})}}]);