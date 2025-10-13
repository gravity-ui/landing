# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

Canvas 렌더링을 사용하여 인터랙티브 타임라인 시각화를 구축하기 위한 React 기반 라이브러리입니다.

## 문서

자세한 내용은 [문서](./docs/docs.md)를 참조하세요.

## 기능

- 높은 성능을 위한 Canvas 기반 렌더링
- 확대/축소 및 이동 기능이 있는 인터랙티브 타임라인
- 이벤트, 마커, 섹션, 축 및 그리드 지원
- 시각적 구성 및 시간대 강조 표시를 위한 배경 섹션
- 스마트 마커 그룹화 및 자동 그룹 확대/축소 - 그룹화된 마커를 클릭하여 개별 구성 요소로 확대/축소
- 대규모 데이터셋에 대한 성능 향상을 위한 가상화 렌더링 (타임라인 콘텐츠가 뷰포트를 초과할 때만 활성화)
- 사용자 정의 가능한 모양 및 동작
- 전체 타입 정의를 갖춘 TypeScript 지원
- 사용자 정의 훅을 사용한 React 통합

## 설치

```bash
npm install @gravity-ui/timeline
```

## 사용법

타임라인 컴포넌트는 다음과 같은 기본 설정을 사용하여 React 애플리케이션에서 사용할 수 있습니다.

