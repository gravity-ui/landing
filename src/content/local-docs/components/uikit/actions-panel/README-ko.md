<!--GITHUB_BLOCK-->

# ActionsPanel

<!--/GITHUB_BLOCK-->

`ActionsPanel`을 사용하여 여러 버튼을 한 줄에 렌더링합니다.
공간이 충분하지 않으면, 맞지 않는 버튼은 오버플로 메뉴에 추가됩니다.

## 예시

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

## 액션 아이콘

`Button` 또는 `DropdownMenu` 속성을 사용하여 아이콘을 설정합니다.

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

## 참고

`renderNote` 속성을 사용하여 노트를 렌더링합니다.

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

## 드롭다운 메뉴의 그룹

드롭다운 메뉴에서 액션을 그룹화하려면 `action.dropdown.group`을 사용합니다.

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

## 액션 하위 메뉴 및 중첩된 드롭다운 메뉴

아래 `actions` 예시와 `DropdownMenu` 컴포넌트에 대한 문서를 참조하세요.

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

## 속성

| 이름          | 설명                                       |          타입           | 기본값 |
| :------------ | :----------------------------------------- | :---------------------: | :----: |
| actions       | 액션 배열                                  |  `ActionsPanelItem[]`   |        |
| onClose       | 선택적 닫기 버튼 클릭 핸들러               |      `() => void`       |        |
| renderNote    | 노트 내용을 표시하기 위한 선택적 렌더 함수 | `() => React.ReactNode` |        |
| className     | 선택적 HTML `class` 속성                   |        `string`         |        |
| noteClassName | 선택적 HTML `class` 속성                   |        `string`         |        |
| maxRowActions | 한 줄에 표시할 최대 액션 수                |        `number`         |   `4`  |

## ActionsPanelItem:

| 이름      | 설명                                   |                    타입                    | 기본값 |
| :-------- | :------------------------------------- | :----------------------------------------: | :----: |
| id        | 고유 액션 ID                           |                  `string`                  |        |
| dropdown  | 오버플로 메뉴의 드롭다운 액션 설정     | `{item: DropdownMenuItem; group?: string}` |        |
| button    | 버튼 액션 설정                         |           `{props: ButtonProps}`           |        |
| collapsed | true이면, 해당 항목은 항상 드롭다운 안에 포함 |                 `boolean`                  |        |
