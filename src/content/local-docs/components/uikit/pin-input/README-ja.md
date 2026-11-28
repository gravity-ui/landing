<!--GITHUB_BLOCK-->

# PinInput

<!--/GITHUB_BLOCK-->

`PinInput` は、数値または英数字のシーケンスをすばやく入力するための入力フィールドのグループです。最も一般的なユースケースは、テキストメッセージ（SMS）、メール、または認証アプリで受信したOTPまたは確認コードの入力です。

各入力フィールドは一度に1文字を受け付けます。値が入力されると、フォーカスは次の入力フィールドに移動し、すべてのフィールドが埋まるまで続きます。

```tsx
import {PinInput} from '@gravity-ui/uikit';
```

## Type

デフォルトでは、入力フィールドは数値のみを受け付けます。英数字を受け付けるには、`type` プロパティを `"alphanumeric"` に設定します。

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput type="alphanumeric" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput type="alphanumeric" />
```

<!--/GITHUB_BLOCK-->

## Size

このコンポーネントには、`s`、`m`、`l`、`xl` の4つのサイズがあります。デフォルトのサイズは `m` です。

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <PinInput size="s" />
            <PinInput size="m" />
            <PinInput size="l" />
            <PinInput size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput size="s" />
<PinInput size="m" />
<PinInput size="l" />
<PinInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## State

ユーザーがコンポーネントを操作できないようにするには、`disabled` プロパティを設定します。

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput disabled />
```

<!--/GITHUB_BLOCK-->

コンポーネントの無効な状態を表示するには、`validationState` プロパティを `"invalid"` 値で設定します。オプションで、`errorMessage` プロパティを使用してエラーメッセージテキストを設定できます。

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput validationState="invalid" errorMessage="Incorrect PIN" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput validationState="invalid" errorMessage="Incorrect PIN" />
```

<!--/GITHUB_BLOCK-->

## Placeholder

デフォルトでは、入力フィールドにプレースホルダーはありません。`placeholder` プロパティを使用して設定できます。

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput placeholder="😎" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput placeholder="😎" />
```

<!--/GITHUB_BLOCK-->

## Mask

入力値をマスクする必要がある場合は、`mask` プロパティを使用します。これは `<input type="password"/>` の動作に似ています。

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput mask />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput mask />
```

<!--/GITHUB_BLOCK-->

## OTP

ブラウザが外部コンテキスト（例：SMS）からワンタイムコードを提案するようにしたい場合は、`otp` プロパティを設定します。

## API

- `focus(): void`: 現在アクティブな入力フィールドにフォーカスを設定します。

## CSS API

| Name                       | Description                                                  |
| :------------------------- | :----------------------------------------------------------- |
| `--g-pin-input-item-width` | `responsive` が `true` でない限り、各入力フィールドの幅を設定します。 |
| `--g-pin-input-item-gap`   | 入力フィールド間のギャップを設定します。                               |

## Properties

| 名前             | 説明
