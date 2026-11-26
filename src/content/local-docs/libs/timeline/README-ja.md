# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

> [English version](./README.md)

Canvasレンダリングによるインタラクティブなタイムラインビジュアライゼーションを構築するためのReactベースのライブラリです。

## ドキュメント

詳細については、[ドキュメント](./docs/docs.md)を参照してください。

## プレビュー

イベントと軸を持つ基本的なタイムライン:

![Basic timeline with events](./docs/img/lines.png)

展開可能なネストされたイベントを持つカスタムレンダリング ([NestedEvents](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--nested-events-story) の例):

![Nested events timeline](./docs/img/events.png)

## 特徴

- 高パフォーマンスのためのCanvasベースレンダリング
- ズームとパン機能を備えたインタラクティブなタイムライン
- 柔軟なホイールとトラックパッド操作、垂直スクロールのパススルーを含む
- イベント、マーカー、セクション、軸、グリッドのサポート
- 視覚的な整理と時間範囲のハイライトのための背景セクション
- スマートマーカーグルーピングと自動ズーム機能 - グループ化されたマーカーをクリックすると、個々のコンポーネントにズームインします
- 大規模データセットでのパフォーマンス向上のための仮想化レンダリング（タイムラインコンテンツがビューポートを超える場合にのみアクティブ）
- カスタマイズ可能な外観と動作
- 完全な型定義によるTypeScriptサポート
- カスタムフックによるReact統合

## インストール

```bash
npm install @gravity-ui/timeline
```

## 使用方法

タイムラインコンポーネントは、以下の基本的なセットアップでReactアプリケーションで使用できます。

```tsx
import { TimelineCanvas, useTimeline } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline, api, start, stop } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000, // 1時間後
      axes: [],
      events: [],
      markers: [],
      sections: []
    },
    viewConfiguration: {
      // オプションのビュー設定
    }
  });

  // timeline - Timelineインスタンス
  // api - CanvasApiインスタンス (timeline.apiと同じ)
  // start - タイムラインをキャンバスで初期化する関数
  // stop - タイムラインを破棄する関数

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### 軸の構造

各軸は以下の構造を持ちます。

```typescript
type TimelineAxis = {
  id: string;          // 一意の軸識別子
  tracksCount: number; // 軸内のトラック数
  top: number;         // 垂直位置 (px)
  height: number;      // トラックごとの高さ (px)
};
```

### 水平軸線

`viewConfiguration.axes.linePosition` を通じて水平線の配置を設定します。

- `"center"` (デフォルト) は、各トラックの中央に線を描画します。
- `"between"` は、各トラックの後、その下端に線を描画します。これは、中央揃えのイベントバーを持つテーブルスタイルの行に便利です。

```typescript
viewConfiguration: {
  axes: {
    linePosition: 'between'
  }
}
```

### 柔軟なカメラ操作

`ZoomMode` は使い慣れた操作プリセットを提供し、`camera.interactions` は個々のジェスチャーをオーバーライドできます。これは、タイムラインが垂直スクロール可能なページ内に存在する場合に便利です。水平パンとトラックパッドズームは維持しつつ、通常のホイールスクロールは親コンテナに到達させます。

```tsx
import {ZoomMode} from '@gravity-ui/timeline';

