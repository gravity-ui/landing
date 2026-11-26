`RadioGroup` 组件用于创建一个分组，用户可以从中选择一个选项。

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### 禁用状态

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Size

使用 `size` 属性来管理 `RadioGroup` 的大小。默认大小为 `m`。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Direction

使用 `direction` 属性来管理 `RadioGroup` 的方向。默认方向为 `horizontal`。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Properties

| Name            | Description                                                                                       |           Type            |    Default     |
| :-------------- | :------------------------------------------------------------------------------------------------ | :-----------------------: | :------------: |
| children        | The content of the radio group.                                                                   |        `ReactNode`        |                |
| disabled        | Toggles the `disabled` state of the radio group.                                                  |         `boolean`         |    `false`     |
| options         | Options for radio group.                                                                          |   `RadioGroupOption[]`    |                |
| optionClassName | `class` HTML attribute for the radio children.                                                    |         `string`          |                |
| direction       | Determines the direction of the radio group.                                                      |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | Sets the initial value state when the component is mounted.                                       |         `string`          |                |
| onUpdate        | Fires when the user changes the radio state and provides the new value as a callback argument.    | `(value: string) => void` |                |
| onChange        | Fires when the user changes the radio state and provides the change event as a callback argument. |        `Function`         |                |
| size            | Determines the size of the radio group.                                                           |          `m` `l`          |      `m`       |
| qa              | `data-qa` HTML attribute, used for testing                                                        |         `string`          |                |
| style           | `style` HTML attribute                                                                            |   `React.CSSProperties`   |                |
| className       | `class` HTML attribute                                                                            |         `string`          |                |

## RadioGroup.Option

`RadioGroup` 组件还导出一个嵌套的 `Option` 组件，它等同于 `Radio`，可用于在 `RadioGroup` 中创建单选按钮选项。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Properties

| Name     | Description                                         |    Type     | Default |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | The content of the radio (usually, a label).        | `ReactNode` |         |
| content  | The content of the radio (alternative to children). | `ReactNode` |         |
| disabled | Toggles the `disabled` state of the radio.          |  `boolean`  | `false` |
| value    | Control value                                       |  `string`   |         |