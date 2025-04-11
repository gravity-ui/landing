(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8685],{59527:function(e,t,r){"use strict";var o=r(67294);t.Z=e=>o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),o.createElement("g",{clipPath:"url(#a)"},o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.312 4.29a.764.764 0 0 1 1.103-.62.75.75 0 1 0 .67-1.34 2.264 2.264 0 0 0-3.268 1.836L2.706 5.5H1.75a.75.75 0 0 0 0 1.5h.83l-.392 4.71a.764.764 0 0 1-1.103.62.75.75 0 0 0-.67 1.34 2.264 2.264 0 0 0 3.268-1.836L4.086 7H5.25a.75.75 0 1 0 0-1.5H4.21zm6.014 2.23a.75.75 0 0 0-1.152.96l.85 1.02-.85 1.02a.75.75 0 0 0 1.152.96L11 9.672l.674.808a.75.75 0 0 0 1.152-.96l-.85-1.02.85-1.02a.75.75 0 0 0-1.152-.96L11 7.328zM8.02 4.55a.75.75 0 0 1 .43.969l-.145.378a7.25 7.25 0 0 0 0 5.205l.145.378a.75.75 0 0 1-1.4.539l-.145-.378a8.75 8.75 0 0 1 0-6.282l.145-.378a.75.75 0 0 1 .97-.431m5.961 0a.75.75 0 0 1 .97.43l.145.379a8.75 8.75 0 0 1 0 6.282l-.146.378a.75.75 0 1 1-1.4-.538l.146-.379a7.25 7.25 0 0 0 0-5.205l-.146-.378a.75.75 0 0 1 .431-.97",clipRule:"evenodd"})),o.createElement("defs",null,o.createElement("clipPath",{id:"a"},o.createElement("path",{fill:"currentColor",d:"M0 0h16v16H0z"}))))},17102:function(e,t,r){"use strict";r.d(t,{m:function(){return o}});let o=new(r(70346)).x},67561:function(e,t,r){"use strict";r.r(t),r.d(t,{MarkdownEditor:function(){return k}});var o=r(85893),n=r(84180),i=r(25180),a=r(70589),l=r(17102),s=r(5233),d=r(67294);let u=`
&nbsp;
&nbsp;
Welcome to the editor! Start typing the character \`/\`

![](/static/images/markdown-editor/main.png =800x)

## Markdown WYSIWYG and markup editor

MarkdownEditor is a powerful tool for working with Markdown, which combines WYSIWYG and Markup modes. This means that you can create and edit content in a convenient visual mode, as well as have full control over the markup.
&nbsp;
The editor supports following formats:

* WYSIWYG

* markup

Click on the gear in the upper right corner to change the mode and see the \`md\` markup.

&nbsp;
### Various blocks included

{% cut "Combine different blocks" %}

{% note info "Block for notes, tips, warnings, and alerts" %}

Depending on the content, notes with different titles and formats are used:

* Note: provides additional information.
* Tip: offers a recommendation.
* Warning: issues a warning.
* Alert: indicates a restriction.

{% endnote %}

> [Improve](https://github.com/gravity-ui/markdown-editor/blob/main/docs/how-to-add-preview.md) the editor interface
> 
> *improved by you*

{% endcut %}

Or write your extension using a [convenient api](https://github.com/gravity-ui/markdown-editor/blob/main/docs/how-to-create-extension.md)

&nbsp;
### A user-friendly API is provided

Easily connect to your React app with a hook:

\`\`\`plaintext
import React from 'react';
import { useMarkdownEditor, MarkdownEditorView } from '@gravity-ui/markdown-editor';
import { toaster } from '@gravity-ui/uikit/toaster-singleton';

function Editor({ onSubmit }) {
  const editor = useMarkdownEditor({ allowHTML: false });

  React.useEffect(() => {
    function submitHandler() {
      // Serialize current content to markdown markup
      const value = editor.getValue();
      onSubmit(value);
    }

    editor.on('submit', submitHandler);
    return () => {
      editor.off('submit', submitHandler);
    };
  }, [onSubmit]);

  return <MarkdownEditorView stickyToolbar autofocus toaster={toaster} editor={editor} />;
}
\`\`\`

&nbsp;
### Convenient UX control is equipped

#### Hot keys
{% list tabs %}

- WYSIWYG mode

  
  
  |Formatting|Windows Shortcut|Mac OS Shortcut|
  |:---|:---|:---|
  |Bold text|Ctrl \\+ B|⌘ \\+ B|
  |Italic|Ctrl \\+ I|⌘ \\+ I|
  |Underlined text|Ctrl \\+ U|⌘ \\+ U|
  |Strikethrough text|Ctrl \\+ Shift \\+ S|⌘ \\+ Shift \\+ S|

- Markup mode
  
  
  |Formatting|Markup|Result|
  |:---|:---|:---|
  |Bold text|\`**Bold**\`|**Bold**|
  |Italic|\`*Italic*\`|*Italic*|
  |Underlined text|\`++Underlined++\`|++Underlined++|
  |Strikethrough text|\`~~Strikethrough~~\`|~~Strikethrough~~|

{% endlist %}
#### Context menu
Select this text and you will see a context menu **##like this##**:

![](/static/images/markdown-editor/context-menu.png =360x)

#### Auto-conversion
Quickly create blocks by entering characters that will be replaced by blocks. For example, the automatic conversion of \`-\` and space creates a list, \`>\` and space creates a quote. Try it out.

---

### Current and future features

[X] Some already finished things

[ ] VS Code plugin

[ ] Mobile version

### And a multitude of other functionalities :sweat_smile: :fire:

See <https://github.com/gravity-ui/markdown-editor>

&nbsp;
`;var c=r(83310);r(58133);var m=r(23493),h=r.n(m);let f=e=>{let t=e;for(;t;){let e=window.getComputedStyle(t).overflow;if("auto"===e||"scroll"===e)return t;t=t.parentElement}return window},p=(e,t)=>{let r=e;for(;r;){let e=getComputedStyle(r).getPropertyValue(t);if(e)return parseFloat(e);r=r.parentElement}return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(t))||0};r(90141);let w=(0,c.Ge)("markdown-editor");function g(){let e=(0,n.Siq)({initial:{mode:"wysiwyg",toolbarVisible:!0,markup:u},md:{html:!0,linkify:!0,breaks:!0}}),t=(0,d.useRef)(null);(0,d.useEffect)(()=>{let e=document.querySelector(".g-md-editor-component__toolbar");e&&(t.current=e)},[]);let r=function(e){let{throttleDelay:t=100,offsetCssVariable:r="--g-md-sticky-offset-compensate",cssVariableScope:o=null}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[n,i]=(0,d.useState)(!1),[a,l]=(0,d.useState)(null);return(0,d.useEffect)(()=>{let n=f(e.current);if(e.current&&null===a){let t=p(o||document.documentElement,r);l(e.current.getBoundingClientRect().top-t)}let s=h()(()=>{null!==a&&i((a??0)<=(n===window?window.scrollY:n.scrollTop))},t);return n.addEventListener("scroll",s),()=>{n.removeEventListener("scroll",s),s.cancel()}},[e,a,r,t,o]),n}(t);return(0,o.jsx)(n.uHI,{autofocus:!0,className:w({sticky:r}),stickyToolbar:!1,wysiwygToolbarConfig:n.K5T,markupToolbarConfig:n.mAR.bF,settingsVisible:!0,editor:e})}let k=()=>{let{t:e,i18n:t}=(0,s.$G)("markdown-editor");return(0,o.jsxs)(i.rjZ,{className:w(),children:[(0,o.jsx)(i.X2j,{className:w("title"),children:(0,o.jsxs)(i.JXS,{sizes:12,className:w("heading"),children:[(0,o.jsx)("h1",{className:w("title"),children:e("title")}),(0,o.jsx)("div",{className:w("actions"),children:(0,o.jsx)(a.Button,{href:(0,c.n6)("/libraries/markdown-editor",t),className:w("library-button"),size:"xl",view:"outlined-contrast",children:e("goToLibrary")})})]})}),(0,o.jsx)(i.X2j,{children:(0,o.jsx)(i.JXS,{sizes:12,children:(0,o.jsx)(a.ThemeProvider,{theme:"dark",children:(0,o.jsx)(a.ToasterProvider,{toaster:l.m,children:(0,o.jsx)(g,{})})})})})]})}},58133:function(){},90141:function(){},91343:function(){}}]);