(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1912],{43231:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/icons",function(){return t(32523)}])},75971:function(e,s,t){"use strict";t.d(s,{y:function(){return d}});var n=t(85893),a=t(94294),i=t(20487),c=t(5233);t(67294);var o=t(8206),l=t(46369);t(52556);let r=(0,l.Ge)("clipboard-area"),d=e=>{let{textToCopy:s,tooltipContent:t,children:l,isNeedPopup:d=!0}=e,{t:u}=(0,c.$G)(),m=(0,o.d)();return d?(0,n.jsx)(a.J,{className:r("popover"),disabled:m,tooltipClassName:r("popup"),content:t??u("actions_copyToClipboard"),placement:"top",hasArrow:!0,children:(0,n.jsx)(i.h,{text:s,timeout:1e3,children:e=>l(e)})}):(0,n.jsx)(i.h,{text:s,timeout:1e3,children:e=>l(e)})}},47529:function(e,s,t){"use strict";t.d(s,{K:function(){return r}});var n=t(85893),a=t(44697),i=t(75014),c=t(1960);t(67294);var o=t(46369);t(95387);let l=(0,o.Ge)("clipboard-icon"),r=e=>{let{status:s,className:t}=e,o="success"===s;return(0,n.jsx)("div",{className:l({copied:o},t),children:(0,n.jsx)(c.J,{data:o?a.Z:i.Z,size:16})})}},49531:function(e,s,t){"use strict";t.d(s,{A:function(){return l}});var n=t(85893);t(67294);var a=t(46369),i=t(75971),c=t(47529);t(71509);let o=(0,a.Ge)("code-example"),l=e=>{let{code:s,tooltipContent:t,className:a}=e;return(0,n.jsx)(i.y,{textToCopy:s,tooltipContent:t,children:e=>(0,n.jsx)("div",{className:o(null,a),children:(0,n.jsxs)("div",{className:o("inner"),children:[(0,n.jsx)("div",{className:o("code",{copied:"success"===e}),children:s}),(0,n.jsx)("div",{className:o("copy-button"),children:(0,n.jsx)(c.K,{status:e,className:o("copy-icon")})})]})})})}},8206:function(e,s,t){"use strict";t.d(s,{d:function(){return i}});var n=t(16541),a=t(69890);let i=()=>(0,n.Z)()<=a.j.sm},42549:function(e,s,t){"use strict";t.d(s,{A:function(){return r}});var n=t(5233),a=t(11163),i=t(67294),c=t(34421),o=t.n(c),l=t(91647);let r=()=>{let{i18n:e}=(0,n.$G)(),s=(0,a.useRouter)();i.useEffect(()=>{if("/404"===s.route)return;let t=e.language,n=localStorage.getItem(l.mZ),a=n&&o().i18n.locales.includes(n)?n:o().i18n.defaultLocale;if(t!==a){let e=s.asPath;if(a===o().i18n.defaultLocale){let n=e.replace(`/${t}`,"");""===n?s.replace("/"):s.replace(n)}else t===o().i18n.defaultLocale?s.replace(`/${a}${"/"===e?"":e}`):s.replace(e.replace(`/${t}`,`/${a}`));localStorage.setItem(l.mZ,a)}},[s.route,e.language,s.asPath])}},32523:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return en},default:function(){return et}});var n=t(85893),a=t(11163),i=t(67294),c=t(34761),o=t(96756),l=t(70746),r=t(4180),d=t(39343),u=t(51525),m=t(1960),h=t(11197),x=t(5233),p=t(8206),j=t(46369);t(94815);let f=(0,j.Ge)("icon-button"),v=e=>{let{icon:s,onClick:t}=e,a=i.useCallback(()=>{t?.(s)},[s,t]);return(0,n.jsx)(u.z,{view:"flat",size:"xl",pin:"round-round",className:f(),onClick:a,children:(0,n.jsx)(m.J,{data:s.data,size:20})})};t(65916);let N=(0,j.Ge)("icon-collection"),y=e=>{let{icons:s,onSelectIcon:t}=e,a=i.useCallback(e=>t?.(e),[t]);return(0,n.jsx)("div",{className:N(),children:s.map(e=>(0,n.jsx)(v,{icon:e,onClick:a},e.name))})};var w=t(93580),g=t(35060),C=t(75971),b=t(47529);t(404);let k=(0,j.Ge)("icon-content"),_=e=>{let{icon:s,onClickToKeyword:t}=e,{t:a}=(0,x.$G)(),c=i.useCallback(e=>()=>{t?.(e)},[t]);return(0,n.jsxs)("div",{className:k(),children:[(0,n.jsx)("div",{className:k("preview"),children:(0,n.jsx)(m.J,{data:s.data,size:40})}),(0,n.jsxs)("div",{className:k("info"),children:[(0,n.jsx)(C.y,{textToCopy:s.name,tooltipContent:a("icons:actions_copyIconName"),children:e=>(0,n.jsxs)("div",{className:k("title",{copied:"success"===e}),children:[(0,n.jsx)("span",{className:k("name"),children:s.name}),(0,n.jsx)(b.K,{status:e,className:k("copy-icon")})]})}),s.meta.keywords.length?(0,n.jsxs)("div",{className:k("keywords"),children:[(0,n.jsx)("div",{className:k("keywords-title"),children:a("icons:keywords")}),(0,n.jsx)("div",{className:k("keywords-items"),children:s.meta.keywords.map(e=>(0,n.jsx)("div",{className:k("keywords-item"),onClick:c(e),children:e},e))})]}):null]})]})};var z=t(49531);t(56246);let G=(e,s)=>`import ${s}Icon from '@gravity-ui/icons/svgs/${e}.svg';`,$=e=>`import {${e}} from '@gravity-ui/icons';`,S=(0,j.Ge)("icon-usage-example"),T=e=>{let{icon:s,variant:t}=e,{t:a}=(0,x.$G)(),i="react"===t?$(s.meta.componentName):G(s.meta.svgName,s.meta.componentName);return(0,n.jsxs)("div",{className:S(),children:[(0,n.jsx)("div",{className:S("title"),children:a("react"===t?"icons:usage_reactComponent":"icons:usage_svg")}),(0,n.jsx)(z.A,{code:i,tooltipContent:a("react"===t?"icons:actions_copyReactComponent":"icons:actions_copySvgImport")})]})};t(98551);let J=(0,j.Ge)("icon-body"),L=e=>{let{icon:s,onClickToKeyword:t}=e;return(0,n.jsxs)("div",{className:J(),children:[(0,n.jsx)(_,{icon:s,onClickToKeyword:t}),(0,n.jsx)(T,{variant:"react",icon:s}),(0,n.jsx)(T,{variant:"svg",icon:s})]})};t(48965);var I=t(43714),Z=t(49181),R=t(38762),E=t(99981),K=t(20487);async function P(e,s){let t=await fetch(e),n=await t.blob(),a=e.split("/").pop()||"downloaded-file",i=s||document.body,c=document.createElement("a");c.style.opacity="0",c.style.width="0px",c.style.height="0px",c.href=window.URL.createObjectURL(n),c.download=a,i.appendChild(c),c.click(),c.remove()}t(4918);let A=(0,j.Ge)("icon-dialog-actions"),M=e=>`https://raw.githubusercontent.com/gravity-ui/icons/main/svgs/${e}.svg`,O=e=>`${window.location.origin}/icons?icon=${e}`,U=e=>{let{icon:s,mobile:t}=e,{t:a,i18n:c}=(0,x.$G)(),o=i.useRef(null),[l,r]=i.useState(!1),d=i.useMemo(()=>O(s.name),[s]),h=i.useMemo(()=>({url:d,title:"Gravity UI"}),[d]),p=i.useMemo(()=>navigator.canShare?.(h),[h]),j=i.useCallback(async()=>{r(!0);try{await P(M(s.meta.svgName),o.current)}finally{r(!1)}},[s]),f=i.useCallback(async()=>{if(p)try{await navigator.share(h)}catch(e){}else await navigator.clipboard.writeText(d)},[p,h,d]),v=i.useMemo(()=>(0,n.jsx)(K.h,{text:d,timeout:1e3,children:e=>{let s="success"===e;return(0,n.jsxs)(u.z,{view:s?"normal-contrast":"action",size:"xl",className:A("copy-action",{lg:"ru"===c.language}),children:[(0,n.jsx)(m.J,{data:s?I.Z:Z.Z,size:16}),s?a("icons:actions_copied"):a("icons:actions_copyLink")]})}}),[d]),N=i.useMemo(()=>p?(0,n.jsxs)(u.z,{view:"action",size:"xl",onClick:f,children:[(0,n.jsx)(m.J,{data:R.Z,size:16}),a("actions_share")]}):v,[p,v,f]);return(0,n.jsx)("div",{className:A(),ref:o,children:t?N:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.z,{view:"flat-contrast",size:"xl",onClick:j,loading:l,children:[(0,n.jsx)(m.J,{data:E.Z,size:20}),a("icons:actions_downloadSvg")]}),v]})})},X=(0,j.Ge)("icon-dialog"),F=e=>{let{isOpen:s,icon:t,onClose:a,onClickToKeyword:c}=e;return(0,p.d)()?(0,n.jsx)(w.y,{className:X(),contentClassName:X("sheet-content"),visible:s,onClose:a,children:t&&(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(L,{icon:t,onClickToKeyword:c}),(0,n.jsx)(U,{icon:t,mobile:!0})]})}):(0,n.jsx)(g.V,{className:X(),size:"s",open:s,onClose:a,children:t&&(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(L,{icon:t,onClickToKeyword:c}),(0,n.jsx)(U,{icon:t})]})})};t(32346),t(55344);let V=(0,j.Ge)("icons-not-found"),q=()=>{let{t:e}=(0,x.$G)();return(0,n.jsxs)("div",{className:V(),children:[(0,n.jsx)("div",{className:V("title"),children:e("icons:empty_title")}),(0,n.jsx)("div",{className:V("subtitle"),children:e("icons:empty_subTitle")})]})};var B=t(88044);let D=t(48553).c.reduce((e,s)=>({...e,[s.componentName]:s}),{}),H=Object.entries(B).map(e=>{let[s,t]=e;return{name:s,data:t,meta:D[s]}}).sort((e,s)=>e.name.localeCompare(s.name)),Q=(0,j.Ge)("icons"),W=e=>{let{currentIcon:s,onChangeCurrentIcon:t}=e,{t:a,i18n:f}=(0,x.$G)(),v=(0,p.d)(),[N,w]=i.useState(""),[g,C]=i.useState(!1),[b,k]=i.useState(),_=i.useRef(null),z=i.useRef(null);i.useEffect(()=>{v||z.current?.focus()},[v]),i.useEffect(()=>{if(s&&s!==b?.name){let e=H.find(e=>e.name===s);e&&(C(!0),k(e))}},[s]);let G=i.useCallback(e=>{C(!0),k(e),t?.(e?.name)},[t]),$=i.useCallback(()=>{C(!1),setTimeout(()=>{k(void 0),t?.(void 0)},500)},[t]),S=i.useCallback(e=>{w(e),$(),setTimeout(()=>{_.current?.scrollIntoView({behavior:"smooth"})},100)},[]),T=i.useMemo(()=>{if(!N)return H;let e=N.toLowerCase();return H.filter(s=>{let{meta:t}=s;return t.name.toLowerCase().includes(e)||t.componentName.toLowerCase().includes(e)||t.keywords.some(s=>s.toLowerCase().includes(e))})},[N]);return(0,n.jsxs)(c.r,{className:Q(),children:[(0,n.jsx)(o.X,{children:(0,n.jsxs)(l.J,{sizes:12,className:Q("heading"),children:[(0,n.jsx)("h1",{className:Q("title"),ref:_,children:a("icons:title")}),(0,n.jsx)("div",{className:Q("actions"),children:(0,n.jsxs)(u.z,{href:(0,j.n6)("/libraries/icons",f),target:"_blank",className:Q("library-button"),size:"xl",view:"outlined-contrast",children:[a("icons:goToLibrary"),(0,n.jsx)(m.J,{data:r.Z,size:16})]})})]})}),(0,n.jsx)(o.X,{className:Q("search"),children:(0,n.jsx)(l.J,{sizes:12,children:(0,n.jsx)(h.o,{controlRef:z,className:Q("search-input"),value:N,onUpdate:w,size:"xl",placeholder:a("icons:filterPlaceholder"),leftContent:(0,n.jsx)("div",{className:Q("search-icon"),children:(0,n.jsx)(m.J,{data:d.Z,size:20})}),autoFocus:!v,hasClear:!0})})}),(0,n.jsx)(o.X,{children:(0,n.jsx)(l.J,{sizes:12,children:T.length?(0,n.jsx)(y,{icons:T,onSelectIcon:G}):(0,n.jsx)(q,{})})}),(0,n.jsx)(F,{isOpen:g,icon:b,onClose:$,onClickToKeyword:S})]})};var Y=t(41697),ee=t(42549);t(31097);let es="icon";var et=()=>{(0,ee.A)();let e=(0,a.useRouter)(),{[es]:s}=e.query,t=i.useCallback(s=>{let t=new URLSearchParams(window.location.search);s?t.set(es,s):t.delete(es),e.push({pathname:e.asPath.split("?")[0],search:t.toString()})},[e]);return(0,n.jsx)(Y.A,{title:"Icons",children:(0,n.jsx)(W,{currentIcon:"string"==typeof s?s:void 0,onChangeCurrentIcon:t})})},en=!0},52556:function(){},95387:function(){},71509:function(){},94815:function(){},65916:function(){},98551:function(){},404:function(){},48965:function(){},4918:function(){},56246:function(){},32346:function(){},55344:function(){}},function(e){e.O(0,[3662,810,5237,1287,3024,4294,3580,2083,3905,7787,1697,2888,9774,179],function(){return e(e.s=43231)}),_N_E=e.O()}]);