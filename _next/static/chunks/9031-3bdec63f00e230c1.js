(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9031],{20087:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081",clipRule:"evenodd"}))},20847:function(e,t,n){"use strict";n.d(t,{G:function(){return D},P:function(){return G}});var r=n(67294),i=n(30839),s=n(59505),o=n(77322),l=n(68263),a=n(62227),u=n(59003),c=n(13079),d=n(87948),h=n(53006),p=n(23825),f=n(32782),v=n(74806);n(364);let m=(0,f.Ge)("select-filter"),b={padding:"4px 4px 0"},g=r.forwardRef((e,t)=>{let{onChange:n,onKeyDown:i,renderFilter:s,size:o,value:l,placeholder:a}=e,u=r.useRef(null);return r.useImperativeHandle(t,()=>({focus:()=>{var e;return null===(e=u.current)||void 0===e?void 0:e.focus({preventScroll:!0})}}),[]),s?s({onChange:n,onKeyDown:i,value:l,ref:u,style:b}):r.createElement("div",{className:m(),style:b},r.createElement(p.o,{controlRef:u,controlProps:{className:m("input"),size:1},size:o,value:l,placeholder:a,onUpdate:n,onKeyDown:i,qa:v.Gd.FILTER_INPUT}))});g.displayName="SelectFilter";var y=n(72725),E=n(77984);let w=(0,f.Ge)("select-list"),C=({option:e,renderOptionGroup:t})=>t?r.createElement("div",{className:w("group-label-custom")},t(e)):r.createElement("div",{className:w("group-label",{empty:""===e.label})},r.createElement("div",{className:w("group-label-content")},e.label));var T=n(20087),S=n(43671);let R=(0,f.Ge)("select-list"),k=({option:e})=>{let{content:t,children:n,disabled:i}=e;return r.createElement("span",{className:R("option-default-label",{disabled:i})},t||n)},N=e=>{let{renderOption:t,value:n,option:i,multiple:s}=e,o=-1!==n.indexOf(i.value),l=t?t(i):r.createElement(k,{option:i});return r.createElement("div",{"data-qa":i.qa,className:R("option",{colored:o&&!s,disabled:i.disabled})},s&&r.createElement(S.J,{className:R("tick-icon",{shown:o&&s}),data:T.Z}),l)};var O=n(46322),x=n(76795);let H=e=>{let t=r.useRef(null);return(0,O.s)({element:t.current,onIntersect:null==e?void 0:e.onIntersect}),r.createElement("div",{ref:t,className:(0,v.V_)("loading-indicator")},r.createElement(x.a,null))};n(62359);let A={value:"__SELECT_LIST_ITEM_LOADING__",disabled:!0},L=r.forwardRef((e,t)=>{let{onOptionClick:n,renderOption:i,renderOptionGroup:s,getOptionHeight:o,getOptionGroupHeight:l,size:a,flattenOptions:u,value:c,multiple:d,virtualized:h,mobile:p,loading:f,onLoadMore:m,id:b,onChangeActive:g}=e,w=r.useMemo(()=>f?[...u,A]:u,[u,f]),T=r.useMemo(()=>u.reduce((e,t,n)=>("value"in t&&c.includes(t.value)&&e.push(n),e),[]),[u,c]),S=(0,E.nK)({options:w,getOptionHeight:o,getOptionGroupHeight:l,size:a,mobile:p}),R=r.useCallback((e,t)=>(0,E.T7)({getOptionHeight:o,getOptionGroupHeight:l,size:a,option:e,index:t,mobile:p}),[o,l,p,a]),k=r.useCallback((e,t,n)=>{if("label"in e){let t=s?e=>s(e,{itemHeight:R(e,n)}):void 0;return r.createElement(C,{option:e,renderOptionGroup:t})}if(e.value===A.value)return r.createElement(H,{onIntersect:0===n?void 0:m});let o=i?e=>i(e,{itemHeight:R(e,n)}):void 0;return r.createElement(N,{option:e,value:c,multiple:d,renderOption:o})},[i,s,c,d,R,m]);return r.createElement(y.a,{ref:t,className:(0,v.V_)({size:a,virtualized:h,mobile:p}),qa:v.Gd.LIST,itemClassName:(0,v.V_)("item"),itemHeight:R,itemsHeight:h?S:void 0,items:w,filterable:!1,virtualized:h,renderItem:k,onItemClick:n,selectedItemIndex:T,id:b,role:"listbox",onChangeActive:g})});L.displayName="SelectList",n(95543);let I=(0,f.Ge)("select-empty-placeholder"),P=({renderEmptyOptions:e,filter:t})=>r.createElement("div",{className:I({empty:!e})},null==e?void 0:e({filter:t}));var W=n(1102),z=n(87813),Y=n(38813);function _(e){let{name:t,value:n,disabled:i,form:s,onReset:o}=e,l=(0,Y.q)({onReset:o,initialValue:n});return!t||i?null:0===n.length?r.createElement("input",{ref:l,type:"hidden",name:t,value:n,form:s,disabled:i}):r.createElement(r.Fragment,null,n.map((e,n)=>r.createElement("input",{key:e,ref:0===n?l:void 0,value:e,type:"hidden",name:t,form:s,disabled:i})))}let M=e=>{let{onChange:t,open:n,disabled:i}=e,[s,o]=r.useState(""),[l,a]=r.useState(),u=r.useCallback(e=>{clearTimeout(l),e&&a(window.setTimeout(()=>o(""),v.gX))},[l]),c=r.useCallback(e=>{e.stopPropagation();let t=(0,E._x)(e.key,s);s!==t&&(u(t),o(t))},[u,s]);r.useEffect(()=>(n&&!i?document.addEventListener("keydown",c):n||i||o(""),()=>{n&&!i&&document.removeEventListener("keydown",c)}),[c,n,i]),r.useEffect(()=>(n||clearTimeout(l),()=>clearTimeout(l)),[n,l]),r.useEffect(()=>{t(s)},[t,s])};var F=n(91413),B=n(89066);n(32450);let D=({renderFilter:e,renderList:t})=>r.createElement(r.Fragment,null,e(),t()),G=r.forwardRef(function(e,t){let{onUpdate:n,onOpenChange:p,onFilterChange:f,renderControl:m,renderFilter:b,renderOption:y,renderOptionGroup:w,renderSelectedOption:C,renderEmptyOptions:T,renderPopup:S=D,getOptionHeight:R,getOptionGroupHeight:k,filterOption:N,name:O,form:x,className:H,controlClassName:A,popupClassName:I,qa:Y,value:B,defaultValue:G,defaultOpen:V,open:j,label:$,placeholder:q,filterPlaceholder:Z,width:J,popupWidth:K,popupPlacement:U,error:X,virtualizationThreshold:Q=v._7,view:ee="normal",size:et="m",pin:en="round-round",multiple:er=!1,disabled:ei=!1,filterable:es=!1,filter:eo,disablePortal:el,hasClear:ea=!1,onClose:eu,id:ec,hasCounter:ed,renderCounter:eh,title:ep}=e,ef=(0,h.X)(),[ev,em]=(0,s.z)(eo,"",f),eb=r.useRef(null),eg=r.useRef(null),ey=r.useRef(null),eE=r.useRef(null),ew=(0,o.c)(t,eg),{value:eC,open:eT,activeIndex:eS,toggleOpen:eR,setValue:ek,handleSelection:eN,handleClearValue:eO,setActiveIndex:ex}=(0,l.L)({onUpdate:n,value:B,defaultValue:G,defaultOpen:V,multiple:er,open:j,onClose:eu,onOpenChange:p});r.useEffect(()=>{!eT&&es&&ef&&setTimeout(()=>{em("")},300)},[eT,es,em,ef]);let eH=e.options||(0,E.DA)(e.children),eA=(0,F.n)({options:eH,filter:ev,filterable:es,filterOption:N}),eL=(0,F.V)(eA),eI=(0,E.Df)(eA,eC,C),eP=eL.length>=Q,{errorMessage:eW,errorPlacement:ez,validationState:eY}=(0,d.II)({error:X,errorMessage:e.errorMessage,errorPlacement:e.errorPlacement||"outside",validationState:e.validationState}),e_=(0,a.u)(),eM="invalid"===eY,eF=eM&&!!eW&&"outside"===ez,eB=eM&&!!eW&&"inside"===ez,eD=r.useCallback(e=>{var t,n;if(e&&(null==e||!e.disabled)&&!("label"in e)){if(er){let e=null===(t=null==eE?void 0:eE.current)||void 0===t?void 0:t.getActiveItem();null===(n=ey.current)||void 0===n||n.focus(),"number"==typeof e&&setTimeout(()=>{var t;null===(t=null==eE?void 0:eE.current)||void 0===t||t.activateItem(e,!0)},50)}eN(e)}},[eN,er]),eG=r.useCallback(e=>{var t;[i.V.ENTER,i.V.SPACEBAR].includes(e.key)&&eT&&(e.preventDefault(),e.key===i.V.SPACEBAR&&eD((0,E.CL)(eE))),[i.V.ARROW_DOWN,i.V.ARROW_UP].includes(e.key)&&!eT&&(e.preventDefault(),eR()),null===(t=null==eE?void 0:eE.current)||void 0===t||t.onKeyDown(e)},[eD,eT,eR]),eV=r.useCallback(e=>{var t;null===(t=null==eE?void 0:eE.current)||void 0===t||t.onKeyDown(e)},[]);M({onChange:r.useCallback(e=>{var t;if(e){let n=(0,E.PB)(e,(0,E.qZ)(eE));"number"==typeof n&&-1!==n&&(null===(t=null==eE?void 0:eE.current)||void 0===t||t.activateItem(n,!0))}},[]),open:eT,disabled:es}),r.useEffect(()=>{var e;eT&&((0,E.Y8)(eE),es&&(null===(e=ey.current)||void 0===e||e.focus()))},[eT,es]);let ej=Object.assign({},"max"===J&&{width:J}),e$={};"number"==typeof J&&(e$.width=J);let eq=r.useCallback(()=>eR(!1),[eR]),{onFocus:eZ,onBlur:eJ}=e,{focusWithinProps:eK}=(0,u.L)({onFocusWithin:eZ,onBlurWithin:r.useCallback(e=>{null==eJ||eJ(e),eq()},[eq,eJ])}),eU=(0,a.u)(),eX=null!=ec?ec:eU,eQ=`select-popup-${eX}`;return r.createElement("div",Object.assign({ref:eb,className:(0,v.sj)(ej,H)},eK,{style:e$}),r.createElement(W.Y,{toggleOpen:eR,hasClear:ea,clearValue:eO,ref:ew,className:A,qa:Y,view:ee,size:et,pin:en,label:$,placeholder:q,selectedOptionsContent:eI,isErrorVisible:eM,errorMessage:eB?eW:void 0,open:eT,disabled:ei,onKeyDown:eG,renderControl:m,value:eC,popupId:eQ,selectId:eX,activeIndex:eS,hasCounter:er&&ed,renderCounter:eh,title:ep}),r.createElement(z.h,{ref:eb,className:I,controlRef:eg,width:K,open:eT,handleClose:eq,disablePortal:el,virtualized:eP,mobile:ef,placement:U,onAfterClose:es?()=>{em("")}:void 0},S({renderFilter:()=>es?r.createElement(g,{ref:ey,size:et,value:ev,placeholder:Z,onChange:em,onKeyDown:eV,renderFilter:b}):null,renderList:()=>eL.length||e.loading?r.createElement(L,{ref:eE,size:et,value:eC,mobile:ef,flattenOptions:eL,multiple:er,virtualized:eP,onOptionClick:eD,renderOption:y,renderOptionGroup:w,getOptionHeight:R,getOptionGroupHeight:k,loading:e.loading,onLoadMore:e.onLoadMore,id:eQ,onChangeActive:ex}):r.createElement(P,{filter:ev,renderEmptyOptions:T})})),r.createElement(c.Z,{errorMessage:eF?eW:null,errorMessageId:e_}),r.createElement(_,{name:O,value:eC,disabled:ei,form:x,onReset:ek}))});G.Option=B.W,G.OptionGroup=B.Y},1102:function(e,t,n){"use strict";n.d(t,{Y:function(){return C}});var r=n(67294),i=n(81372),s=n(51693),o=n(41609),l=n.n(o),a=n(62227),u=n(43671),c=n(85956),d=n(74806),h=n(97580),p=JSON.parse('{"label_clear":"Clear","label_show-error-info":"Show popup with error info"}'),f=JSON.parse('{"label_clear":"Очистить","label_show-error-info":"Показать попап с информацей об ошибке"}'),v=(0,h.e)({en:p,ru:f},"Select"),m=n(58405);n(4350);let b=e=>{let{size:t,onClick:n,onMouseEnter:i,onMouseLeave:s,renderIcon:o}=e,l=o?o():r.createElement(u.J,{className:(0,d.Hu)("clear"),data:m.Z});return r.createElement("button",{className:(0,d.Hu)({size:t}),"aria-label":v("label_clear"),onClick:n,onMouseEnter:i,onMouseLeave:s,"data-qa":d.Gd.CLEAR,type:"button"},l)};b.displayName="SelectClear";var g=n(48323),y=n(32782);n(3056);let E=(0,y.Ge)("select-counter");function w({count:e,size:t,disabled:n}){return r.createElement("div",{className:E({size:t})},r.createElement(g.x,{variant:"xl"===t?"body-2":"body-1",color:n?"hint":"primary",className:E("text")},e))}n(8712);let C=r.forwardRef((e,t)=>{let{toggleOpen:n,clearValue:o,onKeyDown:h,renderControl:p,view:f,size:m,pin:g,selectedOptionsContent:y,className:E,qa:C,label:T,placeholder:S,isErrorVisible:R,errorMessage:k,open:N,disabled:O,value:x,hasClear:H,popupId:A,selectId:L,activeIndex:I,renderCounter:P,hasCounter:W,title:z}=e,Y=!!y,_=!!(S&&!Y),M=Array.isArray(x)&&!l()(x.filter(Boolean)),F=(0,a.u)(),[B,D]=r.useState(!1),G=r.useCallback(e=>{e&&e.currentTarget!==document.activeElement&&"focus"in e.currentTarget&&e.currentTarget.focus(),n()},[n]),V=r.useCallback(()=>{D(!0)},[]),j=r.useCallback(()=>{D(!1)},[]),$=r.useCallback(()=>{D(!1),o()},[o]),q=()=>{if(!W)return null;let e=Number(null==x?void 0:x.length)||0,t=r.createElement(w,{count:e,size:m,disabled:O});return P?P(t,{count:e,size:m,disabled:O}):t},Z=e=>{let t=!(null==x?void 0:x[0]);return!H||!o||t||O?null:r.createElement(b,{size:m,onClick:$,onMouseEnter:V,onMouseLeave:j,renderIcon:e.renderIcon})};return p?p({onKeyDown:h,onClear:o,onClick:G,renderClear:e=>Z(e),renderCounter:q,ref:t,open:!!N,popupId:A,selectId:L,activeIndex:I},{value:x}):r.createElement(r.Fragment,null,r.createElement("div",{className:(0,d.e9)({open:N,size:m,pin:g,disabled:O,error:R,"has-clear":H,"no-active":B,"has-value":M}),role:"group"},r.createElement("button",{id:L,ref:t,role:"combobox","aria-controls":A,className:(0,d.JW)({open:N,size:m,view:f,pin:g,disabled:O,error:R},E),"aria-haspopup":"listbox","aria-expanded":N,"aria-activedescendant":void 0===I?void 0:`${A}-item-${I}`,disabled:O,onClick:G,onKeyDown:h,type:"button","data-qa":C,title:z},T&&r.createElement("span",{className:(0,d.e9)("label")},T),_&&r.createElement("span",{className:(0,d.e9)("placeholder")},S),Y&&r.createElement("span",{className:(0,d.e9)("option-text")},y)),q(),Z({}),k&&r.createElement(c.J,{content:k,tooltipId:F},r.createElement("button",{"aria-label":v("label_show-error-info"),"aria-describedby":F,className:(0,d.e9)("error-icon")},r.createElement(u.J,{data:i.Z,size:"s"===m?12:16}))),r.createElement(u.J,{className:(0,d.e9)("chevron-icon",{disabled:O}),data:s.Z,"aria-hidden":"true"})))});C.displayName="SelectControl"},87813:function(e,t,n){"use strict";n.d(t,{h:function(){return f}});var r=n(67294),i=n(555),s=n(93298),o=n(32782),l=n(74806);let a=e=>e-2*l.YF,u=(e,t)=>t?e>l.T7?e:l.T7:a(e),c=(e,t,n)=>{let r=t;return r="number"==typeof e?e:"fit"===e?a(t):u(t,n),`${r}px`},d=e=>{let{width:t,disablePortal:n,virtualized:r}=e;return[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e,name:n})=>{var i;if(null===(i=e.modifiersData[`${n}#persistent`])||void 0===i?void 0:i.skip)return;let s=c(t,e.rects.reference.width,r);"number"!=typeof t&&"fit"!==t?(e.styles.popper.minWidth=s,e.styles.popper.width=void 0):(e.styles.popper.minWidth=s,e.styles.popper.width=s),e.styles.popper.maxWidth=`max(90vw, ${a(e.rects.reference.width)}px)`,e.modifiersData[`${n}#persistent`]={skip:"number"!=typeof t}},effect:({state:e,name:n})=>{var i;if(null===(i=e.modifiersData[`${n}#persistent`])||void 0===i?void 0:i.skip)return;let s=c(t,e.elements.reference.offsetWidth,r);"number"!=typeof t&&"fit"!==t?e.elements.popper.style.minWidth=s:(e.elements.popper.style.minWidth=s,e.elements.popper.style.width=s),e.elements.popper.style.maxWidth=`max(90vw, ${e.elements.reference.offsetWidth}px)`}},{name:"preventOverflow",options:{padding:10,altBoundary:n,altAxis:!0}}]};n(77141);let h=(0,o.Ge)("select-popup"),p=["bottom-start","bottom-end","top-start","top-end"],f=r.forwardRef(({handleClose:e,onAfterClose:t,width:n,open:o,placement:a=p,controlRef:u,children:c,className:f,disablePortal:v,virtualized:m,mobile:b,id:g},y)=>b?r.createElement(s.y,{qa:l.Gd.SHEET,className:f,visible:!!o,onClose:e},c):r.createElement(i.G,{contentClassName:h(null,f),qa:l.Gd.POPUP,anchorRef:y,placement:a,offset:[l.YF,l.YF],open:o,onClose:e,disablePortal:v,restoreFocus:!0,restoreFocusRef:u,modifiers:d({width:n,disablePortal:v,virtualized:m}),id:g,onTransitionExited:t},c));f.displayName="SelectPopup"},74806:function(e,t,n){"use strict";n.d(t,{Gd:function(){return m},Hu:function(){return a},JW:function(){return o},T7:function(){return p},V_:function(){return l},YF:function(){return h},YV:function(){return b},_7:function(){return v},_X:function(){return u},e9:function(){return s},el:function(){return c},gX:function(){return f},rn:function(){return d},sj:function(){return i}});var r=n(32782);let i=(0,r.Ge)("select"),s=(0,r.Ge)("select-control"),o=(0,r.Ge)("select-control__button"),l=(0,r.Ge)("select-list"),a=(0,r.Ge)("select-clear"),u={s:28,m:28,l:32,xl:36},c=32,d=5,h=1,p=100,f=2e3,v=50,m={LIST:"select-list",POPUP:"select-popup",SHEET:"select-sheet",CLEAR:"select-clear",FILTER_INPUT:"select-filter-input"},b=Symbol("flatten")},91413:function(e,t,n){"use strict";n.d(t,{V:function(){return u},n:function(){return c}});var r=n(67294),i=n(27361),s=n.n(i),o=n(74806),l=n(77984);function a(e){return s()(e,[o.YV])}function u(e){if(!a(e))throw Error("You should use options generated by useSelectOptions hook");return s()(e,[o.YV,"filteredOptions"])}function c(e){let{filter:t="",filterable:n,filterOption:i}=e,s=r.useMemo(()=>a(e.options)?e.options:(0,l.BC)(e.options),[e.options]),u=r.useMemo(()=>n?(0,l.vk)({options:s,filter:t,filterOption:i}):s,[t,n,i,s]);return s[o.YV].filteredOptions=u,s}},89066:function(e,t,n){"use strict";n.d(t,{W:function(){return r},Y:function(){return i}});let r=e=>null,i=e=>null},77984:function(e,t,n){"use strict";n.d(t,{BC:function(){return a},CL:function(){return E},DA:function(){return v},Df:function(){return h},PB:function(){return g},T7:function(){return u},VP:function(){return l},Y8:function(){return w},_x:function(){return m},nK:function(){return c},qZ:function(){return y},vk:function(){return T}});var r=n(67294),i=n(30839),s=n(72725),o=n(74806);let l=e=>!!(e&&"label"in e),a=e=>{let t=e.reduce((e,t)=>("label"in t?(e.push({label:t.label,disabled:!0}),e.push(...t.options||[])):e.push(t),e),[]);return Object.defineProperty(t,o.YV,{enumerable:!1,value:{}}),t},u=e=>{let{getOptionHeight:t,getOptionGroupHeight:n,size:r,option:i,index:s,mobile:a}=e,u=a?o.el:o._X[r];if(l(i)){let e=0===s?0:o.rn;return u=""===i.label?0:u,n?n(i,s):u+e}return t?t(i,s):u},c=e=>{let{getOptionHeight:t,getOptionGroupHeight:n,size:r,options:i,mobile:s}=e;return i.reduce((e,i,o)=>e+u({getOptionHeight:t,getOptionGroupHeight:n,size:r,option:i,index:o,mobile:s}),0)},d=e=>"string"==typeof e.content?e.content:"string"==typeof e.children?e.children:e.text?e.text:e.value,h=(e,t,n)=>{if(0===t.length)return null;let i=e.filter(e=>!l(e)),s=t.reduce((e,t)=>{let n=i.find(e=>e.value===t);return e.push(n||{value:t}),e},[]);return n?s.map((e,t)=>r.createElement(r.Fragment,{key:e.value},n(e,t))):s.map(e=>d(e)).join(", ")},p=e=>r.Children.toArray(e),f=e=>r.Children.toArray(e).reduce((e,{props:t})=>("value"in t&&e.push(t),e),[]),v=e=>p(e).reduce((e,{props:t})=>{if("label"in t){let n=t.options||f(t.children);e.push({options:n,label:t.label})}return"value"in t&&e.push(Object.assign({},t)),e},[]),m=(e,t)=>{let n=1===e.length,r=e===i.V.BACKSPACE,s="";return r&&t.length?s=t.slice(0,t.length-1):n&&(s=(t+e).trim()),s},b=e=>RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),g=(e,t)=>t?t.findIndex(t=>{if(l(t)||t.disabled)return!1;let n=d(t);return b(e).test(n)}):-1,y=e=>{var t;return(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.getItems())||[]},E=e=>{var t;let n=y(e),r=null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.getActiveItem();return"number"==typeof r?n[r]:void 0},w=e=>{var t;let n=y(e);null===(t=null==e?void 0:e.current)||void 0===t||t.activateItem(s.a.findNextIndex(n,0,1),!1)},C=(e,t)=>{let n=d(e).toLocaleLowerCase(),r=t.toLocaleLowerCase();return -1!==n.indexOf(r)},T=e=>{let{options:t,filter:n,filterOption:r}=e,i=t.filter(e=>!!l(e)||(r?r(e,n):C(e,n)));return i.reduce((e,t,n)=>{let r=l(t),s=l(e[e.length-1]),o=n===i.length-1;return r&&s&&e.pop(),r&&(!r||o)||e.push(t),e},[])}},93298:function(e,t,n){"use strict";n.d(t,{y:function(){return v}});var r=n(67294),i=n(42361),s=n(87174),o=n(97582),l=n(81387),a=n(25957);let u=(0,n(32782).Ge)("sheet");class c{constructor(e,t){this.x=e,this.y=t,this.timeStamp=Date.now()}}class d{constructor(e=5){this.points=[],this.pointsLen=e,this.clear()}clear(){this.points=Array(this.pointsLen)}addMovement({x:e,y:t}){this.points.pop(),this.points.unshift(new c(e,t))}getYAcceleration(e=1){let t=this.points[0],n=this.points[e];return t&&n?(t.y-n.y)/Math.pow(t.timeStamp-n.timeStamp,2):0}}n(51031);let h=[];class p extends r.Component{constructor(){super(...arguments),this.veilRef=r.createRef(),this.sheetRef=r.createRef(),this.sheetTopRef=r.createRef(),this.sheetContentRef=r.createRef(),this.sheetInnerContentRef=r.createRef(),this.sheetTitleRef=r.createRef(),this.velocityTracker=new d,this.observer=null,this.resizeWindowTimer=null,this.state={startScrollTop:0,startY:0,deltaY:0,prevSheetHeight:0,swipeAreaTouched:!1,contentTouched:!1,veilTouched:!1,isAnimating:!1,inWindowResizeScope:!1},this.setStyles=({status:e,deltaHeight:t=0})=>{if(!this.sheetRef.current||!this.veilRef.current)return;let n=this.sheetHeight-t,r="showing"===e?`translate3d(0, -${n}px, 0)`:"translate3d(0, 0, 0)",i=0;"showing"===e&&(i=0===t?1:n/this.sheetHeight),this.veilRef.current.style.opacity=String(i),this.sheetRef.current.style.transform=r},this.getAvailableContentHeight=e=>{let t=.9*window.innerHeight-this.sheetTopHeight;return e>=t?t:e},this.show=()=>{this.setState({isAnimating:!0},()=>{this.setStyles({status:"showing"}),this.setHash()})},this.hide=()=>{this.setState({isAnimating:!0},()=>{this.setStyles({status:"hiding"}),this.removeHash()})},this.onSwipeAreaTouchStart=e=>{this.velocityTracker.clear(),this.setState({startY:e.nativeEvent.touches[0].clientY,swipeAreaTouched:!0})},this.onContentTouchStart=e=>{this.props.allowHideOnContentScroll&&!this.state.swipeAreaTouched&&(this.velocityTracker.clear(),this.setState({startY:e.nativeEvent.touches[0].clientY,startScrollTop:this.sheetScrollTop,contentTouched:!0}))},this.onSwipeAriaTouchMove=e=>{let t=e.nativeEvent.touches[0].clientY-this.state.startY;this.velocityTracker.addMovement({x:e.nativeEvent.touches[0].clientX,y:e.nativeEvent.touches[0].clientY}),this.setState({deltaY:t}),t<=0||this.setStyles({status:"showing",deltaHeight:t})},this.onContentTouchMove=e=>{if(!this.props.allowHideOnContentScroll)return;if(!this.state.startY){this.onContentTouchStart(e);return}let{startScrollTop:t,swipeAreaTouched:n}=this.state;if(n||this.sheetScrollTop>0||t>0&&t!==this.sheetScrollTop)return;let r=e.nativeEvent.touches[0].clientY-this.state.startY;this.velocityTracker.addMovement({x:e.nativeEvent.touches[0].clientX,y:e.nativeEvent.touches[0].clientY}),this.setState({deltaY:r}),r<=0||this.setStyles({status:"showing",deltaHeight:r})},this.onTouchEndAction=e=>{let t=this.velocityTracker.getYAcceleration();this.sheetHeight<=e?this.props.hideSheet():e>50&&t<=.08&&t>=-.02||t>.08?this.hide():0!==e&&this.show()},this.onSwipeAriaTouchEnd=()=>{let{deltaY:e}=this.state;this.onTouchEndAction(e),this.setState({startY:0,deltaY:0,swipeAreaTouched:!1})},this.onContentTouchEnd=()=>{let{deltaY:e,swipeAreaTouched:t}=this.state;this.props.allowHideOnContentScroll&&!t&&(this.onTouchEndAction(e),this.setState({startY:0,deltaY:0,contentTouched:!1}))},this.onVeilClick=()=>{this.setState({veilTouched:!0}),this.hide()},this.onVeilTransitionEnd=()=>{this.setState({isAnimating:!1}),"0"===this.veilOpacity&&this.props.hideSheet()},this.onContentTransitionEnd=e=>{"height"===e.propertyName&&this.sheetContentRef.current&&(this.sheetContentRef.current.style.transition="none")},this.onResizeWindow=()=>{this.setState({inWindowResizeScope:!0}),this.resizeWindowTimer&&window.clearTimeout(this.resizeWindowTimer),this.resizeWindowTimer=window.setTimeout(()=>{this.onResize()},25)},this.onResize=()=>{if(!this.sheetRef.current||!this.sheetContentRef.current)return;let e=this.sheetContentHeight;if(e===this.state.prevSheetHeight&&!this.state.inWindowResizeScope)return;let t=this.getAvailableContentHeight(e);this.sheetContentRef.current.style.transition=this.state.prevSheetHeight>e?"height 0s ease 0.3s":"none",this.sheetContentRef.current.style.height=`${t}px`,this.sheetRef.current.style.transform=`translate3d(0, -${t+this.sheetTopHeight}px, 0)`,this.setState({prevSheetHeight:e,inWindowResizeScope:!1})}}componentDidMount(){this.addListeners(),this.show();let e=this.getAvailableContentHeight(this.sheetContentHeight);this.setInitialStyles(e),this.setState({prevSheetHeight:e})}componentDidUpdate(e){let{visible:t,location:n}=this.props;!e.visible&&t&&this.show(),(e.visible&&!t||this.shouldClose(e))&&this.hide(),e.location.pathname!==n.pathname&&(h=[])}componentWillUnmount(){this.removeListeners()}render(){let{content:e,contentClassName:t,swipeAreaClassName:n,hideTopBar:i,title:s}=this.props,{deltaY:o,swipeAreaTouched:l,contentTouched:a,veilTouched:c,isAnimating:d,inWindowResizeScope:h}=this.state,p={"with-transition":!o||c},f={"with-transition":!h&&p["with-transition"]};return r.createElement(r.Fragment,null,r.createElement("div",{ref:this.veilRef,className:u("veil",p),onClick:d?void 0:this.onVeilClick,onTransitionEnd:this.onVeilTransitionEnd,role:"presentation"}),r.createElement("div",{ref:this.sheetRef,className:u("sheet",f),role:"dialog","aria-modal":"true","aria-label":s},!i&&r.createElement("div",{ref:this.sheetTopRef,className:u("sheet-top")},r.createElement("div",{className:u("sheet-top-resizer")})),r.createElement("div",{className:u("sheet-swipe-area",n),onTouchStart:this.onSwipeAreaTouchStart,onTouchMove:this.onSwipeAriaTouchMove,onTouchEnd:this.onSwipeAriaTouchEnd}),r.createElement("div",{ref:this.sheetContentRef,className:u("sheet-content",{"without-scroll":o>0&&a||l},t),onTouchStart:this.onContentTouchStart,onTouchMove:this.onContentTouchMove,onTouchEnd:this.onContentTouchEnd,onTransitionEnd:this.onContentTransitionEnd},s&&r.createElement("div",{ref:this.sheetTitleRef,className:u("sheet-content-title")},s),r.createElement("div",{ref:this.sheetInnerContentRef},e))))}get veilOpacity(){var e;return(null===(e=this.veilRef.current)||void 0===e?void 0:e.style.opacity)||0}get sheetTopHeight(){var e;return(null===(e=this.sheetTopRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get sheetHeight(){var e;return(null===(e=this.sheetRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get innerContentHeight(){var e;return(null===(e=this.sheetInnerContentRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get sheetTitleHeight(){var e;return(null===(e=this.sheetTitleRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get sheetScrollTop(){var e;return(null===(e=this.sheetContentRef.current)||void 0===e?void 0:e.scrollTop)||0}get sheetContentHeight(){return this.sheetTitleHeight+this.innerContentHeight}setInitialStyles(e){this.sheetContentRef.current&&this.sheetInnerContentRef.current&&(this.sheetContentRef.current.style.height=`${e}px`)}addListeners(){window.addEventListener("resize",this.onResizeWindow),this.sheetInnerContentRef.current&&(this.observer=new ResizeObserver(()=>{this.state.inWindowResizeScope||this.onResize()}),this.observer.observe(this.sheetInnerContentRef.current))}removeListeners(){window.removeEventListener("resize",this.onResizeWindow),this.observer&&this.observer.disconnect()}setHash(){let{id:e,platform:t,location:n,history:r}=this.props;if(t===l.t.BROWSER)return;let i=Object.assign(Object.assign({},n),{hash:e});switch(t){case l.t.IOS:n.hash&&h.push(n.hash),r.replace(i);break;case l.t.ANDROID:r.push(i)}}removeHash(){var e;let{id:t,platform:n,location:r,history:i}=this.props;if(n!==l.t.BROWSER&&r.hash===`#${t}`)switch(n){case l.t.IOS:i.replace(Object.assign(Object.assign({},r),{hash:null!==(e=h.pop())&&void 0!==e?e:""}));break;case l.t.ANDROID:i.goBack()}}shouldClose(e){let{id:t,platform:n,location:r,history:i}=this.props;return n!==l.t.BROWSER&&"POP"===i.action&&e.location.hash!==r.hash&&r.hash!==`#${t}`}}p.defaultProps={id:"sheet",allowHideOnContentScroll:!0};let f=(0,a.z)(function(e){let t=t=>{let{useHistory:n,useLocation:i}=t,s=(0,o._T)(t,["useHistory","useLocation"]);return r.createElement(e,Object.assign({},s,{history:n(),location:i()}))},n=e.displayName||e.name||"Component";return t.displayName=`withRouterWrapper(${n})`,t}(p)),v=({children:e,onClose:t,visible:n,id:o,title:l,className:a,contentClassName:c,swipeAreaClassName:d,allowHideOnContentScroll:h,hideTopBar:p,qa:v})=>{let[m,b]=r.useState(n),[g,y]=r.useState(n);return((0,i.y)({enabled:m}),!g&&n&&b(!0),n!==g&&y(n),m)?r.createElement(s.h,null,r.createElement("div",{"data-qa":v,className:u(null,a)},r.createElement(f,{id:o,content:e,contentClassName:c,swipeAreaClassName:d,title:l,visible:n,allowHideOnContentScroll:h,hideTopBar:p,hideSheet:()=>{t&&t(),b(!1)}}))):null}},48323:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(97582),i=n(67294),s=n(35930),o=n(74200);let l=i.forwardRef(function(e,t){var{as:n,children:l,variant:a,className:u,ellipsis:c,color:d,whiteSpace:h,wordBreak:p,ellipsisLines:f,style:v,qa:m}=e,b=(0,r._T)(e,["as","children","variant","className","ellipsis","color","whiteSpace","wordBreak","ellipsisLines","style","qa"]);let g=Object.assign({},v);return"number"==typeof f&&(g.WebkitLineClamp=f),i.createElement(n||"span",Object.assign({ref:t,className:(0,o.f)({variant:a,ellipsis:c,whiteSpace:h,wordBreak:p,ellipsisLines:"number"==typeof f},d?(0,s.V)({color:d},u):u),style:g,"data-qa":m},b),l)});l.displayName="Text"},35930:function(e,t,n){"use strict";n.d(t,{V:function(){return o},b:function(){return s}});var r=n(32782);n(30178);let i=(0,r.Ge)("color-text"),s=["primary","complementary","secondary","hint","info","info-heavy","positive","positive-heavy","warning","warning-heavy","danger","danger-heavy","utility","utility-heavy","misc","misc-heavy","brand","link","link-hover","link-visited","link-visited-hover","dark-primary","dark-complementary","dark-secondary","light-primary","light-complementary","light-secondary","light-hint","inverted-primary","inverted-complementary","inverted-secondary","inverted-hint"],o=({color:e},t)=>i({color:e},t)},74200:function(e,t,n){"use strict";n.d(t,{S:function(){return s},f:function(){return o}});var r=n(32782);n(99125);let i=(0,r.Ge)("text"),s=["display-4","display-3","display-2","display-1","header-2","header-1","subheader-3","subheader-2","subheader-1","body-3","body-2","body-1","body-short","caption-2","caption-1","code-3","code-inline-3","code-2","code-inline-2","code-1","code-inline-1"],o=({variant:e="body-1",ellipsis:t,ellipsisLines:n,whiteSpace:r,wordBreak:s},o)=>i({variant:e,ellipsis:t,ws:r,wb:s,"ellipsis-lines":n},o)},53006:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(67294),i=n(42646);function s(){return r.useContext(i.z).mobile}},25957:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r=n(67294),i=n(73809),s=n(42646);function o(e){var t;let n=(0,i.i)(e);return(t=class extends r.Component{render(){return r.createElement(e,Object.assign({},this.props,{mobile:this.context.mobile,platform:this.context.platform,useHistory:this.context.useHistory,useLocation:this.context.useLocation}))}}).displayName=`withMobile(${n})`,t.contextType=s.z,t}},73809:function(e,t,n){"use strict";function r(e){return e.displayName||e.name||"Component"}n.d(t,{i:function(){return r}})},42361:function(e,t,n){"use strict";let r;n.d(t,{y:function(){return o}});var i=n(67294);let s=0;function o({enabled:e}){i.useLayoutEffect(()=>{if(e)return 1==++s&&function(){let e=window.innerWidth-document.documentElement.clientWidth,t=window.innerHeight-document.documentElement.clientHeight,n=function(){let e=window.getComputedStyle(document.body);return{top:Number.parseFloat(e.paddingTop),right:Number.parseFloat(e.paddingRight),bottom:Number.parseFloat(e.paddingBottom),left:Number.parseFloat(e.paddingLeft)}}();r=document.body.style.cssText,document.body.style.overflow="hidden",e&&(document.body.style.paddingRight=`${n.right+e}px`),t&&(document.body.style.paddingBottom=`${n.bottom+t}px`)}(),()=>{0==--s&&(r?document.body.style.cssText=r:document.body.removeAttribute("style"))}},[e])}},59003:function(e,t,n){"use strict";n.d(t,{L:function(){return s}});var r=n(67294);class i{constructor(e,t,n={}){var r,i;this.nativeEvent=t,this.target=null!==(r=n.target)&&void 0!==r?r:t.target,this.currentTarget=null!==(i=n.currentTarget)&&void 0!==i?i:t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}}function s(e){let{onFocusWithin:t,onBlurWithin:n,onFocusWithinChange:s,isDisabled:o}=e,l=r.useRef(!1),{onBlur:a,onFocus:u}=function({onFocus:e,onBlur:t,isDisabled:n}){let s=r.useRef(!1),o=r.useRef(null);r.useEffect(()=>{if(n)return;let e=function(){s.current=!1},r=function(e){!s.current&&o.current&&(t(new i("blur",new FocusEvent("blur",Object.assign(Object.assign({},e),{relatedTarget:e.target,bubbles:!1,cancelable:!1})),{target:o.current,currentTarget:o.current})),o.current=null)};return window.addEventListener("focus",e,{capture:!0}),window.addEventListener("focusin",r),()=>{window.removeEventListener("focus",e,{capture:!0}),window.removeEventListener("focusin",r)}},[n,t]);let l=r.useCallback(e=>{(null===e.relatedTarget||e.relatedTarget===document.body||e.relatedTarget===document)&&(t(e),o.current=null)},[t]),a=function(e){let t=r.useRef({isFocused:!1,observer:null});return r.useEffect(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]),r.useCallback(n=>{let r=n.target;if(r instanceof HTMLButtonElement||r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement){t.current.isFocused=!0,r.addEventListener("focusout",n=>{t.current.isFocused=!1,r.disabled&&(null==e||e(new i("blur",n))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0});let n=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){n.disconnect(),t.current.observer=null;let e=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:e})),r.dispatchEvent(new FocusEvent("focusout",{relatedTarget:e,bubbles:!0}))}});n.observe(r,{attributes:!0,attributeFilter:["disabled"]}),t.current.observer=n}},[e])}(t);return{onBlur:l,onFocus:r.useCallback(t=>{s.current=!0,o.current=t.target,a(t),e(t)},[a,e])}}({onFocus:r.useCallback(e=>{!l.current&&document.activeElement===e.target&&(l.current=!0,t&&t(e),s&&s(!0))},[t,s]),onBlur:r.useCallback(e=>{l.current&&(l.current=!1,n&&n(e),s&&s(!1))},[n,s]),isDisabled:o});return o?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:u,onBlur:a}}}},59491:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),i=n(59505);let s=e=>{var t;let{onOpenChange:n,onClose:s}=e,o=r.useCallback(e=>{null==n||n(e),!1===e&&s&&s()},[n,s]),[l,a]=(0,i.z)(e.open,null!==(t=e.defaultOpen)&&void 0!==t&&t,o),u=r.useCallback(e=>{a("boolean"==typeof e?e:!l)},[l,a]);return{open:l,toggleOpen:u}}},68263:function(e,t,n){"use strict";n.d(t,{L:function(){return l}});var r=n(97582),i=n(67294),s=n(59505),o=n(59491);let l=({defaultOpen:e,onClose:t,onOpenChange:n,open:l,value:a,defaultValue:u=[],multiple:c,onUpdate:d})=>{let[h,p]=(0,s.z)(a,u,d),[f,v]=i.useState(),m=(0,o.Z)({defaultOpen:e,onClose:t,onOpenChange:n,open:l}),{toggleOpen:b}=m,g=(0,r._T)(m,["toggleOpen"]),y=i.useCallback(e=>{h.includes(e.value)||p([e.value]),b(!1)},[h,p,b]),E=i.useCallback(e=>{p(h.includes(e.value)?h.filter(t=>t!==e.value):[...h,e.value])},[h,p]),w=i.useCallback(e=>{c?E(e):y(e)},[c,y,E]),C=i.useCallback(()=>{p([])},[p]);return Object.assign({value:h,activeIndex:f,setValue:p,handleSelection:w,handleClearValue:C,toggleOpen:b,setActiveIndex:v},g)}},41609:function(e,t,n){var r=n(280),i=n(64160),s=n(35694),o=n(1469),l=n(98612),a=n(44144),u=n(25726),c=n(36719),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(l(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||a(e)||c(e)||s(e)))return!e.length;var t=i(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(u(e))return!r(e).length;for(var n in e)if(d.call(e,n))return!1;return!0}},32450:function(){},95543:function(){},4350:function(){},8712:function(){},3056:function(){},364:function(){},62359:function(){},77141:function(){},51031:function(){},30178:function(){},99125:function(){}}]);