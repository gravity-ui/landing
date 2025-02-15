(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6559],{67561:function(e,t,o){"use strict";o.r(t),o.d(t,{MarkdownEditor:function(){return v}});var r=o(85893),n=o(59976),i=o(34761),a=o(96756),l=o(70746),s=o(50254),d=o(68208),u=o(90684),c=o(5233),m=o(67294);let f=`
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
import { toaster } from '@gravity-ui/uikit/toaster-singleton-react-18';

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
`;var h=o(83310);o(58133);var p=o(23493),w=o.n(p);let k=e=>{let t=e;for(;t;){let e=window.getComputedStyle(t).overflow;if("auto"===e||"scroll"===e)return t;t=t.parentElement}return window},g=(e,t)=>{let o=e;for(;o;){let e=getComputedStyle(o).getPropertyValue(t);if(e)return parseFloat(e);o=o.parentElement}return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(t))||0};o(90141);let b=(0,h.Ge)("markdown-editor");function y(){let e=(0,n.Siq)({initialEditorMode:"wysiwyg",initialToolbarVisible:!0,allowHTML:!1,linkify:!0,breaks:!0,initialMarkup:f}),t=(0,m.useRef)(null);(0,m.useEffect)(()=>{let e=document.querySelector(".g-md-editor-component__toolbar");e&&(t.current=e)},[]);let o=function(e){let{throttleDelay:t=100,offsetCssVariable:o="--g-md-sticky-offset-compensate",cssVariableScope:r=null}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[n,i]=(0,m.useState)(!1),[a,l]=(0,m.useState)(null);return(0,m.useEffect)(()=>{let n=k(e.current);if(e.current&&null===a){let t=g(r||document.documentElement,o);l(e.current.getBoundingClientRect().top-t)}let s=w()(()=>{null!==a&&i((a??0)<=(n===window?window.scrollY:n.scrollTop))},t);return n.addEventListener("scroll",s),()=>{n.removeEventListener("scroll",s),s.cancel()}},[e,a,o,t,r]),n}(t);return(0,r.jsx)(n.uHI,{autofocus:!0,toaster:u.m,className:b({sticky:o}),stickyToolbar:!1,wysiwygToolbarConfig:n.K5T,markupToolbarConfig:n.mAR.bF,settingsVisible:!0,editor:e})}let v=()=>{let{t:e,i18n:t}=(0,c.$G)("markdown-editor");return(0,r.jsxs)(i.r,{className:b(),children:[(0,r.jsx)(a.X,{className:b("title"),children:(0,r.jsxs)(l.J,{sizes:12,className:b("heading"),children:[(0,r.jsx)("h1",{className:b("title"),children:e("title")}),(0,r.jsx)("div",{className:b("actions"),children:(0,r.jsx)(s.z,{href:(0,h.n6)("/libraries/markdown-editor",t),className:b("library-button"),size:"xl",view:"outlined-contrast",children:e("goToLibrary")})})]})}),(0,r.jsx)(a.X,{children:(0,r.jsx)(l.J,{sizes:12,children:(0,r.jsx)(d.f,{theme:"dark",children:(0,r.jsx)(y,{})})})})]})}},58133:function(){},90141:function(){},91343:function(){},22868:function(){},14777:function(){},99830:function(){},70209:function(){}}]);