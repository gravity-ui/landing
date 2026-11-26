GRAVITY_TRANSLATION_BLOCK_0_END

Este componente se utiliza para una pila de imágenes superpuestas y, opcionalmente, un control. Generalmente se refiere a avatares de usuario.

```ts
import {AvatarStack} from '@gravity-ui/uikit';
```

## Uso

Básicamente, `AvatarStack` no tiene limitaciones en cuanto a los componentes que renderiza. Vea un ejemplo de su uso común a continuación:

```tsx
<AvatarStack>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```

## Propiedades

| Nombre        | Descripción                                                                                                                                                      |                        Tipo                        |  Por defecto  |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-----------: | --- |
| max         | Determina cuántos avatares son visibles antes del botón `More`. Si el recuento de avatares está a solo 1 de `max`, el botón `More` será reemplazado por un avatar. |                      `number`                      |       3       |
| overlapSize | Determina cuánto debe superponerse cada elemento al siguiente. Puede que desee usar `s` para `Avatar`s de tamaño `xs` a `m`, `m` para tamaño `l`, y `l` para tamaño `xl`. |                   `s`, `m`, `l`                    |      `s`      |
| size        | Tamaño para el control que muestra avatares adicionales. Su valor es el mismo que el tamaño de `Avatar`.                                                                       |                    `AvatarSize`                    |               |
| className   | Nombre de la clase del nodo DOM raíz                                                                                                                                  |                      `string`                      |               |
| children    | Lista de avatares que también pueden tener envoltorios adicionales                                                                                                                |                     `Object[]`                     |               |
| renderMore  | Renderizado personalizado para el control que muestra avatares adicionales                                                                                                           | `function(options: {count: number}): ReactElement` |               |
| moreVariant | Variante del control predeterminado que muestra el 'contador' adicional                                                                                                            |                  `counter`,`dots`                  |   `counter`   |     |

### AvatarStack.MoreButton

Componente para anular el botón `More`

```tsx
<AvatarStack
  renderMore={({count}) => (
    <Tooltip content={'Más usuarios'}>
      <AvatarStack.MoreButton count={count} />
    </Tooltip>
  )}
>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```