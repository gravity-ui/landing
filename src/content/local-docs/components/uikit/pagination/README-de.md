GRAVITY_TRANSLATION_BLOCK_0_END

`Pagination` rendert Navigationssteuerelemente — Seitenzahlen mit Vorwärts-/Rückwärts-Schaltflächen und einem optionalen Seitengrößenwähler — die zum Aufteilen langer Listen oder Tabellen über mehrere Seiten verwendet werden.

```tsx
import {Pagination} from '@gravity-ui/uikit';
```

## Verwendung

```jsx
import {Pagination, PaginationProps} from '@gravity-ui/uikit';

const [state, setState] = React.useState({page: 1, pageSize: 100});

const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
  setState((prevState) => ({...prevState, page, pageSize}));

const pagination = <Pagination page={1} pageSize={100} total={1000} onUpdate={handleUpdate} />;
```

## Benutzerdefinierte Komponente

Sie können das Stammelement von klickbaren Pagination-Elementen (Navigations- und Seitenschaltflächen) mit der `pageComponent`-Prop überschreiben. Übergeben Sie `pageComponent="a"` und geben Sie `href` von `getPageProps` zurück, um normale Links zu verwenden. Für Router-Integrationen übergeben Sie eine Router-fähige Komponente wie `Link` und geben Sie Router-spezifische Props zurück, z. B. `to`.

`getPageProps` wird für jedes klickbare Element (Seitenschaltflächen und Navigationsschaltflächen) aufgerufen. Es wird **nicht** für Ellipsen, die Anzeige "Seite von", das einfache (aktuelle) Seitenelement im mobilen Layout oder deaktivierte Navigationsschaltflächen aufgerufen (diese bleiben immer ein inaktives natives `<button disabled>`, sodass sie nicht aktiviert werden können, auch nicht über die Tastatur). Von Pagination verwaltete Props (`onClick`, `className`, `size`, `view`, `selected`, `disabled`, `qa`, `aria-current`, `extraProps`, `children`) haben Vorrang vor den von `getPageProps` zurückgegebenen Werten.

### Normale Links (`pageComponent="a"`)

```jsx
import {Pagination} from '@gravity-ui/uikit';
import type {PaginationProps, PaginationPagePropsGetter} from '@gravity-ui/uikit';

const total = 1000;
const page = 1;
const pageSize = 100;

const noop: PaginationProps['onUpdate'] = () => {};

const getPageProps: PaginationPagePropsGetter = ({page}) => ({href: `?page=${page}`});

const pagination = (
  <Pagination
    page={page}
    pageSize={pageSize}
    total={total}
    onUpdate={noop}
    pageComponent="a"
    getPageProps={getPageProps}
  />
);
```

### Router-Links (z. B. `react-router`)

```jsx
import {Pagination} from '@gravity-ui/uikit';
import type {PaginationProps, PaginationPagePropsGetter} from '@gravity-ui/uikit';
import {Link} from 'react-router-dom';

const total = 1000;
const page = 1;
const pageSize = 100;

const noop: PaginationProps['onUpdate'] = () => {};

const getPageProps: PaginationPagePropsGetter<{to: string}> = ({page}) => ({
  to: `?page=${page}`,
});

const pagination = (
  <Pagination
    page={page}
    pageSize={pageSize}
    total={total}
    onUpdate={noop}
    pageComponent={Link}
    getPageProps={getPageProps}
  />
);
```

## Eigenschaften

| Name            | Beschreibung                                                                                                                                      |            Typ             |   Standard    |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------: | :-----------: |
| className       | `class` HTML-Attribut                                                                                                                             |          `string`           |               |
| compact         | Verbirgt den Titel für die Schaltflächen `First`, `Previous` und `Next`. In der mobilen Version immer auf `true` gesetzt.                         |          `boolean`          |    `true`     |
| onUpdate        | Wird aufgerufen, wenn die Seitenzahl oder `pageSize` geändert wird                                                                                 |         `Function`          |               |
| size            | Größe der Paginierungselemente. Standardmäßig ist der Wert in der mobilen Version `l` und in der Desktop-Version `m`.                             |          `string`           |               |
| page            | Aktuelle Seitenzahl                                                                                                                               |          `number`           |               |
| pageSize        | Anzahl der Datenelemente pro Seite                                                                                                                |          `number`           |               |
| pageSizeOptions | Ermöglicht die Angabe der `sizeChanger`-Optionen                                                                                                  |         `number[]`          |               |
| total           | Gesamtzahl der Datenelemente                                                                                                                      |          `number`           |               |
| showInput       | Zeigt eine Eingabe an, um direkt zu Seiten zu navigieren                                                                                           |          `boolean`          |   `false`     |
| showPages       | Zeigt die Seitennummerierung an                                                                                                                   |          `boolean`          |    `true`     |
| qa              | `data-qa` HTML-Attribut, das zum Testen verwendet wird                                                                                            |          `string`           |               |
| view            | Legt das Aussehen von Schaltflächen und Steuerelementen fest. Beeinflusst die Ansicht des Paginierungseingabefelds auf Mobilgeräten.             |   `"outlined" \| "clear"`   | `"outlined"`  |
| pageComponent   | Überschreibt das Stammelement für klickbare Paginierungselemente (Navigations- und Seitenschaltflächen). Verwenden Sie `"a"` für normale Links oder eine Router-fähige Komponente |  `PaginationPageComponent`  |               |
| getPageProps    | Gibt zusätzliche Props pro klickbarem Element zurück (z. B. `href` für `"a"` oder `to` für einen Router-`Link`). Wird nur angewendet, wenn `pageComponent` gesetzt ist | `PaginationPagePropsGetter` |               |