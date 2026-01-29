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
  - `multi-editable-list` - 多项可移除字符串列表
  - `text area` - 文本区域
  - `select` - 选择框
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
# 如果您尚未安装 react/react-dom，请安装所需版本
$ npm install @gravity-ui/dialog-fields react@18 react-dom@18
```

根据您的包管理器，您可能需要手动安装 `peerDependencies`。

## 用法

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
          tooltip: '名字字段的描述',
        },
        {
          name: 'lastName',
          type: 'text',
          caption: '姓氏',
          tooltip: '姓氏字段的描述',
        },
      ]}
    />
  );
}
```

更多示例请参见 [storybook](https://preview.yandexcloud.dev/dialog-fields)。