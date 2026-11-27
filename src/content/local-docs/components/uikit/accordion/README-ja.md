Accordion コンポーネントを使用すると、ユーザーが情報のセクションを表示または非表示できる、折りたたみ可能なコンテンツパネルを作成できます。これは、大量のコンテンツをコンパクトに整理する場合に役立ちます。

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

# Accordion

<!--/GITHUB_BLOCK-->

## アコーディオンの状態を制御する

ルートコンポーネントの `value` および `onUpdate` プロパティ、またはアイテムごとにアコーディオンの状態を制御できます。

ルートコンポーネントから状態を制御する例：

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Accordion>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="Settings" value="item1">
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item summary="Notifications" value="item2">
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

expanded プロパティを使用してアイテムごとに状態を制御する例：

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [value, setValue] = React.useState('item1');

  return (
    <Accordion value={value} onUpdate={setValue}>
      <Accordion.Item summary="Settings" value="item1">
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" value="item2">
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="Settings"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item
                summary="Notifications"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

## サイズ

`size` プロパティを使用して `Accordion` のサイズを制御します。デフォルトのサイズは `m` です。

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [item1, setItem1] = React.useState(true);
  const [item2, setItem2] = React.useState(false);
  return (
    <Accordion>
      <Accordion.Item summary="Settings" onUpdate={setItem1} value="item1" expanded={item1}>
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" onUpdate={setItem2} value="item2" expanded={item2}>
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="Medium Size">Content for medium accordion</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Large Size">Content for large accordion</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Extra Large Size">
                    Content for extra large accordion
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

## 表示形式

`solid`: 背景付きのメイン表示（デフォルトで使用）。

`top-bottom`: 上下ボーダー付きの表示。

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Medium Size">
        Content for medium accordion
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Large Size">
        Content for large accordion
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Extra Large Size">
        Content for extra large accordion
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion view="solid">
                <Accordion.Item summary="Solid View">Content with solid background</Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Top-Bottom View">
                    Content with top-bottom borders
                </Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

## 矢印の位置

`end`: ヘッダーの末尾に矢印が表示される（デフォルトで使用）。

`start`: ヘッダーの先頭に矢印が表示される。

<!--GITHUB_BLOCK-->

```tsx
<Accordion view="solid">
    <Accordion.Item summary="Solid View">
        Content with solid background
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
<Accordion view="top-bottom">
    <Accordion.Item summary="Top-Bottom View">
        Content with top-bottom borders
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Arrow at End">Content with arrow at the end</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Arrow at Start">
                    Content with arrow at the start
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

## 複数

`multiple` プロパティを使用すると、複数のアコーディオンアイテムを同時に展開できます。

<!--GITHUB_BLOCK-->

```tsx
<Accordion arrowPosition="end">
    <Accordion.Item summary="Arrow at End">
        Content with arrow at the end
    </Accordion.Item>
</Accordion>
<Accordion arrowPosition="start">
    <Accordion.Item summary="Arrow at Start">
        Content with arrow at the start
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
            <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
            <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

## カスタムサマリー

`Accordion.Summary` コンポーネントを使用してカスタムヘッダーを作成します。

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {Accordion, Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item value="custom">
                <Accordion.Summary>
                    {(props) => (
                        <Button {...props} view="flat" width="max">
                            Custom Summary Button
                        </Button>
                    )}
                </Accordion.Summary>
                Content with custom summary component
            </Accordion.Item>
            <Accordion.Item summary="Regular Summary">
                Content with regular summary prop
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

## 無効状態

`disabled` プロパティを使用して、個々のアコーディオンアイテムを無効にすることができます。

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item value="custom">
    <Accordion.Summary>
      {(props) => (
        <Button {...props} view="flat" width="max">
          <Icon data={Settings} size={16} />
          Custom Summary Button
        </Button>
      )}
    </Accordion.Summary>
    Content with custom summary component
  </Accordion.Item>
  <Accordion.Item summary="Regular Summary">Content with regular summary prop</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="Active Item">
                This item is active and can be expanded
            </Accordion.Item>
            <Accordion.Item summary="Disabled Item" disabled>
                This item is disabled and cannot be expanded
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

## プロパティ

### Accordion

| 名前          | 説明                                     |            型            |  デフォルト  |
| :------------ | :--------------------------------------- | :----------------------: | :---------: |
| size          | アコーディオンのサイズ                   |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | アコーディオンの外観                     |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | 複数のアイテムを同時に展開可能にする     |         `boolean`          |  `false`  |
| arrowPosition | 矢印インジケーターの位置                 |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | 未制御状態のデフォルト値                 | `string` `string[]` `null` |             |
| value         | 制御状態の現在の値                       | `string` `string[]` `null` |             |
| onUpdate      | 状態が変更されたときに呼び出されるコールバック関数 |         `Function`         |             |
| ariaLevel     | アクセシビリティのための見出しレベル     |          `number`          |    `3`    |
| className     | CSS クラス名                             |          `string`          |             |
| qa            | テストに使用される HTML `data-qa` 属性   |          `string`          |             |

### Accordion.Item

| 名前            | 説明                                 |       型        | デフォルト |
| :-------------- | :----------------------------------- | :-------------: | :-------: |
| value           | アイテムの一意の識別子               |     `string`      |           |
| summary         | アコーディオンアイテムのヘッダー     | `React.ReactNode` |           |
| expanded        | 制御された展開状態                   |     `boolean`     |           |
| defaultExpanded | デフォルトの展開状態                 |     `boolean`     |           |
| disabled        | アコーディオンアイテムを無効にする   |     `boolean`     | `false` |
| keepMounted     | 折りたたまれた状態でもコンテンツをDOMに保持する |     `boolean`     |           |
| onUpdate        | アイテムの状態が変更されたときに呼び出されるコールバック関数 |    `Function`     |           |
| className       | CSS クラス名                         |     `string`      |           |
| qa              | テストに使用される HTML `data-qa` 属性 |     `string`      |           |

### Accordion.Summary
<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="Active Item">This item is active and can be expanded</Accordion.Item>
  <Accordion.Item summary="Disabled Item" disabled>
    This item is disabled and cannot be expanded
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

| 名前     | 説明                                                                                             | 型                                             | デフォルト                                                                                             |
| :------- | :----------------------------------------------------------------------------------------------- | :---------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| children | カスタムサマリーレンダリング関数                                                                   | `(props, defaultSummary) => React.ReactElement` |                                                                                                         |
| qa       | HTMLの`data-qa`属性。テストに使用されます。`Accordion.Item`で`qa`が渡された場合にのみ機能します。 |                    `string`                     | `Accordion.Item`で`qa`が渡された場合は`${accordion-item}-summary`、そうでない場合は`disclosure-summary` |

## CSS API

| 名前                           | 説明                               |
| :----------------------------- | :--------------------------------- |
| `--g-accordion-padding-inline` | アコーディオンのインライン（水平）パディング |