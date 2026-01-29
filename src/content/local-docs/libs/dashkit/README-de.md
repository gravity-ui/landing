# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

Eine Bibliothek zum Rendern von Dashboard-Gittern.

## Installation

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## Beschreibung

Die Bibliothek wird verwendet, um Widgets in einem Raster anzuordnen, ihre Größe zu ändern, neue hinzuzufügen und sie zu löschen.
Das Widget ist eine React-Komponente. Zum Beispiel Text, Grafiken und Bilder.

Neue Widgets werden über ein Plugin-System hinzugefügt.

### Plugins

Plugins sind erforderlich, um benutzerdefinierte Widgets zu erstellen.

### Props

```ts
type ItemManipulationCallback = (eventData: {
    layout: Layouts;
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
- **editMode**: Ob der Bearbeitungsmodus aktiviert ist.
- **onItemEdit**: Wird aufgerufen, wenn Sie auf ein Widget klicken, um es zu bearbeiten.
- **onChange**: Wird aufgerufen, wenn sich die Konfiguration oder [itemsStateAndParams](#itemsStateAndParams) ändern.
- **onDrop**: Wird aufgerufen, wenn ein Element aus der ActionPanel über (#DashKitDnDWrapper) fallen gelassen wird.
- **onItemMountChange**: Wird aufgerufen, wenn sich der Mount-Status eines Elements ändert.
- **onItemRender**: Wird aufgerufen, wenn das Rendern eines Elements abgeschlossen ist.
- **defaultGlobalParams**, **globalParams**: [Parameter](#Params), die alle Widgets beeinflussen. In DataLens sind `defaultGlobalParams` globale Parameter, die in den Dashboard-Einstellungen festgelegt sind. `globalParams` sind globale Parameter, die in der URL festgelegt werden können.
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams).
- **settings**: DashKit-Einstellungen.
- **context**: Objekt, das an alle Widgets weitergegeben wird.
- **overlayControls**: Objekt, das die Widget-Steuerelemente während der Bearbeitung überschreibt. Wenn nicht übergeben, werden grundlegende Steuerelemente angezeigt. Wenn `null` übergeben wird, werden nur die Schließen-Schaltfläche oder ein benutzerdefiniertes Menü angezeigt.
- **overlayMenuItems**: Benutzerdefinierte Dropdown-Menüelemente.
- **noOverlay**: Wenn `true`, werden Overlay und Steuerelemente während der Bearbeitung nicht angezeigt.
- **focusable**: Wenn `true`, sind die Gitterelemente fokussierbar.
- **onItemFocus**: Wird aufgerufen, wenn `focusable` true ist und ein Element fokussiert wird.
- **onItemBlur**: Wird aufgerufen, wenn `focusable` true ist und ein Element den Fokus verliert.
- **draggableHandleClassName**: CSS-Klassenname des Elements, das das Widget ziehbar macht.
- **onDragStart**: ReactGridLayout wird aufgerufen, wenn das Ziehen eines Elements beginnt.
- **onDrag**: ReactGridLayout wird während des Ziehens eines Elements aufgerufen.
- **onDragStop**: ReactGridLayout wird aufgerufen, wenn das Ziehen eines Elements beendet wird.
- **onResizeStart**: ReactGridLayout wird aufgerufen, wenn die Größenänderung eines Elements beginnt.
- **onResize**: ReactGridLayout wird während der Größenänderung eines Elements aufgerufen.
- **onResizeStop**: ReactGridLayout wird aufgerufen, wenn die Größenänderung eines Elements beendet wird.
- **getPreparedCopyItemOptions**: Wird aufgerufen, um ein kopiertes Element in ein serialisierbares Objekt zu konvertieren, bevor es im Local Storage gespeichert wird. Dies sollte anstelle des veralteten `context.getPreparedCopyItemOptions`-Props verwendet werden.
- **onCopyFulfill**: Wird aufgerufen, wenn das Kopieren eines Elements abgeschlossen ist, mit `error=null` und definierten `data` bei erfolgreicher Ausführung und mit `error: Error` ohne `data` andernfalls.

## Verwendung

### DashKit-Konfiguration

Bevor Sie `DashKit` als React-Komponente verwenden, muss es konfiguriert werden.

- Sprache festlegen

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- DashKit.setSettings

  Wird für globale DashKit-Einstellungen verwendet (z. B. Abstände zwischen Widgets, Standard-Widget-Größen und Widget-Overlay-Menü).

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- DashKit.registerPlugins

  Registrierung und Konfiguration von Plugins

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
  salt: string; // zur Bildung einer eindeutigen ID
  counter: number; // zur Bildung einer eindeutigen ID, erhöht sich nur
  items: ConfigItem[]; // anfängliche Widget-Zustände
  layout: ConfigLayout[]; // Widget-Position im Raster https://github.com/react-grid-layout
  aliases: ConfigAliases; // Aliase für Parameter siehe #Params
  connections: ConfigConnection[]; // Links zwischen Widgets siehe #Params
}
```

