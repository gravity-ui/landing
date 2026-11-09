# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

Eine Bibliothek zum Rendern von Dashboard-Gittern.

Der optional zu verwendende `@gravity-ui/dashkit/gridstack`-Einstiegspunkt exportiert `DashKitGridStack` für flache und verschachtelte gespeicherte Layouts unter Verwendung von GridStack 12.6.0. Er teilt sich die Plugin-Registrierung, gesteuerte Updates, Refs, Bereitschaft und automatische Höhen mit DashKit. Nativ unterstützte Drag-and-Drop-Operationen ermöglichen Transfers zwischen Zonen und Containern, einschließlich ganzer Container-Teilstrukturen. Externe Paletten-Drops zeigen eine Vorschau und wenden das vollständige Dokument an, einschließlich verschobener Container. Weitere Informationen zur unterstützten API, zum [verschachtelten Dokumentformat](docs/gridstack.md#nested-document-format) und zur Payload für Paletten-Drops finden Sie in der [GridStack-Dokumentation](docs/gridstack.md).

`DashKitGridStack` validiert die Konfiguration vor dem Rendern und vor statischen Bearbeitungen. Ungültige Geometrien, doppelte Widget-/Selektor-IDs, verwaiste Layout-Einträge und verschachtelte Dokumente lösen `DashKitGridStack:`-Fehler aus; Hosts sollten gespeicherte Dokumente validieren oder eine Fehlergrenze verwenden. Elemente ohne Layout-Einträge bleiben unmontiert. Gesteuerte Layouts verwenden den konfigurierten Kompaktierungsmodus; setzen Sie `compactType: null`, um Lücken beizubehalten.

Beide Renderer liefern auch bestätigte Geometrien für Verschiebungen/Größenänderungen an Plugin-Props und den Layout-Kontext. Das ältere `DashKit` verarbeitet Bestätigungen während eines aktiven Ziehvorgangs, ohne ältere Geometrien erneut abzuspielen, wenn diese Geste endet.

## Installation

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## Beschreibung

Die Bibliothek wird verwendet, um Widgets in einem Raster anzuordnen, sie zu skalieren, neue hinzuzufügen und zu löschen.
Das Widget ist eine React-Komponente. Zum Beispiel Text, Grafiken und Bilder.

Neue Widgets werden über ein Plugin-System hinzugefügt.

### Plugins

Plugins sind erforderlich, um benutzerdefinierte Widgets zu erstellen.

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

- **config**: [Konfiguration](#Config).
- **editMode**: Ob der Bearbeitungsmodus aktiviert ist.
- **onItemEdit**: Wird aufgerufen, wenn Sie auf ein Widget klicken, um es zu bearbeiten.
- **onChange**: Wird aufgerufen, wenn die Konfiguration oder [itemsStateAndParams](#itemsStateAndParams) geändert werden.
- **onDrop**: Wird aufgerufen, wenn ein Element aus dem ActionPanel über (#DashKitDnDWrapper) fallen gelassen wird.
- **onItemMountChange**: Wird aufgerufen, wenn sich der Mount-Status eines Elements ändert.
- **onItemRender**: Wird aufgerufen, wenn das Rendern eines Elements abgeschlossen ist.
- **defaultGlobalParams**, **globalParams**: [Parameter](#Params), die alle Widgets beeinflussen. In DataLens sind `defaultGlobalParams` globale Parameter, die in den Dashboard-Einstellungen festgelegt sind. `globalParams` sind globale Parameter, die in der URL festgelegt werden können.
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams).
- **settings**: DashKit-Einstellungen. Das optionale `isolateItemUpdates: true` unterdrückt Renderer-Updates, die nur durch Layout-Änderungen anderer Widgets verursacht werden. Eigene Daten, Status, Parameter, Geometrie, Einstellungen, Kontext und Rückruffunktionen werden weiterhin aktualisiert; die Standardeinstellung behält vollständige Layout-Renderer-Updates bei. Memoize `settings` und `context` zwischen Renderings: Neue Objektverweise lösen Renderer-Updates aus, auch wenn die Isolierung aktiviert ist. Bei aktivierter Isolierung können Plugins, die Geschwistergeometrien über `layout` lesen, veraltete Geschwisterwerte beobachten.
- **context**: Objekt, das an alle Widgets weitergegeben wird.
- **overlayControls**: Objekt, das die Widget-Steuerelemente während der Bearbeitung überschreibt. Wenn nicht übergeben, werden grundlegende Steuerelemente angezeigt. Wenn `null` übergeben wird, werden nur die Schließen-Schaltfläche oder ein benutzerdefiniertes Menü angezeigt.
- **overlayMenuItems**: Benutzerdefinierte Dropdown-Menüelemente.
- **noOverlay**: Wenn `true`, werden Overlay und Steuerelemente während der Bearbeitung nicht angezeigt.
- **focusable**: Wenn `true`, sind Rasterelemente fokussierbar.
- **onItemFocus**: Wird aufgerufen, wenn `focusable` true ist und ein Element fokussiert wird.
- **onItemBlur**: Wird aufgerufen, wenn `focusable` true ist und ein Element den Fokus verliert.
- **draggableHandleClassName**: CSS-Klassenname des Elements, das das Widget ziehbar macht.
- **onDragStart**: ReactGridLayout wird aufgerufen, wenn das Ziehen eines Elements beginnt.
- **onDrag**: ReactGridLayout wird während des Ziehens eines Elements aufgerufen.
- **onDragStop**: ReactGridLayout wird aufgerufen, wenn das Ziehen eines Elements beendet ist.
- **onResizeStart**: ReactGridLayout wird aufgerufen, wenn die Größenänderung eines Elements beginnt.
- **onResize**: ReactGridLayout wird während der Größenänderung eines Elements aufgerufen.
- **onResizeStop**: ReactGridLayout wird aufgerufen, wenn die Größenänderung eines Elements beendet ist.
- **getPreparedCopyItemOptions**: Wird aufgerufen, um ein kopiertes Element in ein serialisierbares Objekt zu konvertieren, bevor es im lokalen Speicher gespeichert wird. Dies sollte anstelle der veralteten `context.getPreparedCopyItemOptions`-Prop verwendet werden.
- **onCopyFulfill**: Wird aufgerufen, wenn das Kopieren eines Elements abgeschlossen ist, mit `error=null` und definierten `data` bei erfolgreicher Ausführung und mit `error: Error` ohne `data` andernfalls.

## Verwendung

### DashKit-Konfiguration

Bevor Sie `DashKit` als React-Komponente verwenden können, muss es konfiguriert werden.

- Sprache festlegen

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- DashKit.setSettings

  Wird für globale DashKit-Einstellungen verwendet (z. B. Abstände zwischen Widgets, Standard-Widget-Größen und das Overlay-Menü für Widgets).

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- DashKit.registerPlugins

  Registrierung und Konfiguration von Plugins.

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
  ```

```ts
  DashKit.registerPlugins({
    type: 'custom',
    defaultLayout: {
      w: 10,
      h: 8,
    },
    renderer: function CustomPlugin() {
      return <div>Benutzerdefiniertes Widget mit benutzerdefinierten Steuerelementen</div>;
    },
  });
  ```

### Konfiguration

```ts
export interface Config {
  salt: string; // zum Erstellen einer eindeutigen ID
  counter: number; // zum Erstellen einer eindeutigen ID, wird nur erhöht
  items: ConfigItem[]; // anfängliche Widget-Zustände
  layout: ConfigLayout[]; // Widget-Position im Raster https://github.com/react-grid-layout
  aliases: ConfigAliases; // Aliase für Parameter siehe #Parameter
  connections: ConfigConnection[]; // Verbindungen zwischen Widgets siehe #Parameter
}
```

Konfigurationsbeispiel:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const config: DashKitProps['config'] = {
  salt: '0.46703554571365613',
  counter: 4,
  items: [
    {
      id: 'tT',
      data: {
        size: 'm',
        text: 'Beschriftung',
        showInTOC: true,
      },
      type: 'title',
      namespace: 'default',
      orderId: 1,
    },
    {
      id: 'Ea',
      data: {
        text: 'Modus _editActive',
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

Ein neues Element zur Konfiguration hinzufügen:

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
    // Optional. Wenn ein neues Element mit vordefinierten Abmessungen in das aktuelle Layout eingefügt werden soll
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

Ein vorhandenes Element in der Konfiguration ändern:

```ts
const newConfig = DashKit.setItem({
  item: {
    id: 'tT', // item.id
    data: {
      size: 'm',
      text: `Neue Beschriftung`,
    },
    namespace: 'default',
    type: 'title',
  },
  config: config,
});
```

Ein Element aus der Konfiguration löschen:

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

Objekt, das Widget-Parameter und -Zustände sowie eine Warteschlange für Parameteränderungen speichert.
Es hat ein `__meta__`-Feld zum Speichern von Warteschlangen- und Metainformationen.

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // Warteschlange
        version: number; // aktuelle Version von itemsStateAndParams
    };
}
```

Und auch Widget-Zustände und Parameter:

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

### Experimentelle DashKit-Ereignisse

> Experimentell: Diese API kann sich in kleineren Releases ändern.

`DashKit` stellt eine experimentelle Instanz-Ereignis-API bereit. Verwenden Sie eine Komponentreferenz und abonnieren Sie mit `dashkitRef.current?.on(eventName, handler)`. Die Methode gibt eine Funktion zum Abbestellen zurück.

Das erste unterstützte Ereignis ist `change`. Es wird ausgelöst, wenn sich das Layout ändert, bevor `onChange` aufgerufen wird. Der Handler kann die vollständigen nächsten und vorherigen Layouts lesen, Layout-Patches lesen oder `preventDefault()` aufrufen, um den Standardaufruf von `onChange` zu stoppen.

```tsx
import React from 'react';
import {DashKit} from '@gravity-ui/dashkit';
import type {DashKitChangeEvent} from '@gravity-ui/dashkit';

function Dashboard() {
  const dashkitRef = React.useRef<DashKit>(null);
```

```tsx
  React.useEffect(() => {
    const unsubscribe = dashkitRef.current?.on('change', (event: DashKitChangeEvent) => {
      console.log(event.patches);

      if (event.patches.length > 0) {
        event.preventDefault();
      }
    });

    return () => unsubscribe?.();
  }, []);

  return <DashKit ref={dashkitRef} config={config} editMode={true} onChange={onChange} />;
}
```

```ts
type DashKitLayoutPatch = Pick<ConfigLayout, 'i'> &
  Partial<Pick<ConfigLayout, 'x' | 'y' | 'w' | 'h' | 'parent'>>;

type DashKitChangeEvent = {
  patches: DashKitLayoutPatch[];
  layout: ConfigLayout[];
  previousLayout: ConfigLayout[];
  preventDefault: () => void;
  readonly defaultPrevented: boolean;
};
```

#### Ereignisgesteuerte Layout-Updates

Wenn Sie `preventDefault()` im `change`-Ereignis-Handler verwenden, können Sie Layout-Updates jetzt handhaben, ohne die `config`-Prop neu zu initialisieren. DashKit verwaltet eine interne Basislinie und berechnet Patches inkrementell:

```tsx
function Dashboard() {
  const [config, setConfig] = useState(initialConfig);
  const dashkitRef = useRef<DashKit>(null);

  useEffect(() => {
    const unsubscribe = dashkitRef.current?.on('change', (event) => {
      event.preventDefault(); // onChange nicht aufrufen

      // Nur die inkrementellen Patches an Ihr Backend senden
      sendPatches(event.patches);

      // Kein Aufruf von setConfig({ ...config, layout: event.layout }) erforderlich
      // DashKit verwaltet den visuellen Zustand intern
    });

    return unsubscribe;
  }, []);

  return <DashKit ref={dashkitRef} config={config} editMode onChange={() => {}} />;
}
```

**Wichtig:** Wenn Sie `config.layout` später über Props aktualisieren (z. B. durch Serversynchronisierung), setzt DashKit seine interne Basislinie zurück, um mit der neuen Prop übereinzustimmen. Dies gewährleistet die Kompatibilität mit ereignisgesteuerten und gesteuerten Workflows.

### Menü

Sie können ein benutzerdefiniertes DashKit-Widget-Overlay-Menü im Bearbeitungsmodus festlegen.

```ts
type MenuItem = {
  id: string; // Eindeutige ID
  title?: string; // String-Titel
  icon?: ReactNode; // Icon-Knoten
  iconSize?: number | string; // Icon-Größe in px als Zahl oder als String mit Einheiten
  handler?: (item: ConfigItem) => void; // Handler für benutzerdefinierte Elementaktionen
  visible?: (item: ConfigItem) => boolean; // Optionaler Sichtbarkeits-Handler zum Filtern von Menüelementen
  className?: string; // Benutzerdefinierte Klassen-Eigenschaft
};

// Array von Menüelementen in den Einstellungen verwenden
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />

[veraltet]
// overlayMenuItems-Eigenschaft hat höhere Priorität als das setSettings-Menü
DashKit.setSettings({menu: [] as Array<MenuItem>});
```

### Elemente per Drag & Drop aus der ActionPanel ziehen

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
  onDropDragOver?: (
    draggedItem: DraggedOverItem,
    sharedItem: DraggedOverItem | null,
  ) => void | boolean;
}
```

- **dragImageSrc**: Optionales benutzerdefiniertes Drag-Bild. Standardmäßig wird das gezogene ActionPanel-Element als Vorschau angezeigt.
- **onDragStart**: Callback, der aufgerufen wird, wenn ein Element aus der ActionPanel gezogen wird.
- **onDragEnd**: Callback, der aufgerufen wird, wenn ein Element abgelegt oder der Drag-Vorgang abgebrochen wird.

```ts
type ItemDragProps = {
  type: string; // Plugin-Typ
  layout?: {
    // Optional. Layout-Elementgröße für Vorschau und Initialisierung
    w?: number;
    h?: number;
  };
  extra?: any; // Benutzerdefinierter Kontext
};
```

```ts
type ItemDropProps = {
  commit: () => void; // Callback sollte nach allen Konfigurationsoperationen aufgerufen werden
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
| Action panel variables                         |                       |
| `--dashkit-action-panel-color`                 | Hintergrundfarbe      |
| `--dashkit-action-panel-border-color`          | Rahmenfarbe           |
| `--dashkit-action-panel-border-radius`         | Radius des Rahmens    |
| Action panel item variables                    |                       |
| `--dashkit-action-panel-item-color`            | Hintergrundfarbe      |
| `--dashkit-action-panel-item-text-color`       | Textfarbe             |
| `--dashkit-action-panel-item-color-hover`      | Hintergrundfarbe (Hover) |
| `--dashkit-action-panel-item-color-dragging`   | Hintergrundfarbe (Ziehen) |
| `--dashkit-action-panel-item-text-color-hover` | Textfarbe (Hover)     |
| `--dashkit-action-panel-item-text-color-dragging` | Textfarbe (Ziehen)  |
| Overlay variables                              |                       |
| `--dashkit-overlay-border-color`               | Rahmenfarbe           |
| `--dashkit-overlay-color`                      | Hintergrundfarbe      |
| `--dashkit-overlay-opacity`                    | Deckkraft             |
| Grid item variables                            |                       |
| `--dashkit-grid-item-edit-opacity`             | Deckkraft             |
| `--dashkit-grid-item-border-radius`            | Radius des Rahmens    |
| Placeholder variables                          |                       |
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

- Abhängigkeiten installieren: `npm ci`
- Projekt bauen: `npm run build`
- Storybook bauen: `npm run start`

Standardmäßig läuft Storybook unter `http://localhost:7120/`.
Änderungen im Projekt werden nicht immer erkannt, wenn Storybook läuft. Daher ist es besser, das Projekt manuell neu zu bauen und Storybook neu zu starten.

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

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Ein Dashboard-Grid-Composer, der größenveränderbare, ziehbare Widgets über ein Plugin-System in einem responsiven Grid anordnet – greifen Sie darauf zurück, wenn Sie ein benutzerdefinierbares Dashboard erstellen (Widgets hinzufügen/verschieben/vergrößern/löschen), anstatt einzelne Diagramme oder Panels von Hand zu platzieren.

### Wann verwenden

- Rendern eines konfigurierbaren Dashboards, bei dem Widgets auf einem Grid positioniert, vergrößert und neu angeordnet werden (basiert auf `react-grid-layout`).
- Benutzerdefinierbare Layouts: Hinzufügen/Entfernen von Widgets aus einem Aktionspanel, Drag-and-Drop, Bearbeitungsmodus mit Overlay-Steuerelementen.
- Plugin-basierte Widgets, bei denen jeder Widget-Typ (Titel, Text, Diagramm, benutzerdefiniert) einmal registriert und über eine `config` gesteuert wird.

### Wann nicht verwenden

- Für ein einzelnes, festes Diagramm oder Panel verwenden Sie direkt [`@gravity-ui/charts`](https://gravity-ui.com/charts) oder [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) – die Grid-/Plugin-Mechanik ist für ein einzelnes Widget ein Overhead.
- Für ein allgemeines responsives Grid, das kein Widget-Dashboard ist, verwenden Sie `react-grid-layout` direkt.
- Zum Einbetten von ChartKit-basierten Diagramm-Widgets in ein DashKit-Dashboard ist DashKit die Hülle; es stützt sich weiterhin auf [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) zur Darstellung der eigentlichen Diagramme.

### Häufige Fallstricke

- **Halluzinierter Komponentenname `<Dashboard>`** — der Export ist `<DashKit>` (die Drag-and-Drop-Shell ist `<DashKitDnDWrapper>`, die `<DashKit>` + `<ActionPanel>` umschließt).
- **Ändern von `config` anstatt Helfer zu verwenden** — Verwenden Sie die statischen Helfer `DashKit.setItem({...})` / `DashKit.removeItem({...})`, um Elemente hinzuzufügen/zu ändern/zu entfernen, damit Layout und IDs konsistent bleiben.
- **Vergessen von `DashKit.setSettings` / `DashKit.registerPlugins`** — die Komponente muss konfiguriert werden (Sprache, Gittereinstellungen, Plugin-Registrierung), bevor sie gerendert wird, sonst zeigen Widgets nichts an.
- **Verwechslung der beiden Parameter-Props** — `defaultGlobalParams` (Standardwerte auf Dashboard-Ebene) vs. `globalParams` (globale Werte, die per URL überschrieben werden können); beide fließen in die Parametergenerierungs-Warteschlange ein, die von ChartKit verarbeitet wird.
- **Manuelles Aufrufen von `onChange` mit dem `change`-Ereignis** — wenn Sie `event.preventDefault()` im experimentellen `change`-Handler aufrufen, behält DashKit den internen visuellen Zustand bei; das Zurücksetzen von `config.layout` aus den Props setzt diese Basislinie zurück.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich unter `node_modules/@gravity-ui/dashkit/build/docs/INDEX.md`.