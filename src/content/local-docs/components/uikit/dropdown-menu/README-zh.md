<!--GITHUB_BLOCK-->

# DropdownMenu

<!--/GITHUB_BLOCK-->

```tsx
import {DropdownMenu} from '@gravity-ui/uikit';
```

下拉菜单组件提供项目分组、子菜单和可自定义的开关。下拉菜单项使用该 `items` 属性进行配置。默认情况下，菜单切换是一个带有省略号图标 (**. ..** 的按钮，可以用该属性覆盖。 `renderSwitcher`

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    items={[
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        items={[
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  items={[
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## 分组的物品

`DropdownMenu` 通过引入嵌套到数组中的菜单项数组，可以对项目进行分 `items` 组并在视觉上与其他菜单项分开。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    items={[
        [
            {
                action: () => console.log('Call'),
                text: 'Call',
            },
            {
                action: () => console.log('Send email'),
                text: 'Send email',
            },
        ],
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        items={[
            [
                {
                    action: () => console.log('Call'),
                    text: 'Call',
                },
                {
                    action: () => console.log('Send email'),
                    text: 'Send email',
                },
            ],
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  items={[
    [
      {
        action: () => console.log('Call'),
        text: 'Call',
      },
      {
        action: () => console.log('Send email'),
        text: 'Send email',
      },
    ],
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## 子菜单

单个菜单项的 `items` 属性将嵌套子项添加到该项目。

带有子菜单的菜单项会获得以下额外的类名，以允许额外的样式：

- `.g-dropdown-menu__menu-item_with-submenu`:适用于具有多个嵌套项的项目。
- `.g-dropdown-menu__menu-item_active-parent`:对于子菜单当前处于打开状态的项目。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    items={[
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
        {
            text: 'More',
            items: [
                {
                    action: () => console.log('Mark as'),
                    text: 'Mark as',
                    items: [
                        {
                            action: () => console.log('Important'),
                            text: 'Important',
                        },
                        {
                            action: () => console.log('Favorite'),
                            text: 'Favorite',
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
                            action: () => console.log('Location #1'),
                            text: 'Location #1',
                        },
                        {
                            action: () => console.log('Location #2'),
                            text: 'Location #2',
                        },
                    ],
                },
            ],
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        items={[
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
            {
                text: 'More',
                items: [
                    {
                        action: () => console.log('Mark as'),
                        text: 'Mark as',
                        items: [
                            {
                                action: () => console.log('Important'),
                                text: 'Important',
                            },
                            {
                                action: () => console.log('Favorite'),
                                text: 'Favorite',
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
                                action: () => console.log('Location #1'),
                                text: 'Location #1',
                            },
                            {
                                action: () => console.log('Location #2'),
                                text: 'Location #2',
                            },
                        ],
                    },
                ],
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  items={[
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
    {
      text: 'More',
      items: [
        {
          action: () => console.log('Mark as'),
          text: 'Mark as',
          items: [
            {
              action: () => console.log('Important'),
              text: 'Important',
            },
            {
              action: () => console.log('Favorite'),
              text: 'Favorite',
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
              action: () => console.log('Location #1'),
              text: 'Location #1',
            },
            {
              action: () => console.log('Location #2'),
              text: 'Location #2',
            },
          ],
        },
      ],
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## 自定义菜单切换

要配置菜单切换，请使用该 `renderSwitcher` 属性。它可以是任何返回 React 组件的函数（也可以是 TypeScript 术语 `(props: SwitcherProps) => React.ReactNode` 中的任何函数，见 [`SwitcherProps`](#switcherprops) 下文）。默认情况下，菜单切换是带有省略号图标 (**. ..** 的按钮。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    renderSwitcher={(props) => (
        <div {...props} style={{cursor: 'pointer', borderBottom: '1px dotted'}}>John Doe</div>
    )}
    items={[
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        renderSwitcher={(props) => (
            <div {...props} style={{cursor: 'pointer', borderBottom: '1px dotted'}}>John Doe</div>
        )}
        items={[
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  renderSwitcher={(props) => (
    <div {...props} style={{cursor: 'pointer', borderBottom: '1px dotted'}}>
      John Doe
    </div>
  )}
  items={[
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

为了演示可自定义菜单切换的概念，上面的示例过于简化。在现实生活中的应用程序中，通常建议可点击的菜单开关应是一个可通过键盘和其他辅助技术（例如按钮）访问的组件。

## 自定义图标

您可以使用 `iconStart` 或 `iconEnd` 属性向 `DropdownMenu` 项目添加自定义图标。默认情况下，这些 `DropdownMenu` 项目没有图标。

您可以使用的 `renderSwitcher` 属性更改菜单切换图 `DropdownMenu`标。默认情况下，菜单切换是带有省略号图标 (**. ..** 的按钮。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    renderSwitcher={(props) => (
        <Button {...props} view="flat">
            <Icon size={16} data={Bars} />
        </Button>
    )}
    items={[
        {
            iconStart: <Icon size={16} data={Pencil} />,
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            iconStart: <Icon size={16} data={TrashBin} />,
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        renderSwitcher={(props) => (
            <UIKit.Button {...props} view="flat">
                <UIKit.Icon
                    data={() => (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 3.25A.75.75 0 0 1 2 2.5h12A.75.75 0 0 1 14 4H2a.75.75 0 0 1-.75-.75Zm0 4.75A.75.75 0 0 1 2 7.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8ZM2 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H2Z" clip-rule="evenodd"></path></svg>
                    )}
                    size={16}
                />
            </UIKit.Button>
        )}
        items={[
            {
                iconStart: (
                    <UIKit.Icon
                        data={() => (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M11.423 1A3.577 3.577 0 0 1 15 4.577c0 .27-.108.53-.3.722l-.528.529-1.971 1.971-5.059 5.059a3 3 0 0 1-1.533.82l-2.638.528a1 1 0 0 1-1.177-1.177l.528-2.638a3 3 0 0 1 .82-1.533l5.059-5.059 2.5-2.5c.191-.191.451-.299.722-.299Zm-2.31 4.009-4.91 4.91a1.5 1.5 0 0 0-.41.766l-.38 1.903 1.902-.38a1.5 1.5 0 0 0 .767-.41l4.91-4.91a2.077 2.077 0 0 0-1.88-1.88Zm3.098.658a3.59 3.59 0 0 0-1.878-1.879l1.28-1.28c.995.09 1.788.884 1.878 1.88l-1.28 1.28Z" clip-rule="evenodd"></path></svg>
                        )}
                        size={16}
                    />
                ),
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                iconStart: (
                    <UIKit.Icon
                        data={() => (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2Zm2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5H11Zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438l.315-7.562Zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0Zm3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></path></svg>
                        )}
                        size={16}
                    />
                ),
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  renderSwitcher={(props) => (
    <Button {...props} view="flat">
      <Icon size={16} data={Bars} />
    </Button>
  )}
  items={[
    {
      iconStart: <Icon size={16} data={Pencil} />,
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      iconStart: <Icon size={16} data={TrashBin} />,
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名                       | 描述                                                           |                    类型                    |    默认    |
| :------------------------- | :------------------------------------------------------------- | :----------------------------------------: | :--------: |
| `items`                    | 物品数组。嵌套的项目数组表示视觉上分隔的群组。                 | `（下拉菜单项目\| [[ 下拉菜单项目])]\| []` |            |
| `data`                     | 为菜单中调用的操作提供的有效负载。（这对于上下文菜单很有用。） |                   `any`                    |            |
| `icon`                     | 默认图标 `switcher`。                                          |             `React.ReactNode`              | 省略号图标 |
| `size`                     | 应用于默认值 `switcher` 和菜单。                               |          `'s'\| 'm'\| 'l'\| 'xl'`          |   `'m'`    |
| `disabled`                 | 将此属性设置为 `true` 禁用 `switcher` 按钮并阻止菜单打开。     |                 `boolean`                  |            |
| `renderSwitcher`           | 菜单切换控件的渲染功能。                                       |             `React.ReactNode`              |            |
| `switcherWrapperClassName` | 的父组件 `className` 属 `switcher`性的值。                     |                  `string`                  |            |
| `defaultSwitcherProps`     | 默认 `switcher` 属性。                                         |               `ButtonProps`                |            |
| `defaultSwitcherClassName` | 默认 `className` 属性的值 `switcher`。                         |                  `string`                  |            |
| `menuProps`                | 覆盖默认的下拉菜单弹出窗口属性。                               |                `MenuProps`                 |            |
| `popupProps`               | 覆盖默认的弹出窗口属性。                                       |                `PopupProps`                |            |
| `open`                     | 切换下拉菜单的可见性。                                         |                 `boolean`                  |            |
| `onOpenToggle`             | 在打开或关闭菜单时调用。                                       |                `() => void`                |            |
| `onSwitcherClick`          | 点击时调 `switcher` 用。                                       |   `React.mouseEventHandler<HTMLElement>`   |            |
| `hideOnScroll`             | 指定滚动父元素时是否隐藏菜单。                                 |                 `boolean`                  |   `true`   |
| `children`                 | 菜单弹出窗口中的自定义内容。                                   |             `React.ReactNode`              |            |

### DropdownMenuItem

此类型描述了单个下拉菜单项。

| 姓名         | 描述                                                                                |                      类型                      | 默认 |
| :----------- | :---------------------------------------------------------------------------------- | :--------------------------------------------: | :--: |
| `text`       | 菜单项内容。                                                                        |               `React.ReactNode`                |      |
| `action`     | 菜单项点击处理程序。它从父下拉菜单组件（包括 `event` 和 `data`）获取参数。          | `(event: React.MouseEvent, data: any) => void` |      |
| `iconStart`  | 项目内容前的菜单项图标。                                                            |               `React.ReactNode`                |      |
| `iconEnd`    | 项目内容后面的菜单项图标。如果项目有子菜单，则忽略。                                |               `React.ReactNode`                |      |
| `hidden`     | 确定该项目是否处于隐藏状态。                                                        |                   `boolean`                    |      |
| `disabled`   | 确定该项目是否处于禁用状态。                                                        |                   `boolean`                    |      |
| `href`       | 具有此属性的菜单项将成为指向指定位置的链接。                                        |                    `string`                    |      |
| `target`     | 与 `<a>` 标签的 `target` 属性相同。                                                 |                    `string`                    |      |
| `rel`        | 与 `<a>` 标签的 `rel` 属性相同。                                                    |                    `string`                    |      |
| `extraProps` | 其他菜单项属性。                                                                    |                    `object`                    |      |
| `title`      | 工具提示文本。                                                                      |                    `string`                    |      |
| `className`  | `class` HTML 属性值。                                                               |                    `string`                    |      |
| `items`      | 子菜单项。                                                                          |      `（下拉菜单项目\| [[下拉菜单项目])]`      |      |
| `popupProps` | 子菜单弹出窗口属性。                                                                |                    `string`                    |      |
| `path`       | 从根到当前项目的索引路径。                                                          |                   `number[]`                   |      |
| `closeMenu`  | 自定义 `closeMenu` 回调。可以调用它来代替关闭主菜单，并用于在主菜单之前关闭子菜单。 |                  `() => void`                  |      |

### SwitcherProps

| 姓名        | 描述                             |     类型     |
| :---------- | :------------------------------- | :----------: |
| `onClick`   | 点击切换器时调用。               | `() => void` |
| `onKeyDown` | 当切换器聚焦并按下操作键时调用。 | `() => void` |
