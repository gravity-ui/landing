<!--GITHUB_BLOCK-->

# TextInput

<!--/GITHUB_BLOCK-->

```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput 允许用户在 UI 中输入文本。

## 外观

`TextInput` 的外观由 `view` 和 `pin` 属性控制。

### View

`normal` - `TextInput` 的主视图（默认使用）。

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput placeholder="Placeholder" />;
}
SANDBOX-->

`clear` - 可与自定义的 `TextInput` 包装器一起使用。

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput view="clear" placeholder="Placeholder" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput view="normal" />
<TextInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

允许您控制 `TextInput` 边框的右侧和左侧边缘的外观。

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" pin="round-brick" />
            <TextInput placeholder="Placeholder" pin="brick-brick" />
            <TextInput placeholder="Placeholder" pin="brick-round" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput pin="round-brick" />
<TextInput pin="brick-brick" />
<TextInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## 状态

### Disabled

`TextInput` 的状态，您不希望用户能够与该组件进行交互。

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput placeholder="Placeholder" disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput disabled />
```

<!--/GITHUB_BLOCK-->

### Error

`TextInput` 的状态，您想在此指示用户输入不正确。要更改 `TextInput` 的外观，请使用 `validationState` 属性并将其值设置为 `"invalid"`。可以通过 `errorMessage` 属性添加可选的消息文本。默认情况下，消息文本会渲染在组件外部。
此行为可以通过 `errorPlacement` 属性进行更改。

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput
                placeholder="Placeholder"
                errorMessage="Error message"
                validationState="invalid"
            />
            <TextInput
                placeholder="Placeholder"
                errorPlacement="inside"
                errorMessage="Error message"
                validationState="invalid"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput errorMessage="Error message" validationState="invalid" />
<TextInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Size

`s` – 当标准控件太大时使用（表格、小卡片）。

`m` – 基本尺寸，在大多数组件中使用。

`l` – 在页面标题、模态窗口或弹出窗口中执行的基本控件。

`xl` – 在促销和登陆页面上使用。

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" size="s" />
            <TextInput placeholder="Placeholder" size="m" />
            <TextInput placeholder="Placeholder" size="l" />
            <TextInput placeholder="Placeholder" size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput size="s" />
<TextInput size="m" />
<TextInput size="l" />
<TextInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Label

允许您在控件的左侧设置标签。

- label 占据相对于控件的最左侧位置。也就是说，通过 `startContent` 属性添加的元素将位于右侧。
- label 占用的宽度不能超过 TextInput 整个空间的宽度的一半。

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" label="Label" />
            <TextInput placeholder="Placeholder" label="Very long label with huge amount of symbols" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## 附加内容

### Start content

允许您在控件的左侧添加内容（如果使用 [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL) 则在右侧）。位于通过 `label` 属性添加的标签的左侧（如果使用 rtl 则在右侧）。

