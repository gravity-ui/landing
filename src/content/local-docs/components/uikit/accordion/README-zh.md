<!--GITHUB_BLOCK-->

# Accordion

<!--/GITHUB_BLOCK-->

Accordion 组件允许您创建可折叠的内容面板，用户可以显示或隐藏信息部分。这对于以紧凑的方式组织大量内容非常有用。

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Accordion>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 控制手风琴状态

您可以通过根组件的 `value` 和 `onUpdate` 属性，或按项目来控制手风琴状态。

从根组件控制状态的示例：

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="Settings" value="item1">
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item summary="Notifications" value="item2">
                Manage notification preferences
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
      <Accordion.Item summary="Settings" value="item1">
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" value="item2">
        Manage notification preferences
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
                summary="Settings"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item
                summary="Notifications"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Manage notification preferences
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
      <Accordion.Item summary="Settings" onUpdate={setItem1} value="item1" expanded={item1}>
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" onUpdate={setItem2} value="item2" expanded={item2}>
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

## 尺寸

使用 `size` 属性来控制 `Accordion` 的尺寸。默认尺寸为 `m`。

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="Medium Size">Content for medium accordion</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Large Size">Content for large accordion</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Extra Large Size">
                    Content for extra large accordion
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Medium Size">
        Content for medium accordion
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Large Size">
        Content for large accordion
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Extra Large Size">
        Content for extra large accordion
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
                <Accordion.Item summary="Solid View">Content with solid background</Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Top-Bottom View">
                    Content with top-bottom borders
                </Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
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

## 箭头位置

`end`：箭头位于标题的末尾（默认使用）。

`start`：箭头位于标题的开头。

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Arrow at End">Content with arrow at the end</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Arrow at Start">
                    Content with arrow at the start
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

## 多项

`multiple` 属性允许同时展开多个手风琴项目。

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
            <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
            <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
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

## 自定义摘要

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
                Content with custom summary component
            </Accordion.Item>
            <Accordion.Item summary="Regular Summary">
                Content with regular summary prop
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

## 禁用状态

可以使用 `disabled` 属性禁用单个手风琴项目。

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

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

## 属性

### Accordion

| 名称          | 描述                                       |            类型            |  默认值  |
| :------------ | :----------------------------------------- | :------------------------: | :-------: |
| size          | 手风琴尺寸                                 |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | 手风琴外观                                 |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | 允许同时展开多个项目                       |         `boolean`          |  `false`  |
| arrowPosition | 箭头指示器位置                             |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | 非受控状态的默认值                         | `string` `string[]` `null` |           |
| value         | 受控状态的当前值                           | `string` `string[]` `null` |           |
| onUpdate      | 状态更改时调用的回调函数                   |         `Function`         |           |
| ariaLevel     | 可访问性的标题级别                         |          `number`          |    `3`    |
| className     | CSS 类名                                   |          `string`          |           |
| qa            | HTML `data-qa` 属性，用于测试              |          `string`          |           |

### Accordion.Item

| 名称            | 描述                             |       类型        | 默认值 |
| :-------------- | :------------------------------- | :---------------: | :----: |
| value           | 项目的唯一标识符                 |     `string`      |        |
| summary         | 手风琴项目标题                   | `React.ReactNode` |        |
| expanded        | 受控展开状态                     |     `boolean`     |        |
| defaultExpanded | 默认展开状态                     |     `boolean`     |        |
| disabled        | 禁用手风琴项目                   |     `boolean`     | `false` |
| keepMounted     | 即使折叠也保留内容在 DOM 中      |     `boolean`     |        |
| onUpdate        | 项目状态更改时调用的回调函数     |    `Function`     |        |
| className       | CSS 类名                         |     `string`      |        |
| qa              | HTML `data-qa` 属性，用于测试    |     `string`      |        |

### Accordion.Summary

| 名称     | 描述                                                                             |                      类型                       |                                          默认值                                          |
| :------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | 自定义摘要渲染函数                                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | HTML `data-qa` 属性，用于测试。仅当 `qa` 传递给 Accordion.Item 时才有效 |                    `string`                     | 如果 `qa` 传递给 Accordion.Item，则为 `${accordion-item}-summary`，否则为 `disclosure-summary` |

## CSS API

| 名称                           | 描述                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | 手风琴的内联（水平）内边距 |
