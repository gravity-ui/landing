# playwright-tools

Eine Bibliothek mit zusätzlichen Hilfsmitteln zum Schreiben von Tests mit Playwright Test.

```
npm i -D @gravity-ui/playwright-tools
```

Das Paket enthält mehrere Unterverzeichnisse mit Hilfsmitteln für verschiedene Zwecke. Sie sollten aus diesen Unterverzeichnissen importieren, zum Beispiel:

```ts
import { matchScreenshot } from 'playwright-tools/actions';
```

- [actions](./actions/README.md) — Browser-Aktionen.
- [auth/storage](./auth/storage/README.md) — Authentifizierungsfunktionen zum Speichern und Wiederherstellen von Browser-Storage-Schnappschüssen.
- [component-tests](./component-tests/README.md) — Hilfsmittel und Fixtures für Playwright Component Testing.
- [fixtures](./fixtures/README.md) — Fixtures zum Übergeben von Werten an Tests.
- [har](./har/README.md) — Funktionen zur Arbeit mit HAR-Anforderungs-Dumps.
- [utils](./utils/README.md) — Hilfsfunktionen.

Mehr über Playwright und dessen Konfiguration erfahren Sie in der [Playwright-Dokumentation](https://playwright.dev/docs/intro).

## Maintainer

[@Avol-V](https://github.com/Avol-V)
[SwinX](https://github.com/SwinX)