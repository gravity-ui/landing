<!--GITHUB_BLOCK-->

# Pagination

<!--/GITHUB_BLOCK-->

`Pagination` は、ページネーションコントロール（ページ番号、前へ/次へボタン、およびオプションのページサイズセレクター）をレンダリングします。これは、長いリストやテーブルをページ分割するために使用されます。

```tsx
import {Pagination} from '@gravity-ui/uikit';
```

## 使用方法

```jsx
import {Pagination, PaginationProps} from '@gravity-ui/uikit';

const [state, setState] = React.useState({page: 1, pageSize: 100});

const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
  setState((prevState) => ({...prevState, page, pageSize}));

const pagination = <Pagination page={1} pageSize={100} total={1000} onUpdate={handleUpdate} />;
```

## カスタムコンポーネント

`pageComponent` プロパティを使用して、クリック可能なページネーションアイテム（ナビゲーションボタンとページボタン）のルート要素をオーバーライドできます。`pageComponent="a"` を渡し、`getPageProps` から `href` を返すことで、通常のリンクを使用できます。ルーター統合の場合は、`Link` のようなルーター対応コンポーネントを渡し、`to` のようなルーター固有のプロパティを返します。

`getPageProps` は、各クリック可能なアイテム（ページボタンとナビゲーションボタン）に対して呼び出されます。省略記号、"ページ表示" インジケーター、シンプルな（現在の）ページアイテム（モバイルレイアウト）、または無効なナビゲーションボタン（これらは常に不活性なネイティブ `<button disabled>` のままになり、キーボード経由でもアクティブ化できません）には呼び出されません。Pagination によって管理されるプロパティ（`onClick`、`className`、`size`、`view`、`selected`、`disabled`、`qa`、`aria-current`、`extraProps`、`children`）は、`getPageProps` から返された値よりも優先されます。

### 通常のリンク (`pageComponent="a"`)

```jsx
import {Pagination} from '@gravity-ui/uikit';
import type {PaginationProps, PaginationPagePropsGetter} from '@gravity-ui/uikit';

const total = 1000;
const page = 1;
const pageSize = 100;

const noop: PaginationProps['onUpdate'] = () => {};

const getPageProps: PaginationPagePropsGetter = ({page}) => ({href: `?page=${page}`});

const pagination = (
  <Pagination
    page={page}
    pageSize={pageSize}
    total={total}
    onUpdate={noop}
    pageComponent="a"
    getPageProps={getPageProps}
  />
);
```

### ルーターリンク（例: `react-router`）

```jsx
import {Pagination} from '@gravity-ui/uikit';
import type {PaginationProps, PaginationPagePropsGetter} from '@gravity-ui/uikit';
import {Link} from 'react-router-dom';

const total = 1000;
const page = 1;
const pageSize = 100;

const noop: PaginationProps['onUpdate'] = () => {};

const getPageProps: PaginationPagePropsGetter<{to: string}> = ({page}) => ({
  to: `?page=${page}`,
});

const pagination = (
  <Pagination
    page={page}
    pageSize={pageSize}
    total={total}
    onUpdate={noop}
    pageComponent={Link}
    getPageProps={getPageProps}
  />
);
```

## プロパティ

| 名前            | 説明                                                                                                                                                             |            型             |   デフォルト    |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------: | :-----------: |
| className       | `class` HTML 属性                                                                                                                                                |          `string`           |               |
| compact         | `First`、`Previous`、`Next` ボタンのタイトルを非表示にします。モバイルバージョンでは常に `true` に設定されます。                                                                                             |          `boolean`          |    `true`    |
| onUpdate        | ページ番号または `pageSize` が変更されたときに呼び出されます                                                                                                                             |         `Function`          |               |
| size            | ページネーションアイテムのサイズ。デフォルトでは、モバイルバージョンでは `l`、デスクトップバージョンでは `m` です                                                                                                                               |          `string`           |               |
| page            | 現在のページ番号                                                                                                                                                 |          `number`           |               |
| pageSize        | 1 ページあたりのデータアイテム数                                                                                                                                 |          `number`           |               |
| pageSizeOptions | `sizeChanger` のオプションを指定できます                                                                                                                             |         `number[]`          |               |
| total           | データアイテムの総数                                                                                                                                             |          `number`           |               |
| showInput       | ページに直接移動するための入力を表示します                                                                                                                                         |          `boolean`          |   `false`    |
| showPages       | ページ番号を表示します                                                                                                                                           |          `boolean`          |    `true`    |
| qa              | テストに使用される `data-qa` HTML 属性                                                                                                                             |          `string`           |               |
| view            | ボタンとコントロールの外観を設定します。モバイルでのページネーション入力の外観に影響します。                                                                                                                             |   `"outlined" \| "clear"`   | `"outlined"` |
| pageComponent   | クリック可能なページネーションアイテム（ナビゲーションおよびページボタン）のルート要素をオーバーライドします。通常のリンクには `"a"` を、ルーター対応コンポーネントにはルーター対応コンポーネントを使用します。
