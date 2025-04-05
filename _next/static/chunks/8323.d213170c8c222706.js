(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8323],{67561:function(e,t,o){"use strict";o.r(t),o.d(t,{MarkdownEditor:function(){return g}});var r=o(85893),n=o(84180),i=o(25180),a=o(91469),s=o(17102),l=o(5233),d=o(67294);let u=`
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
`;var c=o(83310);o(58133);var m=o(23493),h=o.n(m);let p=e=>{let t=e;for(;t;){let e=window.getComputedStyle(t).overflow;if("auto"===e||"scroll"===e)return t;t=t.parentElement}return window},f=(e,t)=>{let o=e;for(;o;){let e=getComputedStyle(o).getPropertyValue(t);if(e)return parseFloat(e);o=o.parentElement}return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(t))||0};o(90141);let w=(0,c.Ge)("markdown-editor");function k(){let e=(0,n.Siq)({initial:{mode:"wysiwyg",toolbarVisible:!0,markup:u},md:{html:!0,linkify:!0,breaks:!0}}),t=(0,d.useRef)(null);(0,d.useEffect)(()=>{let e=document.querySelector(".g-md-editor-component__toolbar");e&&(t.current=e)},[]);let o=function(e){let{throttleDelay:t=100,offsetCssVariable:o="--g-md-sticky-offset-compensate",cssVariableScope:r=null}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[n,i]=(0,d.useState)(!1),[a,s]=(0,d.useState)(null);return(0,d.useEffect)(()=>{let n=p(e.current);if(e.current&&null===a){let t=f(r||document.documentElement,o);s(e.current.getBoundingClientRect().top-t)}let l=h()(()=>{null!==a&&i((a??0)<=(n===window?window.scrollY:n.scrollTop))},t);return n.addEventListener("scroll",l),()=>{n.removeEventListener("scroll",l),l.cancel()}},[e,a,o,t,r]),n}(t);return(0,r.jsx)(n.uHI,{autofocus:!0,className:w({sticky:o}),stickyToolbar:!1,wysiwygToolbarConfig:n.K5T,markupToolbarConfig:n.mAR.bF,settingsVisible:!0,editor:e})}let g=()=>{let{t:e,i18n:t}=(0,l.$G)("markdown-editor");return(0,r.jsxs)(i.rjZ,{className:w(),children:[(0,r.jsx)(i.X2j,{className:w("title"),children:(0,r.jsxs)(i.JXS,{sizes:12,className:w("heading"),children:[(0,r.jsx)("h1",{className:w("title"),children:e("title")}),(0,r.jsx)("div",{className:w("actions"),children:(0,r.jsx)(a.Button,{href:(0,c.n6)("/libraries/markdown-editor",t),className:w("library-button"),size:"xl",view:"outlined-contrast",children:e("goToLibrary")})})]})}),(0,r.jsx)(i.X2j,{children:(0,r.jsx)(i.JXS,{sizes:12,children:(0,r.jsx)(a.ThemeProvider,{theme:"dark",children:(0,r.jsx)(a.ToasterProvider,{toaster:s.m,children:(0,r.jsx)(k,{})})})})})]})}},58133:function(){},90141:function(){},91343:function(){}}]);