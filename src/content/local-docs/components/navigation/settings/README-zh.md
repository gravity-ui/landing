<!--GITHUB_BLOCK-->

# Settings

<!--/GITHUB_BLOCK-->

Settings 组件提供了设置面板的布局，具有以下功能。

- 项目的单级和两级分组
- 按项目标题过滤面板内容
- 显示加载状态和内容

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

## 属性

| 名称                           | 描述                                       | 类型                         | 默认值         |
| :----------------------------- | :----------------------------------------- | :--------------------------- | :------------- |
| loading                        | 加载状态标志                               | `boolean`                    |                |
| renderLoading                  | 加载状态的内容                             | `() => React.ReactNode`      |                |
| renderNotFound                 | 空面板内容                                 | `() => React.ReactNode`      |                |
| initialPage                    | 初始页面，格式为 `/groupId/pageId`         | `string`                     |                |
| view                           | 更改移动视图                               | `"normal"`, `"mobile"`       | `"normal"`     |
| onPageChange                   | 页面更改处理程序                           | `(newPage?: string) => void` |                |
| onClose                        | 设置关闭处理程序                           | `() => void`                 |                |
| title                          | 页面标题                                   | `string`                     | 'Settings'     |
| filterPlaceholder              | 筛选器占位符文本                           | `string`                     | 'Search settings' |
| emptyPlaceholder               | 筛选器为空文本                             | `string`                     | 'No results found' |
| enableMobileSettingsTabsScroll | 在移动视图中，选项卡将溢出并滚动，而不是换行 | `boolean`                    |                |

## Settings.Group

用于组织相关页面的可选级别，例如“常规”与“应用程序特定”。

### 属性

| 名称       | 描述           | 类型     | 默认值 |
| :--------- | :------------- | :------- | :----- |
| id         | 组的唯一 ID    | `string` |        |
| groupTitle | 组的标题       | `string` |        |

## Settings.Page

相关设置部分的集合，例如“常规”组中的“外观”。

### 属性

| 名称  | 描述                 | 类型                                                                                        | 默认值 |
| :---- | :------------------- | :------------------------------------------------------------------------------------------ | :----- |
| id    | 组内页面的唯一 ID    | `string`                                                                                    |        |
| title | 页面的标题         | `string`                                                                                    |        |
| icon  | 页面图标的属性       | [`IconProps`](https://github.com/gravity-ui/uikit/tree/main/src/components/Icon#properties) |        |

## Settings.Section

相关设置的类别，例如“外观”页面中的“主题设置”。

### 属性

| 名称      | 描述                                                                   | 类型              | 默认值 |
| :-------- | :---------------------------------------------------------------------------- | :---------------- | :------ |
| title     | 部分的标题                                                              | `string`          |         |
| header    | 部分的头部                                                             | `React.ReactNode` |         |
| withBadge | 在部分和菜单上显示徽章                                              | `boolean`         |         |
| hideTitle | 隐藏部分标题。此属性用于在移动设备上隐藏简单设置中的标题 | `boolean`         |         |

## Settings.Item

带有标题和控件组件的单个设置。
⚠️ 如果 `Settings.Section` 中只有一个 `Settings.Item`，则不显示标题。

### 属性

| 名称                 | 描述                                                | 类型                                                      | 默认值    |
| :------------------- | :--------------------------------------------------------- | :-------------------------------------------------------- | :--------- |
| title                | 项目的标题                                              | `string`                                                  |            |
| renderTitleComponent | 自定义头部                                           | `(highlightedTitle?: React.ReactNode) => React.ReactNode` |
| align                | 项目对齐方式                                             | `"top"`, `"center"`                                       | `"center"` |
| mode                 | 移动设备布局。标题和控件将放置在同一行 | `"row"`                                                   |            |
| description          | 项目的描述                                        | `React.ReactNode`                                         |            |
