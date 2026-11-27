<!--GITHUB_BLOCK-->

# DefinitionList

<!--/GITHUB_BLOCK-->

El componente para mostrar una lista de definiciones con el término y la definición separados por puntos.

```tsx
import {DefinitionList} from '@gravity-ui/uikit';
```

## Ejemplos

<!--SANDBOX
import {DefinitionList} from '@gravity-ui/uikit';

export default function () {
    return (
        <DefinitionList nameMaxWidth={100} contentMaxWidth={100}>
            <DefinitionList.Item name="Node value with copy" copyText="value">
                <strong>value with copy</strong>
            </DefinitionList.Item>
            <DefinitionList.Item name="Empty value with copy" copyText="nothing to copy" />
        </DefinitionList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<DefinitionList nameMaxWidth={100} contentMaxWidth={100}>
  <DefinitionList.Item name="Node value with copy" copyText="value">
    <strong>value with copy</strong>
  </DefinitionList.Item>
  <DefinitionList.Item name="Empty value with copy" copyText="nothing to copy" />
</DefinitionList>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre               | Descripción                                                                                         |              Tipo              |   Predeterminado    |
| :------------------- | :-------------------------------------------------------------------------------------------------- | :----------------------------: | :-----------------: |
| [children](#items) | Elementos de la lista                                                                               |       `React.ReactNode`        |                     |
| responsive         | Si se establece en `true`, la lista ocupará el 100% del ancho de su padre                                            |           `boolean`            |                     |
| direction          | Si se establece en `vertical`, el contenido se ubicará debajo del nombre y la lista ocupará el 100% del ancho de su padre | `'horizontal'` \| `'vertical'` | 'horizontal' |
| nameMaxWidth       | Ancho máximo del término                                                                               |            `number`            |                     |
| contentMaxWidth    | Ancho máximo de la definición                                                                         |            `number`            |                     |
| className          | Nombre de la clase para la lista de definiciones                                                                  |            `string`            |                     |

### Items

Los hijos de `DefinitionList` deben ser componentes de tipo `DefinitionList.Item` con las siguientes propiedades:

| Nombre     | Descripción                                      |           Tipo            | Predeterminado |
| :--------- | :----------------------------------------------- | :-----------------------: | :------------: |
| name     | Término                                             |        `ReactNode`        |                |
| children | Definición                                       |        `ReactNode`        |                |
| copyText | Si se establece, se mostrará un icono para copiar este texto |         `string`          |                |
| note     | Si se establece, se mostrará un `HelpMark` junto al término      | `string \| HelpMarkProps` |                |

## API CSS

| Nombre                           | Descripción                         |
| :----------------------------- | :---------------------------------- |
| `--g-definition-list-item-gap` | Espacio entre los elementos de la lista de definiciones |