Config-Beispiel:

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
        text: 'Überschrift',
        showInTOC: true,
      },
      type: 'title',
      namespace: 'default',
      orderId: 1,
    },
    {
      id: 'Ea',
      data: {
        text: 'modus _editActive',
        _editActive: true,
      },
      type: 'text',
      namespace: 'default',
    },
    {
      id: 'zR',
      data: {
        text: '### Text',
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

Fügen Sie ein neues Element zur Konfiguration hinzu:

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
      text: `Einige Texte`,
    },
    namespace: 'default',
    type: 'text',
    // Optional. Wenn ein neues Element mit vordefinierten Abmessungen in das aktuelle Layout eingefügt werden muss
    layout: { // Aktuelles Element wird vor 'Ea' eingefügt
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // Optional. Neue Layoutwerte für vorhandene Elemente, wenn ein neues Element aus der Aktionsleiste gezogen wird
    updateLayout: newLayout,
  },
});
```

Ändern Sie ein vorhandenes Element in der Konfiguration:

```ts
const newConfig = DashKit.setItem({
  item: {
    id: 'tT', // item.id
    data: {
      size: 'm',
      text: `Neue Überschrift`,
    },
    namespace: 'default',
    type: 'title',
  },
  config: config,
});
```

Löschen Sie ein Element aus der Konfiguration:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const oldItemsStateAndParams: DashKitProps['itemsStateAndParams'] = {};

const {config: newConfig, itemsStateAndParams} = DashKit.removeItem({
  id: 'tT', // item.id
  config: config,
  itemsStateAndParams: this.state.itemsStateAndParams,
});
```

### Parameter

```ts
type Params = Record<string, string | string[]>;
```

`DashKit` generiert Parameter gemäß den Standardparametern für Widgets, Links und Aliase. Diese Parameter sind für die [ChartKit](https://github.com/gravity-ui/chartkit)-Bibliothek erforderlich.

Reihenfolge der Generierung:

1. `defaultGlobalParams`
2. Standard-Widget-Parameter `item.default`
3. `globalParams`
4. Parameter aus [itemsStateAndParams](#itemsStateAndParams) gemäß der Warteschlange.

### itemsStateAndParams

Objekt, das Widget-Parameter und -Status sowie eine Warteschlange für Parameteränderungen speichert.
Es hat ein `__meta__`-Feld zum Speichern von Warteschlangen- und Metainformationen.

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // Warteschlange
        version: number; // aktuelle Version itemsStateAndParams
    };
}
```

Und auch Widget-Status und -Parameter:

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

### Menü

Sie können ein benutzerdefiniertes Overlay-Menü für DashKit-Widgets im Bearbeitungsmodus angeben

```ts
type MenuItem = {
  id: string; // eindeutige ID
  title?: string; // String-Titel
  icon?: ReactNode; // Knoten des Icons
  iconSize?: number | string; // Icon-Größe in px als Zahl oder als String mit Einheiten
  handler?: (item: ConfigItem) => void; // Handler für benutzerdefinierte Elementaktionen
  visible?: (item: ConfigItem) => boolean; // optionaler Sichtbarkeits-Handler zum Filtern von Menüelementen
  className?: string; // benutzerdefinierte Klassen-Eigenschaft
};

