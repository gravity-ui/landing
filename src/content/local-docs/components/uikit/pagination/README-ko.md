GRAVITY_TRANSLATION_BLOCK_0_END

`Pagination`은 긴 목록이나 테이블을 여러 페이지로 나누는 데 사용되는 페이지 탐색 컨트롤(페이지 번호, 이전/다음 버튼, 선택적 페이지 크기 선택기)을 렌더링합니다.

```tsx
import {Pagination} from '@gravity-ui/uikit';
```

## 사용법

```jsx
import {Pagination, PaginationProps} from '@gravity-ui/uikit';

const [state, setState] = React.useState({page: 1, pageSize: 100});

const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
  setState((prevState) => ({...prevState, page, pageSize}));

const pagination = <Pagination page={1} pageSize={100} total={1000} onUpdate={handleUpdate} />;
```

## 사용자 정의 컴포넌트

`pageComponent` prop을 사용하여 클릭 가능한 페이지 항목(탐색 및 페이지 버튼)의 루트 요소를 재정의할 수 있습니다. `pageComponent="a"`를 전달하고 `getPageProps`에서 `href`를 반환하여 일반 링크를 사용할 수 있습니다. 라우터 통합의 경우 `Link`와 같은 라우터 인식 컴포넌트를 전달하고 라우터별 prop(예: `to`)을 반환합니다.

`getPageProps`는 각 클릭 가능한 항목(페이지 버튼 및 탐색 버튼)에 대해 호출됩니다. 줄임표, "페이지 중" 표시기, 모바일 레이아웃의 간단한(현재) 페이지 항목 또는 비활성화된 탐색 버튼에는 호출되지 않습니다(이러한 버튼은 항상 비활성화된 기본 `<button disabled>`로 유지되므로 키보드를 통해서도 활성화할 수 없습니다). Pagination에서 관리하는 prop(`onClick`, `className`, `size`, `view`, `selected`, `disabled`, `qa`, `aria-current`, `children`)은 `getPageProps`에서 반환된 값보다 우선합니다.

### 일반 링크 (`pageComponent="a"`)

```jsx
import {Pagination} from '@gravity-ui/uikit';
import type {PaginationProps, PaginationPagePropsGetter} from '@gravity-ui/uikit';

const total = 1000;
const page = 1;
const pageSize = 100;

const noop: PaginationProps['onUpdate'] = () => {};

const getPageProps: PaginationPagePropsGetter = ({page}) => ({href: `?page=${page}`});

const pagination = (
  <Pagination
    page={page}
    pageSize={pageSize}
    total={total}
    onUpdate={noop}
    pageComponent="a"
    getPageProps={getPageProps}
  />
);
```

### 라우터 링크 (예: `react-router`)

```jsx
import {Pagination} from '@gravity-ui/uikit';
import type {PaginationProps, PaginationPagePropsGetter} from '@gravity-ui/uikit';
import {Link} from 'react-router-dom';

const total = 1000;
const page = 1;
const pageSize = 100;

const noop: PaginationProps['onUpdate'] = () => {};

const getPageProps: PaginationPagePropsGetter<{to: string}> = ({page}) => ({
  to: `?page=${page}`,
});

const pagination = (
  <Pagination
    page={page}
    pageSize={pageSize}
    total={total}
    onUpdate={noop}
    pageComponent={Link}
    getPageProps={getPageProps}
  />
);
```

## 속성

| 이름            | 설명                                                                                                                                             |            타입             |   기본값    |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :----------: |
| className       | `class` HTML 속성                                                                                                                                |          `string`           |              |
| compact         | `First`, `Previous`, `Next` 버튼의 제목을 숨깁니다. 모바일 버전에서는 항상 `true`로 설정됩니다.                                                    |          `boolean`          |    `true`    |
| onUpdate        | 페이지 번호 또는 `pageSize`가 변경될 때 호출됩니다.                                                                                               |         `Function`          |              |
| size            | 페이지네이션 항목의 크기입니다. 기본값은 모바일 버전에서는 `l`, 데스크톱 버전에서는 `m`입니다.                                                        |          `string`           |              |
| page            | 현재 페이지 번호                                                                                                                                 |          `number`           |              |
| pageSize        | 페이지당 데이터 항목 수                                                                                                                          |          `number`           |              |
| pageSizeOptions | `sizeChanger` 옵션을 지정할 수 있습니다.                                                                                                           |         `number[]`          |              |
| total           | 총 데이터 항목 수                                                                                                                                |          `number`           |              |
| showInput       | 페이지로 직접 이동하는 입력 필드를 표시합니다.                                                                                                   |          `boolean`          |   `false`    |
| showPages       | 페이지 번호를 표시합니다.                                                                                                                        |          `boolean`          |    `true`    |
| qa              | 테스트에 사용되는 `data-qa` HTML 속성                                                                                                            |          `string`           |              |
| view            | 버튼 및 컨트롤의 모양을 설정합니다. 모바일에서 페이지네이션 입력 필드의 모양에 영향을 줍니다.                                                        |   `"outlined" \| "clear"`   | `"outlined"` |
| pageComponent   | 클릭 가능한 페이지네이션 항목(탐색 및 페이지 버튼)의 루트 요소를 재정의합니다. 일반 링크의 경우 `"a"`를 사용하거나 라우터 인식 컴포넌트를 사용합니다. |  `PaginationPageComponent`  |              |
| getPageProps    | 클릭 가능한 각 항목에 대한 추가 속성을 반환합니다 (예: `"a"`의 경우 `href` 또는 라우터 `Link`의 경우 `to`). `pageComponent`가 설정된 경우에만 적용됩니다. | `PaginationPagePropsGetter` |              |