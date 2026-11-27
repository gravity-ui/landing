GRAVITY_TRANSLATION_BLOCK_0_END

Uma dica de texto simples que usa seu nó filho como âncora. Este componente aceita apenas conteúdo de texto e pode ser uma excelente
alternativa ao atributo `title` do navegador, com seu pequeno tamanho e longo atraso de exibição.

## Uso

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Conteúdo">
  <div tabIndex={0}>Âncora</div>
</Tooltip>;
```

## Âncora

Para que o `Tooltip` funcione, você deve passar um `ReactElement` válido como filho, que aceite a propriedade `ref` para `HTMLElement`
e outras propriedades para `HTMLElement`.

Alternativamente, você pode passar uma função como filho para fornecer `ref` e `props` manualmente aos seus componentes subjacentes:

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Conteúdo">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</Tooltip>;
```

## Estado Controlado

Por padrão, o `Tooltip` abre e fecha ao passar o mouse sobre a âncora. Você pode alterar esse comportamento para definir manualmente o estado aberto.
Passe seu estado para a prop `open` e altere-o a partir do callback `onOpenChange`.
O callback `onOpenChange` tem a seguinte assinatura: `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`.

## Role

O `Tooltip` aceita a propriedade `role`, que altera como ele deve agir em termos de acessibilidade.
A role `tooltip` deve ser usada quando a âncora tem seu próprio texto e a role `label` caso contrário (por exemplo, em um botão de ícone).

## Grupo de Atraso

Todas as dicas de ferramentas renderizadas sob `Provider` compartilham o atraso de abertura. A primeira dica de ferramenta paga seu próprio `openDelay`,
então um movimento acidental do mouse ainda não abre nada. Enquanto o grupo está aquecido — uma dica de ferramenta está aberta ou foi fechada
há menos de `skipDelay` — a próxima dica de ferramenta com o mouse abre instantaneamente, e não mais do que uma dica de ferramenta está aberta por vez. Isso é adequado para barras de ferramentas e linhas de botões de ícone, onde esperar pelo atraso em cada botão parece lento.
A abertura por foco é instantânea com ou sem um grupo, então o teclado não é afetado.

`skipDelay` (300 ms por padrão) é configurado com `defaultProps` do `Provider`:

```tsx
import {Provider} from '@gravity-ui/uikit';

<Provider defaultProps={{TooltipDelayGroup: {skipDelay: 500}}}>{/* ... */}</Provider>;
```

## Propriedades

| Nome          | Descrição                                                                                     |                       Tipo                       |     Padrão     |
| :------------ | :-------------------------------------------------------------------------------------------- | :----------------------------------------------: | :------------: |
| children      | Elemento âncora para o `Tooltip`                                                               |         `React.ReactElement` `Function`          |                |
| className     | Atributo HTML `class`                                                                         |                     `string`                     |                |
| closeDelay    | Número de ms para atrasar o fechamento do `Tooltip` após o fim do hover                       |                     `number`                     |      `0`       |
| container     | Elemento DOM ao qual o componente é montado via `Portal`                                      |                  `HTMLElement`                   | `document.body` |
| content       | Conteúdo que será exibido no `Tooltip`                                                        |                `React.ReactNode`                 |                |
| disablePortal | Desabilita o uso de `Portal`                                                                  |                    `boolean`                     |     `false`     |
| disabled      | Impede a abertura do `Tooltip`                                                                |                    `boolean`                     |                |
| offset        | Deslocamento do `Tooltip` em relação ao seu âncora                                            |                     `number`                     |      `4`       |
| onOpenChange  | Callback para lidar com a mudança de estado de abertura                                       |                    `Function`                    |                |
| open          | Estado de abertura controlado                                                                 |                    `boolean`                     |                |
| openDelay     | Número de ms para atrasar a exibição do `Tooltip` após o início do hover                      |                     `number`                     |     `1000`      |
| placement     | Posição do `Tooltip` em relação ao seu âncora                                                 | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa            | Atributo HTML `data-qa`, usado para testes                                                    |                     `string`                     |                |
| rest          | Quanto tempo em ms o cursor deve permanecer parado antes de abrir.                             |                     `number`                     |      `0`       |
| role          | O papel que o `Tooltip` usa                                                                   |              `"tooltip"` `"label"`               |   `"tooltip"`   |
| strategy      | O tipo de propriedade de posicionamento CSS a ser usada.                                      |                `absolute` `fixed`                |   `absolute`    |
| style         | Atributo HTML `style`                                                                         |              `React.CSSProperties`               |                |
| trigger       | Tipo de evento que deve acionar a abertura. O valor padrão `all` refere-se a `hover` e `focus`. |                `"all"` `"focus"`                 |     `"all"`     |

## API CSS

| Nome                           | Descrição        |
| :----------------------------- | :--------------- |
| `--g-tooltip-text-color`       | Cor do texto     |
| `--g-tooltip-background-color` | Cor de fundo     |
| `--g-tooltip-padding`          | Preenchimento    |
| `--g-tooltip-border-radius`    | Raio da borda    |
| `--g-tooltip-box-shadow`       | Sombra           |