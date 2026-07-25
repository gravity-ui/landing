# @gravity-ui/date-utils

Auxiliares para gerenciar Data e Hora.

## Instalar

```shell
npm i @gravity-ui/date-utils
```

## Uso

```typescript
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';

// Data atual: 2021-08-07T12:10:00
// Fuso horário do usuário: Europe/Istanbul

const FORMAT = 'YYYY-MM-DDTHH:mm:ssZ';

// parse data absoluta
dateTimeParse({year: 2021, month: 7, day: 7})?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse([2021, 7, 7])?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('2021-08-07')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse(1621708204063)?.format(FORMAT); // "2021-05-22T21:30:04+03:00"
dateTimeParse('')?.format(FORMAT); // undefined
dateTimeParse('incorrect-date')?.format(FORMAT); // undefined

// parse data relativa
dateTimeParse('now')?.format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTimeParse('now-1d')?.format(FORMAT); // "2021-08-06T12:10:00+03:00"
dateTimeParse('now-1d+1M')?.format(FORMAT); // "2021-09-06T12:10:00+03:00"
dateTimeParse('now/d')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('now+1d/d')?.format(FORMAT); // "2021-08-08T00:00:00+03:00"
dateTimeParse('now-1f')?.format(FORMAT); // undefined

// criar dateTime
dateTime().format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTime({input: '2021-08-07'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({input: '2021-08-07', format: 'YYYY-MM-DD'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({timeZone: 'Asia/Tokyo'}).format(FORMAT); // "2021-08-07T18:10:00+09:00
dateTime({input: ''}).format(FORMAT); // "Invalid Date"
dateTime({input: '2021-08', format: 'YYYY-MM-DD'}).format(FORMAT); // "Invalid Date"
```

## Configurações

```typescript
import {settings} from '@gravity-ui/date-utils';

// Gerenciamento de Locales
settings.getLocale(); // locale padrão "en"
settings.loadLocale('de').then(() => {
  settings.setLocale('de');
  settings.getLocale(); // "de"
});

// Customização
settings.updateLocale({weekStart: 0}); // altera o primeiro dia da semana
```

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Auxiliares de data/hora cientes de fuso horário — análise (incluindo expressões relativas como `now-1d/d`), formatação e gerenciamento de locale — sem qualquer UI, use-o quando precisar computar e formatar datas de forma confiável entre fusos horários, em vez de carregar um calendário de UI completo.

### Quando usar

- Analisar expressões de data absolutas ou relativas (`'now-1d'`, `'now/d'`) em um objeto `dateTime` ciente de fuso horário.
- Formatar datas para exibição no fuso horário do usuário com suporte a locale.
- Compartilhar lógica de data entre código do servidor (Node) e do cliente (React) — o pacote não tem dependência do React.

### Quando não usar

- Para renderizar um calendário, seletor de data ou qualquer **UI** de data, use [`@gravity-ui/date-components`](https://gravity-ui.com/components/date-components) — ele constrói seus visuais sobre este pacote.
- Para matemática de data imutável e leve, sem necessidades de fuso horário/expressão relativa, `date-fns` ou as APIs nativas `Intl`/`Date` podem ser suficientes.

### Armadilhas comuns

- **Chamar `dateTimeParse('')` esperando uma data** — retorna `undefined`, não um `dateTime`; proteja com encadeamento opcional ou uma verificação de nulo.
- **Esquecer de carregar um locale** — `settings.setLocale('de')` só formata nomes localizados (dias da semana, meses) depois que `settings.loadLocale('de')` foi resolvido.
- **Função "alucinada" `formatDate` / `parseDate`** — os pontos de entrada são `dateTimeParse` (parse) e `dateTime(...).format(...)` (formatar).
- **Assumir que o fuso horário do usuário é aplicado automaticamente** — passe `timeZone` explicitamente ou o fuso horário do sistema é usado.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/date-utils/build/docs/INDEX.md`.