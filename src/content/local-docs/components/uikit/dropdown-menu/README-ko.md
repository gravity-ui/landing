드롭다운 메뉴 컴포넌트는 항목 그룹화, 하위 메뉴 및 사용자 정의 가능한 토글을 제공합니다. 드롭다운 메뉴 항목은 `items` 속성으로 구성됩니다. 기본적으로 메뉴 토글은 타원형 아이콘(**⋯**)이 있는 버튼이며, `renderSwitcher` 속성으로 재정의할 수 있습니다.

```tsx
import {DropdownMenu} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 그룹화된 항목

`DropdownMenu` 항목은 `items` 배열에 중첩된 메뉴 항목 배열을 도입하여 그룹화하고 다른 메뉴 항목과 시각적으로 분리할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## 하위 메뉴

개별 메뉴 항목의 `items` 속성은 해당 항목에 중첩된 하위 항목을 추가합니다.

하위 메뉴가 있는 메뉴 항목에는 추가 스타일링을 위해 다음과 같은 추가 클래스 이름이 지정됩니다.

- `.g-dropdown-menu__menu-item_with-submenu`: 두 개 이상의 중첩된 항목이 있는 항목의 경우.
- `.g-dropdown-menu__menu-item_active-parent`: 현재 하위 메뉴가 열려 있는 항목의 경우.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## 사용자 정의 메뉴 토글

메뉴 토글을 구성하려면 `renderSwitcher` 속성을 사용합니다. 이는 React 컴포넌트를 반환하는 모든 함수일 수 있습니다(TypeScript 용어로는 [`SwitcherProps`](#switcherprops) 아래 참조). 기본적으로 메뉴 토글은 타원형 아이콘(**⋯**)이 있는 버튼입니다.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

위의 예시는 사용자 정의 가능한 메뉴 토글의 아이디어를 보여주기 위해 지나치게 단순화되었습니다. 실제 애플리케이션에서는 클릭 가능한 메뉴 토글이 버튼과 같이 키보드 및 기타 보조 기술로 접근 가능한 컴포넌트여야 합니다.

## 사용자 정의 아이콘

`iconStart` 또는 `iconEnd` 속성을 사용하여 `DropdownMenu` 항목에 사용자 정의 아이콘을 추가할 수 있습니다. 기본적으로 `DropdownMenu` 항목에는 아이콘이 없습니다.

`DropdownMenu`의 `renderSwitcher` 속성을 사용하여 메뉴 토글 아이콘을 변경할 수 있습니다. 기본적으로 메뉴 토글은 타원형 아이콘(**⋯**)이 있는 버튼입니다.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## 속성

GRAVITY_TRANSLATION_BLOCK_10_END

| 이름                       | 설명                                                                                               |                        타입                        |    기본값    |
| :------------------------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-----------: |
| `items`                    | 항목 배열. 중첩된 항목 배열은 시각적으로 구분된 그룹을 나타냅니다.                                         | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |               |
| `data`                     | 메뉴에서 호출된 액션에 제공되는 페이로드입니다. (컨텍스트 메뉴에 유용할 수 있습니다.)                      |                       `any`                        |               |
| `icon`                     | 기본 `switcher`의 아이콘입니다.                                                                    |                 `React.ReactNode`                  | 줄임표 아이콘 |
| `size`                     | 기본 `switcher`와 메뉴 모두에 적용됩니다.                                                              |            `'s' \| 'm' \| 'l' \| 'xl'`             |     `'m'`     |
| `disabled`                 | 이 속성을 `true`로 설정하면 `switcher` 버튼이 비활성화되고 메뉴가 열리지 않습니다.                               |                     `boolean`                      |               |
| `renderSwitcher`           | 메뉴 토글 컨트롤을 위한 렌더링 함수입니다.                                                               |                 `React.ReactNode`                  |               |
| `switcherWrapperClassName` | `switcher`의 부모 컴포넌트의 `className` 속성에 대한 값입니다.                                             |                      `string`                      |               |
| `defaultSwitcherProps`     | 기본 `switcher` 속성입니다.                                                                        |                   `ButtonProps`                    |               |
| `defaultSwitcherClassName` | 기본 `switcher`의 `className` 속성에 대한 값입니다.                                                      |                      `string`                      |               |
| `menuProps`                | 기본 드롭다운 메뉴 팝업 속성을 재정의합니다.                                                              |                    `MenuProps`                     |               |
| `popupProps`               | 기본 팝업 속성을 재정의합니다.                                                                       |                    `PopupProps`                    |               |
| `open`                     | 드롭다운 메뉴 표시를 토글합니다.                                                                     |                     `boolean`                      |               |
| `onOpenToggle`             | 메뉴가 열리거나 닫힐 때 호출됩니다.                                                                     |                    `() => void`                    |               |
| `onSwitcherClick`          | `switcher`를 클릭할 때 호출됩니다.                                                                    |       `React.MouseEventHandler<HTMLElement>`       |               |
| `hideOnScroll`             | 부모 요소가 스크롤될 때 메뉴를 숨길지 여부를 지정합니다.                                                    |                     `boolean`                      |    `true`     |
| `children`                 | 메뉴 팝업 내부의 사용자 정의 콘텐츠입니다.                                                               |                 `React.ReactNode`                  |               |

### DropdownMenuItem

이 타입은 개별 드롭다운 메뉴 항목을 설명합니다.
GRAVITY_TRANSLATION_BLOCK_1_END
### DropdownMenu

This component renders a dropdown menu. It can be used to present a list of options to the user.

```jsx
<DropdownMenu
  trigger={<Button>Open Menu</Button>}
  items={[
    {
      content: 'Item 1',
      onSelect: () => console.log('Item 1 selected'),
    },
    {
      content: 'Item 2',
      onSelect: () => console.log('Item 2 selected'),
    },
  ]}
