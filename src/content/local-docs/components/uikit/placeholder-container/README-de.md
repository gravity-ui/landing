<!--GITHUB_BLOCK-->

# PlaceholderContainer

<!--/GITHUB_BLOCK-->

`PlaceholderContainer` ist eine Komponente zur Anzeige von Inhalten mit einem Bild, Textinhalt und Aktionssteuerelementen.

## Richtung

`PlaceholderContainer` hat die Richtungen `row` und `column` für das Layout des Inhalts. Zur Verwaltung verwenden Sie die Eigenschaft `direction`. Die Standardgröße ist `row`.

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe von `PlaceholderContainer` zu verwalten. Die Standardgröße ist `l`. Die möglichen Werte sind `s`, `m`, `l` und `promo`. Der Wert `promo` setzt die volle Breite des Inhaltsbereichs ohne minimale Inhalts höhe und eine größere Titelgröße.

## Aktionssteuerelemente

`PlaceholderContainer` kann Schaltflächensteuerelemente oder ein Array von Schaltflächen rendern. Zur Anzeige verwenden Sie die Eigenschaft `actions`.

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

Sie können auch benutzerdefinierte Steuerelemente rendern:

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

## Bild und Inhalt

Die Eigenschaft `image` ermöglicht die Konfiguration der Bild `src`- und `alt`-Einstellungen oder eines React-Knotens.

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

Der Inhalt von `PlaceholderContainer` besteht aus Titel- und Beschreibungsbereichen, die Sie mit den entsprechenden Eigenschaften festlegen können. Zum Rendern von benutzerdefiniertem Inhalt verwenden Sie die Eigenschaft `content`.

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

## Ausrichtung

Zur Verwaltung der Ausrichtung des Inhalts innerhalb des übergeordneten Containers verwenden Sie die Eigenschaft `align`. Der Standardwert ist `center`.

## Eigenschaften

| Name        | Beschreibung
