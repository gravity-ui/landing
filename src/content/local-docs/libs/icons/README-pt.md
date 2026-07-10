# @gravity-ui/icons &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/icons)](https://www.npmjs.com/package/@gravity-ui/icons) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/icons/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/icons/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/icons/)

Um pacote de ícones do Gravity UI. Os ícones têm duas fontes: SVG e React. Dê uma olhada na página [showcase](https://preview.gravity-ui.com/icons/).

## Instalação

```shell
npm install --save-dev @gravity-ui/icons
```

## Uso

### React

```js
import Cloud from '@gravity-ui/icons/Cloud';
```

ou

```js
import {Cloud} from '@gravity-ui/icons';
```

### SVG

> Você pode precisar de um loader apropriado para isso

```js
import cloudIcon from '@gravity-ui/icons/svgs/cloud.svg';
```

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

O conjunto oficial de ícones SVG para Gravity UI, fornecido como componentes React e arquivos `.svg` brutos para uso com o renderizador `Icon` do `@gravity-ui/uikit`.

### Quando usar

- Você precisa de um ícone dentro de um aplicativo Gravity UI e deseja um conjunto consistente e pronto para uso.
- Renderizando um ícone através do uikit: importe o componente do ícone aqui e passe-o para o `Icon` do uikit através da sua prop `data`.
- Você precisa do asset `.svg` bruto (por exemplo, para `background-image` em CSS ou um loader SVG em tempo de compilação) em vez de um componente React.

### Quando não usar

- Renderizando o ícone na tela — este pacote apenas fornece os glifos; o renderizador real (dimensionamento, cor, a11y) é o componente `Icon` do [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Você precisa de um ícone personalizado ou de marca que não esteja no conjunto — importe seu próprio SVG e passe-o para o `Icon` do uikit; não espere que ele esteja aqui.

### Armadilhas comuns

- **Ícones são passados como dados, não por nome.** Faça `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} />` — não existe uma API `<Icon name="gear" />`, e este pacote não exporta seu próprio componente `<Icon>`.
- **O caminho de importação importa para o tree-shaking.** `import Cloud from '@gravity-ui/icons/Cloud'` carrega um único ícone; `import {Cloud} from '@gravity-ui/icons'` também funciona, mas depende do bundler para fazer o tree-shake do barrel.
- **Importações SVG precisam de um loader.** `import icon from '@gravity-ui/icons/svgs/cloud.svg'` só funciona se o seu bundler estiver configurado para lidar com arquivos `.svg`.
- **Tamanho e cor vêm do renderizador.** Defina `size` no `Icon` do uikit e controle a cor com `color`/CSS `currentColor`; os próprios SVGs não carregam uma cor fixa.