GRAVITY_TRANSLATION_BLOCK_0_END

用于显示定义列表的组件，术语和定义之间用点分隔。

```tsx
import {DefinitionList} from '@gravity-ui/uikit';
```

## 示例

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 属性

| 名称               | 描述                                                                                         |              类型              |   默认值    |
| :----------------- | :------------------------------------------------------------------------------------------- | :----------------------------: | :---------: |
| [children](#items) | 列表项                                                                                       |       `React.ReactNode`        |             |
| responsive         | 如果设置为 `true`，列表将占据其父级的 100% 宽度                                              |           `boolean`            |             |
| direction          | 如果设置为 `vertical`，内容将位于名称下方，列表将占据其父级的 100% 宽度                          | `'horizontal'` \| `'vertical'` | 'horizontal' |
| nameMaxWidth       | 术语的最大宽度                                                                               |            `number`            |             |
| contentMaxWidth    | 定义的最大宽度                                                                               |            `number`            |             |
| className          | 定义列表的类名                                                                               |            `string`            |             |

### Items

DefinitionList 的子项应该是 `DefinitionList.Item` 类型的组件，具有以下属性：

| 名称     | 描述                                       |           类型            | 默认值 |
| -------- | :----------------------------------------- | :-----------------------: | :----: |
| name     | 术语                                       |        `ReactNode`        |        |
| children | 定义                                       |        `ReactNode`        |        |
| copyText | 如果设置，将显示复制此文本的图标           |         `string`          |        |
| note     | 如果设置，将在术语旁边显示 HelpMark        | `string \| HelpMarkProps` |        |

## CSS API

| 名称                           | 描述                       |
| :----------------------------- | :------------------------- |
| `--g-definition-list-item-gap` | 定义列表项之间的间距       |