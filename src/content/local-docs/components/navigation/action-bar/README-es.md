<!--GITHUB_BLOCK-->

# ActionBar

<!--/GITHUB_BLOCK-->

El componente es una barra horizontal flexible que proporciona un diseño estandarizado para organizar elementos de navegación, acciones y contenido informativo dentro de una aplicación. Sirve como un contenedor para organizar elementos de la interfaz de usuario como breadcrumbs, botones y menús desplegables en secciones y grupos definidos.

<!--GITHUB_BLOCK-->

## Usage

```typescript jsx
import {Button} from '@gravity-ui/uikit';
import {Breadcrumbs as LegacyBreadcrumbs} from '@gravity-ui/uikit/legacy';
import {ActionBar} from '@gravity-ui/navigation';

function Page() {
  return (
    <ActionBar aria-label="Actions bar">
      <ActionBar.Section>
        <ActionBar.Group>
          <ActionBar.Item>
            <LegacyBreadcrumbs
              lastDisplayedItemsCount={1}
              firstDisplayedItemsCount={1}
              items={[{text: 'Root Item', action() {}}]}
            />
          </ActionBar.Item>
        </ActionBar.Group>

        <ActionBar.Group pull="right">
          <ActionBar.Item>
            <Button>Do something</Button>
          </ActionBar.Item>
        </ActionBar.Group>
      </ActionBar.Section>
    </ActionBar>
  );
}
```

<!--/GITHUB_BLOCK-->

El `ActionBar` proporciona varios componentes anidados que trabajan juntos para crear un diseño estructurado: `ActionBar.Section`, `ActionBar.Group`, `ActionBar.Item`, `ActionBar.Separator`.

## Propiedades

| Nombre       | Descripción                               |         Tipo          | Por defecto |
| :----------- | :---------------------------------------- | :-------------------: | :---------: |
| aria-label | Atributo `aria-label` de HTML             |       `string`        |             |
| className  | Atributo `class` de HTML                  |       `string`        |             |
| style      | Atributo `style` de HTML                  | `React.CSSProperties` |             |
| qa         | Atributo `data-qa` de HTML, usado para pruebas |       `string`        |             |

## ActionBar.Section

Componente decorativo para separar visualmente diferentes tipos de navegación.
Se presentan dos tipos de secciones: `primary` y `secondary`. Recomendamos que una aplicación tenga al menos una sección `primary`.
La sección `secondary` podría usarse para controles específicos de la aplicación, que deben acentuarse con espaciados más pequeños y un separador horizontal de la sección `primary`.

### Propiedades

| Nombre      | Descripción                                      |            Type            |   Por defecto   |
| :---------- | :----------------------------------------------- | :------------------------: | :-------------: |
| type      | El tipo especifica el estilo visual de la sección | `"primary"`, `"secondary"` | `"primary"` |
| className | Atributo `class` de HTML                         |          `string`          |                 |
| style     | Atributo `style` de HTML                         |   `React.CSSProperties`    |                 |
| qa        | Atributo `data-qa` de HTML, usado para pruebas   |          `string`          |                 |

<!--GITHUB_BLOCK-->

```tsx
import {Button} from '@gravity-ui/uikit';
import {Breadcrumbs as LegacyBreadcrumbs} from '@gravity-ui/uikit/legacy';
import {ActionBar} from '@gravity-ui/navigation';

<ActionBar aria-label="Actions bar">
  <ActionBar.Section type="secondary">
    <ActionBar.Group>
      <ActionBar.Item>
        <Button>Toggle Article TOC</Button>
      </ActionBar.Item>
    </ActionBar.Group>
  </ActionBar.Section>

  <ActionBar.Section type="primary">
    <ActionBar.Group>
      <ActionBar.Item>
        <LegacyBreadcrumbs
          lastDisplayedItemsCount={1}
          firstDisplayedItemsCount={1}
          items={[
            {text: 'Wiki Main Page', action() {}},
            {text: 'Wiki Article', action() {}},
          ]}
        />
      </ActionBar.Item>
    </ActionBar.Group>
  </ActionBar.Section>
</ActionBar>;
```

<!--/GITHUB_BLOCK-->

## ActionBar.Group

Los grupos organizan `ActionBar.Item` dentro de una sección y controlan su alineación.

### Propiedades

| Nombre             | Descripción                                                       |                                      Type                                       | Por defecto |
| :----------------- | :---------------------------------------------------------------- | :-----------------------------------------------------------------------------: | :---------: |
| pull             | Controla la alineación del grupo                                  | `"left"`, `"left-grow"`, `"right"`, `"right-grow"`, `"center"`, `"center-grow"` |             |
| stretchContainer | Establece `flex-grow: 1` para Group. Necesita soportar UIKit@7 Breadcrumbs |                                    `boolean`                                    |             |
| className        | Atributo `class` de HTML                                          |                                    `string`                                     |             |
| style            | Atributo `style` de HTML                                          |                              `React.CSSProperties`                              |             |
| qa               | Atributo `data-qa` de HTML, usado para pruebas                    |                                    `string`                                     |             |

## ActionBar.Item

Contenedor para elementos de UI como botones, breadcrumbs u otros componentes que deben estar en `ActionBar.Group`. El componente añade márgenes entre los elementos.

### Propiedades

| Nombre      | Descripción                                |         Tipo          | Por defecto |
| :---------- | :----------------------------------------- | :-------------------: | :---------: |
| spacing   | Habilita el espaciado con el elemento anterior |       `boolean`       | `true`  |
| className | Atributo `class` de HTML                     |       `string`        |             |
| style     | Atributo `style` de HTML                     | `React.CSSProperties` |             |
| qa        | Atributo `data-qa` de HTML, usado para pruebas |       `string`        |             |

## ActionBar.Separator

Divisor visual que se puede colocar entre elementos de un grupo para separarlos visualmente.

<!--GITHUB_BLOCK-->

### Example

```typescript jsx
import {Button} from '@gravity-ui/uikit';
import {Breadcrumbs as LegacyBreadcrumbs} from '@gravity-ui/uikit/legacy';
import {ActionBar} from '@gravity-ui/navigation';

function Page() {
  return (
    <ActionBar aria-label="Actions bar">
      <ActionBar.Section>
        <ActionBar.Group pull="right">
          <ActionBar.Item>
            <Button>Do something</Button>
          </ActionBar.Item>

          <ActionBar.Separator />

          <ActionBar.Item>
            <Button>Do something</Button>
          </ActionBar.Item>
        </ActionBar.Group>
      </ActionBar.Section>
    </ActionBar>
  );
}
```

<!--/GITHUB_BLOCK-->
