# Ẏagr <img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/yagr.svg" width="24px" height="24px" />

Yagr é um renderizador de gráficos HTML5 Canvas de alta performance baseado em [uPlot](https://github.com/leeoniya/uPlot). Ele oferece recursos de alto nível para gráficos uPlot.

<img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/demo.png" width="800" />

## Funcionalidades

-   [Linhas, áreas, colunas e pontos como tipos de visualização. Configurável por série](https://yagr.tech/en/api/visualization)
-   [Tooltip de legenda configurável](https://yagr.tech/en/plugins/tooltip)
-   [Eixos com opções extras para precisão de nível decimal](https://yagr.tech/en/api/axes)
-   [Escalas com funções de intervalo e transformações configuráveis](https://yagr.tech/en/api/scales)
-   [Linhas e bandas de plotagem. Camada de desenho configurável](https://yagr.tech/en/plugins/plot-lines)
-   [Gráficos responsivos](https://yagr.tech/en/api/settings#adaptivity) (requer [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver))
-   [Suporte de alto nível para áreas/colunas empilhadas](https://yagr.tech/en/api/scales#stacking)
-   [Marcadores configuráveis](./docs/api/markers.md)
-   [Tema Claro/Escuro](https://yagr.tech/en/api/settings#theme)
-   [Normalização de dados](https://yagr.tech/en/api/scales#normalization)
-   [Configuração de retículos, marcadores de cursor e snapping](https://yagr.tech/en/api/cursor)
-   Typescript
-   [Localização](https://yagr.tech/en/api/settings#localization)
-   [Variáveis CSS em nomes de cores](https://yagr.tech/en/api/css)
-   [Legenda inline paginada](https://yagr.tech/en/plugins/legend)
-   [Tratamento de erros e hooks estendidos](https://yagr.tech/en/api/lifecycle)
-   [Alinhamento e interpolação de dados para dados ausentes](https://yagr.tech/en/api/data-processing)
-   [Atualizações em tempo real](https://yagr.tech/en/api/dynamic-updates)

## [Documentação](https://yagr.tech)

## Início Rápido

```
npm i @gravity-ui/yagr
```

### Módulo NPM

```typescript
import Yagr from '@gravity-ui/yagr';

new Yagr(document.body, {
    timeline: [1, 2, 3, 4, 5],
    series: [
        {
            data: [1, 2, 3, 4, 5],
            color: 'red',
        },
        {
            data: [2, 3, 1, 4, 5],
            color: 'green',
        },
    ],
});
```

### Tag Script

```html
<script src="https://unpkg.com/@gravity-ui/yagr/dist/yagr.iife.min.js"></script>
<script>
    new Yagr(document.body, {
        timeline: [1, 2, 3, 4, 5],
        series: [
            {
                data: [1, 2, 3, 4, 5],
                color: 'red',
            },
            {
                data: [2, 3, 1, 4, 5],
                color: 'green',
            },
        ],
    });
</script>
```

### Exemplos

Precisa de algo específico? Yagr apresenta alguns exemplos úteis na pasta [demo/examples](./demo/examples/). Como iniciá-los com a versão atual:

1. Clone o repositório.
2. Instale as dependências `npm i`.
3. Execute `npm run build`.
4. Execute `npx http-server .`.
5. Abra os exemplos no navegador de acordo com a saída do http-server.