const {timeline} = useTimeline({
  settings: { /* ... */ },
  viewConfiguration: {
    camera: {
      zoom: ZoomMode.DEFAULT,
      interactions: {
        verticalWheel: 'pass-through',
        horizontalWheel: 'pan',
        pinch: 'zoom',
      },
      zoomSensitivity: {
        in: 0.5,
        out: 0.5,
      },
      minRange: 5_000,
      maxRange: 1000 * 60 * 60 * 24 * 365,
    },
  },
});
```

各インタラクションは `'zoom'`, `'pan'`, または `'pass-through'` を受け入れます。`pinch` はブラウザのCtrl+ホイールトラックパッドジェスチャーを表します。`zoomSensitivity.in` と `zoomSensitivity.out` は、ズームインとズームアウトの速度をそれぞれ乗算します。`1` はデフォルトで、値が小さいほど穏やかになり、`0` はその方向のズームを無効にします。小さなトラックパッドデルタは自動的にスムーズ処理されます。`minRange` と `maxRange` はミリ秒単位の期間です。最小値はデフォルトで5秒、最大値は設定されない限り無制限です。したがって、ユーザーがズームアウトできる範囲を制限するには `maxRange` を設定してください。インタラクティブな[Camera interactions Storybook例](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus)を参照してください。

### セクションの構造

各セクションには以下の構造が必要です。

```typescript
type TimelineSection = {
  id: string;               // 一意のセクション識別子
  from: number;             // 開始タイムスタンプ
  to?: number;              // オプションの終了タイムスタンプ (デフォルトはタイムラインの終了)
  color: string;            // セクションの背景色
  hoverColor?: string;      // セクションがホバーされたときのオプションの色
  renderer?: AbstractSectionRenderer; // オプションのカスタムレンダラー (パッケージからエクスポート)
};
```

セクションは、時間範囲の背景色を提供し、タイムラインコンテンツを視覚的に整理するのに役立ちます。

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
          to: Date.now() + 1800000, // 30 minutes
          color: 'rgba(255, 235, 59, 0.3)', // Semi-transparent yellow
          hoverColor: 'rgba(255, 235, 59, 0.4)'
        },
        {
          id: 'afternoon',
          from: Date.now() + 1800000,
          // 'to' が指定されていない - タイムラインの最後まで拡張されます
          color: 'rgba(76, 175, 80, 0.2)', // Semi-transparent green
          hoverColor: 'rgba(76, 175, 80, 0.3)'
        }
      ]
    },
    viewConfiguration: {
      sections: {
        hitboxPadding: 2 // ホバー検出パディング
      }
    }
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### マーカーの構造

各マーカーには以下の構造が必要です。

```typescript
type TimelineMarker = {
  time: number;           // マーカー位置のタイムスタンプ
  color: string;          // マーカー線の色
  activeColor: string;    // マーカーが選択されたときの色 (必須)
  hoverColor: string;     // マーカーにホバーしたときの色 (必須)
  lineWidth?: number;     // マーカー線のオプションの幅
  label?: string;         // オプションのラベルテキスト
  labelColor?: string;    // オプションのラベルの色
  renderer?: AbstractMarkerRenderer; // オプションのカスタムレンダラー
  nonSelectable?: boolean;// マーカーを選択できるかどうか
  group?: boolean;        // マーカーがグループを表すかどうか
};
```

### マーカーのグループ化とズーム

タイムラインは、近くにあるマーカーを自動的にグループ化し、ズーム機能を提供します。

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [
        // これらのマーカーは一緒にグループ化されます
        { time: Date.now(), color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'イベント 1' },
        { time: Date.now() + 1000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'イベント 2' },
        { time: Date.now() + 2000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'イベント 3' },
      ]
    },
    viewConfiguration: {
      markers: {
        collapseMinDistance: 8,        // 8ピクセル以内のマーカーをグループ化
        groupZoomEnabled: true,        // グループクリックでズームを有効にする
        groupZoomPadding: 0.3,        // グループの周りに30%のパディング
        groupZoomMaxFactor: 0.3,      // 最大ズームファクター
      }
    }
  });

  // グループズームイベントをリッスンする
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('グループがズームされました:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## 仕組み

タイムラインコンポーネントはReactを使用して構築されており、インタラクティブなタイムラインビジュアライゼーションを作成するための柔軟な方法を提供します。仕組みは以下の通りです。

### コンポーネントアーキテクチャ

タイムラインはReactコンポーネントとして実装されており、主に2つのオブジェクトを通じて設定できます。

1. **TimelineSettings**: コアのタイムラインの動作と外観を制御します。
   - `start`: タイムラインの開始時刻
   - `end`: タイムラインの終了時刻
   - `axes`: 軸設定の配列 (構造は以下を参照)
   - `events`: イベント設定の配列
   - `markers`: マーカー設定の配列
   - `sections`: セクション設定の配列

2. **ViewConfiguration**: ビジュアル表現とインタラクション設定を管理します。
   - 外観、ズームレベル、インタラクションの動作を制御します。
   - カスタマイズすることも、デフォルト値を使用することもできます。

### イベント処理

タイムラインコンポーネントは、いくつかのインタラクティブなイベントをサポートしています。

- `on-click`: タイムラインをクリックしたときにトリガーされます。ヒットした要素、タイムスタンプ、ビューポート座標、キャンバス座標が含まれます。
- `on-context-click`: 右クリック/コンテキストメニューでトリガーされます。
- `on-select-change`: 選択が変更されたときにトリガーされます。
- `on-hover`: タイムライン要素にホバーしたときにトリガーされます。
- `on-leave`: マウスがタイムライン要素から離れたときにトリガーされます。

イベント処理の例:

```tsx
import { useTimelineEvent } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline } = useTimeline({ /* ... */ });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('タイムラインがクリックされました:', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('選択が変更されました:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Reactとの統合

コンポーネントは、タイムライン管理のためにカスタムフックを使用しています。

- `useTimeline`: タイムラインインスタンスとそのライフサイクルを管理します。
  - タイムラインを作成および初期化します。
  - コンポーネントのアンマウント時にクリーンアップを処理します。
  - タイムラインインスタンスへのアクセスを提供します。

- `useTimelineEvent`: イベントサブスクリプションとクリーンアップを処理します。
  - イベントリスナーのライフサイクルを管理します。
  - アンマウント時にリスナーを自動的にクリーンアップします。

コンポーネントは、アンマウント時にタイムラインインスタンスのクリーンアップと破棄を自動的に処理します。

### イベントポップアップ

イベントの詳細を表示するために、`@gravity-ui/uikit`とそのスタイルをインストールしてください。ホバーイベントをサブスクライブしたり、座標を計算したりする必要はありません。

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {EventPopup} from '@gravity-ui/timeline/react/uikit';

<>
  <TimelineCanvas timeline={timeline} />
  <EventPopup
    timeline={timeline}
    content={(event) => <EventDetails event={event} />}
  />
</>
```

ポップアップ、ホバーハイライト、カーソルは同じイベントを使用します。正確なヒットは、近くのイベントよりも優先されます。重複する正確なヒットは、描画順で最後のイベントに解決されます。正確なヒットがない場合のみ、`3 px + events.hitboxPadding`の許容範囲が使用されます。グループクエリと`on-hover`には、引き続きすべての候補が含まれます。

`EventPopup` は 150ms 後に開き、ポインターがイベントから離れてから 200ms 後に閉じます。必要に応じて `openDelay`、`closeDelay`、`placement`、`offset`、`className`、または `aria-label` を設定してください。ポップアップは、そのコンテンツにポインターまたはフォーカスがある間は開いたままになり、Escape キーまたは外部クリックで閉じます。イベントが重なる場合は、データ順で最後のイベントが使用されます。`hoverColor` と `isHovered` はイベントの描画を制御し、`EventPopup` はその詳細 UI を制御します。

### イベント構造

タイムライン内のイベントは、次の構造に従います。

```typescript
type TimelineEvent = {
  id: string;             // 一意の識別子
  from: number;           // 開始タイムスタンプ
  to?: number;            // 終了タイムスタンプ（ポイントイベントの場合はオプション）
  axisId: string;         // このイベントが属する軸の ID
  trackIndex: number;     // 軸トラック内のインデックス
  renderer?: AbstractEventRenderer; // オプションのカスタムレンダラー
  color?: string;         // オプションのイベントカラー
  hoverColor?: string;    // オプションのホバー状態カラー
  selectedColor?: string; // オプションの選択状態カラー
  cursor?: string;        // イベントをホバー中のオプションの CSS カーソル
};
```

クリック時にアクションを実行するイベントには、`cursor: 'pointer'` を設定してください。カーソルはポインターがそのイベント上にある場合にのみ適用されます。イベントが重なる場合、データ順で最後のイベントがカーソルを決定します。

### Gravity UI カラー

Canvas は CSS カスタムプロパティを自身で解決できません。Timeline は、Canvas 要素に対して完全な値の `var(--token)` を解決するため、Gravity UI のセマンティックトークンは組み込みイベント、マーカー、セクション、軸、グリッド、ルーラーで機能します。

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {ThemeProvider} from '@gravity-ui/uikit';
import {useTimeline} from '@gravity-ui/timeline/react';
import {GravityTimelineCanvas} from '@gravity-ui/timeline/react/uikit';

<ThemeProvider theme="light">
  <GravityTimelineCanvas timeline={timeline} />
</ThemeProvider>
```

`color: 'var(--g-color-base-positive-medium)'` のように、任意のカラーフィールドに直接トークンを渡してください。`GravityTimelineCanvas` は、有効な Gravity UI テーマが変更されると自動的に再描画されます。トークンが見つからない場合は、`var(--app-event-color, transparent)` のような CSS フォールバックを使用するか、カスタムレンダラーから `timeline.api.resolveColor(color, fallback)` を呼び出してください。

イベントの場合、`color` は通常通り使用され、`hoverColor` はポインターホバー時、`selectedColor` は選択後に使用されます。

```ts
const events = [
  {
    id: 'deploy',
    from: start,
    to: end,
    axisId: 'main',
    trackIndex: 0,
    color: 'var(--g-color-base-positive-medium)',
    hoverColor: 'var(--g-color-base-positive-medium-hover)',
    selectedColor: 'var(--g-color-base-positive-heavy)',
  },
];
```

カスタムイベントレンダラーは、最後のオプション引数として `resolveColor` を受け取ります。カスタムマーカーおよびセクションレンダラーは、レンダリングデータ内でこれを受け取ります。

### Canvas フォント

ルーラー、イベント、マーカーのデフォルトフォントを設定するには、`viewConfiguration.font` を一度設定してください。コンポーネント固有の `ruler.font`、`events.font`、または `markers.font` が優先されます。デフォルトは `10px sans-serif` のままです。

Canvas は `ctx.font` で CSS 変数や `inherit` を直接使用できないため、Timeline は Canvas CSS コンテキストで完全な値のトークンを解決します。

```ts
viewConfiguration: {
  font: 'var(--g-text-caption-2-font)',
}
```

Canvas 要素の計算されたフォントを使用するには、`font: 'inherit'` を使用してください。カスタムレンダラーは `resolveColor` と共に `resolveFont` を受け取るか、`timeline.api.resolveFont(font)` を呼び出すことができます。Web フォントが動的にロードされた後、`timeline.api.rerender()` を呼び出して Canvas テキストを再描画してください。

### 直接 TypeScript を使用する

Timeline クラスは、React なしで TypeScript で直接使用できます。これは、他のフレームワークやバニラ JavaScript アプリケーションとの統合に役立ちます。

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// タイムラインインスタンスを作成
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 現在から1時間後
    axes: [
      {
        id: 'main',
        tracksCount: 3,
        top: 0,
        height: 100
      }
    ],
    events: [
      {
        id: 'event1',
        from: timestamp + 1800000, // 現在から30分後
        to: timestamp + 2400000,   // 現在から40分後
        label: 'Sample Event',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 現在から20分後
        label: 'Important Point',
        color: '#ff0000',
        activeColor: '#ff5252',
        hoverColor: '#ff1744'
      }
    ],
    sections: [
      {
        id: 'section1',
        from: timestamp,
        to: timestamp + 1800000, // 最初の30分
        color: 'rgba(33, 150, 243, 0.2)', // 薄い青色の背景
        hoverColor: 'rgba(33, 150, 243, 0.3)'
      }
    ]
  },
  viewConfiguration: {
    // オプション: ビュー設定をカスタマイズ
    zoomLevels: [1, 2, 4, 8, 16],
    hideRuler: false,
    showGrid: true
  }
});