/>
```

#### Props

| Prop Name | Type | Description | Default |
| :-------- | :--- | :---------- | :------ |
| `items` | `DropdownMenuItem[]` | An array of `DropdownMenuItem` objects that represent the menu items. | `[]` |
| `trigger` | `React.ReactNode` | The element that will trigger the dropdown menu to open. This is typically a `Button` or similar interactive element. | `null` |
| `align` | `'left'` \| `'right'` | The alignment of the dropdown menu relative to the trigger. | `'left'` |
| `open` | `boolean` | Controls whether the dropdown menu is open or closed. | `false` |
| `onOpenChange` | `(open: boolean) => void` | A callback function that is called when the open state of the dropdown menu changes. | `() => {}` |
| `closeOnSelect` | `boolean` | If `true`, the dropdown menu will close automatically after an item is selected. | `true` |
| `offset` | `number` | The distance in pixels between the trigger and the dropdown menu. | `4` |
| `className` | `string` | Optional CSS class name to apply to the dropdown menu container. | `''` |
| `arrow` | `boolean` | If `true`, a small arrow will be displayed pointing to the trigger. | `false` |
| `arrowClassName` | `string` | Optional CSS class name to apply to the arrow element. | `''` |
| `arrowOffset` | `number` | The distance in pixels between the arrow and the trigger. | `0` |
| `arrowStyle` | `React.CSSProperties` | Optional inline styles to apply to the arrow element. | `{}` |
| `overlayClassName` | `string` | Optional CSS class name to apply to the overlay element that covers the rest of the page when the dropdown is open. | `''` |
| `overlayStyle` | `React.CSSProperties` | Optional inline styles to apply to the overlay element. | `{}` |
| `menuClassName` | `string` | Optional CSS class name to apply to the menu element itself. | `''` |
| `menuStyle` | `React.CSSProperties` | Optional inline styles to apply to the menu element. | `{}` |
| `zIndex` | `number` | The `z-index` value for the dropdown menu. | `1000` |
| `portal` | `boolean` | If `true`, the dropdown menu will be rendered in a portal, which can help with stacking context issues. | `false` |
| `portalContainer` | `HTMLElement` | The container element for the portal. If not provided and `portal` is `true`, it will default to `document.body`. | `null` |
| `id` | `string` | The `id` attribute for the dropdown menu. | `null` |
| `ariaLabel` | `string` | The `aria-label` attribute for the dropdown menu. | `null` |
| `testId` | `string` | The `data-testid` attribute for the dropdown menu, useful for testing. | `null` |
| `data-qa` | `string` | The `data-qa` attribute for the dropdown menu, useful for QA. | `null` |
| `data-cy` | `string` | The `data-cy` attribute for the dropdown menu, useful for Cypress testing. | `null` |

GRAVITY_TRANSLATION_BLOCK_2_END
### DropdownMenu.Divider

This component renders a divider line within the dropdown menu. It's useful for visually separating groups of menu items.

```jsx
<DropdownMenu
  trigger={<Button>Options</Button>}
  items={[
    { content: 'Action 1' },
    <DropdownMenu.Divider />,
    { content: 'Action 2' },
  ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_3_END
### DropdownMenu.Label

This component renders a label within the dropdown menu. It's useful for providing context or a title for a group of menu items.

```jsx
<DropdownMenu
  trigger={<Button>Select</Button>}
  items={[
    <DropdownMenu.Label>Category 1</DropdownMenu.Label>,
    { content: 'Item A' },
    { content: 'Item B' },
    <DropdownMenu.Divider />,
    <DropdownMenu.Label>Category 2</DropdownMenu.Label>,
    { content: 'Item C' },
  ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_4_END
### DropdownMenu.RadioGroup

This component renders a group of radio buttons within the dropdown menu. It's useful for allowing the user to select a single option from a list.

```jsx
const [selectedValue, setSelectedValue] = React.useState('option1');

<DropdownMenu
  trigger={<Button>Choose One</Button>}
  items={[
    <DropdownMenu.RadioGroup
      value={selectedValue}
      onChange={(value) => setSelectedValue(value)}
      options={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ]}
    />,
  ]}
/>
```

#### Props

| Prop Name | Type | Description | Default |
| :-------- | :--- | :---------- | :------ |
| `options` | `Array<{ label: string; value: string }>` | An array of objects, where each object has a `label` and a `value` property. | `[]` |
| `value` | `string` | The currently selected value. | `''` |
| `onChange` | `(value: string) => void` | A callback function that is called when the selected value changes. | `() => {}` |
| `className` | `string` | Optional CSS class name to apply to the radio group container. | `''` |
| `labelClassName` | `string` | Optional CSS class name to apply to the label of each radio button. | `''` |
| `radioClassName` | `string` | Optional CSS class name to apply to the radio button input element. | `''` |

GRAVITY_TRANSLATION_BLOCK_5_END
### DropdownMenu.CheckboxGroup

This component renders a group of checkboxes within the dropdown menu. It's useful for allowing the user to select multiple options from a list.

```jsx
const [selectedValues, setSelectedValues] = React.useState(['option1']);

<DropdownMenu
  trigger={<Button>Select Many</Button>}
  items={[
    <DropdownMenu.CheckboxGroup
      values={selectedValues}
      onChange={(values) => setSelectedValues(values)}
      options={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ]}
    />,
  ]}
