# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

대시보드 그리드 렌더링 라이브러리입니다.

## 설치

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## 설명

이 라이브러리는 위젯을 그리드에 정렬하고, 크기를 조절하며, 새 위젯을 추가하거나 삭제하는 데 사용됩니다.
위젯은 React 컴포넌트이며, 텍스트, 그래픽, 이미지 등이 될 수 있습니다.

새 위젯은 플러그인 시스템을 통해 추가됩니다.

### 플러그인

플러그인은 사용자 정의 위젯을 만드는 데 필요합니다.

### Props

```ts
type ItemManipulationCallback = (eventData: {
  layout: Layout[];
  oldItem: Layout;
  newItem: Layout;
  placeholder: Layout;
  e: MouseEvent;
  element: HTMLElement;
}) => void;

interface DashKitProps {
  config: Config;
  editMode: boolean;
  onItemEdit: ({id}: {id: string}) => void;
  onChange: (data: {config: Config; itemsStateAndParams: ItemsStateAndParams}) => void;
  onDrop: (dropProps: ItemDropProps) => void;
  onItemMountChange: (item: ConfigItem, state: {isAsync: boolead; isMounted: boolean}) => void;
  onItemRender: (item: ConfigItem) => void;

  onDragStart?: ItemManipulationCallback;
  onDrag?: ItemManipulationCallback;
  onDragStop?: ItemManipulationCallback;
  onResizeStart?: ItemManipulationCallback;
  onResize?: ItemManipulationCallback;
  onResizeStop?: ItemManipulationCallback;

  defaultGlobalParams: GlobalParams;
  globalParams: GlobalParams;
  itemsStateAndParams: ItemsStateAndParams;
  settings: SettingsProps;
  context: ContextProps;
  overlayControls?: Record<string, OverlayControlItem[]> | null;
  overlayMenuItems?: MenuItems[] | null;
  noOverlay?: boolean;

  focusable?: boolean;
  onItemFocus: (item: ConfigItem) => void;
  onItemBlur: (item: ConfigItem) => void;

  draggableHandleClassName?: string;
  getPreparedCopyItemOptions?: (options: PreparedCopyItemOptions) => PreparedCopyItemOptions;
  onCopyFulfill?: (error: null | Error, data?: PreparedCopyItemOptions) => void;
}
```

