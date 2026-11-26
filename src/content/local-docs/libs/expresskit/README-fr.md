# ExpressKit

ExpressKit est un wrapper léger pour [express.js](https://expressjs.com/) qui s'intègre à [NodeKit](https://github.com/gravity-ui/nodekit) et offre des fonctionnalités utiles telles que la journalisation des requêtes, la prise en charge du traçage, les contrôleurs et middlewares asynchrones, ainsi qu'une description détaillée des routes.

## Installation

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

## Utilisation

```typescript
import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit();

const app = new ExpressKit(nodekit, {
  'GET /': (req, res) => {
    res.send('Hello World!');
  },
});

app.run();
```

## Télémétrie interne

Par défaut, la télémétrie interne envoie l'URL de la requête d'origine. Les applications avec des chaînes de requête volumineuses ou à haute cardinalité peuvent supprimer les paramètres de requête avant d'envoyer les statistiques :

```typescript
const config: Partial<AppConfig> = {
  appTelemetryChEnableSelfStats: true,
  appTelemetryChSelfStatsStripQueryParams: true,
};
```

## CSP

`config.ts`

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';
import {csp} from '@gravity-ui/expresskit';

const config: Partial<AppConfig> = {
    expressCspEnable: true,
    expressCspPresets: ({getDefaultPresets}) => {
        return getDefaultPresets({defaultNone: true}).concat([
            csp.inline(),
            {csp.directives.REPORT_TO: 'my-report-group'},
        ]);
    },
    expressCspReportTo: [
        {
            group: 'my-report-group',
            max_age: 30 * 60,
            endpoints: [{ url: 'https://cspreport.com/send'}],
            include_subdomains: true,
        }
    ]
}

export default config;
```

## Protection CSRF

ExpressKit fournit une protection intégrée contre le Cross-Site Request Forgery (CSRF) pour sécuriser vos applications contre les requêtes inter-origines malveillantes. Le middleware CSRF génère et valide automatiquement les jetons pour les requêtes HTTP modifiant l'état.

### Configuration de base

Pour activer la protection CSRF, configurez la clé secrète dans votre configuration :

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
  // ...
  appCsrfSecret: 'votre-clé-secrète-ici',
};

export default config;
```

### Options de configuration

| Option              | Type                 | Défaut                              | Description                                                                                     |
| ------------------- | -------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `appCsrfSecret`     | `string \| string[]` | -                                    | **Requis.** Clé(s) secrète(s) pour la génération de jetons HMAC. Plusieurs secrets permettent la rotation des clés. |
| `appCsrfLifetime`   | `number`             | `2592000` (30 jours)                  | Durée de vie du jeton en secondes. Définir à `0` pour aucune expiration.                                        |
| `appCsrfHeaderName` | `string`             | `'x-csrf-token'`                     | Nom de l'en-tête HTTP pour la validation du jeton.                                                          |
| `appCsrfMethods`    | `string[]`           | `['POST', 'PUT', 'DELETE', 'PATCH']` | Méthodes HTTP nécessitant une validation CSRF.                                                      |

### Utilisation

Une fois configurée, la protection CSRF est automatiquement appliquée à toutes les routes avec les méthodes HTTP spécifiées :

```typescript
import {ExpressKit, AuthPolicy} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit({
  config: {
    appCsrfSecret: 'votre-clé-secrète',
    appAuthPolicy: AuthPolicy.required,

    // Assurez-vous que votre middleware définit l'ID utilisateur dans originalContext, sinon la génération du jeton CSRF échouera
    appAuthHandler: yourAuthHandler,
  },
});

const app = new ExpressKit(nodekit, {
  'GET /api/form': (req, res) => {
    // Le jeton est disponible dans le contexte de la requête
    res.json({csrfToken: req.originalContext.get('csrfToken')});
  },

  'POST /api/submit': (req, res) => {
    // Cette route valide automatiquement le jeton CSRF
    res.json({message: 'Formulaire soumis avec succès'});
  },
});
```

### Configuration par route

Vous pouvez désactiver la protection CSRF pour des routes spécifiques :

```typescript
const app = new ExpressKit(nodekit, {
  'POST /api/webhook': {
    authPolicy: AuthPolicy.required,
    disableCsrf: true, // Désactive le CSRF pour cette route
    handler: (req, res) => {
      res.json({message: 'Webhook traité'});
    },
  },
});
```

## Contrôle de la mise en cache

Par défaut, ExpressKit définit des en-têtes `no-cache` sur toutes les réponses. Vous pouvez contrôler ce comportement globalement ou par route.

### Configuration globale

```typescript
const config: Partial<AppConfig> = {
  expressEnableCaching: true, // Autorise la mise en cache par défaut
};
```

### Configuration par route

```typescript
const app = new ExpressKit(nodekit, {
  'GET /api/cached': {
    enableCaching: true, // Autorise la mise en cache pour cette route
    handler: (req, res) => res.json({data: 'cacheable'}),
  },
  'GET /api/fresh': {
    enableCaching: false, // Force no-cache
    handler: (req, res) => res.json({data: 'toujours frais'}),
  },
});
```

Le `enableCaching` au niveau de la route remplace le réglage global. L'état de la mise en cache est disponible dans `req.routeInfo.enableCaching`.

## Validation et sérialisation des réponses

- [Validation de requêtes et sérialisation de réponses](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - utilise les schémas Zod pour la validation automatique des requêtes et la sérialisation des réponses.

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## Pour les agents IA

Une fine couche d'abstraction Express.js par-dessus NodeKit qui ajoute la journalisation des requêtes, le traçage, les contrôleurs/middleware asynchrones et une carte de routes déclarative — utilisez-la lorsque vous avez besoin d'un serveur HTTP avec la colonne vertébrale de journalisation/télémétrie de NodeKit, au lieu de câbler Express middleware et NodeKit manuellement.

### Quand l'utiliser

- Construction d'un service HTTP Express qui doit partager la journalisation, le traçage et la configuration de NodeKit.
- Routes déclaratives (`{'GET /path': handler}`) avec authentification par route, politique CSRF et de mise en cache.
- Préoccupations de sécurité intégrées (jetons CSRF, en-têtes CSP) intégrées au contexte de la requête.

### Quand ne pas l'utiliser

- Pour la journalisation/télémétrie/configuration fondamentale sans couche HTTP, utilisez [`@gravity-ui/nodekit`](https://github.com/gravity-ui/nodekit) directement — ExpressKit en dépend mais vous n'avez peut-être pas besoin des parties HTTP.
- Pour un framework non-Express (Fastify, Koa, NestJS), ExpressKit est spécifique à Express ; utilisez les outils propres à ce framework.

### Pièges courants

- **Construction de `ExpressKit` sans instance `NodeKit`** — le constructeur nécessite une instance NodeKit comme premier argument ; créez d'abord `new NodeKit()`.
- **Hallucination de `app.get`/`app.post`** — les routes sont déclarées comme une carte de `'METHOD /path': handler` passée à `new ExpressKit(nodekit, routes)`, et non via un chaînage de méthodes de style Express.
- **Oubli d'appeler `app.run()`** — les routes sont enregistrées à la construction, mais le serveur ne démarre que lorsque vous appelez `app.run()`.
- **CSRF attendant un contexte d'authentification** — la génération de jetons CSRF nécessite que `appAuthHandler` définisse l'ID utilisateur dans le contexte d'origine ; sans cela, la génération de jetons échoue.
- **Utilisation de middleware de style Express qui contourne le contexte** — les contrôleurs/middleware asynchrones doivent utiliser le contexte d'ExpressKit pour préserver le traçage ; les gestionnaires Express bruts le perdent.

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/expresskit/dist/docs/INDEX.md`.