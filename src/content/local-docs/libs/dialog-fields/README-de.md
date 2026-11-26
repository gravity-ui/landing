## Kurzbeschreibung

Die Komponente `DFDialog` dient der einfachen Erstellung von Formularen und verwendet intern `react-final-form`.
Sie unterstützt mehrere vordefinierte Feldtypen, kann aber durch Registrierung neuer Typen mit `registerDialogControl` erweitert werden.

### Steuerelemente

- [Basis-Steuerelemente](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - statischer Text
  - `text` - editierbarer Text
  - `multi-text` - vom Benutzer definierte Zeichenketten-Array
  - `checkbox` - Kontrollkästchen
  - `tumbler` - Kippschalter
  - `radio` - Optionsfeld
  - `editable-list` - Liste von löschbaren Zeichenketten
  - `multi-editable-list` - Mehrfachliste von löschbaren Zeichenketten
  - `text area` - Textbereich
  - `select` - Auswahlfeld
  - `block` - Ermöglicht das Hinzufügen von ReactNode
- [Registrierung benutzerdefinierter Steuerelemente](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### Funktionen

- In-Place- und Modalansicht
- [Ein Tab](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) und [mehrere Tab-Formulare](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [Vertikale/Horizontale Tabs](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [Ausgeblendete Felder und Tabs](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [Felder basierend auf Werten verknüpfen](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [Feld-spezifische Validierung](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [Formular-spezifische Validierung](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [Virtualisierte Tabs](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [Klonbare Tabs](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [Gruppierte Felder](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## Installation

```bash
$ npm install @gravity-ui/dialog-fields
```

Abhängig von Ihrem Paketmanager müssen Sie möglicherweise `peerDependencies` manuell installieren.

Vertikale Tabs verwenden die Einstiegspunkte für Drag-and-Drop und Virtualisierung von UIKit.
Auswahlfelder virtualisieren Listen mit 50 oder mehr Optionen.
Umschließen Sie Ihre Anwendung mit dem `Provider` von UIKit und importieren Sie `@gravity-ui/uikit/styles/styles.css`.

## Migration zu UIKit 8

Ersetzen Sie den `ThemeProvider` und `MobileProvider` der Anwendung durch `Provider`.
Verschieben Sie deren Props zu `Provider`, mit Ausnahme der entfernten `__experimentalMobileModals`-Prop:

```diff
-import {ThemeProvider, MobileProvider} from '@gravity-ui/uikit';
+import {Provider} from '@gravity-ui/uikit';

-<ThemeProvider theme="light">
-  <MobileProvider>
-    <App />
-  </MobileProvider>
-</ThemeProvider>
+<Provider theme="light">
+  <App />
+</Provider>
```

Wenn Ihre Anwendung bereits `Provider` verwendet, ist kein zusätzlicher Wrapper um `DFDialog`
erforderlich. `DFDialog` behält seine `visible`, `size` und `onClose` Props bei; die Änderungen von UIKit
an `Dialog.open`, `maxWidth` und `onOpenChange` werden innerhalb der Bibliothek behandelt.

Überprüfen Sie benutzerdefinierte Stile und visuelle Snapshots:

- Der Abstand für Dialogkopf, -körper und -fußzeile hat sich geändert und betrifft sowohl modale als auch Inline-Formulare.
- Desktop-Fußzeilen-Schaltflächen passen nun ihren Inhalt an, anstatt eine Mindestbreite von 128px zu haben.
  Um die vorherige Breite wiederherzustellen, übergeben Sie `{width: 'max', className: 'form-action'}` für
  `footerProps.propsButtonApply` und `footerProps.propsButtonCancel` und setzen Sie
  `.form-action { min-width: 128px; }` in Ihrem Stylesheet.
- Kontrollkästchen der Größe `l` verwenden nun eine 13px-Beschriftung anstelle von 15px und eine 18px-Anzeige anstelle von 17px. Auch die Theme-Farben haben sich leicht geändert.
- Vertikale Tabs verwenden die neue `List` ohne Legacy-Komponenten. Benutzerdefinierte Selektoren, die auf das alte `.g-list__item`-Markup abzielen, müssen überarbeitet werden. Der Callback `onOrderChanged({oldIndex, newIndex})` bleibt erhalten.

Benutzerdefinierte Steuerelemente und UIKit-Props, die über Felddefinitionen übergeben werden, müssen dem
[UIKit-Migrationsleitfaden](https://github.com/gravity-ui/uikit/blob/main/docs/migration-to-v8.md) folgen.
Insbesondere akzeptiert `Select` keine `virtualizationThreshold` mehr; das integrierte
`select`-Steuerelement verwendet `ListVirtualizer` mit einem Schwellenwert von 50 Optionen.

## Verwendung

Dieses Beispiel enthält den Anwendungs-Provider. Wenn Ihre Anwendung bereits einen Root-`Provider` hat, lassen Sie den hier gezeigten Wrapper weg.

```tsx
import {DFDialog} from '@gravity-ui/dialog-fields';
import {Provider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
    <Provider theme="light">
      <DFDialog<FormValues>
        visible={true}
        headerProps={{
          title: 'Mein Formular',
        }}
        onAdd={(form) => {
          console.log(form.getState().values);
          return Promise.resolve();
        }}
        fields={[
          {
            name: 'firstName',
            type: 'text',
            caption: 'Vorname',
            tooltip: 'Beschreibung für das Feld Vorname',
          },
          {
            name: 'lastName',
            type: 'text',
            caption: 'Nachname',
            tooltip: 'Beschreibung für das Feld Nachname',
          },
        ]}
      />
    </Provider>
  );
}
```

### Bedingte Sichtbarkeit

Felder und Tabs unterstützen `visibilityCondition`. Mit einer Zeichenkette `when` empfängt `isActive` den Wert dieses Feldes:

```ts
visibilityCondition: {
  when: 'register',
  isActive: (value) => Boolean(value),
}
```

Verwenden Sie ein Array von Feldnamen, um von mehreren Werten abhängig zu sein. `isActive` empfängt die Werte als separate Argumente in der gleichen Reihenfolge wie `when`:

```ts
visibilityCondition: {
  when: ['multiConsumer', 'register'],
  isActive: (multiConsumer, register) => Boolean(multiConsumer && register),
}
```

Namen sind Pfade vom Formular-Root, einschließlich Tab-Präfixen wie
`general.register`. Die Sichtbarkeit wird aktualisiert, wenn sich ein referenziertes Feld ändert.
Ein Feld, das durch seine Bedingung ausgeblendet wird, wird nicht nur visuell versteckt, sondern auch unmontiert.

Weitere Beispiele finden Sie im [Storybook](https://preview.yandexcloud.dev/dialog-fields).