# ColorPicker

Le composant `ColorPicker` permet aux utilisateurs de sélectionner des couleurs à l'aide d'une interface interactive avec des modes d'entrée HEX/RGB et une prise en charge optionnelle du canal alpha.

Le sélecteur affiche un échantillon de couleur qui ouvre une fenêtre contextuelle avec :

- Sélecteur de saturation et de luminosité
- Curseur de teinte
- Curseur alpha (lorsqu'il est activé)
- Champs de saisie de couleur (modes HEX ou RGB)

## Utilisation de base

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function BasicColorPicker() {
  const [color, setColor] = React.useState('#ff0000');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} />;
}
```

## Avec canal alpha

Le `ColorPicker` prend en charge la transparence alpha lorsque `withAlpha` est activé. Cela ajoute un curseur de transparence et passe aux formats de couleur HEXA/RGBA :

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function ColorPickerWithAlpha() {
  const [color, setColor] = React.useState('#ff0000ff');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} withAlpha={true} />;
}
```

## Mode compact

Pour les mises en page où l'espace est limité, vous pouvez afficher uniquement l'échantillon de couleur sans afficher le texte de la valeur de couleur :

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function CompactColorPicker() {
  return (
    <ColorPicker
      defaultValue="#00ff00"
      compact={true}
      onUpdate={(newColor) => console.log('Nouvelle couleur :', newColor)}
    />
  );
}
```

## États contrôlés et non contrôlés

Le `ColorPicker` prend en charge les modèles d'utilisation contrôlés et non contrôlés :

```jsx
// Non contrôlé
<ColorPicker
  defaultValue="#ffbe5c"
  onUpdate={(color) => console.log('Couleur modifiée :', color)}
/>

// Contrôlé
<ColorPicker
  value={color}
  onUpdate={setColor}
/>
```

Vous pouvez également contrôler l'état ouvert de la fenêtre contextuelle du sélecteur :

```jsx
// État ouvert contrôlé
<ColorPicker value={color} open={isOpen} onOpenChange={setIsOpen} onUpdate={setColor} />
```

## Propriétés

| Nom           | Description                                                              |           Type            |                                      Défaut                                       |
| :------------ | :----------------------------------------------------------------------- | :-----------------------: | :--------------------------------------------------------------------------------: |
| size          | La taille du `ColorPicker`                                               | `"s"` `"m"` `"l"` `"xl"`  |                                       `"m"`                                        |
| value         | Valeur de couleur pour l'état contrôlé (chaîne HEX ou HEXA)              |         `string`          |                                                                                    |
| defaultValue  | Valeur de couleur par défaut pour l'état non contrôlé                    |         `string`          |                                    `"#000000"`                                     |
| onUpdate      | Callback lorsque l'utilisateur met à jour la couleur. Reçoit une chaîne HEX(A). | `(value: string) => void` |                                                                                    |
| popupPlacement | Placement de la popup                                                    |     `PopupPlacement`      | `['bottom-start', 'bottom-end', 'left-start', 'left-end', 'top-start', 'top-end']` |
| open          | État contrôlé pour l'ouverture/fermeture de la popup                     |         `boolean`         |                                                                                    |
| defaultOpen   | État par défaut pour l'ouverture/fermeture de la popup                   |         `boolean`         |                                      `false`                                       |
| onOpenChange  | Callback pour le changement d'état d'ouverture/fermeture de la popup     | `(open: boolean) => void` |                                                                                    |
| withAlpha     | Active la prise en charge du canal alpha pour le mode HEXA/RGBA et le curseur de transparence |         `boolean`         |                                      `false`                                       |
| compact       | Affiche uniquement le bouton du sélecteur sans afficher le texte de la valeur de couleur |         `boolean`         |                                      `false`                                       |

## Formats de couleur

Le `ColorPicker` retourne toujours les valeurs de couleur au format HEX :

- Lorsque `withAlpha={false}` : Retourne un HEX à 6 chiffres (par exemple, `#ff0000`)
- Lorsque `withAlpha={true}` : Retourne un HEXA à 8 chiffres (par exemple, `#ff0000ff`)

À l'intérieur de la popup du sélecteur, les utilisateurs peuvent basculer entre les modes de saisie HEX et RVB pour entrer les couleurs dans leur format préféré.