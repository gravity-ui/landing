# AIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

Bibliothèque de composants UI pour les chats IA construite selon les principes de l'Atomic Design.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_cover.png)

![Example image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_example.png)

## Ressources

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Site web](https://gravity-ui.com/libraries/aikit)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/aikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Communauté](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Description

**@gravity-ui/aikit** est une bibliothèque de composants React flexible et extensible pour construire des chats IA de toute complexité. La bibliothèque fournit un ensemble de composants prêts à l'emploi qui peuvent être utilisés tels quels ou personnalisés pour répondre à vos besoins.

### Fonctionnalités clés

- 🎨 **Atomic Design** — hiérarchie claire des composants, des atomes aux pages
- 🔧 **SDK Agnostique** — indépendant des SDK IA spécifiques
- 🎭 **Approche à deux niveaux** — composants prêts à l'emploi + hooks pour la personnalisation
- 🎨 **Variables CSS** — thèmes faciles sans surcharges de composants
- 📦 **TypeScript** — sécurité de type complète dès le départ
- 🔌 **Extensible** — système d'enregistrement de types de messages personnalisés

## Structure du projet

```
src/
├── components/
│   ├── atoms/          # Éléments UI de base indivisibles
│   ├── molecules/      # Groupes simples d'atomes
│   ├── organisms/      # Composants complexes avec logique
│   ├── templates/      # Mises en page complètes
│   └── pages/          # Intégrations complètes avec des données
├── hooks/              # Hooks à usage général
├── types/              # Types TypeScript
├── utils/              # Utilitaires
└── themes/             # Thèmes et variables CSS
```

## Installation

```bash
npm install @gravity-ui/aikit
```

## Démarrage rapide

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

La bibliothèque est construite selon les principes de l'**Atomic Design** :

### 🔹 Atomes

Éléments UI de base indivisibles sans logique métier :

- `ActionButton` — bouton avec info-bulle intégrée
- `Alert` — messages d'alerte avec variantes
- `ChatDate` — formatage de date avec dates relatives
- `ContextIndicator` — indicateur d'utilisation du contexte de jeton
- `ContextItem` — libellé de contexte avec action de suppression
- `DiffStat` — affichage des statistiques de modification de code
- `Disclaimer` — composant de texte d'avertissement
- `InlineCitation` — citations de texte
- `Loader` — indicateur de chargement
- `MarkdownRenderer` — rendu Markdown au format Yandex
- `MessageBalloon` — conteneur de message
- `Shimmer` — effet d'animation de chargement
- `SubmitButton` — bouton de soumission avec états
- `ToolIndicator` — indicateur d'état d'exécution de l'outil

### 🔸 Molécules

Combinaisons simples d'atomes :

- `BaseMessage` — conteneur de base pour tous les types de messages
- `ButtonGroup` — groupe de boutons avec prise en charge de l'orientation
- `InputContext` — gestion du contexte
- `PromptInputBody` — zone de texte avec redimensionnement automatique
- `PromptInputFooter` — pied de page avec icônes d'action et bouton de soumission
- `PromptInputHeader` — en-tête avec éléments de contexte et indicateur
- `PromptInputPanel` — panneau conteneur pour le contenu personnalisé
- `Suggestions` — boutons de suggestion cliquables
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
- `ToolMessage` — exécution de l'outil
- `UserMessage` — message de l'utilisateur

### 📄 Modèles

Mises en page complètes :

- `ChatContent` — contenu principal du chat
- `EmptyContainer` — état vide
- `History` — historique des chats

### 📱 Pages

Intégrations complètes :

- `ChatContainer` — chat entièrement assemblé

## Documentation

- [Guide de démarrage rapide](./docs/GETTING_STARTED.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Structure du projet](./docs/PROJECT_STRUCTURE.md)
- [Guide de test](./docs/TESTING.md)
- [Guide Playwright](./playwright/README.md)

## Tests

Le projet utilise Playwright Component Testing pour les tests de régression visuelle.

### Exécuter les tests

**Important** : Tous les tests doivent être exécutés via Docker pour garantir des captures d'écran cohérentes entre les différents environnements.

```bash
# Exécute tous les tests de composants dans Docker (recommandé)
npm run playwright:docker

# Met à jour les bases de référence des captures d'écran dans Docker
npm run playwright:docker:update

# Exécute un test spécifique par motif grep dans Docker
npm run playwright:docker -- --grep "@ComponentName"

# Efface le cache Docker si nécessaire
npm run playwright:docker:clear-cache
```

### Tests locaux (Linux uniquement)

Si vous êtes sous Linux, vous pouvez exécuter les tests localement :

```bash
# Installe les navigateurs Playwright (à exécuter une fois)
npm run playwright:install
# Exécute tous les tests de composants
npm run playwright
# Met à jour les bases de référence des captures d'écran
npm run playwright:update
```

Pour une documentation détaillée sur les tests, consultez le [Guide Playwright](./playwright/README.md).

## Développement

Les instructions de développement et de contribution sont disponibles dans [CONTRIBUTING.md](./CONTRIBUTING.md).

## Licence

MIT

## Pour les agents IA

Une bibliothèque de composants React pour la création d'interfaces de chat IA, organisée selon la conception atomique (atomes → molécules → organismes → modèles → pages) et indépendante du SDK — utilisez-la pour assembler une interface de chat (listes de messages, entrée de prompt, appels d'outils, pièces jointes) au lieu de composer ces primitives à partir de `@gravity-ui/uikit` manuellement.

### Quand l'utiliser

- Création d'une interface de chat IA/LLM (messages assistant/utilisateur/outil, entrée de prompt avec suggestions, téléchargements de pièces jointes, états de réflexion).
- Besoin de mises en page de chat prêtes à l'emploi (`ChatContainer`, `MessageList`, `PromptInput`) ainsi que de hooks pour personnaliser le comportement.
- Intégration dans l'écosystème Gravity UI avec un thème partagé via des variables CSS.

### Quand ne pas l'utiliser

- Pour des primitives d'interface utilisateur à usage général (boutons, champs de saisie, modales), utilisez [`@gravity-ui/uikit`](https://gravity-ui.com/uikit) directement — AIKit s'appuie sur celui-ci pour les besoins spécifiques au chat.
- Pour rendre du markdown riche dans les messages, le `MarkdownRenderer` d'AIKit encapsule [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor) ; pour un rendu markdown autonome, utilisez ce package directement.
- Pour une seule bulle de chat sans orchestration de chat, un `MarkdownRenderer`/bloc de texte de uikit est plus léger que le pipeline de messages complet d'AIKit.

### Pièges courants

- **Halluciner une importation de SDK IA** — AIKit est indépendant du SDK ; il fournit des composants/hooks, pas un client LLM. Apportez votre propre source de données et alimentez les messages via les props.
- **Rechercher `<Chat>` / `<AIChat>`** — l'exportation au niveau de la page est `ChatContainer` (et `AIStudioChat`) ; il n'y a pas de composant littéralement nommé `Chat`.
- **Oublier d'enregistrer les types de messages personnalisés** — les types de messages personnalisés doivent être enregistrés dans le système de types de messages, sinon ils seront rendus comme inconnus.
- **Modifier les composants de base au lieu d'utiliser des hooks** — la conception à deux niveaux s'attend à ce que vous personnalisiez via des hooks/composition ; la substitution directe des éléments internes rompt les mises à niveau.

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/aikit/build/docs/INDEX.md`.