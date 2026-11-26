# AIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

UI-Komponentenbibliothek für KI-Chats, die nach den Prinzipien des Atomic Design entwickelt wurde.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_cover.png)

![Example image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_example.png)

## Ressourcen

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Website](https://gravity-ui.com/libraries/aikit)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/aikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Community](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Beschreibung

**@gravity-ui/aikit** ist eine flexible und erweiterbare React-Komponentenbibliothek zum Erstellen von KI-Chats jeder Komplexität. Die Bibliothek bietet eine Reihe von fertigen Komponenten, die direkt verwendet oder an Ihre Bedürfnisse angepasst werden können.

### Hauptmerkmale

- 🎨 **Atomic Design** — klare Komponenten-Hierarchie von Atomen bis zu Seiten
- 🔧 **SDK-unabhängig** — unabhängig von spezifischen KI-SDKs
- 🎭 **Zweistufiger Ansatz** — fertige Komponenten + Hooks zur Anpassung
- 🎨 **CSS-Variablen** — einfaches Theming ohne Komponenten-Overrides
- 📦 **TypeScript** — volle Typsicherheit out-of-the-box
- 🔌 **Erweiterbar** — System zur Registrierung benutzerdefinierter Nachrichtentypen

## Projektstruktur

```
src/
├── components/
│   ├── atoms/          # Grundlegende, unteilbare UI-Elemente
│   ├── molecules/      # Einfache Gruppierungen von Atomen
│   ├── organisms/      # Komplexe Komponenten mit Logik
│   ├── templates/      # Vollständige Layouts
│   └── pages/          # Vollständige Integrationen mit Daten
├── hooks/              # Allgemeine Hooks
├── types/              # TypeScript-Typen
├── utils/              # Hilfsprogramme
└── themes/             # CSS-Themes und Variablen
```

## Installation

```bash
npm install @gravity-ui/aikit
```

AIKit 3 erfordert `@gravity-ui/uikit@^8.0.0`, React/React DOM 18 oder 19 und Node.js 20.19+ innerhalb von v20 oder 22.12+. Umschließen Sie die Anwendung mit dem `Provider` von UIKit, wie in [Erste Schritte](./docs/GETTING_STARTED.md) gezeigt.

Upgrade von v2? Lesen Sie die [Migrationsanleitung](./docs/migration-to-v3.md) ([Русский](./docs/migration-to-v3-ru.md)) und die [Release Notes v3](./docs/changelog-v3.md).

## Schnelleinstieg

```typescript
import { ChatContainer } from '@gravity-ui/aikit';
import type { ChatType, TChatMessage } from '@gravity-ui/aikit';

function App() {
    const [messages, setMessages] = useState<TChatMessage[]>([]);
    const [chats, setChats] = useState<ChatType[]>([]);
    const [activeChat, setActiveChat] = useState<ChatType | null>(null);

    return (
        <ChatContainer
            chats={chats}
            activeChat={activeChat}
            messages={messages}
            onSendMessage={async (data) => {
                // Ihre Sende-Logik
                console.log('Nachricht:', data.content);
            }}
            onSelectChat={setActiveChat}
            onCreateChat={() => {
                // Neuen Chat erstellen
            }}
            onDeleteChat={(chat) => {
                // Chat löschen
            }}
        />
    );
}
```

## Architektur

Die Bibliothek basiert auf den Prinzipien des **Atomic Design**:

### 🔹 Atome

Grundlegende, unteilbare UI-Elemente ohne Geschäftslogik:

- `ActionButton` — Schaltfläche mit integriertem Tooltip
- `Alert` — Benachrichtigungsnachrichten mit Varianten
- `ChatDate` — Datumsformatierung mit relativen Daten
- `ContextIndicator` — Anzeige der Nutzung des Token-Kontexts
- `ContextItem` — Kontext-Label mit Entfernungsaktion
- `DiffStat` — Anzeige von Code-Änderungsstatistiken
- `Disclaimer` — Komponente für Haftungsausschlüsse
- `InlineCitation` — Textzitate
- `Loader` — Ladeanzeige
- `MarkdownRenderer` — Yandex Flavored Markdown Renderer
- `MessageBalloon` — Nachrichten-Wrapper
- `Shimmer` — Ladeanimations-Effekt
- `SubmitButton` — Senden-Schaltfläche mit Zuständen
- `ToolIndicator` — Anzeige des Status der Werkzeugausführung

### 🔸 Moleküle

Einfache Kombinationen von Atomen:

- `BaseMessage` — Basis-Wrapper für alle Nachrichtentypen
- `ButtonGroup` — Schaltflächengruppe mit Ausrichtungsunterstützung
- `InputContext` — Kontextverwaltung
- `PromptInputBody` — Textbereich mit automatischer Größenanpassung
- `PromptInputFooter` — Fußzeile mit Aktionssymbolen und Senden-Schaltfläche
- `PromptInputHeader` — Kopfzeile mit Kontext-Elementen und Indikator
- `PromptInputPanel` — Panel-Container für benutzerdefinierten Inhalt
- `Suggestions` — anklickbare Vorschlags-Schaltflächen
- `Tabs` — Navigations-Tabs mit Löschfunktion
- `ToolFooter` — Fußzeile für Werkzeugnachrichten mit Aktionen
- `ToolHeader` — Kopfzeile für Werkzeugnachrichten mit Symbol und Aktionen

### 🔶 Organismen

Komplexe Komponenten mit interner Logik:

- `AssistantMessage` — Nachricht des KI-Assistenten
- `Header` — Chat-Header
- `MessageList` — Nachrichtenliste
- `PromptInput` — Eingabefeld für Nachrichten
- `ThinkingMessage` — Denkprozess der KI
- `ToolMessage` — Ausführung von Tools
- `UserMessage` — Benutzernachricht

### 📄 Vorlagen

Vollständige Layouts:

- `ChatContent` — Hauptinhalt des Chats
- `EmptyContainer` — Leerer Zustand
- `History` — Chatverlauf

### 📱 Seiten

Vollständige Integrationen:

- `ChatContainer` — Vollständig zusammengesetzter Chat

## Dokumentation

- [Schnellstartanleitung](./docs/GETTING_STARTED.md)
- [Benutzerdefiniertes Markdown-Rendering ohne die integrierte Engine](./docs/custom-markdown.md)
- [Architektur](./docs/ARCHITECTURE.md)
- [Projektstruktur](./docs/PROJECT_STRUCTURE.md)
- [Anleitung zum Testen](./docs/TESTING.md)
- [Playwright-Anleitung](./playwright/README.md)

## Testen

Das Projekt verwendet Playwright Component Testing für visuelles Regressions-Testing.

### Tests ausführen

**Wichtig**: Alle Tests müssen über Docker ausgeführt werden, um konsistente Screenshots über verschiedene Umgebungen hinweg zu gewährleisten.

```bash
# Alle Komponententests in Docker ausführen (empfohlen)
npm run playwright:docker

# Screenshot-Baselines in Docker aktualisieren
npm run playwright:docker:update

# Spezifischen Test nach Grep-Muster in Docker ausführen
npm run playwright:docker -- --grep "@ComponentName"

# Docker-Cache bei Bedarf löschen
npm run playwright:docker:clear-cache
```

### Lokales Testen (nur Linux)

Wenn Sie unter Linux arbeiten, können Sie Tests lokal ausführen:

```bash
# Playwright-Browser installieren (einmal ausführen)
npm run playwright:install
# Alle Komponententests ausführen
npm run playwright
# Screenshot-Baselines aktualisieren
npm run playwright:update
```

Detaillierte Testdokumentation finden Sie in der [Playwright-Anleitung](./playwright/README.md).

## Entwicklung

Anweisungen zur Entwicklung und Mitarbeit finden Sie in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Lizenz

MIT

## Für KI-Agenten

Eine React-Komponentenbibliothek zum Erstellen von KI-Chat-Oberflächen, organisiert nach Atomic Design (Atome → Moleküle → Organismen → Vorlagen → Seiten) und SDK-agnostisch — greifen Sie darauf zurück, um eine Chat-UI (Nachrichtenlisten, Eingabeaufforderungsfeld, Toolaufrufe, Anhänge) zusammenzustellen, anstatt diese Primitiven von Hand aus `@gravity-ui/uikit` zu komponieren.

### Wann verwenden

- Erstellen einer KI/LLM-Chat-UI (Assistenten-/Benutzer-/Tool-Nachrichten, Eingabeaufforderungsfeld mit Vorschlägen, Hochladen von Anhängen, Denkzustände).
- Bereitgestellte Chat-Layouts (`ChatContainer`, `MessageList`, `PromptInput`) plus Hooks zur Anpassung des Verhaltens.
- Einbettung in das Gravity UI-Ökosystem mit gemeinsam genutztem Theming über CSS-Variablen.

### Wann nicht verwenden

- Für allgemeine UI-Primitiven (Schaltflächen, Eingabefelder, Modals) verwenden Sie [`@gravity-ui/uikit`](https://gravity-ui.com/uikit) direkt — AIKit baut darauf auf und erfüllt spezifische Chat-Anforderungen.
- Zum Rendern von Rich-Markdown in Nachrichten umschließt der `MarkdownRenderer` von AIKit [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor); für eigenständiges Markdown-Rendering verwenden Sie dieses Paket direkt.
- Für eine einzelne Chat-Blase ohne Chat-Orchestrierung ist ein `MarkdownRenderer`/Textblock von uikit leichter als die vollständige AIKit-Nachrichtenpipeline.

### Häufige Fallstricke

- **Halluzinieren eines KI-SDK-Imports** — AIKit ist SDK-agnostisch; es stellt Komponenten/Hooks bereit, keinen LLM-Client. Bringen Sie Ihre eigene Datenquelle mit und füttern Sie Nachrichten über Props.
- **Greifen nach `<Chat>` / `<AIChat>`** — der Export auf Seitenebene ist `ChatContainer` (und `AIStudioChat`); es gibt keine Komponente, die buchstäblich `Chat` heißt.
- **Überspringen der Registrierung von Nachrichtentypen für benutzerdefinierte Typen** — benutzerdefinierte Nachrichtenarten müssen im Nachrichtentypensystem registriert werden, sonst werden sie als unbekannt gerendert.
- **Bearbeiten von Basiskomponenten anstelle der Verwendung von Hooks** — das zweistufige Design erwartet, dass Sie über Hooks/Komposition anpassen; das direkte Überschreiben interner Elemente bricht Upgrades.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/aikit/build/docs/INDEX.md`.

## Experimentelle Komponenten

Agenten-Workspace-Komponenten sind nur unter `@gravity-ui/aikit/experimental` verfügbar.
Ihre APIs können sich in Minor-Releases ändern oder entfernt werden; Patch-Releases wahren die Kompatibilität.
Fixieren Sie eine exakte Version, wenn Sie ein Experiment übernehmen. Siehe [die Richtlinie für experimentelle APIs](docs/experimental.md).