/>
```

#### Props

| Prop Name | Type | Description | Default |
| :-------- | :--- | :---------- | :------ |
| `options` | `Array<{ label: string; value: string }>` | An array of objects, where each object has a `label` and a `value` property. | `[]` |
| `values` | `string[]` | An array of the currently selected values. | `[]` |
| `onChange` | `(values: string[]) => void` | A callback function that is called when the selected values change. | `() => {}` |
| `className` | `string` | Optional CSS class name to apply to the checkbox group container. | `''` |
| `labelClassName` | `string` | Optional CSS class name to apply to the label of each checkbox. | `''` |
| `checkboxClassName` | `string` | Optional CSS class name to apply to the checkbox input element. | `''` |

GRAVITY_TRANSLATION_BLOCK_6_END
### DropdownMenu.Separator

This component renders a separator line within the dropdown menu. It's functionally identical to `DropdownMenu.Divider`.

```jsx
<DropdownMenu
  trigger={<Button>Actions</Button>}
  items={[
    { content: 'Copy' },
    <DropdownMenu.Separator />,
    { content: 'Paste' },
  ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_7_END
### DropdownMenu.SubMenu

This component renders a submenu within the dropdown menu. It allows for nested menus.

```jsx
<DropdownMenu
  trigger={<Button>File</Button>}
  items={[
    { content: 'New' },
    {
      content: 'Open',
      subMenu: {
        trigger: <span>Recent Files</span>,
        items: [
          { content: 'Document 1' },
          { content: 'Document 2' },
        ],
      },
    },
    <DropdownMenu.Divider />,
    { content: 'Save' },
  ]}
/>
```

#### Props

| Prop Name | Type | Description | Default |
| :-------- | :--- | :---------- | :------ |
| `trigger` | `React.ReactNode` | The element that will trigger the submenu to open. | `null` |
| `items` | `DropdownMenuItem[]` | An array of `DropdownMenuItem` objects that represent the submenu items. | `[]` |
| `align` | `'left'` \| `'right'` | The alignment of the submenu relative to the parent menu item. | `'left'` |
| `open` | `boolean` | Controls whether the submenu is open or closed. | `false` |
| `onOpenChange` | `(open: boolean) => void` | A callback function that is called when the open state of the submenu changes. | `() => {}` |
| `closeOnSelect` | `boolean` | If `true`, the submenu will close automatically after an item is selected. | `true` |
| `offset` | `number` | The distance in pixels between the parent menu item and the submenu. | `4` |
| `className` | `string` | Optional CSS class name to apply to the submenu container. | `''` |
| `arrow` | `boolean` | If `true`, a small arrow will be displayed pointing to the parent menu item. | `false` |
| `arrowClassName` | `string` | Optional CSS class name to apply to the arrow element. | `''` |
| `arrowOffset` | `number` | The distance in pixels between the arrow and the parent menu item. | `0` |
| `arrowStyle` | `React.CSSProperties` | Optional inline styles to apply to the arrow element. | `{}` |
| `overlayClassName` | `string` | Optional CSS class name to apply to the overlay element that covers the rest of the page when the submenu is open. | `''` |
| `overlayStyle` | `React.CSSProperties` | Optional inline styles to apply to the overlay element. | `{}` |
| `menuClassName` | `string` | Optional CSS class name to apply to the submenu element itself. | `''` |
| `menuStyle` | `React.CSSProperties` | Optional inline styles to apply to the submenu element. | `{}` |
| `zIndex` | `number` | The `z-index` value for the submenu. | `1000` |
| `portal` | `boolean` | If `true`, the submenu will be rendered in a portal, which can help with stacking context issues. | `false` |
| `portalContainer` | `HTMLElement` | The container element for the portal. If not provided and `portal` is `true`, it will default to `document.body`. | `null` |
| `id` | `string` | The `id` attribute for the submenu. | `null` |
| `ariaLabel` | `string` | The `aria-label` attribute for the submenu. | `null` |
| `testId` | `string` | The `data-testid` attribute for the submenu, useful for testing. | `null` |
| `data-qa` | `string` | The `data-qa` attribute for the submenu, useful for QA. | `null` |
| `data-cy` | `string` | The `data-cy` attribute for the submenu, useful for Cypress testing. | `null` |

GRAVITY_TRANSLATION_BLOCK_8_END

| 이름         | 설명                                                                                                                             |                      타입                      | 기본값 |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------: | :-----: |
| `text`       | 메뉴 항목 내용.                                                                                                                  |               `React.ReactNode`                |         |
| `action`     | 메뉴 항목 클릭 핸들러. 상위 드롭다운 메뉴 컴포넌트의 파라미터(`event` 및 `data`)를 받습니다.                                         | `(event: React.MouseEvent, data: any) => void` |         |
| `iconStart`  | 메뉴 항목 내용 앞에 오는 아이콘.                                                                                                 |               `React.ReactNode`                |         |
| `iconEnd`    | 메뉴 항목 내용 뒤에 오는 아이콘. 항목에 하위 메뉴가 있는 경우 무시됩니다.                                                          |               `React.ReactNode`                |         |
| `hidden`     | 항목이 숨겨져 있는지 여부를 결정합니다.                                                                                           |                   `boolean`                    |         |
| `disabled`   | 항목이 비활성화되어 있는지 여부를 결정합니다.                                                                                      |                   `boolean`                    |         |
| `href`       | 이 속성을 가진 메뉴 항목은 지정된 위치로 연결되는 링크가 됩니다.                                                                    |                    `string`                    |         |
| `target`     | `<a>` 태그의 `target` 속성과 동일합니다.                                                                                         |                    `string`                    |         |
| `rel`        | `<a>` 태그의 `rel` 속성과 동일합니다.                                                                                            |                    `string`                    |         |
| `extraProps` | 추가 메뉴 항목 속성.                                                                                                             |                    `object`                    |         |
| `title`      | 툴팁 텍스트.                                                                                                                     |                    `string`                    |         |
| `className`  | `class` HTML 속성 값.                                                                                                            |                    `string`                    |         |
| `items`      | 하위 메뉴 항목.                                                                                                                  |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps` | 하위 메뉴 팝업 속성.                                                                                                             |                    `string`                    |         |
| `path`       | 루트에서 현재 항목까지의 인덱스 경로.                                                                                             |                   `number[]`                   |         |
| `closeMenu`  | 사용자 정의 `closeMenu` 콜백. 메인 메뉴를 닫는 대신 호출하여 메인 메뉴 이전의 하위 메뉴를 닫는 데 사용할 수 있습니다.                 |                  `() => void`                  |         |

### SwitcherProps

| 이름        | 설명                                                               |     타입     |
| :---------- | :----------------------------------------------------------------- | :----------: |
| `onClick`   | 스위처를 클릭했을 때 호출됩니다.                                     | `() => void` |
| `onKeyDown` | 스위처에 포커스가 있고 액션 키가 눌렸을 때 호출됩니다. | `() => void` |