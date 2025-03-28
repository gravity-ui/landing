<!--GITHUB_BLOCK-->

# 烤面包机

<!--/GITHUB_BLOCK-->

这是一个用于可调整通知的组件，也称为祝酒词。

## 使用烤面包机

要在应用程序中显示祝酒词，你需要将应用程序打包进 `ToasterProvider`去。

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

`toaster` 这是该类的实例，它保存了所有祝酒的状态，并在 `useToaster` hook and HO `withToaster` C 的幕后使用。

但是你也可以 `toaster` 直接在应用程序的不同部分（React 之外）中使用：

```js
toaster.add({
  title: 'Toaster is here',
});
```

你必须 `Toaster` 在 React 中和之外使用相同的实例，才能在屏幕上显示同一个容器中的所有祝酒词。
你可以自己实现这个逻辑，也可以从 `toaster-singleton` 模块中导入即用型实例。

```js
import {toaster} from '@gravity-ui/uikit/toaster-singleton';
```

## 使用 `useToaster`

你可以在应用程序组件中使用 `useToaster` 挂钩显示祝酒词：

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

该挂接返回 `add` 、 `update` `remove` 、和 `removeAll` 方法（有关详细信息，请参见下文）。

## `Toaster` 作为 HOC 使用

对于类组件，可以使用 `withToaster` HOC，它会将 `toaster` 属性注入到组件中。

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

## 构造器参数

| 参数      | 类型      | 默认        | 描述                         |
| :-------- | :-------- | :---------- | :--------------------------- |
| className | `string`  | `undefined` | 要添加到组件容器的自定义类名 |
| 移动设备  | `boolean` | `false`     | 管理移动/桌面视图的配置      |

## 方法

| 方法名                 | 参数               | 描述                                                                                                      |
| :--------------------- | :----------------- | :-------------------------------------------------------------------------------------------------------- |
| 添加（ToastOptions）   | `Object`           | 创建新通知                                                                                                |
| 移除（名称）           | `string`           | 手动删除现有通知                                                                                          |
| 全部移除 ()            |                    | 删除所有现有通知                                                                                          |
| 更新（名称，覆盖选项） | `string`, `Object` | 更改已呈现的通知内容。在中 `overrideOptions` ， `title` 、 `type` `content` 、和 `actions` 字段是可选的。 |
| 有（名字）             | `string`           | 检查显示的祝酒列表中是否有具有特定名称的吐司                                                              |

## 更多关于 `add`

它接受带有持续通知详细信息的 `toastOptions` 参数：

| 参数       | 类型                                    | 必填项 | 默认        | 描述                                                                                                                                                                                             |
| :--------- | :-------------------------------------- | :----- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 名称       | `string`                                | 是的   |             | 唯一的通知名称。具有相同名称的通知会合并为一个                                                                                                                                                   |
| 标题       | `string`                                |        |             | 通知标题                                                                                                                                                                                         |
| className  | `string`                                |        |             | CSS 类                                                                                                                                                                                           |
| autoHiding | `number` 或者 `false`                   |        | 5000        | 延迟隐藏通知的毫秒数。用于禁 `false` 用在超时后隐藏吐司                                                                                                                                          |
| 内容       | `node`                                  |        | `undefined` | 通知内容。这可以是 [任何可以呈现的东西：数字、字符串、元素或数组](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)                                                           |
| 主题       | `string`                                |        | `"normal"`  | 通知主题。可能的值为 `"normal"` `"info"` 、 `"success"` 、 `"warning"` 、 `danger` 、和 `"utility"`。如果设置 `theme` 为任何值 `"normal"` ，则该图标将添加到通知标题中。_默认情况下，没有图标_。 |
| isClosable | `boolean`                               |        | `true`      | 管理 X 图标可见性的配置，允许用户关闭通知                                                                                                                                                        |
| 行动       | `ToastAction[]`                         |        | `undefined` | 之后显示的 [操作](./types.ts#L9) 数组 `content`                                                                                                                                                  |
| renderIcon | `(toastProps: ToastProps) => ReactNode` |        | `undefined` | 用于自定义吐司图标。默认情况下使用基于类型的行为                                                                                                                                                 |

每个 `action` 都是具有以下参数的对象：

| 参数             | 类型                                      | 必填项 | 默认       | 描述                             |
| :--------------- | :---------------------------------------- | :----- | :--------- | :------------------------------- |
| 标签             | `string`                                  | 是的   |            | 操作描述                         |
| onClick          | `() => void`                              | 是的   |            | 操作中的点击处理器               |
| 观点             | [`ButtonView`](../Button/README.md#props) |        | `outlined` | 动作外观， `view` 与 `<Button/>` |
| removeAfterClick | `boolean`                                 |        | `true`     | 启用或禁用单击操作后关闭通知     |

## CSS API

| 姓名                       | 描述     |
| :------------------------- | :------- |
| `--g-toaster-width`        | 容器宽度 |
| `--g-toaster-item-padding` | 物品填充 |
| `--g-toaster-item-gap`     | 物品间隙 |
