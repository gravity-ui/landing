<!--GITHUB_BLOCK-->

# List

<!--/GITHUB_BLOCK-->

Die `List`-Komponente rendert eine filterbare, sortierbare und virtualisierte Liste von Elementen mit Unterstützung für benutzerdefiniertes Rendering und Tastaturnavigation.

```tsx
import {List} from '@gravity-ui/uikit';
```

### ItemsHeight

Bestimmt die Höhe der Elementliste (oder eine Funktion, die den Höhenwert für eine Liste zurückgibt). Dies kann hilfreich sein, wenn die Listenhöhe dynamisch festgelegt wird, z. B. `(items: []) => number`.

### Items

Stellt ein Array von Elementen für eine Liste bereit:

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']} itemsHeight={160} />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']} itemsHeight={160} />
```

<!--/GITHUB_BLOCK-->

Ein Element kann ein Skalar oder ein beliebiger Wert sein und muss in jedem Fall `truthy` sein.
Wenn es sich um einen beliebigen Wert handelt, stellen Sie sicher, dass Sie die Filter- und Rendering-Funktionen angeben.
Das Standard-Rendering gibt nur ein Element als Text aus.

Das spezielle Feld `item.disabled` deaktiviert ein Element.

Die Anpassung von Rendering und Höhe bietet viel Raum für Experimente.
Der folgende Code ermöglicht es Ihnen beispielsweise, Gruppen zu emulieren:

<!--SANDBOX
import type {ListProps} from '@gravity-ui/uikit';
import {List} from '@gravity-ui/uikit';

type Item = {
    title: string;
    group?: boolean;
};

const items: ListProps<Item>['items'] = [
    {
        title: 'one',
        group: true,
        disabled: true,
    },
    {
        title: 'two',
    },
    {
        title: 'three',
        group: true,
        disabled: true,
    },
    {
        title: 'four',
    },
];

export default function () {
    return (
        <List
            items={items}
            onItemClick={(value) => console.log(value)}
            renderItem={(item) => {
                if (item.group) {
                    return (
                        <div className={'group'}>
                            <div className={'select-text'}>{item.title}</div>
                        </div>
                    );
                }

                return (
                    <div className={'select'}>
                        <div className={'select-text'}>{item.title}</div>
                    </div>
                );
            }}
            itemHeight={(item) => (item.group ? 24 : 36)}
            itemsHeight={160}
            filterItem={(filter) => (item) => item.title.includes(filter)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={[
    {
      title: 'one',
      group: true,
      disabled: true,
    },
    {
      title: 'two',
    },
    {
      title: 'three',
      group: true,
      disabled: true,
    },
    {
      title: 'four',
    },
  ]}
  onItemClick={(value) => console.log(value)}
  renderItem={(item) => {
    if (item.group) {
      return (
        <div className={'group'}>
          <div className={'select-text'}>{item.title}</div>
        </div>
      );
    }
    return (
      <div className={'select'}>
        <div className={'select-text'}>{item.title}</div>
      </div>
    );
  }}
  itemHeight={(item) => (item.group ? 24 : 36)}
  itemsHeight={160}
  filterItem={(filter) => (item) => item.title.includes(filter)}
/>
```

<!--/GITHUB_BLOCK-->

### Filterable

Die Eigenschaft `filterable` deaktiviert die Eingabe zum Suchen eines Elements, wenn ihr Wert `false` ist. Ihr Standardwert ist `true`.

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List
            items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
            itemsHeight={160}
            filterable={false}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  filterable={false}
/>
```

<!--/GITHUB_BLOCK-->

### Sortable

Die Eigenschaft `sortable` ermöglicht das Vertauschen von Listenelementen, wenn ihr Wert `true` ist. Ihr Standardwert ist `false`.

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List
            items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
            itemsHeight={160}
            sortable
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  sortable={true}
/>
```

<!--/GITHUB_BLOCK-->

### Virtualisierung

Um die Virtualisierung zu aktivieren, stellen Sie sicher, dass eine der folgenden beiden Bedingungen erfüllt ist:

1. Sie legen die Eigenschaft `itemsHeight` fest. In diesem Fall ist die Listenhöhe fest und entspricht diesem Wert.
2. Sie legen den Stil `display: flex` für den übergeordneten Container der Liste fest. In diesem Fall passt sich die Liste an die Containerbreite an.

### Externe Verwaltung

Manchmal möchten Sie die Aktivität von Elementen über die Tastatur verwalten, indem Sie den Fokus auf ein externes Element halten.
Die Weiterleitung des `onKeyDown`-Ereignisses an eine Liste kann Ihnen hier helfen.
Ebenso können Sie `onFocus` und `onBlur` weiterleiten, wenn Sie das Verhalten wiederholen müssen, wenn ein aktives Element verloren geht.

### Filter

Die Eigenschaft `filter` stellt den Filterwert bereit, der mit externer Sortierung verwendet wird.

## Eigenschaften

| Name              | Beschreibung
