GRAVITY_TRANSLATION_BLOCK_0_END

Este es un componente para notificaciones ajustables, también conocidas como toasts.

## Uso de Toaster

Para mostrar toasts en tu aplicación, necesitas envolver tu aplicación en `ToasterProvider`.

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

`toaster` aquí es la instancia de la clase, que mantiene el estado con todos tus toasts y se utiliza internamente en el hook `useToaster` y el HOC `withToaster`.

Pero también puedes usar `toaster` directamente en diferentes partes de tu aplicación (fuera de React):

```js
toaster.add({
  title: 'Toaster está aquí',
});
```

Debes usar la misma instancia de `Toaster` en React y fuera de él para mostrar todos los toasts en el mismo contenedor en la pantalla.
Puedes implementar esta lógica tú mismo o importar una instancia lista para usar del módulo `toaster-singleton`.

```js
import {toaster} from '@gravity-ui/uikit/toaster-singleton';
```

## Uso de `useToaster`

Puedes mostrar toasts con el hook `useToaster` en tus componentes de aplicación:

```jsx
import {useToaster} from '@gravity-ui/uikit';
import {useEffect} from 'react';

export function FoobarComponent() {
  const {add} = useToaster();

  useEffect(() => {
    add({
      title: 'Toaster está aquí',
    });
  }, []);

  return null;
}
```

El hook devuelve los métodos `add`, `update`, `remove` y `removeAll` (ver más abajo para más detalles).

## Uso de `Toaster` como HOC

Para componentes de clase, puedes usar el HOC `withToaster`, que inyectará la propiedad `toaster` en el componente.

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

## Propiedades

Estas son las props del componente `ToasterComponent`.

| Nombre      | Descripción                                         |   Tipo    | Predeterminado |
| :---------- | :-------------------------------------------------- | :-------: | :------------: |
| className | Nombre de clase personalizado para añadir al contenedor del componente | `string`  |                |
| mobile    | Configuración que gestiona las vistas móvil/escritorio     | `boolean` |                |
| hasPortal | Renderiza el toaster dentro de un `Portal` cuando está habilitado  | `boolean` | `true`         |

## Argumentos del constructor

| Parámetro | Tipo      | Predeterminado | Descripción                                         |
| :-------- | :-------- | :------------: | :-------------------------------------------------- |
| className | `string`  | `undefined`    | Nombre de clase personalizado para añadir al contenedor del componente |
| mobile    | `boolean` | `false`        | Configuración que gestiona las vistas móvil/escritorio     |

## Métodos

| Nombre del método                   | Parámetros             | Descripción                                                                                                                             |
| :---------------------------------- | :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| add(toastOptions)             | `Object`               | Crea una nueva notificación                                                                                                             |
| remove(name)                  | `string`               | Elimina manualmente una notificación existente                                                                                               |
| removeAll()                   |                        | Elimina todas las notificaciones existentes                                                                                                      |
| update(name, overrideOptions) | `string`, `Object`     | Cambia el contenido de una notificación ya renderizada. En `overrideOptions`, los campos `title`, `type`, `content` y `actions` son opcionales. |
| has(name)                     | `string`               | Comprueba si existe un toast con un nombre determinado en la lista de toasts mostrados                                                                |

## Más sobre `add`

Acepta el argumento `toastOptions` con los detalles de la notificación en curso:

| Parámetro  | Tipo                                    | Requerido | Predeterminado | Descripción                                                                                                                                                                                                                                              |
| :--------- | :-------------------------------------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string`                                | sí       |             | Nombre único de la notificación. Las notificaciones con nombres idénticos se colapsan en una sola.                                                                                                                                                       |
| title      | `string`                                |          |             | Título de la notificación.                                                                                                                                                                                                                               |
| className  | `string`                                |          |             | Clase CSS.                                                                                                                                                                                                                                               |
| autoHiding | `number` o `false`                     |          | 5000        | Número de milisegundos para retrasar el ocultamiento de la notificación. Usa `false` para deshabilitar el ocultamiento del toast después del tiempo de espera.                                                                                       |
| content    | `node`                                  |          | `undefined` | Contenido de la notificación. Esto puede ser [cualquier cosa que se pueda renderizar: números, cadenas, elementos o un array](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes).                                                          |
| theme      | `string`                                |          | `"normal"`  | Tema de la notificación. Los valores posibles son `"normal"`, `"info"`, `"success"`, `"warning"`, `danger` y `"utility"`. Si `theme` se establece en algo que no sea `"normal"`, el icono se agregará al título de la notificación. _Por defecto, no hay icono_. |
| isClosable | `boolean`                               |          | `true`      | Configuración que gestiona la visibilidad del icono X, que permite al usuario cerrar la notificación.                                                                                                                                                 |
| actions    | `ToastAction[] \| () => ReactElement`   |          | `undefined` | Array de [acciones](./types.ts#L9) que se muestran después de `content`, o una función de devolución de llamada que devuelve las acciones requeridas.                                                                                                       |
| renderIcon | `(toastProps: ToastProps) => ReactNode` |          | `undefined` | Se utiliza para personalizar el icono del toast. Por defecto, se utiliza el comportamiento basado en el tipo.                                                                                                                                              |

Cada `action` es un objeto con los siguientes parámetros:

| Parámetro        | Tipo                                           | Requerido | Por defecto | Descripción                                                              |
| :--------------- | :--------------------------------------------- | :------- | :--------- | :----------------------------------------------------------------------- |
| label            | `string`                                       | sí       |            | Descripción de la acción                                                 |
| onClick          | `() => void`                                   | sí       |            | Manejador de clic en la acción                                           |
| view             | [`ButtonView`](../Button/README.md#properties) |          | `outlined` | Apariencia de la acción, igual que `view` para `<Button/>`               |
| removeAfterClick | `boolean`                                      |          | `true`     | Habilita o deshabilita el cierre de la notificación después de hacer clic en la acción |

## API CSS

| Nombre                       | Descripción     |
| :------------------------- | :-------------- |
| `--g-toaster-width`        | Ancho del contenedor |
| `--g-toaster-item-padding` | Relleno del ítem    |
| `--g-toaster-item-gap`     | Espacio entre ítems |