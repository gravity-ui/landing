# ColorPicker

O componente `ColorPicker` permite que os usuários selecionem cores usando uma interface interativa de seletor de cores com modos de entrada HEX/RGB e suporte opcional para canal alfa.

O seletor exibe uma amostra de cor que abre um pop-up com:

- Seletor de saturação e brilho
- Slider de matiz
- Slider de alfa (quando habilitado)
- Campos de entrada de cor (modos HEX ou RGB)

## Uso básico

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function BasicColorPicker() {
  const [color, setColor] = React.useState('#ff0000');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} />;
}
```

## Com canal alfa

O ColorPicker suporta transparência alfa quando `withAlpha` está habilitado. Isso adiciona um slider de transparência e muda para os formatos de cor HEXA/RGBA:

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function ColorPickerWithAlpha() {
  const [color, setColor] = React.useState('#ff0000ff');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} withAlpha={true} />;
}
```

## Modo compacto

Para layouts com espaço limitado, você pode renderizar apenas a amostra de cor sem exibir o texto do valor da cor:

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function CompactColorPicker() {
  return (
    <ColorPicker
      defaultValue="#00ff00"
      compact={true}
      onUpdate={(newColor) => console.log('Nova cor:', newColor)}
    />
  );
}
```

## Estados controlado e não controlado

O ColorPicker suporta padrões de uso controlados e não controlados:

```jsx
// Não controlado
<ColorPicker
  defaultValue="#ffbe5c"
  onUpdate={(color) => console.log('Cor alterada:', color)}
/>

// Controlado
<ColorPicker
  value={color}
  onUpdate={setColor}
/>
```

Você também pode controlar o estado aberto do pop-up do seletor:

```jsx
// Estado aberto controlado
<ColorPicker value={color} open={isOpen} onOpenChange={setIsOpen} onUpdate={setColor} />
```

## Propriedades

| Nome           | Descrição                                                              |           Tipo            |                                      Padrão                                       |
| :------------- | :----------------------------------------------------------------------- | :-----------------------: | :--------------------------------------------------------------------------------: |
| size           | O tamanho do `ColorPicker`                                               | `"s"` `"m"` `"l"` `"xl"`  |                                       `"m"`                                        |
| value          | Valor da cor para estado controlado (string HEX ou HEXA)                 |         `string`          |                                                                                    |
| defaultValue   | Valor de cor padrão para estado não controlado                           |         `string`          |                                    `"#000000"`                                     |
| onUpdate       | Callback quando o usuário atualiza a cor. Recebe uma string HEX(A).     | `(value: string) => void` |                                                                                    |
| popupPlacement | Posição do popup                                                         |     `PopupPlacement`      | `['bottom-start', 'bottom-end', 'left-start', 'left-end', 'top-start', 'top-end']` |
| open           | Estado controlado para abrir/fechar o popup                              |         `boolean`         |                                                                                    |
| defaultOpen    | Estado padrão para abrir/fechar o popup                                  |         `boolean`         |                                      `false`                                       |
| onOpenChange   | Callback para mudança de estado de abrir/fechar do popup                 | `(open: boolean) => void` |                                                                                    |
| withAlpha      | Habilita suporte ao canal alfa para modo HEXA/RGBA e controle de transparência |         `boolean`         |                                      `false`                                       |
| compact        | Renderiza apenas o botão do seletor sem exibir o texto do valor da cor   |         `boolean`         |                                      `false`                                       |

## Formatos de cor

O `ColorPicker` sempre retorna valores de cor no formato HEX:

- Quando `withAlpha={false}`: Retorna HEX de 6 dígitos (ex: `#ff0000`)
- Quando `withAlpha={true}`: Retorna HEXA de 8 dígitos (ex: `#ff0000ff`)

Dentro do popup do seletor, os usuários podem alternar entre os modos de entrada HEX e RGB para inserir cores em seu formato preferido.