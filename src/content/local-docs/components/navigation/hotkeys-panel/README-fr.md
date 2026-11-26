Un panneau de navigation pour la documentation des raccourcis clavier.
Le panneau affiche un ensemble de raccourcis clavier pour votre application avec une description de leur objectif.

```ts
import {HotkeysPanel} from '@gravity-ui/navigation';
```

## Propriétés
GRAVITY_TRANSLATION_BLOCK_0_END

| Propriété                | Type            | Requis | Défaut | Description                                                                  |
| :---------------------- | :-------------- | :------: | :------ | :--------------------------------------------------------------------------- |
| hotkeys                 | `Array`         |   oui    |         | Liste des groupes de raccourcis clavier                                      |
| title                   | `ReactNode`     |          |         | Le titre du panneau                                                          |
| togglePanelHotkey       | `String`        |          |         | Le raccourci clavier pour ouvrir le panneau                                  |
| open                    | `Boolean`       |   oui    |         | Indique si le tiroir est ouvert ou non                                       |
| onClose                 | `Function`      |          |         | Gestionnaire de fermeture du tiroir                                          |
| filterable              | `Boolean`       |          | true    | Indique si le champ de recherche doit être affiché ou non                    |
| filterPlaceholder       | `String`        |          |         | Placeholder du champ de recherche                                            |
| filterClassName         | `String`        |          |         | Nom de classe du champ de recherche                                          |
| leftOffset              | `Number/String` |          |         | Décalage gauche du tiroir                                                    |
| topOffset               | `Number/String` |          |         | Décalage supérieur du tiroir                                                 |
| emptyState              | `ReactNode`     |          |         | Placeholder pour l'absence de résultats de recherche                         |
| className               | `String`        |          |         | Nom de classe du tiroir                                                      |
| drawerItemClassName     | `String`        |          |         | Nom de classe de l'élément du tiroir                                         |
| titleClassName          | `String`        |          |         | Nom de classe du titre                                                       |
| itemContentClassName    | `String`        |          |         | Nom de classe du contenu de l'élément de liste                               |
| listClassName           | `String`        |          |         | Nom de classe de la liste                                                    |
| platform                | `'pc'`/`'mac'`  |          | auto    | Plateforme pour le format d'affichage des raccourcis clavier                 |
| drawerProps             | `DrawerProps`   |          |         | Propriétés supplémentaires pour le composant `Drawer` (style, conteneur, hideVeil, etc.) |
| disableNavigationOffset | `Boolean`       |          | false   | Indique s'il faut désactiver le décalage automatique basé sur la taille de `AsideHeader` |

## API CSS

| Nom                                  | Description                       | Défaut |
| :----------------------------------- | :-------------------------------- | :----: |
| `--hotkeys-panel-width`              | La largeur du panneau             | `400px` |
| `--hotkeys-panel-vertical-padding`   | Les paddings haut et bas du panneau | `18px`  |
| `--hotkeys-panel-horizontal-padding` | Les paddings gauche et droit du panneau | `24px`  |

### Utilisation

Voir l'exemple storybook `src/components/HotkeysPanel/__stories__/HotkeysPanelShowcase`.