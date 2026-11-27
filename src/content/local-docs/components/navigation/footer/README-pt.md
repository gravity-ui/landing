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

O componente `MobileFooter` é um rodapé para dispositivos móveis.

GRAVITY_TRANSLATION_BLOCK_1_END

## Props

O componente `MobileFooter` aceita as seguintes props:

| Prop | Tipo | Descrição | Valor padrão |
|---|---|---|---|
| `className` | `String` | Classe CSS adicional para o componente. | - |
| `withDivider` | `Boolean` | Se `true`, um divisor será exibido acima do rodapé. | `true` |
| `moreButtonTitle` | `String` | Título do botão "Mostrar mais". | `Show more` |
| `copyright` | `String` | Texto de direitos autorais. | - |
| `logo` | `Object` | Objeto com informações do logo. | - |
| `logo.icon` | `ReactNode` | Ícone do logo. | - |
| `logo.iconSize` | `Number` | Tamanho do ícone do logo. | `24` |
| `logo.text` | `String` | Texto do logo. | - |
| `menuItems` | `Array<Object>` | Lista de itens do menu. | `[]` |
| `menuItems[].text` | `String` | Texto do item do menu. | - |
| `menuItems[].href` | `String` | URL do item do menu. | - |
| `menuItems[].target` | `String` | Atributo `target` do link do item do menu. | `blank` |
| `view` | `String` | Define a aparência do rodapé. Pode ser `default` ou `clear`. | `default` |

GRAVITY_TRANSLATION_BLOCK_2_END

### `className`

GRAVITY_TRANSLATION_BLOCK_3_END

### `withDivider`

GRAVITY_TRANSLATION_BLOCK_4_END

### `moreButtonTitle`

GRAVITY_TRANSLATION_BLOCK_5_END

### `copyright`

GRAVITY_TRANSLATION_BLOCK_6_END

### `logo`

GRAVITY_TRANSLATION_BLOCK_7_END

#### `logo.icon`

GRAVITY_TRANSLATION_BLOCK_8_END

#### `logo.iconSize`

GRAVITY_TRANSLATION_BLOCK_9_END

#### `logo.text`

GRAVITY_TRANSLATION_BLOCK_10_END

### `menuItems`

GRAVITY_TRANSLATION_BLOCK_11_END

#### `menuItems[].text`

GRAVITY_TRANSLATION_BLOCK_12_END

#### `menuItems[].href`

GRAVITY_TRANSLATION_BLOCK_13_END

#### `menuItems[].target`

GRAVITY_TRANSLATION_BLOCK_14_END

### `view`

GRAVITY_TRANSLATION_BLOCK_15_END