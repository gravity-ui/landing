<!--GITHUB_BLOCK-->

# Disclosure

<!--/GITHUB_BLOCK-->

`Disclosure` 是一个可折叠组件，允许显示和隐藏其嵌套内容。

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Disclosure summary="Summary">Content</Disclosure>
```

<!--/GITHUB_BLOCK-->

## 控制展开状态

您可以使用 `expanded` 和 `onUpdate` 属性来控制展开状态。

受控组件示例：

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" defaultExpanded>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledDisclosure() {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <Disclosure summary="Summary" expanded={expanded} onUpdate={setExpanded}>
      Content
    </Disclosure>
  );
}
```

<!--/GITHUB_BLOCK-->

## 大小

使用 `size` 属性来控制 `Disclosure` 的大小。默认大小为 `m`。

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Middle size" size="m">
                Content
            </Disclosure>
            <Disclosure summary="Large size" size="l">
                Content
            </Disclosure>
            <Disclosure summary="Extra large size" size="xl">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Middle size" size="m">
  Content
</Disclosure>
<Disclosure summary="Large size" size="l">
  Content
</Disclosure>
<Disclosure summary="Extra large size" size="xl">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## 箭头位置

`start`: 箭头位于标题的开头（默认使用）。

`end`: 箭头位于标题的末尾。

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Summary with start arrow" arrowPosition="start">
                Content
            </Disclosure>
            <Disclosure summary="Summary with end arrow" arrowPosition="end">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary with start arrow" arrowPosition="start">
  Content
</Disclosure>
<Disclosure summary="Summary with end arrow" arrowPosition="end">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## 自定义内容

使用 `Disclosure.Summary` 组件创建自定义标题，并使用 `Disclosure.Details` 来填充自定义内容。

<!--SANDBOX
import {Check} from '@gravity-ui/icons';
import {Button, Disclosure, Flex, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure>
                <Disclosure.Summary>
                    {(props) => (
                        <Button {...props}>
                            <Icon data={Check} size={14} />
                            Custom summary
                            <Icon data={Check} size={14} />
                        </Button>
                    )}
                </Disclosure.Summary>
                <div>Custom details</div>
                <div>More custom details</div>
            </Disclosure>
            <Disclosure summary="Summary">
                <Disclosure.Summary>
                    {(_props, defaultButton) => (
                        <Flex gap={4}>
                            {defaultButton}
                            <Icon data={Check} size={14} />
                        </Flex>
                    )}
                </Disclosure.Summary>
                <Disclosure.Details>Custom Details</Disclosure.Details>
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(props) => (
      <Button {...props}>
        <Icon data={Check} size={14} />
        Custom summary
        <Icon data={Check} size={14} />
      </Button>
    )}
  </Disclosure.Summary>
  <div>Custom details</div>
  <div>More custom details</div>
</Disclosure>
```

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(_props, defaultButton) => (
      <Flex gap={4}>
        {defaultButton}
        <Icon data={Check} size={14} />
      </Flex>
    )}
  </Disclosure.Summary>
  <Disclosure.Details>Custom Details</Disclosure.Details>
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## 禁用状态

可以使用 `disabled` 属性禁用 `Disclosure`。

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" disabled>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary" disabled>
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## 属性

### Disclosure

| 名称             | 描述                                       | 类型                                                  | 默认值    |
| :--------------- | :----------------------------------------- | :---------------------------------------------------- | :-------- |
| size             | 组件大小                                   | `"m"` `"l"` `"xl"`                                    | `"m"`     |
| className        | 根元素的 CSS 类名                          | `string`                                              |           |
| disabled         | 禁用状态                                   | `boolean`                                             | `false`   |
| defaultExpanded  | 默认展开状态                               | `boolean`                                             | `false`   |
| expanded         | 受控展开状态                               | `boolean`                                             |           |
| arrowPosition    | 控制箭头位置                               | `"start"` `"end"`                                     | `"start"` |
| summary          | 内容摘要                                   | `React.ReactNode`                                     |           |
| keepMounted      | 即使折叠也保持内容在 DOM 中                | `boolean`                                             | `true`    |
| onUpdate         | 展开/折叠状态更改时触发的回调。            | `(expanded: boolean) => void`                         |           |
| onSummaryKeyDown | 摘要获得焦点时触发键盘事件的回调。         | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |           |
| children         | 内容                                       | `React.ReactNode`                                     |           |
| qa               | 测试标识符                                 | `string`                                              |           |

### Disclosure.Summary

| 名称     | 描述                                  | 类型                                            | 默认值               |
| :------- | :------------------------------------ | :---------------------------------------------- | :------------------- |
| children | 渲染函数                              | `(props, defaultSummary) => React.ReactElement` |                      |
| qa       | 测试标识符                            | `string`                                        | `disclosure-summary` |

### Disclosure.Details

| 名称     | 描述         | 类型              | 默认值           |
| :------- | :----------- | :---------------- | :--------------- |
| children | 内容         | `React.ReactNode` |                  |
| qa       | 测试标识符   | `string`          | `disclosure-details` |

## CSS API

| 名称                                 | 描述                                       |
| :----------------------------------- | :----------------------------------------- |
| `--g-disclosure-text-color`          | 内容摘要的文本颜色                         |
| `--g-disclosure-text-color-disabled` | 禁用状态下内容摘要的文本颜色               |
