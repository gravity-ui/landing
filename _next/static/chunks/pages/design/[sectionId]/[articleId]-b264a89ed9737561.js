(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4372],{91586:function(e,t,i){"use strict";var n=i(67294);t.Z=e=>n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75",clipRule:"evenodd"}))},56919:function(e,t,i){"use strict";var n=i(67294);t.Z=e=>n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8",clipRule:"evenodd"}))},57006:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(97582),s=i(67294),l=i(13650),a=i(1994),r=i(76657);i(20197);let c=(0,r.Ge)("card"),o=s.forwardRef(function(e,t){let{type:i="container",theme:r,view:o,size:d="m",children:u,className:h,onClick:m,disabled:v,selected:x}=e,f=(0,n._T)(e,["type","theme","view","size","children","className","onClick","disabled","selected"]),j="selection"===i,g="container"===i,b=("action"===i||j)&&!!m&&!v,p=b?m:void 0,{onKeyDown:N}=(0,l.b)(m);return s.createElement(a.x,Object.assign({ref:t,role:b?"button":void 0,className:c({theme:r||(g?"normal":void 0),view:o||(g||j?"outlined":void 0),type:i,selected:x,size:d,disabled:v,clickable:b},h),onClick:p,onKeyDown:b?N:void 0,tabIndex:b?0:void 0},f),u)})},1994:function(e,t,i){"use strict";i.d(t,{x:function(){return c}});var n=i(97582),s=i(67294),l=i(76657),a=i(98035);i(82041);let r=(0,l.Ge)("box"),c=s.forwardRef(function(e,t){var{as:i,children:l,qa:c,className:o,width:d,height:u,minWidth:h,minHeight:m,maxHeight:v,maxWidth:x,position:f,style:j,spacing:g,overflow:b}=e,p=(0,n._T)(e,["as","children","qa","className","width","height","minWidth","minHeight","maxHeight","maxWidth","position","style","spacing","overflow"]);let N=Object.assign({width:d,height:u,minWidth:h,minHeight:m,maxHeight:v,maxWidth:x,position:f},j);return s.createElement(i||"div",Object.assign({},p,{"data-qa":c,style:N,ref:t,className:r({overflow:b},g?(0,a.sp)(g,o):o)}),l)})},6292:function(e,t,i){"use strict";i.d(t,{k:function(){return d}});var n=i(97582),s=i(67294),l=i(76657),a=i(1994),r=i(62674),c=i(43957);i(91363);let o=(0,l.Ge)("flex"),d=s.forwardRef(function(e,t){let{as:i,direction:l,grow:d,basis:u,children:h,style:m,alignContent:v,alignItems:x,alignSelf:f,justifyContent:j,justifyItems:g,justifySelf:b,shrink:p,wrap:N,inline:w,gap:S,gapRow:C,className:y,space:k,centerContent:_}=e,I=(0,n._T)(e,["as","direction","grow","basis","children","style","alignContent","alignItems","alignSelf","justifyContent","justifyItems","justifySelf","shrink","wrap","inline","gap","gapRow","className","space","centerContent"]),{getClosestMediaProps:G,theme:{spaceBaseSize:E}}=(0,r.l)(),O=e=>"object"==typeof e&&null!==e?G(e):e,P=O(S),Z=P?E*Number(P):void 0,$=O(C)||P,M=$?E*Number($):void 0,A=O(k),L=S||C||!A?void 0:(0,c.cA)(A);return s.createElement(a.x,Object.assign({as:i||"div",className:o({"center-content":_,inline:w,s:L},y),ref:t,style:Object.assign({flexDirection:O(l),flexGrow:!0===d?1:d,flexWrap:!0===N?"wrap":N,flexBasis:u,flexShrink:p,columnGap:Z,rowGap:M,alignContent:O(v),alignItems:O(x),alignSelf:O(f),justifyContent:O(j),justifyItems:O(g),justifySelf:O(b)},m)},I),k?s.Children.map(h,e=>e?s.createElement("div",{className:o("wr")},e):e):h)})},62674:function(e,t,i){"use strict";i.d(t,{l:function(){return a}});var n=i(67294),s=i(22191),l=i(43957);let a=()=>{let{activeMediaQuery:e,theme:t}=n.useContext(s.V),{isMediaActive:i,getClosestMediaProps:a}=n.useMemo(()=>({isMediaActive:(0,l.ur)(e),getClosestMediaProps:(0,l.GD)(e)}),[e]);return{theme:t,activeMediaQuery:e,isMediaActive:i,getClosestMediaProps:a}}},98035:function(e,t,i){"use strict";i.d(t,{W:function(){return a},sp:function(){return r}});var n=i(76657),s=i(43957);i(82539);let l=(0,n.Ge)("s"),a=(e,t)=>{let i=[];for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)){let n=e[t];void 0!==n&&i.push(l(`${t}_${(0,s.cA)(n)}`))}return t&&i.push(t),i.join(" ")},r=a},43957:function(e,t,i){"use strict";i.d(t,{GD:function(){return r},cA:function(){return c},ur:function(){return l}});var n=i(41810);let s={s:0,m:1,l:2,xl:3,xxl:4,xxxl:5},l=e=>t=>e in s&&s[e]-s[t]>=0,a=["s","m","l","xl","xxl","xxxl"],r=e=>(t={})=>{if(!e)return;let i=e;for(;i;){if(t[i])return t[i];i=a[s[i]-1]}},c=e=>e in n.Q?n.Q[e]:String(e)},55112:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/design/[sectionId]/[articleId]",function(){return i(3965)}])},60142:function(e,t,i){"use strict";i.d(t,{l:function(){return x}});var n=i(85893),s=i(91586),l=i(56919),a=i(1960),r=i(6292),c=i(11530),o=i(5233),d=i(67294),u=i(91647),h=i(46369),m=i(17183);i(51458);let v=(0,h.Ge)("article-navigation"),x=e=>{let{prevSection:t,nextSection:i}=e,{t:h}=(0,o.$G)(),x=d.useCallback(()=>{let e=document.getElementById(u.P3);e&&e.scrollTo({top:0,behavior:"smooth"})},[]);return(0,n.jsxs)("div",{className:v(),children:[t&&(0,n.jsxs)(m.r,{href:t.url,className:v("button"),onClick:x,children:[(0,n.jsx)("div",{className:v("button-icon"),children:(0,n.jsx)(a.J,{data:s.Z,size:16})}),(0,n.jsxs)(r.k,{direction:"column",gap:"1",className:v("content"),children:[(0,n.jsx)(c.x,{variant:"body-short",color:"light-complementary",children:h("navigation_previous")}),(0,n.jsx)(c.x,{className:v("content-title"),ellipsis:!0,variant:"body-2",color:"primary",children:t.title})]})]}),i&&(0,n.jsxs)(m.r,{href:i.url,className:v("button",{reverse:!0}),onClick:x,children:[(0,n.jsx)("div",{className:v("button-icon"),children:(0,n.jsx)(a.J,{data:l.Z,size:16})}),(0,n.jsxs)(r.k,{direction:"column",gap:"1",className:v("content"),children:[(0,n.jsx)(c.x,{variant:"body-short",color:"light-complementary",children:h("navigation_next")}),(0,n.jsx)(c.x,{className:v("content-title"),ellipsis:!0,variant:"body-2",color:"primary",children:i.title})]})]})]})}},47199:function(e,t,i){"use strict";i.d(t,{_:function(){return k}});var n=i(85893),s=i(1960),l=i(5233),a=i(67294),r=i(20575),c=i(96446),o=i(91647),d=i(46369),u=i(29781),h=i(57006),m=i(11530);i(76864);let v=(0,d.Ge)("library-version");var x=e=>{let{id:t}=e,i=(0,d.t0)(t);return i?(0,n.jsx)(h.Z,{className:v(),theme:"warning",view:"outlined",children:(0,n.jsx)(m.x,{color:"warning",children:i})}):null},f=i(16541),j=i(69890),g=i(11197),b=i(69493),p=i(17183);i(96157);let N=(0,d.Ge)("navigation-layout-section-block"),w=e=>{let{data:t,isOpen:i,setIsOpen:l,curSectionId:a,curSubSectionId:c,onClickOnLink:o}=e;return(0,n.jsx)("div",{className:N(),children:t.url&&!t.subSections?.length?t.url?(0,n.jsx)(p.r,{href:t.url,className:N("header",{active:a===t.id&&!c}),children:(0,n.jsx)("div",{className:N("title"),children:t.title})}):null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:N("header",{open:i}),onClick:()=>{l(!i)},children:[(0,n.jsx)("div",{className:N("title"),children:t.title}),(0,n.jsx)("div",{className:N("library-version"),children:(0,n.jsx)(x,{id:t.id})}),(0,n.jsx)("div",{className:N("arrow",{open:i}),children:(0,n.jsx)(s.J,{data:r.Z,width:10,height:6})})]}),(0,n.jsxs)("div",{className:N("sub-sections",{open:i}),children:[t.url?(0,n.jsx)(p.r,{href:t.url,className:N("sub-section",{active:a===t.id&&void 0===c}),onClick:o,children:"Overview"},"__overview"):null,t.subSections?.map(e=>!0===e.isComingSoon?(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:N("sub-section",{active:a===t.id&&c===e.id,disabled:!0===e.isComingSoon}),children:[(0,n.jsx)("span",{className:N("sub-section-text"),children:e.title}),(0,n.jsx)("span",{className:N("sub-section-icon"),children:(0,n.jsx)(s.J,{data:b.Z,width:34,height:14})})]})},e.id):(0,n.jsx)(p.r,{href:e.url,className:N("sub-section",{active:a===t.id&&c===e.id}),onClick:o,children:(0,n.jsx)("span",{className:N("sub-section-text"),children:e.title})},e.id))]})]})})};i(37050);let S=(0,d.Ge)("navigation-layout-navigation"),C=a.memo(e=>{let{sections:t,sectionId:i,subSectionId:s,searchPlaceholder:l,emptySearchPlaceholder:r,onClickOnLink:c}=e,[o,d]=a.useState(""),[u,h]=a.useState(()=>t.reduce((e,t)=>(e[t.id]=!0,e),{})),m=(0,f.Z)()<j.j.lg,[v,x]=a.useState(t);a.useEffect(()=>{x(t)},[t]);let b=a.useCallback(e=>{if(d(e),e){let i={...u},n=e.toLowerCase(),s=n?t.reduce((e,t)=>{if(t.title.toLowerCase().includes(n)){i[t.id]=!0;let s=t.subSections?.filter(e=>e.title.toLowerCase().includes(n));e.push({...t,subSections:s})}else{let s=t.subSections?.filter(e=>e.title.toLowerCase().includes(n));s&&s.length>0&&(i[t.id]=!0,e.push({...t,subSections:s}))}return e},[]):t;h(i),x(s)}else x(t)},[u,t]);return(0,n.jsxs)("div",{className:S(),children:[(0,n.jsx)("div",{className:S("search-input"),children:(0,n.jsx)(g.o,{value:o,onUpdate:b,size:m?"xl":"l",placeholder:l,hasClear:!0})}),(0,n.jsx)("div",{className:S("items"),children:v.length>0?v.map(e=>(0,n.jsx)(w,{data:e,isOpen:u[e.id],setIsOpen:t=>{h({...u,[e.id]:t})},curSectionId:i,curSubSectionId:s,onClickOnLink:c},e.id)):(0,n.jsx)("div",{className:S("empty"),children:r})})]})});C.displayName="Navigation",i(89765);let y=(0,d.Ge)("navigation-layout"),k=e=>{let{sections:t,sectionId:i,subSectionId:d,mobileTitle:h,searchPlaceholder:m,emptySearchPlaceholder:v,children:f}=e,{t:j}=(0,l.$G)(),[g,b]=a.useState(!1),p=t.find(e=>e.id===i),N=p?.subSections?.find(e=>e.id===d),w=a.useCallback(()=>{b(!1);let e=document.getElementById(o.P3);e&&e.scrollTo({top:0,behavior:"smooth"})},[]);return p?(0,n.jsxs)("div",{className:y(),children:[(0,n.jsxs)("div",{className:y("navigation-wrap"),children:[(0,n.jsxs)("div",{tabIndex:0,role:"button",className:y("mobile-navigation-control"),onClick:()=>{b(!0)},children:[(0,n.jsxs)("div",{className:y("mobile-navigation-control-label"),children:[(0,n.jsx)("span",{className:y("mobile-navigation-control-section"),children:p.title}),(0,n.jsx)(x,{id:p.id}),N?(0,n.jsxs)("span",{className:y("mobile-navigation-control-sub-section"),children:[" ","• ",N.title]}):null]}),(0,n.jsx)("div",{className:y("mobile-navigation-control-arrow"),children:(0,n.jsx)(s.J,{data:r.Z,width:10,height:6})})]}),(0,n.jsxs)("div",{className:y("navigation",{"mobile-open":g}),children:[(0,n.jsxs)("div",{className:y("mobile-navigation-header"),children:[(0,n.jsx)("div",{className:y("mobile-navigation-header-title"),children:h}),(0,n.jsx)("div",{tabIndex:0,role:"button",className:y("mobile-navigation-header-close"),onClick:()=>{b(!1)},children:(0,n.jsx)(s.J,{data:c.Z,width:16})})]}),(0,n.jsx)(C,{sections:t,sectionId:i,subSectionId:d,searchPlaceholder:m,emptySearchPlaceholder:v??j("emptySearchPlaceholder"),onClickOnLink:w})]})]}),(0,n.jsx)("div",{className:y("content-wrap"),id:o.P3,children:(0,n.jsxs)("div",{className:y("content"),children:[f,(0,n.jsx)(u.$,{containerClass:y("footer")})]})})]}):null}},3965:function(e,t,i){"use strict";i.r(t),i.d(t,{ArticlePage:function(){return g},__N_SSG:function(){return b},default:function(){return p}});var n=i(85893),s=i(16541),l=i(69890),a=i(67294),r=i(46369),c=i(60142),o=i(87925);i(77016);let d=(0,r.Ge)("design-article"),u=e=>{let{article:t,sectionId:i,sections:s}=e,l=a.useMemo(()=>s.find(e=>e.id===i),[i,s]),r=a.useMemo(()=>l&&l.subSections?l.subSections.findIndex(e=>e.id===t.id):null,[l,t.id]),u=a.useMemo(()=>{if(!l||!l.subSections||!r&&0!==r)return null;let e=r+1;if(e>=l.subSections.length)return null;let t=l.subSections[e];return t.isComingSoon?null:t},[r,l]),h=a.useMemo(()=>{if(!l||!l.subSections||!r&&0!==r)return null;let e=r-1;if(e<0)return null;let t=l.subSections[e];return t.isComingSoon?null:t},[r,l]);return(0,n.jsxs)("div",{className:d(),children:[(0,n.jsx)("h1",{className:d("title"),children:t.title}),(0,n.jsx)(o.W,{text:t.content},`${i}-${t.id}-article`),(0,n.jsx)("div",{className:d("navigation"),children:(0,n.jsx)(c.l,{prevSection:h,nextSection:u})})]})};var h=i(5233),m=i(47199);let v=e=>{let{sectionId:t,articleId:i,children:s,sections:l}=e,{t:a}=(0,h.$G)();return(0,n.jsx)(m._,{sections:l,mobileTitle:a("design-article:title"),searchPlaceholder:a("design-article:searchPlaceholder"),sectionId:t,subSectionId:i,children:s})};var x=i(41697),f=i(19549),j=i(42549);i(31097);let g=e=>{let{sectionId:t,articleId:i}=e;(0,j.A)();let r=f.N.find(e=>e.id===t),c=r?.articles.find(e=>e.id===i),o=(0,s.Z)()<l.j.lg;if(!r||!c)return null;let d=a.useMemo(()=>f.N.map(e=>{let{id:t,title:i,articles:n}=e;return{id:t,title:i,subSections:n.map(e=>({id:e.id,title:e.title,url:`/design/${t}/${e.id}`}))}}),[]);return(0,n.jsx)(x.A,{title:`${r.title} – ${c.title}`,hideFooter:!0,noScroll:!o,children:(0,n.jsx)(v,{sections:d,sectionId:t,articleId:i,children:(0,n.jsx)(u,{article:c,sectionId:t,sections:d})})})};var b=!0,p=g},20197:function(){},82041:function(){},91363:function(){},82539:function(){},51458:function(){},77016:function(){},76864:function(){},37050:function(){},89765:function(){},96157:function(){}},function(e){e.O(0,[3662,630,9772,5880,810,5237,6167,555,9132,1287,2592,3024,3825,4294,2725,3108,1355,2726,9639,8481,6691,7992,5527,3493,7935,4013,7562,7363,1215,7446,7787,9549,2700,2888,9774,179],function(){return e(e.s=55112)}),_N_E=e.O()}]);