(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6886],{60142:function(e,i,t){"use strict";t.d(i,{l:function(){return m}});var s=t(85893),n=t(47674),l=t(67672),a=t(71469),c=t(5233),r=t(67294),o=t(91647),d=t(73983),u=t(17183);t(51458);let h=(0,d.Ge)("article-navigation"),m=e=>{let{prevSection:i,nextSection:t}=e,{t:d}=(0,c.$G)(),m=r.useCallback(()=>{let e=document.getElementById(o.P3);e&&e.scrollTo({top:0,behavior:"smooth"})},[]);return(0,s.jsxs)("div",{className:h(),children:[i&&(0,s.jsxs)(u.r,{href:i.url,className:h("button"),onClick:m,children:[(0,s.jsx)("div",{className:h("button-icon"),children:(0,s.jsx)(a.Icon,{data:n.Z,size:16})}),(0,s.jsxs)(a.Flex,{direction:"column",gap:"1",className:h("content"),children:[(0,s.jsx)(a.Text,{variant:"body-short",color:"light-complementary",children:d("navigation_previous")}),(0,s.jsx)(a.Text,{className:h("content-title"),ellipsis:!0,variant:"body-2",color:"primary",children:i.title})]})]}),t&&(0,s.jsxs)(u.r,{href:t.url,className:h("button",{reverse:!0}),onClick:m,children:[(0,s.jsx)("div",{className:h("button-icon"),children:(0,s.jsx)(a.Icon,{data:l.Z,size:16})}),(0,s.jsxs)(a.Flex,{direction:"column",gap:"1",className:h("content"),children:[(0,s.jsx)(a.Text,{variant:"body-short",color:"light-complementary",children:d("navigation_next")}),(0,s.jsx)(a.Text,{className:h("content-title"),ellipsis:!0,variant:"body-2",color:"primary",children:t.title})]})]})]})}},47199:function(e,i,t){"use strict";t.d(i,{_:function(){return S}});var s=t(85893),n=t(71469),l=t(5233),a=t(67294),c=t(20575),r=t(96446),o=t(91647),d=t(73983),u=t(29781);t(76864);let h=(0,d.Ge)("library-version");var m=e=>{let{id:i}=e,t=(0,d.t0)(i);return t?(0,s.jsx)(n.Card,{className:h(),theme:"warning",view:"outlined",children:(0,s.jsx)(n.Text,{color:"warning",children:t})}):null},x=t(25180),v=t(69493),j=t(17183);t(96157);let b=(0,d.Ge)("navigation-layout-section-block"),g=e=>{let{data:i,isOpen:t,setIsOpen:l,curSectionId:a,curSubSectionId:r,onClickOnLink:o}=e;return(0,s.jsx)("div",{className:b(),children:i.url&&!i.subSections?.length?i.url?(0,s.jsx)(j.r,{href:i.url,className:b("header",{active:a===i.id&&!r}),children:(0,s.jsx)("div",{className:b("title"),children:i.title})}):null:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:b("header",{open:t}),onClick:()=>{l(!t)},children:[(0,s.jsx)("div",{className:b("title"),children:i.title}),(0,s.jsx)("div",{className:b("library-version"),children:(0,s.jsx)(m,{id:i.id})}),(0,s.jsx)("div",{className:b("arrow",{open:t}),children:(0,s.jsx)(n.Icon,{data:c.Z,width:10,height:6})})]}),(0,s.jsxs)("div",{className:b("sub-sections",{open:t}),children:[i.url?(0,s.jsx)(j.r,{href:i.url,className:b("sub-section",{active:a===i.id&&void 0===r}),onClick:o,children:"Overview"},"__overview"):null,i.subSections?.map(e=>!0===e.isComingSoon?(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:b("sub-section",{active:a===i.id&&r===e.id,disabled:!0===e.isComingSoon}),children:[(0,s.jsx)("span",{className:b("sub-section-text"),children:e.title}),(0,s.jsx)("span",{className:b("sub-section-icon"),children:(0,s.jsx)(n.Icon,{data:v.Z,width:34,height:14})})]})},e.id):(0,s.jsx)(j.r,{href:e.url,className:b("sub-section",{active:a===i.id&&r===e.id}),onClick:o,children:(0,s.jsx)("span",{className:b("sub-section-text"),children:e.title})},e.id))]})]})})};t(37050);let N=(0,d.Ge)("navigation-layout-navigation"),f=a.memo(e=>{let{sections:i,sectionId:t,subSectionId:l,searchPlaceholder:c,emptySearchPlaceholder:r,onClickOnLink:o}=e,[d,u]=a.useState(""),[h,m]=a.useState(()=>i.reduce((e,i)=>(e[i.id]=!0,e),{})),v=(0,x.EjH)()<x.j$L.lg,[j,b]=a.useState(i);a.useEffect(()=>{b(i)},[i]);let f=a.useCallback(e=>{if(u(e),e){let t={...h},s=e.toLowerCase(),n=s?i.reduce((e,i)=>{if(i.title.toLowerCase().includes(s)){t[i.id]=!0;let n=i.subSections?.filter(e=>e.title.toLowerCase().includes(s));e.push({...i,subSections:n})}else{let n=i.subSections?.filter(e=>e.title.toLowerCase().includes(s));n&&n.length>0&&(t[i.id]=!0,e.push({...i,subSections:n}))}return e},[]):i;m(t),b(n)}else b(i)},[h,i]);return(0,s.jsxs)("div",{className:N(),children:[(0,s.jsx)("div",{className:N("search-input"),children:(0,s.jsx)(n.TextInput,{value:d,onUpdate:f,size:v?"xl":"l",placeholder:c,hasClear:!0})}),(0,s.jsx)("div",{className:N("items"),children:j.length>0?j.map(e=>(0,s.jsx)(g,{data:e,isOpen:h[e.id],setIsOpen:i=>{m({...h,[e.id]:i})},curSectionId:t,curSubSectionId:l,onClickOnLink:o},e.id)):(0,s.jsx)("div",{className:N("empty"),children:r})})]})});f.displayName="Navigation",t(89765);let p=(0,d.Ge)("navigation-layout"),S=e=>{let{sections:i,sectionId:t,subSectionId:d,mobileTitle:h,searchPlaceholder:x,emptySearchPlaceholder:v,children:j}=e,{t:b}=(0,l.$G)(),[g,N]=a.useState(!1),S=i.find(e=>e.id===t),_=S?.subSections?.find(e=>e.id===d),C=a.useCallback(()=>{N(!1);let e=document.getElementById(o.P3);e&&e.scrollTo({top:0,behavior:"smooth"})},[]);return S?(0,s.jsxs)("div",{className:p(),children:[(0,s.jsxs)("div",{className:p("navigation-wrap"),children:[(0,s.jsxs)("div",{tabIndex:0,role:"button",className:p("mobile-navigation-control"),onClick:()=>{N(!0)},children:[(0,s.jsxs)("div",{className:p("mobile-navigation-control-label"),children:[(0,s.jsx)("span",{className:p("mobile-navigation-control-section"),children:S.title}),(0,s.jsx)(m,{id:S.id}),_?(0,s.jsxs)("span",{className:p("mobile-navigation-control-sub-section"),children:[" ","• ",_.title]}):null]}),(0,s.jsx)("div",{className:p("mobile-navigation-control-arrow"),children:(0,s.jsx)(n.Icon,{data:c.Z,width:10,height:6})})]}),(0,s.jsxs)("div",{className:p("navigation",{"mobile-open":g}),children:[(0,s.jsxs)("div",{className:p("mobile-navigation-header"),children:[(0,s.jsx)("div",{className:p("mobile-navigation-header-title"),children:h}),(0,s.jsx)("div",{tabIndex:0,role:"button",className:p("mobile-navigation-header-close"),onClick:()=>{N(!1)},children:(0,s.jsx)(n.Icon,{data:r.Z,width:16})})]}),(0,s.jsx)(f,{sections:i,sectionId:t,subSectionId:d,searchPlaceholder:x,emptySearchPlaceholder:v??b("emptySearchPlaceholder"),onClickOnLink:C})]})]}),(0,s.jsx)("div",{className:p("content-wrap"),id:o.P3,children:(0,s.jsxs)("div",{className:p("content"),children:[j,(0,s.jsx)(u.$,{containerClass:p("footer")})]})})]}):null}},96886:function(e,i,t){"use strict";t.r(i),t.d(i,{ArticlePage:function(){return b},__N_SSG:function(){return j},default:function(){return g}});var s=t(85893),n=t(25180),l=t(5233),a=t(67294),c=t(73983),r=t(60142),o=t(87925);t(77016);let d=(0,c.Ge)("design-article"),u=e=>{let{article:i,sectionId:t,sections:n}=e,{i18n:u,t:h}=(0,l.$G)(),m=(0,c.Kd)(u.language),x=a.useMemo(()=>n.find(e=>e.id===t),[t,n]),v=a.useMemo(()=>x&&x.subSections?x.subSections.findIndex(e=>e.id===i.id):null,[x,i.id]),j=a.useMemo(()=>{if(!x||!x.subSections||!v&&0!==v)return null;let e=v+1;if(e>=x.subSections.length)return null;let i=x.subSections[e];return i.isComingSoon?null:i},[v,x]),b=a.useMemo(()=>{if(!x||!x.subSections||!v&&0!==v)return null;let e=v-1;if(e<0)return null;let i=x.subSections[e];return i.isComingSoon?null:i},[v,x]);return(0,s.jsxs)("div",{className:d(),children:[(0,s.jsx)("h1",{className:d("title"),children:h(`design-articles-info:section_${t}_article_${i.id}_title`)}),(0,s.jsx)(o.W,{text:i.content[m]},`${t}-${i.id}-${m}-article`),(0,s.jsx)("div",{className:d("navigation"),children:(0,s.jsx)(r.l,{prevSection:b,nextSection:j})})]})};var h=t(47199);let m=e=>{let{sectionId:i,articleId:t,children:n,sections:a}=e,{t:c}=(0,l.$G)();return(0,s.jsx)(h._,{sections:a,mobileTitle:c("design-article:title"),searchPlaceholder:c("design-article:searchPlaceholder"),sectionId:i,subSectionId:t,children:n})};var x=t(51054),v=t(15990),j=!0;let b=e=>{let{sectionId:i,articleId:t}=e,{i18n:a}=(0,l.$G)(),c=v.N.find(e=>e.id===i),r=c?.articles.find(e=>e.id===t),o=(0,n.EjH)()<n.j$L.lg;if(!c||!r)return null;let d=v.N.map(e=>({id:e.id,title:a.t(`design-articles-info:section_${e.id}_title`),subSections:e.articles.map(i=>({id:i.id,title:a.t(`design-articles-info:section_${e.id}_article_${i.id}_title`),url:`/design/${e.id}/${i.id}`}))}));return(0,s.jsx)(x.A,{title:`${a.t(`design-articles-info:section_${i}_title`)} – ${a.t(`design-articles-info:section_${i}_article_${t}_title`)}`,hideFooter:!0,noScroll:!o,children:(0,s.jsx)(m,{sections:d,sectionId:i,articleId:t,children:(0,s.jsx)(u,{article:r,sectionId:i,sections:d})})})};var g=b},51458:function(){},77016:function(){},76864:function(){},37050:function(){},89765:function(){},96157:function(){}}]);