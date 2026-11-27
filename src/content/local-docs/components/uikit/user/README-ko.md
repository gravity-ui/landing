<!--GITHUB_BLOCK-->

# User

<!--/GITHUB_BLOCK-->

이것은 사용자 아바타와 정보 블록을 표시하는 일반적인 컴포넌트입니다. 아바타를 렌더링하기 위해 [Avatar](../Avatar/README.md) 컴포넌트를 사용합니다. 사용자 정의 React 노드를 아바타로 사용할 수도 있습니다.

```tsx
import {User} from '@gravity-ui/uikit';
```

## 이름 및 설명

`User` 컴포넌트는 정보 블록을 표시하기 위해 `name` 및 `description` 속성을 가집니다.

<!--SANDBOX
import {User} from '@gravity-ui/uikit';

export default function () {
    return (
        <User
            avatar={{text: 'Charles Darwin', theme: 'brand'}}
            name="Charles Darwin"
            description="charles@mail.ai"
            size="l"
        />
    );
}
SANDBOX-->

## 크기

`size` 속성을 사용하여 `User`의 크기를 관리합니다. 기본 크기는 `m`입니다. 가능한 값은 `3xs`, `2xs`, `xs`, `s`, `m`, `l`, `xl`입니다.

이 속성은 내부 `Avatar` 컴포넌트에도 제공됩니다.

<!--SANDBOX
import {User} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="3xs"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="2xs"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="xs"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="s"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="m"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="l"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="xl"
            />
        </>
    );
}
SANDBOX-->

## 속성

| 이름             | 설명                               |                                    Type                                     | 기본값 |
| :--------------- | :--------------------------------- | :-------------------------------------------------------------------------: | :----: |
| avatar           | 사용자 아바타                      | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |        |
| name             | 사용자 이름                        |                              `React.ReactNode`                              |        |
| description      | 사용자 설명                        |                              `React.ReactNode`                              |        |
| size             | 사용자 섹션 크기                   |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |  `m`   |
| aria-label       | 사용자 섹션의 `aria-label`         |                                  `string`                                   |        |
| aria-labelledby  | 사용자 섹션의 `aria-labelledby`    |                                  `string`                                   |        |
| aria-describedby | 사용자 섹션의 `aria-describedby`   |                                  `string`                                   |        |
| aria-details     | 사용자 섹션의 `aria-details`       |                                  `string`                                   |        |
| className        | 루트 요소의 사용자 정의 CSS 클래스 |                                  `string`                                   |        |
| style            | HTML 스타일 속성                   |                            `React.CSSProperties`                            |        |
| qa               | 테스트에 사용되는 `data-qa` HTML 속성 |                                  `string`                                   |        |

## CSS API

| 이름                               | 설명                      |
| :--------------------------------- | :------------------------ |
| `--g-user-avatar-offset`           | 아바타와 텍스트 블록 간 간격 |
| `--g-user-name-font-weight`        | 이름 글꼴 두께            |
| `--g-user-name-font-size`          | 이름 글꼴 크기            |
| `--g-user-name-line-height`        | 이름 줄 높이              |
| `--g-user-description-font-weight` | 설명 글꼴 두께            |
| `--g-user-description-font-size`   | 설명 글꼴 크기            |
| `--g-user-description-line-height` | 설명 줄 높이              |
