# UserLabel

`UserLabel` は、ユーザーのアバターと名前またはメールアドレスを含むコンパクトなチップで、インラインメンションやリストに適しています（より大きなプロフィールブロックには `User` を、画像のみには `Avatar` を使用してください）。

## Type

アバターの外観を管理するために使用します。パーソナライズされたエンティティには `"person"` を、メールアドレスには `"email"` を使用します。アバターが不要な場合は `"empty"` を使用してください。

<!--SANDBOX
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel type="person" text="Charles Darwin" />
            <UserLabel type="email" text="email@example.com" />
            <UserLabel type="empty" text="Alan Turing" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel type="person" text="Charles Darwin (person)" />
<UserLabel type="email" text="email@example.com (email)" />
<UserLabel type="empty" text="Alan Turing (empty)" />
```

<!--/GITHUB_BLOCK-->

## Avatar

このコンポーネントはカスタムアバターと組み合わせて使用できます。`type: 'person'` の場合のみ機能します。画像、[Avatar](../Avatar/README.md) コンポーネントのプロパティ、またはカスタム React ノードを指定できます。

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel
                type="person"
                avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/193px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg"
                text="Charles Darwin"
            />
            <UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {GraduationCap} from '@gravity-ui/icons';

<UserLabel type="person" avatar="<url>" text="Charles Darwin" />
<UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
```

<!--/GITHUB_BLOCK-->

## Interactivity

このコンポーネントはインタラクティブでもあります。クリック可能またはクローズ可能にすることができます。

<!--SANDBOX
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
            <UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
<UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
```

<!--/GITHUB_BLOCK-->

## Properties

| Name         | Description                                     |                                    Type                                     |   Default    |
| :----------- | :---------------------------------------------- | :-------------------------------------------------------------------------: | :----------: |
| type         | アバターの外観                                  |                       `'person'` `'email'` `'empty'`                        |  `'person'`  |
| view         | `UserLabel` のビュー                            |                           `'outlined'` `'clear'`                            | `'outlined'` |
| size         | アバターのサイズ                                |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |    `'s'`     |
| avatar       | ユーザーのアバター                              | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |              |
| text         | 表示されるテキスト                              |                              `React.ReactNode`                              |              |
| description  | ユーザーの説明                                  |                              `React.ReactNode`                              |              |
| onClick      | コンポーネントの `click` イベントハンドラ       |                                 `Function`                                  |              |
| onCloseClick | クロスアイコンボタンの `click` イベントハンドラ |                                 `Function`                                  |              |
| className    | ルート要素のカスタム CSS クラス                 |                                  `string`                                   |              |
| style        | HTML スタイル属性                               |                            `React.CSSProperties`                            |              |
| qa           | テストに使用される `data-qa` HTML 属性          |                                  `string`                                   |              |

## CSS API

| 名前                                     | 説明                                             |
| :--------------------------------------- | :------------------------------------------------------ |
| `--g-user-label-size`                    | アバター（幅と高さ）およびラベルの高さのサイズ |
| `--g-user-label-border-radius`           | ラベルの境界線の半径                               |
| `--g-user-label-padding`                 | ラベルの水平方向のパディング                           |
| `--g-user-label-gap`                     | 要素間のギャップ（アバター、テキスト、閉じるアイコン）         |
| `--g-user-label-text-font-weight`        | テキストのフォントの太さ                                       |
| `--g-user-label-text-font-size`          | テキストのフォントサイズ                                         |
| `--g-user-label-text-line-height`        | テキストの行の高さ                                       |
| `--g-user-label-description-font-weight` | 説明のフォントの太さ                                 |
| `--g-user-label-description-font-size`   | 説明のフォントサイズ                                   |
| `--g-user-label-description-line-height` | 説明の行の高さ                                 |
