# @gravity-ui/date-utils

Hilfsprogramme zur Verwaltung von Datum und Uhrzeit.

## Installation

```shell
npm i @gravity-ui/date-utils
```

## Verwendung

```typescript
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';

// Aktuelles Datum: 2021-08-07T12:10:00
// Zeitzone des Benutzers: Europe/Istanbul

const FORMAT = 'YYYY-MM-DDTHH:mm:ssZ';

// Absolutes Datum parsen
dateTimeParse({year: 2021, month: 7, day: 7})?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse([2021, 7, 7])?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('2021-08-07')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse(1621708204063)?.format(FORMAT); // "2021-05-22T21:30:04+03:00"
dateTimeParse('')?.format(FORMAT); // undefined
dateTimeParse('incorrect-date')?.format(FORMAT); // undefined

// Relatives Datum parsen
dateTimeParse('now')?.format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTimeParse('now-1d')?.format(FORMAT); // "2021-08-06T12:10:00+03:00"
dateTimeParse('now-1d+1M')?.format(FORMAT); // "2021-09-06T12:10:00+03:00"
dateTimeParse('now/d')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('now+1d/d')?.format(FORMAT); // "2021-08-08T00:00:00+03:00"
dateTimeParse('now-1f')?.format(FORMAT); // undefined

// dateTime erstellen
dateTime().format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTime({input: '2021-08-07'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({input: '2021-08-07', format: 'YYYY-MM-DD'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({timeZone: 'Asia/Tokyo'}).format(FORMAT); // "2021-08-07T18:10:00+09:00
dateTime({input: ''}).format(FORMAT); // "Invalid Date"
dateTime({input: '2021-08', format: 'YYYY-MM-DD'}).format(FORMAT); // "Invalid Date"
```

## Einstellungen

```typescript
import {settings} from '@gravity-ui/date-utils';

// Verwaltung von Gebietsschemata (Locales)
settings.getLocale(); // Standard-Gebietsschema "en"
settings.loadLocale('de').then(() => {
  settings.setLocale('de');
  settings.getLocale(); // "de"
});

// Anpassung
settings.updateLocale({weekStart: 0}); // Ersten Wochentag ändern
```

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Zeitzonenbewusste Datums-/Uhrzeit-Hilfsprogramme – Parsen (einschließlich relativer Ausdrücke wie `now-1d/d`), Formatieren und Verwaltung von Gebietsschemata – ohne Benutzeroberfläche. Verwenden Sie es, wenn Sie Daten zuverlässig über Zeitzonen hinweg berechnen und formatieren müssen, anstatt ein vollständiges UI-Kalender-Paket zu laden.

### Wann zu verwenden

- Parsen von absoluten oder relativen Datumsangaben (`'now-1d'`, `'now/d'`) in ein zeitzonenbewusstes `dateTime`-Objekt.
- Formatieren von Daten zur Anzeige in der Zeitzone des Benutzers mit Gebietsschema-Unterstützung.
- Teilen von Datumslogik zwischen Server- (Node) und Client-Code (React) – das Paket hat keine React-Abhängigkeit.

### Wann nicht zu verwenden

- Zum Rendern eines Kalenders, Datumsauswahlers oder einer anderen Datums-**Benutzeroberfläche** verwenden Sie [`@gravity-ui/date-components`](https://gravity-ui.com/components/date-components) – es baut seine visuellen Elemente auf diesem Paket auf.
- Für leichte, unveränderliche Datumsberechnungen ohne Zeitzonen-/relativen Ausdrucksbedarf reichen möglicherweise `date-fns` oder die nativen `Intl`/`Date`-APIs aus.

### Häufige Fallstricke

- **Aufrufen von `dateTimeParse('')` in Erwartung eines Datums** – gibt `undefined` zurück, nicht ein `dateTime`; sichern Sie dies mit optionaler Verkettung oder einer Nullprüfung.
- **Vergessen, ein Gebietsschema zu laden** – `settings.setLocale('de')` formatiert lokalisierte Namen (Wochentage, Monate) erst, nachdem `settings.loadLocale('de')` aufgelöst wurde.
- **Halluzinierte Funktionen `formatDate` / `parseDate`** – die Einstiegspunkte sind `dateTimeParse` (parsen) und `dateTime(...).format(...)` (formatieren).
- **Annahme, dass die Zeitzone des Benutzers automatisch angewendet wird** – übergeben Sie `timeZone` explizit, andernfalls wird die Systemzeitzone verwendet.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/date-utils/build/docs/INDEX.md`.