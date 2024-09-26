/* eslint-disable */
export const main = `
&nbsp;\n&nbsp;
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
`;
/* eslint-enable */
