GRAVITY_TRANSLATION_BLOCK_0_END

Ceci est un composant pour les notifications ajustables, également appelées toasts.

## Utilisation de Toaster

Pour afficher des toasts dans votre application, vous devez envelopper votre application dans `ToasterProvider`.

```jsx
import {Toaster, ToasterComponent, ToasterProvider} from '@gravity-ui/uikit';

const toaster = new Toaster();

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <ToasterProvider toaster={toaster}>
    <App />
    <ToasterComponent className="optional additional classes" />
  </ToasterProvider>,
);
```

`toaster` ici est l'instance de la classe, qui détient l'état avec tous vos toasts et est utilisée en interne dans le hook `useToaster` et le HOC `withToaster`.

Mais vous pouvez également utiliser `toaster` directement dans différentes parties de votre application (en dehors de React) :

```js
toaster.add({
  title: 'Toaster est là',
});
```

Vous devez utiliser la même instance de `Toaster` dans React et en dehors pour afficher tous les toasts dans le même conteneur à l'écran.
Vous pouvez implémenter cette logique vous-même ou importer une instance prête à l'emploi du module `toaster-singleton`.

```js
import {toaster} from '@gravity-ui/uikit/toaster-singleton';
```

## Utilisation de `useToaster`

Vous pouvez afficher des toasts avec le hook `useToaster` dans vos composants d'application :

```jsx
import {useToaster} from '@gravity-ui/uikit';
import {useEffect} from 'react';

export function FoobarComponent() {
  const {add} = useToaster();

  useEffect(() => {
    add({
      title: 'Toaster est là',
    });
  }, []);

  return null;
}
```

Le hook renvoie les méthodes `add`, `update`, `remove` et `removeAll` (voir ci-dessous pour plus de détails).

## Utilisation de `Toaster` comme HOC

Pour les composants de classe, vous pouvez utiliser le HOC `withToaster`, qui injectera la propriété `toaster` dans le composant.

```jsx
import {Component} from 'react';
import {withToaster} from '@gravity-ui/uikit';

class FoobarComponent extends Component {
  render() {
    this.props.toaster.add({});
  }
}

const FoobarWithToaster = withToaster()(FoobarComponent);
```

## Propriétés

Ce sont les props du composant `ToasterComponent`.

| Nom       | Description                                         |   Type    | Défaut |
| :-------- | :-------------------------------------------------- | :-------: | :-----: |
| className | Nom de classe personnalisé à ajouter au conteneur du composant | `string`  |         |
| mobile    | Configuration qui gère les vues mobile/desktop      | `boolean` |         |
| hasPortal | Rend le toaster à l'intérieur d'un `Portal` lorsqu'il est activé | `boolean` | `true`  |

## Arguments du constructeur

| Paramètre | Type      | Défaut     | Description                                         |
| :-------- | :-------- | :---------- | :-------------------------------------------------- |
| className | `string`  | `undefined` | Nom de classe personnalisé à ajouter au conteneur du composant |
| mobile    | `boolean` | `false`     | Configuration qui gère les vues mobile/desktop      |

## Méthodes

| Nom de la méthode               | Paramètres             | Description                                                                                                                             |
| :---------------------------- | :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| add(toastOptions)             | `Object`               | Crée une nouvelle notification                                                                                                          |
| remove(name)                  | `string`               | Supprime manuellement une notification existante                                                                                        |
| removeAll()                   |                        | Supprime toutes les notifications existantes                                                                                            |
| update(name, overrideOptions) | `string`, `Object`     | Modifie le contenu d'une notification déjà rendue. Dans `overrideOptions`, les champs `title`, `type`, `content` et `actions` sont optionnels. |
| has(name)                     | `string`               | Vérifie si un toast avec un nom spécifique est présent dans la liste des toasts affichés                                                |

## Plus sur `add`

Il accepte l'argument `toastOptions` avec les détails de la notification en cours :

| Paramètre  | Type                                    | Requis | Défaut      | Description                                                                                                                                                                                                                                              |
| :--------- | :-------------------------------------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string`                                | oui      |             | Nom unique de la notification. Les notifications avec des noms identiques sont regroupées en une seule.                                                                                                                                                 |
| title      | `string`                                |          |             | Titre de la notification                                                                                                                                                                                                                                 |
| className  | `string`                                |          |             | Classe CSS                                                                                                                                                                                                                                               |
| autoHiding | `number` ou `false`                     |          | 5000        | Nombre de millisecondes avant de masquer la notification. Utilisez `false` pour désactiver la disparition automatique après un délai d'attente.                                                                                                        |
| content    | `node`                                  |          | `undefined` | Contenu de la notification. Cela peut être [tout ce qui peut être rendu : nombres, chaînes de caractères, éléments ou un tableau](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes).                                                    |
| theme      | `string`                                |          | `"normal"`  | Thème de la notification. Les valeurs possibles sont `"normal"`, `"info"`, `"success"`, `"warning"`, `danger` et `"utility"`. Si `theme` est défini sur autre chose que `"normal"`, l'icône sera ajoutée au titre de la notification. _Par défaut, il n'y a pas d'icône_. |
| isClosable | `boolean`                               |          | `true`      | Configuration qui gère la visibilité de l'icône X, permettant à l'utilisateur de fermer la notification.                                                                                                                                                 |
| actions    | `ToastAction[] \| () => ReactElement`   |          | `undefined` | Tableau d'[actions](./types.ts#L9) qui sont affichées après `content`, ou une fonction de rappel qui renvoie les actions requises.                                                                                                                        |
| renderIcon | `(toastProps: ToastProps) => ReactNode` |          | `undefined` | Utilisé pour personnaliser l'icône de la notification. Le comportement basé sur le type est utilisé par défaut.                                                                                                                                          |

Chaque `action` est un objet avec les paramètres suivants :

| Paramètre        | Type                                           | Requis | Défaut   | Description                                                              |
| :--------------- | :--------------------------------------------- | :----- | :------- | :----------------------------------------------------------------------- |
| label            | `string`                                       | oui    |          | Description de l'action                                                  |
| onClick          | `() => void`                                   | oui    |          | Gestionnaire de clic sur l'action                                        |
| view             | [`ButtonView`](../Button/README.md#properties) |        | `outlined` | Apparence de l'action, identique à `view` pour `<Button/>`             |
| removeAfterClick | `boolean`                                      |        | `true`   | Active ou désactive la fermeture de la notification après avoir cliqué sur l'action |

## API CSS

| Nom                       | Description     |
| :------------------------ | :-------------- |
| `--g-toaster-width`       | Largeur du conteneur |
| `--g-toaster-item-padding`| Rembourrage de l'élément |
| `--g-toaster-item-gap`    | Espacement entre les éléments |