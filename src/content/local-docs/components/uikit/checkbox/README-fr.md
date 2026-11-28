<!--GITHUB_BLOCK-->

# Checkbox

<!--/GITHUB_BLOCK-->

Le composant `Checkbox` permet à l'utilisateur de sélectionner ou de désélectionner une valeur spécifique.

```tsx
import {Checkbox} from '@gravity-ui/uikit';
```

## États

Un `Checkbox` peut avoir différents états :

- Coché : La case est cochée.
- Désactivé : La case n'est pas disponible.
- Indéterminé : La case est dans un état intermédiaire entre cochée et non cochée.

<!--SANDBOX
import {Checkbox} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Checkbox size="l" checked={false}>Unchecked</Checkbox>
            <Checkbox size="l" checked>Checked</Checkbox>
            <Checkbox size="l" disabled>Disabled</Checkbox>
            <Checkbox size="l" indeterminate>Indeterminate</Checkbox>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Checkbox size="l" checked={false}>Unchecked</Checkbox>
<Checkbox size="l" checked>Checked</Checkbox>
<Checkbox size="l" disabled>Disabled</Checkbox>
<Checkbox size="l" indeterminate>Indeterminate</Checkbox>
```

<!--/GITHUB_BLOCK-->

## Taille

Utilisez la propriété `size` pour gérer la taille du `Checkbox`. La taille par défaut est `m`.

<!--SANDBOX
import {Checkbox} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Checkbox size="m">M Size</Checkbox>
            <Checkbox size="l">L Size</Checkbox>
            <Checkbox size="xl">XL Size</Checkbox>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Checkbox size="m">M Size</Checkbox>
<Checkbox size="l">L Size</Checkbox>
<Checkbox size="xl">XL Size</Checkbox>
```

<!--/GITHUB_BLOCK-->

## Étiquette

Vous pouvez attribuer une étiquette à un `Checkbox` en utilisant la propriété `content` ou la fournir comme propriété enfant.

<!--SANDBOX
import {Checkbox} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Checkbox content="Content" size="l" />
            <div style={{marginTop: 10}}>
                <Checkbox size="l">
                    <span>Content as children</span>
                </Checkbox>
            </div>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Checkbox content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Checkbox size="l">
      <span>Content as children</span>
    </Checkbox>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom           | Description                                                                                             |                     Type                      | Défaut |
| :------------ | :------------------------------------------------------------------------------------------------------ | :-------------------------------------------: | :----: |
| children      | Contenu de la case à cocher (généralement, une étiquette).                                              |                  `ReactNode`                  |        |
| content       | Contenu de la case à cocher (alternative à children).                                                   |                  `ReactNode`                  |        |
| disabled      | Active ou désactive l'état `disabled` de la case à cocher.                                              |                   `boolean`                   | `false` |
| checked       | Active ou désactive l'état `checked` de la case à cocher.                                               |                   `boolean`                   | `false` |
| defaultChecked | Définit l'état initial coché lorsque le composant est monté.                                           |                   `boolean`                   | `false` |
| onUpdate      | Se déclenche lorsque l'utilisateur modifie l'état de la case à cocher et fournit la valeur cochée en argument de rappel. |         `(checked: boolean) => void`          |        |
| onChange      | Se déclenche lorsque l'utilisateur modifie l'état de la case à cocher et fournit l'événement de changement en argument de rappel. |                  `Function`                   |        |
| onFocus       | Gestionnaire d'événement à utiliser lorsque l'élément d'entrée de la case à cocher reçoit le focus.      |                  `Function`                   |        |
| onBlur        | Gestionnaire d'événement à utiliser lorsque l'élément d'entrée de la case à cocher perd le focus.        |                  `Function`                   |        |
| size          | Détermine la taille de la case à cocher.                                                                |                    `m` `l`                    |   `m`   |
| id            | Attribut HTML `id`                                                                                      |                   `string`                    |        |
| qa            | Attribut HTML `data-qa`, utilisé pour les tests                                                         |                   `string`                    |        |
| style         | Attribut HTML `style`                                                                                   |             `React.CSSProperties`             |        |
| className     | Attribut HTML `class`                                                                                   |                   `string`                    |        |
| title         | Attribut HTML `title`                                                                                   |                   `string`                    |        |
| name          | Attribut HTML `name` pour l'élément d'entrée.                                                           |                   `string`                    |        |
| value         | Attribut HTML `value` pour l'élément d'entrée.                                                          |                   `string`                    |        |
| indeterminate | Active ou désactive l'état `indeterminate` de la case à cocher.                                         |                   `boolean`                   | `false` |
| controlProps  | Propriétés supplémentaires pour l'élément d'entrée sous-jacent.                                         | `React.InputHTMLAttributes<HTMLInputElement>` |        |
| controlRef    | Référence à l'élément d'entrée sous-jacent.                                                             |         `React.Ref<HTMLInputElement>`         |        |
