## 短い説明

`DFDialog` コンポーネントは、フォーム作成を容易にすることを目的としており、内部で `react-final-form` を使用しています。
いくつかの定義済みのフィールドタイプをサポートしていますが、ユーザーは `registerDialogControl` を使用して新しいフィールドを登録することで拡張できます。

### コントロール

- [基本コントロール](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - 静的テキスト
  - `text` - 編集可能なテキスト
  - `multi-text` - ユーザー定義の文字列配列
  - `checkbox` - チェックボックス
  - `tumbler` - トゥンブラー
  - `radio` - ラジオボタン
  - `editable-list` - 削除可能な文字列のリスト
  - `multi-editable-list` - 削除可能な文字列の複数リスト
  - `text area` - テキストエリア
  - `select` - セレクトボックス
  - `block` - ReactNode を追加可能
- [カスタムコントロールの登録](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### 特徴

- インプレース表示とモーダル表示
- [タブ1つ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) および [複数のタブフォーム](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [縦/横タブ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [非表示フィールドとタブ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [値によるフィールドの連動](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [フィールドレベルのバリデーション](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [フォームレベルのバリデーション](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [仮想化されたタブ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [クローン可能なタブ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [グループ化されたフィールド](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## インストール

```bash
$ npm install @gravity-ui/dialog-fields
```

パッケージマネージャーによっては、`peerDependencies` を手動でインストールする必要がある場合があります。

縦タブは UIKit のドラッグ＆ドロップと仮想化のエントリーポイントを使用し、
Select コントロールは 50 個以上のオプションのリストを仮想化します。
アプリケーションを UIKit の `Provider` でラップし、`@gravity-ui/uikit/styles/styles.css` をインポートしてください。

## UIKit 8 への移行

アプリケーションのルート `ThemeProvider` と `MobileProvider` を `Provider` に置き換えてください。
`__experimentalMobileModals` プロパティを除き、それらのプロパティを `Provider` に移動してください。

```diff
-import {ThemeProvider, MobileProvider} from '@gravity-ui/uikit';
+import {Provider} from '@gravity-ui/uikit';

-<ThemeProvider theme="light">
-  <MobileProvider>
-    <App />
-  </MobileProvider>
-</ThemeProvider>
+<Provider theme="light">
+  <App />
+</Provider>
```

アプリケーションが既に `Provider` を使用している場合、`DFDialog` の周りに追加のラッパーは必要ありません。
`DFDialog` は `visible`、`size`、`onClose` プロパティを維持します。`Dialog.open`、`maxWidth`、`onOpenChange` の UIKit による変更は、ライブラリ内で処理されます。

カスタムスタイルとビジュアルスナップショットを確認してください。

- ダイアログヘッダー、ボディ、フッターのスペーシングが変更され、モーダルフォームとインラインフォームの両方に影響します。
- デスクトップのフッターボタンは、最小幅 128px ではなく、コンテンツに合わせて幅が調整されるようになりました。
  以前の幅に戻すには、`footerProps.propsButtonApply` と `footerProps.propsButtonCancel` の両方に `{width: 'max', className: 'form-action'}` を渡し、
  スタイルシートで `.form-action { min-width: 128px; }` を設定してください。
- サイズ `l` のチェックボックスコントロールは、15px ではなく 13px のラベルと、17px ではなく 18px のインジケーターを使用するようになりました。
  テーマカラーもわずかに変更されています。
- 縦タブは、レガシーコンポーネントを使用しない新しい `List` を使用します。
  古い `.g-list__item` マークアップをターゲットとするカスタムセレクターは、見直しが必要です。
  `onOrderChanged({oldIndex, newIndex})` コールバックは保持されています。

フィールド定義を通じて渡されるカスタムコントロールと UIKit プロパティは、
[UIKit 移行ガイド](https://github.com/gravity-ui/uikit/blob/main/docs/migration-to-v8.md) に従う必要があります。
特に、`Select` は `virtualizationThreshold` を受け入れなくなりました。組み込みの
`select` コントロールは、50 オプションのしきい値を持つ `ListVirtualizer` を使用します。

## 使用方法

この例にはアプリケーションプロバイダーが含まれています。アプリケーションに既にルート `Provider` がある場合は、ここで示されているラッパーを省略してください。

```tsx
import {DFDialog} from '@gravity-ui/dialog-fields';
import {Provider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
    <Provider theme="light">
      <DFDialog<FormValues>
        visible={true}
        headerProps={{
          title: 'My form',
        }}
        onAdd={(form) => {
          console.log(form.getState().values);
          return Promise.resolve();
        }}
        fields={[
          {
            name: 'firstName',
            type: 'text',
            caption: 'First name',
            tooltip: 'Description for first name field',
          },
          {
            name: 'lastName',
            type: 'text',
            caption: 'LastName',
            tooltip: 'Description for last name field',
          },
        ]}
      />
    </Provider>
  );
}
```

### 条件付き表示

フィールドとタブは `visibilityCondition` をサポートしています。文字列 `when` を使用すると、`isActive` はそのフィールドの値を受け取ります。

```ts
visibilityCondition: {
  when: 'register',
  isActive: (value) => Boolean(value),
}
```

複数の値に依存するには、フィールド名の配列を使用します。`isActive` は、`when` と同じ順序で、個別の引数として値を受け取ります。

```ts
visibilityCondition: {
  when: ['multiConsumer', 'register'],
  isActive: (multiConsumer, register) => Boolean(multiConsumer && register),
}
```

名前はフォームルートからのパスであり、`general.register` のようなタブプレフィックスも含まれます。
参照されているフィールドのいずれかが変更されると、表示が更新されます。
条件によって非表示になったフィールドは、単に視覚的に隠されるのではなく、アンマウントされます。

詳細な例は [storybook](https://preview.yandexcloud.dev/dialog-fields) で確認できます。