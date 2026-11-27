<!--GITHUB_BLOCK-->

# Switch

<!--/GITHUB_BLOCK-->

Le composant `Switch` est utilisé pour basculer entre deux états : généralement, entre **activé** et **désactivé**, ou **activé** et **désactivé**.

```tsx
import {Switch} from '@gravity-ui/uikit';
```

## États

Un `Switch` peut avoir différents états :

- Coché : Lorsque le commutateur est dans l'état **Activé**.
- Désactivé : Lorsque le commutateur n'est pas disponible.

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="l" checked={false}>
                Unchecked
            </Switch>
            <Switch size="l" checked>
                Checked
            </Switch>
            <Switch size="l" disabled>
                Disabled
            </Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="l" checked={false}>Unchecked</Switch>
<Switch size="l" checked>Checked</Switch>
<Switch size="l" disabled>Disabled</Switch>
```

<!--/GITHUB_BLOCK-->

## Taille

Utilisez la propriété `size` pour gérer la taille du `Switch`. La taille par défaut est `m`.

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="s">S Size</Switch>
            <Switch size="m">M Size</Switch>
            <Switch size="l">L Size</Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="s">S Size</Switch>
<Switch size="m">M Size</Switch>
<Switch size="l">L Size</Switch>
```

<!--/GITHUB_BLOCK-->

## Étiquette

Vous pouvez attribuer une étiquette à un `Switch` en utilisant la propriété `content` ou la fournir en tant que propriété enfant.

<!--SANDBOX
import {Box, Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Switch content="Content" size="l" />
            <Box spacing={{mt: 2}}>
                <Switch size="l">
                    <span>Content as children</span>
                </Switch>
            </Box>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Switch size="l">
      <span>Content as children</span>
    </Switch>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom           | Description                                                                                              |                     Type                      | Défaut |
| :------------ | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children      | Le contenu du switch (généralement, une étiquette)                                                       |                  `ReactNode`                  |         |
| content       | Le contenu du switch (alternative à children)                                                            |                  `ReactNode`                  |         |
| disabled      | Bascule l'état `disabled` du switch                                                                      |                   `boolean`                   | `false` |
| loading       | Bascule l'état `loading` du switch                                                                       |                   `boolean`                   | `false` |
| checked       | Bascule l'état `checked` du switch                                                                       |                   `boolean`                   | `false` |
| defaultChecked | Définit l'état initial coché lors du montage du composant                                                |                   `boolean`                   | `false` |
| onUpdate      | Se déclenche lorsque l'état du switch est modifié par l'utilisateur et fournit la valeur cochée en argument de rappel |         `(checked: boolean) => void`          |         |
| onChange      | Se déclenche lorsque l'état du switch est modifié par l'utilisateur et fournit l'événement de changement en argument de rappel |                  `Function`                   |         |
| onFocus       | Gestionnaire d'événement à utiliser lorsque l'élément d'entrée du switch reçoit le focus                  |                  `Function`                   |         |
| onBlur        | Gestionnaire d'événement à utiliser lorsque l'élément d'entrée du switch perd le focus                   |                  `Function`                   |         |
| size          | Définit la taille du switch                                                                              |                  `s` `m` `l`                  |   `m`   |
| id            | Attribut HTML `id`                                                                                       |                   `string`                    |         |
| qa            | Attribut HTML `data-qa`, utilisé pour les tests                                                          |                   `string`                    |         |
| style         | Attribut HTML `style`                                                                                    |             `React.CSSProperties`             |         |
| className     | Attribut HTML `class`                                                                                    |                   `string`                    |         |
| title         | Attribut HTML `title`                                                                                    |                   `string`                    |         |
| name          | Attribut HTML `name` pour l'élément d'entrée                                                             |                   `string`                    |         |
| value         | Attribut HTML `value` pour l'élément d'entrée                                                            |                   `string`                    |         |
| indeterminate | Bascule l'état indéterminé du switch                                                                     |                   `boolean`                   | `false` |
| controlProps  | Propriétés supplémentaires pour l'élément d'entrée sous-jacent                                           | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef    | Référence à l'élément d'entrée sous-jacent                                                               |         `React.Ref<HTMLInputElement>`         |         |
