# @gravity-ui/components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/components)](https://www.npmjs.com/package/@gravity-ui/components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/components/)

Un conjunto de componentes React complejos construidos sobre [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit). Parte del sistema de diseño [Gravity UI](https://gravity-ui.com).

## Instalación

```shell
npm install @gravity-ui/components
```

## Uso

Se requieren `@gravity-ui/uikit` 8 y React 18/19. Instala la versión preliminar actual de UIKit 8 con `npm install @gravity-ui/uikit@beta`.

`@gravity-ui/uikit` es una dependencia peer: instálala, importa sus estilos una vez en el punto de entrada de la aplicación y envuelve la aplicación en `Provider`. Los componentes de este paquete se renderizan sin estilo sin esta configuración.

```tsx
import {Provider, TextInput} from '@gravity-ui/uikit';
import {FormRow} from '@gravity-ui/components';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  return (
    <Provider theme="light">
      <FormRow label="Nombre" fieldId="name">
        <TextInput id="name" name="name" />
      </FormRow>
    </Provider>
  );
}
```

### Migración a UIKit 8

- Reemplaza `ThemeProvider` a nivel de aplicación con `Provider`.
- Usa `onOpenChange` en lugar de `onClose` en `ConfirmDialog` y `ChangelogDialog`. `ConfirmDialog` acepta las nuevas props de Dialog, incluyendo `maxWidth` y `fullWidth` en lugar de `size`.
- Elimina `disableHeightTransition` de la configuración de `ChangelogDialog` y del popup de consentimiento de cookies; UIKit ya no anima la altura del contenido.
- `Stories` y `StoriesGroup` conservan `onClose`, con argumentos opcionales de evento/razón y razones de UIKit 8 (`escape-key`, `outside-press`, `click`).
- Pasa atributos HTML nativos directamente a las props de botón/enlace, incluyendo `StoreBadge`, en lugar de `extraProps`. Usa las vistas de Button de UIKit 8 en acciones de historias personalizadas.

Consulta la [guía de migración a UIKit 8](https://github.com/gravity-ui/uikit/blob/next/docs/migration-to-v8.md) para conocer los cambios en la API subyacente. Este paquete utiliza las nuevas APIs de List, Menu y Popover sin el punto de entrada heredado.

### Diálogo de confirmación

```tsx
import {ConfirmDialog} from '@gravity-ui/components';

<ConfirmDialog
  open={open}
  title="¿Eliminar el proyecto?"
  message="Esto no se puede deshacer."
  textButtonApply="Eliminar"
  textButtonCancel="Cancelar"
  onClickButtonApply={handleDelete}
  onClickButtonCancel={() => setOpen(false)}
  onOpenChange={setOpen}
/>;
```

### Más ejemplos

Cada componente tiene un README junto a su código fuente con props y ejemplos; consulta `src/components/<Component>/README.md`. Demostraciones en vivo: [Storybook](https://preview.gravity-ui.com/components/).

## Desarrollo

```shell
git clone git@github.com:gravity-ui/components.git
cd components
npm ci
npm run start   # inicia Storybook en http://localhost:7009
```

Otros comandos útiles:

```shell
npm test              # ejecuta pruebas unitarias
npm run lint          # verifica el código JS y SCSS
npm run typecheck     # verifica tipos de TypeScript
```

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) antes de enviar una solicitud de extracción.

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

La capa de componentes compuestos de Gravity UI: filas de formularios listas para usar, diálogos de confirmación, notificaciones, historias, galerías y widgets similares a nivel de producto ensamblados a partir de primitivas de `@gravity-ui/uikit`, para que no tengas que reconstruirlos manualmente.

### Cuándo usar

- Diseño de formularios: `FormRow` (etiqueta + campo + descripción) en lugar de un wrapper de etiqueta/entrada hecho a mano.
- Flujos de confirmación: `ConfirmDialog` en lugar de componer `Dialog` con dos botones tú mismo.
- Widgets de producto: `Notifications`, `Stories` / `StoriesGroup`, `ChangelogDialog`, `OnboardingMenu`, `PromoSheet`, `CookieConsent`, `Reactions`, `SharePopover`, `StoreBadge`.
- Ayudantes de datos: `InfiniteScroll`, `ItemSelector`, `DelayedTextInput`, `TokenizedInput`, `Gallery`.

### Cuándo no usar

- Controles básicos, overlays, diseño y temas: usa [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) directamente; este paquete solo añade compuestos sobre él.
- Tablas de datos: usa [`@gravity-ui/table`](https://github.com/gravity-ui/table); no hay tablas aquí.
- Selectores de fecha y calendarios: usa [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- Estructuras de navegación de aplicaciones (barra lateral, encabezado, pie de página): usa [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Formularios basados en esquemas: usa [`@gravity-ui/dynamic-forms`](https://github.com/gravity-ui/dynamic-forms); `FormRow` es solo una fila de diseño.

### Errores comunes

- **Nada tiene estilo sin la configuración de uikit.** Instala `@gravity-ui/uikit`, importa `@gravity-ui/uikit/styles/styles.css` (más `fonts.css`) una vez y envuelve la aplicación en `Provider`; este paquete no distribuye estilos globales propios.
- **`FormRow` no renderiza la entrada.** Pasa el control como `children` y vincúlalo con `fieldId` que coincida con el `id` del control; la prop `label` es el texto de la etiqueta, no un elemento `<label>`.
- **`ConfirmDialog` no tiene `onConfirm` / `onCancel`.** Los manejadores son `onClickButtonApply` y `onClickButtonCancel`, y `textButtonApply` / `textButtonCancel` son obligatorios.
- **Importaciones inexistentes.** Todo se exporta desde la raíz del paquete: `import {FormRow} from '@gravity-ui/components'`. No hay importaciones de subrutas como `@gravity-ui/components/FormRow`.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/components/build/docs/INDEX.md`.