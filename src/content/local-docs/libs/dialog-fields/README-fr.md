## Description courte

Le composant `DFDialog` a pour but de faciliter la création de formulaires, en utilisant `react-final-form` en interne.
Il prend en charge plusieurs types de champs prédéfinis, mais l'utilisateur peut l'étendre en enregistrant de nouveaux champs à l'aide de `registerDialogControl`.

### Contrôles

- [Contrôles de base](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - texte statique
  - `text` - texte modifiable
  - `multi-text` - tableau de chaînes de caractères défini par l'utilisateur
  - `checkbox` - case à cocher
  - `tumbler` - interrupteur
  - `radio` - bouton radio
  - `editable-list` - liste de chaînes de caractères supprimables
  - `multi-editable-list` - liste multiple de chaînes de caractères supprimables
  - `text area` - zone de texte
  - `select` - liste déroulante
  - `block` - permet d'ajouter un `ReactNode`
- [Enregistrement de contrôles personnalisés](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### Fonctionnalités

- Vue intégrée et modale
- [Formulaire à un onglet](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) et [formulaires à plusieurs onglets](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [Onglets verticaux/horizontaux](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [Champs et onglets masqués](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [Champs liés par leurs valeurs](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [Validation au niveau du champ](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [Validation au niveau du formulaire](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [Onglets virtualisés](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [Onglets clonables](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [Champs groupés](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## Installation

```bash
$ npm install @gravity-ui/dialog-fields
```

Selon votre gestionnaire de paquets, vous devrez peut-être installer manuellement les `peerDependencies`.

Les onglets verticaux utilisent les points d'entrée de glisser-déposer et de virtualisation d'UIKit,
et les contrôles Select virtualisent les listes de 50 options ou plus.
Enveloppez votre application dans le `Provider` d'UIKit et importez `@gravity-ui/uikit/styles/styles.css`.

## Migration vers UIKit 8

Remplacez le `ThemeProvider` et le `MobileProvider` racine de l'application par `Provider`.
Déplacez leurs props vers `Provider`, à l'exception de la prop supprimée `__experimentalMobileModals` :

```diff
-import {ThemeProvider, MobileProvider} from '@gravity-ui/uikit';
+import {Provider} from '@gravity-ui/uikit';

-<ThemeProvider theme="light">
-  <MobileProvider>
-    <App />
-  </MobileProvider>
-</ThemeProvider>
+<Provider theme="light">
+  <App />
+</Provider>
```

Si votre application utilise déjà `Provider`, aucun wrapper supplémentaire autour de `DFDialog`
n'est nécessaire. `DFDialog` conserve ses props `visible`, `size` et `onClose` ; les changements d'UIKit
concernant `Dialog.open`, `maxWidth` et `onOpenChange` sont gérés à l'intérieur de la bibliothèque.

Vérifiez les styles personnalisés et les instantanés visuels :

- L'espacement de l'en-tête, du corps et du pied de page du dialogue a changé, affectant les formulaires modaux et intégrés.
- Les boutons de pied de page pour ordinateur de bureau s'adaptent désormais à leur contenu au lieu d'avoir une largeur minimale de 128px.
  Pour restaurer la largeur précédente, passez `{width: 'max', className: 'form-action'}` via
  `footerProps.propsButtonApply` et `footerProps.propsButtonCancel`, et définissez
  `.form-action { min-width: 128px; }` dans votre feuille de style.
- Les contrôles de case à cocher de taille `l` utilisent désormais une étiquette de 13px au lieu de 15px et un indicateur de 18px
  au lieu de 17px. Les couleurs du thème ont également légèrement changé.
- Les onglets verticaux utilisent la nouvelle `List` sans composants obsolètes. Les sélecteurs personnalisés ciblant
  l'ancien balisage `.g-list__item` doivent être révisés. Le callback `onOrderChanged({oldIndex, newIndex})`
  est préservé.

Les contrôles personnalisés et les props UIKit passés via les définitions de champs doivent suivre le
[guide de migration UIKit](https://github.com/gravity-ui/uikit/blob/main/docs/migration-to-v8.md).
En particulier, `Select` n'accepte plus `virtualizationThreshold` ; le contrôle `select` intégré
utilise `ListVirtualizer` avec un seuil de 50 options.

## Utilisation

Cet exemple inclut le fournisseur d'application. Si votre application possède déjà un `Provider` racine,
omettez le wrapper montré ici.

```tsx
import {DFDialog} from '@gravity-ui/dialog-fields';
import {Provider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
    <Provider theme="light">
      <DFDialog<FormValues>
        visible={true}
        headerProps={{
          title: 'Mon formulaire',
        }}
        onAdd={(form) => {
          console.log(form.getState().values);
          return Promise.resolve();
        }}
        fields={[
          {
            name: 'firstName',
            type: 'text',
            caption: 'Prénom',
            tooltip: 'Description du champ prénom',
          },
          {
            name: 'lastName',
            type: 'text',
            caption: 'Nom',
            tooltip: 'Description du champ nom',
          },
        ]}
      />
    </Provider>
  );
}
```

### Visibilité conditionnelle

Les champs et les onglets prennent en charge `visibilityCondition`. Avec une chaîne `when`, `isActive`
reçoit la valeur de ce champ :

```ts
visibilityCondition: {
  when: 'register',
  isActive: (value) => Boolean(value),
}
```

Utilisez un tableau de noms de champs pour dépendre de plusieurs valeurs. `isActive` reçoit les
valeurs comme arguments séparés dans le même ordre que `when` :

```ts
visibilityCondition: {
  when: ['multiConsumer', 'register'],
  isActive: (multiConsumer, register) => Boolean(multiConsumer && register),
}
```

Les noms sont des chemins depuis la racine du formulaire, y compris les préfixes d'onglets tels que
`general.register`. La visibilité se met à jour lorsque tout champ référencé change.
Un champ masqué par sa condition est démonté, pas seulement visuellement caché.

Voir plus d'exemples dans [storybook](https://preview.yandexcloud.dev/dialog-fields).