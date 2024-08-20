(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9609],{20487:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var i=n(67294),s=n(74855),r=n.n(s);let o="pending";function a(e){let{children:t,text:n,options:s,timeout:a,onCopy:l}=e,[h,c]=i.useState(o),u=i.useRef(),d=i.useMemo(()=>t(h),[t,h]),p=i.useCallback((e,t)=>{c(t?"success":"error"),window.clearTimeout(u.current),u.current=window.setTimeout(()=>c(o),a),null==l||l(e,t)},[l,a]);if(i.useEffect(()=>()=>window.clearTimeout(u.current),[]),!i.isValidElement(d))throw Error("Content must be a valid react element");return i.createElement(r(),{text:n,onCopy:p,options:s},d)}},93580:function(e,t,n){"use strict";n.d(t,{y:function(){return v}});var i=n(67294),s=n(35464),r=n(83614),o=n(97582),a=n(54026),l=n(82771),h=n(48440);let c=(0,n(76657).Ge)("sheet");class u{constructor(e,t){this.x=e,this.y=t,this.timeStamp=Date.now()}}class d{constructor(e=5){this.points=[],this.pointsLen=e,this.clear()}clear(){this.points=Array(this.pointsLen)}addMovement({x:e,y:t}){this.points.pop(),this.points.unshift(new u(e,t))}getYAcceleration(e=1){let t=this.points[0],n=this.points[e];return t&&n?(t.y-n.y)/Math.pow(t.timeStamp-n.timeStamp,2):0}}n(59940);let p=[];class m extends i.Component{constructor(){super(...arguments),this.veilRef=i.createRef(),this.sheetRef=i.createRef(),this.sheetTopRef=i.createRef(),this.sheetContentRef=i.createRef(),this.sheetInnerContentRef=i.createRef(),this.sheetTitleRef=i.createRef(),this.velocityTracker=new d,this.observer=null,this.resizeWindowTimer=null,this.state={startScrollTop:0,startY:0,deltaY:0,prevSheetHeight:0,swipeAreaTouched:!1,contentTouched:!1,veilTouched:!1,isAnimating:!1,inWindowResizeScope:!1},this.setStyles=({status:e,deltaHeight:t=0})=>{if(!this.sheetRef.current||!this.veilRef.current)return;let n=this.sheetHeight-t,i="showing"===e?`translate3d(0, -${n}px, 0)`:"translate3d(0, 0, 0)",s=0;"showing"===e&&(s=0===t?1:n/this.sheetHeight),this.veilRef.current.style.opacity=String(s),this.sheetRef.current.style.transform=i},this.getAvailableContentHeight=e=>{let t=.9*window.innerHeight-this.sheetTopHeight;return e>=t?t:e},this.show=()=>{this.setState({isAnimating:!0},()=>{this.setStyles({status:"showing"}),this.setHash()})},this.hide=()=>{this.setState({isAnimating:!0},()=>{this.setStyles({status:"hiding"}),this.removeHash()})},this.onSwipeAreaTouchStart=e=>{this.velocityTracker.clear(),this.setState({startY:e.nativeEvent.touches[0].clientY,swipeAreaTouched:!0})},this.onContentTouchStart=e=>{this.props.allowHideOnContentScroll&&!this.state.swipeAreaTouched&&(this.velocityTracker.clear(),this.setState({startY:e.nativeEvent.touches[0].clientY,startScrollTop:this.sheetScrollTop,contentTouched:!0}))},this.onSwipeAriaTouchMove=e=>{let t=e.nativeEvent.touches[0].clientY-this.state.startY;this.velocityTracker.addMovement({x:e.nativeEvent.touches[0].clientX,y:e.nativeEvent.touches[0].clientY}),this.setState({deltaY:t}),t<=0||this.setStyles({status:"showing",deltaHeight:t})},this.onContentTouchMove=e=>{if(!this.props.allowHideOnContentScroll)return;if(!this.state.startY){this.onContentTouchStart(e);return}let{startScrollTop:t,swipeAreaTouched:n}=this.state;if(n||this.sheetScrollTop>0||t>0&&t!==this.sheetScrollTop)return;let i=e.nativeEvent.touches[0].clientY-this.state.startY;this.velocityTracker.addMovement({x:e.nativeEvent.touches[0].clientX,y:e.nativeEvent.touches[0].clientY}),this.setState({deltaY:i}),i<=0||this.setStyles({status:"showing",deltaHeight:i})},this.onTouchEndAction=e=>{let t=this.velocityTracker.getYAcceleration();this.sheetHeight<=e?this.props.hideSheet():e>50&&t<=.08&&t>=-.02||t>.08?this.hide():0!==e&&this.show()},this.onSwipeAriaTouchEnd=()=>{let{deltaY:e}=this.state;this.onTouchEndAction(e),this.setState({startY:0,deltaY:0,swipeAreaTouched:!1})},this.onContentTouchEnd=()=>{let{deltaY:e,swipeAreaTouched:t}=this.state;this.props.allowHideOnContentScroll&&!t&&(this.onTouchEndAction(e),this.setState({startY:0,deltaY:0,contentTouched:!1}))},this.onVeilClick=()=>{this.setState({veilTouched:!0}),this.hide()},this.onVeilTransitionEnd=()=>{this.setState({isAnimating:!1}),"0"===this.veilOpacity&&this.props.hideSheet()},this.onContentTransitionEnd=e=>{"height"===e.propertyName&&this.sheetContentRef.current&&(this.sheetContentRef.current.style.transition="none")},this.onResizeWindow=()=>{this.setState({inWindowResizeScope:!0}),this.resizeWindowTimer&&window.clearTimeout(this.resizeWindowTimer),this.resizeWindowTimer=window.setTimeout(()=>{this.onResize()},25)},this.onResize=()=>{if(!this.sheetRef.current||!this.sheetContentRef.current)return;let e=this.sheetContentHeight;if(e===this.state.prevSheetHeight&&!this.state.inWindowResizeScope)return;let t=this.getAvailableContentHeight(e);this.sheetContentRef.current.style.transition=this.state.prevSheetHeight>e?"height 0s ease 0.3s":"none",this.sheetContentRef.current.style.height=`${t}px`,this.sheetRef.current.style.transform=`translate3d(0, -${t+this.sheetTopHeight}px, 0)`,this.setState({prevSheetHeight:e,inWindowResizeScope:!1})}}componentDidMount(){this.addListeners(),this.show();let e=this.getAvailableContentHeight(this.sheetContentHeight);this.setInitialStyles(e),this.setState({prevSheetHeight:e})}componentDidUpdate(e){let{visible:t,location:n}=this.props;!e.visible&&t&&this.show(),(e.visible&&!t||this.shouldClose(e))&&this.hide(),e.location.pathname!==n.pathname&&(p=[])}componentWillUnmount(){this.removeListeners()}render(){let{content:e,contentClassName:t,swipeAreaClassName:n,hideTopBar:s,title:r}=this.props,{deltaY:o,swipeAreaTouched:a,contentTouched:l,veilTouched:h,isAnimating:u,inWindowResizeScope:d}=this.state,p={"with-transition":!o||h},m={"with-transition":!d&&p["with-transition"]};return i.createElement(i.Fragment,null,i.createElement("div",{ref:this.veilRef,className:c("veil",p),onClick:u?void 0:this.onVeilClick,onTransitionEnd:this.onVeilTransitionEnd,role:"presentation"}),i.createElement("div",{ref:this.sheetRef,className:c("sheet",m),role:"dialog","aria-modal":"true","aria-label":r},!s&&i.createElement("div",{ref:this.sheetTopRef,className:c("sheet-top")},i.createElement("div",{className:c("sheet-top-resizer")})),i.createElement("div",{className:c("sheet-swipe-area",n),onTouchStart:this.onSwipeAreaTouchStart,onTouchMove:this.onSwipeAriaTouchMove,onTouchEnd:this.onSwipeAriaTouchEnd}),i.createElement("div",{ref:this.sheetContentRef,className:c("sheet-content",{"without-scroll":o>0&&l||a},t),onTouchStart:this.onContentTouchStart,onTouchMove:this.onContentTouchMove,onTouchEnd:this.onContentTouchEnd,onTransitionEnd:this.onContentTransitionEnd},r&&i.createElement("div",{ref:this.sheetTitleRef,className:c("sheet-content-title")},r),i.createElement("div",{ref:this.sheetInnerContentRef},e))))}get veilOpacity(){var e;return(null===(e=this.veilRef.current)||void 0===e?void 0:e.style.opacity)||0}get sheetTopHeight(){var e;return(null===(e=this.sheetTopRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get sheetHeight(){var e;return(null===(e=this.sheetRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get innerContentHeight(){var e;return(null===(e=this.sheetInnerContentRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get sheetTitleHeight(){var e;return(null===(e=this.sheetTitleRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get sheetScrollTop(){var e;return(null===(e=this.sheetContentRef.current)||void 0===e?void 0:e.scrollTop)||0}get sheetContentHeight(){return this.sheetTitleHeight+this.innerContentHeight}setInitialStyles(e){this.sheetContentRef.current&&this.sheetInnerContentRef.current&&(this.sheetContentRef.current.style.height=`${e}px`)}addListeners(){window.addEventListener("resize",this.onResizeWindow),this.sheetInnerContentRef.current&&(this.observer=new ResizeObserver(()=>{this.state.inWindowResizeScope||this.onResize()}),this.observer.observe(this.sheetInnerContentRef.current))}removeListeners(){window.removeEventListener("resize",this.onResizeWindow),this.observer&&this.observer.disconnect()}setHash(){let{id:e,platform:t,location:n,history:i}=this.props;if(t===a.t.BROWSER)return;let s=Object.assign(Object.assign({},n),{hash:e});switch(t){case a.t.IOS:n.hash&&p.push(n.hash),i.replace(s);break;case a.t.ANDROID:i.push(s)}}removeHash(){var e;let{id:t,platform:n,location:i,history:s}=this.props;if(n!==a.t.BROWSER&&i.hash===`#${t}`)switch(n){case a.t.IOS:s.replace(Object.assign(Object.assign({},i),{hash:null!==(e=p.pop())&&void 0!==e?e:""}));break;case a.t.ANDROID:s.goBack()}}shouldClose(e){let{id:t,platform:n,location:i,history:s}=this.props;return n!==a.t.BROWSER&&"POP"===s.action&&e.location.hash!==i.hash&&i.hash!==`#${t}`}}m.defaultProps={id:"sheet",allowHideOnContentScroll:!0};let f=function(e){var t;let n=(0,l.i)(e);return(t=class extends i.Component{render(){return i.createElement(e,Object.assign({},this.props,{mobile:this.context.mobile,platform:this.context.platform,useHistory:this.context.useHistory,useLocation:this.context.useLocation}))}}).displayName=`withMobile(${n})`,t.contextType=h.z,t}(function(e){let t=t=>{let{useHistory:n,useLocation:s}=t,r=(0,o._T)(t,["useHistory","useLocation"]);return i.createElement(e,Object.assign({},r,{history:n(),location:s()}))},n=e.displayName||e.name||"Component";return t.displayName=`withRouterWrapper(${n})`,t}(m)),v=({children:e,onClose:t,visible:n,id:o,title:a,className:l,contentClassName:h,swipeAreaClassName:u,allowHideOnContentScroll:d,hideTopBar:p,qa:m})=>{let[v,g]=i.useState(n),[w,S]=i.useState(n);return((0,s.y)({enabled:v}),!w&&n&&g(!0),n!==w&&S(n),v)?i.createElement(r.h,null,i.createElement("div",{"data-qa":m,className:c(null,l)},i.createElement(f,{id:o,content:e,contentClassName:h,swipeAreaClassName:u,title:a,visible:n,allowHideOnContentScroll:d,hideTopBar:p,hideSheet:()=>{t&&t(),g(!1)}}))):null}},11197:function(e,t,n){"use strict";n.d(t,{o:function(){return C}});var i=n(67294),s=n(81372),r=n(70033),o=n(38071),a=n(93258),l=n(64770),h=n(59854),c=n.n(h),u=n(23493),d=n.n(u);function p(e,t){let[n,s]=i.useState({width:0,height:0});return i.useLayoutEffect(()=>{if(!(null==e?void 0:e.current))return;let t=new ResizeObserver(d()(e=>{if(!Array.isArray(e))return;let t=e[0];if(t.borderBoxSize){let e=t.borderBoxSize[0]?t.borderBoxSize[0]:t.borderBoxSize;s({width:c()(e.inlineSize,2),height:c()(e.blockSize,2)})}else{let e=t.target;s({width:c()(e.offsetWidth,2),height:c()(e.offsetHeight,2)})}},16));return t.observe(e.current),()=>{t.disconnect()}},[e,t]),n}var m=n(1960),f=n(94294),v=n(76657),g=n(77950),w=n(14182),S=n(94088);let b=(0,v.Ge)("text-input"),R=i.forwardRef(function({placement:e,children:t,onClick:n},s){return t?i.createElement("div",{ref:s,className:b("additional-content",{placement:e}),onClick:n},t):null}),y=(0,v.Ge)("text-input");function T(e){let{controlProps:t,controlRef:n,type:s,name:r,id:o,tabIndex:a,autoComplete:l,placeholder:h,value:c,defaultValue:u,autoFocus:d,disabled:p,onChange:m,onFocus:f,onBlur:v,onKeyDown:g,onKeyUp:w,onKeyPress:S}=e;return i.createElement("input",Object.assign({},t,{ref:n,className:y("control",{type:"input"},t.className),type:s,name:r,id:o,tabIndex:a,placeholder:h,value:c,defaultValue:u,autoFocus:d,autoComplete:l,onChange:m,onFocus:f,onBlur:v,onKeyDown:g,onKeyUp:w,onKeyPress:S,disabled:null!=p?p:t.disabled}))}n(95738);let E=(0,v.Ge)("text-input"),C=i.forwardRef(function(e,t){let{view:n="normal",size:h="m",pin:c="round-round",name:u,value:d,defaultValue:v,label:b,disabled:y=!1,hasClear:C=!1,error:H,errorMessage:O,errorPlacement:N="outside",validationState:x,autoComplete:z,id:A,tabIndex:k,style:I,className:W,qa:Y,controlProps:B,leftContent:M,rightContent:L,startContent:j=M,endContent:$=L,note:D,onUpdate:P,onChange:_}=e,{errorMessage:F,errorPlacement:q,validationState:G}=(0,S.II)({error:H,errorMessage:O,errorPlacement:N,validationState:x}),[V,J]=(0,r.z)(d,null!=v?v:"",P),K=i.useRef(null),U=(0,l.q)({initialValue:V,onReset:J}),X=(0,o.c)(e.controlRef,K,U),Z=i.useRef(null),Q=i.useRef(null),ee=(0,S.O_)(G),et=!!b,en="invalid"===G&&!!F&&"outside"===q,ei="invalid"===G&&!!F&&"inside"===q,es=!!(C&&!y&&V),er=!!j,eo=!!$,ea=et&&!A&&!u&&void 0===z,el=(0,a.u)(),eh=et?A||el:A,ec=p(et?Z:null,h),eu=p(er?Q:null,h),ed=(0,a.u)(),ep=(0,a.u)(),em=[null==B?void 0:B["aria-describedby"],D?ep:void 0,en?ed:void 0].filter(Boolean).join(" "),ef=Object.assign(Object.assign({},B),{style:Object.assign(Object.assign({},null==B?void 0:B.style),et&&ec.width?{paddingInlineStart:`${ec.width}px`}:{}),"aria-invalid":"invalid"===G||void 0,"aria-describedby":em||void 0}),ev={id:eh,tabIndex:k,name:u,onChange(e){J(e.target.value),_&&_(e)},autoComplete:ea?"off":(0,S.xp)(z),controlProps:ef},eg=e=>{var t,n;let i=!e.currentTarget.contains(document.activeElement)&&e.currentTarget.contains(e.target),s=!!(null===(t=document.getSelection())||void 0===t?void 0:t.toString());i&&!s&&(null===(n=K.current)||void 0===n||n.focus())};return i.createElement("span",{ref:t,style:I,className:E({view:n,size:h,disabled:y,state:ee,pin:"clear"===n?void 0:c,"has-clear":es,"has-start-content":er,"has-end-content":es||eo},W),"data-qa":Y},i.createElement("span",{className:E("content")},er&&i.createElement(R,{ref:Q,placement:"start",onClick:eg},j),et&&i.createElement("label",{ref:Z,style:{insetInlineStart:er?eu.width:void 0,maxWidth:`calc(50% - ${eu.width}px)`},className:E("label"),title:b,htmlFor:eh},`${b}`),i.createElement(T,Object.assign({},e,ev,{controlRef:X})),es&&i.createElement(g.C,{size:(0,g.X)(h),onClick:e=>{J("");let t=K.current;if(t){let n=Object.create(e);n.target=t,n.currentTarget=t,t.value="",_&&_(n)}},className:E("clear",{size:h})}),eo&&i.createElement(R,{placement:"end",onClick:eg},$),ei&&i.createElement(f.J,{content:F},i.createElement("span",{"data-qa":S.eP},i.createElement(m.J,{data:s.Z,className:E("error-icon"),size:"s"===h?12:16})))),i.createElement(w.Z,{note:D,errorMessage:en?F:null,noteId:ep,errorMessageId:ed}))})},77950:function(e,t,n){"use strict";n.d(t,{C:function(){return m},X:function(){return p}});var i=n(67294),s=n(58405),r=n(51525),o=n(1960),a=n(76657),l=n(53263),h=JSON.parse('{"label_clear-button":"Clear"}'),c=JSON.parse('{"label_clear-button":"Очистить"}'),u=(0,l.e)({en:h,ru:c},`${a.A7}clear-button`);n(98029);let d=(0,a.Ge)("clear-button"),p=e=>{switch(e){case"s":return"xs";case"m":return"s";case"l":return"m";case"xl":return"l";default:throw Error(`Unknown text input size "${e}"`)}},m=e=>{let{size:t,className:n,onClick:a}=e;return i.createElement(r.z,{size:t,className:d(null,n),onClick:a,extraProps:{onMouseDown:e=>{e.preventDefault()},"aria-label":u("label_clear-button")}},i.createElement(o.J,{data:s.Z,size:16}))}},14182:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(67294),s=n(76657),r=n(94088);n(7567);let o=(0,s.Ge)("outer-additional-content"),a=({errorMessage:e,note:t,noteId:n,errorMessageId:s})=>e||t?i.createElement("div",{className:o()},e&&i.createElement("div",{className:o("error"),id:s,"data-qa":r.fz},e),t&&i.createElement("div",{className:o("note"),id:n},t)):null},94088:function(e,t,n){"use strict";n.d(t,{II:function(){return a},O_:function(){return o},eP:function(){return s},fz:function(){return i},xp:function(){return r}});let i="control-error-message-qa",s="control-error-icon-qa",r=e=>"boolean"==typeof e?e?"on":"off":e,o=e=>"invalid"===e?"error":void 0,a=e=>{let t,n;let{error:i,errorMessage:s,errorPlacement:r,validationState:o}=e;return"string"==typeof i&&(t=i),s&&(t=s),("invalid"===o||i)&&(n="invalid"),{errorMessage:t,errorPlacement:r,validationState:n}}},48440:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var i=n(67294);let s={mobile:!1,platform:n(54026).t.BROWSER,useHistory:()=>({action:"",replace(){},push(){},goBack(){}}),useLocation:()=>({pathname:"",search:"",hash:""})},r=i.createContext(s)},54026:function(e,t,n){"use strict";n.d(t,{t:function(){return s}});var i,s,r=n(76657);(i=s||(s={})).IOS="ios",i.ANDROID="android",i.BROWSER="browser",(0,r.Ge)("root")({mobile:!0}).split(/\s+/)[1]},53263:function(e,t,n){"use strict";n.d(t,{e:function(){return a}});var i=n(98085),s=n(82894);let r=(0,s.iE)().lang,o=new i.m({lang:r,fallbackLang:r});function a(e,t){return Object.entries(e).forEach(([e,n])=>o.registerKeyset(e,t,n)),o.keyset(t)}(0,s.Pe)(e=>{o.setLang(e.lang)})},82771:function(e,t,n){"use strict";function i(e){return e.displayName||e.name||"Component"}n.d(t,{i:function(){return i}})},35464:function(e,t,n){"use strict";let i;n.d(t,{y:function(){return o}});var s=n(67294);let r=0;function o({enabled:e}){s.useLayoutEffect(()=>{if(e)return 1==++r&&function(){let e=window.innerWidth-document.documentElement.clientWidth,t=window.innerHeight-document.documentElement.clientHeight,n=function(){let e=window.getComputedStyle(document.body);return{top:Number.parseFloat(e.paddingTop),right:Number.parseFloat(e.paddingRight),bottom:Number.parseFloat(e.paddingBottom),left:Number.parseFloat(e.paddingLeft)}}();i=document.body.style.cssText,document.body.style.overflow="hidden",e&&(document.body.style.paddingRight=`${n.right+e}px`),t&&(document.body.style.paddingBottom=`${n.bottom+t}px`)}(),()=>{0==--r&&(i?document.body.style.cssText=i:document.body.removeAttribute("style"))}},[e])}},59940:function(){},95738:function(){},98029:function(){},7567:function(){}}]);