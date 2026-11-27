[`Tooltip`](../Tooltip/README.md) para rotular botões de ação sem texto descritivo (por exemplo, botões de ícone).

## Uso

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Ação">
  <div tabIndex={0}>Ancora</div>
</ActionTooltip>;
```

## Âncora

Para que o `ActionTooltip` funcione, você deve passar um `ReactElement` válido como filho, que aceite a propriedade `ref` para `HTMLElement`
e outras propriedades para `HTMLElement`.

Alternativamente, você pode passar uma função como filho para fornecer `ref` e `props` manualmente aos seus componentes subjacentes:

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Ação">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</ActionTooltip>;
```

## Estado Controlado

Por padrão, o `ActionTooltip` abre e fecha ao passar o mouse sobre a âncora. Você pode alterar esse comportamento para definir manualmente o estado aberto.
Passe seu estado para a prop `open` e altere-o a partir do callback `onOpenChange`.
O callback `onOpenChange` tem a seguinte assinatura: `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`.

## Grupo de Atraso

Assim como o `Tooltip`, o `ActionTooltip` compartilha o atraso de abertura com os outros tooltips do aplicativo: o primeiro tooltip de
uma barra de ferramentas paga seu `openDelay`, seus vizinhos abrem instantaneamente enquanto o grupo está aquecido. Veja a
seção [Grupo de Atraso](../Tooltip/README.md#delay-group) do `Tooltip` para obter detalhes.

## Propriedades
GRAVITY_TRANSLATION_BLOCK_0_END

| Nome          | Descrição                                                                                     |                       Tipo                       |     Padrão     |
| :------------ | :-------------------------------------------------------------------------------------------- | :----------------------------------------------: | :------------: |
| children      | Elemento âncora para o `ActionTooltip`                                                          |         `React.ReactElement` `Function`          |                |
| className     | Atributo HTML `class`                                                                          |                     `string`                     |                |
| closeDelay    | Número de ms para atrasar o fechamento do `ActionTooltip` após o fim do hover                   |                     `number`                     |      `0`       |
| container     | Elemento DOM ao qual o componente é montado via `Portal`                                          |                  `HTMLElement`                   | `document.body` |
| description   | Conteúdo da descrição                                                                             |                `React.ReactNode`                 |                |
| disablePortal | Desabilita o uso de `Portal`                                                                         |                    `boolean`                     |     `false`     |
| disabled      | Impede a abertura do `ActionTooltip`                                                        |                    `boolean`                     |                |
| hotkey        | Valor do `Hotkey` a ser exibido no canto superior direito                                                |   [`Hotkey` value](../Hotkey/README.md#value)    |                |
| offset        | Offset do `ActionTooltip` em relação à sua âncora                                                          |                     `number`                     |      `4`       |
| onOpenChange  | Callback para lidar com a mudança de estado de abertura                                                            |                    `Function`                    |                |
| open          | Estado de abertura controlado                                                                           |                    `boolean`                     |                |
| openDelay     | Número de ms para atrasar a exibição do `ActionTooltip` após o início do hover                        |                     `number`                     |     `1000`      |
| placement     | Posição do `ActionTooltip` em relação à sua âncora                                                 | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa            | Atributo HTML `data-qa`, usado para testes                                                      |                     `string`                     |                |
| rest          | Quanto tempo em ms o cursor deve permanecer parado antes de abrir.                                        |                     `number`                     |      `0`       |
| strategy      | O tipo de propriedade de posicionamento CSS a ser usada.                                                       |                `absolute` `fixed`                |   `absolute`    |
| style         | Atributo HTML `style`                                                                          |              `React.CSSProperties`               |                |
| title         | Conteúdo do título                                                                                   |                     `string`                     |                |
| trigger       | Tipo de evento que deve acionar a abertura. O valor padrão `all` refere-se a `hover` e `focus`. |                `"all"` `"focus"`                 |     `"all"`     |