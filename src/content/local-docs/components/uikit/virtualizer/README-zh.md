GRAVITY_TRANSLATION_BLOCK_0_END

Virtualizer 仅渲染当前可见的行窗口，这使得成千上万项的列表变得经济实惠。

```tsx
import {ListVirtualizer, Virtualizer} from '@gravity-ui/uikit/virtualizer';
```

此入口点需要 `@tanstack/react-virtual`：它是可选的对等依赖项，因此请将其安装在 `@gravity-ui/uikit` 旁边。

这里有两个组件。`Virtualizer` 是引擎 — 一个滚动容器，用于定位和测量您自己渲染的行。`ListVirtualizer` 是 [List](../List/README.md) 的虚拟化层：它包装了一个 `<List>`，列表通过引擎进行渲染，而无需进行任何其他更改。

## Virtualizer

组件渲染的元素本身就是滚动容器，因此其高度必须受限。`getItemSize` 是在行渲染之前的估计值；除非 `measure` 关闭，否则顶级行的测量高度会在挂载后替换它，这就是为什么可变高度的行无需配置的原因。

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

唯一改变的是包装器 — 里面的列表保持不变。所有配置属性都是可选的：如果没有 `estimateItemSize`，行高将来自列表的 `size`。

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

`List` 的根成为滚动容器，因此限制其高度由您决定 — 否则窗口将退化为完整的列表。该层的详细信息在 List 的 [Virtualization](../List/README.md#virtualization) 部分。

### 整个应用的单个包装器

包装器是一个上下文提供程序：它涵盖了它下面的每个 `List` 和 `Select`，包括 `Select` 的弹出窗口。使用 `minItemsCount`，它可以与主题 `Provider` 一起放置一次，并且仅虚拟化长列表 — 行数较少的列表将像没有包装器一样渲染，所有行都在 DOM 中。

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

`List` 计算其行数，包括节标题。`Select` 计算其选项，不包括组标题和过滤器，因此键入过滤器不会将列表从一种模式切换到另一种模式。

另一个包装器内部的包装器仅更改其接收到的内容，并从上面的包装器获取其余内容，就像嵌套的主题 `Provider` 一样。在根包装器下的单个列表周围：

- `<ListVirtualizer overscan={20}>` 保持根的阈值并更改缓冲区；
- `<ListVirtualizer minItemsCount={0}>` 无论大小如何都虚拟化列表；
- `<ListVirtualizer minItemsCount={Infinity}>` 保持其原始状态，并且不为此加载块。

### 按需加载

窗口的代码 — 包括 `@tanstack/react-virtual` — 本身就是一个块：导入 `ListVirtualizer` 不会将其引入应用程序的包。当第一个足够长的列表（满足 `minItemsCount`）渲染时，将加载该块，并且将要虚拟化的 `Select` 在挂载时开始加载它，在其弹出窗口打开之前。在块到达之前，列表会在同一个根中显示其第一行：页面不会变为空，并且窗口一旦可以渲染，就会替换它们，滚动到列表正在显示的活动行。如果块加载失败，错误将到达列表最近的错误边界。

> [!NOTE]
> 在服务器渲染的 HTML 中，虚拟化列表会显示其第一行：没有视口来测量窗口，因此窗口会在水合后接管。其余的行不在标记中 — 当其所有内容都必须在那里时，请将列表保持非虚拟化状态。

## 属性

### Virtualizer

其余属性将传递给滚动容器元素。

| 名称                  | 描述                                                                                             |                          类型                          | 默认值 |
| :-------------------- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------: | :-----: |
| count                 | 列表中第一级项目的数量                                                                           |                        `number`                        |         |
| getItemSize           | 项目的高度，包括其子项；子项会附带 `parentKey`                                                 |            `(index, parentKey?) => number`             |         |
| getItemKey            | 项目的键；子项会附带 `parentKey`                                                                 |              `(index, parentKey?) => Key`              |         |
| renderRow             | 渲染一行：项目、其父项的键以及一个渲染其子项的回调                                               | `(item, parentKey, renderChildren) => React.ReactNode` |         |
| measure               | 在挂载后测量顶层行的实际高度，而不是依赖 `getItemSize`                                           |                       `boolean`                        | `true`  |
| overscan              | 在可见窗口上方和下方渲染的行数                                                                   |                        `number`                        |   `0`   |
| disableVirtualization | 渲染所有行；适用于已知列表很小的场景                                                             |                       `boolean`                        |         |
| persistedIndexes      | 即使滚动出窗口也保留在窗口中的行；每个条目都是层次结构中索引的路径                               |                   `Array<number[]>`                    |         |
| loading               | 是否正在加载更多项目：在返回 `false` 之前，不会再次调用 `onLoadMore`                             |                       `boolean`                        |         |
| onLoadMore            | 滚动到接近末尾时调用                                                                             |                      `() => void`                      |         |
| apiRef                | 访问命令式 API 的 ref：`scrollToIndex`、`scrollToOffset`、`scrollOffset`、`scrollRect`             |              `React.Ref<VirtualizerApi>`               |         |
| containerRef          | 滚动容器元素的 ref                                                                               |                `React.Ref<HTMLElement>`                |         |

### ListVirtualizer

| 名称             | 描述                                                                                                                               |            类型             |          默认值          |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :-----------------------: |
| children         | `<List>` 内部的元素                                                                                                                       |         `ReactNode`         |                           |
| estimateItemSize | 在行渲染之前的高度估算值——一个常量或一个与行上下文相关的函数                                                                         | `number \| (ctx) => number` |       列表的 `size`       |
| measure          | 在挂载后测量行的实际高度（可变高度的行开箱即用）                                                                                             |          `boolean`          |          `true`           |
| minItemsCount    | 少于此行数的列表将呈现为没有包装器；`Select` 会计算其选项，不包括组标题和过滤器                                                              |          `number`           |            `0`            |
| overscan         | 可见窗口之外的行缓冲区                                                                                                                         |          `number`           |            `5`            |

嵌套的包装器会从其上层的包装器继承它未被提供的属性：表格中的默认值是外层包装器的默认值。