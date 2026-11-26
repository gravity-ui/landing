# Footer e MobileFooter

Os componentes de rodapé da página. Use `Footer` para a versão desktop e `MobileFooter` para a versão mobile.
Ambos os componentes têm as mesmas propriedades.

## Propriedades

| Propriedade                                                                              | Tipo                             | Obrigatório | Padrão | Descrição                   |
| :--------------------------------------------------------------------------------------- | :------------------------------- | :---------: | :------ | :---------------------------- |
| className                                                                                | `String`                         |             |         | Nome da classe do rodapé             |
| [menuItems](https://github.com/gravity-ui/uikit/tree/main/src/components/Menu)           | `FooterMenuItem[]`               |             |         | Lista de itens do menu do rodapé     |
| withDivider                                                                              | `Boolean`                        |             |         | Mostrar borda superior no rodapé |
| moreButtonTitle                                                                          | `String`                         |             |         | O título do botão de mais itens   |
| onMoreButtonClick                                                                        | `MouseEventHandler<HTMLElement>` |             |         | O manipulador de clique do botão mais |
| [view](#view)                                                                            | `normal` ou `clear`              |             |         | A visualização do rodapé               |
| [logo](https://preview.gravity-ui.com/navigation/?path=/story/components-logo--showcase) | `LogoProps`                      |             |         | As propriedades do logo do serviço   |
| logoWrapperClassName                                                                     | `string`                         |             |         | O nome da classe do wrapper do logo   |
| copyright                                                                                | `string`                         |             |         | O copyright                 |

### view

- normal - fundo branco e todos os elementos configurados
- clear - fundo transparente e apenas o copyright

### Uso

Veja as demonstrações

- Desktop: `src/components/Footer/desktop/__stories__/FooterShowcase.tsx`,
- Mobile: `src/components/Footer/mobile/__stories__/MobileFooterShowcase.tsx`.

### Exemplos

#### Footer

```tsx
import { Footer } from '@gravity-ui/navigation';

<Footer
    className="page-footer"
    withDivider={false}
    moreButtonTitle="Mostrar mais"
    copyright={`@ ${new Date().getFullYear()} "Meu Serviço"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'Meu Serviço'
    }}
    menuItems={[
        {
            text: 'Sobre o Serviço',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentação',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidencial',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<Footer
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "Meu Serviço"`}
    view="clear"
/>
```

#### MobileFooter

```tsx
import { MobileFooter } from '@gravity-ui/navigation';
```

<MobileFooter
    className="page-footer"
    withDivider={false}
    moreButtonTitle="Mostrar mais"
    copyright={`@ ${new Date().getFullYear()} "Meu Serviço"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'Meu Serviço'
    }}
    menuItems={[
        {
            text: 'Sobre o Serviço',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentação',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidencial',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "Meu Serviço"`}
    view="clear"
/>
```

O componente `MobileFooter` é usado para exibir informações de rodapé em dispositivos móveis. Ele pode ser configurado com vários parâmetros para personalizar sua aparência e conteúdo.

## Propriedades

O componente `MobileFooter` aceita as seguintes propriedades:

| Propriedade | Tipo | Descrição | Valor padrão |
| ----------- | ---- | --------- | ----------- |
| `className` | `String` | Uma classe CSS adicional para aplicar ao componente. | `undefined` |
| `withDivider` | `Boolean` | Se um divisor deve ser exibido acima do rodapé. | `true` |
| `moreButtonTitle` | `String` | O texto a ser exibido no botão "Mostrar mais". | `undefined` |
| `copyright` | `String` | O texto de copyright a ser exibido no rodapé. | `undefined` |
| `logo` | `Object` | Um objeto contendo informações do logotipo, incluindo `icon` e `text`. | `undefined` |
| `menuItems` | `Array<Object>` | Uma matriz de objetos, onde cada objeto representa um item do menu com `text` e `href`. | `[]` |
| `view` | `String` | A visualização do rodapé. Pode ser `'default'` ou `'clear'`. | `'default'` |

## Exemplos

### Exemplo 1: Rodapé móvel básico

```jsx
<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
/>
```

### Exemplo 2: Rodapé móvel com divisor, botão "Mostrar mais" e itens de menu

```jsx
<MobileFooter
    className="page-footer"
    withDivider={true}
    moreButtonTitle="Show more"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    menuItems={[
        {
            text: 'About Service',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>
```

### Exemplo 3: Rodapé móvel com logotipo

```jsx
<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'My Service'
    }}
/>
```

### Exemplo 4: Rodapé móvel com visualização "clear"

```jsx
<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    view="clear"
/>
```