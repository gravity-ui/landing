<!--/GITHUB_BLOCK-->

# Accordion

<!--/GITHUB_BLOCK-->

Accordion 컴포넌트를 사용하면 사용자가 정보 섹션을 표시하거나 숨길 수 있는 접이식 콘텐츠 패널을 만들 수 있습니다. 이는 많은 양의 콘텐츠를 간결하게 구성하는 데 유용합니다.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## 기본 예제

```tsx
<Accordion>
  <Accordion.Item summary="첫 번째 항목">첫 번째 항목의 내용</Accordion.Item>
  <Accordion.Item summary="두 번째 항목">두 번째 항목의 내용</Accordion.Item>
  <Accordion.Item summary="세 번째 항목">세 번째 항목의 내용</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 아코디언 상태 제어

루트 컴포넌트의 `value` 및 `onUpdate` 속성 또는 각 항목별로 아코디언 상태를 제어할 수 있습니다.

루트 컴포넌트에서 상태를 제어하는 예제:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="Settings" value="item1">
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item summary="Notifications" value="item2">
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [value, setValue] = React.useState('item1');

  return (
    <Accordion value={value} onUpdate={setValue}>
      <Accordion.Item summary="Settings" value="item1">
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" value="item2">
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

expanded prop을 사용하여 각 항목별로 상태를 제어하는 예제:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="Settings"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item
                summary="Notifications"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [item1, setItem1] = React.useState(true);
  const [item2, setItem2] = React.useState(false);
  return (
    <Accordion>
      <Accordion.Item summary="Settings" onUpdate={setItem1} value="item1" expanded={item1}>
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" onUpdate={setItem2} value="item2" expanded={item2}>
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

## 크기

`size` 속성을 사용하여 `Accordion`의 크기를 제어할 수 있습니다. 기본 크기는 `m`입니다.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="Medium Size">Content for medium accordion</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Large Size">Content for large accordion</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Extra Large Size">
                    Content for extra large accordion
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Medium Size">
        Content for medium accordion
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Large Size">
        Content for large accordion
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Extra Large Size">
        Content for extra large accordion
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 보기

`solid`: 배경이 있는 기본 보기 (기본값).

`top-bottom`: 위아래 테두리가 있는 보기.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion view="solid">
                <Accordion.Item summary="Solid View">Content with solid background</Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Top-Bottom View">
                    Content with top-bottom borders
                </Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion view="solid">
    <Accordion.Item summary="Solid View">
        Content with solid background
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
<Accordion view="top-bottom">
    <Accordion.Item summary="Top-Bottom View">
        Content with top-bottom borders
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 화살표 위치

`end`: 헤더 끝에 화살표가 위치합니다 (기본값).

`start`: 헤더 시작에 화살표가 위치합니다.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="화살표 끝">끝에 화살표가 있는 콘텐츠</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="화살표 시작">
                    시작에 화살표가 있는 콘텐츠
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion arrowPosition="end">
    <Accordion.Item summary="Arrow at End">
        Content with arrow at the end
    </Accordion.Item>
</Accordion>
<Accordion arrowPosition="start">
    <Accordion.Item summary="Arrow at Start">
        Content with arrow at the start
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 여러 개

`multiple` 속성을 사용하면 여러 아코디언 항목을 동시에 확장할 수 있습니다.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="첫 번째 항목">첫 번째 항목의 내용</Accordion.Item>
            <Accordion.Item summary="두 번째 항목">두 번째 항목의 내용</Accordion.Item>
            <Accordion.Item summary="세 번째 항목">세 번째 항목의 내용</Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 사용자 정의 요약

`Accordion.Summary` 컴포넌트를 사용하여 사용자 정의 헤더를 만들 수 있습니다.

<!--SANDBOX
import {Accordion, Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item value="custom">
                <Accordion.Summary>
                    {(props) => (
                        <Button {...props} view="flat" width="max">
                            사용자 정의 요약 버튼
                        </Button>
                    )}
                </Accordion.Summary>
                사용자 정의 요약 컴포넌트가 있는 콘텐츠
            </Accordion.Item>
            <Accordion.Item summary="일반 요약">
                일반 요약 속성이 있는 콘텐츠
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item value="custom">
    <Accordion.Summary>
      {(props) => (
        <Button {...props} view="flat" width="max">
          <Icon data={Settings} size={16} />
          Custom Summary Button
        </Button>
      )}
    </Accordion.Summary>
    Content with custom summary component
  </Accordion.Item>
  <Accordion.Item summary="Regular Summary">Content with regular summary prop</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 비활성화 상태

`disabled` 속성을 사용하여 개별 아코디언 항목을 비활성화할 수 있습니다.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="활성 항목">
                이 항목은 활성 상태이며 확장할 수 있습니다.
            </Accordion.Item>
            <Accordion.Item summary="비활성 항목" disabled>
                이 항목은 비활성 상태이며 확장할 수 없습니다.
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="활성 항목">이 항목은 활성 상태이며 확장할 수 있습니다.</Accordion.Item>
  <Accordion.Item summary="비활성 항목" disabled>
    이 항목은 비활성 상태이며 확장할 수 없습니다.
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## 속성

### Accordion

| 이름          | 설명                                       |            타입            |  기본값  |
| :------------ | :----------------------------------------- | :------------------------: | :-------: |
| size          | 아코디언 크기                              |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | 아코디언 모양                              |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | 여러 항목을 동시에 확장할 수 있는지 여부    |         `boolean`          |  `false`  |
| arrowPosition | 화살표 표시 위치                           |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | 제어되지 않는 상태의 기본값                | `string` `string[]` `null` |           |
| value         | 제어되는 상태의 현재 값                    | `string` `string[]` `null` |           |
| onUpdate      | 상태 변경 시 호출되는 콜백 함수           |         `Function`         |           |
| ariaLevel     | 접근성을 위한 헤딩 레벨                    |          `number`          |    `3`    |
| className     | CSS 클래스 이름                            |          `string`          |           |
| qa            | 테스트에 사용되는 HTML `data-qa` 속성      |          `string`          |           |

### Accordion.Item

| 이름            | 설명                                     |       타입        | 기본값 |
| :-------------- | :--------------------------------------- | :---------------: | :-----: |
| value           | 항목의 고유 식별자                       |     `string`      |         |
| summary         | 아코디언 항목 헤더                       | `React.ReactNode` |         |
| expanded        | 제어되는 확장 상태                       |     `boolean`     |         |
| defaultExpanded | 기본 확장 상태                           |     `boolean`     |         |
| disabled        | 아코디언 항목 비활성화                   |     `boolean`     | `false` |
| keepMounted     | 축소 시에도 콘텐츠를 DOM에 유지할지 여부 |     `boolean`     |         |
| onUpdate        | 항목 상태 변경 시 호출되는 콜백 함수     |    `Function`     |         |
| className       | CSS 클래스 이름                          |     `string`      |         |
| qa              | 테스트에 사용되는 HTML `data-qa` 속성    |     `string`      |         |

### AccordionSummary

| 이름     | 설명                                                                             |                      타입                       |                                          기본값                                          |
| :------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | 사용자 정의 요약 렌더링 함수                                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | 테스트에 사용되는 HTML `data-qa` 속성입니다. `Accordion.Item`에 `qa`가 전달된 경우에만 작동합니다. |                    `string`                     | `Accordion.Item`에 `qa`가 전달된 경우 `${accordion-item}-summary`, 그렇지 않은 경우 `disclosure-summary` |

## CSS API

| 이름                           | 설명                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | 아코디언의 인라인(수평) 패딩 |