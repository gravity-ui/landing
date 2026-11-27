GRAVITY_TRANSLATION_BLOCK_0_END

Le composant `Drawer` est un élément d'interface polyvalent utilisé dans les applications web pour fournir un panneau coulissant qui apparaît depuis le bord de l'écran. Ce panneau peut contenir des navigations, des outils ou du contenu supplémentaire. Le composant est implémenté à l'aide de transitions React et CSS pour des animations fluides.

```tsx
import {Drawer} from '@gravity-ui/uikit';
```

## Utilisation

Voici un exemple simple d'utilisation du composant `Drawer` :

```tsx
import React from 'react';
import {Drawer} from '@gravity-ui/uikit';

const App = () => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Ouvrir le tiroir</button>
      <Drawer onOpenChange={setVisible} open={isVisible}>
        <p>Contenu du tiroir</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## Placement

Pour contrôler le placement du `Drawer`, vous pouvez passer la prop `placement`. Les valeurs possibles sont `left`, `right`, `top` et `bottom`.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} placement="left">
  <p>Contenu du tiroir</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="right">
  <p>Contenu du tiroir</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="top">
  <p>Contenu du tiroir</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="bottom">
  <p>Contenu du tiroir</p>
</Drawer>
```

## Animation

Par défaut, le `Drawer` glisse en entrée et en sortie avec une transition. Pour l'afficher ou le masquer instantanément, passez la prop `disableTransition`.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} disableTransition>
  <p>Contenu du tiroir</p>
</Drawer>
```

## Redimensionnable

Un `Drawer` peut être redimensionnable en passant la prop `resizable`.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} resizable>
  <p>Contenu du tiroir</p>
</Drawer>
```

De plus, vous pouvez utiliser la prop `size` pour contrôler la taille du `Drawer` et passer le gestionnaire `onResize` pour stocker la valeur redimensionnée.

```tsx
const [size, setSize] = useState(500);

<Drawer onOpenChange={setVisible} open={isVisible} resizable size={size} onResize={setSize}>
  <p>Contenu du tiroir</p>
</Drawer>;
```

## Propriétés

| Nom                    | Description                                                                                                                             |                Type                |     Défaut     |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------: | :------------: |
| className               | Attribut HTML `class` pour le nœud racine                                                                                               |              `string`              |                |
| qa                      | Attribut de test (`data-qa`)                                                                                                            |              `string`              |                |
| style                   | Attribut HTML `style` pour le nœud racine                                                                                               |       `React.CSSProperties`        |                |
| aria-label              | Attribut HTML `aria-label` pour décrire le `Drawer`                                                                                    |              `string`              |                |
| aria-labelledby         | ID de l'élément de légende visible du `Drawer`                                                                                         |              `string`              |                |
| aria-describedby        | `aria-describedby` pour l'élément `Drawer`                                                                                              |              `string`              |                |
| aria-details            | `aria-details` pour l'élément `Drawer` utilisateur                                                                                      |              `string`              |                |
| returnFocus             | Élément sur lequel le focus sera rétabli à la fermeture                                                                                 | `boolean` `React.Ref<HTMLElement>` |     `true`     |
| initialFocus            | Élément sur lequel le focus sera initialement placé. Un nombre positif correspond à l'index de l'élément focusable.                     | `number` `React.Ref<HTMLElement>`  |                |
| placement               | Spécifie le côté d'où le tiroir doit apparaître                                                                                         |              `string`              |     `left`     |
| contentClassName        | Attribut HTML `class` pour le nœud de contenu                                                                                           |              `string`              |                |
| children                | Tout contenu React                                                                                                                      |         `React.ReactNode`          |                |
| container               | Élément DOM auquel le composant est monté via `Portal`                                                                                 |           `HTMLElement`            | `document.body` |
| contentOverflow         | Détermine si le `Drawer` possède son propre indicateur de défilement interne. Par défaut, il n'en a pas.                                 |          `visible` `auto`          |    `visible`   |
| disableBodyScrollLock   | Désactive le verrouillage du défilement pendant l'ouverture                                                                             |             `boolean`              |     `false`    |
| disableEscapeKeyDown    | Désactive la fermeture via la touche `Esc`                                                                                              |             `boolean`              |     `false`    |
| disableOutsideClick     | Désactive la fermeture par clic extérieur                                                                                               |             `boolean`              |     `false`    |
| disableTransition       | Désactive l'animation du tiroir                                                                                                         |             `boolean`              |     `false`    |
| disableModal            | Désactive la gestion du focus modal                                                                                                     |             `boolean`              |     `false`    |
| disableLayer            | Désactive l'enregistrement du `Drawer` dans le gestionnaire de couches                                                                  |             `boolean`              |     `true`     |
| disablePortal           | Désactive l'utilisation de `Portal`                                                                                                     |             `boolean`              |     `false`    |
| keepMounted             | Le `Drawer` ne sera pas supprimé du DOM lors de sa masquage                                                                             |             `boolean`              |     `false`    |
| resizable               | Active le redimensionnement du tiroir via le pointeur                                                                                   |             `boolean`              |     `false`    |
| open                    | Gère la visibilité du `Drawer`                                                                                                          |             `boolean`              |     `false`    |
| hideVeil                | Supprime le voile du `Drawer` sans modifier la gestion des clics extérieurs                                                             |             `boolean`              |     `false`    |
| onOpenChange            | Callback appelé au moment du changement d'état d'ouverture                                                                               |             `Function`             |                |
| onTransitionIn          | Le callback déclenché au début de la transition "in"                                                                                    |             `Function`             |                |
| onTransitionInComplete  | Le callback déclenché à la fin de la transition "in"                                                                                    |             `Function`             |                |
| onTransitionOut         | Le callback déclenché au début de la transition "out"                                                                                   |             `Function`             |                |
| onTransitionOutComplete | Le callback déclenché à la fin de la transition "out"                                                                                   |             `Function`             |                |
| onResizeEnd             | Callback appelé à la fin du redimensionnement                                                                                          |             `Function`             |                |
| onResize                | Callback appelé lorsque le tiroir est en cours de redimensionnement                                                                     |             `Function`             |                |
| onResizeStart           | Callback appelé au début du redimensionnement                                                                                          |             `Function`             |                |
| maxSize                 | Largeur ou hauteur maximale du tiroir en pixels                                                                                         |              `number`              |                |
| minSize                 | Largeur ou hauteur minimale du tiroir en pixels                                                                                         |              `number`              |                |
| size                    | Largeur ou hauteur du tiroir en pixels. Lorsque l'option `auto` est passée, la largeur ou la hauteur du Drawer s'ajustera pour s'adapter à son contenu. |         `number \| 'auto'`         |                |