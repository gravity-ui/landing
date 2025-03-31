## Descripción breve

El propósito del `DFDialog` componente es facilitar la creación de formularios, se usa internamente en forma final de reacción.
Admite varios tipos de campos predefinidos, pero el usuario puede ampliarlo registrando otros nuevos mediante el uso de `registerDialogControl`.

### Controles

- [Controles básicos](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain`- texto estático
  - `text`- texto editable
  - `multi-text`- matriz de cadenas definida por el usuario
  - `checkbox`- casilla de verificación
  - `tumbler`- vaso
  - `radio`- botón de radio
  - `editable-list`- lista de cadenas extraíbles
  - `multi-editable-list`- lista múltiple de cadenas extraíbles
  - `text area`- área de texto
  - `select`- seleccionar
  - `block`- permite añadir ReactNode
- [Registro de control personalizado](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### Características

- Vista modal e in situ
- [Una pestaña](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) y [varios formularios de pestañas](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [Pestañas verticales/horizontales](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [Campos y pestañas ocultos](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [Campos enlazados por valores](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [Validación a nivel de campo](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [Validación a nivel de formulario](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [Pestañas virtualizadas](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [Pestañas que se pueden clonar](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [Campos agrupados](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## Instalar

```bash
$ npm install @gravity-ui/dialog-fields
# Use required version of react/react-dom in case you haven't installed them yet
$ npm install @gravity-ui/dialog-fields react@18 react-dom@18
```

En función de su gestor de paquetes, es posible que deba realizar la instalación `peerDependencies` manualmente.

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

Vea más ejemplos en el [libro de cuentos](https://preview.yandexcloud.dev/dialog-fields).
