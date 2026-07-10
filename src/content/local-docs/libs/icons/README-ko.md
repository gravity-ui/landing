# @gravity-ui/icons &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/icons)](https://www.npmjs.com/package/@gravity-ui/icons) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/icons/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/icons/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/icons/)

Gravity UI 아이콘 모음입니다. 아이콘은 SVG와 React 두 가지 소스를 제공합니다. [쇼케이스](https://preview.gravity-ui.com/icons/) 페이지를 확인해 보세요.

## 설치

```shell
npm install --save-dev @gravity-ui/icons
```

## 사용법

### React

```js
import Cloud from '@gravity-ui/icons/Cloud';
```

또는

```js
import {Cloud} from '@gravity-ui/icons';
```

### SVG

> 이를 위해 적절한 로더가 필요할 수 있습니다.

```js
import cloudIcon from '@gravity-ui/icons/svgs/cloud.svg';
```

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

## AI 에이전트용

Gravity UI의 공식 SVG 아이콘 세트로, React 컴포넌트와 `@gravity-ui/uikit`의 `Icon` 렌더러와 함께 사용할 수 있는 원시 `.svg` 파일 형태로 제공됩니다.

### 언제 사용해야 할까요?

- Gravity UI 애플리케이션 내에서 아이콘이 필요하고 일관되고 준비된 세트를 사용하고 싶을 때.
- uikit을 통해 아이콘을 렌더링할 때: 아이콘 컴포넌트를 가져와 `Icon` 컴포넌트의 `data` prop으로 전달합니다.
- 원시 `.svg` 에셋이 필요할 때 (예: CSS `background-image` 또는 빌드 시 SVG 로더용) React 컴포넌트 대신 사용합니다.

### 언제 사용하지 않아야 할까요?

- 화면에 아이콘을 렌더링할 때 — 이 패키지는 글리프만 제공하며, 실제 렌더링(크기 조정, 색상, 접근성)은 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)의 `Icon` 컴포넌트가 담당합니다.
- 세트에 없는 사용자 정의 또는 브랜드 아이콘이 필요할 때 — 자체 SVG를 가져와 uikit의 `Icon`으로 전달하세요. 여기에 포함될 것으로 기대하지 마세요.

### 일반적인 주의사항

- **아이콘은 이름이 아닌 데이터로 전달됩니다.** `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} />` 와 같이 사용하세요. `<Icon name="gear" />` API는 없으며, 이 패키지는 자체 `<Icon>` 컴포넌트를 내보내지 않습니다.
- **트리 쉐이킹을 위해 임포트 경로가 중요합니다.** `import Cloud from '@gravity-ui/icons/Cloud'`는 단일 아이콘을 가져옵니다. `import {Cloud} from '@gravity-ui/icons'`도 작동하지만 번들러가 배럴 파일을 트리 쉐이킹하는 데 의존합니다.
- **SVG 임포트에는 로더가 필요합니다.** `import icon from '@gravity-ui/icons/svgs/cloud.svg'`는 번들러가 `.svg` 파일을 처리하도록 구성된 경우에만 작동합니다.
- **크기와 색상은 렌더러에서 가져옵니다.** uikit의 `Icon` 컴포넌트에서 `size`를 설정하고 `color`/CSS `currentColor`로 색상을 제어하세요. SVG 자체에는 고정된 색상이 없습니다.