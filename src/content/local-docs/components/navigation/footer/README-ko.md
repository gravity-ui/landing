# Footer 및 MobileFooter

페이지 푸터 컴포넌트입니다. 데스크톱 버전에는 `Footer`를, 모바일 버전에는 `MobileFooter`를 사용하세요.
두 컴포넌트는 동일한 속성을 가집니다.

## 속성

| 속성                                                                                     | 타입                             | 필수 | 기본값 | 설명                   |
| :--------------------------------------------------------------------------------------- | :------------------------------- | :--: | :----- | :--------------------- |
| className                                                                                | `String`                         |      |        | 푸터 클래스 이름       |
| [menuItems](https://github.com/gravity-ui/uikit/tree/main/src/components/Menu)           | `FooterMenuItem[]`               |      |        | 푸터 메뉴 항목 목록    |
| withDivider                                                                              | `Boolean`                        |      |        | 푸터 상단 테두리 표시  |
| moreButtonTitle                                                                          | `String`                         |      |        | 추가 항목 버튼 제목    |
| onMoreButtonClick                                                                        | `MouseEventHandler<HTMLElement>` |      |        | 추가 버튼 클릭 핸들러  |
| [view](#view)                                                                            | `normal` 또는 `clear`            |      |        | 푸터 보기              |
| [logo](https://preview.gravity-ui.com/navigation/?path=/story/components-logo--showcase) | `LogoProps`                      |      |        | 서비스 로고 속성       |
| logoWrapperClassName                                                                     | `string`                         |      |        | 로고 래퍼 클래스 이름  |
| copyright                                                                                | `string`                         |      |        | 저작권                 |

### view

- normal - 흰색 배경 및 구성된 모든 요소
- clear - 투명 배경 및 저작권만 표시

### 사용법

데모 보기

- 데스크톱: `src/components/Footer/desktop/__stories__/FooterShowcase.tsx`,
- 모바일: `src/components/Footer/mobile/__stories__/MobileFooterShowcase.tsx`.

### 예시

#### Footer

```tsx
import { Footer } from '@gravity-ui/navigation';

<Footer
    className="page-footer"
    withDivider={false}
    moreButtonTitle="Show more"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'My Service'
    }}
    menuItems={[
        {
            text: 'About Service',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidential',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<Footer
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    view="clear"
/>
```

#### MobileFooter

```tsx
import { MobileFooter } from '@gravity-ui/navigation';

<MobileFooter
    className="page-footer"
    withDivider={false}
    moreButtonTitle="Show more"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'My Service'
    }}
    menuItems={[
        {
            text: 'About Service',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidential',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    view="clear"
/>
```

<MobileFooter
    className="page-footer"
    withDivider={false}
    moreButtonTitle="더 보기"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'My Service'
    }}
    menuItems={[
        {
            text: '서비스 소개',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: '문서',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: '기밀',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    view="clear"
/>

GRAVITY_
