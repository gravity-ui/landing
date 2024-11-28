(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6167],{43671:function(e,t,n){"use strict";n.d(t,{J:function(){return l}});var r=n(67294),i=n(32782);let s={"aria-hidden":!0};function u(e){return"object"==typeof e}function o(e){return"string"==typeof e}n(71434);let c=(0,i.Ge)("icon"),l=r.forwardRef(({data:e,width:t,height:n,size:i,className:a,fill:d="currentColor",stroke:f="none",qa:m},h)=>{let p,v,x;if(i&&(p=i,v=i),t&&(p=t),n&&(v=n),u(e))({viewBox:x}=e);else if(o(e))x=function(e){let t=e.match(/viewBox=(["']?)([\d\s,-]+)\1/);return t?t[2]:void 0}(e);else if(("object"==typeof e||"function"==typeof e)&&"defaultProps"in e)({viewBox:x}=e.defaultProps);else if("function"==typeof e&&(!e.prototype||!e.prototype.render)){let t=e({});t&&({viewBox:x}=t.props)}if(x&&(!p||!v)){let e=x.split(/\s+|\s*,\s*/);p||(p=e[2]),v||(v=e[3])}let w=Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:p,height:v,className:c(null,a),fill:d,stroke:f,"data-qa":m},s);if(o(e)){let t=e.replace(/<svg[^>]*>/,e=>e.replace(/(width|height)=(["']?)\d+\2/g,"").replace(/(\s){2,}\b/g,"$1").replace(/(\s)+>/g,">"));return r.createElement("svg",Object.assign({},w,{ref:h,dangerouslySetInnerHTML:{__html:t}}))}if(u(e)){let t=l.prefix+(e.url||`#${e.id}`);return r.createElement("svg",Object.assign({},w,{viewBox:x,ref:h}),r.createElement("use",{href:t,xlinkHref:t}))}return e.defaultProps&&(e.defaultProps.width=e.defaultProps.height=void 0),r.createElement("svg",Object.assign({},w,{ref:h}),r.createElement(e,{width:void 0,height:void 0}))});l.displayName="Icon",l.prefix=""},87174:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var r=n(67294),i=n(73935),s=n(30860),u=n(68208),o=n(73233),c=n(32782);n(2894);let l=(0,c.Ge)("portal");function a({container:e,children:t,disablePortal:n}){let c=(0,s.X)(),{scoped:a}=(0,o.T)(),d=null!=e?e:c;return n?r.createElement(r.Fragment,null,t):d?i.createPortal(a?r.createElement(u.f,{rootClassName:l("theme-wrapper"),scoped:!0},t):t,d):null}},34243:function(e,t,n){"use strict";n.d(t,{a:function(){return m},n:function(){return f}});var r=n(67294),i=n(47989);let s={media:"",matches:!1,onchange:()=>{},addListener:()=>{},removeListener:()=>{},addEventListener:()=>{},removeEventListener:()=>{},dispatchEvent:e=>!0},u=e=>({s:`(max-width: ${e.m-1}px)`,m:`(min-width: ${e.m}px) and (max-width: ${e.l-1}px)`,l:`(min-width: ${e.l}px) and (max-width: ${e.xl-1}px)`,xl:`(min-width: ${e.xl}px) and (max-width: ${e.xxl-1}px)`,xxl:`(min-width: ${e.xxl}px) and (max-width: ${e.xxxl-1}px)`,xxxl:`(min-width: ${e.xxxl}px)`}),o=e=>"undefined"==typeof window||"function"!=typeof window.matchMedia?s:window.matchMedia(e);class c{constructor(e){this.queryListsDecl=[];let t=u(e);this.queryListsDecl=[["s",o(t.s)],["m",o(t.m)],["l",o(t.l)],["xl",o(t.xl)],["xxl",o(t.xxl)],["xxxl",o(t.xxxl)]]}getCurrentActiveMedia(){let e=this.queryListsDecl.find(([e,t])=>t.matches);return e?e[0]:"s"}addListeners(e){this.queryListsDecl.forEach(([t,n])=>n.addEventListener("change",e))}removeListeners(e){this.queryListsDecl.forEach(([t,n])=>n.removeEventListener("change",e))}}let l=(e,t="s")=>{let[n,i]=r.useState(t);return r.useLayoutEffect(()=>{let t=new c(e),n=()=>{i(t.getCurrentActiveMedia())};return t.addListeners(n),n(),()=>{t.removeListeners(n)}},[e]),n};var a=n(82492),d=n.n(a);function f({children:e,config:t,initialMediaQuery:n}){let s=r.useContext(i.V),u=r.useMemo(()=>(function({theme:e,override:t}){return d()(e,t)})({theme:s.theme,override:t}),[t,s.theme]),o=l(u.breakpoints,n),c=r.useMemo(()=>({activeMediaQuery:o,theme:u}),[o,u]);return r.createElement(i.V.Provider,{value:c},e)}function m({children:e}){return e}},76820:function(e,t,n){"use strict";n.d(t,{A:function(){return i},Q:function(){return r}});let r={"0.5":"half"},i={breakpoints:{s:576,m:768,l:1080,xl:1200,xxl:1400,xxxl:1920},spaceBaseSize:4,components:{container:{gutters:"3",media:{l:{gutters:"5"}}}}}},47989:function(e,t,n){"use strict";n.d(t,{V:function(){return s}});var r=n(67294),i=n(76820);let s=r.createContext({theme:i.A,activeMediaQuery:"s"})},67913:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});let r=n(67294).createContext(void 0);r.displayName="ThemeContext"},68208:function(e,t,n){"use strict";n.d(t,{f:function(){return h}});var r=n(67294),i=n(34243),s=n(32782),u=n(67913),o=n(88300),c=n(7872);let l=(0,s.Ge)(c.wg),a=l(),d="undefined"!=typeof window&&"function"==typeof window.matchMedia,f=()=>window.matchMedia("(prefers-color-scheme: dark)"),m=(0,s.Ge)(c.wg);function h({theme:e,systemLightTheme:t,systemDarkTheme:n,direction:h,nativeScrollbar:p,scoped:v=!1,rootClassName:x="",children:w,layout:g}){var y,b,E,L;let C=r.useContext(u.N),N=r.useContext(o.e),k=void 0!==C||v,P=null!==(y=null==C?void 0:C.theme)&&void 0!==y?y:c.t0,$=null!=e?e:P,j=null!==(b=null!=t?t:null==N?void 0:N.systemLightTheme)&&void 0!==b?b:c.CR,T=null!==(E=null!=n?n:null==N?void 0:N.systemDarkTheme)&&void 0!==E?E:c.y1,_=null!==(L=null==C?void 0:C.direction)&&void 0!==L?L:c.wp,M=null!=h?h:_,O="light"===function(){let[e,t]=r.useState(d&&f().matches?"dark":"light");return r.useEffect(()=>{if(!d)return;let e=function(e,t){let n="function"!=typeof e.addEventListener;return n?e.addListener(t):e.addEventListener("change",t),()=>{n?e.removeListener(t):e.removeEventListener("change",t)}}(f(),function(e){t(e.matches?"dark":"light")});return()=>e()},[]),e}()?j:T,A="system"===$?O:$,D=r.useRef("");r.useLayoutEffect(()=>{k||(!function({theme:e,nativeScrollbar:t=!1,className:n,prevClassName:r}){let i=document.body;for(let[u,o]of(i.classList.contains(a)||i.classList.add(a),r&&r.split(" ").forEach(e=>{e&&i.classList.remove(e)}),n&&n.split(" ").forEach(e=>{e&&!i.classList.contains(e)&&i.classList.add(e)}),[...i.classList].forEach(e=>{e.startsWith((0,s.Ui)(l({theme:!0})))&&i.classList.remove(e)}),i.classList.add((0,s.Ui)(l({theme:e}))),Object.entries({"native-scrollbar":t})))i.classList.toggle((0,s.Ui)(l({[u]:!0})),o)}({theme:A,nativeScrollbar:p,className:x,prevClassName:D.current}),function(e){let t=document.body;e===c.wp?t.removeAttribute("dir"):t.setAttribute("dir",e)}(M),D.current=x)},[k,A,M,p,x]);let q=r.useMemo(()=>({theme:$,themeValue:A,direction:M,scoped:k}),[$,A,M,k]),G=r.useMemo(()=>({systemLightTheme:j,systemDarkTheme:T}),[j,T]);return r.createElement(i.n,Object.assign({},g),r.createElement(u.N.Provider,{value:q},r.createElement(o.e.Provider,{value:G},k?r.createElement("div",{className:m({theme:A,"native-scrollbar":!1!==p},x),dir:M},w):w)))}h.displayName="ThemeProvider"},88300:function(e,t,n){"use strict";n.d(t,{e:function(){return r}});let r=n(67294).createContext(void 0);r.displayName="ThemeSettingsContext"},7872:function(e,t,n){"use strict";n.d(t,{CK:function(){return u},CR:function(){return i},t0:function(){return r},wg:function(){return o},wp:function(){return c},y1:function(){return s}});let r="system",i="light",s="dark",u=["dark","dark-hc"];[...u];let o="root",c="ltr"},73233:function(e,t,n){"use strict";n.d(t,{T:function(){return s}});var r=n(67294),i=n(67913);function s(){let e=r.useContext(i.N);if(void 0===e)throw Error("useTheme* hooks must be used within ThemeProvider");return e}},32782:function(e,t,n){"use strict";n.d(t,{A7:function(){return i},Ge:function(){return s},Ui:function(){return u}});var r=n(81504);let i="g-";(0,r.withNaming)({e:"__",m:"_"});let s=(0,r.withNaming)({n:i,e:"__",m:"_"});function u(e){return e.split(/\s(.*)/)[1]}},69110:function(e,t,n){"use strict";n.d(t,{Dc:function(){return c},xA:function(){return o},yb:function(){return l}});var r=n(43671),i=n(32782),s=n(96639);let u=1;function o(){return`${i.A7}uniq-${u++}`}let c=(0,s.s)("svg"),l=(0,s.s)(r.J)},42087:function(e,t,n){"use strict";n.d(t,{P:function(){return u},g:function(){return s}});var r=n(97582),i=n(32782);class s{constructor(e){this.subscriptions=[],this.componentPrefix=e}subscribe(e){this.subscriptions.push(e)}unsubscribe(e){let t=this.subscriptions.indexOf(e);t>-1&&this.subscriptions.splice(t,1)}publish(e){var{componentId:t}=e,n=(0,r._T)(e,["componentId"]);this.subscriptions.forEach(e=>e(Object.assign(Object.assign({},n),{componentId:this.componentPrefix?`${this.componentPrefix}${t}`:t})))}withEventPublisher(e,t){return n=>{this.publish(Object.assign(Object.assign({},n),{componentId:e,qa:t}))}}}let u=new s(i.A7)},96639:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var r=n(67294);function i(e){return function(t){if(!r.isValidElement(t))return!1;let{type:n}=t;if(n===e)return!0;if("string"==typeof e||"string"==typeof n)return!1;let i=n.displayName;return!!(i&&i===e.displayName)}}},19442:function(e,t,n){"use strict";n.d(t,{X:function(){return s},w:function(){return i}});var r=n(67294);let i=r.createContext({current:null});function s({container:e,children:t}){return r.createElement(i.Provider,{value:e},t)}i.displayName="PortalContext"},30860:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(67294),i=n(19442);function s(){var e;let t=r.useContext(i.w),n=null;return"object"==typeof window&&(n=window.document.body),null!==(e=t.current)&&void 0!==e?e:n}},71434:function(){},2894:function(){}}]);