// Canvas 要素で初期化
const canvas = document.querySelector('canvas');
if (canvas instanceof HTMLCanvasElement) {
  timeline.init(canvas);
}

// イベントリスナーを追加
timeline.on('on-click', (detail) => {
  console.log('Timeline clicked:', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('Selection changed:', detail);
});

// 完了時にクリーンアップ
timeline.destroy();
```

Timeline クラスは、タイムラインを管理するための豊富な API を提供します。

- **イベント管理**:
  ```typescript
  // イベントリスナーを追加
  timeline.on('eventClick', (detail) => {
    console.log('Event clicked:', detail);
  });

  // イベントリスナーを削除
  const handler = (detail) => console.log(detail);
  timeline.on('eventClick', handler);
  timeline.off('eventClick', handler);

  // カスタムイベントを発火
  timeline.emit('customEvent', { data: 'custom data' });
  ```

- **タイムラインコントロール**:
  ```typescript
  // タイムラインデータを更新
  timeline.api.setEvents([
    {
      id: 'newEvent',
      from: Date.now(),
      to: Date.now() + 3600000,
      label: '新しいイベント',
      axisId: 'main',
      trackIndex: 0
    }
  ]);

  // 軸を更新
  timeline.api.setAxes([
    {
      id: 'newAxis',
      tracksCount: 2,
      top: 0,
      height: 80
    }
  ]);

  // マーカーを更新
  timeline.api.setMarkers([
    {
      id: 'newMarker',
      time: Date.now(),
      label: '新しいマーカー',
      color: '#00ff00',
      activeColor: '#4caf50',
      hoverColor: '#2e7d32'
    }
  ]);

  // セクションを更新
  timeline.api.setSections([
    {
      id: 'newSection',
      from: Date.now(),
      to: Date.now() + 1800000,
      color: 'rgba(255, 193, 7, 0.2)', // 薄いアンバーの背景
      hoverColor: 'rgba(255, 193, 7, 0.3)'
    }
  ]);

  // ビュー設定を更新（現在の設定とマージされます）
  timeline.api.setViewConfiguration({ hideRuler: true });
  ```

## ライブデモ

インタラクティブなデモを[Storybook](https://preview.gravity-ui.com/timeline/)でご覧ください:

- [基本的なタイムライン](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - イベントと軸を持つシンプルなタイムライン
- [無限タイムライン](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - イベントと軸を持つ無限タイムライン
- [マーカー](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - 垂直マーカーとラベルを持つタイムライン
- [カメラ操作](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus) - ホイール、水平スクロール、トラックパッドのピンチ操作を構成
- [カスタムイベント](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - カスタムイベントレンダリングを持つタイムライン
- [連携機能](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--timeline-ruler) - RangeDateSelection、DragHandler、NestedEvents、Popup、List


## 開発

### Storybook

このプロジェクトには、コンポーネント開発とドキュメントのためのStorybookが含まれています。

Storybookを実行するには:

```bash
npm run storybook
```

これにより、ポート6006でStorybook開発サーバーが起動します。http://localhost:6006 からアクセスできます。

デプロイ用にStorybookの静的バージョンをビルドするには:

```bash
npm run build-storybook
```

## ライセンス

MIT