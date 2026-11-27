<!--GITHUB_BLOCK-->

# Select

<!--/GITHUB_BLOCK-->

`Select` est un contrôle qui fournit une liste d'options parmi lesquelles l'utilisateur peut choisir.

```tsx
import {Select} from '@gravity-ui/uikit';
```

## Options

Options à sélectionner.

### Définition des options

Vous pouvez définir les options sous forme de tableau d'objets ou comme enfants d'un composant. La première approche est utile lorsque les options nécessitent une préparation complexe et, éventuellement, une mémorisation. La seconde est pratique lorsqu'il y a peu d'options et que leur configuration ne nécessite pas de calculs complexes.

#### Liste plate

<!--SANDBOX
import {Flex, Select} from '@gravity-ui/uikit';

const options = [
    {value: 'val_1', content: 'Value 1'},
    {value: 'val_2', content: 'Value 2'},
    {value: 'val_3', content: 'Value 3'},
    {value: 'val_4', content: 'Value 4'},
];

export default function () {
    return (
        <>
            <Flex gap={1} alignItems="center">
                Array of objects
                <Select placeholder="value" options={options} />
            </Flex>
            <Flex gap={1} alignItems="center">
                Child nodes
                <Select placeholder="value">
                    <Select.Option value="val_1">Value 1</Select.Option>
                    <Select.Option value="val_2">Value 2</Select.Option>
                    <Select.Option value="val_3">Value 3</Select.Option>
                    <Select.Option value="val_4">Value 4</Select.Option>
                </Select>
            </Flex>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
// Array of objects
<Select
  placeholder="value"
  options={[
    {value: 'val_1', content: 'Value 1'},
    {value: 'val_2', content: 'Value 2'},
    {value: 'val_3', content: 'Value 3'},
    {value: 'val_4', content: 'Value 4'},
  ]}
/>
// Child nodes
<Select placeholder="value">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
```

<!--/GITHUB_BLOCK-->

#### Liste groupée

<!--SANDBOX
import {Flex, Select} from '@gravity-ui/uikit';

const groupedOptions = [
    {
        label: 'Group 1',
        options: [
            {value: 'val_1', content: 'Value 1'},
            {value: 'val_2', content: 'Value 2'},
        ],
    },
    {
        label: 'Group 2',
        options: [
            {value: 'val_3', content: 'Value 3'},
            {value: 'val_4', content: 'Value 4'},
        ],
    },
];

export default function () {
    return (
        <>
            <Flex gap={1} alignItems="center">
                Array of objects
                <Select placeholder="value" options={groupedOptions} />
            </Flex>
            <Flex gap={1} alignItems="center">
                Child nodes
                <Select placeholder="value">
                    <Select.OptionGroup label="Group 1">
                        <Select.Option value="val_1" content="Value 1" />
                        <Select.Option value="val_2" content="Value 2" />
                    </Select.OptionGroup>
                    <Select.OptionGroup label="Group 2">
                        <Select.Option value="val_3" content="Value 3" />
                        <Select.Option value="val_4" content="Value 4" />
                    </Select.OptionGroup>
                </Select>
            </Flex>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
// Array of objects
<Select
  placeholder="value"
  options={[
    {
      label: 'Group 1',
      options: [
        {value: 'val_1', content: 'Value 1'},
        {value: 'val_2', content: 'Value 2'},
      ],
    },
    {
      label: 'Group 2',
      options: [
        {value: 'val_3', content: 'Value 3'},
        {value: 'val_4', content: 'Value 4'},
      ],
    },
  ]}
/>
// Child nodes
<Select placeholder="value">
  <Select.OptionGroup label="Group 1">
    <Select.Option value="val_1" content="Value 1" />
    <Select.Option value="val_2" content="Value 2" />
  </Select.OptionGroup>
  <Select.OptionGroup label="Group 2">
    <Select.Option value="val_3" content="Value 3" />
    <Select.Option value="val_4" content="Value 4" />
  </Select.OptionGroup>
</Select>
```

<!--/GITHUB_BLOCK-->

### Stockage des données dans les options

Vous pouvez définir et stocker des données uniques dans chaque option en utilisant la propriété `option.data`. Cela peut être utile lorsque vous avez besoin d'enrichir les données lors de l'utilisation du callback `onUpdate` ou, par exemple, lors du rendu de vos options avec `renderOption`.

## Sélection de plusieurs options

Pour activer la sélection multiple, utilisez la propriété `multiple`. Sa valeur par défaut est `false`.

<!--SANDBOX
import {Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <Select multiple placeholder="values">
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Select multiple={true} placeholder="values">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
```

<!--/GITHUB_BLOCK-->

### Compteur

Vous pouvez ajouter un compteur des éléments sélectionnés au composant en utilisant la propriété `hasCounter`.

<!--SANDBOX
import {Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <Select multiple hasCounter placeholder="values">
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Select multiple={true} hasCounter={true} placeholder="values">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
```

<!--/GITHUB_BLOCK-->

## Filtrage des options

Pour activer la section de filtre, utilisez la propriété `filterable`. Sa valeur par défaut est `false`.

<!--SANDBOX
import {Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <Select filterable placeholder="Filterable">
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Select filterable={true} placeholder="Filterable">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
```

<!--/GITHUB_BLOCK-->

## Taille

Pour gérer la taille par défaut du contrôle et des options, utilisez la propriété `size`. Sa taille par défaut est `m`.

<!--SANDBOX
import {Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Select size="s" placeholder="S Size">
                <Select.Option value="val_1">Value 1</Select.Option>
            </Select>
            <Select size="m" placeholder="M Size">
                <Select.Option value="val_1">Value 1</Select.Option>
            </Select>
            <Select size="l" placeholder="L Size">
                <Select.Option value="val_1">Value 1</Select.Option>
            </Select>
            <Select size="xl" placeholder="XL Size">
                <Select.Option value="val_1">Value 1</Select.Option>
            </Select>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Select size="s" placeholder="S Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
<Select size="m" placeholder="M Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
<Select size="l" placeholder="L Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
<Select size="xl" placeholder="XL Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
```

<!--/GITHUB_BLOCK-->

## Largeur du contrôle

Par défaut, la largeur du contrôle s'étire pour correspondre à la largeur du contenu des options sélectionnées. Vous pouvez la gérer en utilisant la propriété `width` :

`'max'`: S'étire sur toute la largeur du parent.

`number`: Applique la largeur en pixels.

<!--SANDBOX
import {Select, SelectProps} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 150,
    border: '2px dashed gray',
    textAlign: 'center',
};

function SelectExample(props: SelectProps) {
    return (
        <Select {...props}>
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4>Default</h4>
                <SelectExample multiple />
            </div>
            <div style={containerStyle}>
                <h4>Max</h4>
                <SelectExample width="max" multiple />
            </div>
            <div style={containerStyle}>
                <h4>In pixels</h4>
                <SelectExample width={110} multiple />
            </div>
        </>
    );
}
SANDBOX-->

## Largeur de la popup

Vous pouvez gérer la largeur de la popup avec la propriété `popupWidth`. Les valeurs disponibles sont :

`'fit'`: Applique la largeur du contrôle.

`number`: Applique la largeur en pixels.

Points à noter sur le comportement par défaut :

- La largeur de la popup est égale à la largeur de l'option la plus large, mais pas plus large que `90vw`. Cela ne s'applique pas si vous utilisez la [virtualisation](#virtualized-list).

- Les options étroites sont étirées pour s'adapter à la largeur du contrôle.

<!--SANDBOX
import {Box, Select, SelectProps} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 200,
    border: '2px dashed gray',
    textAlign: 'center',
};

function ShortValueSelect(props: SelectProps) {
    return (
        <Select placeholder="Short value" {...props}>
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}

function LongValueSelect(props: SelectProps) {
    return (
        <Select placeholder="Long value" {...props}>
            <Select.Option value="val_1">Loooooooooooooooooooong Value 1</Select.Option>
            <Select.Option value="val_2">Loooooooooooooooooooong Value 2</Select.Option>
            <Select.Option value="val_3">Loooooooooooooooooooong Value 3</Select.Option>
            <Select.Option value="val_4">Loooooooooooooooooooong Value 4</Select.Option>
        </Select>
    );
}

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4>Default</h4>
                <Box spacing={{my: 3}}>
                    <ShortValueSelect />
                </Box>
                <Box spacing={{my: 3}}>
                    <LongValueSelect />
                </Box>
            </div>
            <div style={containerStyle}>
                <h4>Fit</h4>
                <Box spacing={{my: 3}}>
                    <ShortValueSelect popupWidth="fit" />
                </Box>
                <Box spacing={{my: 3}}>
                    <LongValueSelect popupWidth="fit" />
                </Box>
            </div>
            <div style={containerStyle}>
                <h4>In pixels</h4>
                <Box spacing={{my: 3}}>
                    <ShortValueSelect popupWidth={80} />
                </Box>
                <Box spacing={{my: 3}}>
                    <LongValueSelect popupWidth={80} />
                </Box>
            </div>
        </>
    );
}
SANDBOX-->

### Liste virtualisée

Pour un affichage optimal d'un grand nombre d'options, `Select` dispose d'un outil de virtualisation de liste intégré. La virtualisation est activée après avoir dépassé le seuil du nombre d'options (`50` par défaut). Vous pouvez gérer cette valeur en utilisant la propriété `virtualizationThreshold`.

Lors de l'utilisation de la virtualisation, certaines restrictions s'appliquent à l'élément popup :

- La largeur de la popup n'est plus ajustée à la longueur de l'option la plus longue.

- La largeur minimale de la popup est égale à la largeur du contrôle, ou `100px` si le contrôle est plus court.

<!--SANDBOX
import {Box, Select} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 200,
    border: '2px dashed gray',
    textAlign: 'center',
};

const shortOptions = Array.from({length: 1000}, (_, index) => ({
    value: String(index),
    content: `Value ${index}`,
}));

const longOptions = Array.from({length: 1000}, (_, index) => ({
    value: String(index),
    content: `Loooooooooooooooooooong Value ${index}`,
}));

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4>Default</h4>
                <Box spacing={{my: 3}}>
                    <Select placeholder="Short value" options={shortOptions} />
                </Box>
                <Box spacing={{my: 3}}>
                    <Select placeholder="Long value" options={longOptions} />
                </Box>
            </div>
            <div style={containerStyle}>
                <h4>In pixels</h4>
                <Box spacing={{my: 3}}>
                    <Select placeholder="Short value" popupWidth={80} options={shortOptions} />
                </Box>
                <Box spacing={{my: 3}}>
                    <Select placeholder="Long value" popupWidth={80} options={longOptions} />
                </Box>
            </div>
        </>
    );
}
SANDBOX-->

