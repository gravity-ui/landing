<!--GITHUB_BLOCK-->

# Disclosure

<!--/GITHUB_BLOCK-->

`Disclosure` は、ネストされたコンテンツを表示および非表示できる、折りたたみ可能なコンポーネントです。

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Disclosure summary="Summary">Content</Disclosure>
```

<!--/GITHUB_BLOCK-->

## 展開状態の制御

`expanded` および `onUpdate` プロパティを使用して、展開状態を制御できます。

制御されたコンポーネントの例:

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" defaultExpanded>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledDisclosure() {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <Disclosure summary="Summary" expanded={expanded} onUpdate={setExpanded}>
      Content
    </Disclosure>
  );
}
```

<!--/GITHUB_BLOCK-->

## サイズ

`size` プロパティを使用して、`Disclosure` のサイズを制御します。デフォルトのサイズは `m` です。

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Middle size" size="m">
                Content
            </Disclosure>
            <Disclosure summary="Large size" size="l">
                Content
            </Disclosure>
            <Disclosure summary="Extra large size" size="xl">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Middle size" size="m">
  Content
</Disclosure>
<Disclosure summary="Large size" size="l">
  Content
</Disclosure>
<Disclosure summary="Extra large size" size="xl">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## 矢印の位置

`start`: 矢印はヘッダーの先頭に配置されます（デフォルトで使用されます）。

`end`: 矢印はヘッダーの末尾に配置されます。

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Summary with start arrow" arrowPosition="start">
                Content
            </Disclosure>
            <Disclosure summary="Summary with end arrow" arrowPosition="end">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary with start arrow" arrowPosition="start">
  Content
</Disclosure>
<Disclosure summary="Summary with end arrow" arrowPosition="end">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## カスタムコンテンツ

`Disclosure.Summary` コンポーネントを使用してカスタムヘッダーを作成し、`Disclosure.Details` を使用してカスタムコンテンツを実装します。

<!--SANDBOX
import {Check} from '@gravity-ui/icons';
import {Button, Disclosure, Flex, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure>
                <Disclosure.Summary>
                    {(props) => (
                        <Button {...props}>
                            <Icon data={Check} size={14} />
                            Custom summary
                            <Icon data={Check} size={14} />
                        </Button>
                    )}
                </Disclosure.Summary>
                <div>Custom details</div>
                <div>More custom details</div>
            </Disclosure>
            <Disclosure summary="Summary">
                <Disclosure.Summary>
                    {(_props, defaultButton) => (
                        <Flex gap={4}>
                            {defaultButton}
                            <Icon data={Check} size={14} />
                        </Flex>
                    )}
                </Disclosure.Summary>
                <Disclosure.Details>Custom Details</Disclosure.Details>
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(props) => (
      <Button {...props}>
        <Icon data={Check} size={14} />
        Custom summary
        <Icon data={Check} size={14} />
      </Button>
    )}
  </Disclosure.Summary>
  <div>Custom details</div>
  <div>More custom details</div>
</Disclosure>
```

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(_props, defaultButton) => (
      <Flex gap={4}>
        {defaultButton}
        <Icon data={Check} size={14} />
      </Flex>
    )}
  </Disclosure.Summary>
  <Disclosure.Details>Custom Details</Disclosure.Details>
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## 無効状態

`disabled` プロパティを使用して、`Disclosure` を無効にすることができます。

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" disabled>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary" disabled>
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## プロパティ

### Disclosure

| 名前             | 説明                                                                 | タイプ                                                  | デフォルト   |
| :--------------- | :------------------------------------------------------------------- | :---------------------------------------------------- | :-------- |
| size             | コンポーネントのサイズ                                               | `"m"` `"l"` `"xl"`                                    | `"m"`     |
| className        | ルート要素の CSS クラス名                                            | `string`                                              |           |
| disabled         | 無効状態                                                             | `boolean`                                             | `false`   |
| defaultExpanded  | デフォルトの展開状態                                                 | `boolean`                                             | `false`   |
| expanded         | 制御された展開状態                                                   | `boolean`                                             |           |
| arrowPosition    | 矢印の位置を制御                                                     | `"start"` `"end"`                                     | `"start"` |
| summary          | コンテンツの概要                                                     | `React.ReactNode`                                     |           |
| keepMounted      | 折りたたまれた状態でもコンテンツを DOM に保持する                    | `boolean`                                             | `true`    |
| onUpdate         | 展開/折りたたみ状態が変更されたときに呼び出されるコールバック。     | `(expanded: boolean) => void`                         |           |
| onSummaryKeyDown | サマリーがフォーカスされているときのキーボードイベントで呼び出されるコールバック。 | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |           |
| children         | コンテンツ                                                           | `React.ReactNode`                                     |           |
| qa               | テスト識別子                                                         | `string`                                              |           |

### Disclosure.Summary

| 名前     | 説明                               | タイプ                                            | デフォルト              |
| :------- | :--------------------------------- | :---------------------------------------------- | :------------------- |
| children | レンダリング関数                   | `(props, defaultSummary) => React.ReactElement` |                      |
| qa       | テスト識別子                       | `string`                                        | `disclosure-summary` |

### Disclosure.Details

| 名前     | 説明     | タイプ              | デフォルト              |
| :------- | :-------------- | :---------------- | :------------------- |
| children | コンテンツ         | `React.ReactNode` |                      |
| qa       | テスト識別子 | `string`          | `disclosure-details` |

## CSS API

| 名前                                 | 説明                                          |
| :----------------------------------- | :--------------------------------------------------- |
| `--g-disclosure-text-color`          | コンテンツ概要のテキストカラー                   |
| `--g-disclosure-text-color-disabled` | 無効状態のコンテンツ概要のテキストカラー |
