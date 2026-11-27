<!--GITHUB_BLOCK-->

# List

<!--/GITHUB_BLOCK-->

`List` コンポーネントは、カスタムレンダリングとキーボードナビゲーションをサポートする、アイテムのフィルタリング、ソート、仮想化されたリストをレンダリングします。

```tsx
import {List} from '@gravity-ui/uikit';
```

### ItemsHeight

アイテムリストの高さを決定します（またはリストの高さを返す関数）。リストの高さを動的に設定する場合に役立ちます。例: `(items: []) => number`。

### Items

リストのアイテムの配列を提供します。

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']} itemsHeight={160} />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']} itemsHeight={160} />
```

<!--/GITHUB_BLOCK-->

アイテムはスカラー値または任意の値を指定でき、いずれの場合も `truthy` である必要があります。
値が任意の値の場合は、フィルタリング関数とレンダリング関数を指定してください。
デフォルトのレンダリングでは、アイテムはテキストとしてのみ提供されます。

特別な `item.disabled` フィールドはアイテムを無効にします。

レンダリングと高さのカスタマイズは、実験の余地をたくさん提供します。
たとえば、以下のコードを使用すると、グループをエミュレートできます。

<!--SANDBOX
import type {ListProps} from '@gravity-ui/uikit';
import {List} from '@gravity-ui/uikit';

type Item = {
    title: string;
    group?: boolean;
};

const items: ListProps<Item>['items'] = [
    {
        title: 'one',
        group: true,
        disabled: true,
    },
    {
        title: 'two',
    },
    {
        title: 'three',
        group: true,
        disabled: true,
    },
    {
        title: 'four',
    },
];

export default function () {
    return (
        <List
            items={items}
            onItemClick={(value) => console.log(value)}
            renderItem={(item) => {
                if (item.group) {
                    return (
                        <div className={'group'}>
                            <div className={'select-text'}>{item.title}</div>
                        </div>
                    );
                }

                return (
                    <div className={'select'}>
                        <div className={'select-text'}>{item.title}</div>
                    </div>
                );
            }}
            itemHeight={(item) => (item.group ? 24 : 36)}
            itemsHeight={160}
            filterItem={(filter) => (item) => item.title.includes(filter)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={[
    {
      title: 'one',
      group: true,
      disabled: true,
    },
    {
      title: 'two',
    },
    {
      title: 'three',
      group: true,
      disabled: true,
    },
    {
      title: 'four',
    },
  ]}
  onItemClick={(value) => console.log(value)}
  renderItem={(item) => {
    if (item.group) {
      return (
        <div className={'group'}>
          <div className={'select-text'}>{item.title}</div>
        </div>
      );
    }
    return (
      <div className={'select'}>
        <div className={'select-text'}>{item.title}</div>
      </div>
    );
  }}
  itemHeight={(item) => (item.group ? 24 : 36)}
  itemsHeight={160}
  filterItem={(filter) => (item) => item.title.includes(filter)}
/>
```

<!--/GITHUB_BLOCK-->

### Filterable

`filterable` プロパティは、値が `false` の場合にアイテムを検索するための入力を無効にします。デフォルト値は `true` です。

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List
            items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
            itemsHeight={160}
            filterable={false}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  filterable={false}
/>
```

<!--/GITHUB_BLOCK-->

### Sortable

`sortable` プロパティは、値が `true` の場合にリストアイテムの入れ替えを有効にします。デフォルト値は `false` です。

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List
            items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
            itemsHeight={160}
            sortable
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  sortable={true}
/>
```

<!--/GITHUB_BLOCK-->

### Virtualization

仮想化を有効にするには、次のいずれかの条件が満たされていることを確認してください。

1. `itemsHeight` プロパティを設定します。この場合、リストの高さは固定され、その値と同じになります。
2. リストの親コンテナに `display: flex` スタイルを設定します。この場合、リストはコンテナの幅に適応します。

### External management

場合によっては、外部アイテムにフォーカスを維持することで、キーボードによるアイテムのアクティビティを管理したい場合があります。
リストへの `onKeyDown` イベント転送がここで役立ちます。
同様に、アクティブなアイテムが失われたときの動作を繰り返す必要がある場合は、`onFocus` および `onBlur` を転送できます。

### Filter

`filter` プロパティは、外部ソートで使用されるフィルター値を提供します。

