(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4013],{47270:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1.25a.75.75 0 0 1 .75.75v10.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V2A.75.75 0 0 1 8 1.25",clipRule:"evenodd"}))},74139:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 14.75a.75.75 0 0 1-.75-.75V3.81L4.53 6.53a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06L8.75 3.81V14a.75.75 0 0 1-.75.75",clipRule:"evenodd"}))},41282:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.72 2.22a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L5 4.56v8.69a.75.75 0 0 1-1.5 0V4.56L1.78 6.28A.75.75 0 0 1 .72 5.22zM11.75 14a.75.75 0 0 1-.53-.22l-3-3a.75.75 0 1 1 1.06-1.06L11 11.44V2.75a.75.75 0 0 1 1.5 0v8.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-.53.22",clipRule:"evenodd"}))},11604:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var r=n(67294),l=n(39039),s=n(72099),i=n(32782);function o(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 17",width:"16",height:"16",fill:"currentColor"},e),r.createElement("path",{d:"M4 7h9v3H4z"}))}function a(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 10",width:"16",height:"16",fill:"currentColor"},e),r.createElement("path",{d:"M.49 5.385l1.644-1.644 4.385 4.385L4.874 9.77.49 5.385zm4.384 1.096L10.356 1 12 2.644 6.519 8.126 4.874 6.48v.001z"}))}n(29080);let c=(0,i.Ge)("checkbox"),d=r.forwardRef(function(e,t){let{size:n="m",indeterminate:i,disabled:d=!1,content:u,children:h,title:m,style:p,className:f,qa:v}=e,{checked:g,inputProps:C}=(0,l.O)(e),b=r.createElement("span",{className:c("indicator")},r.createElement("span",{className:c("icon"),"aria-hidden":!0},i?r.createElement(o,{className:c("icon-svg",{type:"dash"})}):r.createElement(a,{className:c("icon-svg",{type:"tick"})})),r.createElement("input",Object.assign({},C,{className:c("control")})),r.createElement("span",{className:c("outline")}));return r.createElement(s.J,{ref:t,title:m,style:p,size:n,disabled:d,className:c({size:n,disabled:d,indeterminate:i,checked:g},f),qa:v,control:b},u||h)})},49725:function(e,t,n){"use strict";n.d(t,{m:function(){return f}});var r=n(97582),l=n(67294),s=n(94842),i=n(50254),o=n(7696),a=n(48696),c=n(89407),d=JSON.parse('{"startCopy":"Copy","endCopy":"Copied!"}'),u=JSON.parse('{"startCopy":"Копировать","endCopy":"Скопировано!"}'),h=(0,c.e)({en:d,ru:u},"ClipboardButton");let m={xs:12,s:16,m:16,l:16,xl:20},p=e=>{let{size:t="m",hasTooltip:n=!0,tooltipInitialText:a=h("startCopy"),tooltipSuccessText:c=h("endCopy"),status:d,view:u="flat",extraProps:p={},children:f,iconPosition:v="start"}=e,g=(0,r._T)(e,["size","hasTooltip","tooltipInitialText","tooltipSuccessText","status","view","extraProps","children","iconPosition"]),C=l.createElement(i.z.Icon,null,l.createElement(o.K,{size:m[t],status:d}));return l.createElement(s.M,{disabled:!n,title:"success"===d?c:a},l.createElement(i.z,Object.assign({view:u,size:t,extraProps:Object.assign({"aria-label":a},p)},g),"start"===v?C:null,f,"end"===v?C:null))};function f(e){let{text:t,timeout:n=1e3,onCopy:s,options:i}=e,o=(0,r._T)(e,["text","timeout","onCopy","options"]);return l.createElement(a.h,{text:t,timeout:n,onCopy:s,options:i},e=>l.createElement(p,Object.assign({},o,{status:e})))}},72099:function(e,t,n){"use strict";n.d(t,{J:function(){return i}});var r=n(67294),l=n(32782);n(5305);let s=(0,l.Ge)("control-label"),i=r.forwardRef(({children:e,className:t,labelClassName:n,title:l,style:i,disabled:o=!1,control:a,size:c="m",qa:d},u)=>{let h=r.cloneElement(a,{className:s("indicator",a.props.className)});return r.createElement("label",{ref:u,title:l,style:i,className:s({size:c,disabled:o},t),"data-qa":d},h,e?r.createElement("span",{className:s("text",n)},e):null)});i.displayName="ControlLabel"},49794:function(e,t,n){"use strict";n.d(t,{i:function(){return v}});var r=n(67294),l=n(27361),s=n.n(l),i=n(18721),o=n.n(i),a=n(81763),c=n.n(a),d=n(32782),u=n(9042),h=n(53860);function m(e){(0,u.O)(`[Table] Physical values (left, right) of "${e}" property are deprecated. Use logical values (start, end) instead.`)}function p(e,t){return"left"===e?(m(t),"start"):"right"===e?(m(t),"end"):e}n(72360);let f=(0,d.Ge)("table");class v extends r.Component{constructor(){super(...arguments),this.state={activeScrollElement:"scrollContainer",columnsStyles:Array.from(this.props.columns,()=>({})),columnHeaderRefs:Array.from(this.props.columns,()=>r.createRef())},this.tableRef=r.createRef(),this.scrollContainerRef=r.createRef(),this.horizontalScrollBarRef=r.createRef(),this.horizontalScrollBarInnerRef=r.createRef(),this.renderRow=(e,t)=>{let{columns:n,isRowDisabled:l,onRowClick:s,onRowMouseEnter:i,onRowMouseLeave:o,onRowMouseDown:a,getRowClassNames:c,verticalAlign:d,edgePadding:u,wordWrap:h,getRowDescriptor:m}=this.props,{columnsStyles:g}=this.state,C=null==m?void 0:m(e,t),b=(null==C?void 0:C.disabled)||(null==l?void 0:l(e,t))||!1,y=(null==C?void 0:C.classNames)||(null==c?void 0:c(e,t))||[];return r.createElement("tr",{key:v.getRowId(this.props,e,t),onClick:!b&&s?s.bind(null,e,t):void 0,onMouseEnter:!b&&i?i.bind(null,e,t):void 0,onMouseLeave:!b&&o?o.bind(null,e,t):void 0,onMouseDown:!b&&a?a.bind(null,e,t):void 0,className:f("row",{disabled:b,interactive:!!(!b&&s),"vertical-align":d},y.join(" "))},n.map((n,l)=>{let{id:s,align:i,primary:o,className:a,sticky:c}=n,d=v.getBodyCellContent(n,e,t),m=p(i,"column.align"),C=p(c,"column.sticky");return r.createElement("td",{key:s,style:g[l],className:f("cell",{align:m,primary:o,sticky:C,"edge-padding":u,"word-wrap":h},a)},d)}))},this.handleScrollContainerMouseenter=()=>{this.setState({activeScrollElement:"scrollContainer"})},this.handleScrollContainerScroll=()=>{"scrollContainer"===this.state.activeScrollElement&&this.horizontalScrollBarRef.current&&this.scrollContainerRef.current&&(this.horizontalScrollBarRef.current.scrollLeft=this.scrollContainerRef.current.scrollLeft)},this.handleHorizontalScrollBarMouseenter=()=>{this.setState({activeScrollElement:"scrollBar"})},this.handleHorizontalScrollBarScroll=()=>{"scrollBar"===this.state.activeScrollElement&&this.horizontalScrollBarRef.current&&this.scrollContainerRef.current&&(this.scrollContainerRef.current.scrollLeft=this.horizontalScrollBarRef.current.scrollLeft)}}static getRowId(e,t,n){let{data:r,getRowId:l,getRowDescriptor:s}=e,i=null!=n?n:r.indexOf(t),o=null==s?void 0:s(t,i);return(null==o?void 0:o.id)!==void 0?o.id:"function"==typeof l?l(t,i):l&&l in t?String(t[l]):String(i)}static getHeadCellContent(e){let{id:t,name:n}=e;return"function"==typeof n?n():"string"==typeof n?n:t}static getBodyCellContent(e,t,n){let r,l;let{id:i,template:a,placeholder:c}=e;return(r="function"==typeof c?c(t,n):null!=c?c:"—","function"==typeof a?l=a(t,n):"string"==typeof a?l=s()(t,a):o()(t,i)&&(l=s()(t,i)),[void 0,null,""].includes(l)&&r)?r:l}static getDerivedStateFromProps(e,t){return e.columns.length===t.columnHeaderRefs.length?null:{columnHeaderRefs:Array.from(e.columns,()=>r.createRef())}}componentDidMount(){this.props.stickyHorizontalScroll&&(this.tableResizeObserver=new ResizeObserver(e=>{var t;let{contentRect:n}=e[0];null===(t=this.horizontalScrollBarInnerRef.current)||void 0===t||t.style.setProperty("width",`${n.width}px`)}),this.tableRef.current&&this.tableResizeObserver.observe(this.tableRef.current),this.scrollContainerRef.current&&(this.scrollContainerRef.current.addEventListener("scroll",this.handleScrollContainerScroll),this.scrollContainerRef.current.addEventListener("mouseenter",this.handleScrollContainerMouseenter)),this.horizontalScrollBarRef.current&&(this.horizontalScrollBarRef.current.addEventListener("scroll",this.handleHorizontalScrollBarScroll),this.horizontalScrollBarRef.current.addEventListener("mouseenter",this.handleHorizontalScrollBarMouseenter))),this.columnsResizeObserver=new ResizeObserver(e=>{window.requestAnimationFrame(()=>{Array.isArray(e)&&e.length&&this.updateColumnStyles()})}),this.tableRef.current&&this.columnsResizeObserver.observe(this.tableRef.current),this.updateColumnStyles()}componentDidUpdate(e){this.props.columns!==e.columns&&this.updateColumnStyles()}componentWillUnmount(){this.props.stickyHorizontalScroll&&(this.tableResizeObserver&&this.tableResizeObserver.disconnect(),this.scrollContainerRef.current&&(this.scrollContainerRef.current.removeEventListener("scroll",this.handleScrollContainerScroll),this.scrollContainerRef.current.removeEventListener("mouseenter",this.handleScrollContainerMouseenter)),this.horizontalScrollBarRef.current&&(this.horizontalScrollBarRef.current.removeEventListener("scroll",this.handleHorizontalScrollBarScroll),this.horizontalScrollBarRef.current.removeEventListener("mouseenter",this.handleHorizontalScrollBarMouseenter))),this.columnsResizeObserver&&this.columnsResizeObserver.disconnect()}render(){let{columns:e,stickyHorizontalScroll:t,className:n,qa:l}=this.props,s=e.some(({primary:e})=>e);return r.createElement("div",{className:f({"with-primary":s,"with-sticky-scroll":t},n),"data-qa":l},t?r.createElement(r.Fragment,null,r.createElement("div",{ref:this.scrollContainerRef,className:f("scroll-container")},this.renderTable()),this.renderHorizontalScrollBar()):this.renderTable())}renderHead(){let{columns:e,edgePadding:t,wordWrap:n}=this.props,{columnsStyles:l}=this.state;return r.createElement("thead",{className:f("head")},r.createElement("tr",{className:f("row")},e.map((e,s)=>{let{id:i,align:o,primary:a,sticky:c,className:d}=e,u=p(o,"column.align"),h=p(c,"column.sticky"),m=v.getHeadCellContent(e);return r.createElement("th",{key:i,ref:this.state.columnHeaderRefs[s],style:l[s],className:f("cell",{align:u,primary:a,sticky:h,"edge-padding":t,"word-wrap":n},d)},m)})))}renderBody(){let{data:e}=this.props;return r.createElement("tbody",{className:f("body")},e.length>0?e.map(this.renderRow):this.renderEmptyRow())}renderTable(){return r.createElement("table",{ref:this.tableRef,className:f("table")},this.renderHead(),this.renderBody())}renderEmptyRow(){let{columns:e,emptyMessage:t}=this.props;return r.createElement("tr",{className:f("row",{empty:!0})},r.createElement("td",{className:f("cell"),colSpan:e.length},t||(0,h.Z)("label_empty")))}renderHorizontalScrollBar(){let{stickyHorizontalScroll:e,stickyHorizontalScrollBreakpoint:t=0}=this.props;return r.createElement("div",{ref:this.horizontalScrollBarRef,className:f("horizontal-scroll-bar",{"sticky-horizontal-scroll":e}),style:{bottom:`${t}px`},"data-qa":"sticky-horizontal-scroll-breakpoint-qa"},r.createElement("div",{ref:this.horizontalScrollBarInnerRef,className:f("horizontal-scroll-bar-inner")}))}updateColumnStyles(){this.setState(e=>{let t=e.columnHeaderRefs.map(e=>null===e.current?void 0:e.current.getBoundingClientRect().width);return{columnsStyles:this.props.columns.map((e,n)=>this.getColumnStyles(n,t))}})}getColumnStyles(e,t){let{columns:n}=this.props,r=n[e],l={};if("string"==typeof r.width)return{maxWidth:0,width:r.width};if(void 0!==r.width&&(l.width=r.width),!r.sticky)return l;let s="left"===r.sticky||"start"===r.sticky?t.slice(0,e):t.slice(e+1);return l["left"===r.sticky||"start"===r.sticky?"insetInlineStart":"insetInlineEnd"]=s.reduce((e,t)=>c()(t)?e+t:e,0),l}}v.defaultProps={edgePadding:!0}},42948:function(e,t,n){"use strict";n.d(t,{DV:function(){return g},QT:function(){return N},vW:function(){return C}});var r=n(97582),l=n(67294),s=n(70588),i=n(88306),o=n.n(i),a=n(62227),c=n(43138),d=n(50254),u=n(43671),h=n(83508),m=n(555),p=n(32782),f=n(73809),v=n(53860);n(82472);let g="_actions";function C(e,t){let n=e.find(({id:e})=>e===g),r=n||{id:g,name:"",sticky:"end",width:28,placeholder:""};return t(r),n?e:[...e,r]}let b=e=>Array.isArray(e.items),y=(0,p.Ge)("table"),w=y("actions"),S=y("actions-button"),R=(0,p.Ge)("table-action-popup"),E=R("menu"),k=R("menu-item"),x=["bottom-end","top-end","auto"],z=({index:e,item:t,getRowActions:n,getRowDescriptor:i,rowActionsSize:o,isRowDisabled:p})=>{var f;let[g,,C,y]=(0,c.k)(!1),R=l.useRef(null),z=(0,a.u)();if(void 0===n)return null;let N=(e,n)=>{if(b(e))return l.createElement(h.v.Group,{key:n,label:e.title},e.items.map(N));let{text:s,icon:i,handler:o}=e,a=(0,r._T)(e,["text","icon","handler"]);return l.createElement(h.v.Item,Object.assign({key:n,onClick:e=>{e.stopPropagation(),o(t,n,e),C()},iconStart:i,className:k},a),s)},O=(null===(f=null==i?void 0:i(t,e))||void 0===f?void 0:f.disabled)||(null==p?void 0:p(t,e)),B=n(t,e);return 0===B.length?null:l.createElement("div",{className:w},l.createElement(m.G,{open:g,anchorRef:R,placement:x,onOutsideClick:C,id:z},l.createElement(h.v,{className:E,size:o},B.map(N))),l.createElement(d.z,{view:"flat-secondary",className:S,onClick:y,size:o,ref:R,disabled:O,extraProps:{"aria-label":(0,v.Z)("label-actions"),"aria-expanded":g,"aria-controls":z}},l.createElement(u.J,{data:s.Z})))};function N(e){var t;let n=(0,f.i)(e),s=`withTableActions(${n})`;return(t=class extends l.Component{constructor(){super(...arguments),this.state={popupOpen:!1,popupData:null},this.renderBodyCell=(e,t)=>{let{getRowActions:n,rowActionsSize:r,renderRowActions:s,isRowDisabled:i,getRowDescriptor:o}=this.props;return s?s({item:e,index:t}):l.createElement(z,{index:t,item:e,getRowActions:n,rowActionsSize:r,getRowDescriptor:o,isRowDisabled:i})},this.enhanceColumns=o()(e=>C(e,e=>{e.template=this.renderBodyCell})),this.enhanceOnRowClick=o()(e=>e?(t,n,r)=>{if(!(r.nativeEvent.target.closest(`.${E}`)||r.nativeEvent.target.matches(`.${S}, .${S} *`)))return e(t,n,r)}:e)}render(){let t=this.props,{renderRowActions:n,getRowActions:s,columns:i,onRowClick:o}=t,a=(0,r._T)(t,["renderRowActions","getRowActions","columns","onRowClick"]);return l.createElement(e,Object.assign({},a,{columns:this.enhanceColumns(i),onRowClick:this.enhanceOnRowClick(o)}))}}).displayName=s,t}},20363:function(e,t,n){"use strict";n.d(t,{Y:function(){return h}});var r=n(97582),l=n(67294),s=n(88306),i=n.n(s),o=n(49725),a=n(32782),c=n(73809),d=n(49794);n(70841);let u=(0,a.Ge)("table");function h(e){var t;let n=(0,c.i)(e),s=`withTableCopy(${n})`;return(t=class extends l.Component{constructor(){super(...arguments),this.enhanceColumns=i()(e=>e.map(e=>{let t=e.meta;return t&&t.copy?Object.assign(Object.assign({},e),{template:(n,r)=>{let s;let i=d.i.getBodyCellContent(Object.assign(Object.assign({},e),{placeholder:""}),n,r);return i&&("function"==typeof t.copy?s=String(t.copy(n,r)):("string"==typeof i||"number"==typeof i)&&(s=String(i)),s)?l.createElement("div",{className:u("copy")},l.createElement("div",{className:u("copy-content")},i),l.createElement("div",{className:u("copy-button")},l.createElement(o.m,{text:s,size:"xs"}))):i}}):e})),this.enhanceOnRowClick=i()(e=>e?(t,n,r)=>{let l=u("copy-button");if(!r.nativeEvent.target.matches(`.${l}, .${l} *`))return e(t,n,r)}:e)}render(){let t=this.props,{columns:n,onRowClick:s}=t,i=(0,r._T)(t,["columns","onRowClick"]);return l.createElement(e,Object.assign({},i,{columns:this.enhanceColumns(n),onRowClick:this.enhanceOnRowClick(s)}))}}).displayName=s,t}},9367:function(e,t,n){"use strict";n.d(t,{p:function(){return w},u:function(){return S}});var r=n(97582),l=n(67294),s=n(91966),i=n.n(s),o=n(27361),a=n.n(o),c=n(88306),d=n.n(c),u=n(93386),h=n.n(u),m=n(82569),p=n.n(m),f=n(11604),v=n(32782),g=n(73809),C=n(49794),b=n(53860);n(33075);let y=(0,v.Ge)("table"),w="_selection";function S(e){var t;let n=(0,g.i)(e),s=`withTableSelection(${n})`;return(t=class extends l.Component{constructor(){super(...arguments),this.renderHeadCell=()=>{let{data:e,selectedIds:t}=this.props,n=!0,r=!1,l=!0;return e.forEach((e,s)=>{if(this.isDisabled(e,s))return;n=!1;let i=C.i.getRowId(this.props,e,s);t.includes(i)?r=!0:l=!1}),l&&(r=!1),n&&(l=!1,r=!1),this.renderCheckBox({disabled:n,checked:l,handler:this.handleAllCheckBoxUpdate,indeterminate:r})},this.renderBodyCell=(e,t)=>{let{selectedIds:n}=this.props,r=C.i.getRowId(this.props,e,t),l=n.includes(r);return this.renderCheckBox({disabled:this.isDisabled(e,t),checked:l,handler:this.handleCheckBoxUpdate.bind(this,r,t)})},this.handleCheckBoxUpdate=(e,t,n)=>{let{checked:r}=n.target,l=n.nativeEvent.shiftKey,{data:s,selectedIds:i,onSelectionChange:o}=this.props;if(l&&void 0!==this.lastCheckedIndex&&this.lastCheckedIndex>=0){let e=Math.min(this.lastCheckedIndex,t),n=Math.max(this.lastCheckedIndex,t),l=s.map((e,t)=>C.i.getRowId(this.props,e,t)).filter((t,r)=>e<=r&&r<=n&&!this.isDisabled(s[r],r));o(r?h()(i,l):p()(i,...l))}else o(r?[...i,e]:p()(i,e));this.lastCheckedIndex=t},this.handleAllCheckBoxUpdate=e=>{let{checked:t}=e.target,{data:n,selectedIds:r,onSelectionChange:l}=this.props,s=n.map((e,t)=>C.i.getRowId(this.props,e,t)),o=s.filter((e,t)=>!this.isDisabled(n[t],t));l(t?h()(r,o):i()(r,s))},this.enhanceColumns=d()(e=>[{id:w,name:this.renderHeadCell,template:this.renderBodyCell,className:y("checkbox_cell"),sticky:"start"===a()(e,[0,"sticky"])?"start":void 0},...e]),this.enhanceOnRowClick=d()(e=>e?(t,n,r)=>{let l=y("selection-checkbox");if(!r.nativeEvent.target.matches(`.${l}, .${l} *`))return e(t,n,r)}:e),this.enhanceGetRowDescriptor=d()(e=>(t,n)=>{let{selectedIds:r,getRowClassNames:l}=this.props,s=(null==e?void 0:e(t,n))||{};void 0===s.classNames&&(s.classNames=(null==l?void 0:l(t,n))||[]);let i=C.i.getRowId(this.props,t,n),o=r.includes(i);return s.classNames.push(y("row",{selected:o})),s}),this.isDisabled=(e,t)=>{var n;let{isRowDisabled:r,isRowSelectionDisabled:l,getRowDescriptor:s}=this.props;return!!(l&&l(e,t))||(null===(n=null==s?void 0:s(e,t))||void 0===n?void 0:n.disabled)||(null==r?void 0:r(e,t))||!1}}render(){let t=this.props,{selectedIds:n,onSelectionChange:s,columns:i,onRowClick:o,getRowDescriptor:a}=t,c=(0,r._T)(t,["selectedIds","onSelectionChange","columns","onRowClick","getRowDescriptor"]);return l.createElement(e,Object.assign({},c,{columns:this.enhanceColumns(i),onRowClick:this.enhanceOnRowClick(o),getRowDescriptor:this.enhanceGetRowDescriptor(a)}))}renderCheckBox({disabled:e,checked:t,handler:n,indeterminate:r}){return l.createElement(f.X,{size:"l",checked:t,indeterminate:r,disabled:e,onChange:n,className:y("selection-checkbox",{"vertical-align":this.props.verticalAlign}),controlProps:{"aria-label":(0,b.Z)("label-row-select")}})}}).displayName=s,t}},91371:function(e,t,n){"use strict";n.d(t,{R:function(){return C},B:function(){return y}});var r=n(97582),l=n(67294),s=n(27361),i=n.n(s),o=n(88306),a=n.n(o),c=n(70926),d=n(32782),u=n(73809),h=n(49794),m=n(74139),p=n(47270),f=n(41282),v=n(43671);function g({order:e}){let t;switch(e){case"asc":t=m.Z;break;case"desc":t=p.Z;break;default:t=f.Z}return l.createElement(v.J,{data:t,size:14})}n(64565);let C=g,b=(0,d.Ge)("table");function y(e){var t;let n=(0,u.i)(e),s=`withTableSorting(${n})`;return(t=class extends l.Component{constructor(){var e;super(...arguments),this.state={sort:null!==(e=this.props.defaultSortState)&&void 0!==e?e:[]},this.enhanceColumns=a()(e=>e.map(e=>{let t=e.meta;return t&&t.sort?Object.assign(Object.assign({},e),{meta:Object.assign(Object.assign({},e.meta),{_originalName:e.name}),name:()=>{let t;let n=this.getSortState();if(n.length>0){let r=n.find(t=>t.column===e.id);r&&(t=r.order)}let r=h.i.getHeadCellContent(e),s=[l.createElement("div",{key:"content",className:b("sort-content")},r),l.createElement("div",{key:"indicator",className:b("sort-indicator")},l.createElement(g,{order:t}))];("right"===e.align||"end"===e.align)&&s.reverse();let i=this.handleColumnSortClick.bind(this,e),o=(0,c.S)(i);return l.createElement("div",{role:"button",tabIndex:0,className:b("sort",{active:!!t}),onClick:i,onKeyDown:o},s)}}):e})),this.handleColumnSortClick=(e,t)=>{let n=this.getSortState(),r=n.findIndex(t=>t.column===e.id),l=n[r],s=this.getNextSortForColumn(e,l);if(!t.shiftKey){this.handleSortStateChange(s);return}l?this.handleSortStateChange([...n.slice(0,r),...n.slice(r+1),...s]):this.handleSortStateChange([...n,...s])}}render(){let t=this.props,{columns:n}=t,s=(0,r._T)(t,["columns"]);return l.createElement(e,Object.assign({},s,{data:this.getSortedData(),columns:this.enhanceColumns(n)}))}getSortedData(){let{data:e,columns:t,disableDataSorting:n=this.isControlledState()}=this.props,r=this.getSortState();return n||0===r.length?e:e.slice().sort((e,n)=>{var l,s;let o=0;for(;o<r.length;){let a=r[o++],c=t.find(e=>e.id===a.column),d=null===(l=null==c?void 0:c.meta)||void 0===l?void 0:l.sort;if(!d)continue;let u="function"==typeof d?d(e,n):(s=a.column,i()(e,s)===i()(n,s)?0:i()(e,s)>i()(n,s)?1:-1);if(0!==u)return"asc"===a.order?u:-u}return 0})}getSortState(){let{sortState:e}=this.props,{sort:t}=this.state;return this.isControlledState()?e:t}handleSortStateChange(e){let{onSortStateChange:t}=this.props;this.isControlledState()||this.setState({sort:e}),t&&t(e)}isControlledState(){let{sortState:e,onSortStateChange:t}=this.props;return!!(e&&t)}getColumnDefaultSortOrder(e){var t;return(null===(t=e.meta)||void 0===t?void 0:t.defaultSortOrder)||"asc"}getNextSortForColumn(e,t){let n="desc"===this.getColumnDefaultSortOrder(e)?["desc","asc",void 0]:["asc","desc",void 0],r=(n.indexOf(null==t?void 0:t.order)+1)%n.length,l=n[r];return l?[{column:e.id,order:l}]:[]}}).displayName=s,t}},53860:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(89407),l=JSON.parse('{"label_empty":"No data","label-actions":"Actions","label-row-select":"Select"}'),s=JSON.parse('{"label_empty":"Нет данных","label-actions":"Действия","label-row-select":"Выбрать"}'),i=(0,r.e)({en:l,ru:s},"Table")},39039:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=n(67294),l=n(59505),s=n(77322),i=n(42087),o=n(38813);function a({name:e,value:t,id:n,defaultChecked:a,checked:c,indeterminate:d,onUpdate:u,onChange:h,controlRef:m,controlProps:p,onFocus:f,onBlur:v,disabled:g}){let C=r.useRef(null),[b,y]=(0,l.z)(c,null!=a&&a,u),w=!d&&c,S=d?"mixed":b,R=(0,o.q)({initialValue:b,onReset:y}),E=(0,s.c)(m,C,R);r.useLayoutEffect(()=>{C.current&&(C.current.indeterminate=!!d)},[d]);let k=r.useCallback(e=>{i.P.publish({componentId:"Checkbox",eventId:"click",domEvent:e,meta:{checked:e.target.checked}})},[]);return{checked:b,inputProps:Object.assign(Object.assign({},p),{name:e,value:t,id:n,onFocus:f,onBlur:v,disabled:g,type:"checkbox",onChange:e=>{y(e.target.checked),h&&h(e)},onClickCapture:k,defaultChecked:a,checked:w,"aria-checked":S,ref:E})}}},29080:function(){},5305:function(){},72360:function(){},82472:function(){},70841:function(){},33075:function(){},64565:function(){}}]);