# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

Une bibliothèque de rendu de grille de tableaux de bord.

## Installation

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## Description

La bibliothèque est utilisée pour aligner des widgets dans une grille, les redimensionner, en ajouter de nouveaux et les supprimer.
Un widget est un composant React. Par exemple, du texte, des graphiques et des images.

De nouveaux widgets sont ajoutés via un système de plugins.

### Plugins

Les plugins sont nécessaires pour créer des widgets personnalisés.

### Props

```ts
type ItemManipulationCallback = (eventData: {
    layout: Layout[];
    oldItem: Layout;
    newItem: Layout;
    placeholder: Layout;
    e: MouseEvent;
    element: HTMLElement;
}) => void;

interface DashKitProps {
  config: Config;
  editMode: boolean;
  onItemEdit: ({id}: {id: string}) => void;
  onChange: (data: {config: Config; itemsStateAndParams: ItemsStateAndParams}) => void;
  onDrop: (dropProps: ItemDropProps) => void;
  onItemMountChange: (item: ConfigItem, state: {isAsync: boolead; isMounted: boolean}) => void;
  onItemRender: (item: ConfigItem) => void;

  onDragStart?: ItemManipulationCallback;
  onDrag?: ItemManipulationCallback;
  onDragStop?: ItemManipulationCallback;
  onResizeStart?: ItemManipulationCallback;
  onResize?: ItemManipulationCallback;
  onResizeStop?: ItemManipulationCallback;

  defaultGlobalParams: GlobalParams;
  globalParams: GlobalParams;
  itemsStateAndParams: ItemsStateAndParams;
  settings: SettingsProps;
  context: ContextProps;
  overlayControls?: Record<string, OverlayControlItem[]> | null;
  overlayMenuItems?: MenuItems[] | null;
  noOverlay?: boolean;

  focusable?: boolean;
  onItemFocus: (item: ConfigItem) => void;
  onItemBlur: (item: ConfigItem) => void;

  draggableHandleClassName?: string;
  getPreparedCopyItemOptions?: (options: PreparedCopyItemOptions) => PreparedCopyItemOptions;
  onCopyFulfill?: (error: null | Error, data?: PreparedCopyItemOptions) => void;
}
```