## Properties

| Name              | Description                                                                                                                                                                                                         | Type              | Default    |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------- | :--------- |
| [items](#items)   | アイテムのリスト                                                                                                                                                                                                    | `Array`           | []         |
| itemHeight        | アイテムの高さを `px` で指定するか、アイテムの高さを返す関数 `(item: any) => number` を指定します。                                                                                                                   | `Number/Function` | 28         |
| itemKey           | アイテムの安定した一意のキーを返す関数 `(item: any) => string` を指定します。これを使用すると、リストがフィルタリングまたは並べ替えられたときにアイテムコンポーネントの状態が保持されます。                                                                                    | `Function`        | item index |
| itemsHeight       | リストの高さを指定するか、リストの高さを返す関数 `(items: []) => number` を指定します。リストの高さを動的に設定する場合に役立ちます。                                                                                      | `Number/Function` |            |
| renderItem        | アイテムを入力として受け取り、Reactノードを返すレンダリング関数 `(item: any, isItemActive: bool, itemIndex: number) => React.ReactNode`。                                                               | `Function`        |            |
| filterItem        | 指定された文字列を検索またはフィルタリング入力として受け取り、アイテムを入力として受け取りブール値を返す関数 `(filter: string) => (item: any) => boolean` を返すフィルタリング関数。                                                                                | `Function`        |            |
| filterable        | フィルタフィールドを有効にするフラグ。                                                                                                                                                                                  | `Boolean`         | true       |
| filterPlaceholder | フィルタフィールドのプレースホルダー。                                                                                                                                                                                | `String`          |            |
| filter            | フィルタ値（外部ソートが使用される場合）。                                                                                                                                                                            | `String`          |            |
| filterClassName   | フィルタ入力スタイルのためのクラス。                                                                                                                                                                                  | `String`          |            |
| onChangeFilter    | フィルタ変更ハンドラ（外部ソートが使用される場合）： `(filter: string) => void`。                                                                                                                               | `Function`        |            |
| onFilterEnd       | 内部フィルタリングが完了した後に呼び出される関数： `({items}: {items: T[]}) => void`                                                                                                                            | `Function`        |            |
| emptyPlaceholder  | 空のリストのプレースホルダー。                                                                                                                                                                                      | `React.ReactNode` |            |
| sortable          | リストの並べ替えを有効にするフラグ。                                                                                                                                                                                  | `Boolean`         |            |
| sortHandleAlign   | 並べ替えインジケーターの配置（左または右）。                                                                                                                                                                        | `left` `right`    |            |
| onSortEnd         | 並べ替えイベントハンドラ： `({oldIndex: number, newIndex: number}) => void`。                                                                                                                                            | `Function`        |            |
| virtualized       | 仮想化を有効にするフラグ。無効な場合、すべてのアイテムが一度にレンダリングされます。                                                                                                                                      | `Boolean`         | true       |
| onItemClick       | アイテムクリックハンドラ： `(item: any, index: number, fromKeyboard?: bool) => void`。                                                                                                                              | `Function`        |            |
| deactivateOnLeave | このフラグが設定されている場合、カーソルがアイテムから離れたり、リストがフォーカスを失ったりすると、アイテムの選択が無効になります。設定されていない場合、最後に選択されたアイテムが常に選択されます。                                                                    | `Boolean`         | true       |
| activeItemIndex   | 値が設定されている場合、このインデックスのアイテムがアクティブとしてレンダリングされます。                                                                                                                                   | `Number`          |            |
| selectedItemIndex | 値が設定されている場合、このインデックスのアイテムが選択済みとしてレンダリングされます（背景色は `--g-color-base-selection` から取得されます）。                                                                                 | `Number/Array`    |            |
| itemClassName     | アイテムコンテナに追加するカスタムクラス名。                                                                                                                                                                          | `String`          |            |
| itemsClassName    | アイテムリストに追加するカスタムクラス名。                                                                                                                                                                            | `String`          |            |
| role              | `role` HTML属性                                                                                                                                                                                                 | `String`          | list       |
| id                | `id` HTML属性                                                                                                                                                                                                 | `string`          |            |
| onChangeActive    | キーボードフォーカスを持つと視覚的に強調表示されているリストボックス内のオプションのインデックスが変更されたときに発生します： `(index?: number) => void`。                                                                      | `Function`        |            |

GRA
