<!--GITHUB_BLOCK-->

# Switch

<!--/GITHUB_BLOCK-->

`Switch` 组件用于在两种状态之间切换：通常是 **开启** 和 **关闭**，或者 **启用** 和 **禁用**。

```tsx
import {Switch} from '@gravity-ui/uikit';
```

## 状态

`Switch` 可以有不同的状态：

- 选中 (Checked)：当开关处于 **开启** 状态时。
- 禁用 (Disabled)：当开关不可用时。

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="l" checked={false}>
                Unchecked
            </Switch>
            <Switch size="l" checked>
                Checked
            </Switch>
            <Switch size="l" disabled>
                Disabled
            </Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="l" checked={false}>Unchecked</Switch>
<Switch size="l" checked>Checked</Switch>
<Switch size="l" disabled>Disabled</Switch>
```

<!--/GITHUB_BLOCK-->

## 大小

使用 `size` 属性来管理 `Switch` 的大小。默认大小为 `m`。

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="s">S Size</Switch>
            <Switch size="m">M Size</Switch>
            <Switch size="l">L Size</Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="s">S Size</Switch>
<Switch size="m">M Size</Switch>
<Switch size="l">L Size</Switch>
```

<!--/GITHUB_BLOCK-->

## 标签

您可以使用 `content` 属性为 `Switch` 分配一个标签，或者将其作为子属性提供。

<!--SANDBOX
import {Box, Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Switch content="Content" size="l" />
            <Box spacing={{mt: 2}}>
                <Switch size="l">
                    <span>Content as children</span>
                </Switch>
            </Box>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Switch size="l">
      <span>Content as children</span>
    </Switch>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## 属性

| 名称           | 描述                                                                                                     |                     类型                      | 默认值 |
| :------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | 开关的内容（通常是标签）                                                                                 |                  `ReactNode`                  |         |
| content        | 开关的内容（`children` 的替代选项）                                                                      |                  `ReactNode`                  |         |
| disabled       | 切换开关的 `disabled` 状态                                                                               |                   `boolean`                   | `false` |
| loading        | 切换开关的 `loading` 状态                                                                                |                   `boolean`                   | `false` |
| checked        | 切换开关的 `checked` 状态                                                                                |                   `boolean`                   | `false` |
| defaultChecked | 组件挂载时设置初始的 `checked` 状态                                                                      |                   `boolean`                   | `false` |
| onUpdate       | 当用户更改开关状态时触发，并将 `checked` 值作为回调参数提供                                                |         `(checked: boolean) => void`          |         |
| onChange       | 当用户更改开关状态时触发，并将更改事件作为回调参数提供                                                   |                  `Function`                   |         |
| onFocus        | 当开关输入元素获得焦点时使用的事件处理程序                                                               |                  `Function`                   |         |
| onBlur         | 当开关输入元素失去焦点时使用的事件处理程序                                                               |                  `Function`                   |         |
| size           | 设置开关的大小                                                                                           |                  `s` `m` `l`                  |   `m`   |
| id             | `id` HTML 属性                                                                                           |                   `string`                    |         |
| qa             | `data-qa` HTML 属性，用于测试                                                                            |                   `string`                    |         |
| style          | `style` HTML 属性                                                                                        |             `React.CSSProperties`             |         |
| className      | `class` HTML 属性                                                                                        |                   `string`                    |         |
| title          | `title` HTML 属性                                                                                        |                   `string`                    |         |
| name           | 输入元素的 `name` HTML 属性                                                                              |                   `string`                    |         |
| value          | 输入元素的 `value` HTML 属性                                                                             |                   `string`                    |         |
| indeterminate  | 切换开关的不确定状态                                                                                     |                   `boolean`                   | `false` |
| controlProps   | 基础输入元素的附加属性                                                                                   | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | 基础输入元素的 ref                                                                                       |         `React.Ref<HTMLInputElement>`         |         |
