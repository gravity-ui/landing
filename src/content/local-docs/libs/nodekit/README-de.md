# NodeKit

NodeKit ist ein einfaches Toolkit für Ihre Node.js-Apps, Skripte und Bibliotheken. Es bietet Funktionalität für Logging, Telemetrie, Konfiguration und Fehlerbehandlung, sodass Sie eine vertraute Grundlage in Ihren verschiedenen Projekten haben.

## Installation

```bash
npm install --save @gravity-ui/nodekit
```

## Erste Schritte

Fügen Sie die Abhängigkeit zu Ihrem Projekt hinzu:

```bash
npm install --save @gravity-ui/nodekit
```

Und importieren und initialisieren Sie dann NodeKit in Ihrer Anwendung:

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App ist bereit');
```

## Dokumentation

Weitere Dokumentation finden Sie im Verzeichnis `docs/`:

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) beschreibt, wie Sie sowohl NodeKit selbst als auch Ihre NodeKit-basierten Anwendungen konfigurieren können
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) beschreibt das Konzept von NodeKit-Kontexten, Logging und Tracing
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) enthält eine Beschreibung der nützlichen benutzerdefinierten Fehlerklasse, die NodeKit für Ihre Anwendungen bereitstellt
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) listet einige zusätzliche Hilfsfunktionen auf, die mit NodeKit gebündelt sind

## Mitwirken

### Erste Schritte

Holen Sie sich Kopien des NodeKit-Repositorys und der Beispielanwendungen:

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

Verknüpfen Sie Ihr NodeKit mit npm und starten Sie den Compiler:

```bash
cd nodekit && npm link && npm run dev
```

Öffnen Sie dann in einem anderen Terminal die Beispiele, wählen Sie das aus, das Sie interessiert, verknüpfen Sie Ihr NodeKit dort und starten Sie die App:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

An diesem Punkt können Sie Änderungen sowohl an NodeKit als auch an der Demo-App vornehmen und die Ergebnisse in Echtzeit sehen.

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Ein grundlegendes Node.js-Toolkit (Logging, Telemetrie, typisierte Fehler, Konfiguration, Request-Kontexte), das von allen Gravity UI-Backends gemeinsam genutzt wird – greifen Sie darauf zurück, um eine konsistente App-Struktur zu erhalten, bevor Sie eine HTTP-Schicht hinzufügen, anstatt selbst Logging/Fehler/Konfigurations-Infrastruktur zusammenzustellen.

### Wann verwenden

- Jeder Node.js-Dienst/jedes Skript, das gemeinsames Logging, Telemetrie (Tracing) und einen typisierten `AppError` wünscht.
- Bereitstellung von Request-bezogenem Kontext (Logs/Traces) über asynchrone Grenzen hinweg.
- Zentralisierung der Konfiguration, damit mehrere Dienste im selben Ökosystem konsistent funktionieren.

### Wann nicht verwenden

- Zum Bereitstellen von HTTP-Routen, Middleware oder einem Server verwenden Sie [`@gravity-ui/expresskit`](https://github.com/gravity-ui/expresskit) – es baut auf NodeKit auf und fügt die Express/HTTP-Schicht hinzu.
- Für ein eigenständiges Skript mit einer einzelnen Datei und ohne Logging/Telemetrie-Anforderungen sind reine Node-APIs leichter als das vollständige NodeKit-Kontextsystem.

### Häufige Fallstricke

- **Halluzinieren von `import {Logger}` / `logger`** – Logging wird über den NodeKit-Kontext erreicht: `new NodeKit()` dann `nodekit.ctx.log(...)`, nicht als eigenständiger Logger-Export.
- **Wiederholtes Instanziieren von NodeKit** – Erstellen Sie eine `NodeKit`-Instanz pro App und teilen Sie deren `ctx`; das Erstellen vieler Instanzen fragmentiert die Logging/Telemetrie-Konfiguration.
- **Werfen von reinem `Error`** – Verwenden Sie die gebündelte `AppError` (siehe `docs/app-error.md`), damit Fehlercodes und Telemetrie konsistent erfasst werden.
- **Überspringen der Konfigurationsinitialisierung** – NodeKit liest die Konfiguration bei der Konstruktion; überprüfen Sie `docs/configuration.md`, bevor Sie von Standardwerten ausgehen.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/nodekit/dist/docs/INDEX.md`.