(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{541:function(t,e,n){var content=n(679);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("56c593ec",content,!0,{sourceMap:!1})},542:function(t,e,n){var content=n(681);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("e5bb1cf8",content,!0,{sourceMap:!1})},543:function(t,e,n){var content=n(684);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("58f5f54f",content,!0,{sourceMap:!1})},678:function(t,e,n){"use strict";var r=n(541);n.n(r).a},679:function(t,e,n){(e=n(12)(!1)).push([t.i,".ExternalLink{text-decoration:none}.ExternalLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},680:function(t,e,n){"use strict";var r=n(542);n.n(r).a},681:function(t,e,n){(e=n(12)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;margin-bottom:12px}.WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;color:#4d4d4d;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold}.WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew-heading .WhatsNew-link-to-emergency-page{background-color:#ffe200;border:2px solid #ffe200;color:#4d4d4d;border-radius:4px;font-size:1rem;padding:4px 8px}.WhatsNew-heading .WhatsNew-link-to-emergency-page:hover{background-color:#fff;border-radius:4px}.WhatsNew-heading .WhatsNew-link-to-emergency-page .ExternalLink{color:#4d4d4d !important;text-decoration:none}.WhatsNew-heading .WhatsNew-link-to-emergency-page>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #a83945;color:#a83945;cursor:pointer}.WhatsNew-heading .WhatsNew-link-to-emergency-page>span:hover{background-color:#a83945;color:#fff}.WhatsNew-heading .WhatsNew-link-to-emergency-page>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.WhatsNew-heading .WhatsNew-link-to-emergency-page{margin-top:4px}}.WhatsNew .WhatsNew-list{padding-left:0px;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:flex;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},682:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/6/13","url":"http://www.pref.nara.jp/item/229460.htm","text":"新型コロナウイルス感染者の状況について "},{"date":"2020/5/27","url":"https://www.city.nara.lg.jp/site/coronavirus/76105.html","text":"奈良市における新型コロナウイルス感染症患者の発生について（奈良市ホームページ）  "},{"date":"2020/5/20","url":"http://www.pref.nara.jp/item/228348.htm","text":"新型コロナウイルス感染者・患者の発生について"},{"date":"2020/5/9","url":"http://www.pref.nara.jp/item/227936.htm","text":"新型コロナウイルス感染者・患者の発生について"},{"date":"2020/5/8","url":"http://www.pref.nara.jp/item/227884.htm","text":"新型コロナウイルス感染者・患者の発生について"}]}')},683:function(t,e,n){"use strict";var r=n(543);n.n(r).a},684:function(t,e,n){(e=n(12)(!1)).push([t.i,".MainPage .DataBlock[data-v-13c49ae8]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-13c49ae8]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-13c49ae8]{padding:4px 8px}}",""]),t.exports=e},692:function(t,e,n){"use strict";n.r(e);var r=n(26),o=n.n(r),l=n(488),c=n(554),d=n(480),h=(n(39),n(1).a.extend({props:{url:{type:String,default:""},iconSize:{type:Number,default:15}}})),m=(n(678),n(24)),w=n(52),f=n.n(w),x=n(144),component=Object(m.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"ExternalLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._t("default"),this._v(" "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:this.iconSize,"aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],2)}),[],!1,null,null,null),v=component.exports;f()(component,{VIcon:x.a});var N={components:{ExternalLink:v},props:{items:{type:Array,required:!0}},computed:{limitCount:function(){return this.items.slice(0,2)}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(d.a)(t)}}},k=(n(680),Object(m.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("div",{staticClass:"WhatsNew-heading"},[n("h3",{staticClass:"WhatsNew-title"},[n("v-icon",{staticClass:"WhatsNew-title-icon",attrs:{size:"24"}},[t._v("\n        mdi-information\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),n("span",{staticClass:"WhatsNew-link-to-emergency-page"},[n("v-icon",{staticClass:"WhatsNew-link-to-emergency-page-icon",attrs:{size:"20"}},[t._v("\n        mdi-bullhorn\n      ")]),t._v(" "),n("external-link",{attrs:{url:"http://www.pref.nara.jp/55540.htm"}},[t._v("\n        "+t._s(t.$t("奈良県対処方針（6.05方針）"))+"\n      ")])],1)]),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.limitCount,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null)),W=k.exports;f()(k,{VIcon:x.a});var _=n(487),C=n(556),y=n(549),j=n(550),D=n(553),I=n(682),z=n(555),L={components:{PageHeader:l.a,TimeBarChart:c.a,WhatsNew:W,ConfirmedCasesDetailsCard:D.a,DataTable:C.a,PatientsAndSickbeds:z.a},data:function(){var t=Object(y.a)(_.patients_summary.data),e=Object(j.a)(_.patients.data),n=Object(y.a)(_.inspections.data),r={lText:t[t.length-1].cumulative.toLocaleString(),sText:o()(t[t.length-1].label).format("M/D")+"の累計",unit:"人"},data={Data:_,patientsTable:e,patientsGraph:t,inspectionsGraph:n,sumInfoOfPatients:r,headerItem:{icon:"mdi-chart-timeline-variant",title:"奈良県内の最新感染動向",date:_.lastUpdate},newsItems:I.newsItems,metroGraphOption:{responsive:!0,legend:{display:!0},scales:{xAxes:[{position:"bottom",stacked:!1,gridLines:{display:!0},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"#808080"}}],yAxes:[{stacked:!1,gridLines:{display:!0},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(t){return t.toFixed(2)+"%"}}}]},tooltips:{displayColors:!1,callbacks:{title:function(t,e){var label=t[0].label;return"期間: ".concat(label)},label:function(t,data){var e=data.datasets[t.datasetIndex],n="".concat(e.data[t.index],"%");return"利用者数との相対値: ".concat(n)}}}}};return data},head:function(){return{title:"奈良県内の最新感染動向"}}},E=(n(683),n(473)),O=n(474),P=Object(m.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.headerItem.date}}),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card",{attrs:{"source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用"}}),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{title:"陽性者数","title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":t.patientsGraph,date:t.Data.patients_summary.date,unit:"人",url:"http://www.pref.nara.jp/","source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用"}})],1),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("data-table",{attrs:{title:"陽性者の属性","title-id":"attributes-of-confirmed-cases","chart-data":t.patientsTable,"chart-option":{},date:t.Data.patients.date,info:t.sumInfoOfPatients,url:"http://www.pref.nara.jp/","source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用"}})],1),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{title:"PCR検査実施数","title-id":"number-of-tested","chart-id":"time-bar-chart-inspections","chart-data":t.inspectionsGraph,date:t.Data.inspections.date,unit:"件","source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用"}})],1),t._v(" "),n("patients-and-sickbeds",{attrs:{"source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用",date:t.Data.sickbeds_summary.date}})],1)],1)}),[],!1,null,"13c49ae8",null);e.default=P.exports;f()(P,{VCol:E.a,VRow:O.a})}}]);