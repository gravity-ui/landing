<!--GITHUB_BLOCK-->

# Alert

<!--/GITHUB_BLOCK-->

`Alert` 컴포넌트는 사용자에게 중요한 정보를 강조하기 위해 눈에 띄는 메시지를 표시합니다.

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### 테마

`normal`: 기본 테마 (기본값).

`info`: 모든 종류의 일반 정보에 사용됩니다.

`success`: 긍정적인 정보에 사용됩니다.

`warning`: 주의가 필요한 정보에 사용됩니다.

`danger`: 심각한 오류에 사용됩니다.

`utility`: 유용한 팁에 사용됩니다.

`clear`: 스타일이 없으며 다른 컴포넌트 내에서 사용하기에 적합합니다 (예: `Popover`의 `content`로 사용).

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert theme="normal" title="Normal" message="Normal theme" />
            <Alert theme="info" title="Info" message="Info theme" />
            <Alert theme="success" title="Success" message="Success theme" />
            <Alert theme="warning" title="Warning" message="Warning theme" />
            <Alert theme="danger" title="Danger" message="Danger theme" />
            <Alert theme="utility" title="Utility" message="Utility theme" />
            <Alert theme="clear" title="Clear" message="Clear theme" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert theme="normal" title="Normal" message="Normal theme"/>
<Alert theme="info" title="Info" message="Info theme"/>
<Alert theme="success" title="Success" message="Success theme"/>
<Alert theme="warning" title="Warning" message="Warning theme"/>
<Alert theme="danger" title="Danger" message="Danger theme"/>
<Alert theme="utility" title="Utility" message="Utility theme"/>
<Alert theme="clear" title="Clear" message="Clear theme"/>
```

<!--/GITHUB_BLOCK-->

### 뷰

`filled`: 알림의 배경색을 조정하는 데 사용됩니다 (기본값).

`outlined`: 알림의 테두리 색상을 조정하는 데 사용됩니다.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert title="Filled" message="Filled view" view="filled" />
            <Alert title="Outlined" message="Outlined theme" view="outlined" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Alert title="Filled" message="Filled view" view="filled" />
<Alert title="Outlined" message="Outlined theme" view="outlined" />
```

<!--/GITHUB_BLOCK-->

### 레이아웃

`vertical`: `actions` 속성에 버튼이 있는 경우 사용자에게 콘텐츠를 안내하는 데 사용됩니다. 텍스트 아래에 버튼을 표시할 수 있습니다 (기본값).

`horizontal`: `actions` 속성에 버튼이 있는 경우 사용자에게 콘텐츠를 안내하는 데 사용됩니다. 텍스트 오른쪽에 버튼을 표시할 수 있습니다.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert
                layout="vertical"
                title="Vertical"
                message="Vertical direction"
                actions={<Alert.Action>button</Alert.Action>}
            />
            <Alert
                layout="horizontal"
                title="Horizontal"
                message="Horizontal direction"
                actions={<Alert.Action>button</Alert.Action>}
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

### 모서리

`rounded`: 알림 창의 둥근 모서리를 활성화합니다 (기본값).

`square`: 알림 창의 사각형 모서리를 활성화합니다.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert title="Rounded" message="Rounded corners" corners="rounded" />
            <Alert title="Square" message="Square corners" corners="square" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title="Rounded" message="Rounded corners" corners="rounded"/>
<Alert title="Square" message="Square corners" corners="square"/>
```

<!--/GITHUB_BLOCK-->

## Alert 제목

`title`: 알림 제목. `Alert.Title`보다 우선순위가 낮습니다.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return <Alert title={<Alert.Title className={'some-class'} text="some text" />} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title={<Alert.Title className={'some-class'} text="some text"></Alert.Title>} />
```

<!--/GITHUB_BLOCK-->

## Alert 메시지

`message`: 알림 메시지. 알림의 내용을 완전히 설명할 만큼 의미가 있어야 합니다.

## `onClose`

`onClose`: 사용자가 알림의 닫기 버튼을 클릭할 때 호출되는 콜백 함수입니다. 이 속성이 정의되면 닫기 버튼이 표시됩니다.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <Alert
            onClose={() => alert('Close button pressed')}
            title="Alert has close"
            message="Alert has close"
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert
  onClose={() => alert('Close button pressed')}
  title="Alert has close"
  message="Alert has close"
