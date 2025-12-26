```html
<div class="language-selector">
  <a href="/en/README.md">English</a>
  <a href="/de/README.md" class="active">Deutsch</a>
</div>
```

## Kurzbeschreibung

Die `DFDialog`-Komponente erleichtert die Erstellung von Formularen und verwendet intern `react-final-form`.
Sie unterstützt mehrere vordefinierte Feldtypen, kann aber durch Registrierung neuer Typen mit `registerDialogControl` erweitert werden.

### Steuerelemente

- [Basis-Steuerelemente](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - statischer Text
  - `text` - editierbarer Text
  - `multi-text` - vom Benutzer definierte Zeichenketten-Array
  - `checkbox` - Kontrollkästchen
  - `tumbler` - Kippschalter
  - `radio` - Optionsfeld
  - `editable-list` - Liste von entfernbaren Zeichenketten
  - `multi-editable-list` - Mehrfachliste von entfernbaren Zeichenketten
  - `text area` - Textbereich
  - `select` - Auswahlfeld
  - `block` - Ermöglicht das Hinzufügen von `ReactNode`
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
# Verwenden Sie die erforderliche Version von react/react-dom, falls Sie diese noch nicht installiert haben
$ npm install @gravity-ui/dialog-fields react@18 react-dom@18
```

Abhängig von Ihrem Paketmanager müssen Sie möglicherweise `peerDependencies` manuell installieren.

## Verwendung

```ts
import {DFDialog, FormApi} from '@gravity-ui/dialog-fields';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
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
  );
}
```

Weitere Beispiele finden Sie im [Storybook](https://preview.yandexcloud.dev/dialog-fields).