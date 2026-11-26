GRAVITY_TRANSLATION_BLOCK_0_END

これは、ユーザーアバターと情報ブロックを表示するための汎用コンポーネントです。[Avatar](../Avatar/README.md)コンポーネントを使用してアバターをレンダリングします。カスタムReactノードをアバターとして受け取ることもできます。

```tsx
import {User} from '@gravity-ui/uikit';
```

## 名前と説明

`User`コンポーネントには、情報ブロックを表示するための`name`および`description`プロパティがあります。

GRAVITY_TRANSLATION_BLOCK_1_END

## サイズ

`size`プロパティを使用して、`User`のサイズを管理します。デフォルトサイズは`m`です。可能な値は`3xs`、`2xs`、`xs`、`s`、`m`、`l`、`xl`です。

このプロパティは、内部の`Avatar`コンポーネントにも提供されます。

GRAVITY_TRANSLATION_BLOCK_2_END

## プロパティ

| 名前             | 説明                               |                                    Type                                     | デフォルト |
| :--------------- | :--------------------------------- | :-------------------------------------------------------------------------: | :-------: |
| avatar           | ユーザーアバター                   | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |           |
| name             | ユーザー名                         |                              `React.ReactNode`                              |           |
| description      | ユーザーの説明                     |                              `React.ReactNode`                              |           |
| size             | ユーザーセクションのサイズ         |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |   `m`   |
| aria-label       | ユーザーセクションの`aria-label`   |                                  `string`                                   |           |
| aria-labelledby  | ユーザーセクションの`aria-labelledby` |                                  `string`                                   |           |
| aria-describedby | ユーザーセクションの`aria-describedby` |                                  `string`                                   |           |
| aria-details     | ユーザーセクションの`aria-details`   |                                  `string`                                   |           |
| className        | ルート要素のカスタムCSSクラス      |                                  `string`                                   |           |
| style            | HTMLスタイル属性                   |                            `React.CSSProperties`                            |           |
| qa               | テストに使用される`data-qa` HTML属性 |                                  `string`                                   |           |

## CSS API

| 名前                               | 説明                     |
| :--------------------------------- | :----------------------- |
| `--g-user-avatar-offset`           | アバターとテキストブロックの間のギャップ |
| `--g-user-name-font-weight`        | 名前フォントの太さ       |
| `--g-user-name-font-size`          | 名前フォントのサイズ     |
| `--g-user-name-line-height`        | 名前行の高さ             |
| `--g-user-description-font-weight` | 説明フォントの太さ       |
| `--g-user-description-font-size`   | 説明フォントのサイズ     |
| `--g-user-description-line-height` | 説明行の高さ             |