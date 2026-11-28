GRAVITY_TRANSLATION_BLOCK_0_END

Virtualizer は現在表示されている行のウィンドウのみをレンダリングするため、数万件のアイテムを持つリストでも効率的に表示できます。

```tsx
import {ListVirtualizer, Virtualizer} from '@gravity-ui/uikit/virtualizer';
```

このエントリポイントには `@tanstack/react-virtual` が必要です。これはオプションの peer dependency なので、`@gravity-ui/uikit` と一緒にインストールしてください。

ここには2つのコンポーネントがあります。`Virtualizer` はエンジンであり、スクロールコンテナが自分でレンダリングする行の位置決めと測定を行います。`ListVirtualizer` は [List](../List/README.md) の仮想化レイヤーです。これは `<List>` をラップし、リストはエンジンを通してレンダリングされます。他の変更は必要ありません。

## Virtualizer

コンポーネントがレンダリングする要素はスクロールコンテナ自体なので、その高さは制限する必要があります。`getItemSize` は行がレンダリングされる前の推定値です。`measure` がオフになっていない限り、マウント後にトップレベルの行の測定された高さがこれを置き換えます。そのため、可変高さの行は設定不要です。

```tsx
import {Virtualizer} from '@gravity-ui/uikit/virtualizer';

const ROW_HEIGHT = 32;

function Log({records}) {
  return (
    <Virtualizer
      style={{height: 400}}
      count={records.length}
      getItemSize={() => ROW_HEIGHT}
      getItemKey={(index) => records[index].id}
      renderRow={({index}) => <div style={{height: ROW_HEIGHT}}>{records[index].message}</div>}
    />
  );
}
```

## ListVirtualizer

変更されるのはラッパーのみです。中のリストはそのままです。そのすべての設定プロパティはオプションです。`estimateItemSize` がない場合、行の高さはリストの `size` から取得されます。

```tsx
import {List} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

function TrackList({tracks}) {
  return (
    <ListVirtualizer estimateItemSize={28}>
      <List
        aria-label="Archive"
        style={{maxHeight: 480}}
        items={tracks}
        getItemContent={(track) => track.title}
      />
    </ListVirtualizer>
  );
}
```

