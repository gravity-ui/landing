<!--GITHUB_BLOCK-->

# ActionsPanel

<!--/GITHUB_BLOCK-->

使用 `ActionsPanel` 在一行中渲染多个按钮。
当空间不足时，放不下的按钮将被添加到溢出菜单中。

## 示例

<!--SANDBOX
import type {ActionsPanelProps} from '@gravity-ui/uikit';
import {ActionsPanel} from '@gravity-ui/uikit';

const actions: ActionsPanelProps['actions'] = [
    {
        id: 'action_1',
        button: {
            props: {
                children: 'Action 1',
                onClick: () => console.log('click button action 1'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 1'),
                text: 'Action 1',
            },
        },
    },
    {
        id: 'action_2',
        button: {
            props: {
                children: 'Action 2',
                onClick: () => console.log('click button action 2'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 2'),
                text: 'Action 2',
            },
        },
    },
];

export default function () {
    return <ActionsPanel actions={actions} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
const actions: ActionsPanelProps['actions'] = [
    {
        id: 'action_1',
        button: {
            props: {
                children: 'Action 1',
                onClick: () => console.log('click button action 1'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 1'),
                text: 'Action 1',
            },
        },
    },
    {
        id: 'action_2',
        button: {
            props: {
                children: 'Action 2',
                onClick: () => console.log('click button action 2'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 2'),
                text: 'Action 2',
            },
        },
    },
];

<ActionsPanel {...args} actions={actions} />
```

<!-- Storybook example -->

<ActionsPanelExample />

<!--/GITHUB_BLOCK-->

## 操作图标

使用 `Button` 或 `DropdownMenu` 属性设置图标。

<!--SANDBOX
import {Files, PencilToSquare, TrashBin} from '@gravity-ui/icons';
import type {ActionsPanelProps} from '@gravity-ui/uikit';
import {ActionsPanel, Flex, Icon} from '@gravity-ui/uikit';

const actions: ActionsPanelProps['actions'] = [
    {
        id: 'edit',
        button: {
            props: {
                children: [<Icon key="icon" data={PencilToSquare} />, 'Edit'],
                onClick: () => console.log('Edit'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('Edit'),
                text: (
                    <Flex alignItems="center" gap={1}>
                        <Icon data={PencilToSquare} />
                        Edit
                    </Flex>
                ),
            },
        },
    },
    {
        id: 'copy',
        button: {
            props: {
                children: [<Icon key="icon" data={Files} />, 'Copy'],
                onClick: () => console.log('Copy'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('Copy'),
                text: (
                    <Flex alignItems="center" gap={1}>
                        <Icon data={Files} />
                        Copy
                    </Flex>
                ),
            },
        },
    },
    {
        id: 'delete',
        collapsed: true,
        button: {
            props: {
                children: [<Icon key="icon" data={TrashBin} />, 'Delete'],
                onClick: () => console.log('Delete'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('Delete'),
                text: (
                    <Flex alignItems="center" gap={1}>
                        <Icon data={TrashBin} />
                        Delete
                    </Flex>
                ),
            },
        },
    },
];

export default function () {
    return <ActionsPanel actions={actions} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
const actions: ActionsPanelProps['actions'] = [
    {
        id: 'edit',
        button: {
            props: {
                children: [<Icon key="icon" data={PencilToSquare} />, 'Edit'],
                onClick: () => console.log('Edit'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('Edit'),
                text: (
                    <Flex alignItems="center" gap={1}>
                        <Icon data={PencilToSquare} />
                        Edit
                    </Flex>
                ),
            },
        },
    },
    {
        id: 'copy',
        button: {
            props: {
                children: [<Icon key="icon" data={Files} />, 'Copy'],
                onClick: () => console.log('Copy'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('Copy'),
                text: (
                    <Flex alignItems="center" gap={1}>
                        <Icon data={Files} />
                        Copy
                    </Flex>
                ),
            },
        },
    },
    {
        id: 'delete',
        collapsed: true,
        button: {
            props: {
                children: [<Icon key="icon" data={TrashBin} />, 'Delete'],
                onClick: () => console.log('Delete'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('Delete'),
                text: (
                    <Flex alignItems="center" gap={1}>
                        <Icon data={TrashBin} />
                        Delete
                    </Flex>
                ),
            },
        },
    },
];

<ActionsPanel actions={actions} />
```

<!-- Storybook example -->

<ActionsPanelWithIcons />

<!--/GITHUB_BLOCK-->

## 注意

使用 `renderNote` 属性来渲染一个提示。

<!--SANDBOX
import type {ActionsPanelProps} from '@gravity-ui/uikit';
import {ActionsPanel} from '@gravity-ui/uikit';

const actions: ActionsPanelProps['actions'] = [
    {
        id: 'action_1',
        button: {
            props: {
                children: 'Action 1',
                onClick: () => console.log('click button action 1'),
                view: 'normal-contrast',
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 1'),
                text: 'Action 1',
            },
        },
    },
    {
        id: 'action_2',
        button: {
            props: {
                children: 'Action 2',
                onClick: () => console.log('click button action 2'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 2'),
                text: 'Action 2',
            },
        },
    },
    {
        id: 'action_3',
        button: {
            props: {
                children: 'Action 3',
                onClick: () => console.log('click button action 3'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 3'),
                text: 'Action 3',
            },
        },
    },
    {
        id: 'action_4',
        button: {
            props: {
                children: 'Action 4',
                onClick: () => console.log('click button action 4'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 4'),
                text: 'Action 4',
            },
        },
    },
];

export default function () {
    return <ActionsPanel actions={actions} renderNote={() => '10 items'} maxRowActions={2} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
const actions: ActionsPanelProps['actions'] = [
    {
        id: 'action_1',
        button: {
            props: {
                children: 'Action 1',
                onClick: () => console.log('click button action 1'),
                view: 'normal-contrast',
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 1'),
                text: 'Action 1',
            },
        },
    },
    {
        id: 'action_2',
        button: {
            props: {
                children: 'Action 2',
                onClick: () => console.log('click button action 2'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 2'),
                text: 'Action 2',
            },
        },
    },
    {
        id: 'action_3',
        button: {
            props: {
                children: 'Action 3',
                onClick: () => console.log('click button action 3'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 3'),
                text: 'Action 3',
            },
        },
    },
    {
        id: 'action_4',
        button: {
            props: {
                children: 'Action 4',
                onClick: () => console.log('click button action 4'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 4'),
                text: 'Action 4',
            },
        },
    },
];

<ActionsPanel
  actions={actions}
  onClose={() => console.log('click close handle')}
  renderNote={() => '10 items'}
  maxRowActions={2}
/>
```

<!-- Storybook example -->

<ActionsPanelWithNote />

<!--/GITHUB_BLOCK-->

## 下拉菜单中的分组

使用 `action.dropdown.group` 来对下拉菜单中的操作进行分组。

<!--SANDBOX
import type {ActionsPanelProps} from '@gravity-ui/uikit';
import {ActionsPanel} from '@gravity-ui/uikit';

const actions: ActionsPanelProps['actions'] = [
    {
        id: 'action_1',
        collapsed: true,
        button: {
            props: {
                children: 'Action 1',
                onClick: () => console.log('click button action 1'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 1'),
                text: 'Action 1',
            },
            group: '1',
        },
    },
    {
        id: 'action_2',
        collapsed: true,
        button: {
            props: {
                children: 'Action 2',
                onClick: () => console.log('click button action 2'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 2'),
                text: 'Action 2',
            },
            group: '2',
        },
    },
    {
        id: 'action_3',
        collapsed: true,
        button: {
            props: {
                children: 'Action 3',
                onClick: () => console.log('click button action 3'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 3'),
                text: 'Action 3',
            },
            group: '1',
        },
    },
];

export default function () {
    return <ActionsPanel actions={actions} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
const actions: ActionsPanelProps['actions'] = [
    {
        id: 'action_1',
        collapsed: true,
        button: {
            props: {
                children: 'Action 1',
                onClick: () => console.log('click button action 1'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 1'),
                text: 'Action 1',
            },
            group: '1',
        },
    },
    {
        id: 'action_2',
        collapsed: true,
        button: {
            props: {
                children: 'Action 2',
                onClick: () => console.log('click button action 2'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 2'),
                text: 'Action 2',
            },
            group: '2',
        },
    },
    {
        id: 'action_3',
        collapsed: true,
        button: {
            props: {
                children: 'Action 3',
                onClick: () => console.log('click button action 3'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 3'),
                text: 'Action 3',
            },
            group: '1',
        },
    },
];

<ActionsPanel actions={actions} />
```

<!-- Storybook example -->

<ActionsPanelGroups />

<!--/GITHUB_BLOCK-->

## 操作子菜单和嵌套下拉菜单

请参阅下面的 `actions` 示例以及关于 `DropdownMenu` 组件的文档。

<!--SANDBOX
import {ChevronDown} from '@gravity-ui/icons';
import {ActionsPanel, Icon} from '@gravity-ui/uikit';
import type {ActionsPanelProps} from '@gravity-ui/uikit';

const actions: ActionsPanelProps['actions'] = [
    {
        id: 'button-with-sub-menu',
        button: {
            props: {
                children: ['Sub-menu', <Icon key="icon" data={ChevronDown} />],
                view: 'outlined-contrast',
                onClick: () => console.log('click button action 2'),
            },
        },
        dropdown: {
            item: {
                text: 'Sub-menu',
                items: [
                    {
                        action: () => console.log('Edit'),
                        text: 'Edit',
                    },
                    {
                        action: () => console.log('Delete'),
                        text: 'Delete',
                        theme: 'danger',
                    },
                ],
            },
        },
    },
    {
        id: 'nested-menu',
        collapsed: true,
        button: {
            props: {
                children: 'Nested',
                onClick: () => console.log('click button nested'),
            },
        },
        dropdown: {
            item: {
                text: 'Other',
                items: [
                    {
                        text: 'Select',
                        items: [
                            {
                                action: () => console.log('Select One'),
                                text: 'One',
                            },
                            {
                                action: () => console.log('Select All'),
                                text: 'All',
                            },
                        ],
                    },
                    {
                        action: () => console.log('Copy'),
                        text: 'Copy',
                    },
                    {
                        text: 'Move to',
                        items: [
                            {
                                action: () => console.log('Move to folder 1'),
                                text: 'Folder 1',
                            },
                            {
                                action: () => console.log('Move to folder 2'),
                                text: 'Folder 2',
                            },
                        ],
                    },
                ],
            },
        },
    },
];

export default function () {
    return <ActionsPanel actions={actions} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
const actions: ActionsPanelProps['actions'] = [
    {
        id: 'button-with-sub-menu',
        button: {
            props: {
                children: ['Sub-menu', <Icon key="icon" data={ChevronDown} />],
                view: 'outlined-contrast',
                onClick: () => console.log('click button action 2'),
            },
        },
        dropdown: {
            item: {
                text: 'Sub-menu',
                items: [
                    {
                        action: () => console.log('Edit'),
                        text: 'Edit',
                    },
                    {
                        action: () => console.log('Delete'),
                        text: 'Delete',
                        theme: 'danger',
                    },
                ],
            },
        },
    },
    {
        id: 'nested-menu',
        collapsed: true,
        button: {
            props: {
                children: 'Nested',
                onClick: () => console.log('click button nested'),
            },
        },
        dropdown: {
            item: {
                text: 'Other',
                items: [
                    {
                        text: 'Select',
                        items: [
                            {
                                action: () => console.log('Select One'),
                                text: 'One',
                            },
                            {
                                action: () => console.log('Select All'),
                                text: 'All',
                            },
                        ],
                    },
                    {
                        action: () => console.log('Copy'),
                        text: 'Copy',
                    },
                    {
                        text: 'Move to',
                        items: [
                            {
                                action: () => console.log('Move to folder 1'),
                                text: 'Folder 1',
                            },
                            {
                                action: () => console.log('Move to folder 2'),
                                text: 'Folder 2',
                            },
                        ],
                    },
                ],
            },
        },
    },
];

<ActionsPanel actions={actions} />
```

<!-- Storybook example -->

<ActionsPanelSubmenu />

<!--/GITHUB_BLOCK-->

## 属性

| 名称          | 描述                                     |          类型           | 默认值 |
| :------------ | :--------------------------------------- | :---------------------: | :----: |
| actions       | 操作数组                                 |  `ActionsPanelItem[]`   |        |
| onClose       | 可选的关闭按钮点击处理函数               |      `() => void`       |        |
| renderNote    | 用于显示提示内容的渲染函数（可选）       | `() => React.ReactNode` |        |
| className     | 可选的 HTML `class` 属性                 |        `string`         |        |
| noteClassName | 可选的 HTML `class` 属性                 |        `string`         |        |
| maxRowActions | 每行操作的最大数量                       |        `number`         |  `4`   |

## ActionsPanelItem:

| 名称      | 描述                                   |                    类型                    | 默认值 |
| :-------- | :------------------------------------- | :----------------------------------------: | :----: |
| id        | 唯一的操作 ID                          |                  `string`                  |        |
| dropdown  | 溢出菜单中下拉操作的设置               | `{item: DropdownMenuItem; group?: string}` |        |
| button    | 按钮操作的设置                         |           `{props: ButtonProps}`           |        |
| collapsed | 如果为 `true`，则该项始终包含在下拉菜单中 |                 `boolean`                  |        |
