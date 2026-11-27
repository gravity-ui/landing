`Dialog` 是一个带有标题、内容和底部操作的模态窗口，用于确认、表单和提示。它构建在 `Modal` 之上。

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## 用法

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog onOpenChange={setOpen} open={open} aria-labelledby={dialogTitleId}>
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

| 名称                  | 描述                                                                                             | 类型                                                                | 默认值     |
| :-------------------- | :----------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :---------- |
| open                  | 当前对话框状态                                                                                   | `boolean`                                                           |             |
| onOpenChange          | 处理对话框打开状态的变化                                                                           | `(open: boolean, event?: Event, reason?: OpenChangeReason) => void` |             |
| initialFocus          | 初始焦点目标，包括页脚的 `cancel` 或 `apply` 按钮                                                  | `ModalProps['initialFocus'] \| 'cancel' \| 'apply'`                 |             |
| returnFocus           | 控制关闭后焦点返回的位置                                                                           | `ModalProps['returnFocus']`                                         |             |
| className             | 对话框内容包装器的 `className`                                                                     | `string`                                                            |             |
| modalClassName        | 对话框嵌入的模态框的 `className`                                                                   | `string`                                                            |             |
| maxWidth              | 对话框内容的最大宽度                                                                               | `'s'` `'m'` `'l'`                                                   |             |
| fullWidth             | 如果为 `true`，内容将拉伸到 `maxWidth`                                                               | `boolean`                                                           |             |
| disableBodyScrollLock | 切换是否锁定页面滚动                                                                               | `boolean`                                                           | `false`     |
| disableTransition     | 如果为 `true`，则跳过打开和关闭动画                                                                  | `boolean`                                                           | `false`     |
| disableEscapeKeyDown  | 切换是否禁用 Escape 键按下                                                                         | `boolean`                                                           | `false`     |
| disableOutsideClick   | 切换是否禁用点击外部区域                                                                           | `boolean`                                                           | `false`     |
| keepMounted           | 切换是否在挂载状态下保留对话框                                                                       | `boolean`                                                           | `false`     |
| hasCloseButton        | 切换对话框右上角是否显示关闭按钮（叉号图标）                                                         | `boolean`                                                           | `true`      |
| aria-labelledby       | `<Dialog/>` 的标题 ID。使用 `<Dialog.Header/>` 的 `id` 属性来设置标题的 ID                               | `string`                                                            |             |
| aria-label            | 对话框的 a11y 标签。如果标题对用户可见，请设置 `aria-labelledby`                                      | `string`                                                            |             |
| container             | 对话框的容器元素                                                                                   | `HTMLElement`                                                       |             |
| qa                    | 对话框嵌入的模态框的 `data-qa` 属性值                                                              | `string`                                                            |             |
| contentOverflow       | 决定 `Dialog` 内部是否有滚动条指示器，还是会随着内容变大                                               | `'visible'` `'auto'`                                                | `'visible'` |
GRAVITY_TRANSLATION_BLOCK_1_END

`onOpenChange` 接收 `escape-key`（Escape 键）、`outside-press`（外部点击）、`click`（关闭按钮）和 `undefined`（屏幕阅读器关闭按钮）。当 `open` 变为 `false` 时关闭，无论原因是什么。

GRAVITY_TRANSLATION_BLOCK_1_END