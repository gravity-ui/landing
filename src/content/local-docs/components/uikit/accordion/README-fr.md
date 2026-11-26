<!--/GITHUB_BLOCK-->

Le composant Accordion vous permet de créer des panneaux de contenu rétractables où les utilisateurs peuvent afficher ou masquer des sections d'informations. Ceci est utile pour organiser une grande quantité de contenu de manière compacte.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Exemple de base

```tsx
<Accordion>
  <Accordion.Item summary="Premier élément">Contenu du premier élément</Accordion.Item>
  <Accordion.Item summary="Deuxième élément">Contenu du deuxième élément</Accordion.Item>
  <Accordion.Item summary="Troisième élément">Contenu du troisième élément</Accordion.Item>
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
            <Accordion.Item summary="Paramètres" value="item1">
                Configurez les paramètres de votre application
            </Accordion.Item>
            <Accordion.Item summary="Notifications" value="item2">
                Gérez vos préférences de notification
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
      <Accordion.Item summary="Paramètres" value="item1">
        Configurez les paramètres de votre application
      </Accordion.Item>
      <Accordion.Item summary="Notifications" value="item2">
        Gérez vos préférences de notification
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

Exemple de contrôle de l'état par élément via la prop `expanded` :

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="Paramètres"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Configurez les paramètres de votre application
            </Accordion.Item>
            <Accordion.Item
                summary="Notifications"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Gérez vos préférences de notification
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
      <Accordion.Item summary="Paramètres" onUpdate={setItem1} value="item1" expanded={item1}>
        Configurez les paramètres de votre application
      </Accordion.Item>
      <Accordion.Item summary="Notifications" onUpdate={setItem2} value="item2" expanded={item2}>
        Gérez vos préférences de notification
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
                <Accordion.Item summary="Taille moyenne">Contenu pour accordéon moyen</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Grande taille">Contenu pour accordéon grand</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Très grande taille">
                    Contenu pour accordéon très grand
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Taille moyenne">
        Contenu pour accordéon moyen
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Grande taille">
        Contenu pour accordéon grand
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Très grande taille">
        Contenu pour accordéon très grand
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
                <Accordion.Item summary="Vue solide">Contenu avec fond solide</Accordion.Item>
                <Accordion.Item summary="Autre élément">Plus de contenu</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Vue haut-bas">
                    Contenu avec bordures haut-bas
                </Accordion.Item>
                <Accordion.Item summary="Autre élément">Plus de contenu</Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion view="solid">
    <Accordion.Item summary="Vue solide">
        Contenu avec fond solide
    </Accordion.Item>
    <Accordion.Item summary="Autre élément">
        Plus de contenu
    </Accordion.Item>
</Accordion>
<Accordion view="top-bottom">
    <Accordion.Item summary="Vue haut-bas">
        Contenu avec bordures haut-bas
    </Accordion.Item>
    <Accordion.Item summary="Autre élément">
        Plus de contenu
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Position de la flèche

`end` : La flèche est positionnée à la fin de l'en-tête (utilisé par défaut).

`start` : La flèche est positionnée au début de l'en-tête.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Flèche à la fin">Contenu avec flèche à la fin</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Flèche au début">
                    Contenu avec flèche au début
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion arrowPosition="end">
    <Accordion.Item summary="Flèche à la fin">
        Contenu avec flèche à la fin
    </Accordion.Item>
</Accordion>
<Accordion arrowPosition="start">
    <Accordion.Item summary="Flèche au début">
        Contenu avec flèche au début
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Multiple

La propriété `multiple` permet d'ouvrir plusieurs éléments d'accordéon simultanément.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="Premier élément">Contenu du premier élément</Accordion.Item>
            <Accordion.Item summary="Deuxième élément">Contenu du deuxième élément</Accordion.Item>
            <Accordion.Item summary="Troisième élément">Contenu du troisième élément</Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="Premier élément">Contenu du premier élément</Accordion.Item>
  <Accordion.Item summary="Deuxième élément">Contenu du deuxième élément</Accordion.Item>
  <Accordion.Item summary="Troisième élément">Contenu du troisième élément</Accordion.Item>
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
                            Bouton de résumé personnalisé
                        </Button>
                    )}
                </Accordion.Summary>
                Contenu avec composant de résumé personnalisé
            </Accordion.Item>
            <Accordion.Item summary="Résumé régulier">
                Contenu avec prop de résumé régulier
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
          Bouton de résumé personnalisé
        </Button>
      )}
    </Accordion.Summary>
    Contenu avec composant de résumé personnalisé
  </Accordion.Item>
  <Accordion.Item summary="Résumé régulier">Contenu avec prop de résumé régulier</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## État désactivé

Les éléments d'accordéon individuels peuvent être désactivés à l'aide de la propriété `disabled`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

```jsx
export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="Élément actif">
                Cet élément est actif et peut être développé
            </Accordion.Item>
            <Accordion.Item summary="Élément désactivé" disabled>
                Cet élément est désactivé et ne peut pas être développé
            </Accordion.Item>
        </Accordion>
    );
}
```

SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="Élément actif">Cet élément est actif et peut être développé</Accordion.Item>
  <Accordion.Item summary="Élément désactivé" disabled>
    Cet élément est désactivé et ne peut pas être développé
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Propriétés

### Accordion

| Nom           | Description                               |            Type            |  Défaut  |
| :------------ | :---------------------------------------- | :------------------------: | :------: |
| size          | Taille de l'accordéon                     |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | Apparence de l'accordéon                  |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | Permet de développer plusieurs éléments simultanément |         `boolean`          |  `false`  |
| arrowPosition | Position de l'indicateur de flèche        |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | Valeur par défaut pour l'état non contrôlé | `string` `string[]` `null` |          |
| value         | Valeur actuelle pour l'état contrôlé      | `string` `string[]` `null` |          |
| onUpdate      | Fonction de rappel appelée lors du changement d'état |         `Function`         |          |
| ariaLevel     | Niveau de titre pour l'accessibilité      |          `number`          |    `3`    |
| className     | Nom de la classe CSS                      |          `string`          |          |
| qa            | Attribut HTML `data-qa`, utilisé pour les tests |          `string`          |          |

### Accordion.Item

| Nom             | Description                               |       Type        | Défaut |
| :-------------- | :---------------------------------------- | :---------------: | :----: |
| value           | Identifiant unique de l'élément           |     `string`      |        |
| summary         | En-tête de l'élément d'accordéon          | `React.ReactNode` |        |
| expanded        | État développé contrôlé                   |     `boolean`     |        |
| defaultExpanded | État développé par défaut                 |     `boolean`     |        |
| disabled        | Désactive l'élément d'accordéon           |     `boolean`     | `false` |
| keepMounted     | Garde le contenu dans le DOM même lorsqu'il est réduit |     `boolean`     |        |
| onUpdate        | Fonction de rappel appelée lors du changement d'état de l'élément |    `Function`     |        |
| className       | Nom de la classe CSS                      |     `string`      |        |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests |     `string`      |        |

### Accordion.Summary

| Nom     | Description                                                                             |                      Type                       |                                          Défaut                                          |
| :------ | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Fonction de rendu de résumé personnalisée                                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | Attribut HTML `data-qa`, utilisé pour les tests. Ne fonctionne que si `qa` est passé dans Accordion.Item |                    `string`                     | `${accordion-item}-summary` si `qa` est passé dans Accordion.Item, `disclosure-summary` si ce n'est pas le cas |

## API CSS

| Nom                           | Description                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Rembourrage en ligne (horizontal) pour l'accordéon |