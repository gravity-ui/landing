<!--GITHUB_BLOCK-->

# Avatar

<!--/GITHUB_BLOCK-->

이 컴포넌트는 아바타 렌더링을 위한 것입니다. 이미지, 아이콘, 텍스트(이름 이니셜)의 세 가지 기본 아바타 유형이 있습니다. 이 모든 유형에는 동작 및 모양을 구성하기 위한 특수 속성이 있습니다.

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## 유형

### 이미지

이 컴포넌트는 이미지를 사용하여 아바타를 렌더링하는 데 사용할 수 있습니다. 이미지를 제공하려면 `imgUrl` 속성을 사용하세요.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />;
}
SANDBOX-->

`srcSet` 속성을 제공하여 다양한 크기의 이미지를 로드할 수도 있습니다.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352"
            srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x"
            size="l"
        />
    );
}
SANDBOX-->

`Avatar` 컴포넌트에는 `fallbackImgUrl` 속성이 있어 `imgUrl` 링크(CSP 오류 또는 원본 이미지 없음)를 통해 이미지 로딩 오류가 발생했을 때 표시되는 이미지를 제공할 수 있습니다.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="random_link"
            fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672"
            size="l"
        />
    );
}
SANDBOX-->

### 아이콘

이 컴포넌트는 아이콘을 사용하여 아바타를 렌더링하는 데 사용할 수 있습니다. `Icon` 컴포넌트의 경우와 마찬가지로 `icon` 속성을 사용하여 아이콘을 제공하세요.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar icon={GraduationCap} size="l" />;
}
SANDBOX-->

### 텍스트

이 컴포넌트는 텍스트를 사용하여 아바타를 렌더링하는 데 사용할 수 있습니다. 이를 위해 `text` 속성을 사용하세요. 텍스트는 이니셜(두 단어의 첫 글자) 또는 단일 단어의 첫 두 글자로 렌더링됩니다.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" size="l" />
            <Avatar text="Guardian" size="l" />
        </>
    );
}
SANDBOX-->

## 모양

### 테마 및 보기

`Avatar` 컴포넌트에는 사전 정의된 테마(`normal`, `brand`)와 보기(`filled`, `outlined`)가 있습니다.

기본 테마는 `normal`이고 기본 보기는 `filled`입니다.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar icon={GraduationCap} size="l" theme="normal" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="normal" view="outlined" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="outlined" />
        </>
    );
}
SANDBOX-->

### 사용자 지정 색상

`backgroundColor`, `borderColor`, `color` 속성(후자는 아이콘 및 텍스트 아바타에만 적용됨)을 통해 사용자 지정 색상을 제공할 수도 있습니다. 이러한 색상은 테마 색상보다 우선 순위가 높습니다.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar
                text="Charles Darwin"
                size="l"
                backgroundColor="var(--g-color-base-danger-medium)"
                color="var(--g-color-text-primary)"
            />
            <Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
        </>
    );
}
SANDBOX-->

### 크기

`size` 속성을 사용하여 `Avatar` 크기를 관리하세요. 기본 크기는 `m`입니다. 가능한 값은 `3xs`, `2xs`, `xs`, `s`, `m`, `l`, `xl`입니다.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" size="3xs" />
            <Avatar text="Charles Darwin" theme="brand" size="2xs" />
            <Avatar text="Charles Darwin" theme="brand" size="xs" />
            <Avatar text="Charles Darwin" theme="brand" size="s" />
            <Avatar text="Charles Darwin" theme="brand" size="m" />
            <Avatar text="Charles Darwin" theme="brand" size="l" />
            <Avatar text="Charles Darwin" theme="brand" size="xl" />
        </>
    );
}
SANDBOX-->

### 모양

`shape` 속성을 사용하여 `Avatar` 모양을 관리하세요. 기본 모양은 `circle`입니다. 가능한 값은 `circle` 및 `square`입니다.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" shape="circle" />
            <Avatar text="Charles Darwin" theme="brand" shape="square" />
        </>
    );
}
SANDBOX-->

## 속성

### 공통

| 이름             | 설명                               |                      유형                       | 기본값  |
| :--------------- | :--------------------------------- | :---------------------------------------------: | :------: |
| size             | 아바타 크기                        | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |   `m`    |
| theme            | 아바타 테마                        |              `'normal'` `'brand'`               | `normal` |
| view             | 아바타 채우기 및 윤곽선 옵션       |             `'filled'` `'outlined'`             | `filled` |
| shape            | 아바타 모양                        |              `'circle'` `'square'`              | `circle` |
| backgroundColor  | 사용자 지정 배경색                 |                    `string`                     |          |
| borderColor      | 사용자 지정 테두리 색상            |                    `string`                     |          |
| title            | `title` HTML 속성                  |                    `string`                     |          |
| aria-label       | 아바타 섹션에 대한 `aria-label`    |                    `string`                     |          |
| aria-labelledby  | 아바타 섹션에 대한 `aria-labelledby` |                    `string`                     |          |
| aria-describedby | 아바타 블록에 대한 `aria-describedby` |                    `string`                     |          |
| aria-details     | 아바타 블록에 대한 `aria-details`    |                    `string`                     |          |
| className        | 루트 요소에 대한 사용자 지정 CSS 클래스 |                    `string`                     |          |
| style            | `style` HTML 속성                  |              `React.CSSProperties`              |          |
| qa               | 테스트에 사용되는 `data-qa` HTML 속성 |                    `string`                     |          |

### 이미지별

| 이름            | 설명                                     |        타입        |   기본값   |
| :-------------- | :--------------------------------------- | :----------------: | :---------: |
| imgUrl          | `img` `src` HTML 속성                    |      `string`      |             |
| fallbackImgUrl  | 오류 발생 시 표시될 대체 이미지         |      `string`      |             |
| sizes           | `img` `sizes` HTML 속성                  |      `string`      |             |
| srcSet          | `img` `srcSet` HTML 속성                 |      `string`      |             |
| alt             | `img` `alt` HTML 속성                    |      `string`      | props.title |
| loading         | `img` `loading` HTML 속성                | `'eager'` `'lazy'` |             |
| withImageBorder | 이미지에 기본 테두리 추가              |     `boolean`      |             |

### 아이콘 전용

| 이름  | 설명        |    타입    | 기본값 |
| :---- | :---------- | :--------: | :----: |
| icon  | SVG 아이콘 소스 | `IconData` |        |
| color | 사용자 정의 아이콘 색상 |  `string`  |        |

### 텍스트 전용

| 이름  | 설명        |   타입   | 기본값 |
| :---- | :---------- | :------: | :----: |
| text  | 아바타 텍스트 | `string` |        |
| color | 사용자 정의 텍스트 색상 | `string` |        |

## CSS API

| 이름                            | 설명                |
| :------------------------------ | :------------------ |
| `--g-avatar-size`               | 크기 (너비 및 높이) |
| `--g-avatar-border-width`       | 테두리 너비         |
| `--g-avatar-inner-border-width` | 내부 테두리 너비    |
| `--g-avatar-border-color`       | 테두리 색상         |
| `--g-avatar-background-color`   | 배경 색상           |
| `--g-avatar-text-color`         | 아이콘 및 텍스트 색상 |
| `--g-avatar-font-weight`        | 텍스트 글꼴 두께    |
| `--g-avatar-font-size`          | 텍스트 글꼴 크기    |
| `--g-avatar-line-height`        | 텍스트 줄 높이      |
