<!--GITHUB_BLOCK-->

# Portal

<!--/GITHUB_BLOCK-->

`Portal` est un composant utilitaire. Essentiellement, il s'agit d'un simple wrapper autour de [`createPortal`](https://react.dev/reference/react-dom/createPortal) de React qui vous permet de rendre des enfants dans un nœud DOM en dehors du composant parent.

```tsx
import {Portal} from '@gravity-ui/uikit';
```

## Conteneur

Par défaut, `Portal` rend ses enfants dans `document.body` ; cependant, vous pouvez modifier cela avec la propriété `container`.
De plus, vous pouvez fournir un conteneur à tous les `Portal` dans le sous-arbre React en utilisant le composant `PortalProvider`.

```tsx
import {Portal, PortalProvider} from '@gravity-ui/uikit'

const myRoot = document.getElementById('my-root');

<Portal>This is rendered inside document.body</Portal>
<Portal container={myRoot}>This is rendered inside #my-root node</Portal>
<PortalProvider container={myRoot}>
    <Portal>This is also rendered inside #my-root</Portal>
</PortalProvider>
```

## Propriétés

| Nom           | Description                                                              |       Type        |     Défaut      |
| :------------ | :----------------------------------------------------------------------- | :---------------: | :-------------: |
| children      | Tout contenu React                                                       | `React.ReactNode` |                 |
| container     | Les enfants de l'élément DOM à monter                                    |   `HTMLElement`   | `document.body` |
| disablePortal | Si vrai, rend les enfants dans la hiérarchie DOM normale.                |     `boolean`     |                 |
