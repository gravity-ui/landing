<!--GITHUB_BLOCK-->

# Switch

<!--/GITHUB_BLOCK-->

`Switch` 컴포넌트는 일반적으로 **켜짐**과 **꺼짐**, 또는 **활성화**와 **비활성화**와 같이 두 가지 상태 간에 전환하는 데 사용됩니다.

```tsx
import {Switch} from '@gravity-ui/uikit';
```

## 상태

`Switch`는 다양한 상태를 가질 수 있습니다.

- 선택됨: 스위치가 **켜짐** 상태일 때.
- 비활성화됨: 스위치를 사용할 수 없을 때.

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="l" checked={false}>
                Unchecked
            </Switch>
            <Switch size="l" checked>
                Checked
            </Switch>
            <Switch size="l" disabled>
                Disabled
            </Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="l" checked={false}>Unchecked</Switch>
<Switch size="l" checked>Checked</Switch>
<Switch size="l" disabled>Disabled</Switch>
```

<!--/GITHUB_BLOCK-->

## 크기

`Switch`의 크기를 관리하려면 `size` 속성을 사용하세요. 기본 크기는 `m`입니다.

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="s">S Size</Switch>
            <Switch size="m">M Size</Switch>
            <Switch size="l">L Size</Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="s">S Size</Switch>
<Switch size="m">M Size</Switch>
<Switch size="l">L Size</Switch>
```

<!--/GITHUB_BLOCK-->

## 레이블

`content` 속성을 사용하여 `Switch`에 레이블을 지정하거나 자식 속성으로 제공할 수 있습니다.

<!--SANDBOX
import {Box, Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Switch content="Content" size="l" />
            <Box spacing={{mt: 2}}>
                <Switch size="l">
                    <span>Content as children</span>
                </Switch>
            </Box>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Switch size="l">
      <span>Content as children</span>
    </Switch>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## 속성

| 이름           | 설명                                                                                                     |                     타입                      | 기본값 |
| :------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | 스위치의 내용 (일반적으로 레이블)                                                                        |                  `ReactNode`                  |         |
| content        | 스위치의 내용 (children 대신 사용 가능)                                                                  |                  `ReactNode`                  |         |
| disabled       | 스위치의 `disabled` 상태를 토글합니다.                                                                   |                   `boolean`                   | `false` |
| loading        | 스위치의 `loading` 상태를 토글합니다.                                                                    |                   `boolean`                   | `false` |
| checked        | 스위치의 `checked` 상태를 토글합니다.                                                                    |                   `boolean`                   | `false` |
| defaultChecked | 컴포넌트가 마운트될 때 초기 checked 상태를 설정합니다.                                                   |                   `boolean`                   | `false` |
| onUpdate       | 사용자가 스위치 상태를 변경할 때 호출되며, checked 값을 콜백 인수로 제공합니다.                         |         `(checked: boolean) => void`          |         |
| onChange       | 사용자가 스위치 상태를 변경할 때 호출되며, 변경 이벤트를 콜백 인수로 제공합니다.                         |                  `Function`                   |         |
| onFocus        | 스위치 입력 요소가 포커스를 받을 때 사용할 이벤트 핸들러                                                |                  `Function`                   |         |
| onBlur         | 스위치 입력 요소가 포커스를 잃을 때 사용할 이벤트 핸들러                                                |                  `Function`                   |         |
| size           | 스위치의 크기를 설정합니다.                                                                              |                  `s` `m` `l`                  |   `m`   |
| id             | `id` HTML 속성                                                                                           |                   `string`                    |         |
| qa             | 테스트에 사용되는 `data-qa` HTML 속성                                                                    |                   `string`                    |         |
| style          | `style` HTML 속성                                                                                        |             `React.CSSProperties`             |         |
| className      | `class` HTML 속성                                                                                        |                   `string`                    |         |
| title          | `title` HTML 속성                                                                                        |                   `string`                    |         |
| name           | 입력 요소의 `name` HTML 속성                                                                             |                   `string`                    |         |
| value          | 입력 요소의 `value` HTML 속성                                                                            |                   `string`                    |         |
| indeterminate  | 스위치의 indeterminate 상태를 토글합니다.                                                                |                   `boolean`                   | `false` |
| controlProps   | 기본 input 요소에 대한 추가 속성                                                                         | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | 기본 input 요소에 대한 ref                                                                               |         `React.Ref<HTMLInputElement>`         |         |
