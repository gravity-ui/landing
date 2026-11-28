<!--GITHUB_BLOCK-->

# PlaceholderContainer

<!--/GITHUB_BLOCK-->

`PlaceholderContainer` est un composant pour afficher du contenu avec une image, du texte et des contrôles d'action.

## Direction

`PlaceholderContainer` a des directions `row` et `column` pour la disposition du contenu. Pour le gérer, utilisez la propriété `direction`. La taille par défaut est `row`.

## Taille

Utilisez la propriété `size` pour gérer la taille de `PlaceholderContainer`. La taille par défaut est `l`. Les valeurs possibles sont `s`, `m`, `l` et `promo`. La valeur `promo` définit la largeur totale de la section de contenu sans la hauteur minimale du contenu et une taille de titre plus grande.

## Contrôles d'action

`PlaceholderContainer` peut afficher des contrôles de bouton ou un tableau de boutons. Pour l'afficher, utilisez la propriété `actions`.

<!--GITHUB_BLOCK-->

```tsx
<PlaceholderContainer
  title="Sample with action control"
  description="Some description for PlaceholderContainer component demo"
  direction="column"
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
  actions={[
    {
      text: 'Main button',
      view: 'normal',
      onClick: () => console.log('Click by main button'),
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

Vous pouvez également afficher des contrôles personnalisés :

<!--GITHUB_BLOCK-->

```tsx
<PlaceholderContainer
  title="Sample with custom action"
  description="Some description for PlaceholderContainer component demo"
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
  actions={
    <DropdownMenu
      defaultSwitcherProps={{view: 'flat-secondary'}}
      items={[
        {text: 'text 1', action: () => console.log()},
        {text: 'text 2', action: () => console.log()},
      ]}
      onSwitcherClick={(e) => console.log(e)}
      switcher={
        <Button>
          Text
          <Icon data={ChevronDown} size={16} />
        </Button>
      }
    />
  }
/>
```

<!--/GITHUB_BLOCK-->

## Image et contenu

La propriété `image` permet de configurer les paramètres `src` et `alt` de l'image ou un nœud React.

<!--GITHUB_BLOCK-->

```tsx
<PlaceholderContainer
  title="Sample with image node"
  description="Some description for PlaceholderContainer component demo"
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
/>
```

With `src` and `alt` settings:

```tsx
<PlaceholderContainer
  title="Sample with image (set by src and alt properties)"
  description="Some description for PlaceholderContainer component demo"
  direction="row"
  size="s"
  align="center"
  image={{
    src: 'https://gravity-ui.com/static/images/design/Resources/img-gravitylib.png',
    alt: 'logo',
  }}
/>
```

<!--/GITHUB_BLOCK-->

Le contenu de `PlaceholderContainer` comprend les sections de titre et de description, que vous pouvez définir avec les propriétés appropriées. Pour afficher du contenu personnalisé, utilisez la propriété `content`.

```tsx
<PlaceholderContainer
  title="Sample with custom content"
  description="Some description for PlaceholderContainer component demo"
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
      <h3>There is any custom title here</h3>
      <p>
        You can add <strong>here</strong> any long text with custom content and use custom content
        size for displaying very long texts.
      </p>
    </div>
  }
/>
```

## Alignement

Pour gérer l'alignement du contenu à l'intérieur du conteneur parent, utilisez la propriété `align`. La valeur par défaut est `center`.

## Propriétés

| Nom        | Description                                                                                                                            |                                     Type                                      |  Défaut   |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------: | :--------: |
| className  | Attribut `class` HTML (optionnel)                                                                                                      |                                   `string`                                    |            |
| direction  | Utilisé pour définir la direction de la disposition du contenu. Les valeurs possibles sont `"row"` et `"column"`.                      |                                   `string`                                    |  `"row"`   |
| size       | Taille du composant. Les valeurs possibles sont `"s"`, `"m"`, `"l"` et `"promo"`.                                                      |                                   `string`                                    |   `"l"`    |
| align      | Utilisé pour définir l'alignement horizontal du contenu. Les valeurs possibles sont `"center"` et `"left"`.                           |                                   `string`                                    | `"center"` |
| title      | Texte du titre du contenu                                                                                                              |                                   `string`                                    |            |
| description| Texte de la description du contenu                                                                                                     |                                   `string`                                    |            |
| image      | Utilisé pour définir une image par `src` ou fournir un nœud React                                                                      | `PlaceholderContainerImageNodeProps`<br/> `\| PlaceholderContainerImageProps` |            |
| content    | Utilisé pour rendre un nœud à la place du contenu (titre, description et actions)                                                     |                               `React.ReactNode`                               |            |
| actions    | Utilisé pour rendre un tableau de contrôles de bouton ou un nœud personnalisé                                                         |     `PlaceholderContainerActionProps[]`<br/> `\|        React.ReactNode `     |            |
| maxWidth   | Utilisé pour remplacer la largeur maximale par défaut du conteneur                                                                     |                               `number` `string`                               |            |