```tsx
import { TimelineCanvas, useTimeline } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline, api, start, stop } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000, // 지금으로부터 1시간 후
      axes: [],
      events: [],
      markers: [],
      sections: []
    },
    viewConfiguration: {
      // 선택적 보기 구성
    }
  });

  // timeline - Timeline 인스턴스
  // api - CanvasApi 인스턴스 (timeline.api와 동일)
  // start - canvas로 타임라인 초기화 함수
  // stop - 타임라인 파괴 함수

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### 섹션 구조

각 섹션에는 다음 구조가 필요합니다.

```typescript
type TimelineSection = {
  id: string;               // 고유 섹션 식별자
  from: number;             // 시작 타임스탬프
  to?: number;              // 선택적 종료 타임스탬프 (기본값: 타임라인 종료)
  color: string;            // 섹션의 배경색
  hoverColor?: string;      // 섹션에 마우스를 올렸을 때의 선택적 색상
  renderer?: AbstractSectionRenderer; // 선택적 사용자 정의 렌더러
};
```

섹션은 시간대에 대한 배경색을 제공하고 타임라인 콘텐츠를 시각적으로 구성하는 데 도움이 됩니다.

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [],
      sections: [
        {
          id: 'morning',
          from: Date.now(),
          to: Date.now() + 1800000, // 30분
          color: 'rgba(255, 235, 59, 0.3)', // 반투명 노란색
          hoverColor: 'rgba(255, 235, 59, 0.4)'
        },
        {
          id: 'afternoon',
          from: Date.now() + 1800000,
          // 'to'가 지정되지 않음 - 타임라인 끝까지 확장
          color: 'rgba(76, 175, 80, 0.2)', // 반투명 녹색
          hoverColor: 'rgba(76, 175, 80, 0.3)'
        }
      ]
    },
    viewConfiguration: {
      sections: {
        hitboxPadding: 2 // 마우스 오버 감지 패딩
      }
    }
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### 마커 구조

각 마커에는 다음 구조가 필요합니다.

```typescript
type TimelineMarker = {
  time: number;           // 마커 위치의 타임스탬프
  color: string;          // 마커 선의 색상
  activeColor: string;    // 마커가 선택되었을 때의 색상 (필수)
  hoverColor: string;     // 마커에 마우스를 올렸을 때의 색상 (필수)
  lineWidth?: number;     // 마커 선의 선택적 너비
  label?: string;         // 선택적 레이블 텍스트
  labelColor?: string;    // 선택적 레이블 색상
  renderer?: AbstractMarkerRenderer; // 선택적 사용자 정의 렌더러
  nonSelectable?: boolean;// 마커를 선택할 수 있는지 여부
  group?: boolean;        // 마커가 그룹을 나타내는지 여부
};
```

### 마커 그룹화 및 확대/축소

타임라인은 가까이 있는 마커를 자동으로 그룹화하고 확대/축소 기능을 제공합니다.

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [
        // 이 마커들은 함께 그룹화됩니다.
        { time: Date.now(), color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Event 1' },
        { time: Date.now() + 1000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Event 2' },
        { time: Date.now() + 2000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Event 3' },
      ]
    },
    viewConfiguration: {
      markers: {
        collapseMinDistance: 8,        // 8픽셀 이내의 마커 그룹화
        groupZoomEnabled: true,        // 그룹 클릭 시 확대/축소 활성화
        groupZoomPadding: 0.3,        // 그룹 주변 30% 패딩
        groupZoomMaxFactor: 0.3,      // 최대 확대/축소 계수
      }
    }
  });

  // 그룹 확대/축소 이벤트 수신
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('Group zoomed:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## 작동 방식

타임라인 컴포넌트는 React를 사용하여 구축되었으며 인터랙티브 타임라인 시각화를 생성하는 유연한 방법을 제공합니다. 작동 방식은 다음과 같습니다.

### 컴포넌트 아키텍처

타임라인은 두 가지 주요 객체를 통해 구성할 수 있는 React 컴포넌트로 구현됩니다.

1.  **TimelineSettings**: 타임라인의 핵심 동작 및 모양을 제어합니다.
    *   `start`: 타임라인의 시작 시간
    *   `end`: 타임라인의 종료 시간
    *   `axes`: 축 구성 배열
    *   `events`: 이벤트 구성 배열
    *   `markers`: 마커 구성 배열
    *   `sections`: 섹션 구성 배열

2.  **ViewConfiguration**: 시각적 표현 및 상호 작용 설정을 관리합니다.
    *   모양, 확대/축소 수준 및 상호 작용 동작을 제어합니다.
    *   사용자 정의하거나 기본값을 사용할 수 있습니다.

### 이벤트 처리

타임라인 컴포넌트는 여러 가지 대화형 이벤트를 지원합니다.

*   `on-click`: 타임라인을 클릭할 때 트리거됩니다.
*   `on-context-click`: 마우스 오른쪽 클릭/컨텍스트 메뉴에서 트리거됩니다.
*   `on-select-change`: 선택 항목이 변경될 때 발생합니다.
*   `on-hover`: 타임라인 요소 위로 마우스를 올릴 때 트리거됩니다.
*   `on-leave`: 마우스가 타임라인 요소를 벗어날 때 발생합니다.

이벤트 처리 예시:

```tsx
import { useTimelineEvent } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline } = useTimeline({ /* ... */ });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('타임라인 클릭됨:', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('선택 항목 변경됨:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### React 통합

이 컴포넌트는 타임라인 관리를 위해 사용자 정의 훅을 사용합니다.

*   `useTimeline`: 타임라인 인스턴스 및 수명 주기를 관리합니다.
    *   타임라인을 생성하고 초기화합니다.
    *   컴포넌트가 언마운트될 때 정리 작업을 처리합니다.
    *   타임라인 인스턴스에 대한 액세스를 제공합니다.

*   `useTimelineEvent`: 이벤트 구독 및 정리를 처리합니다.
    *   이벤트 리스너 수명 주기를 관리합니다.
    *   언마운트 시 리스너를 자동으로 정리합니다.

컴포넌트는 언마운트될 때 타임라인 인스턴스의 정리 및 파괴를 자동으로 처리합니다.

### 이벤트 구조

타임라인의 이벤트는 다음 구조를 따릅니다.

```typescript
type TimelineEvent = {
  id: string;             // 고유 식별자
  from: number;           // 시작 타임스탬프
  to?: number;            // 종료 타임스탬프 (포인트 이벤트의 경우 선택 사항)
  axisId: string;         // 이 이벤트가 속한 축의 ID
  trackIndex: number;     // 축 트랙에서의 인덱스
  renderer?: AbstractEventRenderer; // 선택적 사용자 정의 렌더러
  color?: string;         // 선택적 이벤트 색상
  selectedColor?: string; // 선택적 선택 상태 색상
};
```

### 직접 TypeScript 사용

Timeline 클래스는 React 없이 TypeScript에서 직접 사용할 수 있습니다. 이는 다른 프레임워크 또는 일반 JavaScript 애플리케이션과의 통합에 유용합니다.

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// 타임라인 인스턴스 생성
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 지금으로부터 1시간 후
    axes: [
      {
        id: 'main',
        label: '메인 축',
        color: '#000000'
      }
    ],
    events: [
      {
        id: 'event1',
        from: timestamp + 1800000, // 지금으로부터 30분 후
        to: timestamp + 2400000,   // 지금으로부터 40분 후
        label: '샘플 이벤트',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 지금으로부터 20분 후
        label: '중요 지점',
        color: '#ff0000',
        activeColor: '#ff5252',
        hoverColor: '#ff1744'
      }
    ],
    sections: [
      {
        id: 'section1',
        from: timestamp,
        to: timestamp + 1800000, // 처음 30분
        color: 'rgba(33, 150, 243, 0.2)', // 연한 파란색 배경
        hoverColor: 'rgba(33, 150, 243, 0.3)'
      }
    ]
  },
  viewConfiguration: {
    // 선택 사항: 보기 설정 사용자 정의
    zoomLevels: [1, 2, 4, 8, 16],
    hideRuler: false,
    showGrid: true
  }
});