- **config**: [сonfig](#Config).
- **editMode**: Indique si le mode édition est activé.
- **onItemEdit**: Appelée lorsque vous cliquez pour éditer un widget.
- **onChange**: Appelée lorsque la configuration ou [itemsStateAndParams](#itemsStateAndParams) sont modifiés.
- **onDrop**: Appelée lorsqu'un élément est déposé depuis ActionPanel via (#DashKitDnDWrapper)
- **onItemMountChange**: Appelée lorsque l'état de montage d'un élément change
- **onItemRender**: Appelée lorsque le rendu d'un élément est terminé
- **defaultGlobalParams**, **globalParams**: [Paramètres](#Params) qui affectent tous les widgets. Dans DataLens, `defaultGlobalParams` sont les paramètres globaux définis dans les paramètres du tableau de bord. `globalParams` sont les paramètres globaux qui peuvent être définis dans l'URL.
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams).
- **settings**: Paramètres de DashKit.
- **context**: Objet qui sera transmis à tous les widgets.
- **overlayControls**: Objet qui remplace les contrôles du widget au moment de l'édition. Si non transmis, les contrôles de base seront affichés. Si `null` est passé, seul le bouton de fermeture ou un menu personnalisé sera affiché.
- **overlayMenuItems**: Éléments de menu déroulant personnalisés
- **noOverlay**: Si `true`, la superposition et les contrôles ne sont pas affichés pendant l'édition.
- **focusable**: Si `true`, les éléments de la grille seront focusables.
- **onItemFocus**: Appelée lorsque `focusable` est vrai et que l'élément est focusé.
- **onItemBlur**: Appelée lorsque `focusable` est vrai et que l'élément perd le focus.
- **draggableHandleClassName** : Nom de la classe CSS de l'élément qui rend le widget déplaçable.
- **onDragStart**: Appelée par ReactGridLayout lorsque le déplacement d'un élément commence
- **onDrag**: Appelée par ReactGridLayout pendant le déplacement d'un élément
- **onDragStop**: Appelée par ReactGridLayout lorsque le déplacement d'un élément s'arrête
- **onResizeStart**: Appelée par ReactGridLayout lorsque le redimensionnement d'un élément commence
- **onResize**: Appelée par ReactGridLayout pendant le redimensionnement d'un élément
- **onResizeStop**: Appelée par ReactGridLayout lorsque le redimensionnement d'un élément s'arrête
- **getPreparedCopyItemOptions**: Appelée pour convertir un élément copié en objet sérialisable avant de l'enregistrer dans le localStorage. Elle doit être utilisée à la place de la prop obsolète `context.getPreparedCopyItemOptions`
- **onCopyFulfill**: Appelée lorsque la copie d'un élément est terminée avec `error=null` et `data` défini en cas de succès, et avec `error: Error` sans `data` sinon

## Utilisation

### Configuration de DashKit

Avant d'utiliser `DashKit` en tant que composant React, il doit être configuré.

- Définir la langue

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- DashKit.setSettings

  Utilisé pour les paramètres globaux de DashKit (tels que les marges entre les widgets, les tailles de widgets par défaut et le menu de superposition des widgets)

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- DashKit.registerPlugins

  Enregistrement et configuration des plugins

  ```js
  import {DashKit} from '@gravity-ui/dashkit';
  import {pluginTitle, pluginText} from '@gravity-ui/dashkit';

  DashKit.registerPlugins(
    pluginTitle,
    pluginText.setSettings({
      apiHandler({text}) {
        return api.getMarkdown(text);
      },
    }),
  );

  DashKit.registerPlugins({
    type: 'custom',
    defaultLayout: {
      w: 10,
      h: 8,
    },
    renderer: function CustomPlugin() {
      return <div>Custom widget with custom controls</div>;
    },
  });
  ```

### Config

```ts
export interface Config {
  salt: string; // pour former un ID unique
  counter: number; // pour former un ID unique, ne fait qu'augmenter
  items: ConfigItem[]; // états initiaux des widgets
  layout: ConfigLayout[]; // position des widgets sur la grille https://github.com/react-grid-layout
  aliases: ConfigAliases; // alias pour les paramètres voir #Params
  connections: ConfigConnection[]; // liens entre les widgets voir #Params
}
```

Exemple de configuration :

```ts
import {DashKitProps} from '@gravity-ui/dashkit';
```

```ts
const config: DashKitProps['config'] = {
  salt: '0.46703554571365613',
  counter: 4,
  items: [
    {
      id: 'tT',
      data: {
        size: 'm',
        text: 'Légende',
        showInTOC: true,
      },
      type: 'title',
      namespace: 'default',
      orderId: 1,
    },
    {
      id: 'Ea',
      data: {
        text: 'mode _editActive',
        _editActive: true,
      },
      type: 'text',
      namespace: 'default',
    },
    {
      id: 'zR',
      data: {
        text: '### Texte',
      },
      type: 'text',
      namespace: 'default',
      orderId: 0,
    },
    {
      id: 'Dk',
      data: {
        foo: 'bar',
      },
      type: 'custom',
      namespace: 'default',
      orderId: 5,
    },
  ],
  layout: [
    {
      h: 2,
      i: 'tT',
      w: 36,
      x: 0,
      y: 0,
    },
    {
      h: 6,
      i: 'Ea',
      w: 12,
      x: 0,
      y: 2,
    },
    {
      h: 6,
      i: 'zR',
      w: 12,
      x: 12,
      y: 2,
    },
    {
      h: 4,
      i: 'Dk',
      w: 8,
      x: 0,
      y: 8,
    },
  ],
  aliases: {},
  connections: [],
};
```

Ajouter un nouvel élément à la configuration :

```ts
const newLayout = updateLayout: [
  {
    h: 6,
    i: 'Ea',
    w: 12,
    x: 0,
    y: 6,
  },
  {
    h: 4,
    i: 'Dk',
    w: 8,
    x: 0,
    y: 12,
  },
];

const newConfig = DashKit.setItem({
  item: {
    data: {
      text: `Quelques textes`,
    },
    namespace: 'default',
    type: 'text',
    // Optionnel. Si un nouvel élément doit être inséré dans la disposition actuelle avec des dimensions prédéfinies
    layout: { // L'élément actuel est inséré avant 'Ea'
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // Optionnel. Nouvelles valeurs de disposition pour les éléments existants lorsqu'un nouvel élément est déposé depuis l'ActionPanel
    updateLayout: newLayout,
  },
});
```

Modifier un élément existant dans la configuration :

```ts
const newConfig = DashKit.setItem({
  item: {
    id: 'tT', // item.id
    data: {
      size: 'm',
      text: `Nouvelle légende`,
    },
    namespace: 'default',
    type: 'title',
  },
  config: config,
});
```

Supprimer un élément de la configuration :

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const oldItemsStateAndParams: DashKitProps['itemsStateAndParams'] = {};

const {config: newConfig, itemsStateAndParams} = DashKit.removeItem({
  id: 'tT', // item.id
  config: config,
  itemsStateAndParams: this.state.itemsStateAndParams,
});
```

### Paramètres

```ts
type Params = Record<string, string | string[]>;
```

`DashKit` génère des paramètres selon les paramètres par défaut pour les widgets, les liens et les alias. Ces paramètres sont requis pour la bibliothèque [ChartKit](https://github.com/gravity-ui/chartkit).

Ordre de génération :

1. `defaultGlobalParams`
2. Paramètres de widget par défaut `item.default`
3. `globalParams`
4. Paramètres de [itemsStateAndParams](#itemsStateAndParams) selon la file d'attente.

### itemsStateAndParams

Objet qui stocke les paramètres et états des widgets ainsi qu'une file d'attente de modification des paramètres.
Il possède un champ `__meta__` pour stocker les informations de file d'attente et de métadonnées.

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // file d'attente
        version: number; // version actuelle de itemsStateAndParams
    };
}
```

Et aussi les états et paramètres des widgets :

```ts
interface ItemsStateAndParamsBase {
  [itemId: string]: {
    state?: Record<string, any>;
    params?: Params;
  };
}
```

```ts
type ItemsStateAndParams = StateAndParamsMeta & ItemsStateAndParamsBase;
```

### Menu

Vous pouvez spécifier un menu personnalisé pour les superpositions de widgets DashKit en mode édition.

```ts
type MenuItem = {
  id: string; // id unique
  title?: string; // titre de la chaîne
  icon?: ReactNode; // nœud de l'icône
  iconSize?: number | string; // taille de l'icône en px sous forme de nombre ou de chaîne avec unités
  handler?: (item: ConfigItem) => void; // gestionnaire d'action personnalisé pour l'élément
  visible?: (item: ConfigItem) => boolean; // gestionnaire de visibilité optionnel pour filtrer les éléments du menu
  className?: string; // propriété de classe personnalisée
};

// utiliser un tableau d'éléments de menu dans les paramètres
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />

[obsolète]
// la propriété overlayMenuItems a une priorité plus élevée que le menu setSettings
DashKit.setSettings({menu: [] as Array<MenuItem>});
```

### Éléments déplaçables depuis l'ActionPanel

#### DashKitDnDWrapper

```ts
type DraggedOverItem = {
  h: number;
  w: number;
  type: string;
  parent: string;
  i?: number;
};

interface DashKitDnDWrapperProps {
  dragImageSrc?: string;
  onDragStart?: (dragProps: ItemDragProps) => void;
  onDragEnd?: () => void;
  onDropDragOver?: (draggedItem: DraggedOverItem, sharedItem: DraggedOverItem | null) => void | boolean;
}
```

- **dragImageSrc**: Aperçu de l'image de glisser-déposer, par défaut une image png transparente de 1px en base64 est utilisée.
- **onDragStart**: Callback appelé lorsqu'un élément est glissé depuis l'ActionPanel.
- **onDragEnd**: Callback appelé lorsqu'un élément est déposé ou que le glisser-déposer est annulé.

```ts
type ItemDragProps = {
    type: string; // Type de plugin
    layout?: { // Optionnel. Taille de l'élément pour l'aperçu et l'initialisation
        w?: number;
        h?: number;
    };
    extra?: any; // Contexte utilisateur personnalisé
};
```

```ts
type ItemDropProps = {
    commit: () => void; // Le callback doit être appelé après que toutes les opérations de configuration soient effectuées
    dragProps: ItemDragProps; // Propriétés de glisser-déposer de l'élément
    itemLayout: ConfigLayout; // Dimensions calculées de la disposition de l'élément
    newLayout: ConfigLayout[]; // Nouvelle disposition après le dépôt de l'élément
};
```


#### Exemple :

```jsx
const overlayMenuItems = [
  {
    id: 'chart',
    icon: <Icon data={ChartColumn} />,
    title: 'Graphique',
    qa: 'chart',
    dragProps: { // ItemDragProps
        type: 'custom', // Type de plugin enregistré
    },
  }
]

const onDrop = (dropProps: ItemDropProps) => {
  // ... ajouter l'élément à votre configuration
  dropProps.commit();
}

<DashKitDnDWrapper>
  <DashKit editMode={true} config={config} onChange={onChange} onDrop={onDrop} />
  <ActionPanel items={overlayMenuItems} />
</DashKitDnDWrapper>
```

### API CSS

| Nom                                           | Description           |
| :--------------------------------------------- | :-------------------- |
| Variables du panneau d'actions                         |                       |
| `--dashkit-action-panel-color`                 | Couleur de fond      |
| `--dashkit-action-panel-border-color`          | Couleur de bordure          |
| `--dashkit-action-panel-border-radius`         | Rayon de bordure         |
| Variables des éléments du panneau d'actions                    |                       |
| `--dashkit-action-panel-item-color`            | Couleur de fond       |
| `--dashkit-action-panel-item-text-color`       | Couleur du texte       |
| `--dashkit-action-panel-item-color-hover`      | Couleur de fond au survol |
| `--dashkit-action-panel-item-text-color-hover` | Couleur du texte au survol      |
| Variables de la surcouche                              |                       |
| `--dashkit-overlay-border-color`               | Couleur de bordure          |
| `--dashkit-overlay-color`                      | Couleur de fond                      |
| `--dashkit-overlay-opacity`                    | Opacité               |
| Variables des éléments de la grille                            |                       |
| `--dashkit-grid-item-edit-opacity`             | Opacité               |
| `--dashkit-grid-item-border-radius`            | Rayon de bordure            |
| Variables des espaces réservés                            |                       |
| `--dashkit-placeholder-color`                  | Couleur de fond                      |
| `--dashkit-placeholder-opacity`                | Opacité               |

#### Exemple d'utilisation

```css
.custom-theme-wrapper {
  --dashkit-grid-item-edit-opacit: 1;
  --dashkit-overlay-color: var(--g-color-base-float);
  --dashkit-overlay-border-color: var(--g-color-base-float);
  --dashkit-overlay-opacity: 0.5;

  --dashkit-action-panel-border-color: var(--g-color-line-info);
  --dashkit-action-panel-color: var(--g-color-base-float-accent);
  --dashkit-action-panel-border-radius: var(--g-border-radius-xxl);
}
```

```tsx
// ....

const CustomThemeWrapper = (props: {
  dashkitProps: DashkitProps;
  actionPanelProps: ActionPanelProps;
}) => {
  return (
    <div className="custom-theme-wrapper">
      <Dashkit {...props.dashkitProps} />
      <ActionPanel {...props.actionPanelProps} />
    </div>
  );
};
```

## Développement

### Compilation et surveillance

- Compiler les dépendances `npm ci`
- Compiler le projet `npm run build`
- Compiler le storybook `npm run start`

Par défaut, le storybook s'exécute sur `http://localhost:7120/`.
Les nouveaux changements du projet ne sont pas toujours pris en compte lorsque le storybook est en cours d'exécution, il est donc préférable de recompiler le projet manuellement et de redémarrer le storybook.


### Exemple de configuration nginx pour le développement sur une machine de développement

```bash
server {
    server_name dashkit.username.ru;

    include common/ssl;

    access_log /home/username/logs/common.access.log;
    error_log /home/username/logs/common.error.log;

    root /home/username/projects/dashkit;

    location / {
        try_files $uri @node;
    }

    location @node {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://127.0.0.1:7120;
        proxy_redirect off;
    }
}

```