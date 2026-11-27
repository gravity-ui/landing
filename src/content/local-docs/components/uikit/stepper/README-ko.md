<!--GITHUB_BLOCK-->

# Stepper

<!--/GITHUB_BLOCK-->

`Stepper`는 마법사 스타일의 다단계 워크플로에서 진행 상황을 보여주며 사용자를 번호가 매겨진 단계 시퀀스를 안내합니다.

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## 예시

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item>Step 2</Stepper.Item>
  <Stepper.Item>Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperDefault />

<!--/GITHUB_BLOCK-->

### 인터랙티브 항목

`onUpdate` 및 `value` 속성을 사용자 지정 상태와 함께 사용하여 단계를 조작합니다.

<!--SANDBOX
import {useState} from 'react';
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState(0);

    return (
        <Stepper value={value} onUpdate={setValue}>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [value, setValue] = React.useState();

return (
  <Stepper value={value} onUpdate={setValue}>
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
    <Stepper.Item>Step 4 with very long title</Stepper.Item>
  </Stepper>
);
```

<!-- Storybook example -->

<StepperInteractiveShowcase />

<!--/GITHUB_BLOCK-->

### 다양한 보기

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="error">Step 3</Stepper.Item>
            <Stepper.Item view="success">Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="error">Step 3</Stepper.Item>
  <Stepper.Item view="success">Step 4</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperView/>

<!--/GITHUB_BLOCK-->

### 다양한 크기

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper size="l">
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Flex direction="column" gap={4}>
  <Stepper {...args} size="s">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>

  <Stepper {...args} size="m">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>

  <Stepper {...args} size="l">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>
</Flex>
```

<!-- Storybook example -->

<StepperSize/>

<!--/GITHUB_BLOCK-->

### 비활성화된 단계

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item disabled>Step 2</Stepper.Item>
            <Stepper.Item disabled>Step 3</Stepper.Item>
            <Stepper.Item disabled>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item disabled>Step 2</Stepper.Item>
  <Stepper.Item disabled>Step 3</Stepper.Item>
  <Stepper.Item disabled>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperDisabled/>

<!--/GITHUB_BLOCK-->

### 사용자 지정 아이콘

<!--SANDBOX
import {Cloud, Gear, Hammer, Rocket} from '@gravity-ui/icons';
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item icon={Gear}>Step 1</Stepper.Item>
            <Stepper.Item icon={Rocket}>Step 2</Stepper.Item>
            <Stepper.Item icon={Cloud}>Step 3</Stepper.Item>
            <Stepper.Item icon={Hammer}>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item icon={Gear}>Step 1</Stepper.Item>
  <Stepper.Item view="error" icon={Gear}>
    Step 2
  </Stepper.Item>
  <Stepper.Item view="success" icon={Gear}>
    Step 3
  </Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperCustomIcons/>

<!--/GITHUB_BLOCK-->

### 사용자 지정 단계 구분 기호

<!--SANDBOX
import {Stepper, Text} from '@gravity-ui/uikit';

const Separator = () => {
    return <Text color="secondary">{'->'}</Text>;
};

export default function () {
    return (
        <Stepper separator={<Separator />}>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="success">Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const Separator = () => {
  return <Text color="secondary">{'->'}</Text>;
};

<Stepper {...args} separator={<Separator />}>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="success">Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>;
```

<!-- Storybook example -->

<StepperCustomSeparator/>

<!--/GITHUB_BLOCK-->

### 플로팅 요소가 있는 단계

<!--SANDBOX
import {Stepper, Tooltip} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Tooltip content="fancy step with tooltip">
                <Stepper.Item>Step 1</Stepper.Item>
            </Tooltip>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="success">Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper {...args}>
  <Tooltip content="fancy step with tooltip">
    <Stepper.Item>Step 1</Stepper.Item>
  </Tooltip>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="success">Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperWithFloatingElements/>

<!--/GITHUB_BLOCK-->

## 속성

| 이름             | 설명                                               |                  유형                  | 기본값 |
| :--------------- | :-------------------------------------------------------- | :------------------------------------: | :-----: |
| children         | Stepper 항목.                                            | `React.ReactElement<StepperItemProps>` |         |
| size             | `Step` 크기를 설정합니다.                                      |           `"s"` `"m"` `"l"`            |  `"s"`  |
| value            | 현재 선택된 `Step` ID.                               |           `number` `string`            |         |
| onUpdate         | 현재 `Step` 변경을 위한 함수입니다.                       |               `Function`               |         |
| qa               | 테스트에 사용되는 `data-qa` HTML 속성입니다.               |                `string`                |         |
| separator        | 사용자 지정 구분 기호 노드입니다.                                    |           `React.ReactNode`            |         |
| className        | Steps 컨테이너의 CSS 클래스 이름입니다.                   |                `string`                |         |
| style            | Steps 컨테이너의 인라인 스타일을 설정합니다.            |            `CSSProperties`             |         |
| aria-label       | 현재 요소를 레이블링하는 문자열 값을 정의합니다.   |                `string`                |         |
| aria-labelledby  | 현재 요소를 레이블링하는 요소를 식별합니다. |                `string`                |         |
| aria-describedby | 객체를 설명하는 요소를 식별합니다.       |                `string`                |         |

### StepperItemProps

| 이름      | 설명                                       |              유형              | 기본값  |
| :-------- | :------------------------------------------------ | :----------------------------: | :------: |
| id        | `Step` ID를 설정합니다. 배열 요소의 인덱스가 기본값입니다. |       `string` `number`        |          |
| view      | `Step` 보기를 설정합니다.                                  | `"idle"` `"error"` `"success"` | `"idle"` |
| children  | `Step` 내용입니다.                                   |          `React.Node`          |          |
| disabled  | `Step` 비활성화 여부를 결정합니다.             |           `boolean`            |          |
| icon      | 사용자 지정 아이콘 노드입니다.                                 |         `SVGIconData`          |          |
| onClick   | Step 클릭 핸들러입니다.                               |   `React.MouseEventHandler`    |          |
| className | 요소의 CSS 클래스 이름입니다.                   |            `string`            |          |

### CSS API

| 이름                              | 설명                                     |
| :-------------------------------- | :--------------------------------------- |
| `--g-stepper-gap`                 | 스텝 항목과 구분선 사이의 간격입니다. |
| `--g-stepper-item-text-max-width` | 스텝 항목 텍스트의 최대 너비입니다.   |
