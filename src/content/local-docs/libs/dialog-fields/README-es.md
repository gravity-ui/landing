## Descripción corta

El propósito del componente `DFDialog` es facilitar la creación de formularios, ya que utiliza `react-final-form` internamente.
Soporta varios tipos de campos predefinidos, pero el usuario puede extenderlo registrando nuevos tipos mediante `registerDialogControl`.

### Controles

- [Controles base](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - texto estático
  - `text` - texto editable
  - `multi-text` - array de strings definido por el usuario
  - `checkbox` - casilla de verificación
  - `tumbler` - interruptor
  - `radio` - botón de opción
  - `editable-list` - lista de strings eliminables
  - `multi-editable-list` - lista múltiple de strings eliminables
  - `text area` - área de texto
  - `select` - selector
  - `block` - permite añadir ReactNode
- [Registro de controles personalizados](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### Características

- Vista en línea y modal
- [Un tab](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) y [varios formularios en tabs](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [Tabs verticales/horizontales](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [Campos y tabs ocultos](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [Campos enlazados por valores](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [Validación a nivel de campo](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [Validación a nivel de formulario](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [Tabs virtualizados](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [Tabs clonables](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [Campos agrupados](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## Instalación

```bash
$ npm install @gravity-ui/dialog-fields
# Usa la versión requerida de react/react-dom en caso de que aún no las hayas instalado
$ npm install @gravity-ui/dialog-fields react@18 react-dom@18
```

Dependiendo de tu gestor de paquetes, es posible que necesites instalar `peerDependencies` manualmente.

## Uso

```ts
import {DFDialog, FormApi} from '@gravity-ui/dialog-fields';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
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
          tooltip: 'Descripción para el campo nombre',
        },
        {
          name: 'lastName',
          type: 'text',
          caption: 'Apellido',
          tooltip: 'Descripción para el campo apellido',
        },
      ]}
    />
  );
}
```

Consulta más ejemplos en [storybook](https://preview.yandexcloud.dev/dialog-fields).