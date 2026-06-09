# playwright-tools

Una biblioteca de utilidades adicionales para escribir pruebas con Playwright Test.

```
npm i -D @gravity-ui/playwright-tools
```

El paquete contiene varios subdirectorios con utilidades para diferentes propósitos. Debes importar desde estos subdirectorios, por ejemplo:

```ts
import { matchScreenshot } from 'playwright-tools/actions';
```

- [actions](./actions/README.md) — Acciones del navegador.
- [auth/storage](./auth/storage/README.md) — Funciones de autenticación para guardar y restaurar instantáneas del almacenamiento del navegador.
- [component-tests](./component-tests/README.md) — Utilidades y fixtures para Playwright Component Testing.
- [fixtures](./fixtures/README.md) — Fixtures para pasar valores a las pruebas.
- [har](./har/README.md) — Funciones para trabajar con volcados de solicitudes HAR.
- [utils](./utils/README.md) — Funciones de ayuda.

Puedes aprender más sobre Playwright y cómo configurarlo en la [documentación de Playwright](https://playwright.dev/docs/intro).

## Mantenedores

[@Avol-V](https://github.com/Avol-V)
[SwinX](https://github.com/SwinX)