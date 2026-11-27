<!--GITHUB_BLOCK-->

# FilePreview

<!--/GITHUB_BLOCK-->

`FilePreview` est une carte d'aperçu compacte pour un seul fichier, affichant une miniature ou une icône de type de fichier avec le nom du fichier et des actions optionnelles.

```tsx
import {FilePreview} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

```tsx
<FilePreview
  file={{name: 'my-file.docs', type: 'text/docs'} as File}
  onClick={() => action('onClick')}
  actions={[
    {
      icon: <Link width={14} height={14} />,
      title: 'Link',
      onClick: () => action('onLink'),
    },
    {
      icon: <Xmark width={14} height={14} />,
      title: 'Close',
      onClick: () => action('onClose'),
    },
  ]}
/>
```

<!-- Storybook example -->

<FilePreviewExample />

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {Link, Xmark} from '@gravity-ui/icons';
import {FilePreview} from '@gravity-ui/uikit';

export default function () {
    return (
        <FilePreview
            file={{name: 'my-file.docs', type: 'text/docs'} as File}
            onClick={() => console.log('onClick')}
            actions={[
                {
                    icon: <Link width={14} height={14} />,
                    title: 'Link',
                    onClick: () => console.log('onLink'),
                },
                {
                    icon: <Xmark width={14} height={14} />,
                    title: 'Close',
                    onClick: () => console.log('onClose'),
                },
            ]}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

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
