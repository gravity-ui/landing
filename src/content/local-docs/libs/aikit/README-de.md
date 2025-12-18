# @gravity-ui/aikit

[![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

---

UI-Komponentenbibliothek für KI-Chats, die auf Atomic Design-Prinzipien basiert.

## Beschreibung

**@gravity-ui/aikit** ist eine flexible und erweiterbare React-Komponentenbibliothek zum Erstellen von KI-Chats beliebiger Komplexität. Die Bibliothek bietet eine Reihe von fertigen Komponenten, die so wie sie sind verwendet oder an Ihre Bedürfnisse angepasst werden können.

### Hauptmerkmale

- 🎨 **Atomic Design** — klare Komponentenhierarchie von Atomen bis zu Seiten
- 🔧 **SDK-unabhängig** — unabhängig von spezifischen KI-SDKs
- 🎭 **Zwei-Ebenen-Ansatz** — fertige Komponenten + Hooks zur Anpassung
- 🎨 **CSS-Variablen** — einfache Thematisierung ohne Komponentenüberschreibung
- 📦 **TypeScript** — vollständige Typsicherheit von Anfang an
- 🔌 **Erweiterbar** — System zur Registrierung benutzerdefinierter Nachrichtentypen

## Projektstruktur

```
src/
├── components/
│   ├── atoms/          # Grundlegende unteilbare UI-Elemente
│   ├── molecules/      # Einfache Gruppen von Atomen
│   ├── organisms/      # Komplexe Komponenten mit Logik
│   ├── templates/      # Vollständige Layouts
│   └── pages/          # Vollständige Integrationen mit Daten
├── hooks/              # Allgemeine Hooks
├── types/              # TypeScript-Typen
├── utils/              # Hilfsfunktionen
└── themes/             # CSS-Themen und Variablen
```

## Installation

```bash
npm install @gravity-ui/aikit
```

## Schnellstart

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

Die Bibliothek basiert auf **Atomic Design**-Prinzipien:

### 🔹 Atome

Grundlegende unteilbare UI-Elemente ohne Geschäftslogik:

- `ActionButton` — Button mit integriertem Tooltip
- `Alert` — Warnmeldungen mit Varianten
- `ChatDate` — Datumsformatierung mit relativen Daten
- `ContextIndicator` — Indikator für Token-Kontextnutzung
- `ContextItem` — Kontextlabel mit Entfernungsaktion
- `DiffStat` — Anzeige von Code-Änderungsstatistiken
- `Disclaimer` — Haftungsausschluss-Textkomponente
- `InlineCitation` — Textzitate
- `Loader` — Ladeindikator
- `MarkdownRenderer` — Yandex Flavored Markdown Renderer
- `MessageBalloon` — Nachrichten-Wrapper
- `Shimmer` — Ladeanimations-Effekt
- `SubmitButton` — Sende-Button mit Zuständen
- `ToolIndicator` — Indikator für Tool-Ausführungsstatus

### 🔸 Moleküle

Einfache Kombinationen von Atomen:

- `BaseMessage` — Basis-Wrapper für alle Nachrichtentypen
- `ButtonGroup` — Button-Gruppe mit Orientierungsunterstützung
- `InputContext` — Kontextverwaltung
- `PromptInputBody` — Textarea mit automatischem Wachstum
- `PromptInputFooter` — Footer mit Aktions-Icons und Sende-Button
- `PromptInputHeader` — Header mit Kontextelementen und Indikator
- `PromptInputPanel` — Panel-Container für benutzerdefinierten Inhalt
- `Suggestions` — anklickbare Vorschlags-Buttons
- `Tabs` — Navigations-Tabs mit Löschfunktionalität
- `ToolFooter` — Tool-Nachrichten-Footer mit Aktionen
- `ToolHeader` — Tool-Nachrichten-Header mit Icon und Aktionen

### 🔶 Organismen

Komplexe Komponenten mit interner Logik:

- `AssistantMessage` — KI-Assistenten-Nachricht
- `Header` — Chat-Header
- `MessageList` — Nachrichtenliste
- `PromptInput` — Nachrichteneingabefeld
- `ThinkingMessage` — KI-Denkprozess
- `ToolMessage` — Tool-Ausführung
- `UserMessage` — Benutzernachricht

### 📄 Templates

Vollständige Layouts:

- `ChatContent` — Haupt-Chat-Inhalt
- `EmptyContainer` — Leerer Zustand
- `History` — Chat-Verlauf

### 📱 Seiten

Vollständige Integrationen:

- `ChatContainer` — vollständig zusammengestellter Chat

## Dokumentation

- [Schnellstart-Anleitung](./docs/GETTING_STARTED.md)
- [Architektur](./docs/ARCHITECTURE.md)
- [Projektstruktur](./docs/PROJECT_STRUCTURE.md)
- [Test-Anleitung](./docs/TESTING.md)
- [Playwright-Anleitung](./playwright/README.md)

## Tests

Das Projekt verwendet Playwright Component Testing für visuelle Regressions-Tests.

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

### Lokale Tests (nur Linux)

Wenn Sie auf Linux sind, können Sie Tests lokal ausführen:

```bash
# Playwright-Browser installieren (einmal ausführen)
npm run playwright:install

# Alle Komponententests ausführen
npm run playwright

# Screenshot-Baselines aktualisieren
npm run playwright:update
```

Für detaillierte Testdokumentation siehe [Playwright-Anleitung](./playwright/README.md).

## Entwicklung

Entwicklungs- und Beitragsanweisungen sind in [CONTRIBUTING.md](./CONTRIBUTING.md) verfügbar.

## Lizenz

MIT

