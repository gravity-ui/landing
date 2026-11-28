<!--GITHUB_BLOCK-->

# Breadcrumbs

<!--/GITHUB_BLOCK-->

`Breadcrumbs` es un elemento de navegación que muestra la ubicación actual de una página dentro de la jerarquía del sitio web. Proporciona enlaces que permiten a los usuarios regresar a niveles superiores en la jerarquía, facilitando la navegación a través de un sitio web con múltiples capas. Los breadcrumbs son especialmente útiles para sitios web y aplicaciones grandes con una estructura de páginas basada en jerarquías.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

## Ejemplo

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs>
                <Breadcrumbs.Item>Region</Breadcrumbs.Item>
                <Breadcrumbs.Item>Country</Breadcrumbs.Item>
                <Breadcrumbs.Item>City</Breadcrumbs.Item>
                <Breadcrumbs.Item>District</Breadcrumbs.Item>
                <Breadcrumbs.Item>Street</Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs>
  <Breadcrumbs.Item>Region</Breadcrumbs.Item>
  <Breadcrumbs.Item>Country</Breadcrumbs.Item>
  <Breadcrumbs.Item>City</Breadcrumbs.Item>
  <Breadcrumbs.Item>District</Breadcrumbs.Item>
  <Breadcrumbs.Item>Street</Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsExample />

<!--/GITHUB_BLOCK-->

### Eventos

Utilice la propiedad `onAction` como una función de devolución de llamada para manejar los eventos de clic en los elementos.

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs onAction={(id) => alert(id)}>
                <Breadcrumbs.Item>Region</Breadcrumbs.Item>
                <Breadcrumbs.Item>Country</Breadcrumbs.Item>
                <Breadcrumbs.Item>City</Breadcrumbs.Item>
                <Breadcrumbs.Item>District</Breadcrumbs.Item>
                <Breadcrumbs.Item>Street</Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
const [currentId, setCurrentId] = React.useState();
const items = [
    {id: 1, label: 'Region'},
    {id: 2, label: 'Country'},
    {id: 3, label: 'City'},
    {id: 4, label: 'District'},
    {id: 5, label: 'Street'},
]
<div>
    <Breadcrumbs onAction={setCurrentId}>
        {items.map((i) => <Breadcrumbs.Item key={i.id}>{i.label}</Breadcrumbs.Item>)}
    </Breadcrumbs>
    <p>You clicked item ID: {currentId}</p>
</div>
```

<!-- Storybook example -->

<BreadcrumbsEvents />

<!--/GITHUB_BLOCK-->

### Enlaces

En `Breadcrumbs`, hacer clic en un elemento normalmente activa `onAction`. Sin embargo, también puedes usarlos como enlaces a otras páginas o sitios web. Para hacerlo, agrega la propiedad `href` al componente `<Breadcrumbs.Item>`:

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs>
                <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
                <Breadcrumbs.Item href="/components">Components</Breadcrumbs.Item>
                <Breadcrumbs.Item href="/components/uikit/breadcrumbs">Breadcrumbs</Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs>
  <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/components">Components</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/components/uikit/breadcrumbs">Breadcrumbs</Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsLinks />

<!--/GITHUB_BLOCK-->

### Contexto raíz

Para ayudar a los usuarios a comprender la estructura general, algunas aplicaciones siempre muestran el punto de inicio (elemento raíz) de los Breadcrumbs, incluso cuando otros elementos están ocultos debido a limitaciones de espacio.

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Box overflow="hidden" width={200}>
                <Breadcrumbs showRoot>
                    <Breadcrumbs.Item key="home">Home</Breadcrumbs.Item>
                    <Breadcrumbs.Item key="trendy">Trendy</Breadcrumbs.Item>
                    <Breadcrumbs.Item key="2020 assets">March 2020 Assets</Breadcrumbs.Item>
                    <Breadcrumbs.Item key="winter">Winter</Breadcrumbs.Item>
                    <Breadcrumbs.Item key="holiday">Holiday</Breadcrumbs.Item>
                </Breadcrumbs>
            </Box>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Box overflow="hidden" width={200}>
  <Breadcrumbs showRoot>
    <Breadcrumbs.Item key="home">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item key="trendy">Trendy</Breadcrumbs.Item>
    <Breadcrumbs.Item key="2020 assets">March 2020 Assets</Breadcrumbs.Item>
    <Breadcrumbs.Item key="winter">Winter</Breadcrumbs.Item>
    <Breadcrumbs.Item key="holiday">Holiday</Breadcrumbs.Item>
  </Breadcrumbs>
</Box>
```

