# @gravity-ui/chartkit · [npm package](https://www.npmjs.com/package/@gravity-ui/chartkit) [License](LICENSE) [CI](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [storybook](https://preview.gravity-ui.com/chartkit/)

Componente React baseado em plugins que fornece uma interface de renderização unificada para múltiplas bibliotecas de gráficos. Você registra um ou mais plugins e renderiza gráficos através de `<ChartKit type="..." data={...} />` — o ChartKit despacha para o renderizador correto automaticamente.

Cada renderizador de plugin é carregado sob demanda (lazy-loaded), então o código da biblioteca subjacente só é baixado quando o ChartKit é realmente renderizado na UI. O ChartKit também lida com a exibição de tooltips amigáveis para dispositivos móveis nativamente. Você pode usar os plugins embutidos ou implementar os seus próprios.

**Quando usar:**

- Você precisa de gráficos declarativos modernos (`gravity-charts`) ou gráficos de séries temporais / monitoramento (`yagr`)
- Você precisa de múltiplos tipos de gráficos sob uma única API consistente
- Você está construindo no ecossistema Gravity UI

**Quando não usar:**

- Você só precisa de uma biblioteca de gráficos específica — prefira usar [@gravity-ui/charts](https://github.com/gravity-ui/charts) diretamente

## Sumário

- [Começando](#get-started)
- [Desenvolvimento](#development)

## Começando

### Requisitos

- React 16, 17 ou 18
- `[@gravity-ui/uikit](https://github.com/gravity-ui/uikit)` — dependência peer obrigatória (fornece temas e primitivas de UI)

### Instalação

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### Estilos

Importe os estilos de `@gravity-ui/uikit` no seu ponto de entrada:

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

Para detalhes completos de configuração, consulte o [guia de estilos do uikit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

### Uso básico

O ChartKit usa um registro global de plugins. Chame `settings.set` uma vez no ponto de entrada do seu aplicativo para registrar os plugins que você precisa. Quando `<ChartKit type="..." />` renderiza, ele procura o plugin correspondente — se nenhum for encontrado, um erro é lançado. O renderizador de cada plugin é um componente `React.lazy`, então seu código é buscado apenas quando o ChartKit aparece pela primeira vez na UI.

Você pode registrar múltiplos plugins de uma vez:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

Ou chame `settings.set` múltiplas vezes — ele mescla a lista de plugins em vez de substituí-la.

**Exemplo básico:**

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
import ChartKit, {settings} from '@gravity-ui/chartkit';
import {GravityChartsPlugin} from '@gravity-ui/chartkit/gravity-charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

settings.set({plugins: [GravityChartsPlugin]});

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Series',
        data: [
          {x: 0, y: 10},
          {x: 1, y: 25},
          {x: 2, y: 18},
          {x: 3, y: 30},
        ],
      },
    ],
  },
};

export default function App() {
  return (
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </ThemeProvider>
  );
}
```

O `ChartKit` se adapta ao tamanho do seu elemento pai — certifique-se de que o contêiner tenha uma altura explícita.

## Desenvolvimento

### Pré-requisitos

- [Node.js](https://nodejs.org/) 22 (veja [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- [npm](https://www.npmjs.com/) 10 ou superior

### Configuração

Clone o repositório e instale as dependências:

```shell
git clone https://github.com/gravity-ui/ChartKit.git
cd ChartKit
npm ci
```

### Executando o Storybook

```shell
npm run start
```

O Storybook estará disponível em `http://localhost:7007`.

### Desenvolvendo com uma dependência local

Para trabalhar em uma dependência (por exemplo, `@gravity-ui/charts`) e ver suas alterações ao vivo no Storybook sem publicar no npm:

**1. Link a pacote local**

```shell
# No seu clone local de @gravity-ui/charts:
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# faça suas alterações
npm run build
npm link

# No ChartKit:
npm link @gravity-ui/charts
```

**2. Configure o monitoramento do pacote local**

Crie um arquivo `.env.local` na raiz do ChartKit (ele é ignorado pelo git):

```shell
LOCAL_PKG=@gravity-ui/charts
```

Isso instrui o Vite a monitorar esse pacote em `node_modules` e pular sua pré-compilação. Após reconstruir `@gravity-ui/charts`, o Storybook recarregará automaticamente.

Para múltiplos pacotes, use uma lista separada por vírgulas:

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Inicie o Storybook**

```shell
npm run start
```

**4. Restaure o pacote original**

Quando terminar:

1. Comente `LOCAL_PKG` em `.env.local`
2. Execute `npm install` no ChartKit — isso substitui o link simbólico pela versão do registro

```shell
# No ChartKit:
npm ci
```

### Executando testes

```shell
npm test
```

Testes de regressão visual são executados no Docker para garantir screenshots consistentes entre ambientes:

```shell
npm run test:docker
```

Para atualizar os screenshots de referência após alterações intencionais na UI:

```shell
npm run test:docker:update
```

### Contribuição

Por favor, consulte o [guia de contribuição](CONTRIBUTING.md) antes de enviar um pull request.