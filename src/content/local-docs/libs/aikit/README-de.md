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

**@gravity-ui/aikit** ist eine flexible und erweiterbare React-Komponentenbibliothek zum Erstellen von KI-Chats jeder Komplexität. Die Bibliothek bietet eine Reihe von fertigen Komponenten, die entweder direkt verwendet oder an Ihre Bedürfnisse angepasst werden können.

### Hauptmerkmale

- 🎨 **Atomic Design** — klare Komponentenhierarchie von Atomen bis zu Seiten
- 🔧 **SDK-unabhängig** — unabhängig von spezifischen KI-SDKs
- 🎭 **Zweistufiger Ansatz** — fertige Komponenten + Hooks zur Anpassung
- 🎨 **CSS-Variablen** — einfaches Theming ohne Komponenten-Overrides
- 📦 **TypeScript** — volle Typsicherheit von Haus aus
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

## Erste Schritte

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
- `ContextIndicator` — Anzeige der Nutzung von Token-Kontext
- `ContextItem` — Kontext-Label mit Entfernungsaktion
- `DiffStat` — Anzeige von Code-Änderungsstatistiken
- `Disclaimer` — Textkomponente für Haftungsausschlüsse
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
- `Suggestions` — klickbare Vorschlags-Schaltflächen
- `Tabs` — Navigations-Tabs mit Löschfunktion
- `ToolFooter` — Fußzeile für Werkzeugnachrichten mit Aktionen
- `ToolHeader` — Kopfzeile für Werkzeugnachrichten mit Symbol und Aktionen

### 🔶 Organismen

Komplexe Komponenten mit interner Logik:

- `AssistantMessage` — Nachricht des KI-Assistenten
- `Header` — Chat-Kopfzeile
- `MessageList` — Nachrichtenliste
- `PromptInput` — Eingabefeld für Nachrichten
- `ThinkingMessage` — Denkprozess der KI
- `ToolMessage` — Ausführung von Werkzeugen
- `UserMessage` — Benutzernachricht

### 📄 Vorlagen

Vollständige Layouts:

- `ChatContent` — Hauptinhalt des Chats
- `EmptyContainer` — Leerer Zustand
- `History` — Chat-Verlauf

### 📱 Seiten

Vollständige Integrationen:

- `ChatContainer` — vollständig zusammengesetzter Chat

## Dokumentation

- [Schnellstart-Anleitung](./docs/GETTING_STARTED.md)
- [Architektur](./docs/ARCHITECTURE.md)
- [Projektstruktur](./docs/PROJECT_STRUCTURE.md)
- [Test-Anleitung](./docs/TESTING.md)
- [Playwright-Anleitung](./playwright/README.md)

## Testen

Das Projekt verwendet Playwright Component Testing für visuelle Regressionstests.

### Tests ausführen

**Wichtig**: Alle Tests müssen über Docker ausgeführt werden, um konsistente Screenshots in verschiedenen Umgebungen zu gewährleisten.

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

Anleitungen zur Entwicklung und zum Beitrag finden Sie in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Lizenz

MIT

## Für KI-Agenten

Eine React-Komponentenbibliothek zum Erstellen von KI-Chat-Oberflächen, organisiert nach Atomic Design (Atome → Moleküle → Organismen → Vorlagen → Seiten) und SDK-agnostisch – verwenden Sie sie, um eine Chat-UI (Nachrichtenlisten, Eingabeaufforderung, Tool-Aufrufe, Anhänge) zusammenzustellen, anstatt diese Primitiven von Hand aus `@gravity-ui/uikit` zu komponieren.

### Wann verwenden

- Erstellen einer KI/LLM-Chat-UI (Assistenten-/Benutzer-/Tool-Nachrichten, Eingabeaufforderung mit Vorschlägen, Anhänge-Uploads, Denkzustände).
- Bereitgestellte Chat-Layouts (`ChatContainer`, `MessageList`, `PromptInput`) plus Hooks zur Anpassung des Verhaltens.
- Einbettung in das Gravity UI-Ökosystem mit gemeinsam genutztem Theming über CSS-Variablen.

### Wann nicht verwenden

- Für allgemeine UI-Primitiven (Schaltflächen, Eingabefelder, Modale) verwenden Sie [`@gravity-ui/uikit`](https://gravity-ui.com/uikit) direkt – AIKit baut darauf auf für Chat-spezifische Anforderungen.
- Zum Rendern von Rich Markdown in Nachrichten umschließt der `MarkdownRenderer` von AIKit [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor); für eigenständiges Markdown-Rendering verwenden Sie dieses Paket direkt.
- Für eine einzelne Chat-Blase ohne Chat-Orchestrierung ist ein uikit `MarkdownRenderer`/Textblock leichter als die vollständige AIKit-Nachrichtenpipeline.

### Häufige Fallstricke

- **Halluzinieren eines KI-SDK-Imports** – AIKit ist SDK-agnostisch; es stellt Komponenten/Hooks bereit, keinen LLM-Client. Bringen Sie Ihre eigene Datenquelle mit und füttern Sie Nachrichten über Props.
- **Verwendung von `<Chat>` / `<AIChat>`** – der Export auf Seitenebene ist `ChatContainer` (und `AIStudioChat`); es gibt keine Komponente, die buchstäblich `Chat` heißt.
- **Überspringen der Registrierung von Nachrichtentypen für benutzerdefinierte Typen** – benutzerdefinierte Nachrichtenarten müssen im Nachrichtentypensystem registriert werden, sonst werden sie als unbekannt gerendert.
- **Bearbeiten von Basiskomponenten anstelle der Verwendung von Hooks** – das zweistufige Design erwartet, dass Sie über Hooks/Komposition anpassen; das direkte Überschreiben interner Elemente bricht Upgrades.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/aikit/build/docs/INDEX.md`.