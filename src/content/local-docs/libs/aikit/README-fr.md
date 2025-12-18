# @gravity-ui/aikit

[![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

---

Bibliothèque de composants UI pour les chats IA construite sur les principes de l'Atomic Design.

## Description

**@gravity-ui/aikit** est une bibliothèque de composants React flexible et extensible pour créer des chats IA de toute complexité. La bibliothèque fournit un ensemble de composants prêts à l'emploi qui peuvent être utilisés tels quels ou personnalisés selon vos besoins.

### Caractéristiques Principales

- 🎨 **Atomic Design** — hiérarchie claire des composants des atomes aux pages
- 🔧 **Indépendant du SDK** — indépendant des SDKs IA spécifiques
- 🎭 **Approche à Deux Niveaux** — composants prêts à l'emploi + hooks pour la personnalisation
- 🎨 **Variables CSS** — thématisation facile sans surcharger les composants
- 📦 **TypeScript** — sécurité de types complète dès le départ
- 🔌 **Extensible** — système d'enregistrement de types de messages personnalisés

## Structure du Projet

```
src/
├── components/
│   ├── atoms/          # Éléments UI de base indivisibles
│   ├── molecules/      # Groupes simples d'atomes
│   ├── organisms/      # Composants complexes avec logique
│   ├── templates/      # Mises en page complètes
│   └── pages/          # Intégrations complètes avec données
├── hooks/              # Hooks à usage général
├── types/              # Types TypeScript
├── utils/              # Utilitaires
└── themes/             # Thèmes CSS et variables
```

## Installation

```bash
npm install @gravity-ui/aikit
```

## Démarrage Rapide

```typescript
import { ChatContainer } from '@gravity-ui/aikit';
import type { ChatType, TChatMessage } from '@gravity-ui/aikit';

function App() {
    const [messages, setMessages] = useState<TChatMessage[]>([]);
    const [chats, setChats] = useState<ChatType[]>([]);
    const [activeChat, setActiveChat] = useState<ChatType | null>(null);

    return (
        <ChatContainer
            chats={chats}
            activeChat={activeChat}
            messages={messages}
            onSendMessage={async (data) => {
                // Votre logique d'envoi
                console.log('Message:', data.content);
            }}
            onSelectChat={setActiveChat}
            onCreateChat={() => {
                // Créer un nouveau chat
            }}
            onDeleteChat={(chat) => {
                // Supprimer le chat
            }}
        />
    );
}
```

## Architecture

La bibliothèque est construite sur les principes de l'**Atomic Design** :

### 🔹 Atomes

Éléments UI de base indivisibles sans logique métier :

- `ActionButton` — bouton avec tooltip intégré
- `Alert` — messages d'alerte avec variantes
- `ChatDate` — formatage de date avec dates relatives
- `ContextIndicator` — indicateur d'utilisation du contexte de tokens
- `ContextItem` — étiquette de contexte avec action de suppression
- `DiffStat` — affichage des statistiques de changements de code
- `Disclaimer` — composant de texte de décharge de responsabilité
- `InlineCitation` — citations de texte
- `Loader` — indicateur de chargement
- `MarkdownRenderer` — rendu Yandex Flavored Markdown
- `MessageBalloon` — enveloppe de message
- `Shimmer` — effet d'animation de chargement
- `SubmitButton` — bouton d'envoi avec états
- `ToolIndicator` — indicateur d'état d'exécution d'outil

### 🔸 Molécules

Combinaisons simples d'atomes :

- `BaseMessage` — enveloppe de base pour tous les types de messages
- `ButtonGroup` — groupe de boutons avec support d'orientation
- `InputContext` — gestion du contexte
- `PromptInputBody` — textarea avec croissance automatique
- `PromptInputFooter` — pied de page avec icônes d'action et bouton d'envoi
- `PromptInputHeader` — en-tête avec éléments de contexte et indicateur
- `PromptInputPanel` — conteneur de panneau pour contenu personnalisé
- `Suggestions` — boutons de suggestions cliquables
- `Tabs` — onglets de navigation avec fonctionnalité de suppression
- `ToolFooter` — pied de page de message d'outil avec actions
- `ToolHeader` — en-tête de message d'outil avec icône et actions

### 🔶 Organismes

Composants complexes avec logique interne :

- `AssistantMessage` — message de l'assistant IA
- `Header` — en-tête du chat
- `MessageList` — liste des messages
- `PromptInput` — champ de saisie de message
- `ThinkingMessage` — processus de réflexion de l'IA
- `ToolMessage` — exécution d'outil
- `UserMessage` — message de l'utilisateur

### 📄 Modèles

Mises en page complètes :

- `ChatContent` — contenu principal du chat
- `EmptyContainer` — état vide
- `History` — historique du chat

### 📱 Pages

Intégrations complètes :

- `ChatContainer` — chat entièrement assemblé

## Documentation

- [Guide de Démarrage Rapide](./docs/GETTING_STARTED.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Structure du Projet](./docs/PROJECT_STRUCTURE.md)
- [Guide de Tests](./docs/TESTING.md)
- [Guide Playwright](./playwright/README.md)

## Tests

Le projet utilise Playwright Component Testing pour les tests de régression visuelle.

### Exécuter les tests

**Important** : Tous les tests doivent être exécutés via Docker pour garantir des captures d'écran cohérentes dans différents environnements.

```bash
# Exécuter tous les tests de composants dans Docker (recommandé)
npm run playwright:docker

# Mettre à jour les lignes de base des captures d'écran dans Docker
npm run playwright:docker:update

# Exécuter un test spécifique par motif grep dans Docker
npm run playwright:docker -- --grep "@ComponentName"

# Vider le cache Docker si nécessaire
npm run playwright:docker:clear-cache
```

### Tests locaux (Linux uniquement)

Si vous êtes sur Linux, vous pouvez exécuter les tests localement :

```bash
# Installer les navigateurs Playwright (exécuter une fois)
npm run playwright:install

# Exécuter tous les tests de composants
npm run playwright

# Mettre à jour les lignes de base des captures d'écran
npm run playwright:update
```

Pour la documentation détaillée des tests, consultez le [Guide Playwright](./playwright/README.md).

## Développement

Les instructions de développement et de contribution sont disponibles dans [CONTRIBUTING.md](./CONTRIBUTING.md).

## Licence

MIT

