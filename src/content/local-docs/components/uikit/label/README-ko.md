<!--GITHUB_BLOCK-->

# Label

<!--/GITHUB_BLOCK-->

`Label`을 사용하여 특정 정보를 강조 표시할 수 있습니다. `Close` 또는 `Copy` 버튼이 있는 `Label`은 다양한 간단한 작업에 유용할 수 있습니다.

`Label`은 중요도를 나타내는 다양한 색상 코드로 한 줄 텍스트 정보를 표시하는 데 가장 적합합니다.

```tsx
import {Label} from '@gravity-ui/uikit';
```

## 모양

`Label`은 여러 스타일로 표시될 수 있습니다.

### 테마

`theme` 속성을 사용하여 다양한 상태에 대해 다른 테마를 적용할 수 있습니다. 다음 값을 사용할 수 있습니다: `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown`, `clear`.
기본 테마는 `normal`입니다.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal">Normal</Label>
            <Label theme="info">Info</Label>
            <Label theme="success">Success</Label>
            <Label theme="warning">Warning</Label>
            <Label theme="danger">Danger</Label>
            <Label theme="utility">Utility</Label>
            <Label theme="unknown">Unknown</Label>
            <Label theme="clear">Clear</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal">Normal</Label>
<Label theme="info">Info</Label>
<Label theme="success">Success</Label>
<Label theme="warning">Warning</Label>
<Label theme="danger">Danger</Label>
<Label theme="utility">Utility</Label>
<Label theme="unknown">Unknown</Label>
<Label theme="clear">Clear</Label>
```

<!--/GITHUB_BLOCK-->

### 타입

`type` 속성은 `Label`에 다양한 옵션을 추가합니다:

`copy`: 복사 버튼을 추가합니다. 클릭하면 `copyText` 속성의 값이 복사됩니다.

`close`: 레이블 목록 관리를 위한 닫기 버튼을 추가합니다.

`info`: 레이블에 정보 아이콘을 추가합니다.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label type="default" onClick={() => alert('On click label')} size="s">
                Clickable
            </Label>
            <Label type="close" onCloseClick={() => alert('On click close')} size="s">
                Closable
            </Label>
            <Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">
                Copy
            </Label>
            <Label type="info" size="s">Info</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
<Label type="info" size="s">Info</Label>
```

<!--/GITHUB_BLOCK-->

### 아이콘

`icon` 속성을 사용하여 아이콘을 추가할 수 있습니다. 이를 위해 SVG를 위한 특수 래퍼인 [`Icon`](../Icon) 컴포넌트를 사용합니다.

<!--SANDBOX
import {Icon, Label} from '@gravity-ui/uikit';
import {Gear} from '@gravity-ui/icons';

export default function () {
    return (
        <>
            <Label icon={<Icon size={16} data={Gear} />}>Icon</Label>
            <Label type="close" icon={<Icon size={16} data={Gear} />}>Icon and close</Label>
            <Label type="copy" icon={<Icon size={16} data={Gear} />}>Icon and copy</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
```

<!--/GITHUB_BLOCK-->

## 값

`Label`을 사용하여 키-값 정보를 표시할 수 있습니다. 이를 위해 `children` 속성에 키를, `value` 속성에 값을 제공해야 합니다.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal" value="Value">Key</Label>
            <Label theme="info" value="Value">Key</Label>
            <Label theme="success" value="Value">Key</Label>
            <Label theme="warning" value="Value">Key</Label>
            <Label theme="danger" value="Value">Key</Label>
            <Label theme="utility" value="Value">Key</Label>
            <Label theme="unknown" value="Value">Key</Label>
            <Label theme="clear" value="Value">Key</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal" value="Value">Key</Label>
<Label theme="info" value="Value">Key</Label>
<Label theme="success" value="Value">Key</Label>
<Label theme="warning" value="Value">Key</Label>
<Label theme="danger" value="Value">Key</Label>
<Label theme="utility" value="Value">Key</Label>
<Label theme="unknown" value="Value">Key</Label>
<Label theme="clear" value="Value">Key</Label>
```

<!--/GITHUB_BLOCK-->

## 상태

`label`은 다른 상태를 가질 수 있습니다:

- `disabled`: 상호 작용이 허용되지 않습니다.
- `interactive`: 레이블에 호버 효과를 적용합니다.
- `loading`: 로딩 상태를 표시합니다.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label>Default</Label>
            <Label disabled>Disabled</Label>
            <Label interactive>Interactive</Label>
            <Label loading>Loading</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
<Label loading>Loading</Label>
```

<!--/GITHUB_BLOCK-->

## 크기

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label size="xxs">XXS size</Label>
            <Label size="xs">XS size</Label>
            <Label size="s">S size</Label>
            <Label size="m">M size</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label size="xxs">XXS size</Label>
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
```

<!--/GITHUB_BLOCK-->

## 속성

| 이름             | 설명                                     |                  타입                   |   기본값   |
| :--------------- | :---------------------------------------------- | :-------------------------------------: | :---------: |
| children         | 콘텐츠                                         |            `React.ReactNode`            |             |
| className        | `class` HTML 속성                          |                `string`                 |             |
| closeButtonLabel | 닫기 버튼의 `aria-label`                |                `string`                 |             |
| copyButtonLabel  | 복사 버튼의 `aria-label`                 |                `string`                 |             |
| copyText         | 복사할 텍스트                                    |                `string`                 |             |
| disabled         | 비활성화 상태                                  |                `boolean`                |             |
| icon             | 레이블 아이콘 (왼쪽에 위치)                        |            `React.ReactNode`            |             |
| interactive      | 호버 효과 활성화                            |                `boolean`                |             |
| loading          | 로딩 상태                                   |                `boolean`                |   `false`   |
| onClick          | `click` 이벤트 핸들러                           |               `Function`                |             |
| onCloseClick     | 닫기 버튼 `click` 이벤트 핸들러              |               `Function`                |             |
| onCopy           | `copy` 이벤트 핸들러                            |               `Function`                |             |
| qa               | 테스트에 사용되는 `data-qa` HTML 속성      |                `string`                 |             |
| size             | 레이블 크기                                      |       `"xxs"` `"xs"` `"s"` `"m"`        |   `"xs"`    |
| theme            | 레이블 테마                                     |                `string`                 | `"normal"`  |
| title            | `title` HTML 속성                          |                `string`                 |             |
| type             | 레이블 타입                                      | `"default"` `"copy"` `"close"` `"info"` | `"default"` |
| value            | 레이블 값 (`"children : value"`로 표시됨) |            `React.ReactNode`            |             |
| width            | 레이블이 부모 공간을 사용하는 방식 제어          |                `"auto"`                 |             |
