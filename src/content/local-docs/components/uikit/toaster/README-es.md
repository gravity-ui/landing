<!--GITHUB_BLOCK-->

# Tostadora

<!--/GITHUB_BLOCK-->

Este es un componente para las notificaciones ajustables, también conocido como brindis.

## Uso de la tostadora

Para mostrar los brindis en su solicitud, debe envolverla. `ToasterProvider`

```jsx
import {Toaster, ToasterComponent, ToasterProvider} from '@gravity-ui/uikit';

const toaster = new Toaster();

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <ToasterProvider toaster={toaster}>
    <App />
    <ToasterComponent className="optional additional classes" />
  </ToasterProvider>,
);
```

`toaster` este es el ejemplo de la clase, que sostiene el estado con todas tus tostadas y se usa bajo el capó en `useToaster` gancho y `withToaster` HOC.

Pero también puedes usarlo `toaster` directamente en diferentes partes de tu aplicación (fuera de React):

```js
toaster.add({
  title: 'Toaster is here',
});
```

Debes usar la misma instancia de `Toaster` en React y fuera de ella para mostrar todas las tostadas en el mismo contenedor en la pantalla.
Puede implementar esta lógica usted mismo o importar una instancia lista para usar desde `toaster-singleton` el módulo.

```js
import {toaster} from '@gravity-ui/uikit/toaster-singleton';
```

## Uso `useToaster`

Puedes mostrar los brindis con el `useToaster` gancho en los componentes de tu aplicación:

```jsx
import {useToaster} from '@gravity-ui/uikit';
import {useEffect} from 'react';

export function FoobarComponent() {
  const {add} = useToaster();

  useEffect(() => {
    add({
      title: 'Toaster is here',
    });
  }, []);

  return null;
}
```

El gancho devuelve los `removeAll` métodos `add` `update`, `remove`, y (consulte los detalles a continuación).

## `Toaster` Utilización como HOC

Para los componentes de la clase, puede usar el `withToaster` HOC, que inyectará la `toaster` propiedad en el componente.

```jsx
import {Component} from 'react';
import {withToaster} from '@gravity-ui/uikit';

class FoobarComponent extends Component {
  render() {
    this.props.toaster.add({});
  }
}

const FoobarWithToaster = withToaster()(FoobarComponent);
```

## Argumentos del constructor

| Parámetro | Tipo      | Predeterminado | Descripción                                                             |
| :-------- | :-------- | :------------- | :---------------------------------------------------------------------- |
| className | `string`  | `undefined`    | Nombre de clase personalizado para agregar al contenedor de componentes |
| móvil     | `boolean` | `false`        | Configuración que administra las vistas móviles y de escritorio         |

## Métodos

| Nombre del método                    | Parámetros         | Descripción                                                                                                                                        |
| :----------------------------------- | :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| agregar (ToastOptions)               | `Object`           | Crea una nueva notificación                                                                                                                        |
| eliminar (nombre)                    | `string`           | Elimina manualmente una notificación existente                                                                                                     |
| Eliminar todo ()                     |                    | Elimina todas las notificaciones existentes                                                                                                        |
| actualizar (nombre, OverrideOptions) | `string`, `Object` | Cambia el contenido de las notificaciones ya renderizado. En `overrideOptions`, los `actions` campos `title` `type` `content`, , y son opcionales. |
| tiene (nombre)                       | `string`           | Comprueba si hay un brindis con un nombre determinado en la lista de tostadas mostradas                                                            |

## Más información sobre `add`

Acepta el `toastOptions` argumento con los detalles de la notificación en curso:

| Parámetro  | Tipo                                    | Necesario | Predeterminado | Descripción                                                                                                                                                                                                                                                                          |
| :--------- | :-------------------------------------- | :-------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nombre     | `string`                                | sí        |                | Nombre de notificación único. Las notificaciones con nombres idénticos se agrupan en una                                                                                                                                                                                             |
| título     | `string`                                |           |                | Título de la notificación                                                                                                                                                                                                                                                            |
| className  | `string`                                |           |                | clase CSS                                                                                                                                                                                                                                                                            |
| autoHiding | `number` o `false`                      |           | 5000           | Número de ms para retrasar la ocultación de la notificación. Se usa `false` para deshabilitar la ocultación de la tostada después del tiempo de espera                                                                                                                               |
| contenido  | `node`                                  |           | `undefined`    | Contenido de las notificaciones. Puede ser [cualquier cosa que se pueda representar: números, cadenas, elementos o una matriz](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)                                                                                  |
| canción    | `string`                                |           | `"normal"`     | Tema de notificación. Los valores posibles son `"normal"` `"info"`, `"success"`, `"warning"` `danger`, y `"utility"`. Si `theme` se establece en cualquier otra opción `"normal"`, el icono se añadirá al título de la notificación. _De forma predeterminada, no hay ningún icono_. |
| isClosable | `boolean`                               |           | `true`         | Configuración que gestiona la visibilidad del icono X, que permite al usuario cerrar la notificación                                                                                                                                                                                 |
| acciones   | `ToastAction[]`                         |           | `undefined`    | Conjunto de [acciones](./types.ts#L9) que se muestran después `content`                                                                                                                                                                                                              |
| renderIcon | `(toastProps: ToastProps) => ReactNode` |           | `undefined`    | Se usa para personalizar el icono de tostadas. El comportamiento basado en tipos se usa de forma predeterminada                                                                                                                                                                      |

Cada `action` es un objeto con los siguientes parámetros:

| Parámetro        | Tipo                                      | Necesario | Predeterminado | Descripción                                                                        |
| :--------------- | :---------------------------------------- | :-------- | :------------- | :--------------------------------------------------------------------------------- |
| etiqueta         | `string`                                  | sí        |                | Descripción de la acción                                                           |
| onClick          | `() => void`                              | sí        |                | Gestor de clics en acción                                                          |
| vista            | [`ButtonView`](../Button/README.md#props) |           | `outlined`     | Apariencia de acción, igual que `view` para `<Button/>`                            |
| removeAfterClick | `boolean`                                 |           | `true`         | Activa o desactiva el cierre de la notificación después de hacer clic en la acción |

## API CSS

| Nombre                     | Descripción          |
| :------------------------- | :------------------- |
| `--g-toaster-width`        | Ancho del contenedor |
| `--g-toaster-item-padding` | Relleno del artículo |
| `--g-toaster-item-gap`     | Brecha de artículos  |
