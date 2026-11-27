<!--GITHUB_BLOCK-->

# SegmentedRadioGroup

<!--/GITHUB_BLOCK-->

`SegmentedRadioGroup` 컴포넌트는 사용자가 여러 옵션 중에서 하나를 선택할 수 있는 라디오 버튼 그룹을 만드는 데 사용됩니다.

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### 비활성화 상태

<!--SANDBOX
import {SegmentedRadioGroup} from '@gravity-ui/uikit';

export default function () {
    return (
        <SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
            <SegmentedRadioGroup.Option value="Value 1">Value 1</SegmentedRadioGroup.Option>
            <SegmentedRadioGroup.Option value="Value 2">Value 2</SegmentedRadioGroup.Option>
            <SegmentedRadioGroup.Option value="Value 3">Value 3</SegmentedRadioGroup.Option>
        </SegmentedRadioGroup>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
  <SegmentedRadioGroup.Option value="Value 1">Value 1</SegmentedRadioGroup.Option>
  <SegmentedRadioGroup.Option value="Value 2">Value 2</SegmentedRadioGroup.Option>
  <SegmentedRadioGroup.Option value="Value 3">Value 3</SegmentedRadioGroup.Option>
</SegmentedRadioGroup>
```

<!--/GITHUB_BLOCK-->

### 크기

`size` 속성을 사용하여 `SegmentedRadioGroup`의 크기를 관리합니다. 기본 크기는 `m`입니다.

<!--SANDBOX
import {Flex, SegmentedRadioGroup} from '@gravity-ui/uikit';

const options = [
    <SegmentedRadioGroup.Option key="Value 1" value="Value 1">Value 1</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 2" value="Value 2">Value 2</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 3" value="Value 3">Value 3</SegmentedRadioGroup.Option>,
];

export default function () {
    return (
        <Flex direction="column" alignItems="center" gap={2}>
            <SegmentedRadioGroup name="group1" defaultValue="Value 1" size="s">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group2" defaultValue="Value 1" size="m">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group3" defaultValue="Value 1" size="l">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group4" defaultValue="Value 1" size="xl">{options}</SegmentedRadioGroup>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options = [
    <SegmentedRadioGroup.Option key="Value 1" value="Value 1">Value 1</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 2" value="Value 2">Value 2</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 3" value="Value 3">Value 3</SegmentedRadioGroup.Option>,
];

<SegmentedRadioGroup name="group1" defaultValue="Value 1" size="s">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group2" defaultValue="Value 1" size="m">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group3" defaultValue="Value 1" size="l">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group4" defaultValue="Value 1" size="xl">{options}</SegmentedRadioGroup>
```

<!--/GITHUB_BLOCK-->

### 너비

`width` 속성을 사용하여 `SegmentedRadioGroup`의 너비를 관리합니다.

<!--SANDBOX
import {Box, Flex, SegmentedRadioGroup} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width={140} style={{border: '2px dashed gray'}}>
            <Flex direction="column" gap={2}>
                <SegmentedRadioGroup>
                    <SegmentedRadioGroup.Option value="1" content="none" />
                    <SegmentedRadioGroup.Option value="2" content="none********" />
                </SegmentedRadioGroup>
                <SegmentedRadioGroup width="auto">
                    <SegmentedRadioGroup.Option value="1" content="auto" />
                    <SegmentedRadioGroup.Option value="2" content="auto********" />
                </SegmentedRadioGroup>
                <SegmentedRadioGroup width="max">
                    <SegmentedRadioGroup.Option value="1" content="max" />
                    <SegmentedRadioGroup.Option value="2" content="max" />
                </SegmentedRadioGroup>
            </Flex>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div style={{width: 140, border: '2px dashed gray'}}>
  <div style={{marginBottom: 10}}>
    <SegmentedRadioGroup>
      <SegmentedRadioGroup.Option value="1" content="none" />
      <SegmentedRadioGroup.Option value="2" content="none********" />
    </SegmentedRadioGroup>
  </div>
  <div style={{marginBottom: 10}}>
    <SegmentedRadioGroup width="auto">
      <SegmentedRadioGroup.Option value="1" content="auto" />
      <SegmentedRadioGroup.Option value="2" content="auto********" />
    </SegmentedRadioGroup>
  </div>
  <div>
    <SegmentedRadioGroup width="max">
      <SegmentedRadioGroup.Option value="1" content="max" />
      <SegmentedRadioGroup.Option value="2" content="max" />
    </SegmentedRadioGroup>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## 속성

| 이름         | 설명                                                                                             |                유형                | 기본값 |
| :----------- | :----------------------------------------------------------------------------------------------- | :--------------------------------: | :-----: |
| children     | 라디오 버튼의 내용입니다.                                                                        |            `ReactNode`             |         |
| disabled     | 라디오 버튼의 `disabled` 상태를 토글합니다.                                                      |             `boolean`              | `false` |
| options      | 라디오 버튼의 옵션입니다.                                                                        | `SegmentedRadioGroupOptionProps[]` |         |
| defaultValue | 컴포넌트가 마운트될 때 초기 값 상태를 설정합니다.                                                |              `string`              |         |
| onUpdate     | 사용자가 라디오 버튼 상태를 변경할 때 발생하며, 콜백 인수로 새 값을 제공합니다.                  |     `(value: string) => void`      |         |
| onChange     | 사용자가 라디오 버튼 상태를 변경할 때 발생하며, 콜백 인수로 변경 이벤트를 제공합니다.            |             `Function`             |         |
| onFocus      | 라디오 입력 요소가 포커스를 받을 때 사용할 이벤트 핸들러입니다.                                  |             `Function`             |         |
| onBlur       | 라디오 입력 요소가 포커스를 잃을 때 사용할 이벤트 핸들러입니다.                                  |             `Function`             |         |
| width        | 라디오 버튼의 너비를 설정합니다.                                                                 |            `auto - max`            |         |
| size         | 라디오 버튼의 크기를 설정합니다.                                                                 |          `s` `m` `l` `xl`          |   `m`   |
| name         | 입력 요소의 `name` HTML 속성입니다.                                                              |              `string`              |         |
| qa           | 테스트에 사용되는 `data-qa` HTML 속성입니다.                                                     |              `string`              |         |
| style        | `style` HTML 속성입니다.                                                                         |       `React.CSSProperties`        |         |
| className    | `class` HTML 속성입니다.                                                                         |              `string`              |         |

## SegmentedRadioGroup.Option

`SegmentedRadioGroup` 컴포넌트는 중첩된 `Option` 컴포넌트도 내보냅니다. 이를 사용하여 `SegmentedRadioGroup` 내에서 라디오 버튼 옵션을 만들 수 있습니다.

<!--SANDBOX
import type {SegmentedRadioGroupOptionProps} from '@gravity-ui/uikit';
import {SegmentedRadioGroup} from '@gravity-ui/uikit';

const options: SegmentedRadioGroupOptionProps[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <SegmentedRadioGroup name="group1" defaultValue={options[0].value}>
            <SegmentedRadioGroup.Option content={options[0].content} value={options[0].value} />
            <SegmentedRadioGroup.Option content={options[1].content} value={options[1].value} />
            <SegmentedRadioGroup.Option content={options[2].content} value={options[2].value} />
        </SegmentedRadioGroup>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: SegmentedRadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<SegmentedRadioGroup name="group1" defaultValue={options[0].value}>
  <SegmentedRadioGroup.Option content={options[0].content} value={options[0].value} />
  <SegmentedRadioGroup.Option content={options[1].content} value={options[1].value} />
  <SegmentedRadioGroup.Option content={options[2].content} value={options[2].value} />
</SegmentedRadioGroup>;
```

<!--/GITHUB_BLOCK-->

### 속성

| 이름     | 설명                                         |    타입     | 기본값 |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | 라디오의 내용 (일반적으로 레이블).        | `ReactNode` |         |
| content  | 라디오의 내용 (children 대신 사용 가능). | `ReactNode` |         |
| disabled | 라디오의 `disabled` 상태를 토글합니다.          |  `boolean`  | `false` |
| value    | 컨트롤 값                                       |  `string`   |         |
