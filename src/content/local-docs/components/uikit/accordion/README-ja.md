<!--/GITHUB_BLOCK-->

# アコーディオン

<!--/GITHUB_BLOCK-->

アコーディオンコンポーネントを使用すると、ユーザーが情報のセクションを表示または非表示できる、折りたたみ可能なコンテンツパネルを作成できます。これは、大量のコンテンツをコンパクトに整理する場合に便利です。

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## 基本的な例

```tsx
<Accordion>
  <Accordion.Item summary="最初の項目">最初の項目のコンテンツ</Accordion.Item>
  <Accordion.Item summary="2番目の項目">2番目の項目のコンテンツ</Accordion.Item>
  <Accordion.Item summary="3番目の項目">3番目の項目のコンテンツ</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## アコーディオンの状態を制御する

ルートコンポーネントの `value` および `onUpdate` プロパティ、または項目ごとにアコーディオンの状態を制御できます。

ルートコンポーネントから状態を制御する例：

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="設定" value="item1">
                アプリケーションの設定を構成します
            </Accordion.Item>
            <Accordion.Item summary="通知" value="item2">
                通知設定を管理します
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [value, setValue] = React.useState('item1');

  return (
    <Accordion value={value} onUpdate={setValue}>
      <Accordion.Item summary="設定" value="item1">
        アプリケーションの設定を構成します
      </Accordion.Item>
      <Accordion.Item summary="通知" value="item2">
        通知設定を管理します
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

expanded プロパティを使用して、項目ごとに状態を制御する例：

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="設定"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                アプリケーションの設定を構成します
            </Accordion.Item>
            <Accordion.Item
                summary="通知"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                通知設定を管理します
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [item1, setItem1] = React.useState(true);
  const [item2, setItem2] = React.useState(false);
  return (
    <Accordion>
      <Accordion.Item summary="設定" onUpdate={setItem1} value="item1" expanded={item1}>
        アプリケーションの設定を構成します
      </Accordion.Item>
      <Accordion.Item summary="通知" onUpdate={setItem2} value="item2" expanded={item2}>
        通知設定を管理します
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

## サイズ

`size` プロパティを使用して `Accordion` のサイズを制御します。デフォルトのサイズは `m` です。

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="中サイズ">中サイズアコーディオンのコンテンツ</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="大サイズ">大サイズアコーディオンのコンテンツ</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="特大サイズ">
                    特大サイズアコーディオンのコンテンツ
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="中サイズ">
        中サイズアコーディオンのコンテンツ
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="大サイズ">
        大サイズアコーディオンのコンテンツ
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="特大サイズ">
        特大サイズアコーディオンのコンテンツ
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 表示形式

`solid`: 背景付きのメイン表示（デフォルトで使用）。

`top-bottom`: 上下ボーダー付きの表示。

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

## Arrow Position

`end`: Arrow is positioned at the end of the header (used by default).

`start`: Arrow is positioned at the start of the header.

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

## Multiple

The `multiple` property allows multiple accordion items to be expanded simultaneously.

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

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Custom Summary

Use the `Accordion.Summary` component to create a custom header.

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

## Disabled State

Individual accordion items can be disabled using the `disabled` property.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

```jsx
export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="アクティブなアイテム">
                このアイテムはアクティブで展開可能です
            </Accordion.Item>
            <Accordion.Item summary="無効なアイテム" disabled>
                このアイテムは無効で展開できません
            </Accordion.Item>
        </Accordion>
    );
}
```

SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="アクティブなアイテム">このアイテムはアクティブで展開可能です</Accordion.Item>
  <Accordion.Item summary="無効なアイテム" disabled>
    このアイテムは無効で展開できません
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## プロパティ

### Accordion

| 名前          | 説明                               |            型            |  デフォルト  |
| :------------ | :--------------------------------- | :----------------------: | :---------: |
| size          | アコーディオンのサイズ             |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | アコーディオンの外観               |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | 複数のアイテムを同時に展開できるか |         `boolean`          |  `false`  |
| arrowPosition | 矢印インジケーターの位置           |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | 未制御状態のデフォルト値           | `string` `string[]` `null` |             |
| value         | 制御状態の現在の値                 | `string` `string[]` `null` |             |
| onUpdate      | 状態が変更されたときに呼び出されるコールバック関数 |         `Function`         |             |
| ariaLevel     | アクセシビリティのためのヘッダーレベル |          `number`          |    `3`    |
| className     | CSSクラス名                        |          `string`          |             |
| qa            | テストに使用されるHTML `data-qa` 属性 |          `string`          |             |

### Accordion.Item

| 名前            | 説明                               |       型        | デフォルト |
| :-------------- | :--------------------------------- | :-------------: | :-------: |
| value           | アイテムの一意の識別子             |     `string`      |           |
| summary         | アコーディオンアイテムのヘッダー   | `React.ReactNode` |           |
| expanded        | 制御された展開状態                 |     `boolean`     |           |
| defaultExpanded | デフォルトの展開状態               |     `boolean`     |           |
| disabled        | アコーディオンアイテムを無効にする |     `boolean`     | `false` |
| keepMounted     | 折りたたまれたときでもコンテンツをDOMに保持する |     `boolean`     |           |
| onUpdate        | アイテムの状態が変更されたときに呼び出されるコールバック関数 |    `Function`     |           |
| className       | CSSクラス名                        |     `string`      |           |
| qa              | テストに使用されるHTML `data-qa` 属性 |     `string`      |           |

### AccordionSummary

| 名前     | 説明                                                                             |                      型                       |                                          デフォルト                                          |
| :------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | カスタムサマリーレンダリング関数                                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | HTML `data-qa` 属性。テストに使用されます。`Accordion.Item` に `qa` が渡された場合にのみ機能します。 |                    `string`                     | `${accordion-item}-summary` (Accordion.Item に qa が渡された場合)、`disclosure-summary` (そうでない場合) |

## CSS API

| 名前                           | 説明                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | アコーディオンのインライン (水平) パディング |