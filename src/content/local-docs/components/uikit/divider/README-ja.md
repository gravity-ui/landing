GRAVITY_TRANSLATION_BLOCK_0_END

`Divider` コンポーネントは、視覚的な階層を強化するために、要素を区切り、グループ化するための細い線として使用されます。

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### 方向

`direction` プロパティを使用して、`Divider` の方向を管理します。デフォルトの方向は `horizontal` です。

#### Horizontal

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### Vertical

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### カスタムコンテンツ

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 配置

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## プロパティ

| 名前        | 説明                               | タイプ                    | デフォルト   |
| :---------- | :--------------------------------- | :---------------------- | :----------- |
| className   | `class` HTML 属性                  | `string`                | -            |
| orientation | 区切り線の方向を決定します         | `horizontal - vertical` | `horizontal` |
| children    | 区切り線内のカスタムコンテンツ   | `React.ReactNode`       |              |
| align       | カスタムコンテンツの位置           | `start - center - end`  | `start`      |
| style       | `style` HTML 属性                  | `React.CSSProperties`   |              |
| qa          | `data-qa` HTML 属性、テストに使用  | `string`                |              |

### CSS API

| 名前                | 説明                                                                      |
| :------------------ | :------------------------------------------------------------------------ |
| `--g-divider-color` | 区切り線の色                                                              |
| `--g-divider-size`  | 区切り線のサイズ（水平方向の場合は高さ、垂直方向の場合は幅）                  |