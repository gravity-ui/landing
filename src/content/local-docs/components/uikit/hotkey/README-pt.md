<!--GITHUB_BLOCK-->

# Hotkey

<!--/GITHUB_BLOCK-->

Você pode usar o componente `Hotkey` para exibir atalhos de teclado para Mac e PC.

```tsx
import {Hotkey} from '@gravity-ui/uikit';
```

### Valor

Os atalhos de teclado são definidos no formato `<tecla>+<tecla>`, o que significa que você precisa especificar várias teclas separadas por um sinal de mais, por exemplo, `shift+tab`.

A sequência de combinações de teclas pode ser separada por um espaço: `<atalho> <atalho>`, por exemplo, `ctrl+a ctrl+c ctrl+v`.

Você pode usar `mod` como uma abreviação para `cmd` no Mac e `ctrl` para outras plataformas. Por exemplo, `mod+v` é renderizado como ⌘+A para Mac e Ctrl+A para PC.

### Visualização

`light`: Usado se o componente for exibido em um fundo claro (usado por padrão).

`dark`: Usado se o componente for exibido em um fundo escuro.

<!--SANDBOX
import {Hotkey} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Hotkey view="light" value="mod+a mod+c mod+v" />
            <Hotkey view="dark" value="mod+a mod+c mod+v" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Hotkey view="light" value="mod+a mod+c mod+v" />
<Hotkey view="dark" value="mod+a mod+c mod+v" />
```

<!--/GITHUB_BLOCK-->

### Plataforma

`pc`: Usado para exibir atalhos de teclado para um teclado de PC comum.

`mac`: Usado para exibir atalhos de teclado para um teclado Macintosh.

Por padrão, a plataforma é detectada automaticamente.

<!--SANDBOX
import {Hotkey} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Hotkey value="mod+a mod+c mod+v" />
            <Hotkey platform="pc" value="mod+a mod+c mod+v" />
            <Hotkey platform="mac" value="mod+a mod+c mod+v" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Hotkey value="mod+a mod+c mod+v" />
<Hotkey platform="pc" value="mod+a mod+c mod+v" />
<Hotkey platform="mac" value="mod+a mod+c mod+v" />
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome      | Descrição                                                                    |         Tipo          |        Padrão         |
| :-------- | :----------------------------------------------------------------------------- | :-------------------: | :-------------------: |
| view      | Usado para definir o esquema de cores                                          |  `"light"` `"dark"`   |       `"light"`       |
| platform  | Usado para selecionar a plataforma (PC ou Macintosh) para exibir o atalho de teclado |    `"pc"` `"mac"`     | Detectado automaticamente |
| title     | Valor do atalho de teclado                                                     |       `string`        |                       |
| style     | Atributo de estilo HTML                                                        | `React.CSSProperties` |                       |
| className | Nome da classe do alerta                                                       |       `string`        |                       |
