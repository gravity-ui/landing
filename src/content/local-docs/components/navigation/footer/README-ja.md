# FooterとMobileFooter

ページフッターコンポーネントです。デスクトップ版には`Footer`を、モバイル版には`MobileFooter`を使用してください。
どちらのコンポーネントも同じプロパティを持っています。

## プロパティ

| プロパティ                                                                               | タイプ                             | 必須 | デフォルト | 説明                   |
| :--------------------------------------------------------------------------------------- | :------------------------------- | :--: | :------: | :--------------------- |
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

| Имя пропса | Описание | Тип | Значение по умолчанию |
| :---------- | :-------- | :---- | :-------------------- |
| `className` | Дополнительный CSS-класс для компонента. | `String` | `undefined` |
| `withDivider` | Показывать разделительную линию под футером. | `Boolean` | `true` |
| `moreButtonTitle` | Текст кнопки "Показать больше". | `String` | `undefined` |
| `copyright` | Текст авторских прав. | `String` | `undefined` |
| `logo` | Объект с настройками логотипа. | `Object` | `undefined` |
| `logo.icon` | Иконка логотипа. | `ReactNode` | `undefined` |
| `logo.iconSize` | Размер иконки логотипа. | `Number` | `undefined` |
| `logo.text` | Текст логотипа. | `String` | `undefined` |
| `menuItems` | Массив объектов с настройками пунктов меню. | `Array<Object>` | `[]` |
| `menuItems[].text` | Текст пункта меню. | `String` | `undefined` |
| `menuItems[].href` | Ссылка пункта меню. | `String` | `undefined` |
| `menuItems[].target` | Атрибут `target` для ссылки. | `String` | `undefined` |
| `view` | Вариант отображения футера. | `'default' | 'clear'` | `'default'` |

### Примеры

#### Базовый пример

```jsx
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
```

#### Пример с `view="clear"`

```jsx
<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    view="clear"
/>
```