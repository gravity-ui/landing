(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4836],{75971:function(e,s,n){"use strict";n.d(s,{y:function(){return r}});var t=n(85893),c=n(71469),i=n(5233);n(67294);var a=n(8206),o=n(73983);n(52556);let l=(0,o.Ge)("clipboard-area"),r=e=>{let{textToCopy:s,tooltipContent:n,children:o,isNeedPopup:r=!0}=e,{t:d}=(0,i.$G)(),u=(0,a.d)();return r?(0,t.jsx)(c.Popover,{className:l("popover"),disabled:u,content:n??d("actions_copyToClipboard"),placement:"top",hasArrow:!0,children:(0,t.jsx)("div",{children:(0,t.jsx)(c.CopyToClipboard,{text:s,timeout:1e3,children:e=>o(e)})})}):(0,t.jsx)(c.CopyToClipboard,{text:s,timeout:1e3,children:e=>o(e)})}},47529:function(e,s,n){"use strict";n.d(s,{K:function(){return r}});var t=n(85893),c=n(69178),i=n(37105),a=n(71469);n(67294);var o=n(73983);n(95387);let l=(0,o.Ge)("clipboard-icon"),r=e=>{let{status:s,className:n}=e,o="success"===s;return(0,t.jsx)("div",{className:l({copied:o},n),children:(0,t.jsx)(a.Icon,{data:o?c.Z:i.Z,size:16})})}},49531:function(e,s,n){"use strict";n.d(s,{A:function(){return l}});var t=n(85893);n(67294);var c=n(73983),i=n(75971),a=n(47529);n(71509);let o=(0,c.Ge)("code-example"),l=e=>{let{code:s,tooltipContent:n,className:c}=e;return(0,t.jsx)(i.y,{textToCopy:s,tooltipContent:n,children:e=>(0,t.jsx)("div",{className:o(null,c),children:(0,t.jsxs)("div",{className:o("inner"),children:[(0,t.jsx)("div",{className:o("code",{copied:"success"===e}),children:s}),(0,t.jsx)("div",{className:o("copy-button"),children:(0,t.jsx)(a.K,{status:e,className:o("copy-icon")})})]})})})}},8206:function(e,s,n){"use strict";n.d(s,{d:function(){return c}});var t=n(25180);let c=()=>(0,t.EjH)()<=t.j$L.sm},21935:function(e,s,n){"use strict";n.r(s),n.d(s,{IconsPage:function(){return H},__N_SSG:function(){return D},default:function(){return V}});var t=n(85893),c=n(11163),i=n(67294),a=n(1474),o=n(97319),l=n(25180),r=n(71469),d=n(5233),u=n(8206),m=n(73983);n(94815);let x=(0,m.Ge)("icon-button"),h=e=>{let{icon:s,onClick:n}=e,c=i.useCallback(()=>{n?.(s)},[s,n]);return(0,t.jsx)(r.Button,{view:"flat",size:"xl",pin:"round-round",className:x(),onClick:c,children:(0,t.jsx)(r.Icon,{data:s.data,size:20})})};n(65916);let j=(0,m.Ge)("icon-collection"),p=e=>{let{icons:s,onSelectIcon:n}=e,c=i.useCallback(e=>n?.(e),[n]);return(0,t.jsx)("div",{className:j(),children:s.map(e=>(0,t.jsx)(h,{icon:e,onClick:c},e.name))})};var v=n(75971),f=n(47529);n(404);let y=(0,m.Ge)("icon-content"),C=e=>{let{icon:s,onClickToKeyword:n}=e,{t:c}=(0,d.$G)(),a=i.useCallback(e=>()=>{n?.(e)},[n]);return(0,t.jsxs)("div",{className:y(),children:[(0,t.jsx)("div",{className:y("preview"),children:(0,t.jsx)(r.Icon,{data:s.data,size:40})}),(0,t.jsxs)("div",{className:y("info"),children:[(0,t.jsx)(v.y,{textToCopy:s.name,tooltipContent:c("icons:actions_copyIconName"),children:e=>(0,t.jsxs)("div",{className:y("title",{copied:"success"===e}),children:[(0,t.jsx)("span",{className:y("name"),children:s.name}),(0,t.jsx)(f.K,{status:e,className:y("copy-icon")})]})}),s.meta.keywords.length?(0,t.jsxs)("div",{className:y("keywords"),children:[(0,t.jsx)("div",{className:y("keywords-title"),children:c("icons:keywords")}),(0,t.jsx)("div",{className:y("keywords-items"),children:s.meta.keywords.map(e=>(0,t.jsx)("div",{className:y("keywords-item"),onClick:a(e),children:e},e))})]}):null]})]})};var N=n(49531);n(56246);let w=(e,s)=>`import ${s}Icon from '@gravity-ui/icons/svgs/${e}.svg';`,g=e=>`import {${e}} from '@gravity-ui/icons';`,b=(0,m.Ge)("icon-usage-example"),k=e=>{let{icon:s,variant:n}=e,{t:c}=(0,d.$G)(),i="react"===n?g(s.meta.componentName):w(s.meta.svgName,s.meta.componentName);return(0,t.jsxs)("div",{className:b(),children:[(0,t.jsx)("div",{className:b("title"),children:c("react"===n?"icons:usage_reactComponent":"icons:usage_svg")}),(0,t.jsx)(N.A,{code:i,tooltipContent:c("react"===n?"icons:actions_copyReactComponent":"icons:actions_copySvgImport")})]})};n(98551);let G=(0,m.Ge)("icon-body"),_=e=>{let{icon:s,onClickToKeyword:n}=e;return(0,t.jsxs)("div",{className:G(),children:[(0,t.jsx)(C,{icon:s,onClickToKeyword:n}),(0,t.jsx)(k,{variant:"react",icon:s}),(0,t.jsx)(k,{variant:"svg",icon:s})]})};n(48965);var I=n(20087),z=n(72801),T=n(92042),S=n(33550);async function $(e,s){let n=await fetch(e),t=await n.blob(),c=e.split("/").pop()||"downloaded-file",i=s||document.body,a=document.createElement("a");a.style.opacity="0",a.style.width="0px",a.style.height="0px",a.href=window.URL.createObjectURL(t),a.download=c,i.appendChild(a),a.click(),a.remove()}n(4918);let L=(0,m.Ge)("icon-dialog-actions"),R=e=>`https://raw.githubusercontent.com/gravity-ui/icons/main/svgs/${e}.svg`,Z=e=>`${window.location.origin}/icons?icon=${e}`,K=e=>{let{icon:s,mobile:n}=e,{t:c,i18n:a}=(0,d.$G)(),o=i.useRef(null),[l,u]=i.useState(!1),m=i.useMemo(()=>Z(s.name),[s]),x=i.useMemo(()=>({url:m,title:"Gravity UI"}),[m]),h=i.useMemo(()=>navigator.canShare?.(x),[x]),j=i.useCallback(async()=>{u(!0);try{await $(R(s.meta.svgName),o.current)}finally{u(!1)}},[s]),p=i.useCallback(async()=>{if(h)try{await navigator.share(x)}catch(e){}else await navigator.clipboard.writeText(m)},[h,x,m]),v=i.useMemo(()=>(0,t.jsx)(r.CopyToClipboard,{text:m,timeout:1e3,children:e=>{let s="success"===e;return(0,t.jsxs)(r.Button,{view:s?"normal-contrast":"action",size:"xl",className:L("copy-action",{lg:"ru"===a.language}),children:[(0,t.jsx)(r.Icon,{data:s?I.Z:z.Z,size:16}),s?c("icons:actions_copied"):c("icons:actions_copyLink")]})}}),[m]),f=i.useMemo(()=>h?(0,t.jsxs)(r.Button,{view:"action",size:"xl",onClick:p,children:[(0,t.jsx)(r.Icon,{data:T.Z,size:16}),c("actions_share")]}):v,[h,v,p]);return(0,t.jsx)("div",{className:L(),ref:o,children:n?f:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.Button,{view:"flat-contrast",size:"xl",onClick:j,loading:l,children:[(0,t.jsx)(r.Icon,{data:S.Z,size:20}),c("icons:actions_downloadSvg")]}),v]})})},E=(0,m.Ge)("icon-dialog"),M=e=>{let{isOpen:s,icon:n,onClose:c,onClickToKeyword:a}=e;return(0,u.d)()?(0,t.jsx)(r.Sheet,{className:E(),contentClassName:E("sheet-content"),visible:s,onClose:c,children:n&&(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(_,{icon:n,onClickToKeyword:a}),(0,t.jsx)(K,{icon:n,mobile:!0})]})}):(0,t.jsx)(r.Dialog,{className:E(),size:"s",open:s,onClose:c,children:n&&(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(_,{icon:n,onClickToKeyword:a}),(0,t.jsx)(K,{icon:n})]})})};n(32346),n(55344);let X=(0,m.Ge)("icons-not-found"),B=()=>{let{t:e}=(0,d.$G)();return(0,t.jsxs)("div",{className:X(),children:[(0,t.jsx)("div",{className:X("title"),children:e("icons:empty_title")}),(0,t.jsx)("div",{className:X("subtitle"),children:e("icons:empty_subTitle")})]})};var P=n(54240);let U=n(48553).c.reduce((e,s)=>({...e,[s.componentName]:s}),{}),A=Object.entries(P).map(e=>{let[s,n]=e;return{name:s,data:n,meta:U[s]}}).sort((e,s)=>e.name.localeCompare(s.name)),F=(0,m.Ge)("icons"),J=e=>{let{currentIcon:s,onChangeCurrentIcon:n}=e,{t:c,i18n:x}=(0,d.$G)(),h=(0,u.d)(),[j,v]=i.useState(""),[f,y]=i.useState(!1),[C,N]=i.useState(),w=i.useRef(null),g=i.useRef(null);i.useEffect(()=>{h||g.current?.focus()},[h]);let b=i.useRef();i.useEffect(()=>{if(s&&s!==C?.name){let e=A.find(e=>e.name===s);e&&(y(!0),clearTimeout(b.current),N(e))}},[s]);let k=i.useCallback(e=>{y(!0),clearTimeout(b.current),N(e),n?.(e?.name)},[n]),G=i.useCallback(()=>{y(!1),b.current=setTimeout(()=>{N(void 0),n?.(void 0)},500)},[n]),_=i.useCallback(e=>{v(e),G(),setTimeout(()=>{w.current?.scrollIntoView({behavior:"smooth"})},100)},[]),I=i.useMemo(()=>{if(!j)return A;let e=j.toLowerCase();return A.filter(s=>{let{meta:n}=s;return n.name.toLowerCase().includes(e)||n.componentName.toLowerCase().includes(e)||n.keywords.some(s=>s.toLowerCase().includes(e))})},[j]);return(0,t.jsxs)(l.rjZ,{className:F(),children:[(0,t.jsx)(l.X2j,{children:(0,t.jsxs)(l.JXS,{sizes:12,className:F("heading"),children:[(0,t.jsx)("h1",{className:F("title"),ref:w,children:c("icons:title")}),(0,t.jsx)("div",{className:F("actions"),children:(0,t.jsxs)(r.Button,{href:(0,m.n6)("/libraries/icons",x),target:"_blank",className:F("library-button"),size:"xl",view:"outlined-contrast",children:[c("icons:goToLibrary"),(0,t.jsx)(r.Icon,{data:a.Z,size:16})]})})]})}),(0,t.jsx)(l.X2j,{className:F("search"),children:(0,t.jsx)(l.JXS,{sizes:12,children:(0,t.jsx)(r.TextInput,{controlRef:g,className:F("search-input"),value:j,onUpdate:v,size:"xl",placeholder:c("icons:filterPlaceholder"),startContent:(0,t.jsx)("div",{className:F("search-icon"),children:(0,t.jsx)(r.Icon,{data:o.Z,size:20})}),autoFocus:!h,hasClear:!0})})}),(0,t.jsx)(l.X2j,{children:(0,t.jsx)(l.JXS,{sizes:12,children:I.length?(0,t.jsx)(p,{icons:I,onSelectIcon:k}):(0,t.jsx)(B,{})})}),(0,t.jsx)(M,{isOpen:f,icon:C,onClose:G,onClickToKeyword:_})]})};var O=n(51054);let q="icon";var D=!0;let H=()=>{let e=(0,c.useRouter)(),{[q]:s}=e.query,n=i.useCallback(s=>{let n=new URLSearchParams(window.location.search);s?n.set(q,s):n.delete(q),e.push({pathname:e.asPath.split("?")[0],search:n.toString()})},[e]);return(0,t.jsx)(O.A,{title:"Icons",children:(0,t.jsx)(J,{currentIcon:"string"==typeof s?s:void 0,onChangeCurrentIcon:n})})};var V=H},52556:function(){},95387:function(){},71509:function(){},94815:function(){},65916:function(){},98551:function(){},404:function(){},48965:function(){},4918:function(){},56246:function(){},32346:function(){},55344:function(){}}]);