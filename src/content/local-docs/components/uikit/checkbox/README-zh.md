`Checkbox` 组件允许用户选中或取消选中特定值。

```tsx
import {Checkbox} from '@gravity-ui/uikit';
```

## 状态

`Checkbox` 可以有不同的状态：

- Checked：复选框已勾选。
- Disabled：复选框不可用。
- Indeterminate：复选框处于勾选和未勾选之间的中间状态。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 大小

使用 `size` 属性来管理 `Checkbox` 的大小。默认大小为 `m`。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 标签

您可以使用 `content` 属性为 `Checkbox` 分配标签，或者将其作为子属性提供。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 属性

| 名称           | 描述                                                                                                |                     类型                      | 默认值 |
| :------------- | :-------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | Checkbox 内容（通常是标签）。                                                                       |                  `ReactNode`                  |         |
| content        | Checkbox 内容（`children` 的替代选项）。                                                            |                  `ReactNode`                  |         |
| disabled       | 切换 Checkbox 的 `disabled` 状态。                                                                  |                   `boolean`                   | `false` |
| checked        | 切换 Checkbox 的 `checked` 状态。                                                                   |                   `boolean`                   | `false` |
| defaultChecked | 在组件挂载时设置初始的 `checked` 状态。                                                             |                   `boolean`                   | `false` |
| onUpdate       | 当用户更改 Checkbox 状态时触发，并将 `checked` 值作为回调参数提供。                                 |         `(checked: boolean) => void`          |         |
| onChange       | 当用户更改 Checkbox 状态时触发，并将更改事件作为回调参数提供。                                      |                  `Function`                   |         |
| onFocus        | 当 Checkbox 输入元素获得焦点时使用的事件处理程序。                                                  |                  `Function`                   |         |
| onBlur         | 当 Checkbox 输入元素失去焦点时使用的事件处理程序。                                                  |                  `Function`                   |         |
| size           | 确定 Checkbox 的大小。                                                                              |                    `m` `l`                    |   `m`   |
| id             | `id` HTML 属性                                                                                      |                   `string`                    |         |
| qa             | `data-qa` HTML 属性，用于测试                                                                       |                   `string`                    |         |
| style          | `style` HTML 属性                                                                                   |             `React.CSSProperties`             |         |
| className      | `class` HTML 属性                                                                                   |                   `string`                    |         |
| title          | `title` HTML 属性                                                                                   |                   `string`                    |         |
| name           | 输入元素的 `name` HTML 属性。                                                                       |                   `string`                    |         |
| value          | 输入元素的 `value` HTML 属性。                                                                      |                   `string`                    |         |
| indeterminate  | 切换 Checkbox 的 `indeterminate` 状态。                                                             |                   `boolean`                   | `false` |
| controlProps   | 底层输入元素的附加属性。                                                                            | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | 指向底层输入元素的 ref。                                                                            |         `React.Ref<HTMLInputElement>`         |         |