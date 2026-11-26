`PlaceholderContainer` é um componente para exibir conteúdo com uma imagem, conteúdo de texto e controles de ação.

## Direção

`PlaceholderContainer` possui direções `row` e `column` para o layout do conteúdo. Para gerenciá-lo, use a propriedade `direction`. O tamanho padrão é `row`.

## Tamanho

Use a propriedade `size` para gerenciar o tamanho do `PlaceholderContainer`. O tamanho padrão é `l`. Os valores possíveis são `s`, `m`, `l` e `promo`. O valor `promo` define a largura total da seção de conteúdo sem a altura mínima de conteúdo e um tamanho de título maior.

## Controles de ação

`PlaceholderContainer` pode renderizar controles de botão ou um array de botões. Para exibi-lo, use a propriedade `actions`.

GRAVITY_TRANSLATION_BLOCK_1_END

Você também pode renderizar controles personalizados:

GRAVITY_TRANSLATION_BLOCK_2_END

## Imagem e conteúdo

A propriedade `image` permite configurar as definições `src` e `alt` da imagem ou um nó React.

GRAVITY_TRANSLATION_BLOCK_3_END

O conteúdo do `PlaceholderContainer` é composto pelas seções de título e descrição, que você pode definir com as propriedades apropriadas. Para renderizar conteúdo personalizado, use a propriedade `content`.

```tsx
<PlaceholderContainer
  title="Exemplo com conteúdo personalizado"
  description="Alguma descrição para a demonstração do componente PlaceholderContainer"
  direction="row"
  size="s"
  align="center"
  image={
    <svg width="230" height="230" viewBox="0 0 230 230" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#DDDDDD" height="100%" transform="matrix(1 0 0 1 0 0)" width="100%" />
        <text
          fill="#999999"
          fontFamily="Sans-serif"
          fontSize="16"
          strokeWidth="0"
          textAnchor="middle"
          transform="matrix(1.88041 0 0 1.88041 -48.1289 -81.7475)"
          x="86.49"
          y="114"
        >
          1:1
        </text>
      </g>
    </svg>
  }
  content={
    <div>
      <h3>Aqui há um título personalizado</h3>
      <p>
        Você pode adicionar <strong>aqui</strong> qualquer texto longo com conteúdo personalizado e usar o tamanho de conteúdo personalizado para exibir textos muito longos.
      </p>
    </div>
  }
/>
```

## Alinhamento

Para gerenciar o alinhamento do conteúdo dentro do contêiner pai, use a propriedade `align`. O valor padrão é `center`.

## Propriedades

| Nome        | Descrição                                                                                |                                     Tipo                                      |  Padrão   |
| :---------- | :----------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------: | :--------: |
| className   | Atributo `class` do HTML (opcional)                                                          |                                   `string`                                    |            |
| direction   | Usado para definir a direção do layout do conteúdo. Os valores possíveis são `"row"` e `"column"`.  |                                   `string`                                    |  `"row"`   |
| size        | Tamanho do componente. Os valores possíveis são `"s"`, `"m"`, `"l"` e `"promo"`.                |                                   `string`                                    |   `"l"`    |
| align       | Usado para definir o alinhamento horizontal do conteúdo. Os valores possíveis são `"center"` e `"left"`. |                                   `string`                                    | `"center"` |
| title       | Texto do título do conteúdo                                                                         |                                   `string`                                    |            |
| description | Texto da descrição do conteúdo                                                                   |                                   `string`                                    |            |
| image       | Usado para definir uma imagem por `src` ou fornecer um nó React                                      | `PlaceholderContainerImageNodeProps`<br/> `\| PlaceholderContainerImageProps` |            |
| content     | Usado para renderizar um nó em vez do conteúdo (título, descrição e ações)                 |                               `React.ReactNode`                               |            |
| actions     | Usado para renderizar um array de controles de botão ou um nó personalizado                                |     `PlaceholderContainerActionProps[]`<br/> `\|        React.ReactNode `     |            |
| maxWidth    | Usado para substituir a largura máxima padrão do contêiner                                    |                               `number` `string`                               |            |