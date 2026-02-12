# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

> [English version](./README.md)

Canvasレンダリングによるインタラクティブなタイムラインビジュアライゼーション構築のためのReactベースライブラリです。

## ドキュメント

詳細については、[ドキュメント](./docs/docs.md)を参照してください。

## プレビュー

イベントと軸を持つ基本的なタイムライン：

![Basic timeline with events](./docs/img/lines.png)

展開可能なネストされたイベントを持つカスタムレンダリング（[NestedEvents](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--nested-events-story)例）：

![Nested events timeline](./docs/img/events.png)

## 特徴

- 高パフォーマンスのためのCanvasベースレンダリング
- ズームおよびパン機能を備えたインタラクティブなタイムライン
- イベント、マーカー、セクション、軸、グリッドのサポート
- 視覚的な整理と時間帯のハイライトのための背景セクション
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
  // api - CanvasApiインスタンス（timeline.apiと同じ）
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

### セクションの構造

各セクションには以下の構造が必要です。

```typescript
type TimelineSection = {
  id: string;               // 一意のセクション識別子
  from: number;             // 開始タイムスタンプ
  to?: number;              // オプションの終了タイムスタンプ（デフォルトはタイムラインの終了）
  color: string;            // セクションの背景色
  hoverColor?: string;      // オプションでセクションにホバーしたときのカラー
  renderer?: AbstractSectionRenderer; // オプションのカスタムレンダラー（パッケージからエクスポート）
};
```

