# @gravity-ui/components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/components)](https://www.npmjs.com/package/@gravity-ui/components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/components/)

Eine Sammlung komplexer React-Komponenten, die auf [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) aufbauen. Teil des [Gravity UI](https://gravity-ui.com) Designsystems.

## Installation

```shell
npm install @gravity-ui/components
```

## Verwendung

`@gravity-ui/uikit` 8 und React 18/19 sind erforderlich. Installieren Sie die aktuelle UIKit 8-Vorschauversion mit `npm install @gravity-ui/uikit@beta`.

`@gravity-ui/uikit` ist eine Peer-Abhängigkeit: Installieren Sie es, importieren Sie seine Stile einmal am Einstiegspunkt der Anwendung und umschließen Sie die Anwendung mit `Provider`. Die Komponenten in diesem Paket werden ohne diese Einrichtung ungestylt gerendert.

```tsx
import {Provider, TextInput} from '@gravity-ui/uikit';
import {FormRow} from '@gravity-ui/components';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  return (
    <Provider theme="light">
      <FormRow label="Name" fieldId="name">
        <TextInput id="name" name="name" />
      </FormRow>
    </Provider>
  );
}
```

### Migration zu UIKit 8

- Ersetzen Sie die `ThemeProvider` auf Anwendungsebene durch `Provider`.
- Verwenden Sie `onOpenChange` anstelle von `onClose` in `ConfirmDialog` und `ChangelogDialog`. `ConfirmDialog` akzeptiert die neuen Dialog-Props, einschließlich `maxWidth` und `fullWidth` anstelle von `size`.
- Entfernen Sie `disableHeightTransition` aus den Einstellungen für `ChangelogDialog` und das Cookie-Zustimmungs-Popup; UIKit animiert die Inhalts-Höhe nicht mehr.
- `Stories` und `StoriesGroup` behalten `onClose` bei, mit optionalen Event-/Grund-Argumenten und UIKit 8-Gründen (`escape-key`, `outside-press`, `click`).
- Übergeben Sie native HTML-Attribute direkt an Button/Link-Props, einschließlich `StoreBadge`, anstelle von `extraProps`. Verwenden Sie UIKit 8 Button-Ansichten in benutzerdefinierten Story-Aktionen.

Weitere Informationen zu den zugrunde liegenden API-Änderungen finden Sie im [Migrationsleitfaden für UIKit 8](https://github.com/gravity-ui/uikit/blob/next/docs/migration-to-v8.md). Dieses Paket verwendet die neuen APIs für List, Menu und Popover ohne den Legacy-Einstiegspunkt.

### Bestätigungsdialog

```tsx
import {ConfirmDialog} from '@gravity-ui/components';

<ConfirmDialog
  open={open}
  title="Projekt löschen?"
  message="Dies kann nicht rückgängig gemacht werden."
  textButtonApply="Löschen"
  textButtonCancel="Abbrechen"
  onClickButtonApply={handleDelete}
  onClickButtonCancel={() => setOpen(false)}
  onOpenChange={setOpen}
/>;
```

### Weitere Beispiele

Jede Komponente hat eine README-Datei neben ihrer Quelle mit Props und Beispielen – siehe `src/components/<Component>/README.md`. Live-Demos: [Storybook](https://preview.gravity-ui.com/components/).

## Entwicklung

```shell
git clone git@github.com:gravity-ui/components.git
cd components
npm ci
npm run start   # startet Storybook unter http://localhost:7009
```

Weitere nützliche Befehle:

```shell
npm test              # Führt Unit-Tests aus
npm run lint          # Lintet JS und SCSS
npm run typecheck     # TypeScript-Typenprüfung
```

## Mitwirkung

Beiträge sind willkommen! Bitte lesen Sie [CONTRIBUTING.md](CONTRIBUTING.md), bevor Sie einen Pull-Request einreichen.

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Die Composite-Komponenten-Schicht von Gravity UI – fertige Formularzeilen, Bestätigungsdialoge, Benachrichtigungen, Stories, Galerien und ähnliche produktbezogene Widgets, die aus `@gravity-ui/uikit`-Primitiven zusammengesetzt sind, sodass Sie sie nicht von Hand neu erstellen müssen.

### Wann zu verwenden

- Formularlayout: `FormRow` (Label + Feld + Beschreibung) anstelle eines selbst erstellten Label/Input-Wrappers.
- Bestätigungsabläufe: `ConfirmDialog` anstelle des Selbstkomponierens von `Dialog` mit zwei Schaltflächen.
- Produkt-Widgets: `Notifications`, `Stories` / `StoriesGroup`, `ChangelogDialog`, `OnboardingMenu`, `PromoSheet`, `CookieConsent`, `Reactions`, `SharePopover`, `StoreBadge`.
- Datenhelfer: `InfiniteScroll`, `ItemSelector`, `DelayedTextInput`, `TokenizedInput`, `Gallery`.

### Wann nicht zu verwenden

- Grundlegende Steuerelemente, Overlays, Layout und Theming – verwenden Sie [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) direkt; dieses Paket fügt nur Composites darüber hinzu.
- Datengitter – verwenden Sie [`@gravity-ui/table`](https://github.com/gravity-ui/table); hier gibt es keine Tabelle.
- Datumsauswähler und Kalender – verwenden Sie [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- Anwendungsnavigations-Shells (Seitenleiste, Kopfzeile, Fußzeile) – verwenden Sie [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Schema-gesteuerte Formulare – verwenden Sie [`@gravity-ui/dynamic-forms`](https://github.com/gravity-ui/dynamic-forms); `FormRow` ist nur eine Layout-Zeile.

### Häufige Fallstricke

- **Ohne UIKit-Setup ist nichts gestylt.** Installieren Sie `@gravity-ui/uikit`, importieren Sie `@gravity-ui/uikit/styles/styles.css` (plus `fonts.css`) einmal und umschließen Sie die App mit `Provider` – dieses Paket liefert keine eigenen globalen Stile.
- **`FormRow` rendert den Input nicht.** Übergeben Sie die Steuerung als `children` und verknüpfen Sie sie mit `fieldId`, das mit der `id` der Steuerung übereinstimmt; die `label`-Prop ist der Label-Text, kein `<label>`-Element.
- **`ConfirmDialog` hat kein `onConfirm` / `onCancel`.** Die Handler sind `onClickButtonApply` und `onClickButtonCancel`, und `textButtonApply` / `textButtonCancel` sind erforderlich.
- **Halluzinierte Importe.** Alles wird vom Paket-Root exportiert: `import {FormRow} from '@gravity-ui/components'`. Es gibt keine Subpfad-Importe wie `@gravity-ui/components/FormRow`.

## Dokumentation für KI-Agenten

Die Agenten-lesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/components/build/docs/INDEX.md`.