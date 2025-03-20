## Descripción breve

El propósito del componente `DFDialog` es facilitar la creación de formularios, utiliza react-final-form internamente.
Admite varios tipos predefinidos de campos, pero el usuario puede ampliarlo registrando nuevos mediante el uso de `registerDialogControl`.

### Controles

- [Controles básicos](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - texto estático
  - `text` - texto editable
  - `multi-text` - array de cadenas definido por el usuario
  - `checkbox` - casilla de verificación
  - `tumbler` - interruptor
  - `radio` - botón de radio
  - `editable-list` - lista de cadenas eliminables
  - `multi-editable-list` - multi lista de cadenas eliminables
  - `text area` - área de texto
  - `select` - selector
  - `block` - permite añadir ReactNode
- [Registro de control personalizado](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### Características

- Vista en el lugar y modal
- [Formularios de una pestaña](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) y [varias pestañas](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [Pestañas verticales/horizontales](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [Campos y pestañas ocultos](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [Campos vinculados por valores](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [Validación a nivel de campo](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [Validación a nivel de formulario](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [Pestañas virtualizadas](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [Pestañas clonables](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [Campos agrupados](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## Instalación

```bash
$ npm install @gravity-ui/dialog-fields
# Usa la versión requerida de react/react-dom en caso de que aún no los hayas instalado
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
        title: 'My form',
      }}
      onAdd={(form) => {
        console.log(form.getState().values);
        return Promise.resolve();
      }}
      fields={[
        {
          name: 'firstName',
          type: 'text',
          caption: 'First name',
          tooltip: 'Description for first name field',
        },
        {
          name: 'lastName',
          type: 'text',
          caption: 'LastName',
          tooltip: 'Description for last name field',
        },
      ]}
    />
  );
}
```

Ver más ejemplos en [storybook](https://preview.yandexcloud.dev/dialog-fields).
