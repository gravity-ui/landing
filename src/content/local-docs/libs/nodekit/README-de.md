# NodeKit

NodeKit ist ein einfaches Toolkit für Ihre Node.js-Apps, Skripte und Bibliotheken. Es bietet Funktionalität für Logging, Telemetrie, Konfiguration und Fehlerbehandlung, sodass Sie eine vertraute Grundlage in Ihren verschiedenen Projekten haben.

## Erste Schritte

Fügen Sie die Abhängigkeit zu Ihrem Projekt hinzu:

```bash
npm install --save @gravity-ui/nodekit
```

Importieren und initialisieren Sie dann NodeKit in Ihrer Anwendung:

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

Öffnen Sie dann in einem anderen Terminal die Beispiele, gehen Sie zu dem, das Sie interessiert, verknüpfen Sie Ihr NodeKit dort und starten Sie die App:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

An diesem Punkt können Sie Änderungen sowohl an NodeKit als auch an der Demo-App vornehmen und die Ergebnisse in Echtzeit sehen.