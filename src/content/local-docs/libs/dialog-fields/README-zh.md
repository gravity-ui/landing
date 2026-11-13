## 简要说明

`DFDialog` 组件旨在简化表单的创建，它内部使用了 `react-final-form`。
它支持几种预定义的字段类型，但用户可以通过 `registerDialogControl` 注册新的字段类型来扩展它。

### 控件

- [基础控件](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - 静态文本
  - `text` - 可编辑文本
  - `multi-text` - 用户定义的字符串数组
  - `checkbox` - 复选框
  - `tumbler` - 开关
  - `radio` - 单选按钮
  - `editable-list` - 可移除字符串列表
  - `multi-editable-list` - 可移除字符串的多选列表
  - `text area` - 文本区域
  - `select` - 下拉选择
  - `block` - 允许添加 ReactNode
- [自定义控件注册](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### 特性

- 内嵌和模态视图
- [单标签页](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) 和 [多标签页表单](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [垂直/水平标签页](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [隐藏字段和标签页](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [根据值联动字段](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [字段级验证](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [表单级验证](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [虚拟化标签页](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [可克隆标签页](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [分组字段](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## 安装

```bash
$ npm install @gravity-ui/dialog-fields
```

根据您的包管理器，您可能需要手动安装 `peerDependencies`。

垂直标签页使用了 UIKit 的拖放和虚拟化入口点，
Select 控件会虚拟化 50 个或更多选项的列表。
请将您的应用程序包裹在 UIKit 的 `Provider` 中，并导入 `@gravity-ui/uikit/styles/styles.css`。

## 迁移到 UIKit 8

将应用程序的根 `ThemeProvider` 和 `MobileProvider` 替换为 `Provider`。
将它们的原有 props 移至 `Provider`，但移除 `__experimentalMobileModals` prop：

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

如果您的应用程序已在使用 `Provider`，则无需在 `DFDialog` 外添加额外的包装器。
`DFDialog` 保留其 `visible`、`size` 和 `onClose` props；UIKit 对 `Dialog.open`、`maxWidth` 和 `onOpenChange` 的更改已在库内部处理。

请检查自定义样式和视觉快照：

- 对话框的标题、正文和页脚的间距已更改，这会影响模态和内嵌表单。
- 桌面版的页脚按钮现在会根据其内容调整宽度，而不是固定为 128px 的最小宽度。
  要恢复之前的宽度，请通过 `footerProps.propsButtonApply` 和 `footerProps.propsButtonCancel` 传递 `{width: 'max', className: 'form-action'}`，并在您的样式表中设置 `.form-action { min-width: 128px; }`。
- 大号 (`l`) 复选框控件现在使用 13px 的标签而不是 15px，以及 18px 的指示器而不是 17px。主题颜色也略有变化。
- 垂直标签页使用了新的 `List` 组件，不再依赖旧的组件。针对旧的 `.g-list__item` 标记的自定义选择器需要进行修改。`onOrderChanged({oldIndex, newIndex})` 回调函数得以保留。

通过字段定义传递的自定义控件和 UIKit props 必须遵循
[UIKit 迁移指南](https://github.com/gravity-ui/uikit/blob/main/docs/migration-to-v8.md)。
特别是，`Select` 不再接受 `virtualizationThreshold`；内置的 `select` 控件使用 `ListVirtualizer`，阈值为 50 个选项。

## 用法

此示例包含应用程序提供程序。如果您的应用程序已有一个根 `Provider`，请省略此处显示的包装器。

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
          title: '我的表单',
        }}
        onAdd={(form) => {
          console.log(form.getState().values);
          return Promise.resolve();
        }}
        fields={[
          {
            name: 'firstName',
            type: 'text',
            caption: '名字',
            tooltip: '名字的描述',
          },
          {
            name: 'lastName',
            type: 'text',
            caption: '姓氏',
            tooltip: '姓氏的描述',
          },
        ]}
      />
    </Provider>
  );
}
```

### 条件可见性

字段和标签页支持 `visibilityCondition`。使用字符串 `when`，`isActive` 将接收该字段的值：

```ts
visibilityCondition: {
  when: 'register',
  isActive: (value) => Boolean(value),
}
```

使用字段名数组来依赖多个值。`isActive` 将按 `when` 中相同的顺序接收单独的参数值：

```ts
visibilityCondition: {
  when: ['multiConsumer', 'register'],
  isActive: (multiConsumer, register) => Boolean(multiConsumer && register),
}
```

名称是表单根的路径，包括标签页前缀，例如 `general.register`。当任何引用的字段发生更改时，可见性会更新。
被其条件隐藏的字段会被卸载，而不仅仅是视觉上隐藏。

请在 [storybook](https://preview.yandexcloud.dev/dialog-fields) 中查看更多示例。