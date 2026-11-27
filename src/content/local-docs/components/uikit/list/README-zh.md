<!--GITHUB_BLOCK-->

# List

<!--/GITHUB_BLOCK-->

`List` 组件渲染一个可过滤、可排序且虚拟化的项目列表，支持自定义渲染和键盘导航。

```tsx
import {List} from '@gravity-ui/uikit';
```

### ItemsHeight

确定项目列表的高度（或返回列表高度值的函数）。当动态设置列表高度时，例如 `(items: []) => number`，这会很有帮助。

### Items

提供项目列表的数组：

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

项目可以是标量或任意值，并且在任何情况下都必须是 `truthy`。
如果它是任意值，请确保指定过滤和渲染函数。
默认渲染仅将项目作为文本提供。

特殊的 `item.disabled` 字段会禁用一个项目。

渲染和高度自定义提供了充足的实验空间。
例如，下面的代码允许您模拟分组：

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

如果 `filterable` 属性的值为 `false`，则禁用用于搜索项目的输入框。其默认值为 `true`。

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

如果 `sortable` 属性的值为 `true`，则启用项目列表的交换。其默认值为 `false`。

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

要启用虚拟化，请确保满足以下两个条件之一：

1.  设置了 `itemsHeight` 属性。在这种情况下，列表高度将固定并等于该值。
2.  为列表父容器设置了 `display: flex` 样式。在这种情况下，列表将适应容器宽度。

### External management

有时，您可能希望通过保持对外部项目的焦点来管理项目的键盘活动。
将 `onKeyDown` 事件转发到列表可能会在此处有所帮助。
同样，如果您需要重复活动项目丢失时的行为，可以转发 `onFocus` 和 `onBlur`。

### Filter

`filter` 属性提供与外部排序一起使用的过滤值。

## Properties

| 名称              | 描述
