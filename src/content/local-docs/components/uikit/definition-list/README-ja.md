<!--GITHUB_BLOCK-->

# DefinitionList

<!--/GITHUB_BLOCK-->

用語と定義をドットで区切って表示する定義リストコンポーネント。

```tsx
import {DefinitionList} from '@gravity-ui/uikit';
```

## 例

<!--SANDBOX
import {DefinitionList} from '@gravity-ui/uikit';

export default function () {
    return (
        <DefinitionList nameMaxWidth={100} contentMaxWidth={100}>
            <DefinitionList.Item name="Node value with copy" copyText="value">
                <strong>value with copy</strong>
            </DefinitionList.Item>
            <DefinitionList.Item name="Empty value with copy" copyText="nothing to copy" />
        </DefinitionList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<DefinitionList nameMaxWidth={100} contentMaxWidth={100}>
  <DefinitionList.Item name="Node value with copy" copyText="value">
    <strong>value with copy</strong>
  </DefinitionList.Item>
  <DefinitionList.Item name="Empty value with copy" copyText="nothing to copy" />
</DefinitionList>
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前               | 説明                                                                                         |              タイプ              |   デフォルト    |
| :----------------- | :------------------------------------------------------------------------------------------- | :----------------------------: | :-----------: |
| [children](#items) | リストのアイテム                                                                             |       `React.ReactNode`        |               |
| responsive         | `true` に設定すると、リストは親要素の幅全体を使用します                                      |           `boolean`            |               |
| direction          | `vertical` に設定すると、コンテンツは名前の下に配置され、リストは親要素の幅全体を使用します | `'horizontal'` \| `'vertical'` | 'horizontal' |
| nameMaxWidth       | 用語の最大幅                                                                                 |            `number`            |               |
| contentMaxWidth    | 定義の最大幅                                                                                 |            `number`            |               |
| className          | 定義リストのクラス名                                                                         |            `string`            |               |

### Items

DefinitionList の子要素は、以下のプロパティを持つ `DefinitionList.Item` 型のコンポーネントである必要があります。

| 名前     | 説明                                       |           タイプ            | デフォルト |
| -------- | :----------------------------------------- | :-----------------------: | :-------: |
| name     | 用語                                       |        `ReactNode`        |           |
| children | 定義                                       |        `ReactNode`        |           |
| copyText | 設定されている場合、このテキストをコピーするアイコンが表示されます |         `string`          |           |
| note     | 設定されている場合、用語の横に HelpMark が表示されます | `string \| HelpMarkProps` |           |

## CSS API

| 名前                           | 説明                         |
| :----------------------------- | :--------------------------- |
| `--g-definition-list-item-gap` | 定義リストアイテム間のスペース |
