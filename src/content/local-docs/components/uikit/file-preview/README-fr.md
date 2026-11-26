`FilePreview` est une carte d'aperçu compacte pour un seul fichier, affichant une miniature ou une icône de type de fichier avec le nom du fichier et des actions optionnelles.

```tsx
import {FilePreview} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Propriétés

| Nom                | Description                                                                                                                              | Type                  | Requis | Défaut    |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- | :-------------------- | :----: | :-------- |
| file                | L'interface `File` fournit des informations sur les fichiers et permet au JavaScript d'une page Web d'accéder à leur contenu. | `File`                |   ✓    |           |
| imageSrc            | Source pour l'aperçu de l'image                                                                                                          | `string`              |        |           |
| description         | Description affichée sous le nom du fichier                                                                                              | `string`              |        |           |
| selected            | Activer ou désactiver les styles sélectionnés                                                                                            | `boolean`             |        | `false`   |
| className           | Nom de classe pour le conteneur de fichier                                                                                               | `string`              |        |           |
| onClick             | Gestionnaire de clic pour le conteneur de fichier                                                                                        | `function`            |        |           |
| [actions](#actions) | Un tableau d'actions interactives                                                                                                        | `FilePreviewAction[]` |        | `[]`      |
| view                | Le mode d'affichage de l'aperçu du fichier (le texte n'est pas visible pour la vue `compact`)                                            | `default`, `compact`  |        | `default` |

#### Actions

Pour un fichier, vous pouvez prescrire des actions qui seront visibles lorsque vous le survolerez.

| Nom              | Description                     | Type                                                                                                                                                       | Requis | Défaut |
| ---------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | :----: | ------ |
| id                | Identifiant de l'action                       | `String`                                                                                                                                                   |        |         |
| icon              | Icône de l'action                     | `React.ReactNode`                                                                                                                                          |   ✓    |         |
| title             | Indice de l'action au survol            | `String`                                                                                                                                                   |   ✓    |         |
| onClick           | Gestionnaire de clic de l'action            | `React.MouseEventHandler<HTMLElement>` pour la vue par défaut et `(event: React.MouseEvent<HTMLElement, MouseEvent> or KeyboardEvent) => void` pour la vue compacte |        |         |
| href              | Lien du bouton d'action              | `String`                                                                                                                                                   |        |         |
| disabled          | Action désactivée                 | `boolean`                                                                                                                                                  |        |         |
| extraProps        | Propriétés supplémentaires du bouton d'action  | `ButtonButtonProps or ButtonLinkProps` (fonctionne uniquement pour la vue de bureau par défaut)                                                                           |        |         |
| tooltipExtraProps | Propriétés supplémentaires de l'infobulle d'action | `Omit<ActionTooltipProps, 'title' or 'children'>` (fonctionne uniquement pour la vue de bureau par défaut)                                                                |        |         |