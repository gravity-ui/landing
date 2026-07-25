# NodeKit

NodeKit est une boîte à outils simple pour vos applications, scripts et bibliothèques Node.js. Il fournit des fonctionnalités pour la journalisation, la télémétrie, la configuration et la gestion des erreurs, afin que vous puissiez avoir une base familière dans vos différents projets.

## Installation

```bash
npm install --save @gravity-ui/nodekit
```

## Premiers pas

Ajoutez la dépendance à votre projet :

```bash
npm install --save @gravity-ui/nodekit
```

Puis importez et initialisez NodeKit dans votre application :

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App is ready');
```

## Documentation

Consultez le répertoire `docs/` pour une documentation supplémentaire :

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) spécifie comment vous pouvez configurer NodeKit lui-même et vos applications basées sur NodeKit.
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) décrit le concept des contextes NodeKit, de la journalisation et du traçage.
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) contient une description d'une classe d'erreur personnalisée utile que NodeKit fournit pour vos applications.
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) liste quelques fonctions d'aide supplémentaires incluses avec NodeKit.

## Contribution

### Premiers pas

Obtenez des copies du dépôt NodeKit et des exemples d'applications :

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

Liez votre nodekit à npm et lancez le compilateur :

```bash
cd nodekit && npm link && npm run dev
```

Ensuite, dans un autre terminal, allez dans les exemples, ouvrez celui qui vous intéresse, liez votre nodekit là-bas, puis démarrez l'application :

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

À ce stade, vous pouvez apporter des modifications à la fois à NodeKit et à l'application de démonstration, et voir les résultats en temps réel.

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour les détails.

## Pour les agents IA

Une boîte à outils fondamentale pour Node.js (journalisation, télémétrie, erreurs typées, configuration, contextes de requête) partagée entre les backends Gravity UI — utilisez-la pour obtenir une structure d'application cohérente avant d'ajouter une couche HTTP, au lieu d'assembler vous-même la plomberie de journalisation/erreur/configuration.

### Quand l'utiliser

- Tout service/script Node.js qui souhaite une journalisation partagée, une télémétrie (traçage) et une `AppError` typée.
- Fournir un contexte à l'échelle de la requête (logs/traces) à travers les limites asynchrones.
- Centraliser la configuration afin que plusieurs services du même écosystème se comportent de manière cohérente.

### Quand ne pas l'utiliser

- Pour exposer des routes HTTP, des middlewares ou un serveur, utilisez [`@gravity-ui/expresskit`](https://github.com/gravity-ui/expresskit) — il s'appuie sur NodeKit et ajoute la couche Express/HTTP.
- Pour un script autonome, d'un seul fichier, sans besoins de journalisation/télémétrie, les API Node natives sont plus légères que le système de contexte complet de NodeKit.

### Pièges courants

- **Halluciner `import {Logger}` / `logger`** — la journalisation est accessible via le contexte NodeKit : `new NodeKit()` puis `nodekit.ctx.log(...)`, pas une exportation de logger autonome.
- **Instancier NodeKit de manière répétée** — créez une seule instance `NodeKit` par application et partagez son `ctx` ; la création de nombreuses instances fragmente la configuration de journalisation/télémétrie.
- **Lancer des `Error` simples** — utilisez l'`AppError` fournie (voir `docs/app-error.md`) afin que les codes d'erreur et la télémétrie soient capturés de manière cohérente.
- **Ignorer l'initialisation de la configuration** — NodeKit lit la configuration lors de sa construction ; examinez `docs/configuration.md` avant de supposer les valeurs par défaut.

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/nodekit/dist/docs/INDEX.md`.