<!--GITHUB_BLOCK-->

# Dialog

<!--/GITHUB_BLOCK-->

`Dialog` 是一个模态窗口，包含标题、正文和页脚操作，用于确认、表单和提示。它构建在 `Modal` 之上。

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## 用法

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog
  onClose={() => setOpen(false)}
  open={open}
  onEnterKeyDown={() => {
    alert('onEnterKeyDown');
  }}
  aria-labelledby={dialogTitleId}
>
  <Dialog.Header caption="Caption" id={dialogTitleId} />
  <Dialog.Body>Dialog.Body</Dialog.Body>
  <Dialog.Footer
    onClickButtonCancel={() => setOpen(false)}
    onClickButtonApply={() => alert('onApply')}
    textButtonApply="Apply"
    textButtonCancel="Cancel"
  />
</Dialog>;
```

## 属性

| 名称                  | 描述                                                                                             | 类型                                                                                             | 默认值      |
| :-------------------- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- | :---------- |
| open                  | 当前对话框状态                                                                                   | `boolean`                                                                                        |             |
| onEscapeKeyDown       | Escape 键按下事件处理程序                                                                        | `(event: KeyboardEvent) => void`                                                                 |             |
| onEnterKeyDown        | Enter 键按下事件处理程序                                                                         | `(event: KeyboardEvent) => void`                                                                 |             |
| onOutsideClick        | 点击对话框外部的事件处理程序                                                                     | `(event: MouseEvent) => void`                                                                    |             |
| onClose               | 关闭对话框的事件处理程序                                                                         | `(event: MouseEvent or KeyboardEvent,` `reason: ModalCloseReason or "closeButtonClick") => void` |             |
| className             | 对话框内容包装器的 `className`                                                                   | `string`                                                                                         |             |
| modalClassName        | 对话框嵌入的模态框的 `className`                                                                 | `string`                                                                                         |             |
| size                  | 对话框大小。已弃用。请使用 `maxWidth` + `fullWidth` 来实现相同效果。                               | `'s'` `'m'` `'l'`                                                                                |             |
| maxWidth              | 对话框内容的最大宽度                                                                             | `'s'` `'m'` `'l'`                                                                                |             |
| fullWidth             | 如果为 `true`，内容将拉伸到 `maxWidth`                                                           | `boolean`                                                                                        |             |
| disableBodyScrollLock | 切换是否锁定页面滚动                                                                             | `boolean`                                                                                        | `false`     |
| disableEscapeKeyDown  | 切换是否禁用 Escape 键按下事件                                                                   | `boolean`                                                                                        | `false`     |
| disableOutsideClick   | 切换是否禁用点击外部事件                                                                         | `boolean`                                                                                        | `false`     |
| keepMounted           | 切换对话框是否保持挂载状态                                                                       | `boolean`                                                                                        | `false`     |
| hasCloseButton        | 切换对话框右上角是否有关闭图标                                                                   | `boolean`                                                                                        | `true`      |
| aria-labelledby       | `<Dialog/>` 标题 ID。使用 `<Dialog.Header/>` 的 `id` 属性为标题设置 ID                               | `string`                                                                                         |             |
| aria-label            | 对话框的可访问性标签。如果标题对用户可见，请设置 `aria-labelledby`                                 | `string`                                                                                         |             |
| container             | 对话框的容器元素                                                                                 | `HTMLElement`                                                                                    |             |
| qa                    | 对话框嵌入的模态框的 `data-qa` 属性值                                                            | `string`                                                                                         |             |
| contentOverflow       | 确定 `Dialog` 内部是否有滚动指示器，还是会随着内容变大                                           | `'visible'` `'auto'`                                                                             | `'visible'` |