/>
```

<!--/GITHUB_BLOCK-->

### 정렬

`Alert` 컴포넌트 내부의 콘텐츠가 세로로 정렬되는 방식을 결정합니다.

`baseline`: 기본 정렬입니다.

`center`: 콘텐츠가 `Alert` 컴포넌트 내에서 세로로 가운데 정렬됩니다. 액션이 텍스트보다 더 많은 공간을 차지하거나 아이콘이 콘텐츠 중앙에 있어야 하는 경우 유용할 수 있습니다.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert
                align="baseline"
                theme="info"
                title="Baseline"
                message="Baseline align"
                actions={<Alert.Action>button</Alert.Action>}
            />
            <Alert
                align="center"
                theme="info"
                title="Center"
                message="Center align"
                actions={<Alert.Action>button</Alert.Action>}
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert align="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert align="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

## 속성

`Alert` 컴포넌트는 다음과 같은 속성을 지원합니다.

### `align`

알림 메시지의 정렬 방식을 설정합니다.

| 값         | 설명                                    |
| :--------- | :-------------------------------------- |
| `vertical` | 수직 정렬 (기본값)                      |
| `horizontal` | 수평 정렬                               |
| `baseline` | 텍스트 기준선에 맞춰 정렬               |
| `center`   | 가운데 정렬                             |

### `theme`

알림 메시지의 테마를 설정합니다.

| 값     | 설명                                  |
| :----- | :------------------------------------ |
| `info` | 정보 메시지 (기본값)                  |
| `success` | 성공 메시지                           |
| `warning` | 경고 메시지                           |
| `danger`  | 오류 메시지                           |

### `title`

알림 메시지의 제목입니다.

### `message`

알림 메시지의 본문 내용입니다.

### `actions`

알림 메시지에 표시할 액션 버튼입니다. `Alert.Action` 컴포넌트를 사용합니다.

<!--LANDING_BLOCK-->

## Alert.Action

`Alert.Action` 컴포넌트는 `Alert` 컴포넌트의 `actions` 속성에 사용되는 버튼입니다.

### 속성

`Alert.Action` 컴포넌트는 다음과 같은 속성을 지원합니다.

*   **`children`**: 버튼 내부에 표시될 내용입니다. (예: 텍스트, 아이콘)

<!--/LANDING_BLOCK-->

| 이름          | 설명                                                                 |                                     타입                                     |   기본값    |
| :------------ | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------: | :----------: |
| theme         | Alert 모양                                                            | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` `"clear"` |  `"normal"`  |
| size          | Alert 크기                                                                  |                              `"s"` `"m"` `"l"`                               |    `"m"`     |
| view          | Alert 배경색 활성화/비활성화                                                            |                           `"filled"` `"outlined"`                            |  `"filled"`  |
| layout        | `actions` 속성에 버튼이 있을 때 사용자에게 콘텐츠로 안내하는 데 사용됩니다. |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| actionsLayout | 액션 버튼의 방향을 제어하는 데 사용됩니다.                        |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| corners       | Alert 창의 둥근/사각형 모서리에 사용됩니다.                           |                            `"rounded"` `"square"`                            | `"rounded"`  |
| title         | Alert 제목                                                          |                                   `string`                                   |              |
| message       | Alert 메시지                                                        |                              `React.ReactNode`                               |              |
| onClose       | 사용자가 Alert의 닫기 버튼을 클릭할 때 호출되는 콜백 함수    |                                  `Function`                                  |              |
| actions       | 버튼 또는 전체 사용자 정의 컴포넌트 배열                                  |                      `React.ReactNode` `"AlertAction"`                       |              |
| align         | Alert 컴포넌트 내부 콘텐츠의 수직 정렬 방식을 결정합니다.     |                           `"center"` `"baseline"`                            | `"baseline"` |
| style         | HTML style 속성                                                        |                            `React.CSSProperties`                             |              |
| className     | Alert 클래스 이름                                                         |                                   `string`                                   |              |
| icon          | 기본 아이콘 재정의                                                        |                              `React.ReactNode`                               |              |
| qa            | 테스트에 사용되는 HTML `data-qa` 속성.                                    |                                   `string`                                   |              |

## CSS API

| 이름                               | 설명                                                                    |
| :--------------------------------- | :----------------------------------------------------------------------------- |
| `--g-alert-padding`                | 좌우 패딩.                                                                 |
| `--g-alert-border-radius`          | 테두리 반경.                                                                 |
| `--g-alert-icon-margin-inline-end` | 아이콘과 콘텐츠 부분(텍스트 콘텐츠 + 액션) 사이의 들여쓰기         |
| `--g-alert-close-btn-margin`       | 콘텐츠 부분(텍스트 콘텐츠 + 액션)과 닫기 버튼 사이의 들여쓰기 |
| `--g-alert-actions-margin`         | 텍스트 콘텐츠와 액션 사이의 간격.                                          |
| `--g-alert-message-title-indent`   | 제목과 메시지 사이의 간격.                                                 |
| `--g-alert-actions-gap`            | 액션 버튼 사이의 간격.                                                    |
| `--g-alert-title-text-color`       | 제목 색상.                                                                     |
| `--g-alert-title-font-size`        | 제목 글꼴 크기.                                                               |
| `--g-alert-title-line-height`      | 제목 줄 높이.                                                             |
| `--g-alert-message-text-color`     | 메시지 색상.                                                                   |
| `--g-alert-message-font-size`      | 메시지 글꼴 크기.                                                             |
| `--g-alert-message-font-weight`    | 메시지 글꼴 두께.                                                           |
| `--g-alert-message-line-height`    | 메시지 줄 높이.                                                           |