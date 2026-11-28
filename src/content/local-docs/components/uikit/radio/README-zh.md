`Radio` 组件允许用户从选项列表中选择单个选项。

```tsx
import {Radio} from '@gravity-ui/uikit';
```

## 状态

`Radio` 可以有以下状态：

- 选中：Radio 已被选中。
- 禁用：Radio 无法被选中。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 大小

要管理 `Radio` 的大小，请使用 `size` 属性。默认大小为 `m`。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 标签

您可以使用 `content` 属性为 `Radio` 分配标签，或者将其作为子属性提供。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 属性

| 名称           | 描述                                                                                                     |                     类型                      | 默认值 |
| :------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | 单选框的内容（通常是标签）。                                                                             |                  `ReactNode`                  |         |
| content        | 单选框的内容（`children` 的替代选项）。                                                                  |                  `ReactNode`                  |         |
| disabled       | 切换单选框的 `disabled` 状态。                                                                           |                   `boolean`                   | `false` |
| checked        | 切换单选框的 `checked` 状态。                                                                            |                   `boolean`                   | `false` |
| defaultChecked | 组件挂载时设置初始的选中状态。                                                                           |                   `boolean`                   | `false` |
| onUpdate       | 当用户更改单选框状态时触发，并将选中的值作为回调参数提供。                                               |         `(checked: boolean) => void`          |         |
| onChange       | 当用户更改单选框状态时触发，并将更改事件作为回调参数提供。                                               |                  `Function`                   |         |
| onFocus        | 当单选框输入元素获得焦点时使用的事件处理程序。                                                           |                  `Function`                   |         |
| onBlur         | 当单选框输入元素失去焦点时使用的事件处理程序。                                                           |                  `Function`                   |         |
| size           | 设置单选框的大小。                                                                                       |                    `m` `l`                    |   `m`   |
| id             | `id` HTML 属性                                                                                           |                   `string`                    |         |
| qa             | `data-qa` HTML 属性，用于测试。                                                                          |                   `string`                    |         |
| style          | `style` HTML 属性                                                                                        |             `React.CSSProperties`             |         |
| className      | `class` HTML 属性                                                                                        |                   `string`                    |         |
| title          | `title` HTML 属性                                                                                        |                   `string`                    |         |
| name           | 输入元素的 `name` HTML 属性。                                                                            |                   `string`                    |         |
| value          | 控件值。                                                                                                 |                   `string`                    |         |
| indeterminate  | 切换单选框的不确定状态。                                                                                 |                   `boolean`                   | `false` |
| controlProps   | 底层输入元素的附加属性。                                                                                 | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | 底层输入元素的 ref。                                                                                     |         `React.Ref<HTMLInputElement>`         |         |