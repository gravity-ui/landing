`SegmentedRadioGroup` 组件用于创建一组单选按钮，用户可以从中选择一个选项。

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### 禁用状态

GRAVITY_TRANSLATION_BLOCK_0_END

### 尺寸

使用 `size` 属性来管理 `SegmentedRadioGroup` 的尺寸。默认尺寸为 `m`。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### 宽度

使用 `width` 属性来管理 `SegmentedRadioGroup` 的宽度：

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 属性

| 名称         | 描述                                                                                             |                类型                | 默认值 |
| :----------- | :----------------------------------------------------------------------------------------------- | :--------------------------------: | :-----: |
| children     | 单选按钮的内容。                                                                                 |            `ReactNode`             |         |
| disabled     | 切换单选按钮的 `disabled` 状态。                                                                 |             `boolean`              | `false` |
| options      | 单选按钮的选项。                                                                                 | `SegmentedRadioGroupOptionProps[]` |         |
| defaultValue | 组件挂载时设置初始值状态。                                                                       |              `string`              |         |
| onUpdate     | 当用户更改单选按钮状态时触发，并将新值作为回调参数提供。                                         |     `(value: string) => void`      |         |
| onChange     | 当用户更改单选按钮状态时触发，并将更改事件作为回调参数提供。                                     |             `Function`             |         |
| onFocus      | 当单选输入元素获得焦点时使用的事件处理程序。                                                     |             `Function`             |         |
| onBlur       | 当单选输入元素失去焦点时使用的事件处理程序。                                                     |             `Function`             |         |
| width        | 设置单选按钮的宽度。                                                                             |            `auto - max`            |         |
| size         | 设置单选按钮的尺寸。                                                                             |          `s` `m` `l` `xl`          |   `m`   |
| name         | 输入元素的 `name` HTML 属性。                                                                    |              `string`              |         |
| qa           | `data-qa` HTML 属性，用于测试                                                                    |              `string`              |         |
| style        | `style` HTML 属性                                                                                |       `React.CSSProperties`        |         |
| className    | `class` HTML 属性                                                                                |              `string`              |         |

## SegmentedRadioGroup.Option

`SegmentedRadioGroup` 组件还导出一个嵌套的 `Option` 组件。您可以使用它在 `SegmentedRadioGroup` 中创建单选按钮选项。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 属性

| 名称     | 描述                                         |    类型     | 默认值 |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | 单选框的内容（通常是标签）。        | `ReactNode` |         |
| content  | 单选框的内容（`children` 的替代选项）。 | `ReactNode` |         |
| disabled | 切换单选框的 `disabled` 状态。          |  `boolean`  | `false` |
| value    | 控件值                                       |  `string`   |         |