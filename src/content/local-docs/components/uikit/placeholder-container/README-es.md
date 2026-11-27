`PlaceholderContainer` es un componente para mostrar contenido con una imagen, contenido de texto y controles de acción.

## Dirección

`PlaceholderContainer` tiene direcciones `row` y `column` para la disposición del contenido. Para gestionarlo, utiliza la propiedad `direction`. El tamaño predeterminado es `row`.

## Tamaño

Utiliza la propiedad `size` para gestionar el tamaño de `PlaceholderContainer`. El tamaño predeterminado es `l`. Los valores posibles son `s`, `m`, `l` y `promo`. El valor `promo` establece el ancho completo de la sección de contenido sin la altura mínima de contenido y un tamaño de título más grande.

## Controles de acción

`PlaceholderContainer` puede renderizar controles de botón o un array de botones. Para mostrarlo, utiliza la propiedad `actions`.

GRAVITY_TRANSLATION_BLOCK_1_END

También puedes renderizar controles personalizados:

GRAVITY_TRANSLATION_BLOCK_2_END

## Imagen y contenido

La propiedad `image` permite configurar los ajustes `src` y `alt` de la imagen o un nodo React.

GRAVITY_TRANSLATION_BLOCK_3_END

El contenido de `PlaceholderContainer` consta de las secciones de título y descripción, que puedes establecer con las propiedades correspondientes. Para renderizar contenido personalizado, utiliza la propiedad `content`.

```tsx
<PlaceholderContainer
  title="Ejemplo con contenido personalizado"
  description="Alguna descripción para la demostración del componente PlaceholderContainer"
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
      <h3>Aquí hay un título personalizado</h3>
      <p>
        Puedes añadir <strong>aquí</strong> cualquier texto largo con contenido personalizado y usar el tamaño de contenido personalizado para mostrar textos muy largos.
      </p>
    </div>
  }
/>
```

## Alineación

Para gestionar la alineación del contenido dentro del contenedor padre, utiliza la propiedad `align`. El valor predeterminado es `center`.

## Propiedades

| Nombre        | Descripción                                                                                                                            |                                     Tipo                                      |  Por defecto   |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------: | :------------: |
| className   | Atributo `class` de HTML (opcional)                                                                                                    |                                   `string`                                    |                |
| direction   | Se utiliza para establecer la dirección del diseño del contenido. Los valores posibles son `"row"` y `"column"`.                        |                                   `string`                                    |  `"row"`   |
| size        | Tamaño del componente. Los valores posibles son `"s"`, `"m"`, `"l"` y `"promo"`.                                                       |                                   `string`                                    |   `"l"`    |
| align       | Se utiliza para establecer la alineación horizontal del contenido. Los valores posibles son `"center"` y `"left"`.                     |                                   `string`                                    | `"center"` |
| title       | Texto del título del contenido                                                                                                         |                                   `string`                                    |                |
| description | Texto de la descripción del contenido                                                                                                  |                                   `string`                                    |                |
| image       | Se utiliza para establecer una imagen mediante `src` o proporcionar un nodo React                                                       | `PlaceholderContainerImageNodeProps`<br/> `\| PlaceholderContainerImageProps` |                |
| content     | Se utiliza para renderizar un nodo en lugar del contenido (título, descripción y acciones)                                             |                               `React.ReactNode`                               |                |
| actions     | Se utiliza para renderizar un array de controles de botón o un nodo personalizado                                                      |     `PlaceholderContainerActionProps[]`<br/> `\|        React.ReactNode `     |                |
| maxWidth    | Se utiliza para anular el ancho máximo predeterminado del contenedor                                                                    |                               `number` `string`                               |                |