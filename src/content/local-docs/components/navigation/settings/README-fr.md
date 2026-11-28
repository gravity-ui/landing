<!--GITHUB_BLOCK-->

# Settings

<!--/GITHUB_BLOCK-->

Le composant `Settings` fournit la mise en page d'un panneau de paramètres avec les fonctionnalités suivantes.

- regroupement d'éléments à un seul niveau et à deux niveaux
- filtrage du contenu du panneau par les en-têtes des éléments
- affichage de l'état de chargement et du contenu

<!--GITHUB_BLOCK-->

## Usage

One-level settings example:

```tsx
<Settings>
  <Settings.Page title="Appearance">...</Settings.Page>
  <Settings.Page title="Notifications">...</Settings.Page>
</Settings>
```

Two-level settings example:
_Note:_ `Settings` with `view=mobile` groups `Settings.Group` are ignored.

```tsx
<Settings>
  <Settings.Group groupTitle="My service">
    <Settings.Page title="Appearance">...</Settings.Page>
    <Settings.Page title="Notifications">...</Settings.Page>
  </Settings.Group>
  <Settings.Group groupTitle="General">
    <Settings.Page title="Appearance">...</Settings.Page>
    <Settings.Page title="Notifications">...</Settings.Page>
  </Settings.Group>
</Settings>
```

Pages with sections example:

```tsx
<Settings.Page title="Features" icon={'...'}>
  <Settings.Section title="Common">
    <Settings.Item title="Default VCS">...</Settings.Item>
    <Settings.Item title="Search root">...</Settings.Item>
  </Settings.Section>
  <Settings.Section title="Beta functionality">...</Settings.Section>
</Settings.Page>
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom                           | Description                                                   | Type                         | Défaut            |
| :----------------------------- | :------------------------------------------------------------ | :--------------------------- | :---------------- |
| loading                        | Indicateur de l'état de chargement                                        | `boolean`                    |                    |
| renderLoading                  | Contenu pour l'état de chargement                                     | `() => React.ReactNode`      |                    |
| renderNotFound                 | Contenu du panneau vide                                       | `() => React.ReactNode`      |                    |
| initialPage                    | Page initiale au format `/groupId/pageId`                    | `string`                     |                    |
| view                           | Changer la vue pour mobile                                        | `"normal"`, `"mobile"`       | `"normal"`         |
| onPageChange                   | Gestionnaire de changement de page                                           | `(newPage?: string) => void` |                    |
| onClose                        | Gestionnaire de fermeture des paramètres                                        | `() => void`                 |                    |
| title                          | Titre de la page                                                    | `string`                     | 'Settings'         |
| filterPlaceholder              | Texte du placeholder du filtre                                       | `string`                     | 'Search settings'  |
| emptyPlaceholder               | Texte pour filtre vide                                             | `string`                     | 'No results found' |
| enableMobileSettingsTabsScroll | En vue mobile, les onglets déborderont avec une barre de défilement au lieu de passer à la ligne | `boolean`                    |                    |

## Settings.Group

Niveau optionnel pour organiser les pages liées, par exemple "Général" par rapport à "Spécifique à l'application".

### Propriétés

| Nom       | Description        | Type     | Défaut |
| :-------- | :----------------- | :------- | :------ |
| id         | ID unique du groupe | `string` |         |
| groupTitle | En-tête du groupe    | `string` |         |

## Settings.Page

Collection de sections de paramètres liées, par exemple "Apparence" dans le groupe Général.

### Propriétés

| Nom  | Description                  | Type                                                                                        | Défaut |
| :---- | :--------------------------- | :------------------------------------------------------------------------------------------ | :------ |
| id    | ID unique de la page dans un groupe | `string`                                                                                    |         |
| title | Titre de la page                | `string`                                                                                    |         |
| icon  | Propriétés de l'icône de la page   | [`IconProps`](https://github.com/gravity-ui/uikit/tree/main/src/components/Icon#properties) |         |

## Settings.Section

Catégorie de paramètres liés, par exemple "Paramètres du thème" dans la page Apparence.

### Propriétés

| Nom      | Description                                                                   | Type              | Défaut |
| :------- | :---------------------------------------------------------------------------- | :---------------- | :----- |
| title    | Titre de la section                                                           | `string`          |        |
| header   | En-tête de la section                                                         | `React.ReactNode` |        |
| withBadge | Afficher un badge sur la section et le menu                                   | `boolean`         |        |
| hideTitle | Masquer le titre de la section. La prop est nécessaire pour masquer le titre dans les paramètres simples sur mobile | `boolean`         |        |

## Settings.Item

Paramètre individuel avec un titre et un composant de contrôle.
⚠️ S'il n'y a qu'un seul `Settings.Item` dans `Settings.Section`, le titre n'est pas affiché.

### Propriétés

| Nom                  | Description                                                | Type                                                      | Défaut     |
| :------------------- | :--------------------------------------------------------- | :-------------------------------------------------------- | :--------- |
| title                | Titre de l'élément                                         | `string`                                                  |            |
| renderTitleComponent | En-tête personnalisé de                                    | `(highlightedTitle?: React.ReactNode) => React.ReactNode` |            |
| align                | Alignement de l'élément                                    | `"top"`, `"center"`                                       | `"center"` |
| mode                 | Mise en page pour mobile. Le titre et le contrôle seront placés en ligne | `"row"`                                                   |            |
| description          | Description de l'élément                                   | `React.ReactNode`                                         |            |
