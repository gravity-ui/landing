# Menu

Le composant `Menu` affiche une liste de choix dans le `Popup` lors de l'interaction avec son déclencheur, généralement un bouton.

Il existe une collection de composants associés :

- `Menu` - le conteneur du menu
- `MenuItem` - une option à sélectionner dans le menu
- `MenuDivider` - un séparateur pour regrouper les options
- `MenuTrigger` - un déclencheur par défaut intégré, `Button` avec une icône d'ellipse

## Utilisation de base

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function BasicMenu() {
  return (
    <Menu trigger={<MenuTrigger />}>
      <MenuItem>Copier</MenuItem>
      <MenuItem>Déplacer</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Supprimer</MenuItem>
    </Menu>
  );
}
```

## Déclencheur personnalisé

Vous pouvez rendre n'importe quel type de composant comme déclencheur s'il accepte les `basic HTMLAttributes` comme props et une `ref` pour `HTMLElement`.
Pour des composants plus complexes, vous pouvez utiliser une variante de fonction de la prop `trigger` qui a `triggerProps` comme premier argument
et `triggerRef` comme second argument que vous devez passer à votre composant.

## Menu contextuel

Pour implémenter le modèle de menu contextuel, vous devez utiliser un "élément virtuel" comme déclencheur :

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function ContextMenu() {
  const [trigger, setTrigger] = React.useState(null);

  React.useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      setTrigger({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: event.clientX,
            y: event.clientY,
            top: event.clientY,
            right: event.clientX,
            bottom: event.clientY,
            left: event.clientX,
          };
        },
      });
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <Menu trigger={trigger}>
      <MenuItem>Copier</MenuItem>
      <MenuItem>Déplacer</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Supprimer</MenuItem>
    </Menu>
  );
}
```

## Mode en ligne

Par défaut, `Menu` est rendu à l'intérieur du `Popup`. Mais vous pouvez le rendre en ligne en utilisant la prop `inline` dans votre propre conteneur.

## Propriétés

| Nom            | Description                                     |                                              Type                                               |     Défaut      |
| :------------- | :---------------------------------------------- | :---------------------------------------------------------------------------------------------: | :-------------: |
| className      | Attribut `class` HTML                           |                                            `string`                                             |                 |
| style          | Attribut `style` HTML                           |                                      `React.CSSProperties`                                      |                 |
| aria-label     | Nom accessible pour le menu                     |                                            `string`                                             |                 |
| aria-labelledby | ID d'un élément qui nomme le menu               |                                            `string`                                             |                 |
| qa             | ID de test (attribut `data-qa`)                 |                                            `string`                                             |                 |
| open           | État contrôlé pour `open`                       |                                            `boolean`                                            |                 |
| defaultOpen    | État non contrôlé pour `open`                   |                                            `boolean`                                            |                 |
| children       | Composants liés au menu (éléments, séparateurs, etc.) |                                        `React.ReactNode`                                        |                 |
| disabled       | État désactivé                                  |                                            `boolean`                                            |     `false`     |
| inline         | Rend le menu en ligne                           |                                            `boolean`                                            |     `false`     |
| trigger        | Élément déclencheur qui ouvre le menu           | `React.ReactElement` `(triggerProps, triggerRef) => React.ReactElement` `VirtualElement` `null` |                 |
| placement      | Placement du popup                              |                                        `PopupPlacement`                                         | `"bottom-start"` |
| onOpenChange   | Callback pour le changement d'état `open`       |                `(open: boolean, event: Event, reason: OpenChangeReason) => void`                |                 |
| size           | La taille du `Menu`                             |                                    `"s"` `"m"` `"l"` `"xl"`                                     |      `"m"`      |

### MenuItem

Lorsqu'un `Icon` sans taille explicite est passé à la propriété `icon`, sa taille est sélectionnée
automatiquement en fonction de la taille du `Menu`. Définissez explicitement la `size`, `width` ou `height`
de l'`Icon` pour la remplacer.

`MenuItem` accepte toutes les props valides d'un élément `button` ou `a` en plus de celles-ci :

| Nom      | Description                         |                                Type                                |  Défaut   |
| :-------- | :---------------------------------- | :----------------------------------------------------------------: | :--------: |
| qa        | ID de test (attribut `data-qa`)     |                              `string`                              |            |
| theme     | Le thème du `MenuItem`              | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` | `"normal"` |
| selected  | État sélectionné (`menuitemcheckbox`) |                             `boolean`                              |            |
| disabled  | État désactivé                      |                             `boolean`                              |  `false`   |
| icon      | Slot de rendu pour une icône        |                        `React.ReactElement`                        |            |
| arrow     | Slot de rendu pour une flèche de menu imbriqué |                        `React.ReactElement`                        |            |
| children  | Contenu                             |                         `React.ReactNode`                          |            |
| component | Composant racine personnalisé       |                        `React.ElementType`                         |            |

### MenuTrigger

`MenuTrigger` accepte toutes les props du composant `Button` en plus de celles-ci :

| Nom | Description             |            Type             |    Défaut     |
| :--- | :---------------------- | :-------------------------: | :------------: |
| icon | Type d'icône à afficher | `"horizontal"` `"vertical"` | `"horizontal"` |