// Array von Menüelementen in den Einstellungen verwenden
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />

[veraltet]
// overlayMenuItems-Eigenschaft hat höhere Priorität als das setSettings-Menü
DashKit.setSettings({menu: [] as Array<MenuItem>});
```

### Ziehbare Elemente aus der Aktionsleiste

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

- **dragImageSrc**: Vorschau des Ziehbilds, standardmäßig wird ein transparentes 1px PNG als Base64 verwendet
- **onDragStart**: Callback, der aufgerufen wird, wenn ein Element aus der Aktionsleiste gezogen wird
- **onDragEnd**: Callback, der aufgerufen wird, wenn das Element fallen gelassen oder der Ziehvorgang abgebrochen wird

```ts
type ItemDragProps = {
    type: string; // Plugin-Typ
    layout?: { // Optional. Layout-Elementgröße für Vorschau und Initialisierung
        w?: number;
        h?: number;
    };
    extra?: any; // Benutzerdefinierter Kontext
};
```

```ts
type ItemDropProps = {
    commit: () => void; // Callback, der nach Abschluss aller Konfigurationsoperationen aufgerufen werden sollte
    dragProps: ItemDragProps; // Item-Drag-Props
    itemLayout: ConfigLayout; // Berechnete Layout-Dimensionen des Elements
    newLayout: ConfigLayout[]; // Neues Layout nach dem Ablegen des Elements
};
```


#### Beispiel:

```jsx
const overlayMenuItems = [
  {
    id: 'chart',
    icon: <Icon data={ChartColumn} />,
    title: 'Chart',
    qa: 'chart',
    dragProps: { // ItemDragProps
        type: 'custom', // Registrierter Plugin-Typ
    },
  }
]

const onDrop = (dropProps: ItemDropProps) => {
  // ... Element zu Ihrer Konfiguration hinzufügen
  dropProps.commit();
}

<DashKitDnDWrapper>
  <DashKit editMode={true} config={config} onChange={onChange} onDrop={onDrop} />
  <ActionPanel items={overlayMenuItems} />
</DashKitDnDWrapper>
```

### CSS API

| Name                                           | Beschreibung           |
| :--------------------------------------------- | :-------------------- |
| Action panel Variablen                         |                       |
| `--dashkit-action-panel-color`                 | Hintergrundfarbe      |
| `--dashkit-action-panel-border-color`          | Rahmenfarbe           |
| `--dashkit-action-panel-border-radius`         | Rahmenradius          |
| Action panel Element Variablen                 |                       |
| `--dashkit-action-panel-item-color`            | Hintergrundfarbe      |
| `--dashkit-action-panel-item-text-color`       | Textfarbe             |
| `--dashkit-action-panel-item-color-hover`      | Hintergrundfarbe bei Hover |
| `--dashkit-action-panel-item-text-color-hover` | Textfarbe bei Hover   |
| Overlay Variablen                              |                       |
| `--dashkit-overlay-border-color`               | Rahmenfarbe           |
| `--dashkit-overlay-color`                      | Hintergrundfarbe      |
| `--dashkit-overlay-opacity`                    | Deckkraft             |
| Grid Element Variablen                         |                       |
| `--dashkit-grid-item-edit-opacity`             | Deckkraft             |
| `--dashkit-grid-item-border-radius`            | Rahmenradius          |
| Platzhalter Variablen                          |                       |
| `--dashkit-placeholder-color`                  | Hintergrundfarbe      |
| `--dashkit-placeholder-opacity`                | Deckkraft             |

#### Anwendungsbeispiel

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

## Entwicklung

### Build & Watch

- Abhängigkeiten bauen `npm ci`
- Projekt bauen `npm run build`
- Storybook bauen `npm run start`

Standardmäßig läuft Storybook unter `http://localhost:7120/`.
Neue Änderungen im Projekt werden nicht immer erkannt, wenn Storybook läuft. Daher ist es besser, ein Projekt manuell neu zu bauen und Storybook neu zu starten.


### Beispiel für eine Nginx-Konfiguration für die Entwicklung auf einem Entwicklungsrechner

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