`List` のルートがスクロールコンテナになるため、その高さを制限するのはユーザーの責任です。そうしないと、ウィンドウは完全なリストに退化します。レイヤーの詳細は、List の [仮想化](../List/README.md#virtualization) セクションにあります。

### アプリ全体のための1つのラッパー

ラッパーはコンテキストプロバイダーです。これは、その下にあるすべての `List` と `Select`、および `Select` のポップアップをカバーします。`minItemsCount` を使用すると、テーマ `Provider` と一緒に一度だけ配置し、長いリストのみを仮想化できます。行数が少ないリストは、ラッパーがない場合と同じように、すべての行が DOM にレンダリングされます。

```tsx
import {Provider} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

root.render(
  <Provider theme="light">
    <ListVirtualizer minItemsCount={50}>
      <App />
    </ListVirtualizer>
  </Provider>,
);
```

`List` はセクションヘッダーを含めて行数をカウントします。`Select` はグループヘッダーとフィルターを除いたオプションの数をカウントします。そのため、フィルターに入力してもリストが一方のモードからもう一方のモードに切り替わることはありません。

ルートラッパーの下にある別のラッパーは、与えられたもののみを変更し、ネストされたテーマ `Provider` のように、残りは上のものから取得します。ルートラッパーの下の単一リストの周り:

- `<ListVirtualizer overscan={20}>` はルートのしきい値を維持し、バッファを変更します。
- `<ListVirtualizer minItemsCount={0}>` はリストのサイズに関係なく仮想化します。
- `<ListVirtualizer minItemsCount={Infinity}>` はプレーンなままにし、チャンクはロードされません。

### オンデマンドでの読み込み

ウィンドウのコード（`@tanstack/react-virtual` を含む）は独自のチャンクです。`ListVirtualizer` をインポートしても、アプリのバンドルには含まれません。チャンクは、`minItemsCount` に十分な長さの最初のリストがレンダリングされるときにロードされます。仮想化される `Select` は、ポップアップが開く前にマウント時にロードを開始します。チャンクが到着するまで、リストは同じルートで最初の行を表示します。ページが空になることはなく、ウィンドウはレンダリング可能になり次第、リストが表示していたアクティブな行にスクロールされます。チャンクのロードに失敗した場合、エラーはリストの最も近いエラー境界に到達します。

> [!NOTE]
> サーバーレンダリングされた HTML では、仮想化されたリストには最初の行が表示されます。ビューポートがないため、ウィンドウはハイドレーション後に引き継がれます。残りの行はマークアップに含まれていません。コンテンツ全体がそこにある必要がある場合は、リストを仮想化しないでください。

## プロパティ

### Virtualizer

残りのプロパティはスクロールコンテナ要素に渡されます。

| 名前                  | 説明                                                                                             |                          型                          | デフォルト |
| :-------------------- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------: | :-----: |
| count                 | リスト内の最初のレベルのアイテム数                                                               |                        `number`                        |         |
| getItemSize           | アイテムの高さ（子アイテムを含む）。子アイテムは `parentKey` と共に渡されます。                               |            `(index, parentKey?) => number`             |         |
| getItemKey            | アイテムのキー。子アイテムは `parentKey` と共に渡されます。                                          |              `(index, parentKey?) => Key`              |         |
| renderRow             | 行をレンダリングします。アイテム、親のキー、および子をレンダリングするコールバックを受け取ります。                               | `(item, parentKey, renderChildren) => React.ReactNode` |         |
| measure               | `getItemSize` を信頼する代わりに、マウント後にトップレベルの行の実際の高さを測定します。                               |                       `boolean`                        | `true`  |
| overscan              | 表示ウィンドウの上下にレンダリングされる行数                                                               |                        `number`                        |   `0`   |
| disableVirtualization | すべての行をレンダリングします。リストが小さいことがわかっている場合に便利です。                                       |                       `boolean`                        |         |
| persistedIndexes      | スクロールアウトしてもウィンドウ内に保持される行。各エントリは階層内のインデックスのパスです。                               |                   `Array<number[]>`                    |         |
| loading               | より多くのアイテムがロード中かどうか。`false` に戻るまで `onLoadMore` は再度呼び出されません。                           |                       `boolean`                        |         |
| onLoadMore            | スクロールが終端に近づいたときに呼び出されます。                                                               |                      `() => void`                      |         |
| apiRef                | 命令型 API への参照: `scrollToIndex`, `scrollToOffset`, `scrollOffset`, `scrollRect`                               |              `React.Ref<VirtualizerApi>`               |         |
| containerRef          | スクロールコンテナ要素への参照                                                                     |                `React.Ref<HTMLElement>`                |         |

### ListVirtualizer
GRAVITY_TRANSLATION_BLOCK_1_END

| 名前             | 説明                                                                                                                               |            型             |          デフォルト          |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :-----------------------: |
| children         | `<List>` の内部                                                                                                                       |         `ReactNode`         |                           |
| estimateItemSize | レンダリングされる前の行の高さの推定値 — 定数または行のコンテキストの関数                                          | `number \| (ctx) => number` | リストの `size` による |
| measure          | マウント後に実際の行の高さを測定します (可変高さの行は標準ではサポートされていません)                                               |          `boolean`          |          `true`           |
| minItemsCount    | より少ない行のリストは、ラッパーがないかのようにレンダリングされます。`Select` は、グループヘッダーやフィルターなしでオプションをカウントします |          `number`           |            `0`            |
| overscan         | 表示ウィンドウの外側にある行のバッファ                                                                                          |          `number`           |            `5`            |

別のラッパーの中にネストされたラッパーは、上位のラッパーから与えられていないプロパティを受け取ります。テーブルのデフォルトは、最も外側のラッパーのデフォルトです。