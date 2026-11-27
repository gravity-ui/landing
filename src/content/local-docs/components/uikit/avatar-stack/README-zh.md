<!--GITHUB_BLOCK-->

# AvatarStack

<!--/GITHUB_BLOCK-->

此组件用于堆叠重叠的图像，并可选择添加一个控件。它通常指用户头像。

```ts
import {AvatarStack} from '@gravity-ui/uikit';
```

## 用法

基本上，`AvatarStack` 在渲染组件方面没有任何限制。请参阅下面的常见用法示例：

```tsx
<AvatarStack>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```

## 属性

| 名称        | 描述                                                                                                                                                      |                        类型                        |  默认值  |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-------: | --- |
| max         | 确定在显示“更多”按钮之前可见的头像数量。如果头像数量比 `max` 少一个，则“更多”按钮将被替换为一个头像。 |                      `number`                      |     3     |
| overlapSize | 确定每个项目应重叠下一个项目的程度。对于 `xs` 到 `m` 大小的 `Avatar`，您可能希望使用 `s`；对于 `l` 大小的，使用 `m`；对于 `xl` 大小的，使用 `l`。 |                   `s`, `m`, `l`                    |    `s`    |
| size        | 显示额外头像的控件的大小。其值与 `Avatar` 的大小相同。                                                                                                      |                    `AvatarSize`                    |           |
| className   | 根 DOM 节点的类名                                                                                                                                  |                      `string`                      |           |
| children    | 头像列表，也可以包含额外的包装器                                                                                                                |                     `Object[]`                     |           |
| renderMore  | 显示额外头像的控件的自定义渲染                                                                                                           | `function(options: {count: number}): ReactElement` |           |
| moreVariant | 显示额外“计数器”的默认控件的变体                                                                                                            |                  `counter`,`dots`                  | `counter` |     |

### AvatarStack.MoreButton

用于覆盖“更多”按钮的组件

```tsx
<AvatarStack
  renderMore={({count}) => (
    <Tooltip content={'More users'}>
      <AvatarStack.MoreButton count={count} />
    </Tooltip>
  )}
>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```
