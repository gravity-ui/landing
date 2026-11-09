# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

**English** · [Русский](README-ru.md)

Un renderizador de formularios basado en JSON Schema y `react-final-form`. Un único esquema describe tanto el valor como su representación: las reglas de validación son palabras clave estándar de Draft-07, y con qué se dibuja un nodo son las extensiones `nodeParameters`.

- Punto de entrada: `@gravity-ui/dynamic-forms`.
- Estado: **API estable**.
- Dos capas: `core` (motor headless) y `kit` (entidades y layouts listos para usar en `@gravity-ui/uikit`).

La API anterior `DynamicField` / `DynamicView` está disponible en `@gravity-ui/dynamic-forms/deprecated`. Las importaciones de `SchemaRenderer` del punto de entrada `/unstable` eliminado se trasladan a la raíz del paquete. Consulte la [guía de migración](MIGRATION.md) para la transición completa y [docs/deprecated](docs/deprecated) para la documentación de la API anterior.

## Instalación

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## Contenidos

- [Cómo usar](docs/en/how-to-use.md) — inicio rápido, la prop `name`, modos, qué elegir.
- [Referencia de la API](docs/en/api.md) — componentes, hooks, props, constantes, utilidades, exportaciones de `kit`, tipos.
- [Esquema](docs/en/schema.md) — `nodeParameters`, flags, anotaciones, palabras clave, `stringNumber`, `$ref`.
- [Runtime](docs/en/runtime.md) — ciclo de vida del nodo, coerción de valores, validación, errores, eventos, parches.
- [Kit](docs/en/kit.md) — layouts, catálogo de entidades, componentes de servicio, estilos.
- [Extensión](docs/en/extension.md) — entidades personalizadas, layouts, validadores, configuración, renderizador independiente.
- [Migración](MIGRATION.md) — migración desde la API principal anterior o `/unstable`, conversión de Spec, compatibilidad a través de `/deprecated`.
- [Advertencias y limitaciones](docs/en/limitations.md) — discrepancias verificadas por código, limitaciones y errores.

## Qué es

`src/lib` es un motor de formularios donde tanto el formulario como la vista general de los valores se construyen a partir de un único JSON Schema. La capa `core` no tiene controles propios: todo lo que se renderiza proviene de la configuración. La validación se realiza a través de `json-schema-library` (Draft-07) más la palabra clave personalizada `stringNumber`. La capa `kit` proporciona un registro listo: 30 claves de entidad en 6 tipos de nodos, 7 claves de layout, componentes de servicio, el hook `useExpanded`, textos de error y el conversor `specToJsonSchema` del antiguo formato Spec.

## Cómo funciona

1. **Esquema y configuración.** `useSchemaRenderer` clona `schema` y almacena el estado en un campo de servicio con un validador.
2. **Nodos.** `SchemaRendererNode` toma el subesquema por puntero, registra un campo de `final-form`, elige `entity` y `layout`.
3. **Cambio.** Una edición de valor, a través de `validateFields`, activa solo el validador del campo de servicio.
4. **Errores.** El validador distribuye los errores por nombre en `srState.errors`; los nodos con un mensaje cambiado se vuelven a renderizar.
5. **Imperativo.** `useSchemaRendererTools` aplica parches al esquema y añade errores externos, reiniciando la validación.

## Dependencias

| Paquete                                     | Rol     | Por qué                                                               |
| :------------------------------------------ | :------- | :---------------------------------------------------------------- |
| `react` / `react-dom` / `react-is`          | peer     | 18, 19. Renderizado.                                                |
| `final-form` / `react-final-form`           | peer     | Formulario, campos, envío, suscripciones.                              |
| `@gravity-ui/uikit`                         | peer     | Versión 8. Controles del kit: TextInput, Select, Checkbox, etc.        |
| `json-schema-library`                       | runtime  | Validación Draft-07 y la palabra clave personalizada `stringNumber`.        |
| `decimal.js`                                | runtime  | Comparación de números y escala en `stringNumber` y `*_with_scale`. |
| `@gravity-ui/date-components`, `date-utils` | runtime  | `DateInput` y `DateValue`.                                      |
| `@gravity-ui/icons`                         | runtime  | `iconName` en Alert, Label, TextContent.                          |
| `@gravity-ui/i18n`                          | runtime  | Localización de textos de error.                                      |
| `@bem-react/classname`, `lodash`, `uuid`    | runtime  | Clases, utilidades, claves.                                         |
| Monaco                                      | external | No incluido. Pasado a través de `userContext.MonacoEditor`.               |

## I18N

Ciertos componentes incluyen tokens de texto (palabras y frases) que están disponibles en dos idiomas: `en` (el predeterminado) y `ru`. Para establecer el idioma, use la función `configure`:

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## Desarrollo

Para iniciar el servidor de desarrollo con storybook, ejecute el siguiente comando:

```shell
npm ci
npm run dev
```