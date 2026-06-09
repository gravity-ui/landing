# playwright-tools

Une bibliothèque d'utilitaires supplémentaires pour écrire des tests avec Playwright Test.

```
npm i -D @gravity-ui/playwright-tools
```

Le package contient plusieurs sous-répertoires avec des utilitaires à des fins différentes. Vous devriez importer depuis ces sous-répertoires, par exemple :

```ts
import { matchScreenshot } from 'playwright-tools/actions';
```

- [actions](./actions/README.md) — Actions du navigateur.
- [auth/storage](./auth/storage/README.md) — Fonctions d'authentification pour sauvegarder et restaurer des instantanés du stockage du navigateur.
- [component-tests](./component-tests/README.md) — Utilitaires et fixtures pour les tests de composants Playwright.
- [fixtures](./fixtures/README.md) — Fixtures pour passer des valeurs dans les tests.
- [har](./har/README.md) — Fonctions pour travailler avec des dumps de requêtes HAR.
- [utils](./utils/README.md) — Fonctions d'aide.

Vous pouvez en apprendre davantage sur Playwright et comment le configurer dans la [documentation Playwright](https://playwright.dev/docs/intro).

## Mainteneurs

[@Avol-V](https://github.com/Avol-V)
[SwinX](https://github.com/SwinX)