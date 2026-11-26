# UserLabel

`UserLabel`는 사용자 아바타와 이름 또는 이메일이 포함된 컴팩트한 칩으로, 인라인 멘션 및 목록에 적합합니다 (더 큰 프로필 블록에는 `User`를, 사진만에는 `Avatar`를 사용하세요).

## Type

아바타 모양을 관리하는 데 사용됩니다. 개인화된 엔티티에는 `"person"`을, 이메일 주소에는 `"email"`을 사용하세요. 아바타가 필요하지 않으면 `"empty"`를 사용하세요.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Avatar

이 컴포넌트는 사용자 정의 아바타와 함께 사용할 수 있습니다. `type: 'person'`에서만 작동합니다. 이미지, [Avatar](../Avatar/README.md) 컴포넌트의 속성 또는 사용자 정의 React 노드를 제공할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Interactivity

이 컴포넌트는 클릭 가능하거나 닫을 수 있는 인터랙티브 기능도 제공합니다.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Properties

| Name         | Description                                     |                                    Type                                     |   Default    |
| :----------- | :---------------------------------------------- | :-------------------------------------------------------------------------: | :----------: |
| type         | 아바타 모양                                     |                       `'person'` `'email'` `'empty'`                        |  `'person'`  |
| view         | `UserLabel` 보기                                |                           `'outlined'` `'clear'`                            | `'outlined'` |
| size         | 아바타 크기                                     |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |    `'s'`     |
| avatar       | 사용자 아바타                                   | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |              |
| text         | 표시되는 텍스트                                 |                              `React.ReactNode`                              |              |
| description  | 사용자 설명                                     |                              `React.ReactNode`                              |              |
| onClick      | 컴포넌트의 `click` 이벤트 핸들러                |                                 `Function`                                  |              |
| onCloseClick | 크로스 아이콘 버튼의 `click` 이벤트 핸들러      |                                 `Function`                                  |              |
| className    | 루트 요소에 대한 사용자 정의 CSS 클래스         |                                  `string`                                   |              |
| style        | HTML style 속성                                 |                            `React.CSSProperties`                            |              |
| qa           | 테스트에 사용되는 `data-qa` HTML 속성           |                                  `string`                                   |              |

## CSS API

| 이름                                     | 설명                                             |
| :--------------------------------------- | :------------------------------------------------------ |
| `--g-user-label-size`                    | 아바타(너비 및 높이) 및 라벨 높이 크기 |
| `--g-user-label-border-radius`           | 라벨 테두리 반경                                           |
| `--g-user-label-padding`                 | 라벨 가로 패딩                                           |
| `--g-user-label-gap`                     | 요소(아바타, 텍스트, 닫기 아이콘) 간 간격 |
| `--g-user-label-text-font-weight`        | 텍스트 글꼴 두께                                           |
| `--g-user-label-text-font-size`          | 텍스트 글꼴 크기                                           |
| `--g-user-label-text-line-height`        | 텍스트 줄 높이                                           |
| `--g-user-label-description-font-weight` | 설명 글꼴 두께                                           |
| `--g-user-label-description-font-size`   | 설명 글꼴 크기                                           |
| `--g-user-label-description-line-height` | 설명 줄 높이                                           |