<!--SANDBOX
import {Label, TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <TextInput
            placeholder="Search"
            label="Label"
            startContent={<Label size="s">Left</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### End content

允许您在控件的右侧添加内容（如果使用 [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL) 则在左侧）。位于通过 `hasClear` 属性添加的清除按钮的右侧（如果使用 rtl 则在左侧）。

<!--SANDBOX
import {Label, TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <TextInput
            hasClear
            placeholder="Placeholder"
            endContent={<Label size="s">Right</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

## Properties

| 名称            | 描述                                                                                                            |                                 类型                                  |     默认值     |
| :-------------- | :-------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------: | :------------: |
| autoComplete    | 控件的 `autocomplete` 属性                                                                                      |                          `boolean` `string`                           |                |
| autoFocus       | 控件的 `autofocus` 属性                                                                                         |                               `boolean`                               |                |
| className       | 控件的包装器类名                                                                                                |                               `string`                                |                |
| controlProps    | 控件的 html 属性                                                                                                |             `React.InputHTMLAttributes<HTMLInputElement>`             |                |
| controlRef      | 提供给控件的 React ref                                                                                          |                     `React.Ref<HTMLInputElement>`                     |                |
| defaultValue    | 控件的默认值，在组件未受控时使用                                                                                |                               `string`                                |                |
| disabled        | 指示用户无法与控件交互                                                                                          |                           `React.ReactNode`                           |                |
| endContent      | 用户节点，渲染在输入节点、清除按钮和错误图标之后                                                                |                               `string`                                |                |
| errorMessage    | 错误文本                                                                                                        |                               `string`                                |                |
| errorPlacement  | 错误放置位置                                                                                                    |                          `outside` `inside`                           |    `outside`   |
| hasClear        | 显示用于清除控件值的图标                                                                                        |                               `boolean`                               |     `false`    |
| id              | 控件的 `id` 属性                                                                                                |                               `string`                                |                |
| label           | 渲染在输入节点左侧的帮助文本                                                                                    |                               `string`                                |                |
| name            | 控件的 `name` 属性。如果未指定，则在未指定时会自动生成                                                          |                               `string`                                |                |
| note            | 显示在控件右下角下方的可选元素，与错误容器共享空间                                                              |                           `React.ReactNode`                           |                |
| onBlur          | 控件失去焦点时触发。将焦点事件作为回调参数提供                                                                  |                              `function`                               |                |
| onChange        | 用户更改输入值时触发。将更改事件作为回调参数提供                                                                |                              `function`                               |                |
| onFocus         | 控件获得焦点时触发。将焦点事件作为回调参数提供                                                                  |                              `function`                               |                |
| onKeyDown       | 按下按键时触发。将键盘事件作为回调参数提供                                                                      |                              `function`                               |                |
| onKeyUp         | 释放按键时触发。将键盘事件作为回调参数提供                                                                      |                              `function`                               |                |
| onUpdate        | 用户更改输入值时触发。将新值作为回调参数提供                                                                    |                              `function`                               |                |
| pin             | 控件的边框视图                                                                                                  |                               `string`                                |   `'round-round'` |
| placeholder     | 控件在没有值时显示的文本                                                                                        |                               `string`                                |                |
| qa              | 测试 ID 属性 (`data-qa`)                                                                                        |                               `string`                                |                |
| readOnly        | 指示用户无法更改控件的值                                                                                        |                               `boolean`                               |     `false`    |
| size            | 控件的大小                                                                                                      |                       `"s"` `"m"` `"l"` `"xl"`                        |      `"m"`     |
| startContent    | 用户节点，渲染在标签和输入节点之前                                                                              |                           `React.ReactNode`                           |                |
| tabIndex        | 控件的 `tabindex` 属性                                                                                          |                               `string`                                |                |
| type            | 控件的类型                                                                                                      | `"email"` `"number"` `"password"` `"search"` `"tel"` `"text"` `"url"` |                |
| validationState | 验证状态                                                                                                        |                              `"invalid"`                              |                |
| value           | 控件的值                                                                                                        |                               `string`                                |                |
| view            | 控件的视图                                                                                                      |                         `"normal"` `"clear"`                          |   `"normal"`   |

## CSS API

| 名称                                 | 描述                                         |
| :----------------------------------- | :-------------------------------------------------- |
| `--g-text-input-text-color`          | 文本颜色                                          |
| `--g-text-input-label-color`         | 标签颜色                                          |
| `--g-text-input-placeholder-color`   | 占位符颜色                                   |
| `--g-text-input-background-color`    | 背景颜色                                    |
| `--g-text-input-border-radius`       | 边框圆角                                       |
| `--g-text-input-border-width`        | 边框宽度                                        |
| `--g-text-input-border-color`        | 边框颜色                                       |
| `--g-text-input-border-color-hover`  | 悬停时的边框颜色                             |
| `--g-text-input-border-color-active` | 活动时的边框颜色                              |
| `--g-text-input-focus-outline-color` | 聚焦时的轮廓颜色（默认不显示） |
