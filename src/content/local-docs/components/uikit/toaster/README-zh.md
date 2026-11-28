GRAVITY_TRANSLATION_BLOCK_0_END

这是一个可调节通知（也称为 toast）的组件。

## 使用 Toaster

要在您的应用程序中显示 toast，您需要将应用程序包装在 `ToasterProvider` 中。

```jsx
import {Toaster, ToasterComponent, ToasterProvider} from '@gravity-ui/uikit';

const toaster = new Toaster();

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <ToasterProvider toaster={toaster}>
    <App />
    <ToasterComponent className="optional additional classes" />
  </ToasterProvider>,
);
```

这里的 `toaster` 是类的实例，它保存了所有 toast 的状态，并在 `useToaster` hook 和 `withToaster` HOC 中被底层使用。

但您也可以在应用程序的不同部分（React 外部）直接使用 `toaster`：

```js
toaster.add({
  title: 'Toaster is here',
});
```

您必须在 React 内外使用相同的 `Toaster` 实例，才能在屏幕上的同一个容器中显示所有 toast。
您可以自己实现此逻辑，或从 `toaster-singleton` 模块导入现成的实例。

```js
import {toaster} from '@gravity-ui/uikit/toaster-singleton';
```

## 使用 `useToaster`

您可以在应用程序组件中使用 `useToaster` hook 来显示 toast：

```jsx
import {useToaster} from '@gravity-ui/uikit';
import {useEffect} from 'react';

export function FoobarComponent() {
  const {add} = useToaster();

  useEffect(() => {
    add({
      title: 'Toaster is here',
    });
  }, []);

  return null;
}
```

该 hook 返回 `add`、`update`、`remove` 和 `removeAll` 方法（有关详细信息，请参见下文）。

## 将 `Toaster` 用作 HOC

对于类组件，您可以使用 `withToaster` HOC，它会将 `toaster` 属性注入到组件中。

```jsx
import {Component} from 'react';
import {withToaster} from '@gravity-ui/uikit';

class FoobarComponent extends Component {
  render() {
    this.props.toaster.add({});
  }
}

const FoobarWithToaster = withToaster()(FoobarComponent);
```

## 属性

这些是 `ToasterComponent` 组件的 props。

| 名称      | 描述                                         |   类型    | 默认值 |
| :-------- | :------------------------------------------- | :-------: | :-----: |
| className | 添加到组件容器的自定义类名                   | `string`  |         |
| mobile    | 管理移动/桌面视图的配置                      | `boolean` |         |
| hasPortal | 启用时在 `Portal` 内渲染 toaster             | `boolean` | `true`  |

## 构造函数参数

| 参数      | 类型      | 默认值      | 描述                                         |
| :-------- | :-------- | :---------- | :------------------------------------------- |
| className | `string`  | `undefined` | 添加到组件容器的自定义类名                   |
| mobile    | `boolean` | `false`     | 管理移动/桌面视图的配置                      |

## 方法

| 方法名                   | 参数             | 描述                                                                                                                             |
| :----------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| add(toastOptions)        | `Object`         | 创建一个新通知                                                                                                                   |
| remove(name)             | `string`         | 手动删除现有通知                                                                                                                 |
| removeAll()              |                  | 删除所有现有通知                                                                                                                 |
| update(name, overrideOptions) | `string`, `Object` | 更改已渲染的通知内容。在 `overrideOptions` 中，`title`、`type`、`content` 和 `actions` 字段是可选的。 |
| has(name)                | `string`         | 检查显示通知列表中是否存在具有特定名称的 toast                                                                                     |

## `add` 的更多信息

它接受 `toastOptions` 参数，其中包含正在进行的通知详细信息：

| 参数 | 类型 | 是否必填 | 默认值 | 描述 |
| :-- | :-------------------------------------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name | `string` | 是 |  | 唯一的通知名称。具有相同名称的通知将被折叠成一个。 |
| title | `string` |  |  | 通知标题。 |
| className | `string` |  |  | CSS 类名。 |
| autoHiding | `number` 或 `false` |  | 5000 | 延迟隐藏通知的毫秒数。使用 `false` 可禁用超时后隐藏 toast。 |
| content | `node` |  | `undefined` | 通知内容。这可以是 [任何可渲染的内容：数字、字符串、元素或数组](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)。 |
| theme | `string` |  | `"normal"` | 通知主题。可能的值为 `"normal"`、`"info"`、`"success"`、`"warning"`、`danger` 和 `"utility"`。如果 `theme` 设置为 `"normal"` 以外的值，则会在通知标题中添加图标。_默认情况下，没有图标_。 |
| isClosable | `boolean` |  | `true` | 配置项，用于管理 X 图标的可见性，该图标允许用户关闭通知。 |
| actions | `ToastAction[] \| () => ReactElement` |  | `undefined` | 在 `content` 之后显示的 [操作](./types.ts#L9) 数组，或返回所需操作的回调函数。 |
| renderIcon | `(toastProps: ToastProps) => ReactNode` |  | `undefined` | 用于自定义 toast 图标。默认使用基于类型的行为。 |

每个 `action` 是一个具有以下参数的对象：

| 参数           | 类型                                           | 是否必填 | 默认值   | 描述                                                               |
| :------------- | :--------------------------------------------- | :------- | :------- | :----------------------------------------------------------------- |
| label          | `string`                                       | 是       |          | 操作描述                                                           |
| onClick        | `() => void`                                   | 是       |          | 操作点击处理程序                                                   |
| view           | [`ButtonView`](../Button/README.md#properties) |          | `outlined` | 操作外观，与 `<Button/>` 的 `view` 相同                               |
| removeAfterClick | `boolean`                                      |          | `true`   | 启用或禁用在操作点击后关闭通知                                       |

## CSS API

| 名称                       | 描述       |
| :------------------------- | :--------- |
| `--g-toaster-width`        | 容器宽度   |
| `--g-toaster-item-padding` | 项目内边距 |
| `--g-toaster-item-gap`     | 项目间距   |