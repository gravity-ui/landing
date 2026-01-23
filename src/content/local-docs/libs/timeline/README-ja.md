# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

Canvasレンダリングによるインタラクティブなタイムラインビジュアライゼーション構築のためのReactベースライブラリです。

## ドキュメント

詳細については、[ドキュメント](./docs/docs.md) を参照してください。

## 特長

- 高パフォーマンスなCanvasベースのレンダリング
- ズームおよびパン機能を備えたインタラクティブなタイムライン
- イベント、マーカー、セクション、軸、グリッドのサポート
- 視覚的な整理と期間のハイライトのための背景セクション
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
  // start - canvasでタイムラインを初期化する関数
  // stop - タイムラインを破棄する関数

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### セクションの構造

各セクションには以下の構造が必要です。

```typescript
type TimelineSection = {
  id: string;               // 一意のセクション識別子
  from: number;             // 開始タイムスタンプ
  to?: number;              // オプションの終了タイムスタンプ (デフォルトはタイムラインの終了)
  color: string;            // セクションの背景色
  hoverColor?: string;      // オプションでホバー時の色
  renderer?: AbstractSectionRenderer; // オプションのカスタムレンダラー
};
```

セクションは、期間の背景色を提供し、タイムラインコンテンツを視覚的に整理するのに役立ちます。

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
          color: 'rgba(76, 175, 80, 0.2)', // 半透明の緑
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
  activeColor: string;    // 選択時の色 (必須)
  hoverColor: string;     // ホバー時の色 (必須)
  lineWidth?: number;     // オプションのマーカー線の幅
  label?: string;         // オプションのラベルテキスト
  labelColor?: string;    // オプションのラベル色
  renderer?: AbstractMarkerRenderer; // オプションのカスタムレンダラー
  nonSelectable?: boolean;// 選択可能かどうか
  group?: boolean;        // グループを表すかどうか
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

タイムラインは、主に2つのオブジェクトで設定可能なReactコンポーネントとして実装されています。

1. **TimelineSettings**: タイムラインのコアな動作と外観を制御します。
   - `start`: タイムラインの開始時刻
   - `end`: タイムラインの終了時刻
   - `axes`: 軸の設定配列
   - `events`: イベントの設定配列
   - `markers`: マーカーの設定配列
   - `sections`: セクションの設定配列

2. **ViewConfiguration**: ビジュアル表現とインタラクション設定を管理します。
   - 外観、ズームレベル、インタラクションの動作を制御します。
   - カスタマイズ可能ですが、デフォルト値を使用することもできます。

### イベントハンドリング

タイムラインコンポーネントは、いくつかのインタラクティブなイベントをサポートしています。

- `on-click`: タイムラインをクリックしたときにトリガーされます。
- `on-context-click`: 右クリック/コンテキストメニューでトリガーされます。
- `on-select-change`: 選択範囲が変更されたときに発行されます。
- `on-hover`: タイムライン要素にマウスカーソルが乗ったときにトリガーされます。
- `on-leave`: マウスカーソルがタイムライン要素から離れたときに発行されます。

イベントハンドリングの例：

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

### React連携

コンポーネントは、タイムライン管理のためにカスタムフックを使用しています。

- `useTimeline`: タイムラインインスタンスとそのライフサイクルを管理します。
  - タイムラインを作成し、初期化します。
  - コンポーネントのアンマウント時にクリーンアップを処理します。
  - タイムラインインスタンスへのアクセスを提供します。

- `useTimelineEvent`: イベントの購読とクリーンアップを処理します。
  - イベントリスナーのライフサイクルを管理します。
  - アンマウント時にリスナーを自動的にクリーンアップします。

コンポーネントは、アンマウント時にタイムラインインスタンスのクリーンアップと破棄を自動的に処理します。

### イベント構造

タイムライン内のイベントは、次の構造に従います。

```typescript
type TimelineEvent = {
  id: string;             // 一意の識別子
  from: number;           // 開始タイムスタンプ
  to?: number;            // 終了タイムスタンプ (ポイントイベントの場合はオプション)
  axisId: string;         // このイベントが属する軸のID
  trackIndex: number;     // 軸トラック内のインデックス
  renderer?: AbstractEventRenderer; // オプションのカスタムレンダラー
  color?: string;         // オプションのイベントカラー
  selectedColor?: string; // オプションの選択状態カラー
};
```

### TypeScriptの直接利用

Timeline クラスは、React を使用せずに TypeScript で直接利用できます。これは、他のフレームワークやバニラ JavaScript アプリケーションとの統合に役立ちます。

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
        label: 'メイン軸',
        color: '#000000'
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

// canvas 要素で初期化
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

Timeline クラスは、タイムラインを管理するための豊富な API を提供します。

- **イベント管理**:
  ```typescript
  // イベントリスナーを追加
  timeline.on('eventClick', (detail) => {
    console.log('イベントがクリックされました:', detail);
  });

  // イベントリスナーを削除
  const handler = (detail) => console.log(detail);
  timeline.on('eventClick', handler);
  timeline.off('eventClick', handler);

  // カスタムイベントを発行
  timeline.emit('customEvent', { data: 'カスタムデータ' });
  ```

- **タイムライン制御**:
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
      label: '新しい軸',
      color: '#0000ff'
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
      color: 'rgba(255, 193, 7, 0.2)', // 薄いアンバー色の背景
      hoverColor: 'rgba(255, 193, 7, 0.3)'
    }
  ]);
  ```

## ライブデモ

インタラクティブなデモは、[Storybook](https://preview.gravity-ui.com/timeline/) でご覧いただけます。

- [基本タイムライン](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - イベントと軸を備えたシンプルなタイムライン
- [無限タイムライン](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - イベントと軸を備えた無限タイムライン
- [マーカー](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - 垂直マーカーとラベルを備えたタイムライン
- [カスタムイベント](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - カスタムイベントレンダリングを備えたタイムライン


## 開発

### Storybook

このプロジェクトには、コンポーネントの開発とドキュメントのためにStorybookが含まれています。

Storybookを実行するには：

```bash
npm run storybook
```

これにより、ポート6006でStorybook開発サーバーが起動します。http://localhost:6006からアクセスできます。

デプロイ用にStorybookの静的バージョンをビルドするには：

```bash
npm run build-storybook
```

## ライセンス

MIT