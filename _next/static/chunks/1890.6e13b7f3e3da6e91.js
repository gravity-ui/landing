(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1890],{44607:function(e,t,r){"use strict";var n=r(67294);t.Z=e=>n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.47 13.03a.75.75 0 0 1 0-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0",clipRule:"evenodd"}))},47177:function(e,t,r){"use strict";r.d(t,{Oo:function(){return C},RP:function(){return i},Y7:function(){return s}});var n,a,s,i,l=r(67294),o=r(23493),c=r.n(o),u=r(32782),d=r(5378);let m=(0,u.Ge)("breadcrumbs");function p(e){return l.createElement("button",Object.assign({},e,{type:"button",className:m("switcher",{more:!0})}))}let f=(0,u.Ge)("breadcrumbs"),h=l.memo(function({item:e,isCurrent:t,isPrevCurrent:r,renderItemContent:n,renderItem:a}){let s=n?n(e,t,r):e.text;if(a)return a({item:e,children:s,isCurrent:t,isPrevCurrent:r});let i=e.title||e.text;return r||!t?void 0!==e.href?l.createElement(d.r,{key:e.text,view:"secondary",href:e.href,title:i,onClick:e.action,className:f("item",{"prev-current":r})},s):l.createElement(p,{key:e.text,title:i,onClick:e.action},s):l.createElement("div",{title:i,className:f("item",{current:!0})},s)});h.displayName="Breadcrumbs.Item";var b=r(45527),v=r(89407),E=JSON.parse('{"label_more":"Show more"}'),g=JSON.parse('{"label_more":"Показать больше"}'),y=(0,v.e)({en:E,ru:g},"Breadcrumbs");let I=(0,u.Ge)("breadcrumbs");function w({popupStyle:e,popupPlacement:t,items:r}){return l.createElement(b.h,{items:r,popupProps:{className:I("popup",{staircase:"staircase"===e}),placement:t},renderSwitcher:({onClick:e})=>l.createElement(p,{title:y("label_more"),onClick:e},"...")})}w.displayName="Breadcrumbs.More";let N=(0,u.Ge)("breadcrumbs");function O({renderItemDivider:e}){return l.createElement("div",{"aria-hidden":!0,className:N("divider")},e?e():"/")}O.displayName="Breadcrumbs.Separator",r(19436);let k=(0,u.Ge)("breadcrumbs");(n=s||(s={}))[n.One=1]="One",n[n.Two=2]="Two",(a=i||(i={}))[a.Zero=0]="Zero",a[a.One=1]="One";class C extends l.Component{static prepareInitialState(e){let{firstDisplayedItemsCount:t}=e;return{calculated:!1,rootItem:t?e.items[0]:void 0,visibleItems:e.items.slice(t),hiddenItems:[],allItems:e.items}}static getDerivedStateFromProps(e,t){return t.allItems!==e.items?C.prepareInitialState(e):null}constructor(e){super(e),this.handleResize=()=>{let e=C.prepareInitialState(this.props);this.setState(e,this.recalculate)},this.handleResize=c()(this.handleResize,200),"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize)),this.container=l.createRef(),this.state=C.prepareInitialState(e)}componentDidMount(){var e;this.recalculate(),null===(e=this.resizeObserver)||void 0===e||e.observe(this.container.current)}componentDidUpdate(e){e.items!==this.state.allItems&&this.recalculate()}componentWillUnmount(){var e;null===(e=this.resizeObserver)||void 0===e||e.disconnect()}render(){let{className:e,qa:t}=this.props,{calculated:r}=this.state;return l.createElement("div",{className:k({calculated:r?"yes":"no"},e),"data-qa":t},l.createElement("div",{className:k("inner"),ref:this.container},this.renderRootItem(),this.renderMoreItem(),this.renderVisibleItems()))}renderItem(e,t,r,n){return l.createElement(h,{item:e,isCurrent:t,isPrevCurrent:r,renderItemContent:n||this.props.renderItemContent,renderItem:this.props.renderItem})}renderItemDivider(){let{renderItemDivider:e}=this.props;return l.createElement(O,{renderItemDivider:e})}renderRootItem(){let{renderRootContent:e}=this.props,{rootItem:t,visibleItems:r}=this.state,n=0===r.length;return t?this.renderItem(t,n,!1,e):null}renderVisibleItems(){let{visibleItems:e}=this.state;return e.map((e,t,r)=>{let n=t===r.length-1,a=t===r.length-2;return l.createElement(l.Fragment,{key:t},this.renderItemDivider(),this.renderItem(e,n,a))})}renderMoreItem(){let{hiddenItems:e}=this.state;if(0===e.length)return null;let{popupStyle:t,popupPlacement:r,renderItemDivider:n}=this.props;return l.createElement(l.Fragment,null,l.createElement(O,{renderItemDivider:n}),l.createElement(w,{items:e,popupPlacement:r,popupStyle:t}))}recalculate(){var e;let{items:t,lastDisplayedItemsCount:r,firstDisplayedItemsCount:n}=this.props,a=(null===(e=this.container.current)||void 0===e?void 0:e.offsetWidth)||0;if(this.container.current&&a>0){a+=4;let e=Array.from(this.container.current.querySelectorAll(`.${k("divider")}`)),i=[...Array.from(this.container.current.querySelectorAll(`.${k("switcher")}`)),...Array.from(this.container.current.querySelectorAll(`.${k("item")}`))],l=i.map((e,t)=>e.scrollWidth+(t===i.length-1?4:8)),o=e.map(e=>e.offsetWidth),c=l.reduce((e,t,n,a)=>{let i=a.length-1===n,l=r===s.Two&&a.length-2===n;return i||l?e+Math.min(t,200):e+t},0)+o.reduce((e,t)=>e+t,0),u=1;for(;c>a&&u<i.length-r;)1===u&&(c+=34+o[u]),c-=l[u]+o[u],u++;this.setState({calculated:!0,visibleItems:t.slice(u-(1-n)),hiddenItems:t.slice(n,u-(1-n))})}}}C.defaultProps={popupPlacement:["bottom","top"]}},50254:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(67294),a=r(32782),s=r(69110),i=r(42087),l=r(96639),o=r(64200);r(82801);let c=(0,a.Ge)("button"),u=n.forwardRef(function({view:e="normal",size:t="m",pin:r="round-round",selected:a,disabled:s=!1,loading:l=!1,width:o,title:u,tabIndex:d,type:m="button",component:p,href:f,target:b,rel:v,extraProps:E,onClick:g,onMouseEnter:y,onMouseLeave:I,onFocus:w,onBlur:N,children:O,id:k,style:C,className:x,qa:R},S){let D={title:u,tabIndex:d,onClick:g,onClickCapture:n.useCallback(t=>{i.P.publish({componentId:"Button",eventId:"click",domEvent:t,meta:{content:t.currentTarget.textContent,view:e}})},[e]),onMouseEnter:y,onMouseLeave:I,onFocus:w,onBlur:N,id:k,style:C,className:c({view:e,size:t,pin:r,selected:a,disabled:s||l,loading:l,width:o},x),"data-qa":R};return"string"==typeof f||p?n.createElement(p||"a",Object.assign(Object.assign(Object.assign(Object.assign({},E),D),p?{}:{href:f,target:b,rel:"_blank"!==b||v?v:"noopener noreferrer"}),{ref:S,"aria-disabled":s||l}),h(O)):n.createElement("button",Object.assign({},E,D,{ref:S,type:m,disabled:s||l,"aria-pressed":a}),h(O))});u.displayName="Button";let d=Object.assign(u,{Icon:o.E}),m=(0,l.s)(o.E),p=(0,l.s)("span"),f=RegExp(`^${c("icon")}($|\\s+\\w)`);function h(e){let t=n.Children.toArray(e);if(1===t.length){let e=t[0];return m(e)||p(e)&&f.test(e.props.className||"")?e:(0,s.yb)(e)||(0,s.Dc)(e)?n.createElement(d.Icon,{key:"icon"},e):n.createElement("span",{key:"text",className:c("text")},e)}{let e,r,a;let i=[];for(let a of t){let t=(0,s.yb)(a)||(0,s.Dc)(a),l=m(a),u=p(a)&&f.test(a.props.className||"");if(t||l||u){if(e||0!==i.length)r||0===i.length||(r=t?n.createElement(d.Icon,{key:"icon-end",side:"end"},a):l?n.cloneElement(a,{side:"end"}):n.cloneElement(a,{className:c("icon",{side:(0,o.C)("end")},a.props.className)}));else{let r="start";e=t?n.createElement(d.Icon,{key:"icon-start",side:r},a):l?n.cloneElement(a,{side:r}):n.cloneElement(a,{className:c("icon",{side:(0,o.C)(r)},a.props.className)})}}else i.push(a)}return i.length>0&&(a=n.createElement("span",{key:"text",className:c("text")},i)),[e,r,a]}}},64200:function(e,t,r){"use strict";r.d(t,{C:function(){return c},E:function(){return o}});var n=r(67294),a=r(32782),s=r(9042);let i=(0,a.Ge)("button");function l(){(0,s.O)('[Button.Icon] Physical values (left, right) of "side" property are deprecated. Use logical values (start, end) instead.')}let o=({side:e,className:t,children:r})=>n.createElement("span",{className:i("icon",{side:c(e)},t)},n.createElement("span",{className:i("icon-inner")},r));function c(e){let t=e;return"left"===t&&(l(),t="start"),"right"===t&&(l(),t="end"),t}o.displayName="Button.Icon"},5378:function(e,t,r){"use strict";r.d(t,{r:function(){return l}});var n=r(67294),a=r(32782),s=r(42087);r(69297);let i=(0,a.Ge)("link"),l=n.forwardRef(function({view:e="normal",visitable:t,underline:r,href:a,target:l,rel:o,title:c,children:u,extraProps:d,onClick:m,onFocus:p,onBlur:f,id:h,style:b,className:v,qa:E},g){let y={title:c,onClick:m,onClickCapture:n.useCallback(e=>{s.P.publish({componentId:"Link",eventId:"click",domEvent:e})},[]),onFocus:p,onBlur:f,id:h,style:b,className:i({view:e,visitable:t,underline:r},v),"data-qa":E};return n.createElement("a",Object.assign({},d,y,{ref:g,href:a,target:l,rel:"_blank"!==l||o?o:"noopener noreferrer"}),u)})},555:function(e,t,r){"use strict";r.d(t,{G:function(){return g}});var n=r(67294),a=r(5031),s=r(77322),i=r(95237),l=r(8682);let o=["bottom-start","bottom","bottom-end","top-start","top","top-end","right-start","right","right-end","left-start","left","left-end"],c={name:"rtlOffsetFix",enabled:!0,phase:"main",requires:["offset"],fn({state:e}){var t;if(!e.placement.startsWith("top")&&!e.placement.startsWith("bottom"))return;let r=null===(t=e.modifiersData.offset)||void 0===t?void 0:t[e.placement];r&&(e.modifiersData.popperOffsets.x-=2*r.x)}};var u=r(86758),d=r(87174),m=r(98484),p=r(32782),f=r(44562),h=r(35860);r(31130);let b=(0,p.Ge)("popup");function v({styles:e,attributes:t,setArrowRef:r}){return n.createElement("div",Object.assign({"data-popper-arrow":!0,ref:r,className:b("arrow"),style:e},t),n.createElement("div",{className:b("arrow-content")},n.createElement("div",{className:b("arrow-circle-wrapper")},n.createElement("div",{className:b("arrow-circle",{left:!0})})),n.createElement("div",{className:b("arrow-circle-wrapper")},n.createElement("div",{className:b("arrow-circle",{right:!0})}))))}let E=(0,p.Ge)("popup");function g({keepMounted:e=!1,hasArrow:t=!1,offset:r=[0,4],open:p,placement:b,anchorRef:g,disableEscapeKeyDown:y,disableOutsideClick:I,disableLayer:w,style:N,className:O,contentClassName:k,modifiers:C=[],children:x,onEscapeKeyDown:R,onOutsideClick:S,onClose:D,onClick:P,onMouseEnter:A,onMouseLeave:B,onFocus:j,onBlur:G,onTransitionEnter:M,onTransitionEntered:_,onTransitionExit:z,onTransitionExited:L,disablePortal:q,container:F,strategy:W,qa:T,restoreFocus:V,restoreFocusRef:$,"aria-label":Z,"aria-labelledby":U,role:J,id:K,focusTrap:Y=!1,autoFocus:H=!1,"aria-modal":Q=Y}){let X=n.useRef(null);(0,f.s)({open:p,disableEscapeKeyDown:y,disableOutsideClick:I,onEscapeKeyDown:R,onOutsideClick:S,onClose:D,contentRefs:[g,X],enabled:!w,type:"popup"});let{attributes:ee,styles:et,setPopperRef:er,setArrowRef:en}=function({anchorRef:e,placement:t=o,offset:r,modifiers:a=[],strategy:s,altBoundary:u}){let[d,m]=n.useState(null),[p,f]=n.useState(null),h=(0,l.g)(),b=n.useMemo(()=>{let e=Array.isArray(t)?t:[t];return"rtl"===h&&(e=e.map(e=>e.replace(/(top|bottom)-(start|end)/g,(e,t,r)=>"start"===r?t+"-end":"end"===r?t+"-start":e))),e},[t,h]),{attributes:v,styles:E}=(0,i.D)(null==e?void 0:e.current,d,{strategy:s,modifiers:[{name:"arrow",options:{element:p}},{name:"offset",options:{offset:r,altBoundary:u}},{name:"flip",options:{fallbackPlacements:b.slice(1),altBoundary:u}},..."rtl"===h?[c]:[],...a],placement:b[0]});return{attributes:v,styles:E,setPopperRef:m,setArrowRef:f}}({anchorRef:g,placement:b,offset:t?[r[0],r[1]+8]:r,strategy:W,altBoundary:q,modifiers:[{name:"arrow",options:{enabled:t,padding:4}},{name:"preventOverflow",options:{padding:1,altBoundary:q}},...C]}),ea=(0,s.c)(er,X,(0,m.e)()),es=(0,u.H)({enabled:!!(V&&p),restoreFocusRef:$}),ei=J;return!0!==Q&&"true"!==Q||ei||(ei="dialog"),n.createElement(a.Z,{nodeRef:X,in:p,addEndListener:e=>{var t;return null===(t=X.current)||void 0===t?void 0:t.addEventListener("animationend",e)},classNames:(0,h.Y)(E),mountOnEnter:!e,unmountOnExit:!e,appear:!0,onEnter:()=>{null==M||M()},onEntered:()=>{null==_||_()},onExit:()=>{null==z||z()},onExited:()=>{null==L||L()}},n.createElement(d.h,{container:F,disablePortal:q},n.createElement("div",Object.assign({ref:ea,style:et.popper},ee.popper,es,{className:E({open:p},O),"data-qa":T,id:K,role:ei,"aria-label":Z,"aria-labelledby":U,"aria-modal":Q&&p?Q:void 0}),n.createElement(m.i,{enabled:Y&&p,autoFocus:H},n.createElement("div",{onClick:P,onMouseEnter:A,onMouseLeave:B,onFocus:j,onBlur:G,className:E("content",k),style:N,tabIndex:-1},t&&n.createElement(v,{styles:et.arrow,attributes:ee.arrow,setArrowRef:en}),x)))))}},8682:function(e,t,r){"use strict";r.d(t,{g:function(){return a}});var n=r(73233);function a(){return(0,n.T)().direction}},9042:function(e,t,r){"use strict";r.d(t,{O:function(){return a}});let n=new Map;function a(e){e&&n.has(e)}},70926:function(e,t,r){"use strict";r.d(t,{S:function(){return s},b:function(){return i}});var n=r(67294),a=r(30839);function s(e){return t=>{e&&[a.V.ENTER,a.V.SPACEBAR,a.V.SPACEBAR_OLD].includes(t.key)&&(t.preventDefault(),e(t))}}function i(e){return{onKeyDown:n.useMemo(()=>s(e),[e])}}},89407:function(e,t,r){"use strict";r.d(t,{e:function(){return o}});var n=r(73168),a=r(3528);let{lang:s,fallbackLang:i}=(0,a.iE)(),l=new n.mb({lang:s,fallbackLang:i});function o(e,t){return Object.entries(e).forEach(([e,r])=>l.registerKeyset(e,t,r)),l.keyset(t)}(0,a.Pe)(e=>{l.setLang(e.lang),l.setFallbackLang(e.fallbackLang)})},32901:function(e,t,r){"use strict";r.r(t),r.d(t,{BreadcrumbsWrapper:function(){return s}});var n=r(85893),a=r(47177);let s=e=>(0,n.jsx)("div",{style:{width:"220px"},children:(0,n.jsx)(a.Oo,{...e,items:[{text:"Region",action:()=>{}},{text:"Country",action:()=>{}},{text:"City",action:()=>{}},{text:"District",action:()=>{}},{text:"Street",action:()=>{}}],firstDisplayedItemsCount:Number(e.firstDisplayedItemsCount),lastDisplayedItemsCount:Number(e.lastDisplayedItemsCount)})})},19436:function(){},82801:function(){},69297:function(){},31130:function(){}}]);