# Footer と MobileFooter

ページフッターコンポーネント。デスクトップ版には `Footer` を、モバイル版には `MobileFooter` を使用します。
どちらのコンポーネントも同じプロパティを持っています。

## プロパティ

| プロパティ                                                                               | タイプ                             | 必須 | デフォルト | 説明                   |
| :--------------------------------------------------------------------------------------- | :------------------------------- | :--: | :------- | :--------------------- |
| className                                                                                | `String`                         |      |          | フッターのクラス名     |
| [menuItems](https://github.com/gravity-ui/uikit/tree/main/src/components/Menu)           | `FooterMenuItem[]`               |      |          | フッターメニュー項目のリスト |
| withDivider                                                                              | `Boolean`                        |      |          | フッターのトップボーダーを表示 |
| moreButtonTitle                                                                          | `String`                         |      |          | その他の項目ボタンのタイトル |
| onMoreButtonClick                                                                        | `MouseEventHandler<HTMLElement>` |      |          | その他のボタンのクリックハンドラ |
| [view](#view)                                                                            | `normal` または `clear`          |      |          | フッターのビュー       |
| [logo](https://preview.gravity-ui.com/navigation/?path=/story/components-logo--showcase) | `LogoProps`                      |      |          | サービスロゴのプロパティ |
| logoWrapperClassName                                                                     | `string`                         |      |          | ロゴラッパーのクラス名 |
| copyright                                                                                | `string`                         |      |          | コピーライト           |

### view

- normal - 白い背景と設定されたすべての要素
- clear - 透明な背景とコピーライトのみ

### 使用方法

デモを参照してください

- デスクトップ: `src/components/Footer/desktop/__stories__/FooterShowcase.tsx`
- モバイル: `src/components/Footer/mobile/__stories__/MobileFooterShowcase.tsx`

### 例

#### Footer

```tsx
import { Footer } from '@gravity-ui/navigation';

<Footer
    className="page-footer"
    withDivider={false}
    moreButtonTitle="さらに表示"
    copyright={`@ ${new Date().getFullYear()} "マイサービス"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'マイサービス'
    }}
    menuItems={[
        {
            text: 'サービスについて',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'ドキュメント',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: '機密情報',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<Footer
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "マイサービス"`}
    view="clear"
/>
```

#### MobileFooter

```tsx
import { MobileFooter } from '@gravity-ui/navigation';
```

<MobileFooter
    className="page-footer"
    withDivider={false}
    moreButtonTitle="もっと表示"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'My Service'
    }}
    menuItems={[
        {
            text: 'サービスについて',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'ドキュメント',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: '機密情報',
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

## MobileFooter

モバイルデバイス用のフッターコンポーネント。

### Props

| Имя свойства | Описание | Тип | Значение по умолчанию |
| :---------- | :-------- | :-- | :-------------------- |
| `className` | Дополнительный CSS-класс для корневого элемента. | `String` | - |
| `withDivider` | Отображать разделительную линию под футером. | `Boolean` | `true` |
| `moreButtonTitle` | Текст кнопки "Показать больше". | `String` | `"Show more"` |
| `copyright` | Текст авторских прав. | `String` | - |
| `logo` | Объект с настройками логотипа. | `Object` | - |
| `logo.icon` | Иконка логотипа. | `ReactNode` | - |
| `logo.iconSize` | Размер иконки логотипа. | `Number` | `24` |
| `logo.text` | Текст логотипа. | `String` | - |
| `menuItems` | Массив элементов меню. | `Array<MenuItem>` | `[]` |
| `menuItems[].text` | Текст элемента меню. | `String` | - |
| `menuItems[].href` | URL элемента меню. | `String` | - |
| `menuItems[].target` | Атрибут `target` для ссылки. | `String` | `_self` |
| `view` | Вариант отображения футера. | `'normal' | 'clear'` | `'normal'` |

### Примеры

```jsx
import { MobileFooter } from '@gravity-ui/uikit';
import logoIcon from './logo.svg';

function App() {
    return (
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
    );
}
```

```jsx
import { MobileFooter } from '@gravity-ui/uikit';

function App() {
    return (
        <MobileFooter
            className="page-footer"
            copyright={`@ ${new Date().getFullYear()} "My Service"`}
            view="clear"
        />
    );
}
```