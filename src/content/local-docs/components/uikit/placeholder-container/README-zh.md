`PlaceholderContainer` 是一个用于显示包含图片、文本内容和操作控件的内容的组件。

## 方向

`PlaceholderContainer` 具有用于内容布局的 `row`（行）和 `column`（列）方向。要进行管理，请使用 `direction` 属性。默认值为 `row`。

## 尺寸

使用 `size` 属性来管理 `PlaceholderContainer` 的尺寸。默认尺寸为 `l`。可能的值为 `s`、`m`、`l` 和 `promo`。`promo` 值设置内容区域的完整宽度，没有最小内容高度，并且标题尺寸更大。

## 操作控件

`PlaceholderContainer` 可以渲染按钮控件或按钮数组。要显示它，请使用 `actions` 属性。

GRAVITY_TRANSLATION_BLOCK_1_END

您也可以渲染自定义控件：

GRAVITY_TRANSLATION_BLOCK_2_END

## 图片和内容

`image` 属性支持配置图片的 `src` 和 `alt` 设置，或者一个 React 节点。

GRAVITY_TRANSLATION_BLOCK_3_END

`PlaceholderContainer` 的内容包含标题和描述部分，您可以使用相应的属性进行设置。要渲染自定义内容，请使用 `content` 属性。

```tsx
<PlaceholderContainer
  title="Sample with custom content"
  description="Some description for PlaceholderContainer component demo"
  direction="row"
  size="s"
  align="center"
  image={
    <svg width="230" height="230" viewBox="0 0 230 230" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#DDDDDD" height="100%" transform="matrix(1 0 0 1 0 0)" width="100%" />
        <text
          fill="#999999"
          fontFamily="Sans-serif"
          fontSize="16"
          strokeWidth="0"
          textAnchor="middle"
          transform="matrix(1.88041 0 0 1.88041 -48.1289 -81.7475)"
          x="86.49"
          y="114"
        >
          1:1
        </text>
      </g>
    </svg>
  }
  content={
    <div>
      <h3>There is any custom title here</h3>
      <p>
        You can add <strong>here</strong> any long text with custom content and use custom content
        size for displaying very long texts.
      </p>
    </div>
  }
/>
```

## 对齐

要管理父容器内内容的对齐方式，请使用 `align` 属性。默认值为 `center`。

## 属性

| 名称        | 描述                                                                                                                               |                                     类型                                      |  默认值   |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------: | :--------: |
| className   | `class` HTML 属性 (可选)                                                                                                           |                                   `string`                                    |            |
| direction   | 用于设置内容布局方向。可能的值为 `"row"` 和 `"column"`。                                                                               |                                   `string`                                    |  `"row"`   |
| size        | 组件尺寸。可能的值为 `"s"`、`"m"`、`"l"` 和 `"promo"`。                                                                                |                                   `string`                                    |   `"l"`    |
| align       | 用于设置内容的水平对齐方式。可能的值为 `"center"` 和 `"left"`。                                                                          |                                   `string`                                    | `"center"` |
| title       | 内容标题文本                                                                                                                       |                                   `string`                                    |            |
| description | 内容描述文本                                                                                                                       |                                   `string`                                    |            |
| image       | 用于通过 `src` 设置图像或提供 React 节点                                                                                             | `PlaceholderContainerImageNodeProps`<br/> `\| PlaceholderContainerImageProps` |            |
| content     | 用于渲染一个节点来代替内容（标题、描述和操作）                                                                                       |                               `React.ReactNode`                               |            |
| actions     | 用于渲染一个按钮控件数组或自定义节点                                                                                                 |     `PlaceholderContainerActionProps[]`<br/> `\|        React.ReactNode `     |            |
| maxWidth    | 用于覆盖容器的默认最大宽度                                                                                                           |                               `number` `string`                               |            |