// 캔버스 요소로 초기화
const canvas = document.querySelector('canvas');
if (canvas instanceof HTMLCanvasElement) {
  timeline.init(canvas);
}

// 이벤트 리스너 추가
timeline.on('on-click', (detail) => {
  console.log('타임라인 클릭됨:', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('선택 항목 변경됨:', detail);
});

// 완료 시 정리
timeline.destroy();
```

Timeline 클래스는 타임라인 관리를 위한 풍부한 API를 제공합니다.

*   **이벤트 관리**:
    ```typescript
    // 이벤트 리스너 추가
    timeline.on('eventClick', (detail) => {
      console.log('이벤트 클릭됨:', detail);
    });

    // 이벤트 리스너 제거
    const handler = (detail) => console.log(detail);
    timeline.on('eventClick', handler);
    timeline.off('eventClick', handler);

    // 사용자 정의 이벤트 발생
    timeline.emit('customEvent', { data: 'custom data' });
    ```

*   **타임라인 제어**:
    ```typescript
    // 타임라인 데이터 업데이트
    timeline.api.setEvents([
      {
        id: 'newEvent',
        from: Date.now(),
        to: Date.now() + 3600000,
        label: '새 이벤트',
        axisId: 'main',
        trackIndex: 0
      }
    ]);

    // 축 업데이트
    timeline.api.setAxes([
      {
        id: 'newAxis',
        label: '새 축',
        color: '#0000ff'
      }
    ]);

    // 마커 업데이트
    timeline.api.setMarkers([
      {
        id: 'newMarker',
        time: Date.now(),
        label: '새 마커',
        color: '#00ff00',
        activeColor: '#4caf50',
        hoverColor: '#2e7d32'
      }
    ]);

    // 섹션 업데이트
    timeline.api.setSections([
      {
        id: 'newSection',
        from: Date.now(),
        to: Date.now() + 1800000,
        color: 'rgba(255, 193, 7, 0.2)', // 연한 호박색 배경
        hoverColor: 'rgba(255, 193, 7, 0.3)'
      }
    ]);
    ```

## 라이브 예제

[Storybook](https://preview.gravity-ui.com/timeline/)에서 대화형 예제를 살펴보세요.

- [기본 타임라인](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - 이벤트와 축이 있는 간단한 타임라인
- [무한 타임라인](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - 이벤트와 축이 있는 무한 타임라인
- [마커](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - 수직 마커와 레이블이 있는 타임라인
- [사용자 정의 이벤트](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - 사용자 정의 이벤트 렌더링이 있는 타임라인


## 개발

### Storybook

이 프로젝트에는 컴포넌트 개발 및 문서화를 위한 Storybook이 포함되어 있습니다.

Storybook을 실행하려면 다음 명령어를 사용하세요:

```bash
npm run storybook
```

그러면 6006번 포트에서 Storybook 개발 서버가 시작됩니다. http://localhost:6006 에서 접속할 수 있습니다.

배포를 위한 정적 Storybook 버전을 빌드하려면 다음 명령어를 사용하세요:

```bash
npm run build-storybook
```

## 라이선스

MIT