<!-- Storybook example -->

<BreadcrumbsRootContext />

<!--/GITHUB_BLOCK-->

### Separador

<!--SANDBOX
import {ChevronRight} from '@gravity-ui/icons';
import {Box, Breadcrumbs, Icon} from '@gravity-ui/uikit';

const breadcrumbsItems = [
    <Breadcrumbs.Item key="region">Region</Breadcrumbs.Item>,
    <Breadcrumbs.Item key="country">Country</Breadcrumbs.Item>,
    <Breadcrumbs.Item key="city">City</Breadcrumbs.Item>,
    <Breadcrumbs.Item key="district">District</Breadcrumbs.Item>,
    <Breadcrumbs.Item key="street">Street</Breadcrumbs.Item>,
];

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs separator=">">{breadcrumbsItems}</Breadcrumbs>
            <Breadcrumbs separator="—">{breadcrumbsItems}</Breadcrumbs>
            <Breadcrumbs separator={<Icon data={ChevronRight} size={16} />}>
                {breadcrumbsItems}
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
const breadcrumbsItems = [
  <Breadcrumbs.Item key="region">Region</Breadcrumbs.Item>,
  <Breadcrumbs.Item key="country">Country</Breadcrumbs.Item>,
  <Breadcrumbs.Item key="city">City</Breadcrumbs.Item>,
  <Breadcrumbs.Item key="district">District</Breadcrumbs.Item>,
  <Breadcrumbs.Item key="street">Street</Breadcrumbs.Item>,
];

<Breadcrumbs separator="›">{breadcrumbsItems}</Breadcrumbs>
<Breadcrumbs separator="—">{breadcrumbsItems}</Breadcrumbs>
<Breadcrumbs separator={<ChevronRight />}>{breadcrumbsItems}</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsSeparator />

<!--/GITHUB_BLOCK-->

### Breadcrumbs con iconos