セクションは時間帯の背景色を提供し、タイムラインコンテンツを視覚的に整理するのに役立ちます。

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
          to: Date.now() + 1800000, // 30分
          color: 'rgba(255, 235, 59, 0.3)', // 半透明の黄色
          hoverColor: 'rgba(255, 235, 59, 0.4)'
        },
        {
          id: 'afternoon',
          from: Date.now() + 1800000,
          // 'to' が指定されていない - タイムラインの終了まで拡張されます
          color: 'rgba(76, 175, 80, 0.2)', // 半透明の緑色
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
  color: string;          // マーカーラインの色
  activeColor: string;    // マーカーが選択されたときのカラー（必須）
  hoverColor: string;     // マーカーにホバーしたときのカラー（必須）
  lineWidth?: number;     // オプションのマーカーラインの幅
  label?: string;         // オプションのラベルテキスト
  labelColor?: string;    // オプションのラベルカラー
  renderer?: AbstractMarkerRenderer; // オプションのカスタムレンダラー
  nonSelectable?: boolean;// マーカーを選択可能かどうか
  group?: boolean;        // マーカーがグループを表すかどうか
};
```

### マーカーのグルーピングとズーム

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
        // これらのマーカーはグループ化されます
        { time: Date.now(), color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'イベント 1' },
        { time: Date.now() + 1000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'イベント 2' },
        { time: Date.now() + 2000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'イベント 3' },
      ]
    },
    viewConfiguration: {
      markers: {
        collapseMinDistance: 8,        // 8ピクセル以内のマーカーをグループ化
        groupZoomEnabled: true,        // グループクリックでズームを有効化
        groupZoomPadding: 0.3,        // グループの周りに30%のパディング
        groupZoomMaxFactor: 0.3,      // 最大ズームファクター
      }
    }
  });

  // グループズームイベントをリッスン
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('グループがズームされました:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## 仕組み

このタイムラインコンポーネントはReactで構築されており、インタラクティブなタイムラインビジュアライゼーションを作成するための柔軟な方法を提供します。仕組みは以下の通りです。

### コンポーネントアーキテクチャ

タイムラインはReactコンポーネントとして実装されており、主に2つのオブジェクトを通じて設定できます。

1. **TimelineSettings**: タイムラインのコアな動作と外観を制御します。
   - `start`: タイムラインの開始時刻
   - `end`: タイムラインの終了時刻
   - `axes`: 軸設定の配列（構造は以下を参照）
   - `events`: イベント設定の配列
   - `markers`: マーカー設定の配列
   - `sections`: セクション設定の配列

2. **ViewConfiguration**: ビジュアル表現とインタラクション設定を管理します。
   - 外観、ズームレベル、インタラクションの動作を制御します。
   - カスタマイズ可能であり、デフォルト値を使用することもできます。

### イベント処理

タイムラインコンポーネントは、いくつかのインタラクティブなイベントをサポートしています。

- `on-click`: タイムラインをクリックしたときにトリガーされます。
- `on-context-click`: 右クリック/コンテキストメニューでトリガーされます。
- `on-select-change`: 選択範囲が変更されたときに発行されます。
- `on-hover`: タイムライン要素にマウスカーソルが乗ったときにトリガーされます。
- `on-leave`: マウスカーソルがタイムライン要素から離れたときに発行されます。

イベント処理の例：

```tsx
import { useTimelineEvent } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline } = useTimeline({ /* ... */ });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('タイムラインがクリックされました:', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('選択範囲が変更されました:', data);
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

### イベント構造

タイムライン内のイベントは、この構造に従います。

```typescript
type TimelineEvent = {
  id: string;             // 一意の識別子
  from: number;           // 開始タイムスタンプ
  to?: number;            // 終了タイムスタンプ（ポイントイベントの場合はオプション）
  axisId: string;         // イベントが属する軸のID
  trackIndex: number;     // 軸トラック内のインデックス
  renderer?: AbstractEventRenderer; // オプションのカスタムレンダラー
  color?: string;         // オプションのイベントカラー
  selectedColor?: string; // オプションの選択状態カラー
};
```

### 直接TypeScriptを使用する場合

Timelineクラスは、Reactなしで直接TypeScriptで使用できます。これは、他のフレームワークやバニラJavaScriptアプリケーションとの統合に役立ちます。

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
        label: 'サンプルイベント',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 現在から20分後
        label: '重要なポイント',
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

// canvas要素で初期化
const canvas = document.querySelector('canvas');
if (canvas instanceof HTMLCanvasElement) {
  timeline.init(canvas);
}

// イベントリスナーを追加
timeline.on('on-click', (detail) => {
  console.log('タイムラインがクリックされました:', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('選択範囲が変更されました:', detail);
});

// 完了したらクリーンアップ
timeline.destroy();
```

Timelineクラスは、タイムラインを管理するための豊富なAPIを提供します。

- **イベント管理**:
  ```typescript
  // イベントリスナーを追加
  timeline.on('eventClick', (detail) => {
    console.log('イベントがクリックされました:', detail);
  });
```

```markdown
  // イベントリスナーの削除
  const handler = (detail) => console.log(detail);
  timeline.on('eventClick', handler);
  timeline.off('eventClick', handler);

  // カスタムイベントの発火
  timeline.emit('customEvent', { data: 'custom data' });
  ```

- **タイムラインの制御**:
  ```typescript
  // タイムラインデータの更新
  timeline.api.setEvents([
    {
      id: 'newEvent',
      from: Date.now(),
      to: Date.now() + 3600000,
      label: 'New Event',
      axisId: 'main',
      trackIndex: 0
    }
  ]);

  // 軸の更新
  timeline.api.setAxes([
    {
      id: 'newAxis',
      tracksCount: 2,
      top: 0,
      height: 80
    }
  ]);

  // マーカーの更新
  timeline.api.setMarkers([
    {
      id: 'newMarker',
      time: Date.now(),
      label: 'New Marker',
      color: '#00ff00',
      activeColor: '#4caf50',
      hoverColor: '#2e7d32'
    }
  ]);

  // セクションの更新
  timeline.api.setSections([
    {
      id: 'newSection',
      from: Date.now(),
      to: Date.now() + 1800000,
      color: 'rgba(255, 193, 7, 0.2)', // 薄いアンバーの背景
      hoverColor: 'rgba(255, 193, 7, 0.3)'
    }
  ]);

  // ビュー設定の更新（現在の設定とマージされます）
  timeline.api.setViewConfiguration({ hideRuler: true });
  ```

## ライブデモ

[Storybook](https://preview.gravity-ui.com/timeline/) でインタラクティブなデモをご覧ください:

- [基本的なタイムライン](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - イベントと軸を持つシンプルなタイムライン
- [無限タイムライン](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - イベントと軸を持つ無限タイムライン
- [マーカー](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - 垂直マーカーとラベルを持つタイムライン
- [カスタムイベント](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - カスタムイベントレンダリングを持つタイムライン
- [インテグレーション](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--timeline-ruler) - RangeDateSelection, DragHandler, NestedEvents, Popup, List


## 開発

### Storybook

このプロジェクトには、コンポーネント開発とドキュメントのための Storybook が含まれています。

Storybook を実行するには:

```bash
npm run storybook
```

これにより、ポート 6006 で Storybook 開発サーバーが起動します。http://localhost:6006 からアクセスできます。

デプロイ用に Storybook の静的バージョンをビルドするには:

```bash
npm run build-storybook
```

## ライセンス

MIT
```