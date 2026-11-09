# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

**English** · [Русский](README-ru.md)

Ein Formular-Renderer auf Basis von JSON Schema und `react-final-form`. Ein einziges Schema beschreibt sowohl den Wert als auch dessen Darstellung: Validierungsregeln sind Standard-Schlüsselwörter von Draft-07, und die Darstellung eines Knotens erfolgt über die `nodeParameters`-Erweiterung.

- Einstiegspunkt: `@gravity-ui/dynamic-forms`.
- Status: **stabile API**.
- Zwei Ebenen: `core` (headless Engine) und `kit` (fertige Entitäten und Layouts auf Basis von `@gravity-ui/uikit`).

Die bisherige API `DynamicField` / `DynamicView` ist unter `@gravity-ui/dynamic-forms/deprecated` verfügbar. SchemaRenderer-Importe aus dem entfernten `/unstable`-Einstiegspunkt werden in das Stammverzeichnis des Pakets verschoben. Siehe die [Migrationsanleitung](MIGRATION.md) für den vollständigen Übergang und [docs/deprecated](docs/deprecated) für die Dokumentation der bisherigen API.

## Installation

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## Inhalte

- [Anwendung](docs/en/how-to-use.md) — Schnelleinstieg, der `name`-Prop, Modi, Auswahlmöglichkeiten.
- [API-Referenz](docs/en/api.md) — Komponenten, Hooks, Props, Konstanten, Hilfsprogramme, `kit`-Exporte, Typen.
- [Schema](docs/en/schema.md) — `nodeParameters`, Flags, Annotationen, Schlüsselwörter, `stringNumber`, `$ref`.
- [Laufzeit](docs/en/runtime.md) — Knotenlebenszyklus, Wertkonvertierung, Validierung, Fehler, Ereignisse, Patches.
- [Kit](docs/en/kit.md) — Layouts, Entitätskatalog, Service-Komponenten, Stile.
- [Erweiterung](docs/en/extension.md) — Benutzerdefinierte Entitäten, Layouts, Validatoren, Konfiguration, eigenständiger Renderer.
- [Migration](MIGRATION.md) — Umstellung von der bisherigen Haupt-API oder `/unstable`, Konvertierung von Spec, Kompatibilität über `/deprecated`.
- [Hinweise und Einschränkungen](docs/en/limitations.md) — Code-verifizierte Abweichungen, Einschränkungen und Fehler.

## Was es ist

`src/lib` ist eine Formular-Engine, bei der sowohl das Formular als auch die Wertübersicht aus einem einzigen JSON Schema erstellt werden. Die `core`-Ebene hat keine eigenen Steuerelemente: Alles Gerenderte kommt aus der Konfiguration. Die Validierung erfolgt über `json-schema-library` (Draft-07) plus das benutzerdefinierte `stringNumber`-Schlüsselwort. Die `kit`-Ebene bietet eine fertige Registrierung: 30 Entitätsschlüssel über 6 Knotentypen, 7 Layoutschlüssel, Service-Komponenten, den `useExpanded`-Hook, Fehlermeldungen und den `specToJsonSchema`-Konverter aus dem alten Spec-Format.

## Funktionsweise

1. **Schema und Konfiguration.** `useSchemaRenderer` klont das `schema` und speichert den Zustand in einem Service-Feld mit einem Validator.
2. **Knoten.** `SchemaRendererNode` nimmt das Unterschema per Zeiger, registriert ein `final-form`-Feld und wählt `entity` und `layout` aus.
3. **Änderung.** Eine Wertänderung löst über `validateFields` nur den Validator des Service-Feldes aus.
4. **Fehler.** Der Validator verteilt Fehler nach Namen in `srState.errors`; Knoten mit einer geänderten Nachricht rendern neu.
5. **Imperativ.** `useSchemaRendererTools` patchet das Schema und fügt externe Fehler hinzu, wodurch die Validierung neu gestartet wird.

## Abhängigkeiten

| Paket                                     | Rolle     | Warum                                                               |
| :------------------------------------------ | :------- | :---------------------------------------------------------------- |
| `react` / `react-dom` / `react-is`          | peer     | 18, 19. Rendering.                                                |
| `final-form` / `react-final-form`           | peer     | Formular, Felder, Absenden, Abonnements.                              |
| `@gravity-ui/uikit`                         | peer     | Version 8. Kit-Steuerelemente: TextInput, Select, Checkbox, etc.        |
| `json-schema-library`                       | runtime  | Draft-07-Validierung und das benutzerdefinierte `stringNumber`-Schlüsselwort.        |
| `decimal.js`                                | runtime  | Zahlenvergleich und Skalierung in `stringNumber` und `*_with_scale`. |
| `@gravity-ui/date-components`, `date-utils` | runtime  | `DateInput` und `DateValue`.                                      |
| `@gravity-ui/icons`                         | runtime  | `iconName` in Alert, Label, TextContent.                          |
| `@gravity-ui/i18n`                          | runtime  | Lokalisierung von Fehlermeldungen.                                      |
| `@bem-react/classname`, `lodash`, `uuid`    | runtime  | Klassen, Hilfsprogramme, Schlüssel.                                         |
| Monaco                                      | external | Nicht gebündelt. Wird über `userContext.MonacoEditor` übergeben. |

## I18N

Bestimmte Komponenten enthalten Textbausteine (Wörter und Sätze), die in zwei Sprachen verfügbar sind: `en` (Standard) und `ru`. Um die Sprache festzulegen, verwenden Sie die Funktion `configure`:

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## Entwicklung

Um den Entwicklungsserver mit Storybook zu starten, führen Sie den folgenden Befehl aus:

```shell
npm ci
npm run dev
```