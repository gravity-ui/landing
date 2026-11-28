<!--GITHUB_BLOCK-->

# Portal

<!--/GITHUB_BLOCK-->

`Portal` é um componente utilitário. Basicamente, é um wrapper simples em torno do [`createPortal`](https://react.dev/reference/react-dom/createPortal) do React que permite renderizar filhos em um nó DOM fora do componente pai.

```tsx
import {Portal} from '@gravity-ui/uikit';
```

## Container

Por padrão, o `Portal` renderiza seus filhos em `document.body`; no entanto, você pode alterar isso com a propriedade `container`.
Adicionalmente, você pode fornecer um container para todos os `Portal`s na subárvore do React usando o componente `PortalProvider`.

```tsx
import {Portal, PortalProvider} from '@gravity-ui/uikit'

const myRoot = document.getElementById('my-root');

<Portal>This is rendered inside document.body</Portal>
<Portal container={myRoot}>This is rendered inside #my-root node</Portal>
<PortalProvider container={myRoot}>
    <Portal>This is also rendered inside #my-root</Portal>
</PortalProvider>
```

## Propriedades

| Nome          | Descrição                                                              |       Tipo        |     Padrão     |
| :------------ | :--------------------------------------------------------------------- | :---------------: | :------------: |
| children      | Qualquer conteúdo React                                                | `React.ReactNode` |                |
| container     | Elemento DOM onde os filhos serão montados                             |   `HTMLElement`   | `document.body` |
| disablePortal | Se verdadeiro, renderiza os filhos dentro da hierarquia DOM normal. |     `boolean`     |                |
