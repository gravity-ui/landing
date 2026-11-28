GRAVITY_TRANSLATION_BLOCK_0_END

Este é um componente para notificações ajustáveis, também conhecidas como toasts.

## Usando Toaster

Para exibir toasts em sua aplicação, você precisa envolver sua aplicação em `ToasterProvider`.

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

`toaster` aqui é a instância da classe, que mantém o estado com todos os seus toasts e é usada internamente no hook `useToaster` e no HOC `withToaster`.

Mas você também pode usar `toaster` diretamente em diferentes partes de sua aplicação (fora do React):

```js
toaster.add({
  title: 'Toaster está aqui',
});
```

Você deve usar a mesma instância de `Toaster` no React e fora dele para exibir todos os toasts no mesmo contêiner na tela.
Você pode implementar essa lógica você mesmo ou importar uma instância pronta para uso do módulo `toaster-singleton`.

```js
import {toaster} from '@gravity-ui/uikit/toaster-singleton';
```

## Usando `useToaster`

Você pode exibir toasts com o hook `useToaster` em seus componentes de aplicativo:

```jsx
import {useToaster} from '@gravity-ui/uikit';
import {useEffect} from 'react';

export function FoobarComponent() {
  const {add} = useToaster();

  useEffect(() => {
    add({
      title: 'Toaster está aqui',
    });
  }, []);

  return null;
}
```

O hook retorna os métodos `add`, `update`, `remove` e `removeAll` (veja abaixo para mais detalhes).

## Usando `Toaster` como um HOC

Para componentes de classe, você pode usar o HOC `withToaster`, que injetará a propriedade `toaster` no componente.

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

## Propriedades

Estas são as props do componente `ToasterComponent`.

| Nome      | Descrição                                         |   Tipo    | Padrão |
| :-------- | :-------------------------------------------------- | :-------: | :-----: |
| className | Nome de classe personalizado para adicionar ao contêiner do componente | `string`  |         |
| mobile    | Configuração que gerencia visualizações mobile/desktop     | `boolean` |         |
| hasPortal | Renderiza o toaster dentro de um `Portal` quando ativado  | `boolean` | `true`  |

## Argumentos do construtor

| Parâmetro | Tipo      | Padrão      | Descrição                                         |
| :-------- | :-------- | :---------- | :-------------------------------------------------- |
| className | `string`  | `undefined` | Nome de classe personalizado para adicionar ao contêiner do componente |
| mobile    | `boolean` | `false`     | Configuração que gerencia visualizações mobile/desktop     |

## Métodos

| Nome do método                | Parâmetros             | Descrição                                                                                                                             |
| :---------------------------- | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| add(toastOptions)             | `Object`               | Cria uma nova notificação                                                                                                             |
| remove(name)                  | `string`               | Exclui manualmente uma notificação existente                                                                                          |
| removeAll()                   |                        | Exclui todas as notificações existentes                                                                                               |
| update(name, overrideOptions) | `string`, `Object`     | Altera o conteúdo de uma notificação já renderizada. Em `overrideOptions`, os campos `title`, `type`, `content` e `actions` são opcionais. |
| has(name)                     | `string`               | Verifica se existe um toast com o nome especificado na lista de toasts exibidos                                                       |

## Mais sobre `add`

Ele aceita o argumento `toastOptions` com os detalhes da notificação em andamento:

| Parâmetro  | Tipo                                    | Obrigatório | Padrão      | Descrição                                                                                                                                                                                                                                                |
| :--------- | :-------------------------------------- | :---------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string`                                | sim         |             | Nome exclusivo da notificação. Notificações com nomes idênticos são colapsadas em uma.                                                                                                                                                                      |
| title      | `string`                                |             |             | Título da notificação.                                                                                                                                                                                                                                   |
| className  | `string`                                |             |             | Classe CSS.                                                                                                                                                                                                                                              |
| autoHiding | `number` ou `false`                     |             | 5000        | Número de ms para atrasar o ocultamento da notificação. Use `false` para desativar o ocultamento do toast após o tempo limite.                                                                                                                             |
| content    | `node`                                  |             | `undefined` | Conteúdo da notificação. Isso pode ser [qualquer coisa que possa ser renderizada: números, strings, elementos ou um array](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes).                                                                          |
| theme      | `string`                                |             | `"normal"`  | Tema da notificação. Os valores possíveis são `"normal"`, `"info"`, `"success"`, `"warning"`, `danger` e `"utility"`. Se `theme` for definido como qualquer coisa diferente de `"normal"`, o ícone será adicionado ao título da notificação. _Por padrão, não há ícone_. |
| isClosable | `boolean`                               |             | `true`      | Configuração que gerencia a visibilidade do ícone X, que permite ao usuário fechar a notificação.                                                                                                                                                 |
| actions    | `ToastAction[] \| () => ReactElement`   |             | `undefined` | Array de [ações](./types.ts#L9) que são exibidas após `content`, ou um callback que retornou as ações necessárias.                                                                                                                                        |
| renderIcon | `(toastProps: ToastProps) => ReactNode` |             | `undefined` | Usado para personalizar o ícone do toast. O comportamento baseado em tipo é usado por padrão.                                                                                                                                                  |

Cada `action` é um objeto com os seguintes parâmetros:

| Parâmetro        | Tipo                                           | Obrigatório | Padrão    | Descrição                                                              |
| :--------------- | :--------------------------------------------- | :------- | :--------- | :----------------------------------------------------------------------- |
| label            | `string`                                       | sim      |            | Descrição da ação                                                        |
| onClick          | `() => void`                                   | sim      |            | Manipulador de clique na ação                                            |
| view             | [`ButtonView`](../Button/README.md#properties) |          | `outlined` | Aparência da ação, o mesmo que `view` para `<Button/>`                   |
| removeAfterClick | `boolean`                                      |          | `true`     | Habilita ou desabilita o fechamento da notificação após o clique na ação |

## API CSS

| Nome                       | Descrição     |
| :------------------------- | :-------------- |
| `--g-toaster-width`        | Largura do container |
| `--g-toaster-item-padding` | Padding do item    |
| `--g-toaster-item-gap`     | Espaçamento do item        |