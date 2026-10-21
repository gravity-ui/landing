# @gravity-ui/components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/components)](https://www.npmjs.com/package/@gravity-ui/components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/components/)

一套基于 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 构建的复杂 React 组件。Gravity UI 设计系统的一部分。

## 安装

```shell
npm install @gravity-ui/components
```

## 使用

需要 `@gravity-ui/uikit` 8 和 React 18/19。使用 `npm install @gravity-ui/uikit@beta` 安装当前的 UIKit 8 预发布版本。

`@gravity-ui/uikit` 是一个对等依赖项：请安装它，在应用的入口点导入其样式一次，然后用 `Provider` 包裹整个应用。在此设置之前，此包中的组件将不带样式地渲染。

```tsx
import {Provider, TextInput} from '@gravity-ui/uikit';
import {FormRow} from '@gravity-ui/components';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  return (
    <Provider theme="light">
      <FormRow label="Name" fieldId="name">
        <TextInput id="name" name="name" />
      </FormRow>
    </Provider>
  );
}
```

### 迁移到 UIKit 8

- 将应用级别的 `ThemeProvider` 替换为 `Provider`。
- 在 `ConfirmDialog` 和 `ChangelogDialog` 中使用 `onOpenChange` 而不是 `onClose`。`ConfirmDialog` 接受新的 Dialog 属性，包括 `maxWidth` 和 `fullWidth`，而不是 `size`。
- 从 `ChangelogDialog` 和 cookie 同意弹窗设置中移除 `disableHeightTransition`；UIKit 不再为内容高度添加动画。
- `Stories` 和 `StoriesGroup` 保留 `onClose`，并可选地接受事件/原因参数以及 UIKit 8 的原因（`escape-key`、`outside-press`、`click`）。
- 直接将原生的 HTML 属性传递给按钮/链接的 props，包括 `StoreBadge`，而不是使用 `extraProps`。在自定义故事操作中使用 UIKit 8 的 Button 视图。

有关底层 API 更改，请参阅 [UIKit 8 迁移指南](https://github.com/gravity-ui/uikit/blob/next/docs/migration-to-v8.md)。此包在使用新的 List、Menu 和 Popover API 时，不使用旧的入口点。

### 确认对话框

```tsx
import {ConfirmDialog} from '@gravity-ui/components';

<ConfirmDialog
  open={open}
  title="Delete the project?"
  message="This cannot be undone."
  textButtonApply="Delete"
  textButtonCancel="Cancel"
  onClickButtonApply={handleDelete}
  onClickButtonCancel={() => setOpen(false)}
  onOpenChange={setOpen}
/>;
```

### 更多示例

每个组件在其源代码旁边都有一个 README 文件，其中包含 props 和示例 — 请参阅 `src/components/<Component>/README.md`。实时演示：[Storybook](https://preview.gravity-ui.com/components/)。

## 开发

```shell
git clone git@github.com:gravity-ui/components.git
cd components
npm ci
npm run start   # 在 http://localhost:7009 启动 Storybook
```

其他常用命令：

```shell
npm test              # 运行单元测试
npm run lint          # lint JS 和 SCSS
npm run typecheck     # TypeScript 类型检查
```

## 贡献

欢迎贡献！在提交拉取请求之前，请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

根据 MIT 许可证分发。详情请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

Gravity UI 的复合组件层 — 现成的表单行、确认对话框、通知、故事、画廊以及其他类似产品级别的组件，这些组件由 `@gravity-ui/uikit` 的基础组件组合而成，因此您无需手动重新构建它们。

### 何时使用

- 表单布局：使用 `FormRow`（标签 + 字段 + 描述）代替手动创建的标签/输入包装器。
- 确认流程：使用 `ConfirmDialog` 代替自己组合带有两个按钮的 `Dialog`。
- 产品组件：`Notifications`、`Stories` / `StoriesGroup`、`ChangelogDialog`、`OnboardingMenu`、`PromoSheet`、`CookieConsent`、`Reactions`、`SharePopover`、`StoreBadge`。
- 数据辅助：`InfiniteScroll`、`ItemSelector`、`DelayedTextInput`、`TokenizedInput`、`Gallery`。

### 何时避免使用

- 基本控件、覆盖层、布局和主题 — 直接使用 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)；此包仅在其之上添加了复合组件。
- 数据表格 — 使用 [`@gravity-ui/table`](https://github.com/gravity-ui/table)；此处不包含表格。
- 日期选择器和日历 — 使用 [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components)。
- 应用导航外壳（侧边栏、页眉、页脚） — 使用 [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation)。
- 基于模式的表单 — 使用 [`@gravity-ui/dynamic-forms`](https://github.com/gravity-ui/dynamic-forms)；`FormRow` 仅是一个布局行。

### 常见陷阱

- **没有 uikit 设置则不会有任何样式。** 安装 `@gravity-ui/uikit`，一次性导入 `@gravity-ui/uikit/styles/styles.css`（以及 `fonts.css`），并用 `Provider` 包裹应用 — 此包本身不包含任何全局样式。
- **`FormRow` 不渲染输入框。** 将控件作为 `children` 传递，并使用与控件的 `id` 匹配的 `fieldId` 进行链接；`label` prop 是标签文本，而不是 `<label>` 元素。
- **`ConfirmDialog` 没有 `onConfirm` / `onCancel`。** 处理函数是 `onClickButtonApply` 和 `onClickButtonCancel`，并且 `textButtonApply` / `textButtonCancel` 是必需的。
- **错误的导入。** 所有内容都从包的根目录导出：`import {FormRow} from '@gravity-ui/components'`。没有子路径导入，如 `@gravity-ui/components/FormRow`。

## AI 代理文档

已安装版本的面向代理的文档位于 `node_modules/@gravity-ui/components/build/docs/INDEX.md`。