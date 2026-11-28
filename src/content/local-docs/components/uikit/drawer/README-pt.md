GRAVITY_TRANSLATION_BLOCK_0_END

O componente `Drawer` é um elemento de interface versátil usado em aplicações web para fornecer um painel deslizante que emerge da borda da tela. Este painel pode abrigar navegações, ferramentas ou conteúdo adicional. O componente é implementado usando React e transições CSS para animações suaves.

```tsx
import {Drawer} from '@gravity-ui/uikit';
```

## Uso

Aqui está um exemplo simples de como usar o componente `Drawer`:

```tsx
import React from 'react';
import {Drawer} from '@gravity-ui/uikit';

const App = () => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Abrir Drawer</button>
      <Drawer onOpenChange={setVisible} open={isVisible}>
        <p>Conteúdo do drawer</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## Posicionamento

Para controlar o posicionamento do `Drawer`, você pode passar a prop `placement`. Os valores possíveis são `left`, `right`, `top` e `bottom`.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} placement="left">
  <p>Conteúdo do drawer</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="right">
  <p>Conteúdo do drawer</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="top">
  <p>Conteúdo do drawer</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="bottom">
  <p>Conteúdo do drawer</p>
</Drawer>
```

## Animação

Por padrão, o `Drawer` desliza para dentro e para fora com uma transição. Para mostrá-lo ou escondê-lo instantaneamente, passe a prop `disableTransition`.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} disableTransition>
  <p>Conteúdo do drawer</p>
</Drawer>
```

## Redimensionável

Um `Drawer` pode ser redimensionável passando a prop `resizable`.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} resizable>
  <p>Conteúdo do drawer</p>
</Drawer>
```

Adicionalmente, você pode usar a prop `size` para controlar o tamanho do `Drawer` e passar o manipulador `onResize` para armazenar o valor redimensionado.

```tsx
const [size, setSize] = useState(500);

<Drawer onOpenChange={setVisible} open={isVisible} resizable size={size} onResize={setSize}>
  <p>Conteúdo do drawer</p>
</Drawer>;
```

## Propriedades

| Nome                    | Descrição                                                                                                                             |                Tipo                |     Padrão     |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------: | :------------: |
| className               | Atributo `class` HTML para o nó raiz                                                                                                    |              `string`              |                |
| qa                      | Atributo de teste (`data-qa`)                                                                                                           |              `string`              |                |
| style                   | Atributo `style` HTML para o nó raiz                                                                                                    |       `React.CSSProperties`        |                |
| aria-label              | Atributo `aria-label` HTML para descrever o `Drawer`                                                                                    |              `string`              |                |
| aria-labelledby         | ID do elemento de legenda visível do `Drawer`                                                                                           |              `string`              |                |
| aria-describedby        | `aria-describedby` para o elemento `Drawer`                                                                                             |              `string`              |                |
| aria-details            | `aria-details` para o elemento `Drawer` do usuário                                                                                      |              `string`              |                |
| returnFocus             | Elemento a ser focado ao fechar                                                                                                         | `boolean` `React.Ref<HTMLElement>` |     `true`     |
| initialFocus            | Elemento inicial a ser focado. Um número positivo é o índice do elemento tabulável.                                                     | `number` `React.Ref<HTMLElement>`  |                |
| placement               | Especifica o lado de onde o drawer deve deslizar                                                                                        |              `string`              |     `left`     |
| contentClassName        | Atributo `class` HTML para o nó de conteúdo                                                                                             |              `string`              |                |
| children                | Qualquer conteúdo React                                                                                                                 |         `React.ReactNode`          |                |
| container               | Elemento DOM ao qual o componente é montado via `Portal`                                                                                |           `HTMLElement`            | `document.body` |
| contentOverflow         | Determina se o `Drawer` tem seu próprio indicador de scroll interno. Por padrão, ele não tem                                            |          `visible` `auto`          |    `visible`   |
| disableBodyScrollLock   | Desabilita o bloqueio de scroll enquanto aberto                                                                                         |             `boolean`              |     `false`    |
| disableEscapeKeyDown    | Desabilita o acionamento do fechamento com `Esc`                                                                                        |             `boolean`              |     `false`    |
| disableOutsideClick     | Desabilita o acionamento do fechamento com cliques externos                                                                             |             `boolean`              |     `false`    |
| disableTransition       | Desabilita a animação do drawer                                                                                                         |             `boolean`              |     `false`    |
| disableModal            | Desabilita o gerenciamento de foco modal                                                                                                |             `boolean`              |     `false`    |
| disableLayer            | Desabilita o registro do `Drawer` no gerenciador de camadas                                                                             |             `boolean`              |     `true`     |
| disablePortal           | Desabilita o uso de `Portal`                                                                                                            |             `boolean`              |     `false`    |
| keepMounted             | O `Drawer` não será removido do DOM ao ser ocultado                                                                                     |             `boolean`              |     `false`    |
| resizable               | Habilita o redimensionamento do drawer via ponteiro                                                                                     |             `boolean`              |     `false`    |
| open                    | Gerencia a visibilidade do `Drawer`                                                                                                     |             `boolean`              |     `false`    |
| hideVeil                | Remove o véu do `Drawer` sem alterar o tratamento de clique externo                                                                     |             `boolean`              |     `false`    |
| onOpenChange            | Callback chamado no momento da mudança de estado aberto                                                                                 |             `Function`             |                |
| onTransitionIn          | O callback disparado no início da transição "in"                                                                                        |             `Function`             |                |
| onTransitionInComplete  | O callback disparado ao completar a transição "in"                                                                                      |             `Function`             |                |
| onTransitionOut         | O callback disparado no início da transição "out"                                                                                       |             `Function`             |                |
| onTransitionOutComplete | O callback disparado ao completar a transição "out"                                                                                     |             `Function`             |                |
| onResizeEnd             | Callback chamado ao final do redimensionamento                                                                                          |             `Function`             |                |
| onResize                | Callback chamado quando o drawer está sendo redimensionado                                                                              |             `Function`             |                |
| onResizeStart           | Callback chamado no início do redimensionamento                                                                                         |             `Function`             |                |
| maxSize                 | Largura ou altura máxima do drawer em pixels                                                                                            |              `number`              |                |
| minSize                 | Largura ou altura mínima do drawer em pixels                                                                                            |              `number`              |                |
| size                    | Largura ou altura do drawer em pixels. Quando a opção `auto` é passada, a largura ou altura do Drawer se ajustará ao seu conteúdo. |         `number \| 'auto'`         |                |