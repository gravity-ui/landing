Tabs 组件用于探索、组织内容和切换不同视图。

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### 组件

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

提供选项卡选择功能的组件

## 属性

| 名称     | 描述                                     |           类型            | 默认值 |
| :------- | :--------------------------------------- | :-----------------------: | :----: |
| children | 选项卡和选项卡面板列表，可能包含一些包装器 |     `React.ReactNode`     |        |
| value    | 当前活动的选项卡值                     |         `string`          |        |
| onUpdate | 更新选项卡处理函数                     | `(value: string) => void` |        |

GRAVITY_TRANSLATION_BLOCK_2_END

## TabList

用作一组 `tabs` 的容器组件

### 尺寸

使用 `size` 属性控制 `tabs` 的尺寸。默认尺寸为 `m`。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 属性

`TabList` 除了以下属性外，还接受任何有效的 `div` 元素属性：

| 名称            | 描述                                                                            |               类型               | 默认值  |
| :-------------- | :------------------------------------------------------------------------------ | :------------------------------: | :-----: |
| children        | 选项卡列表，可能包含一些包装器                                                  |        `React.ReactNode`         |         |
| value           | 当前活动的选项卡值                                                              |             `string`             |         |
| onUpdate        | 更新选项卡处理函数                                                              |    `(value: string) => void`     |         |
| className       | 元素的 CSS 类名                                                                 |             `string`             |         |
| activateOnFocus | 聚焦时激活选项卡。仅当面板内容可以立即显示时才使用此选项                        |            `boolean`             | `false` |
| size            | 元素尺寸                                                                        |        `"m"` `"l"` `"xl"`        |  `"m"`  |
| contentOverflow | 如何处理水平方向上不适合的项（换行、滚动或“更多”菜单）                          | `"wrap"` `"scroll"` `"collapse"` | `"wrap"`|
| moreLabel       | 当活动选项卡在列表中可见时，用于折叠溢出触发器的标签                              |        `React.ReactNode`         | `"More"`|
| qa              | HTML `data-qa` 属性，用于测试                                                   |             `string`             |         |

GRAVITY_TRANSLATION_BLOCK_5_END

## Tab

此组件用于渲染选项卡项。

### 图标

如果您需要为选项卡项显示图标，请使用此项。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### 状态

选项卡项具有禁用标志。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### 计数器

如果您需要为选项卡项显示数字，请使用此项。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### 标签

如果您需要为选项卡项显示标签，请使用此项。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### 内容溢出

如果您需要折叠选项卡项，请使用此项。

GRAVITY_TRANSLATION_BLOCK_14_END

### 属性

`Tab` 除了以下属性外，还接受任何有效的 `button` 或 `a` 元素属性：

| 名称      | 描述                             |        类型         | 默认值 |
| :-------- | :------------------------------- | :-----------------: | :-----: |
| value     | 标签值                           |      `string`       |         |
| title     | 标签标题                         |      `string`       |         |
| icon      | 开头显示的图标                   |  `React.ReactNode`  |         |
| counter   | 结尾显示的内容                   |  `number` `string`  |         |
| href      | 要链接到的 URL                   |      `string `      |         |
| label     | 结尾显示的 `<Label>`             |  `React.ReactNode`  |         |
| disabled  | 非活动状态                       |      `boolean`      |         |
| component | 覆盖根组件                       | `React.ElementType` |         |
| children  | 标签内容                         |  `React.ReactNode`  |         |
| qa        | HTML `data-qa` 属性，用于测试     |      `string`       |         |

## TabPanel

是与标签关联的内容的容器元素

### 属性

`TabPanel` 除了接受任何有效的 `div` 元素属性外，还接受以下属性：

| 名称     | 描述       |       类型        | 默认值 |
| :------- | :--------- | :---------------: | :-----: |
| children | 面板内容   | `React.ReactNode` |         |
| value    | 活动标签值 |     `string`      |         |
| qa       | HTML `data-qa` 属性，用于测试 |     `string`      |         |

## CSS API

| 名称                             | 描述           |
| :------------------------------- | :------------- |
| `--g-tabs-border-width`          | 标签边框宽度   |
| `--g-tabs-item-height`           | 标签项高度     |
| `--g-tabs-item-border-width`     | 标签项边框宽度 |
| `--g-tabs-item-gap`              | 标签间距       |
| `--g-tabs-vertical-item-height`  | 垂直标签项高度 |
| `--g-tabs-vertical-item-padding` | 垂直标签项内边距 |