<!--SANDBOX
import {Flame, House, Rocket} from '@gravity-ui/icons';
import {Box, Breadcrumbs, Flex, Icon, Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs>
                <Breadcrumbs.Item>
                    <Flex alignItems="center" gap={1}>
                        <Icon data={House} size={16} />
                        uikit
                    </Flex>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Flex alignItems="center" gap={1}>
                        <Icon data={Flame} size={16} />
                        components
                    </Flex>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Flex alignItems="center" gap={1}>
                        <Icon data={Rocket} size={16} style={{minWidth: 16}} />
                        <Text ellipsis variant="inherit">
                            Breadcrumbs
                        </Text>
                    </Flex>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs>
  <Breadcrumbs.Item>
    <Flex alignItems="center" gap={1}>
      <House /> uikit
    </Flex>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item>
    <Flex alignItems="center" gap={1}>
      <Flame /> components
    </Flex>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item>
    <Flex alignItems="center" gap={1}>
      <Rocket style={{minWidth: 16}} />
      <Text ellipsis variant="inherit">
        Breadcrumbs
      </Text>
    </Flex>
  </Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsWithIcons />

<!--/GITHUB_BLOCK-->

### Integración con routers

<!--GITHUB_BLOCK-->

#### React Router

```jsx
import {useLinkClickHandler, useHref} from 'react-router';
import {Breadcrumbs, BreadcrumbsItem} from '@gravity-ui/uikit';

function RouterLink({to, ...rest}) {
  const href = useHref(to);
  const onClick = useLinkClickHandler(to);
  return <BreadcrumbsItem {...rest} href={href} onClick={onClick} />;
}

function Navigation() {
  return (
    <Breadcrumbs itemComponent={RouterLink}>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/components">Components</RouterLink>
      <RouterLink to="/components/breadcrumbs">Breadcrumbs</RouterLink>
    </Breadcrumbs>
  );
}
```

#### Next.js

```jsx
import Link from 'next/link';
import {Breadcrumbs, BreadcrumbsItem} from '@gravity-ui/uikit';

function RouterLink({href, ...rest}) {
  return (
    <Link href={href} passHref legacyBehavior>
      <BreadcrumbsItem {...rest} />;
    </Link>
  );
}

function Navigation() {
  return (
    <Breadcrumbs itemComponent={RouterLink}>
      <RouterLink href="/">Home</RouterLink>
      <RouterLink href="/components">Components</RouterLink>
      <RouterLink href="/components/breadcrumbs">Breadcrumbs</RouterLink>
    </Breadcrumbs>
  );
}
```

#### Tanstack Router

```jsx
import {createLink} from '@tanstack/react-router';
import {Breadcrumbs, BreadcrumbsItem} from '@gravity-ui/uikit';

const RouterLink = createLink(BreadcrumbsItem);

function Navigation() {
  return (
    <Breadcrumbs itemComponent={RouterLink}>
      <RouterLink href="/">Home</RouterLink>
      <RouterLink href="/components">Components</RouterLink>
      <RouterLink href="/components/breadcrumbs">Breadcrumbs</RouterLink>
    </Breadcrumbs>
  );
}
```

<!-- Storybook example -->

<BreadcrumbsClientNavigation />

<!--/GITHUB_BLOCK-->

### Puntos de referencia (Landmarks)

Cuando los breadcrumbs se utilizan como un elemento de navegación principal para una página, se pueden colocar en un [punto de referencia de navegación](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html). Los puntos de referencia ayudan a los usuarios de tecnologías de asistencia a encontrar rápidamente las secciones principales de una página. Para crear un punto de referencia de navegación, coloque los breadcrumbs dentro de un elemento `<nav>` con un `aria-label`:

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <nav aria-label="Breadcrumbs">
                <Breadcrumbs>
                    <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
                    <Breadcrumbs.Item href="/components">Components</Breadcrumbs.Item>
                    <Breadcrumbs.Item href="/components/uikit/breadcrumbs">Breadcrumbs</Breadcrumbs.Item>
                </Breadcrumbs>
            </nav>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<nav aria-label="Breadcrumbs">
  <Breadcrumbs>
    <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item href="/components">Components</Breadcrumbs.Item>
    <Breadcrumbs.Item href="/components/uikit/breadcrumbs">Breadcrumbs</Breadcrumbs.Item>
  </Breadcrumbs>
</nav>
```

<!-- Storybook example -->

<BreadcrumbsLinks />

<!--/GITHUB_BLOCK-->

### Elementos deshabilitados

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs>
                <Breadcrumbs.Item href="#Region">Region</Breadcrumbs.Item>
                <Breadcrumbs.Item href="#Country" disabled>
                    Country
                </Breadcrumbs.Item>
                <Breadcrumbs.Item href="#City">City</Breadcrumbs.Item>
                <Breadcrumbs.Item href="#District">District</Breadcrumbs.Item>
                <Breadcrumbs.Item href="#Street" disabled>
                    Street
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs>
  <Breadcrumbs.Item href="#Region">Region</Breadcrumbs.Item>
  <Breadcrumbs.Item href="#Country" disabled>
    Country
  </Breadcrumbs.Item>
  <Breadcrumbs.Item href="#City">City</Breadcrumbs.Item>
  <Breadcrumbs.Item href="#District">District</Breadcrumbs.Item>
  <Breadcrumbs.Item href="#Street" disabled>
    Street
  </Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsDisabledItems />

<!--/GITHUB_BLOCK-->

### Contenido final

<!--SANDBOX
import {Box, Breadcrumbs, Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs endContent={<div style={{paddingInlineStart: 4}}><Button>Push</Button></div>}>
                <Breadcrumbs.Item>Region</Breadcrumbs.Item>
                <Breadcrumbs.Item>Country</Breadcrumbs.Item>
                <Breadcrumbs.Item>City</Breadcrumbs.Item>
                <Breadcrumbs.Item>District</Breadcrumbs.Item>
                <Breadcrumbs.Item>Street</Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs
  endContent={
    <Flex gap={1} spacing={{pl: 1}}>
      <Button>Test1</Button>
      <Button>Test2</Button>
    </Flex>
  }
>
  <Breadcrumbs.Item>Region</Breadcrumbs.Item>
  <Breadcrumbs.Item>Country</Breadcrumbs.Item>
  <Breadcrumbs.Item>City</Breadcrumbs.Item>
  <Breadcrumbs.Item>District</Breadcrumbs.Item>
  <Breadcrumbs.Item>Street</Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsEndContent />

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre             | Descripción                                                                  | Tipo                                       | Por defecto |
| :----------------- | :--------------------------------------------------------------------------- | :----------------------------------------- | :---------- |
| children           | Elemento de migas de pan                                                     | `React.ReactElement<BreadcrumbsItemProps>` |             |
| disabled           | Determina si `Breadcrumbs` está deshabilitado.                               | `boolean`                                  |             |
| showRoot           | Habilita o deshabilita la visualización permanente del elemento raíz si los elementos están colapsados. | `boolean`                                  |             |
| popupPlacement     | Estilo del popup del elemento colapsado.                                     | `PopupPlacement`                           |             |
| popupStyle         | Estilo del popup del elemento colapsado.                                     | `"staircase"`                              |             |
| qa                 | Atributo HTML `data-qa`, utilizado para pruebas                               | `string`                                   |             |
| separator          | Nodo separador personalizado.                                                 | `React.ReactNode`                          | "/"         |
| action             | Manejador de eventos `click`.                                                | `(id: Key) => void`                        |             |
| id                 | ID único del elemento.                                                       | `string`                                   |             |
| className          | Nombre de la clase CSS para el elemento.                                     | `string`                                   |             |
| style              | Establece el estilo en línea para el elemento.                               | `CSSProperties`                            |             |
| aria-label         | Define un valor de cadena que etiqueta el elemento actual.                   | `string`                                   |             |
| aria-labelledby    | Identifica el(los) elemento(s) que etiquetan el elemento actual.             | `string`                                   |             |
| aria-describedby   | Identifica el(los) elemento(s) que describen el objeto.                      | `string`                                   |             |
| endContent         | Nodo del usuario renderizado después del último elemento de migas de pan.    | `React.ReactNode`                          |             |

### BreadcrumbsItemProps

| Nombre       | Descripción                                                    | Tipo                              | Por defecto |
| :----------- | :------------------------------------------------------------- | :-------------------------------- | :---------- |
| children   | Contenido de las migas de pan.                                   | `string`                          |             |
| title      | Representación en cadena del contenido del elemento.                    | `string`                          |             |
| aria-label | Etiqueta de accesibilidad para el elemento.                              | `string`                          |             |
| href       | URL a usar para el hipervínculo.                                  | `string`                          |             |
| target     | Ventana de destino para el enlace.                                    | `React.HTMLAttributeAnchorTarget` |             |
| rel        | Relación entre el recurso enlazado y la página actual. | `string`                          |             |
| disabled   | Si el BreadcrumbsItem está deshabilitado.                       | `boolean`                         |             |

GRAVITY_
