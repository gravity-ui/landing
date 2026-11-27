<!--GITHUB_BLOCK-->

# Palette

<!--/GITHUB_BLOCK-->

`Palette` 컴포넌트는 아이콘, 이모지, 반응, 기호의 그리드를 표시하는 데 사용되며, 선택하거나 선택 해제할 수 있습니다.

```tsx
import {Palette} from '@gravity-ui/uikit';
```

### 비활성화 상태

`disabled` 속성을 사용하여 모든 옵션을 비활성화할 수 있습니다. 특정 옵션만 비활성화하려면 해당 `options` (`PaletteOption[]`)의 `disabled` 속성을 변경할 수 있습니다.

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

const disabledOptions: PaletteOption[] = [{...options[0], disabled: true}, options[1]];

export default function () {
    return (
        <>
            <Palette options={disabledOptions} />
            <Palette options={options} disabled />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  // disable a single item
  {content: '😎', value: 'ID-cool', disabled: true},
  {content: '🥴', value: 'ID-woozy'},
];
// or disable all of them
<Palette options={options} disabled={true} />;
```

<!--/GITHUB_BLOCK-->

### 크기

`size` 속성을 사용하여 `Palette`의 크기를 관리합니다. 기본 크기는 `s`입니다.

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return (
        <>
            <Palette options={options} size="xs" />
            <Palette options={options} size="s" />
            <Palette options={options} size="m" />
            <Palette options={options} size="l" />
            <Palette options={options} size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} size={"xs"} />
<Palette options={options} size={"s"} />
<Palette options={options} size={"m"} />
<Palette options={options} size={"l"} />
<Palette options={options} size={"xl"} />
```

<!--/GITHUB_BLOCK-->

### 열

`columns` 속성을 변경하여 그리드의 열 수를 변경할 수 있습니다 (기본값은 `6`입니다).

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} columns={1} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

### 다중 선택

기본적으로 여러 옵션을 선택하고 선택 해제할 수 있습니다. 단일 옵션만 선택 가능하게 하려면 `multiple` 속성을 비활성화할 수 있습니다.

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} multiple={false} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

## 속성

`PaletteProps`:

| 이름            | 설명                                                                           |                          타입                          | 기본값 |
| :-------------- | :----------------------------------------------------------------------------- | :----------------------------------------------------: | :-----: |
| aria-label      | `aria-label` HTML 속성                                                         |                        `string`                        |         |
| aria-labelledby | 표시되는 `Palette` 캡션 요소의 ID                                              |                        `string`                        |         |
| className       | `class` HTML 속성                                                              |                        `string`                        |         |
| columns         | 행당 요소 수                                                                   |                        `number`                        |   `6`   |
| defaultValue    | 컴포넌트가 마운트될 때 초기 값 상태를 설정합니다                                 |                       `string[]`                       |         |
| disabled        | 옵션 비활성화                                                                  |                       `boolean`                        | `false` |
| multiple        | 여러 옵션 선택 활성화                                                          |                       `boolean`                        | `true`  |
| onBlur          | `onBlur` 이벤트 핸들러                                                         | `(event: React.FocusEvent<HTMLButtonElement>) => void` |         |
| onFocus         | `onFocus` 이벤트 핸들러                                                        | `(event: React.FocusEvent<HTMLButtonElement>) => void` |         |
| onUpdate        | 사용자가 상태를 변경할 때 발생합니다. 콜백의 인수로 새 값을 제공합니다.         |              `(value: string[]) => void`               |         |
| optionClassName | 팔레트 버튼에 대한 `class` HTML 속성                                           |                        `string`                        |         |
| options         | 옵션 목록 (팔레트 요소)                                                        |                   `PaletteOption[]`                    |  `[]`   |
| qa              | 테스트에 사용되는 `data-qa` HTML 속성                                          |                        `string`                        |         |
| rowClassName    | 팔레트 행에 대한 `class` HTML 속성                                             |                        `string`                        |         |
| size            | 요소의 크기 설정                                                               |                 `xs` `s` `m` `l` `xl`                  |   `m`   |
| style           | `style` HTML 속성                                                              |                 `React.CSSProperties`                  |         |
| value           | 컴포넌트의 제어된 사용을 위한 현재 값                                          |                       `string[]`                       |         |

`PaletteOption`:

| 이름     | 설명            |    타입     | 기본값 |
| :------- | :-------------- | :---------: | :-----: |
| content  | `class` HTML 속성 | `ReactNode` |         |
| disabled | 버튼 비활성화   |  `boolean`  | `false` |
| title    | `title` HTML 속성 |  `string`   |         |
| value    | 제어 값         |  `string`   |         |
