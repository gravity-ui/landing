# @gravity-ui/date-utils

日付と時刻を管理するためのヘルパー。

## インストール

```shell
npm i @gravity-ui/date-utils
```

## 使用方法

```typescript
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';

// 現在の日付: 2021-08-07T12:10:00
// ユーザーのタイムゾーン: Europe/Istanbul

const FORMAT = 'YYYY-MM-DDTHH:mm:ssZ';

// 絶対日付の解析
dateTimeParse({year: 2021, month: 7, day: 7})?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse([2021, 7, 7])?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('2021-08-07')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse(1621708204063)?.format(FORMAT); // "2021-05-22T21:30:04+03:00"
dateTimeParse('')?.format(FORMAT); // undefined
dateTimeParse('incorrect-date')?.format(FORMAT); // undefined

// 相対日付の解析
dateTimeParse('now')?.format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTimeParse('now-1d')?.format(FORMAT); // "2021-08-06T12:10:00+03:00"
dateTimeParse('now-1d+1M')?.format(FORMAT); // "2021-09-06T12:10:00+03:00"
dateTimeParse('now/d')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('now+1d/d')?.format(FORMAT); // "2021-08-08T00:00:00+03:00"
dateTimeParse('now-1f')?.format(FORMAT); // undefined

// dateTime の作成
dateTime().format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTime({input: '2021-08-07'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({input: '2021-08-07', format: 'YYYY-MM-DD'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({timeZone: 'Asia/Tokyo'}).format(FORMAT); // "2021-08-07T18:10:00+09:00
dateTime({input: ''}).format(FORMAT); // "Invalid Date"
dateTime({input: '2021-08', format: 'YYYY-MM-DD'}).format(FORMAT); // "Invalid Date"
```

## 設定

```typescript
import {settings} from '@gravity-ui/date-utils';

// ロケールの管理
settings.getLocale(); // デフォルトロケール "en"
settings.loadLocale('de').then(() => {
  settings.setLocale('de');
  settings.getLocale(); // "de"
});

// カスタマイズ
settings.updateLocale({weekStart: 0}); // 週の開始曜日を変更
```

## ライセンス

MIT License に基づいて配布されます。詳細は [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

UI を一切含まない、タイムゾーン対応の日付/時刻ヘルパー（`now-1d/d` のような相対表現を含む解析、フォーマット、ロケール管理）です。タイムゾーンをまたいで日付を確実に計算・フォーマットする必要がある場合に、フル UI カレンダーを導入する代わりに利用してください。

### 使用すべき場合

- 絶対日付または相対日付の表現（`'now-1d'`, `'now/d'`）をタイムゾーン対応の `dateTime` オブジェクトに解析する場合。
- ロケールサポート付きで、ユーザーのタイムゾーンで表示するために日付をフォーマットする場合。
- サーバー（Node）とクライアント（React）のコード間で日付ロジックを共有する場合 — このパッケージは React に依存しません。

### 使用すべきでない場合

- カレンダー、日付ピッカー、または日付に関する **UI** をレンダリングする場合。[`@gravity-ui/date-components`](https://gravity-ui.com/components/date-components) を使用してください — これは、このパッケージを基盤としてビジュアルを構築しています。
- 軽量な不変の日付計算で、タイムゾーン/相対表現の必要がない場合。`date-fns` またはネイティブの `Intl`/`Date` API で十分な場合があります。

### よくある間違い

- **`dateTimeParse('')` を呼び出して日付を期待する** — `undefined` を返します。`dateTime` オブジェクトではありません。オプショナルチェイニングまたは null チェックでガードしてください。
- **ロケールをロードし忘れる** — `settings.loadLocale('de')` が解決された後にのみ、ローカライズされた名前（曜日、月）がフォーマットされます。`settings.setLocale('de')` は、ロケールをロードした後で呼び出す必要があります。
- **`formatDate` / `parseDate` という存在しない関数を想定する** — エントリーポイントは `dateTimeParse`（解析）と `dateTime(...).format(...)`（フォーマット）です。
- **ユーザーのタイムゾーンが自動的に適用されると仮定する** — `timeZone` を明示的に渡すか、システムタイムゾーンが使用されます。

## AI エージェント向けドキュメント

インストールされているバージョンに関するエージェント可読ドキュメントは、`node_modules/@gravity-ui/date-utils/build/docs/INDEX.md` にあります。