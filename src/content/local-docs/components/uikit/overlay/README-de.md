<!--GITHUB_BLOCK-->

# Overlay

<!--/GITHUB_BLOCK-->

Der `Overlay`-Komponente rendert eine Überlagerung über dem Elternelement mit relativer Position, d.h. das Elternelement muss `position` auf `relative` gesetzt haben.
Sie kann beispielsweise verwendet werden, um das gewünschte Layout beim Laden von Daten beizubehalten.

```tsx
import {Overlay} from '@gravity-ui/uikit';
```

```jsx
import {Box, Overlay, Loader} from '@gravity-ui/uikit';

<Box position="relative">
  <div>Some content to hide under overlay</div>
  <Overlay visible={loading}>
    <Loader />
  </Overlay>
</Box>;
```

## Aussehen

### Hintergrund

Sie können `base`- oder `float`-Hintergrundfarben verwenden.

<!--GITHUB_BLOCK-->

```tsx
<Overlay background="base">
<Overlay background="float">
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name       | Beschreibung                               |        Typ        | Standard |
| :--------- | :----------------------------------------- | :----------------: | :------: |
| className  | CSS-Klassenname des Root-Elements          |      `string`      |          |
| visible    | Sichtbarkeitsstatus der Überlagerung       |     `boolean`      | `false`  |
| background | Stil des Überlagerungshintergrunds         | `"base"` `"float"` |  `base`  |
| children   | Inhalt (normalerweise eine `Loader`-Komponente) | `React.ReactNode`  |          |
