<!--GITHUB_BLOCK-->

# PlaceholderContainer

<!--/GITHUB_BLOCK-->

`PlaceholderContainer` は、画像、テキストコンテンツ、アクションコントロールを含むコンテンツを表示するためのコンポーネントです。

## Direction

`PlaceholderContainer` には、コンテンツのレイアウトのために `row` と `column` の方向があります。これを管理するには、`direction` プロパティを使用します。デフォルトのサイズは `row` です。

## Size

`PlaceholderContainer` のサイズを管理するには、`size` プロパティを使用します。デフォルトのサイズは `l` です。可能な値は `s`、`m`、`l`、`promo` です。`promo` 値は、最小コンテンツの高さと大きなタイトルのサイズなしで、コンテンツセクションの全幅を設定します。

## Action controls

`PlaceholderContainer` は、ボタンコントロールまたはボタンの配列をレンダリングできます。これを表示するには、`actions` プロパティを使用します。

<!--GITHUB_BLOCK-->

```tsx
<PlaceholderContainer
  title="Sample with action control"
  description="Some description for PlaceholderContainer component demo"
  direction="column"
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
  actions={[
    {
      text: 'Main button',
      view: 'normal',
      onClick: () => console.log('Click by main button'),
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

カスタムコントロールをレンダリングすることもできます。

<!--GITHUB_BLOCK-->

```tsx
<PlaceholderContainer
  title="Sample with custom action"
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
  actions={
    <DropdownMenu
      defaultSwitcherProps={{view: 'flat-secondary'}}
      items={[
        {text: 'text 1', action: () => console.log()},
        {text: 'text 2', action: () => console.log()},
      ]}
      onSwitcherClick={(e) => console.log(e)}
      switcher={
        <Button>
          Text
          <Icon data={ChevronDown} size={16} />
        </Button>
      }
    />
  }
/>
```

<!--/GITHUB_BLOCK-->

## Image and content

`image` プロパティを使用すると、画像の `src` と `alt` 設定、または React ノードを構成できます。

<!--GITHUB_BLOCK-->

```tsx
<PlaceholderContainer
  title="Sample with image node"
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
/>
```

With `src` and `alt` settings:

```tsx
<PlaceholderContainer
  title="Sample with image (set by src and alt properties)"
  description="Some description for PlaceholderContainer component demo"
  direction="row"
  size="s"
  align="center"
  image={{
    src: 'https://gravity-ui.com/static/images/design/Resources/img-gravitylib.png',
    alt: 'logo',
  }}
/>
```

<!--/GITHUB_BLOCK-->

`PlaceholderContainer` のコンテンツは、タイトルと説明セクションで構成されており、適切なプロパティで設定できます。カスタムコンテンツをレンダリングするには、`content` プロパティを使用します。

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

## Align

親コンテナ内のコンテンツの配置を管理するには、`align` プロパティを使用します。デフォルト値は `center` です。

## Properties

| 名前        | 説明
