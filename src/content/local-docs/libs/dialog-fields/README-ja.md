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
  - `multi-editable-list` - 削除可能な文字列のマルチリスト
  - `text area` - テキストエリア
  - `select` - セレクトボックス
  - `block` - `ReactNode` を追加可能
- [カスタムコントロールの登録](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### 特徴

- インプレース表示とモーダル表示
- [タブ1つ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) および [複数タブのフォーム](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [縦/横タブ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [非表示フィールドとタブ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [値によるフィールドの連携](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [フィールドレベルのバリデーション](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [フォームレベルのバリデーション](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [仮想化されたタブ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [クローン可能なタブ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [グループ化されたフィールド](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## インストール

```bash
$ npm install @gravity-ui/dialog-fields
# まだインストールしていない場合は、必要なバージョンの react/react-dom をインストールしてください
$ npm install @gravity-ui/dialog-fields react@18 react-dom@18
```

パッケージマネージャーによっては、`peerDependencies` を手動でインストールする必要がある場合があります。

## 使用方法

```ts
import {DFDialog, FormApi} from '@gravity-ui/dialog-fields';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
    <DFDialog<FormValues>
      visible={true}
      headerProps={{
        title: 'マイフォーム',
      }}
      onAdd={(form) => {
        console.log(form.getState().values);
        return Promise.resolve();
      }}
      fields={[
        {
          name: 'firstName',
          type: 'text',
          caption: '名',
          tooltip: '名フィールドの説明',
        },
        {
          name: 'lastName',
          type: 'text',
          caption: '姓',
          tooltip: '姓フィールドの説明',
        },
      ]}
    />
  );
}
```

その他の例は [storybook](https://preview.yandexcloud.dev/dialog-fields) でご覧ください。