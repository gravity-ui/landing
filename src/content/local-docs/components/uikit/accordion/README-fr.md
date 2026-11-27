<!--GITHUB_BLOCK-->

# Accordion

<!--/GITHUB_BLOCK-->

Le composant Accordion vous permet de créer des panneaux de contenu déroulants où les utilisateurs peuvent afficher ou masquer des sections d'informations. Ceci est utile pour organiser une grande quantité de contenu de manière compacte.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Accordion>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Contrôle de l'état de l'accordéon

Vous pouvez contrôler l'état de l'accordéon à l'aide des propriétés `value` et `onUpdate` du composant racine, ou par élément.

Exemple de contrôle de l'état à partir du composant racine :

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="Settings" value="item1">
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item summary="Notifications" value="item2">
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [value, setValue] = React.useState('item1');

  return (
    <Accordion value={value} onUpdate={setValue}>
      <Accordion.Item summary="Settings" value="item1">
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" value="item2">
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

Exemple de contrôle de l'état par élément via la propriété `expanded` :

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="Settings"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item
                summary="Notifications"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [item1, setItem1] = React.useState(true);
  const [item2, setItem2] = React.useState(false);
  return (
    <Accordion>
      <Accordion.Item summary="Settings" onUpdate={setItem1} value="item1" expanded={item1}>
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" onUpdate={setItem2} value="item2" expanded={item2}>
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

## Taille

Utilisez la propriété `size` pour contrôler la taille de l'`Accordion`. La taille par défaut est `m`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="Medium Size">Content for medium accordion</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Large Size">Content for large accordion</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Extra Large Size">
                    Content for extra large accordion
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Medium Size">
        Content for medium accordion
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Large Size">
        Content for large accordion
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Extra Large Size">
        Content for extra large accordion
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Vue

`solid` : Vue principale avec fond (utilisée par défaut).

`top-bottom` : Vue avec des bordures supérieure et inférieure.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion view="solid">
                <Accordion.Item summary="Solid View">Content with solid background</Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Top-Bottom View">
                    Content with top-bottom borders
                </Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion view="solid">
    <Accordion.Item summary="Solid View">
        Content with solid background
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
<Accordion view="top-bottom">
    <Accordion.Item summary="Top-Bottom View">
        Content with top-bottom borders
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Position de la flèche

`end` : La flèche est positionnée à la fin de l'en-tête (utilisée par défaut).

`start` : La flèche est positionnée au début de l'en-tête.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Arrow at End">Content with arrow at the end</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Arrow at Start">
                    Content with arrow at the start
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion arrowPosition="end">
    <Accordion.Item summary="Arrow at End">
        Content with arrow at the end
    </Accordion.Item>
</Accordion>
<Accordion arrowPosition="start">
    <Accordion.Item summary="Arrow at Start">
        Content with arrow at the start
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Multiple

La propriété `multiple` permet à plusieurs éléments d'accordéon d'être développés simultanément.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
            <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
            <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Résumé personnalisé

Utilisez le composant `Accordion.Summary` pour créer un en-tête personnalisé.

<!--SANDBOX
import {Accordion, Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item value="custom">
                <Accordion.Summary>
                    {(props) => (
                        <Button {...props} view="flat" width="max">
                            Custom Summary Button
                        </Button>
                    )}
                </Accordion.Summary>
                Content with custom summary component
            </Accordion.Item>
            <Accordion.Item summary="Regular Summary">
                Content with regular summary prop
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item value="custom">
    <Accordion.Summary>
      {(props) => (
        <Button {...props} view="flat" width="max">
          <Icon data={Settings} size={16} />
          Custom Summary Button
        </Button>
      )}
    </Accordion.Summary>
    Content with custom summary component
  </Accordion.Item>
  <Accordion.Item summary="Regular Summary">Content with regular summary prop</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## État désactivé

Les éléments d'accordéon individuels peuvent être désactivés à l'aide de la propriété `disabled`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="Active Item">
                This item is active and can be expanded
            </Accordion.Item>
            <Accordion.Item summary="Disabled Item" disabled>
                This item is disabled and cannot be expanded
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="Active Item">This item is active and can be expanded</Accordion.Item>
  <Accordion.Item summary="Disabled Item" disabled>
    This item is disabled and cannot be expanded
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Propriétés

### Accordion

| Nom           | Description                                        |            Type            |  Défaut  |
| :------------ | :------------------------------------------------- | :------------------------: | :------: |
| size          | Taille de l'accordéon                              |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | Apparence de l'accordéon                           |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | Permet à plusieurs éléments d'être développés simultanément |         `boolean`          |  `false`  |
| arrowPosition | Position de l'indicateur de flèche                 |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | Valeur par défaut pour l'état non contrôlé         | `string` `string[]` `null` |          |
| value         | Valeur actuelle pour l'état contrôlé               | `string` `string[]` `null` |          |
| onUpdate      | Fonction de rappel appelée lorsque l'état change   |         `Function`         |          |
| ariaLevel     | Niveau de titre pour l'accessibilité               |          `number`          |    `3`    |
| className     | Nom de classe CSS                                  |          `string`          |          |
| qa            | Attribut HTML `data-qa`, utilisé pour les tests    |          `string`          |          |

### Accordion.Item

| Nom             | Description                                      |       Type        | Défaut |
| :-------------- | :----------------------------------------------- | :---------------: | :----: |
| value           | Identifiant unique de l'élément                  |     `string`      |        |
| summary         | En-tête de l'élément d'accordéon                 | `React.ReactNode` |        |
| expanded        | État développé contrôlé                         |     `boolean`     |        |
| defaultExpanded | État développé par défaut                       |     `boolean`     |        |
| disabled        | Désactive l'élément d'accordéon                  |     `boolean`     | `false` |
| keepMounted     | Garde le contenu dans le DOM même lorsqu'il est réduit |     `boolean`     |        |
| onUpdate        | Fonction de rappel appelée lorsque l'état de l'élément change |    `Function`     |        |
| className       | Nom de classe CSS                                |     `string`      |        |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests  |     `string`      |        |

### Accordion.Summary

| Nom     | Description                                                                             |                      Type                       |                                          Défaut                                          |
| :------ | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Fonction de rendu de résumé personnalisée                                               | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | Attribut HTML `data-qa`, utilisé pour les tests. Ne fonctionne que si `qa` est passé dans Accordion.Item |                    `string`                     | `${accordion-item}-summary` si `qa` est passé dans Accordion.Item, `disclosure-summary` si ce n'est pas le cas |

## API CSS

| Nom                           | Description                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Rembourrage en ligne (horizontal) pour l'accordéon |
