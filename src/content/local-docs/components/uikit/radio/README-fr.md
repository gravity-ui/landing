<!--GITHUB_BLOCK-->

# Radio

<!--/GITHUB_BLOCK-->

Le composant `Radio` permet aux utilisateurs de sélectionner une seule option parmi une liste de choix.

```tsx
import {Radio} from '@gravity-ui/uikit';
```

## États

`Radio` peut avoir les états suivants :

- Coché : La radio est sélectionnée.
- Désactivé : La radio n'est pas disponible pour la sélection.

<!--SANDBOX
import {Radio} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Radio value="option 1" content="Unchecked" size="l" checked={false} />
            <Radio value="option 2" content="Checked" size="l" checked />
            <Radio value="option 3" content="Disabled" size="l" disabled />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Radio value="option 1" content="Unchecked" size="l" checked={false}/>
<Radio value="option 2" content="Checked" size="l" checked/>
<Radio value="option 3" content="Disabled" size="l" disabled/>
```

<!--/GITHUB_BLOCK-->

## Taille

Pour gérer la taille du `Radio`, utilisez la propriété `size`. La taille par défaut est `m`.

<!--SANDBOX
import {Radio} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Radio value="option 1" content="M Size" size="m" />
            <Radio value="option 2" content="L Size" size="l" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Radio value="option 1" content="M Size" size="m"/>
<Radio value="option 2" content="L Size" size="l"/>
```

<!--/GITHUB_BLOCK-->

## Étiquette

Vous pouvez attribuer une étiquette à un `Radio` en utilisant la propriété `content` ou la fournir comme propriété enfant.

<!--SANDBOX
import {Box, Radio} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Radio value="option-1" content="Content" size="l" />
            <Box spacing={{mt: 2}}>
                <Radio value="option-2" size="l">
                    <span>Content as children</span>
                </Radio>
            </Box>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Radio content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Radio size="l">
      <span>Content as children</span>
    </Radio>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom           | Description                                                                                              |                     Type                      | Défaut |
| :------------ | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children      | Le contenu de la radio (généralement, une étiquette).                                                    |                  `ReactNode`                  |         |
| content       | Le contenu de la radio (alternative à children).                                                         |                  `ReactNode`                  |         |
| disabled      | Active/désactive l'état `disabled` de la radio.                                                          |                   `boolean`                   | `false` |
| checked       | Active/désactive l'état `checked` de la radio.                                                           |                   `boolean`                   | `false` |
| defaultChecked | Définit l'état initial coché lorsque le composant est monté.                                            |                   `boolean`                   | `false` |
| onUpdate      | Se déclenche lorsque l'état de la radio est modifié par l'utilisateur et fournit la valeur cochée en argument de rappel. |         `(checked: boolean) => void`          |         |
| onChange      | Se déclenche lorsque l'état de la radio est modifié par l'utilisateur et fournit l'événement de changement en argument de rappel. |                  `Function`                   |         |
| onFocus       | Gestionnaire d'événements à utiliser lorsque l'élément d'entrée de la radio reçoit le focus.            |                  `Function`                   |         |
| onBlur        | Gestionnaire d'événements à utiliser lorsque l'élément d'entrée de la radio perd le focus.              |                  `Function`                   |         |
| size          | Définit la taille de la radio.                                                                           |                    `m` `l`                    |   `m`   |
| id            | Attribut HTML `id`                                                                                       |                   `string`                    |         |
| qa            | Attribut HTML `data-qa`, utilisé pour les tests.                                                         |                   `string`                    |         |
| style         | Attribut HTML `style`                                                                                    |             `React.CSSProperties`             |         |
| className     | Attribut HTML `class`                                                                                    |                   `string`                    |         |
| title         | Attribut HTML `title`                                                                                    |                   `string`                    |         |
| name          | Attribut HTML `name` pour l'élément d'entrée.                                                            |                   `string`                    |         |
| value         | Valeur de contrôle.                                                                                      |                   `string`                    |         |
| indeterminate | Active/désactive l'état indéterminé de la radio.                                                         |                   `boolean`                   | `false` |
| controlProps  | Propriétés supplémentaires pour l'élément d'entrée sous-jacent.                                          | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef    | Référence à l'élément d'entrée sous-jacent.                                                              |         `React.Ref<HTMLInputElement>`         |         |
