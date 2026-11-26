<!--/GITHUB_BLOCK-->

手风琴组件允许您创建可折叠的内容面板，用户可以在其中显示或隐藏信息部分。这对于以紧凑的方式组织大量内容非常有用。

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## 基本示例

```tsx
<Accordion>
  <Accordion.Item summary="第一个项目">第一个项目的内容</Accordion.Item>
  <Accordion.Item summary="第二个项目">第二个项目的内容</Accordion.Item>
  <Accordion.Item summary="第三个项目">第三个项目的内容</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 控制手风琴状态

您可以通过根组件的 `value` 和 `onUpdate` 属性，或按项目来控制手风琴的状态。

从根组件控制状态的示例：

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="设置" value="item1">
                配置您的应用程序设置
            </Accordion.Item>
            <Accordion.Item summary="通知" value="item2">
                管理通知偏好设置
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [value, setValue] = React.useState('item1');

  return (
    <Accordion value={value} onUpdate={setValue}>
      <Accordion.Item summary="设置" value="item1">
        配置您的应用程序设置
      </Accordion.Item>
      <Accordion.Item summary="通知" value="item2">
        管理通知偏好设置
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

通过 `expanded` 属性按项目控制状态的示例：

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="设置"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                配置您的应用程序设置
            </Accordion.Item>
            <Accordion.Item
                summary="通知"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                管理通知偏好设置
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [item1, setItem1] = React.useState(true);
  const [item2, setItem2] = React.useState(false);
  return (
    <Accordion>
      <Accordion.Item summary="设置" onUpdate={setItem1} value="item1" expanded={item1}>
        配置您的应用程序设置
      </Accordion.Item>
      <Accordion.Item summary="通知" onUpdate={setItem2} value="item2" expanded={item2}>
        管理通知偏好设置
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

## 大小

使用 `size` 属性来控制 `Accordion` 的大小。默认大小为 `m`。

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="中等大小">中等手风琴的内容</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="大号尺寸">大号手风琴的内容</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="特大号尺寸">
                    特大号手风琴的内容
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="中等大小">
        中等手风琴的内容
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="大号尺寸">
        大号手风琴的内容
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="特大号尺寸">
        特大号手风琴的内容
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 视图

`solid`：带背景的主视图（默认使用）。

`top-bottom`：带顶部和底部边框的视图。

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion view="solid">
                <Accordion.Item summary="Solid View">内容，背景为实心</Accordion.Item>
                <Accordion.Item summary="Another Item">更多内容</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Top-Bottom View">
                    内容，带有顶部和底部边框
                </Accordion.Item>
                <Accordion.Item summary="Another Item">更多内容</Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion view="solid">
    <Accordion.Item summary="Solid View">
        Content with solid background
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
<Accordion view="top-bottom">
    <Accordion.Item summary="Top-Bottom View">
        Content with top-bottom borders
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Arrow Position

`end`: 箭头位于标题的末尾（默认）。

`start`: 箭头位于标题的开头。

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Arrow at End">内容，箭头在末尾</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Arrow at Start">
                    内容，箭头在开头
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion arrowPosition="end">
    <Accordion.Item summary="Arrow at End">
        Content with arrow at the end
    </Accordion.Item>
</Accordion>
<Accordion arrowPosition="start">
    <Accordion.Item summary="Arrow at Start">
        Content with arrow at the start
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Multiple

`multiple` 属性允许同时展开多个手风琴项。

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="First Item">第一个项目的内​​容</Accordion.Item>
            <Accordion.Item summary="Second Item">第二个项目的内​​容</Accordion.Item>
            <Accordion.Item summary="Third Item">第三个项目的内​​容</Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Custom Summary

使用 `Accordion.Summary` 组件创建自定义标题。

<!--SANDBOX
import {Accordion, Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item value="custom">
                <Accordion.Summary>
                    {(props) => (
                        <Button {...props} view="flat" width="max">
                            Custom Summary Button
                        </Button>
                    )}
                </Accordion.Summary>
                带有自定义摘要组件的内容
            </Accordion.Item>
            <Accordion.Item summary="Regular Summary">
                带有常规 summary 属性的内容
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item value="custom">
    <Accordion.Summary>
      {(props) => (
        <Button {...props} view="flat" width="max">
          <Icon data={Settings} size={16} />
          Custom Summary Button
        </Button>
      )}
    </Accordion.Summary>
    Content with custom summary component
  </Accordion.Item>
  <Accordion.Item summary="Regular Summary">Content with regular summary prop</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Disabled State

可以使用 `disabled` 属性禁用单个手风琴项。

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

```jsx
export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="Active Item">
                This item is active and can be expanded
            </Accordion.Item>
            <Accordion.Item summary="Disabled Item" disabled>
                This item is disabled and cannot be expanded
            </Accordion.Item>
        </Accordion>
    );
}
```

SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="Active Item">This item is active and can be expanded</Accordion.Item>
  <Accordion.Item summary="Disabled Item" disabled>
    This item is disabled and cannot be expanded
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Properties

### Accordion

| Name          | Description                                        |            Type            |  Default  |
| :------------ | :------------------------------------------------- | :------------------------: | :-------: |
| size          | Accordion size                                     |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | Accordion appearance                               |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | Allow multiple items to be expanded simultaneously |         `boolean`          |  `false`  |
| arrowPosition | Arrow indicator position                           |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | Default value for uncontrolled state               | `string` `string[]` `null` |           |
| value         | Current value for controlled state                 | `string` `string[]` `null` |           |
| onUpdate      | Callback function called when state changes        |         `Function`         |           |
| ariaLevel     | Heading level for accessibility                    |          `number`          |    `3`    |
| className     | CSS class name                                     |          `string`          |           |
| qa            | HTML `data-qa` attribute, used for testing         |          `string`          |           |

### Accordion.Item

| Name            | Description                                      |       Type        | Default |
| :-------------- | :----------------------------------------------- | :---------------: | :-----: |
| value           | Unique identifier for the item                   |     `string`      |         |
| summary         | Accordion item header                            | `React.ReactNode` |         |
| expanded        | Controlled expanded state                        |     `boolean`     |         |
| defaultExpanded | Default expanded state                           |     `boolean`     |         |
| disabled        | Disables the accordion item                      |     `boolean`     | `false` |
| keepMounted     | Keep content in DOM even when collapsed          |     `boolean`     |         |
| onUpdate        | Callback function called when item state changes |    `Function`     |         |
| className       | CSS class name                                   |     `string`      |         |
| qa              | HTML `data-qa` attribute, used for testing       |     `string`      |         |

### Accordion.Summary

| 名称     | 描述                                                                             |                      类型                       |                                          默认值                                          |
| :------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | 自定义摘要渲染函数                                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | HTML `data-qa` 属性，用于测试。仅当 `qa` 传递给 Accordion.Item 时生效 |                    `string`                     | 如果 `qa` 传递给 Accordion.Item，则为 `${accordion-item}-summary`，否则为 `disclosure-summary` |

## CSS API

| 名称                           | 描述                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | 手风琴的内联（水平）内边距 |