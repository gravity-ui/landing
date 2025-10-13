# ExpressKit

ExpressKit est un wrapper léger pour [express.js](https://expressjs.com/) qui s'intègre à [NodeKit](https://github.com/gravity-ui/nodekit) et offre des fonctionnalités utiles telles que la journalisation des requêtes, la prise en charge du traçage, les contrôleurs et middlewares asynchrones, ainsi qu'une description détaillée des routes.

Installation :

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

Utilisation de base :

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

ExpressKit fournit une protection intégrée contre le Cross-Site Request Forgery (CSRF) pour sécuriser vos applications contre les requêtes inter-sites malveillantes. Le middleware CSRF génère et valide automatiquement les jetons pour les requêtes HTTP modifiant l'état.

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