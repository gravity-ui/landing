## Descripción corta

El propósito del componente `DFDialog` es facilitar la creación de formularios, utilizando `react-final-form` internamente.
Soporta varios tipos de campos predefinidos, pero el usuario puede extenderlo registrando nuevos campos mediante `registerDialogControl`.

### Controles

- [Controles base](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - texto estático
  - `text` - texto editable
  - `multi-text` - array de strings definido por el usuario
  - `checkbox` - casilla de verificación
  - `tumbler` - interruptor
  - `radio` - botón de radio
  - `editable-list` - lista de strings eliminables
  - `multi-editable-list` - lista múltiple de strings eliminables
  - `text area` - área de texto
  - `select` - selector
  - `block` - permite añadir ReactNode
- [Registro de controles personalizados](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### Características

- Vista en línea y modal
- [Una pestaña](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) y [varios formularios en pestañas](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [Pestañas verticales/horizontales](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [Campos y pestañas ocultos](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [Campos enlazados por valores](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [Validación a nivel de campo](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [Validación a nivel de formulario](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [Pestañas virtualizadas](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [Pestañas clonables](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [Campos agrupados](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## Instalación

```bash
$ npm install @gravity-ui/dialog-fields
```

Dependiendo de tu gestor de paquetes, es posible que necesites instalar `peerDependencies` manualmente.

Las pestañas verticales utilizan los puntos de entrada de arrastrar y soltar y virtualización de UIKit,
y los controles Select virtualizan listas de 50 o más opciones.
Envuelve tu aplicación en `Provider` de UIKit e importa `@gravity-ui/uikit/styles/styles.css`.

## Migración a UIKit 8

Reemplaza el `ThemeProvider` y `MobileProvider` raíz de la aplicación por `Provider`.
Mueve sus props a `Provider`, excepto la prop eliminada `__experimentalMobileModals`:

```diff
-import {ThemeProvider, MobileProvider} from '@gravity-ui/uikit';
+import {Provider} from '@gravity-ui/uikit';

-<ThemeProvider theme="light">
-  <MobileProvider>
-    <App />
-  </MobileProvider>
-</ThemeProvider>
+<Provider theme="light">
+  <App />
+</Provider>
```

Si tu aplicación ya utiliza `Provider`, no se necesita un wrapper adicional alrededor de `DFDialog`.
`DFDialog` mantiene sus props `visible`, `size` y `onClose`; los cambios de UIKit en
`Dialog.open`, `maxWidth` y `onOpenChange` se manejan dentro de la biblioteca.

Revisa los estilos personalizados y las instantáneas visuales:

- El espaciado del encabezado, cuerpo y pie de página del diálogo ha cambiado, afectando tanto a los formularios modales como a los en línea.
- Los botones del pie de página de escritorio ahora se ajustan a su contenido en lugar de tener un ancho mínimo de 128px.
  Para restaurar el ancho anterior, pasa `{width: 'max', className: 'form-action'}` a través de
  `footerProps.propsButtonApply` y `footerProps.propsButtonCancel`, y establece
  `.form-action { min-width: 128px; }` en tu hoja de estilos.
- Los controles de casilla de verificación de tamaño `l` ahora usan una etiqueta de 13px en lugar de 15px y un indicador de 18px en lugar de 17px. Los colores del tema también han cambiado ligeramente.
- Las pestañas verticales utilizan la nueva `List` sin componentes heredados. Los selectores personalizados que apuntan al marcado antiguo `.g-list__item` deben revisarse. La devolución de llamada `onOrderChanged({oldIndex, newIndex})` se conserva.

Los controles personalizados y las props de UIKit pasadas a través de las definiciones de campo deben seguir la
[guía de migración de UIKit](https://github.com/gravity-ui/uikit/blob/main/docs/migration-to-v8.md).
En particular, `Select` ya no acepta `virtualizationThreshold`; el control `select` integrado utiliza `ListVirtualizer` con un umbral de 50 opciones.

## Uso

Este ejemplo incluye el proveedor de la aplicación. Si tu aplicación ya tiene un `Provider` raíz, omite el wrapper que se muestra aquí.

```tsx
import {DFDialog} from '@gravity-ui/dialog-fields';
import {Provider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
    <Provider theme="light">
      <DFDialog<FormValues>
        visible={true}
        headerProps={{
          title: 'Mi formulario',
        }}
        onAdd={(form) => {
          console.log(form.getState().values);
          return Promise.resolve();
        }}
        fields={[
          {
            name: 'firstName',
            type: 'text',
            caption: 'Nombre',
            tooltip: 'Descripción del campo nombre',
          },
          {
            name: 'lastName',
            type: 'text',
            caption: 'Apellido',
            tooltip: 'Descripción del campo apellido',
          },
        ]}
      />
    </Provider>
  );
}
```

### Visibilidad condicional

Los campos y las pestañas admiten `visibilityCondition`. Con un string `when`, `isActive`
recibe el valor de ese campo:

```ts
visibilityCondition: {
  when: 'register',
  isActive: (value) => Boolean(value),
}
```

Usa un array de nombres de campos para depender de múltiples valores. `isActive` recibe
los valores como argumentos separados en el mismo orden que `when`:

```ts
visibilityCondition: {
  when: ['multiConsumer', 'register'],
  isActive: (multiConsumer, register) => Boolean(multiConsumer && register),
}
```

Los nombres son rutas desde la raíz del formulario, incluyendo prefijos de pestaña como
`general.register`. La visibilidad se actualiza cuando cambia cualquier campo referenciado.
Un campo oculto por su condición se desmonta, no solo se oculta visualmente.

Consulta más ejemplos en [storybook](https://preview.yandexcloud.dev/dialog-fields).