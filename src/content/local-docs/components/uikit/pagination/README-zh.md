GRAVITY_TRANSLATION_BLOCK_0_END

`Pagination` 渲染页码导航控件——包含页码、上一页/下一页按钮以及可选的每页显示数量选择器——用于将长列表或表格分页显示。

```tsx
import {Pagination} from '@gravity-ui/uikit';
```

## 用法

```jsx
import {Pagination, PaginationProps} from '@gravity-ui/uikit';

const [state, setState] = React.useState({page: 1, pageSize: 100});

const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
  setState((prevState) => ({...prevState, page, pageSize}));

const pagination = <Pagination page={1} pageSize={100} total={1000} onUpdate={handleUpdate} />;
```

## 自定义组件

您可以使用 `pageComponent` 属性来覆盖可点击分页项（导航按钮和页码按钮）的根元素。传递 `pageComponent="a"` 并从 `getPageProps` 返回 `href` 来使用常规链接。对于路由集成，传递一个感知路由的组件，例如 `Link`，并返回特定于路由的属性，例如 `to`。

`getPageProps` 会为每个可点击的项（页码按钮和导航按钮）调用。它**不会**为省略号、"第 X 页，共 Y 页"指示器、移动布局中的简单（当前）页项或禁用的导航按钮调用（这些始终保持为惰性的原生 `<button disabled>`，因此无法激活，包括通过键盘）。Pagination 管理的属性（`onClick`、`className`、`size`、`view`、`selected`、`disabled`、`qa`、`aria-current`、`children`）优先于 `getPageProps` 返回的值。

### 常规链接 (`pageComponent="a"`)

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

### 路由链接（例如 `react-router`）

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

## 属性

| 名称            | 描述                                                                                                                                      |            类型             |   默认值    |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :----------: |
| className       | `class` HTML 属性                                                                                                                           |          `string`           |              |
| compact         | 隐藏“第一页”、“上一页”和“下一页”按钮的标题。在移动版本中始终设置为 `true`。                                                                        |          `boolean`          |    `true`    |
| onUpdate        | 在页码或 `pageSize` 更改时调用                                                                                                                            |         `Function`          |              |
| size            | 分页项的大小。默认情况下，在移动版本中其值为 `l`，在桌面版本中为 `m`                                                                        |          `string`           |              |
| page            | 当前页码                                                                                                                              |          `number`           |              |
| pageSize        | 每页数据项的数量                                                                                                                            |          `number`           |              |
| pageSizeOptions | 允许您指定 `sizeChanger` 的选项                                                                                                                                 |         `number[]`          |              |
| total           | 数据项的总数                                                                                                                            |          `number`           |              |
| showInput       | 显示用于直接导航到页面的输入框                                                                                                                                       |          `boolean`          |   `false`    |
| showPages       | 显示页码                                                                                                                             |          `boolean`          |    `true`    |
| qa              | `data-qa` HTML 属性，用于测试                                                                                                                                      |          `string`           |              |
| view            | 设置按钮和控件的外观。影响移动设备上分页输入框的视图。                                                                                              |   `"outlined" \| "clear"`   | `"outlined"` |
| pageComponent   | 覆盖可点击分页项（导航和页面按钮）的根元素。对于常规链接或支持路由的组件，请使用 `"a"`。 |  `PaginationPageComponent`  |              |
| getPageProps    | 为每个可点击项返回额外的 props（例如，对于 `"a"` 的 `href` 或对于路由 `Link` 的 `to`）。仅在设置了 `pageComponent` 时应用。 | `PaginationPagePropsGetter` |              |