"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5331],{17102:function(e,t,n){n.d(t,{m:function(){return r}});let r=new(n(70346)).x},55331:function(e,t,n){n.r(t),n.d(t,{ToasterProxy:function(){return u}});var r=n(85893),o=n(71469),s=n(17102),a=n(67294);let i=e=>{let t=(0,o.useToaster)();return a.useEffect(()=>{t.has(e.name)?t.update(e.name,e):t.add(e)},[e]),null},u=e=>{let{name:t="demo-toast",isMobile:n,action:a,autoHiding:u,theme:l,...d}=e;return(0,r.jsx)(o.MobileProvider,{mobile:n,children:(0,r.jsxs)(o.ToasterProvider,{toaster:s.m,children:[(0,r.jsx)(i,{...d,name:t,autoHiding:!1===u?u:5e3,actions:[{label:a,removeAfterClick:!1,onClick(){}}],theme:"undefined"===l?void 0:l}),(0,r.jsx)(o.ToasterComponent,{})]})},String(n))};u.displayName="ToasterProxy"}}]);