- **config**: [config](#Config)입니다.
- **editMode**: 편집 모드 활성화 여부입니다.
- **onItemEdit**: 위젯 편집을 클릭했을 때 호출됩니다.
- **onChange**: config 또는 [itemsStateAndParams](#itemsStateAndParams)가 변경될 때 호출됩니다.
- **onDrop**: ActionPanel에서 (#DashKitDnDWrapper)를 사용하여 아이템을 드롭할 때 호출됩니다.
- **onItemMountChange**: 아이템 마운트 상태가 변경될 때 호출됩니다.
- **onItemRender**: 아이템 렌더링이 완료될 때 호출됩니다.
- **defaultGlobalParams**, **globalParams**: 모든 위젯에 영향을 미치는 [파라미터](#Params)입니다. DataLens에서 `defaultGlobalParams`는 대시보드 설정에 지정된 전역 파라미터입니다. `globalParams`는 URL에서 설정할 수 있는 전역 파라미터입니다.
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams)입니다.
- **settings**: DashKit 설정입니다.
- **context**: 모든 위젯에 전달될 객체입니다.
- **overlayControls**: 편집 시 위젯 컨트롤을 재정의하는 객체입니다. 전달되지 않으면 기본 컨트롤이 표시됩니다. `null`이 전달되면 닫기 버튼 또는 사용자 정의 메뉴만 표시됩니다.
- **overlayMenuItems**: 사용자 정의 드롭다운 메뉴 항목입니다.
- **noOverlay**: `true`이면 편집 중 오버레이 및 컨트롤이 표시되지 않습니다.
- **focusable**: `true`이면 그리드 아이템에 포커스를 줄 수 있습니다.
- **onItemFocus**: `focusable`이 `true`이고 아이템에 포커스가 맞춰졌을 때 호출됩니다.
- **onItemBlur**: `focusable`이 `true`이고 아이템에서 포커스가 해제되었을 때 호출됩니다.
- **draggableHandleClassName**: 위젯을 드래그 가능하게 만드는 요소의 CSS 클래스 이름입니다.
- **onDragStart**: 아이템 드래그가 시작될 때 ReactGridLayout에서 호출됩니다.
- **onDrag**: 아이템 드래그 중에 ReactGridLayout에서 호출됩니다.
- **onDragStop**: 아이템 드래그가 중지될 때 ReactGridLayout에서 호출됩니다.
- **onResizeStart**: 아이템 크기 조절이 시작될 때 ReactGridLayout에서 호출됩니다.
- **onResize**: 아이템 크기 조절 중에 ReactGridLayout에서 호출됩니다.
- **onResizeStop**: 아이템 크기 조절이 중지될 때 ReactGridLayout에서 호출됩니다.
- **getPreparedCopyItemOptions**: 로컬 스토리지에 저장하기 전에 복사된 아이템을 직렬화 가능한 객체로 변환할 때 호출됩니다. 이는 더 이상 사용되지 않는 `context.getPreparedCopyItemOptions` prop 대신 사용해야 합니다.
- **onCopyFulfill**: 아이템 복사가 성공적으로 완료되면 `error=null` 및 `data`와 함께 호출되고, 그렇지 않으면 `data` 없이 `error: Error`와 함께 호출됩니다.

## 사용법

### DashKit 설정

`DashKit`을 React 컴포넌트로 사용하기 전에 설정해야 합니다.

- 언어 설정

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- DashKit.setSettings

  전역 DashKit 설정(위젯 간 마진, 기본 위젯 크기, 위젯 오버레이 메뉴 등)에 사용됩니다.

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- DashKit.registerPlugins

  플러그인 등록 및 설정

  ```js
  import {DashKit} from '@gravity-ui/dashkit';
  import {pluginTitle, pluginText} from '@gravity-ui/dashkit';

  DashKit.registerPlugins(
    pluginTitle,
    pluginText.setSettings({
      apiHandler({text}) {
        return api.getMarkdown(text);
      },
    }),
  );

  DashKit.registerPlugins({
    type: 'custom',
    defaultLayout: {
      w: 10,
      h: 8,
    },
    renderer: function CustomPlugin() {
      return <div>Custom widget with custom controls</div>;
    },
  });
  ```

### Config

```ts
export interface Config {
  salt: string; // 고유 ID 생성을 위한 salt
  counter: number; // 고유 ID 생성을 위한 counter, 증가만 합니다.
  items: ConfigItem[]; // 초기 위젯 상태
  layout: ConfigLayout[]; // 그리드 상의 위젯 위치 https://github.com/react-grid-layout
  aliases: ConfigAliases; // 파라미터 별칭 #Params 참조
  connections: ConfigConnection[]; // 위젯 간 연결 #Params 참조
}
```

Config 예시:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';
```

```ts
const config: DashKitProps['config'] = {
  salt: '0.46703554571365613',
  counter: 4,
  items: [
    {
      id: 'tT',
      data: {
        size: 'm',
        text: '캡션',
        showInTOC: true,
      },
      type: 'title',
      namespace: 'default',
      orderId: 1,
    },
    {
      id: 'Ea',
      data: {
        text: '모드 _editActive',
        _editActive: true,
      },
      type: 'text',
      namespace: 'default',
    },
    {
      id: 'zR',
      data: {
        text: '### 텍스트',
      },
      type: 'text',
      namespace: 'default',
      orderId: 0,
    },
    {
      id: 'Dk',
      data: {
        foo: 'bar',
      },
      type: 'custom',
      namespace: 'default',
      orderId: 5,
    },
  ],
  layout: [
    {
      h: 2,
      i: 'tT',
      w: 36,
      x: 0,
      y: 0,
    },
    {
      h: 6,
      i: 'Ea',
      w: 12,
      x: 0,
      y: 2,
    },
    {
      h: 6,
      i: 'zR',
      w: 12,
      x: 12,
      y: 2,
    },
    {
      h: 4,
      i: 'Dk',
      w: 8,
      x: 0,
      y: 8,
    },
  ],
  aliases: {},
  connections: [],
};
```

새로운 항목을 설정에 추가합니다:

```ts
const newLayout = updateLayout: [
  {
    h: 6,
    i: 'Ea',
    w: 12,
    x: 0,
    y: 6,
  },
  {
    h: 4,
    i: 'Dk',
    w: 8,
    x: 0,
    y: 12,
  },
];

const newConfig = DashKit.setItem({
  item: {
    data: {
      text: `일부 텍스트`,
    },
    namespace: 'default',
    type: 'text',
    // 선택 사항. 새 항목을 미리 정의된 크기로 현재 레이아웃에 삽입해야 하는 경우
    layout: { // 현재 항목이 'Ea' 앞에 삽입됨
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // 선택 사항. 새 요소가 ActionPanel에서 드롭될 때 기존 항목에 대한 새 레이아웃 값
    updateLayout: newLayout,
  },
});
```

설정에서 기존 항목을 변경합니다:

```ts
const newConfig = DashKit.setItem({
  item: {
    id: 'tT', // item.id
    data: {
      size: 'm',
      text: `새 캡션`,
    },
    namespace: 'default',
    type: 'title',
  },
  config: config,
});
```

설정에서 항목을 삭제합니다:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const oldItemsStateAndParams: DashKitProps['itemsStateAndParams'] = {};

const {config: newConfig, itemsStateAndParams} = DashKit.removeItem({
  id: 'tT', // item.id
  config: config,
  itemsStateAndParams: this.state.itemsStateAndParams,
});
```

### 매개변수

```ts
type Params = Record<string, string | string[]>;
```

`DashKit`는 위젯, 링크 및 별칭에 대한 기본 매개변수에 따라 매개변수를 생성합니다. 이러한 매개변수는 [ChartKit](https://github.com/gravity-ui/chartkit) 라이브러리에 필요합니다.

생성 순서:

1. `defaultGlobalParams`
2. 기본 위젯 매개변수 `item.default`
3. `globalParams`
4. 큐에 따라 [itemsStateAndParams](#itemsStateAndParams)의 매개변수

### itemsStateAndParams

위젯 매개변수 및 상태와 매개변수 변경 큐를 저장하는 객체입니다.
큐 및 메타 정보를 저장하기 위한 `__meta__` 필드가 있습니다.

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // 큐
        version: number; // itemsStateAndParams의 현재 버전
    };
}
```

또한 위젯 상태 및 매개변수:

```ts
interface ItemsStateAndParamsBase {
  [itemId: string]: {
    state?: Record<string, any>;
    params?: Params;
  };
}
```

```ts
type ItemsStateAndParams = StateAndParamsMeta & ItemsStateAndParamsBase;
```

### 실험적인 DashKit 이벤트

> 실험적: 이 API는 마이너 릴리스에서 변경될 수 있습니다.

`DashKit`는 실험적인 인스턴스 이벤트 API를 제공합니다. 컴포넌트 ref를 사용하고 `dashkitRef.current?.on(eventName, handler)`로 구독하십시오. 이 메서드는 구독 취소 콜백을 반환합니다.

지원되는 첫 번째 이벤트는 `change`입니다. 레이아웃이 변경될 때 `onChange`가 호출되기 전에 발생합니다. 핸들러는 이전 및 다음 전체 레이아웃을 읽거나, 레이아웃 패치를 읽거나, `preventDefault()`를 호출하여 기본 `onChange` 호출을 중지할 수 있습니다.

```tsx
import React from 'react';
import {DashKit} from '@gravity-ui/dashkit';
import type {DashKitChangeEvent} from '@gravity-ui/dashkit';

function Dashboard() {
  const dashkitRef = React.useRef<DashKit>(null);

  React.useEffect(() => {
    const unsubscribe = dashkitRef.current?.on('change', (event: DashKitChangeEvent) => {
      console.log(event.patches);

      if (event.patches.length > 0) {
        event.preventDefault();
      }
    });

    return () => unsubscribe?.();
  }, []);

  return <DashKit ref={dashkitRef} config={config} editMode={true} onChange={onChange} />;
}
```

```ts
type DashKitLayoutPatch = Pick<ConfigLayout, 'i'> &
  Partial<Pick<ConfigLayout, 'x' | 'y' | 'w' | 'h' | 'parent'>>;

type DashKitChangeEvent = {
  patches: DashKitLayoutPatch[];
  layout: ConfigLayout[];
  previousLayout: ConfigLayout[];
  preventDefault: () => void;
  readonly defaultPrevented: boolean;
};
```

#### 이벤트 기반 레이아웃 업데이트

`change` 이벤트 핸들러에서 `preventDefault()`를 사용하면 config prop을 다시 초기화하지 않고 레이아웃 업데이트를 처리할 수 있습니다. DashKit은 내부적으로 기준선을 유지하고 증분 방식으로 패치를 계산합니다.

```tsx
function Dashboard() {
  const [config, setConfig] = useState(initialConfig);
  const dashkitRef = useRef<DashKit>(null);

  useEffect(() => {
    const unsubscribe = dashkitRef.current?.on('change', (event) => {
      event.preventDefault(); // onChange 호출 방지

      // 증분 패치만 백엔드로 전송
      sendPatches(event.patches);

      // setConfig({ ...config, layout: event.layout }) 호출 불필요
      // DashKit이 시각적 상태를 내부적으로 관리합니다.
    });

    return unsubscribe;
  }, []);

  return <DashKit ref={dashkitRef} config={config} editMode onChange={() => {}} />;
}
```

**중요:** 나중에 props에서 `config.layout`을 업데이트하는 경우(예: 서버 동기화), DashKit은 새 prop과 일치하도록 내부 기준선을 재설정합니다. 이렇게 하면 이벤트 기반 및 제어 워크플로우 모두와 호환됩니다.

### 메뉴

편집 모드에서 사용자 지정 DashKit 위젯 오버레이 메뉴를 지정할 수 있습니다.

```ts
type MenuItem = {
  id: string; // 고유 ID
  title?: string; // 문자열 제목
  icon?: ReactNode; // 아이콘 노드
  iconSize?: number | string; // px 단위의 아이콘 크기 (숫자 또는 단위 포함 문자열)
  handler?: (item: ConfigItem) => void; // 사용자 지정 항목 액션 핸들러
  visible?: (item: ConfigItem) => boolean; // 메뉴 항목 필터링을 위한 선택적 가시성 핸들러
  className?: string; // 사용자 지정 클래스 속성
};

// 설정에서 메뉴 항목 배열 사용
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />

[deprecated]
// overlayMenuItems 속성은 setSettings 메뉴보다 우선순위가 높습니다.
DashKit.setSettings({menu: [] as Array<MenuItem>});
```

### ActionPanel에서 드래그 가능한 항목

#### DashKitDnDWrapper

```ts
type DraggedOverItem = {
  h: number;
  w: number;
  type: string;
  parent: string;
  i?: number;
};

interface DashKitDnDWrapperProps {
  dragImageSrc?: string; // 드래그 이미지 미리보기, 기본값은 투명한 1px png base64
  onDragStart?: (dragProps: ItemDragProps) => void; // ActionPanel에서 요소를 드래그할 때 호출되는 콜백
  onDragEnd?: () => void; // 요소가 드롭되거나 드래그가 취소될 때 호출되는 콜백
  onDropDragOver?: (
    draggedItem: DraggedOverItem,
    sharedItem: DraggedOverItem | null,
  ) => void | boolean;
}
```

- **dragImageSrc**: 드래그 이미지 미리보기. 기본값은 투명한 1px png base64입니다.
- **onDragStart**: ActionPanel에서 요소를 드래그할 때 호출되는 콜백입니다.
- **onDragEnd**: 요소가 드롭되거나 드래그가 취소될 때 호출되는 콜백입니다.

```ts
type ItemDragProps = {
  type: string; // 플러그인 유형
  layout?: {
    // 선택 사항. 미리보기 및 초기화를 위한 레이아웃 항목 크기
    w?: number;
    h?: number;
  };
  extra?: any; // 사용자 지정 사용자 컨텍스트
};
```

```ts
type ItemDropProps = {
  commit: () => void; // 모든 구성 작업이 완료된 후 호출되어야 하는 콜백
  dragProps: ItemDragProps; // 항목 드래그 속성
  itemLayout: ConfigLayout; // 계산된 항목 레이아웃 치수
  newLayout: ConfigLayout[]; // 요소가 드롭된 후의 새 레이아웃
};
```

#### 예시:

```jsx
const overlayMenuItems = [
  {
    id: 'chart',
    icon: <Icon data={ChartColumn} />,
    title: '차트',
    qa: 'chart',
    dragProps: { // ItemDragProps
        type: 'custom', // 등록된 플러그인 유형
    },
  }
]

const onDrop = (dropProps: ItemDropProps) => {
  // ... 요소를 구성에 추가
  dropProps.commit();
}

<DashKitDnDWrapper>
  <DashKit editMode={true} config={config} onChange={onChange} onDrop={onDrop} />
  <ActionPanel items={overlayMenuItems} />
</DashKitDnDWrapper>
```

### CSS API

| 이름                                           | 설명           |
| :--------------------------------------------- | :------------- |
| Action panel 변수                              |                |
| `--dashkit-action-panel-color`                 | 배경색         |
| `--dashkit-action-panel-border-color`          | 테두리 색상    |
| `--dashkit-action-panel-border-radius`         | 테두리 반경    |
| Action panel 항목 변수                         |                |
| `--dashkit-action-panel-item-color`            | 배경색         |
| `--dashkit-action-panel-item-text-color`       | 텍스트 색상    |
| `--dashkit-action-panel-item-color-hover`      | 호버 배경색    |
| `--dashkit-action-panel-item-text-color-hover` | 호버 텍스트 색상 |
| Overlay 변수                                   |                |
| `--dashkit-overlay-border-color`               | 테두리 색상    |
| `--dashkit-overlay-color`                      | 배경색         |
| `--dashkit-overlay-opacity`                    | 투명도         |
| Grid 항목 변수                                 |                |
| `--dashkit-grid-item-edit-opacity`             | 투명도         |
| `--dashkit-grid-item-border-radius`            | 테두리 반경    |
| Placeholder 변수                               |                |
| `--dashkit-placeholder-color`                  | 배경색         |
| `--dashkit-placeholder-opacity`                | 투명도         |

#### 사용 예시

```css
.custom-theme-wrapper {
  --dashkit-grid-item-edit-opacit: 1;
  --dashkit-overlay-color: var(--g-color-base-float);
  --dashkit-overlay-border-color: var(--g-color-base-float);
  --dashkit-overlay-opacity: 0.5;

  --dashkit-action-panel-border-color: var(--g-color-line-info);
  --dashkit-action-panel-color: var(--g-color-base-float-accent);
  --dashkit-action-panel-border-radius: var(--g-border-radius-xxl);
}
```

```tsx
// ....

const CustomThemeWrapper = (props: {
  dashkitProps: DashkitProps;
  actionPanelProps: ActionPanelProps;
}) => {
  return (
    <div className="custom-theme-wrapper">
      <Dashkit {...props.dashkitProps} />
      <ActionPanel {...props.actionPanelProps} />
    </div>
  );
};
```

## 개발

### 빌드 및 감시

- 종속성 설치 `npm ci`
- 프로젝트 빌드 `npm run build`
- 스토리북 빌드 `npm run start`

기본적으로 스토리북은 `http://localhost:7120/`에서 실행됩니다.
스토리북이 실행 중일 때 프로젝트의 변경 사항이 항상 반영되지 않을 수 있으므로, 프로젝트를 수동으로 다시 빌드하고 스토리북을 다시 시작하는 것이 좋습니다.

### 개발 머신에서 개발하기 위한 nginx 설정 예시

```bash
server {
    server_name dashkit.username.ru;

    include common/ssl;

    access_log /home/username/logs/common.access.log;
    error_log /home/username/logs/common.error.log;

    root /home/username/projects/dashkit;

    location / {
        try_files $uri @node;
    }

    location @node {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://127.0.0.1:7120;
        proxy_redirect off;
    }
}
```

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하십시오.

## AI 에이전트용

플러그인 시스템을 통해 크기 조절 및 드래그 가능한 위젯을 반응형 그리드에 배치하는 대시보드 그리드 컴포저입니다. 개별 차트나 패널을 수동으로 배치하는 대신 사용자 편집 가능한 대시보드를 구축할 때 사용하세요.

### 언제 사용해야 할까요?

- 위젯의 위치, 크기 조절, 재배치가 가능한 구성 가능한 대시보드를 렌더링할 때 ( `react-grid-layout` 기반).
- 사용자 편집 가능한 레이아웃: 액션 패널에서 위젯 추가/제거, 드래그 앤 드롭, 오버레이 컨트롤이 있는 편집 모드.
- 각 위젯 유형(제목, 텍스트, 차트, 사용자 정의)이 한 번 등록되고 `config`에 의해 구동되는 플러그인 기반 위젯.

### 언제 사용하지 않아야 할까요?

- 단일 고정 차트 또는 패널의 경우, [`@gravity-ui/charts`](https://gravity-ui.com/charts) 또는 [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit)를 직접 사용하세요. 그리드/플러그인 메커니즘은 위젯 하나에 과도한 오버헤드입니다.
- 위젯 대시보드가 아닌 범용 반응형 그리드의 경우, `react-grid-layout`을 직접 사용하세요.
- DashKit 대시보드 내에 ChartKit 기반 차트 위젯을 포함하는 경우, DashKit이 쉘 역할을 하며 실제 차트 렌더링은 여전히 [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit)에 의존합니다.

### 일반적인 함정

- **환각 컴포넌트 `<Dashboard>`** — 내보내기는 `<DashKit>`입니다 (드래그 앤 드롭 쉘은 `<DashKit>` + `<ActionPanel>`을 감싸는 `<DashKitDnDWrapper>`입니다).
- **헬퍼 대신 `config`를 변경하는 경우** — 레이아웃과 ID가 일관되게 유지되도록 항목을 추가/변경/제거하려면 정적 `DashKit.setItem({...})` / `DashKit.removeItem({...})` 헬퍼를 사용하세요.
- **`DashKit.setSettings` / `DashKit.registerPlugins`를 잊는 경우** — 컴포넌트가 렌더링되기 전에 구성(언어, 그리드 설정, 플러그인 등록)되어야 합니다. 그렇지 않으면 위젯이 아무것도 표시하지 않습니다.
- **두 개의 매개변수 prop을 혼동하는 경우** — `defaultGlobalParams` (대시보드 수준 기본값) 대 `globalParams` (URL로 재정의 가능한 전역 변수); 둘 다 ChartKit에서 소비하는 매개변수 생성 큐로 전달됩니다.
- **`change` 이벤트와 함께 `onChange`를 수동으로 호출하는 경우** — 실험적인 `change` 핸들러에서 `event.preventDefault()`를 사용하면 DashKit은 내부적으로 시각적 상태를 유지합니다. props에서 `config.layout`을 다시 설정하면 해당 기준선이 재설정됩니다.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/dashkit/build/docs/INDEX.md`에 있습니다.