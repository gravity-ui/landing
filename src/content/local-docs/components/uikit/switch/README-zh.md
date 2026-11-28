GRAVITY_TRANSLATION_BLOCK_0_END

`Switch` 组件用于在两种状态之间切换：通常是 **开启** 和 **关闭**，或者 **启用** 和 **禁用**。

```tsx
import {Switch} from '@gravity-ui/uikit';
```

## 状态

`Switch` 可以有不同的状态：

- 选中（Checked）：当开关处于 **开启** 状态时。
- 禁用（Disabled）：当开关不可用时。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 大小

使用 `size` 属性来管理 `Switch` 的大小。默认大小为 `m`。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 标签

您可以使用 `content` 属性为 `Switch` 分配一个标签，或者将其作为子属性提供。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 属性

| 名称           | 描述                                                                                                     |                     类型                      | 默认值 |
| :------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | Switch 的内容（通常是标签）                                                                              |                  `ReactNode`                  |         |
| content        | Switch 的内容（`children` 的替代选项）                                                                   |                  `ReactNode`                  |         |
| disabled       | 切换 `disabled` 状态                                                                                     |                   `boolean`                   | `false` |
| loading        | 切换 `loading` 状态                                                                                      |                   `boolean`                   | `false` |
| checked        | 切换 `checked` 状态                                                                                      |                   `boolean`                   | `false` |
| defaultChecked | 组件挂载时设置初始的 `checked` 状态                                                                      |                   `boolean`                   | `false` |
| onUpdate       | 当用户更改 switch 状态时触发，并将 `checked` 值作为回调参数提供                                            |         `(checked: boolean) => void`          |         |
| onChange       | 当用户更改 switch 状态时触发，并将更改事件作为回调参数提供                                               |                  `Function`                   |         |
| onFocus        | 当 switch 输入元素获得焦点时使用的事件处理程序                                                          |                  `Function`                   |         |
| onBlur         | 当 switch 输入元素失去焦点时使用的事件处理程序                                                          |                  `Function`                   |         |
| size           | 设置 switch 的大小                                                                                       |                  `s` `m` `l`                  |   `m`   |
| id             | `id` HTML 属性                                                                                           |                   `string`                    |         |
| qa             | `data-qa` HTML 属性，用于测试                                                                            |                   `string`                    |         |
| style          | `style` HTML 属性                                                                                        |             `React.CSSProperties`             |         |
| className      | `class` HTML 属性                                                                                        |                   `string`                    |         |
| title          | `title` HTML 属性                                                                                        |                   `string`                    |         |
| name           | 输入元素的 `name` HTML 属性                                                                              |                   `string`                    |         |
| value          | 输入元素的 `value` HTML 属性                                                                             |                   `string`                    |         |
| indeterminate  | 切换 `indeterminate` 状态                                                                                |                   `boolean`                   | `false` |
| controlProps   | 底层输入元素的附加属性                                                                                   | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | 底层输入元素的 ref                                                                                       |         `React.Ref<HTMLInputElement>`         |         |