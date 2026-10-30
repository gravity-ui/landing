## Description courte

Le composant `DFDialog` a pour but de faciliter la création de formulaires, il utilise `react-final-form` en interne.
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
  - `select` - sélection
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
# Utilisez la version requise de react/react-dom si vous ne les avez pas encore installés
$ npm install @gravity-ui/dialog-fields react@18 react-dom@18
```

Selon votre gestionnaire de paquets, vous devrez peut-être installer manuellement les `peerDependencies`.

## Utilisation

```ts
import {DFDialog, FormApi} from '@gravity-ui/dialog-fields';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
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
  );
}
```

### Visibilité conditionnelle

Les champs et les onglets prennent en charge `visibilityCondition`. Avec une chaîne de caractères `when`, `isActive`
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

Les noms sont des chemins depuis la racine du formulaire, y compris les préfixes d'onglet tels que
`general.register`. La visibilité se met à jour lorsque tout champ référencé change.
Un champ masqué par sa condition est démonté, pas seulement visuellement caché.

Voir plus d'exemples dans [storybook](https://preview.yandexcloud.dev/dialog-fields).