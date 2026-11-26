Le composant `Palette` est utilisé pour afficher une grille d'icônes, d'emojis, de réactions et de symboles que vous pouvez sélectionner ou désélectionner.

```tsx
import {Palette} from '@gravity-ui/uikit';
```

### État désactivé

Vous pouvez désactiver toutes les options en utilisant la propriété `disabled`. Si vous souhaitez désactiver uniquement certaines options, vous pouvez modifier la propriété `disabled` de ces `options` (`PaletteOption[]`).

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Taille

Utilisez la propriété `size` pour gérer la taille de `Palette`. La taille par défaut est `s`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Colonnes

Vous pouvez modifier le nombre de colonnes dans la grille en modifiant la propriété `columns` (la valeur par défaut est `6`).

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Multiple

Par défaut, vous pouvez sélectionner et désélectionner plusieurs options. Si vous souhaitez uniquement rendre une seule option sélectionnable, vous pouvez désactiver la propriété `multiple`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Propriétés

`PaletteProps`:

| Nom            | Description                                                                           |                          Type                          | Défaut |
| :------------- | :------------------------------------------------------------------------------------ | :----------------------------------------------------: | :----: |
| aria-label     | Attribut HTML `aria-label`                                                            |                        `string`                        |        |
| aria-labelledby | ID de l'élément de légende `Palette` visible                                          |                        `string`                        |        |
| className      | Attribut HTML `class`                                                                 |                        `string`                        |        |
| columns        | Nombre d'éléments par ligne                                                           |                        `number`                        |  `6`   |
| defaultValue   | Définit l'état de valeur initial lorsque le composant est monté                      |                       `string[]`                       |        |
| disabled       | Désactive les options                                                                 |                       `boolean`                        | `false` |
| multiple       | Permet la sélection de plusieurs options                                              |                       `boolean`                        | `true`  |
| onBlur         | Gestionnaire d'événement `onBlur`                                                     | `(event: React.FocusEvent<HTMLButtonElement>) => void` |        |
| onFocus        | Gestionnaire d'événement `onFocus`                                                    | `(event: React.FocusEvent<HTMLButtonElement>) => void` |        |
| onUpdate       | Se déclenche lorsque l'utilisateur modifie l'état. Fournit la nouvelle valeur comme argument du callback. |              `(value: string[]) => void`               |        |
| optionClassName | Attribut HTML `class` pour le bouton de la palette                                    |                        `string`                        |        |
| options        | Liste des options (éléments de la palette)                                            |                   `PaletteOption[]`                    |  `[]`   |
| qa             | Attribut HTML `data-qa`, utilisé pour les tests                                       |                        `string`                        |        |
| rowClassName   | Attribut HTML `class` pour une ligne de la palette                                    |                        `string`                        |        |
| size           | Définit la taille des éléments                                                        |                 `xs` `s` `m` `l` `xl`                  |   `m`   |
| style          | Attribut HTML `style`                                                                 |                 `React.CSSProperties`                  |        |
| value          | Valeur actuelle pour l'utilisation contrôlée du composant                             |                       `string[]`                       |        |

`PaletteOption` :

| Nom     | Description            |    Type     | Défaut |
| :------ | :--------------------- | :---------: | :-----: |
| content | Attribut HTML `class` | `ReactNode` |         |
| disabled | Désactive le bouton    |  `boolean`  | `false` |
| title    | Attribut HTML `title` |  `string`   |         |
| value    | Valeur du contrôle          |  `string`   |         |