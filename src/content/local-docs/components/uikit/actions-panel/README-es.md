GRAVITY_TRANSLATION_BLOCK_0_END

Use an `ActionsPanel` to render multiple buttons in a row.
When there is not enough space, buttons that don't fit will be added to an overflow menu.

## Example

GRAVITY_TRANSLATION_BLOCK_1_END

```jsx
<ActionsPanel
  actions={[
    {
      id: 'action1',
      button: {
        label: 'Action 1',
        icon: <Icon type="star" />,
        onClick: () => console.log('Action 1 clicked'),
      },
    },
    {
      id: 'action2',
      button: {
        label: 'Action 2',
        icon: <Icon type="heart" />,
        onClick: () => console.log('Action 2 clicked'),
      },
    },
    {
      id: 'action3',
      button: {
        label: 'Action 3',
        icon: <Icon type="trash" />,
        onClick: () => console.log('Action 3 clicked'),
      },
    },
    {
      id: 'action4',
      button: {
        label: 'Action 4',
        icon: <Icon type="edit" />,
        onClick: () => console.log('Action 4 clicked'),
      },
    },
    {
      id: 'action5',
      button: {
        label: 'Action 5',
        icon: <Icon type="settings" />,
        onClick: () => console.log('Action 5 clicked'),
      },
    },
  ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_2_END

## Action icons

Use `Button` or `DropdownMenu` properties to set icons.

GRAVITY_TRANSLATION_BLOCK_3_END

```jsx
<ActionsPanel
  actions={[
    {
      id: 'action1',
      button: {
        label: 'Action 1',
        icon: <Icon type="star" />,
        onClick: () => console.log('Action 1 clicked'),
      },
    },
    {
      id: 'action2',
      dropdown: {
        render: () => (
          <DropdownMenu
            items={[
              { label: 'Dropdown Item 1', onClick: () => console.log('Dropdown Item 1 clicked') },
              { label: 'Dropdown Item 2', onClick: () => console.log('Dropdown Item 2 clicked') },
            ]}
          />
        ),
      },
    },
  ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_4_END

## Note

Use the `renderNote` property to render a note.

GRAVITY_TRANSLATION_BLOCK_5_END

```jsx
<ActionsPanel
  actions={[
    {
      id: 'action1',
      button: {
        label: 'Action 1',
        onClick: () => console.log('Action 1 clicked'),
      },
    },
  ]}
  renderNote={() => <Text>This is a note for the ActionsPanel.</Text>}
/>
```

GRAVITY_TRANSLATION_BLOCK_6_END

## Groups in dropdown menu

Use `action.dropdown.group` for groping actions in dropdown menu.

GRAVITY_TRANSLATION_BLOCK_7_END

```jsx
<ActionsPanel
  actions={[
    {
      id: 'action1',
      dropdown: {
        render: () => (
          <DropdownMenu
            items={[
              { label: 'Group 1 - Item 1', onClick: () => {}, group: 'Group 1' },
              { label: 'Group 1 - Item 2', onClick: () => {}, group: 'Group 1' },
              { label: 'Group 2 - Item 1', onClick: () => {}, group: 'Group 2' },
            ]}
          />
        ),
      },
    },
  ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_8_END

## Action sub-menu and nested dropdown menu

See `actions` example below and documentation about the `DropdownMenu` component.

GRAVITY_TRANSLATION_BLOCK_9_END

```jsx
<ActionsPanel
  actions={[
    {
      id: 'action1',
      dropdown: {
        render: () => (
          <DropdownMenu
            items={[
              {
                label: 'Sub Menu',
                items: [
                  { label: 'Sub Item 1', onClick: () => {} },
                  { label: 'Sub Item 2', onClick: () => {} },
                ],
              },
              { label: 'Another Item', onClick: () => {} },
            ]}
          />
        ),
      },
    },
  ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_10_END

## Properties

| Name          | Description                                               |          Type           | Default |
| :------------ | :-------------------------------------------------------- | :---------------------: | :-----: |
| actions       | Array of actions                                          |  `ActionsPanelItem[]`   |         |
| onClose       | Optional close button click handler                       |      `() => void`       |         |
| renderNote    | Optional render-prop for displaying the content of a note | `() => React.ReactNode` |         |
| className     | Optional HTML `class` attribute                           |        `string`         |         |
| noteClassName | Optional HTML `class` attribute                           |        `string`         |         |
| maxRowActions | Maximum number of actions in a row                        |        `number`         |   `4`   |

## ActionsPanelItem:

| Name      | Description                                   |                    Type                    | Default |
| :-------- | :-------------------------------------------- | :----------------------------------------: | :-----: |
| id        | Unique action id                              |                  `string`                  |         |
| dropdown  | Settings for dropdown action in overflow menu | `{item: DropdownMenuItem; group?: string}` |         |
| button    | Settings for button action                    |           `{props: ButtonProps}`           |         |
| collapsed | If true, then item always inside the dropdown |                 `boolean`                  |         |