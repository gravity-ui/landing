<!--GITHUB_BLOCK-->

# ActionBar

<!--/GITHUB_BLOCK-->

该组件是一个灵活的水平栏，为应用程序中的导航元素、操作和信息性内容提供标准化的布局。它充当容器，用于将面包屑、按钮和下拉菜单等 UI 元素组织到定义的区域和组中。

<!--GITHUB_BLOCK-->

## Usage

```typescript jsx
import {Button} from '@gravity-ui/uikit';
import {Breadcrumbs as LegacyBreadcrumbs} from '@gravity-ui/uikit/legacy';
import {ActionBar} from '@gravity-ui/navigation';

function Page() {
  return (
    <ActionBar aria-label="Actions bar">
      <ActionBar.Section>
        <ActionBar.Group>
          <ActionBar.Item>
            <LegacyBreadcrumbs
              lastDisplayedItemsCount={1}
              firstDisplayedItemsCount={1}
              items={[{text: 'Root Item', action() {}}]}
            />
          </ActionBar.Item>
        </ActionBar.Group>

        <ActionBar.Group pull="right">
          <ActionBar.Item>
            <Button>Do something</Button>
          </ActionBar.Item>
        </ActionBar.Group>
      </ActionBar.Section>
    </ActionBar>
  );
}
```

<!--/GITHUB_BLOCK-->

`ActionBar` 提供了几个嵌套组件，它们协同工作以创建结构化布局：`ActionBar.Section`、`ActionBar.Group`、`ActionBar.Item`、`ActionBar.Separator`。

## 属性

| 名称       | 描述                               |         类型          | 默认值 |
| :--------- | :--------------------------------- | :-------------------: | :----: |
| aria-label | HTML `aria-label` 属性             |       `string`        |        |
| className  | HTML `class` 属性                  |       `string`        |        |
| style      | HTML `style` 属性                  | `React.CSSProperties` |        |
| qa         | `data-qa` HTML 属性，用于测试      |       `string`        |        |

## ActionBar.Section

装饰性组件，用于在视觉上分隔不同类型的导航。
有两种类型的区域——`primary` 和 `secondary`。我们建议应用程序至少有一个 `primary`
区域。`secondary` 可用于应用程序特定的控件，这些控件应通过较小的内边距和
与 `primary` 区域的水平分隔符进行强调。

### 属性

| 名称      | 描述                                   |            类型            |   默认值   |
| :-------- | :------------------------------------- | :------------------------: | :--------: |
| type      | `type` 指定区域的视觉样式              | `"primary"`, `"secondary"` | `"primary"` |
| className | HTML `class` 属性                      |          `string`          |            |
| style     | HTML `style` 属性                      |   `React.CSSProperties`    |            |
| qa        | `data-qa` HTML 属性，用于测试          |          `string`          |            |

<!--GITHUB_BLOCK-->

```tsx
import {Button} from '@gravity-ui/uikit';
import {Breadcrumbs as LegacyBreadcrumbs} from '@gravity-ui/uikit/legacy';
import {ActionBar} from '@gravity-ui/navigation';

<ActionBar aria-label="Actions bar">
  <ActionBar.Section type="secondary">
    <ActionBar.Group>
      <ActionBar.Item>
        <Button>Toggle Article TOC</Button>
      </ActionBar.Item>
    </ActionBar.Group>
  </ActionBar.Section>

  <ActionBar.Section type="primary">
    <ActionBar.Group>
      <ActionBar.Item>
        <LegacyBreadcrumbs
          lastDisplayedItemsCount={1}
          firstDisplayedItemsCount={1}
          items={[
            {text: 'Wiki Main Page', action() {}},
            {text: 'Wiki Article', action() {}},
          ]}
        />
      </ActionBar.Item>
    </ActionBar.Group>
  </ActionBar.Section>
</ActionBar>;
```

<!--/GITHUB_BLOCK-->

## ActionBar.Group

组将 `ActionBar.Item` 组织在一个区域内并控制它们的对齐方式。

### 属性

| 名称             | 描述                                                       |                                      类型                                       | 默认值 |
| :--------------- | :--------------------------------------------------------- | :-----------------------------------------------------------------------------: | :----: |
| pull             | 控制组的对齐方式                                           | `"left"`, `"left-grow"`, `"right"`, `"right-grow"`, `"center"`, `"center-grow"` |        |
| stretchContainer | 为 Group 设置 `flex-grow: 1`。需要支持 UIKit@7 Breadcrumbs |                                    `boolean`                                    |        |
| className        | HTML `class` 属性                                          |                                    `string`                                     |        |
| style            | HTML `style` 属性                                          |                              `React.CSSProperties`                              |        |
| qa               | `data-qa` HTML 属性，用于测试                              |                                    `string`                                     |        |

## ActionBar.Item

包含 UI 元素的容器，例如按钮、面包屑或其他必须位于 `ActionBar.Group` 中的组件。该组件在项目之间添加了边距。

### 属性

| 名称      | 描述                     |         类型          | 默认值 |
| :-------- | :----------------------- | :-------------------: | :----: |
| spacing   | 启用与前一个项目的间距   |       `boolean`       | `true` |
| className | HTML `class` 属性        |       `string`        |        |
| style     | HTML `style` 属性        | `React.CSSProperties` |        |
| qa        | `data-qa` HTML 属性，用于测试 |       `string`        |        |

## ActionBar.Separator

用于在组内项目之间创建视觉分隔的视觉分隔符。

<!--GITHUB_BLOCK-->

### Example

```typescript jsx
import {Button} from '@gravity-ui/uikit';
import {Breadcrumbs as LegacyBreadcrumbs} from '@gravity-ui/uikit/legacy';
import {ActionBar} from '@gravity-ui/navigation';

function Page() {
  return (
    <ActionBar aria-label="Actions bar">
      <ActionBar.Section>
        <ActionBar.Group pull="right">
          <ActionBar.Item>
            <Button>Do something</Button>
          </ActionBar.Item>

          <ActionBar.Separator />

          <ActionBar.Item>
            <Button>Do something</Button>
          </ActionBar.Item>
        </ActionBar.Group>
      </ActionBar.Section>
    </ActionBar>
  );
}
```

<!--/GITHUB_BLOCK-->
