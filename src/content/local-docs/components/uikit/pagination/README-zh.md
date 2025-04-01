<!--GITHUB_BLOCK-->

# 分页

<!--/GITHUB_BLOCK-->

```tsx
import {Pagination} from '@gravity-ui/uikit';
```

此组件呈现分页。

## 用法

```jsx
import {Pagination, PaginationProps} from '@gravity-ui/uikit';

const [state, setState] = React.useState({page: 1, pageSize: 100});

const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
  setState((prevState) => ({...prevState, page, pageSize}));

const pagination = <Pagination page={1} pageSize={100} total={1000} onUpdate={handleUpdate} />;
```

## 属性

| 姓名            | 描述                                                                            |    类型    |  默认   |
| :-------------- | :------------------------------------------------------------------------------ | :--------: | :-----: |
| className       | `class` HTML 属性                                                               |  `string`  |         |
| 紧凑的          | 隐藏 `First` `Previous` 、和 `Next` 按钮的标题。`true` 在移动版本中始终设置为。 | `boolean`  | `true`  |
| onUpdate        | 页码或 `pageSize` 更改时调用                                                    | `Function` |         |
| 尺寸            | 分页项目的大小。默认情况下，它的值 `l` 在移动版本中 `m` ，在桌面版本中          |  `string`  |         |
| 页              | 当前页码                                                                        |  `number`  |         |
| pageSize        | 每页的数据项数                                                                  |  `number`  |         |
| pageSizeOptions | 允许您指定 `sizeChanger` 选项                                                   | `number[]` |         |
| 总              | 数据项总数                                                                      |  `number`  |         |
| showInput       | 显示直接导航到页面的输入                                                        | `boolean`  | `false` |
| showPages       | 显示页码                                                                        | `boolean`  | `true`  |
| qa              | `data-qa` HTML 属性，用于测试                                                   |  `string`  |         |