## Utilisation avancée

Il existe de nombreuses façons de personnaliser votre `Select`.

### Rendu d'un contrôle personnalisé

Pour rendre un contrôle personnalisé, utilisez la propriété `renderControl`.
Note : Vous devez transmettre tous les arguments à votre nœud afin d'activer un comportement cohérent, tout comme lors de l'utilisation du contrôle par défaut.

<!--SANDBOX
import {Button, Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <Select
            renderControl={({onClick, onKeyDown, ref}) => (
                <Button ref={ref} onClick={onClick} extraProps={{onKeyDown}}>
                    Custom control
                </Button>
            )}
        >
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {Button} from '@gravity-ui/uikit';

const MyComponent = () => {
  const renderControl: SelectProps['renderControl'] = ({onClick, onKeyDown, ref}) => {
    return (
      <Button
        ref={ref}
        onClick={onClick}
        extraProps={{
          onKeyDown,
        }}
      >
        Your control
      </Button>
    );
  };

  return <Select renderControl={renderControl}>/* Your options here */</Select>;
};
```

<!--/GITHUB_BLOCK-->

### Rendu d'une section de filtre personnalisée

Pour rendre une section de filtre personnalisée, utilisez la propriété `renderFilter` et définissez la propriété `filterable` sur `true`.
Note : Vous devez transmettre tous les arguments à votre nœud afin d'activer un filtre fonctionnel, tout comme lors de l'utilisation de la configuration par défaut.

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Button, Flex, Select, TextInput} from '@gravity-ui/uikit';

const renderFilter: SelectProps['renderFilter'] = (props) => {
    const {value, ref, onChange, onKeyDown} = props;

    return (
        <Flex direction="column" gap={1}>
            <TextInput
                controlRef={ref}
                controlProps={{size: 1}}
                value={value}
                onUpdate={onChange}
                onKeyDown={onKeyDown}
            />
            <Button size="xs">Do smth</Button>
        </Flex>
    );
};

export default function () {
    return (
        <Select placeholder="Custom filter" filterable renderFilter={renderFilter}>
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {Button, TextInput} from '@gravity-ui/uikit';
import type {SelectProps} from '@gravity-ui/uikit';

const MyComponent = () => {
  const renderFilter: SelectProps['renderFilter'] = (props) => {
    const {value, ref, onChange, onKeyDown} = props;

    return (
      <div>
        <TextInput
          controlRef={ref}
          controlProps={{size: 1}}
          value={value}
          onUpdate={onChange}
          onKeyDown={onKeyDown}
        />
        <Button>Do smth</Button>
      </div>
    );
  };

  return (
    <Select filterable={true} renderFilter={renderFilter}>
      /* Your options here */
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### Rendu d'options personnalisées

Pour rendre des options personnalisées, utilisez la propriété `renderOption` :

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Select} from '@gravity-ui/uikit';

const renderOption: SelectProps['renderOption'] = (option) => {
    return <div style={{color: option.data.color}}>{option.children}</div>;
};

export default function () {
    return (
        <Select placeholder="Custom options" renderOption={renderOption}>
            <Select.Option value="val_1" data={{color: '#8FE1A1'}}>
                Value 1
            </Select.Option>
            <Select.Option value="val_2" data={{color: '#38C0A8'}}>
                Value 2
            </Select.Option>
            <Select.Option value="val_3" data={{color: '#3A7AC3'}}>
                Value 3
            </Select.Option>
            <Select.Option value="val_4" data={{color: '#534581'}}>
                Value 4
            </Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import type {SelectProps} from '@gravity-ui/uikit';

const MyComponent = () => {
  const renderOption: SelectProps['renderOption'] = (option) => {
    return <div style={{color: option.data.color}}>{option.children}</div>;
  };

  return (
    <Select renderOption={renderOption}>
      <Select.Option value="val_1" data={{color: '#8FE1A1'}}>
        Value 1
      </Select.Option>
      <Select.Option value="val_2" data={{color: '#38C0A8'}}>
        Value 2
      </Select.Option>
      <Select.Option value="val_3" data={{color: '#3A7AC3'}}>
        Value 3
      </Select.Option>
      <Select.Option value="val_4" data={{color: '#534581'}}>
        Value 4
      </Select.Option>
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### Rendu d'options sélectionnées personnalisées

Pour rendre des options sélectionnées personnalisées, utilisez la propriété `renderSelectedOption` :

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Select} from '@gravity-ui/uikit';

const renderSelectedOption: SelectProps['renderSelectedOption'] = (option) => {
    return <div style={{color: option.data.color}}>{option.children}</div>;
};

export default function () {
    return (
        <Select placeholder="Custom selected options" renderSelectedOption={renderSelectedOption}>
            <Select.Option value="val_1" data={{color: '#8FE1A1'}}>
                Value 1
            </Select.Option>
            <Select.Option value="val_2" data={{color: '#38C0A8'}}>
                Value 2
            </Select.Option>
            <Select.Option value="val_3" data={{color: '#3A7AC3'}}>
                Value 3
            </Select.Option>
            <Select.Option value="val_4" data={{color: '#534581'}}>
                Value 4
            </Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import type {SelectProps} from '@gravity-ui/uikit';

const MyComponent = () => {
  const renderSelectedOption: SelectProps['renderSelectedOption'] = (option) => {
    return <div style={{color: option.data.color}}>{option.children}</div>;
  };

  return (
    <Select renderSelectedOption={renderSelectedOption}>
      <Select.Option value="val_1" data={{color: '#8FE1A1'}}>
        Value 1
      </Select.Option>
      <Select.Option value="val_2" data={{color: '#38C0A8'}}>
        Value 2
      </Select.Option>
      <Select.Option value="val_3" data={{color: '#3A7AC3'}}>
        Value 3
      </Select.Option>
      <Select.Option value="val_4" data={{color: '#534581'}}>
        Value 4
      </Select.Option>
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### Rendu d'options de hauteurs différentes

Les options ont une hauteur fixe selon la propriété `size`. Si vous avez besoin de rendre des options de hauteurs différentes, vous pouvez utiliser la propriété `option.data`. Elle stockera les informations sur la hauteur que vous devez définir pour les options, ainsi que la propriété `getOptionHeight` pour définir cette valeur.

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Select} from '@gravity-ui/uikit';

const getOptionHeight: SelectProps['getOptionHeight'] = (option) => option.data.height;

export default function () {
    return (
        <Select placeholder="Different heights" getOptionHeight={getOptionHeight}>
            <Select.Option value="val_1" data={{height: 20}}>
                Value 1
            </Select.Option>
            <Select.Option value="val_2" data={{height: 40}}>
                Value 2
            </Select.Option>
            <Select.Option value="val_3" data={{height: 60}}>
                Value 3
            </Select.Option>
            <Select.Option value="val_4" data={{height: 80}}>
                Value 4
            </Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import type {SelectProps} from '@gravity-ui/uikit';

const MyComponent = () => {
  const getOptionHeight: SelectProps['getOptionHeight'] = (option) => option.data.height;

  return (
    <Select getOptionHeight={getOptionHeight}>
      <Select.Option value="val_1" data={{height: 20}}>
        Value 1
      </Select.Option>
      <Select.Option value="val_2" data={{height: 40}}>
        Value 2
      </Select.Option>
      <Select.Option value="val_3" data={{height: 60}}>
        Value 3
      </Select.Option>
      <Select.Option value="val_4" data={{height: 80}}>
        Value 4
      </Select.Option>
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### Rendu d'un compteur personnalisé

Pour rendre un compteur personnalisé, utilisez la propriété `renderCounter`. Le compteur n'est affiché que lorsque la sélection multiple est activée (`multiple={true}`) et que `hasCounter={true}`.

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Select} from '@gravity-ui/uikit';

const renderCounter: SelectProps['renderCounter'] = (_, {count, disabled}) => {
    if (count === 0) {
        return null;
    }

    if (count >= 2) {
        return (
            <div
                style={{
                    padding: '0 8px',
                    color: disabled ? '#999' : '#027bf3',
                    fontWeight: 'bold',
                }}
            >
                +{count}
            </div>
        );
    }

    return count;
};

export default function () {
    return (
        <Select multiple hasCounter renderCounter={renderCounter}>
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import type {SelectProps} from '@gravity-ui/uikit';

const MyComponent = () => {
  const renderCounter: SelectProps['renderCounter'] = (_, {count, disabled}) => {
    if (count === 0) {
      return null;
    }
    if (count >= 2) {
      return (
        <div
          style={{
            padding: '0 8px',
            color: disabled ? '#999' : '#027bf3',
            fontWeight: 'bold',
          }}
        >
          +{count}
        </div>
      );
    }
    return count;
  };

  return (
    <Select multiple={true} hasCounter={true} renderCounter={renderCounter}>
      <Select.Option value="val_1">Value 1</Select.Option>
      <Select.Option value="val_2">Value 2</Select.Option>
      <Select.Option value="val_3">Value 3</Select.Option>
      <Select.Option value="val_4">Value 4</Select.Option>
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### Rendu de la liste d'options

La propriété `renderPopup` vous permet de contrôler le contenu de la liste d'options : changer l'ordre des éléments standard (filtre, liste), les masquer, ou ajouter des éléments personnalisés entre, avant ou après eux.

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Select} from '@gravity-ui/uikit';

const renderPopup: SelectProps['renderPopup'] = ({renderList, renderFilter}) => {
    return (
        <>
            {renderFilter()}
            <div style={{width: '100%', height: 20, backgroundColor: 'tomato'}} />
            {renderList()}
        </>
    );
};

export default function () {
    return (
        <Select filterable placeholder="Custom popup" renderPopup={renderPopup}>
            <Select.Option value="val_1" data={{color: '#8FE1A1'}}>
                Value 1
            </Select.Option>
            <Select.Option value="val_2" data={{color: '#38C0A8'}}>
                Value 2
            </Select.Option>
            <Select.Option value="val_3" data={{color: '#3A7AC3'}}>
                Value 3
            </Select.Option>
            <Select.Option value="val_4" data={{color: '#534581'}}>
                Value 4
            </Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import type {SelectProps} from '@gravity-ui/uikit';

const renderPopup: SelectProps['renderPopup'] = ({renderList, renderFilter}) => {
  return (
    <React.Fragment>
      {renderFilter()}
      <div className="CustomElement" />
      {renderList()}
    </React.Fragment>
  );
};

const MyComponent = () => {
  return (
    <Select filterable renderPopup={renderPopup}>
      <Select.Option value="val_1" data={{color: '#8FE1A1'}}>
        Value 1
      </Select.Option>
      <Select.Option value="val_2" data={{color: '#38C0A8'}}>
        Value 2
      </Select.Option>
      <Select.Option value="val_3" data={{color: '#3A7AC3'}}>
        Value 3
      </Select.Option>
      <Select.Option value="val_4" data={{color: '#534581'}}>
        Value 4
      </Select.Option>
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### Erreur

Cet état `Select` est destiné aux entrées utilisateur incorrectes. Pour modifier l'apparence du `Select`, utilisez la propriété `validationState` avec la valeur `"invalid"`. Vous pouvez éventuellement fournir un message d'erreur via la propriété `errorMessage`. Par défaut, le texte du message est rendu à l'extérieur du composant.
Vous pouvez changer cela avec la propriété `errorPlacement`.

<!--SANDBOX
import {Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Select placeholder="Placeholder" errorMessage="Error message" validationState="invalid">
                <Select.Option value="val_1">Value 1</Select.Option>
                <Select.Option value="val_2">Value 2</Select.Option>
                <Select.Option value="val_3">Value 3</Select.Option>
                <Select.Option value="val_4">Value 4</Select.Option>
            </Select>
            <Select
                placeholder="Placeholder"
                errorPlacement="inside"
                errorMessage="Error message"
                validationState="invalid"
            >
                <Select.Option value="val_1">Value 1</Select.Option>
                <Select.Option value="val_2">Value 2</Select.Option>
                <Select.Option value="val_3">Value 3</Select.Option>
                <Select.Option value="val_4">Value 4</Select.Option>
            </Select>
        </>
    );
}
SANDBOX-->

## Propriétés

| Nom                                                      | Description                                                                                                                      | Type                                     | Défaut                                                  |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | Contrôle de la classe CSS                                                                                                        | `string`                                 |                                                          |
| defaultValue                                              | Valeurs par défaut représentant les options sélectionnées en cas d'utilisation d'un état non contrôlé                                            | `string[]`                               |                                                          |
| disabled                                                  | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                                                 | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | Indique que la fenêtre contextuelle de sélection contient une section de filtre                                                                                     | `boolean`                                | `false`                                                  |
| filterOption                                              | Utilisé pour comparer une option avec le filtre                                                                                               | `function`                               |                                                          |
| filterPlaceholder                                         | Texte du placeholder par défaut pour l'entrée de filtre                                                                                            | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | Utilisé pour définir la hauteur des options personnalisées de l'utilisateur                                                                                    | `function`                               |                                                          |
| getOptionGroupHeight                                      | Utilisé pour définir la hauteur des groupes d'options personnalisés de l'utilisateur                                                                               | `function`                               |                                                          |
| hasClear                                                  | Permet d'afficher une icône pour effacer les options sélectionnées                                                                            | `boolean`                                | `false`                                                  |
| id                                                        | Attribut HTML `id`                                                                                                              | `string`                                 |                                                          |
| label                                                     | Libellé du contrôle                                                                                                                    | `string`                                 |                                                          |
| loading                                                   | Ajoute l'élément de chargement à la fin de la liste d'options. Fonctionne comme un indicateur de chargement persistant lorsque la liste d'options est vide.  | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | Indique si plusieurs options peuvent être sélectionnées dans la liste                                                                       | `boolean`                                | `false`                                                  |
| name                                                      | Nom du contrôle                                                                                                              | `string`                                 |                                                          |
| onBlur                                                    | Gestionnaire appelé lorsque l'élément perd le focus.                                                                             | `function`                               |                                                          |
| filter                                                    | Valeur du filtre contrôlé                                                                                                          | `string`                                 | `''`                                                     |
| onFilterChange                                            | Se déclenche à chaque fois après la modification du filtre                                                                                       | `function`                               |                                                          |
| onFocus                                                   | Gestionnaire appelé lorsque l'élément obtient le focus                                                                               | `function`                               |                                                          |
| onLoadMore                                                | Se déclenche lorsque l'indicateur de chargement devient visible                                                                                    | `function`                               |                                                          |
| onOpenChange                                              | Se déclenche à chaque fois après la modification de la visibilité de la fenêtre contextuelle                                                                                 | `function`                               |                                                          |
| onUpdate                                                  | Se déclenche lorsqu'une modification de la valeur de `Select` est validée par l'utilisateur                                                          | `function`                               |                                                          |
| [options](#options)                                       | Options à sélectionner                                                                                                                | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | Vue de la bordure du contrôle                                                                                                              | `string`                                 | `'round-round'`                                          |
| placeholder                                               | Texte du placeholder                                                                                                                 | `string`                                 |                                                          |
| popupClassName                                            | Classe CSS de la fenêtre contextuelle avec la liste d'options                                                                                           | `string`                                 |                                                          |
| popupPlacement                                            | Placement de la fenêtre contextuelle                                                                                                                  | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | Largeur de la fenêtre contextuelle                                                                                                                      | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | Attribut `data-qa` (identifiant de test)                                                                                                    | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | Utilisé pour rendre le contrôle utilisateur                                                                                                      | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | Utilisé pour rendre le compteur utilisateur. Fonctionne uniquement avec [hasCounter](#counter).                                                             | `function`                               |                                                          |
| renderEmptyOptions                                        | Utilisé pour rendre un nœud pour une liste d'options vide                                                                                   | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | Utilisé pour rendre la section de filtre utilisateur                                                                                               | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | Utilisé pour rendre les options utilisateur                                                                                                      | `function`                               |                                                          |
| renderOptionGroup                                         | Utilisé pour rendre les groupes d'options utilisateur                                                                                                | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | Utilisé pour rendre les options sélectionnées par l'utilisateur                                                                                             | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | Utilisé pour rendre le contenu de la liste d'options                                                                                              | `function`                               |                                                          |
| [size](#size)                                             | Taille du contrôle / des options                                                                                                           | `string`                                 | `'m'`                                                    |
| value                                                     | Valeurs représentant les options sélectionnées                                                                                           | `string[]`                               |                                                          |
| view                                                      | Vue du contrôle                                                                                                                     | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | Seuil de nombre d'options après lequel la virtualisation est activée                                                                     | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | Largeur du contrôle                                                                                                                    | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | Texte d'erreur                                                                                                                       | `string`                                 |                                                          |
| errorPlacement                                            | Position de l'erreur                                                                                                                   | `outside` `inside`                       | `outside`                                                |
| validationState                                           | État de validation                                                                                                                 | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | Affiche le nombre d'options sélectionnées. Le compteur n'apparaît que lorsque la sélection [multiple](#selecting-multiple-options) est activée. | `boolean`                                |                                                          |

## API CSS

| Nom                             | Description                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Couleur du contour si focalisé (manquant par défaut) |
