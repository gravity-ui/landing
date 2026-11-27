<!--GITHUB_BLOCK-->

# Text

<!--/GITHUB_BLOCK-->

`Text` 컴포넌트는 글꼴 변형, 색상, 텍스트 오버플로우 처리와 같은 타이포그래피 스타일을 콘텐츠에 적용합니다.

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variant

이것들은 프로젝트에서 재정의할 수 있는 기본 글꼴입니다. 사용 가능한 모든 글꼴 목록은 [여기](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants)에서 확인할 수 있습니다.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text variant="body-1">some text</Text>
            <Text variant="caption-2">some text</Text>
            <Text variant="display-3">some text</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text variant="body-1">some text</Text>
<Text variant="caption-2">some text</Text>
<Text variant="display-3">some text</Text>
```

<!--/GITHUB_BLOCK-->

### Ellipsis

이 속성을 사용하면 넘치는 텍스트를 숨길 수 있습니다.

`false`: 기본값으로 사용됩니다.

`true`: 넘치는 콘텐츠는 줄임표(`…`)로 대체됩니다.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text ellipsis={false}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
            <Text ellipsis>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text ellipsis={false}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab
    rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
<Text ellipsis={true}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab
    rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
```

<!--/GITHUB_BLOCK-->

### White Space

`white-space` CSS 속성을 나타냅니다. `nowrap` 또는 `break-spaces`가 될 수 있습니다.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <Text whiteSpace="nowrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <Text whiteSpace="break-spaces">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"nowrap"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"break-spaces"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
```

<!--/GITHUB_BLOCK-->

### Word Break

`word-break` CSS 속성을 나타냅니다. 사용 가능한 유일한 값은 `break-all`입니다. | `break-word`.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
            <Text wordBreak="break-all">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic
    delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam
    quibusdam libero ipsa veritatis quisquam!</Text>
<Text wordBreak="break-all">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
    est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
```

<!--/GITHUB_BLOCK-->

### Color

텍스트 색상을 지정합니다. 사용 가능한 색상은 다음과 같습니다.
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary`, `inverted-hint`.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text color="info">some text</Text>
            <Text color="positive">some text</Text>
            <Text color="warning">some text</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text color="info">some text</Text>
<Text color="positive">some text</Text>
<Text color="warning">some text</Text>
```

<!--/GITHUB_BLOCK-->

## Properties

| 이름          | 설명                                                                      |                        타입                        | 기본값   |
| :------------ | :------------------------------------------------------------------------ | :------------------------------------------------: | :--------: |
| children      | 텍스트 내용                                                               |                 `React.ReactNode`                  |            |
| className     | `class` HTML 속성                                                         |                      `string`                      |            |
| id            | `id` HTML 속성                                                            |                      `string`                      |            |
| as            | 기본 HTML 태그 재정의 가능                                                |              `React.ElementType<any>`              |            |
| style         | `style` HTML 속성                                                         |               `React.CSSProperties`                |            |
| variant       | 텍스트 폰트                                                               |                      `string`                      | `"body-1"` |
| ellipsis      | 숨겨진 오버플로우 콘텐츠가 줄임표로 대체됩니다.                           |                     `boolean`                      |            |
| ellipsisLines | 콘텐츠가 잘리는 줄의 전체 개수                                           |                      `number`                      |            |
| whiteSpace    | `white-space` CSS 속성                                                    |            `"nowrap"` `"break-spaces"`             |            |
| wordBreak     | `word-break` CSS 속성                                                     |            `"break-all"` `"break-word"`            |            |
| color         | 텍스트 색상                                                               | `string` (**Color** 섹션의 값 참조)                |            |
| qa            | 테스트에 사용되는 `data-qa` HTML 속성                                     |                      `string`                      |            |
