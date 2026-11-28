<!--GITHUB_BLOCK-->

# Settings

<!--/GITHUB_BLOCK-->

Settingsコンポーネントは、以下の機能を備えた設定パネルのレイアウトを提供します。

- アイテムの単一レベルおよび2レベルのグループ化
- アイテムのヘッダーによるパネルコンテンツのフィルタリング
- ロードステータスとコンテンツの表示

<!--GITHUB_BLOCK-->

## Usage

One-level settings example:

```tsx
<Settings>
  <Settings.Page title="Appearance">...</Settings.Page>
  <Settings.Page title="Notifications">...</Settings.Page>
</Settings>
```

Two-level settings example:
_Note:_ `Settings` with `view=mobile` groups `Settings.Group` are ignored.

```tsx
<Settings>
  <Settings.Group groupTitle="My service">
    <Settings.Page title="Appearance">...</Settings.Page>
    <Settings.Page title="Notifications">...</Settings.Page>
  </Settings.Group>
  <Settings.Group groupTitle="General">
    <Settings.Page title="Appearance">...</Settings.Page>
    <Settings.Page title="Notifications">...</Settings.Page>
  </Settings.Group>
</Settings>
```

Pages with sections example:

```tsx
<Settings.Page title="Features" icon={'...'}>
  <Settings.Section title="Common">
    <Settings.Item title="Default VCS">...</Settings.Item>
    <Settings.Item title="Search root">...</Settings.Item>
  </Settings.Section>
  <Settings.Section title="Beta functionality">...</Settings.Section>
</Settings.Page>
```

<!--/GITHUB_BLOCK-->

## Properties

| Name                           | Description                                   | Type                         | Default            |
| :----------------------------- | :-------------------------------------------- | :--------------------------- | :----------------- |
| loading                        | ロードステータスのフラグ                      | `boolean`                    |                    |
| renderLoading                  | ロードステータスのコンテンツ                  | `() => React.ReactNode`      |                    |
| renderNotFound                 | 空のパネルコンテンツ                          | `() => React.ReactNode`      |                    |
| initialPage                    | `/groupId/pageId`形式の初期ページ             | `string`                     |                    |
| view                           | モバイルビューの切り替え                      | `"normal"`, `"mobile"`       | `"normal"`         |
| onPageChange                   | ページ変更ハンドラー                          | `(newPage?: string) => void` |                    |
| onClose                        | 設定クローズハンドラー                        | `() => void`                 |                    |
| title                          | ページタイトル                                | `string`                     | 'Settings'         |
| filterPlaceholder              | フィルタプレースホルダーテキスト              | `string`                     | 'Search settings'  |
| emptyPlaceholder               | フィルタ空テキスト                            | `string`                     | 'No results found' |
| enableMobileSettingsTabsScroll | モバイルビューではタブは折り返されずにスクロールします | `boolean`                    |                    |

## Settings.Group

関連ページを整理するためのオプションレベル。例：「General」対「Application specific」。

### Properties

| Name       | Description        | Type     | Default |
| :--------- | :----------------- | :------- | :------ |
| id         | グループの一意なID | `string` |         |
| groupTitle | グループのヘッダー | `string` |         |

## Settings.Page

関連する設定セクションのコレクション。例：「General」グループの「Appearance」。

### Properties

| Name  | Description                  | Type                                                                                        | Default |
| :---- | :--------------------------- | :------------------------------------------------------------------------------------------ | :------ |
| id    | グループ内のページのユニークID | `string`                                                                                    |         |
| title | ページのタイトル             | `string`                                                                                    |         |
| icon  | ページのアイコンのプロパティ   | [`IconProps`](https://github.com/gravity-ui/uikit/tree/main/src/components/Icon#properties) |         |

## Settings.Section

関連する設定のカテゴリ。例：「Appearance」ページの「Theme settings」。

### Properties

| 名前      | 説明                                                                   | タイプ              | デフォルト |
| :-------- | :---------------------------------------------------------------------------- | :---------------- | :------ |
| title     | セクションのタイトル                                                              | `string`          |         |
| header    | セクションのヘッダー                                                             | `React.ReactNode` |         |
| withBadge | セクションとメニューにバッジを表示する                                              | `boolean`         |         |
| hideTitle | セクションタイトルを非表示にする。このプロパティは、モバイルのシンプルな設定でタイトルを非表示にするために必要です。 | `boolean`         |         |

## Settings.Item

タイトルとコントロールコンポーネントを持つ個別の設定項目。
⚠️ `Settings.Section` 内に `Settings.Item` が1つしかない場合、タイトルは表示されません。

### プロパティ

| 名前                 | 説明                                                | タイプ                                                      | デフォルト    |
| :------------------- | :--------------------------------------------------------- | :-------------------------------------------------------- | :--------- |
| title                | アイテムのタイトル                                              | `string`                                                  |            |
| renderTitleComponent | カスタムヘッダー                                           | `(highlightedTitle?: React.ReactNode) => React.ReactNode` |
| align                | アイテムのアライメント                                             | `"top"`, `"center"`                                       | `"center"` |
| mode                 | モバイル用のレイアウト。タイトルとコントロールが横並びに配置されます。 | `"row"`                                                   |            |
| description          | アイテムの説明                                        | `React.ReactNode`                                         |            |
