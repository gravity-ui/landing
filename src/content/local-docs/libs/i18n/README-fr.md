# @gravity-ui/i18n &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/i18n)](https://www.npmjs.com/package/@gravity-ui/i18n) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/i18n/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/i18n/actions/workflows/ci.yml?query=branch:main)

## Utilitaires I18N

Les utilitaires du package I18N sont conçus pour l'internationalisation des services Gravity UI.

### Installation

`npm install --save @gravity-ui/i18n`

### API

#### constructor(options)

Accepte un objet `options` avec un `logger` optionnel qui sera utilisé pour journaliser les avertissements de la bibliothèque.

##### logger

Le logger doit avoir une méthode `log` explicite avec la signature suivante :

 * `message` - chaîne de caractères du message à journaliser
 * `options` - objet d'options de journalisation :
   * `level` - niveau pour le message de journalisation, toujours `'info'`
   * `logger` - où journaliser les messages de la bibliothèque
   * `extra` - objet d'options supplémentaires, avec une seule chaîne `type`, qui est toujours `i18n`

### Exemples d'utilisation

#### `keysets/en.json`

```json
{
  "wizard": {
    "label_error-widget-no-access": "No access to the chart"
  }
}
```

#### `keysets/ru.json`

```json
{
  "wizard": {
    "label_error-widget-no-access": "Нет доступа к чарту"
  }
}
```

#### `index.js`

```js
const ru = require('./keysets/ru.json');
const en = require('./keysets/en.json');

const {I18N} = require('@gravity-ui/i18n');

const i18n = new I18N();
i18n.registerKeysets('ru', ru);
i18n.registerKeysets('en', en);

i18n.setLang('ru');
console.log(
    i18n.i18n('wizard', 'label_error-widget-no-access')
); // -> "Нет доступа к чарту"

i18n.setLang('en');
console.log(
    i18n.i18n('wizard', 'label_error-widget-no-access')
); // -> "No access to the chart"

// Les jeux de clés permettent une récupération plus simple des traductions
const keyset = i18n.keyset('wizard');
console.log(
    keyset('label_error-widget-no-access')
); // -> "No access to the chart"


i18n.setLang('ru');
console.log(
    keyset('label_error-widget-no-access')
); // -> "Нет доступа к чарту"

// Vérification si un jeu de clés contient une clé
if (i18n.has('wizard', 'label_error-widget-no-access')) {
    i18n.i18n('wizard', 'label_error-widget-no-access')
}
```

### Modèles

La bibliothèque prend en charge les modèles. Les variables de modèle sont entourées d'accolades doubles, et les valeurs sont passées à la fonction i18n sous forme de dictionnaire clé-valeur :

#### `keysets.json`

```json
{
  "label_template": "No matches found for '{{inputValue}}' in '{{folderName}}'"
}
```

#### `index.js`

```js
i18n('label_template', {inputValue: 'something', folderName: 'somewhere'});  // => No matches found for "something" in "somewhere"
```

### Pluriels

La pluralisation peut être utilisée pour faciliter la localisation des clés qui dépendent de valeurs numériques. La bibliothèque actuelle utilise les [Règles de Pluriel CLDR](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html) via l'API [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules).

Vous pourriez avoir besoin de [polyfiller](https://github.com/eemeli/intl-pluralrules) l'API [Intl.Plural Rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) si elle n'est pas disponible dans le navigateur.

Il existe 6 formes plurielles (voir [resolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions)) :

- zero (sera également utilisé lorsque count = 0 même si la forme n'est pas prise en charge dans la langue)
- one (singulier)
- two (duel)
- few (paucal)
- many (également utilisé pour les fractions si elles ont une classe distincte)
- other (forme requise pour toutes les langues — forme plurielle générale — également utilisée si la langue n'a qu'une seule forme)

#### Exemple de `keysets.json` avec une clé plurielle

```json
{
  "label_seconds": {
    "one": "{{count}} second is left",
    "other":"{{count}} seconds are left",
    "zero": "No time left"
  }
}
```

#### Utilisation en JS

```js
i18n('label_seconds', {count: 1});  // => 1 second
i18n('label_seconds', {count: 3});  // => 3 seconds
i18n('label_seconds', {count: 7});  // => 7 seconds
i18n('label_seconds', {count: 10}); // => 10 seconds
i18n('label_seconds', {count: 0});  // => No time left
```

#### [Obsolète] Ancien format des pluriels

L'ancien format sera supprimé dans la v2.

```json
{
  "label_seconds": ["{{count}} second is left", "{{count}} seconds are left", "{{count}} seconds are left", "No time left"]
}
```

Une clé plurielle contient 4 valeurs, chacune |correspondant à une valeur de l'énumération `PluralForm`. Les valeurs de l'énumération sont : `One`, `Few`, `Many` et `None`, respectivement. Le nom de la variable de modèle pour la pluralisation est `count`.

#### [Obsolète] Pluralisation personnalisée

Étant donné que chaque langue a sa propre manière de pluraliser, la bibliothèque fournit une méthode pour configurer les règles pour toute langue choisie.

La fonction de configuration accepte un objet avec les langues comme clés et les fonctions de pluralisation comme valeurs.

Une fonction de pluralisation accepte un nombre et l'énumération `PluralForm`, et est censée retourner l'une des valeurs de l'énumération en fonction du nombre fourni.

```js
const {I18N} = require('@gravity-ui/i18n');

const i18n = new I18N();

i18n.configurePluralization({
  en: (count, pluralForms) => {
    if (!count) return pluralForms.None;
    if (count === 1) return pluralForms.One;
    return pluralForms.Many;
  },
});
```

#### [Obsolète] Jeux de règles de pluralisation fournis

Les deux langues prises en charge nativement sont l'anglais et le russe.

##### Anglais

Clé de langue : `en`.
* `One` correspond à 1 et -1.
* `Few` n'est pas utilisé.
* `Many` correspond à tout autre nombre, sauf 0.
* `None` correspond à 0.

##### Russe

Clé de langue : `ru`.
* `One` correspond à tout nombre se terminant par 1, sauf ±11.
* `Few` correspond à tout nombre se terminant par 2, 3 ou 4, sauf ±12, ±13 et ±14.
* `Many` correspond à tout autre nombre, sauf 0.
* `None` correspond à 0.

##### Default

La règle anglaise est utilisée par défaut, pour toute langue sans fonction de pluralisation configurée.

### imbrication

<!--GITHUB_BLOCK-->
<span style="color:red">
<!--/GITHUB_BLOCK-->

<!--LANDING_BLOCK
<span style={{color: 'red'}}>
LANDING_BLOCK-->

Profondeur d'imbrication maximale limitée - 1 seul niveau (pour le glossaire)
</span>

L'imbrication vous permet de référencer d'autres clés dans une traduction. Cela peut être utile pour construire des termes de glossaire.

#### Basique

clés

```json
{
  "nesting1": "1 $t{nesting2}",
  "nesting2": "2",
}
```

exemple

```ts
i18n('nesting1'); // -> "1 2"
```

Vous pouvez référencer des clés d'un autre jeu de clés en préfixant le nom du jeu de clés :
```json
// global/en.json
{
  "app": "App"
}

// service/en.json
{
  "app-service": "$t{global::app} service"
}
```

### Typage

Pour typer la fonction `i18nInstance.i18n`, suivez les étapes :

#### Préparation

Préparez un fichier de clés JSON afin que la procédure de typage puisse récupérer les données. Là où vous récupérez les jeux de clés, ajoutez la création d'un fichier `data.json` supplémentaire. Pour réduire la taille du fichier et accélérer l'analyse par l'IDE, vous pouvez remplacer toutes les valeurs par `'str'`.

```ts
async function createFiles(keysets: Record<Lang, LangKeysets>) {
    await mkdirp(DEST_PATH);

    const createFilePromises = Object.keys(keysets).map((lang) => {
        const keysetsJSON = JSON.stringify(keysets[lang as Lang], null, 4);
        const content = umdTemplate(keysetsJSON);
        const hash = getContentHash(content);
        const filePath = path.resolve(DEST_PATH, `${lang}.${hash.slice(0, 8)}.js`);

        // <Nouvelles lignes>
        let typesPromise;

        if (lang === 'ru') {
            const keyset = keysets[lang as Lang];
            Object.keys(keyset).forEach((keysetName) => {
                const keyPhrases = keyset[keysetName];
                Object.keys(keyPhrases).forEach((keyName) => {
                    // muter l'objet !
                    keyPhrases[keyName] = 'str';
                });
            });

            const JSONForTypes = JSON.stringify(keyset, null, 4);
            typesPromise = writeFile(path.resolve(DEST_PATH, `data.json`), JSONForTypes, 'utf-8');
        }
        // </Nouvelles lignes>

        return Promise.all([typesPromise, writeFile(filePath, content, 'utf-8')]);
    });

    await Promise.all(createFilePromises);
}
```

#### Connexion

Dans vos répertoires `ui/utils/i18n` (où vous configurez i18n et l'exportez pour être utilisé par toutes les interfaces), importez la fonction de typage `I18NFn` avec vos `Keysets`. Après la configuration de votre i18n, retournez la fonction castée.

```ts
import {I18NFn} from '@gravity-ui/i18n';
// Ceci doit être un import typé !
import type Keysets from '../../../dist/public/build/i18n/data.json';

const i18nInstance = new I18N();
type TypedI18n = I18NFn<typeof Keysets>;
// ...
export const ci18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common');
export const cui18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common.units');
export const i18n = i18nInstance.i18n.bind(i18nInstance) as TypedI18n;
```

#### Problèmes supplémentaires

**Logique de typage**

Il existe plusieurs cas d'utilisation du typage :

- Appel d'une fonction avec des clés passées sous forme de chaînes littérales

```ts
i18n('common', 'label_subnet'); // ok
i18n('dcommon', 'label_dsubnet'); // erreur : Argument de type '"dcommon"' n'est pas assignable au paramètre de type ...
i18n('common', 'label_dsubnet'); // erreur : Argument de type '"label_dsubnet"' n'est pas assignable au paramètre de type ...
```

- Appel d'une fonction en lui passant des chaînes qui ne peuvent pas être converties en littéraux (si ts ne peut pas dériver le type de chaîne, il ne lance pas d'erreur)

```ts
const someUncomputebleString = `label_random-index-${Math.floor(Math.random() * 4)}`;
i18n('some_service', someUncomputebleString); // ok

for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_random-index-${i}`); // ok
}
```

- Appel d'une fonction en lui passant des chaînes qui peuvent être converties en littéraux

```ts
const labelColors = ['red', 'green', 'yelllow', 'white'] as const;
for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_color-${labelColors[i]}`); // ok
}

const labelWrongColors = ['red', 'not-existing', 'yelllow', 'white'] as const;
for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_color-${labelWrongColors[i]}`); // erreur : Argument de type '"not-existing"' n'est pas assignable au paramètre de type ...
}
```

**Pourquoi le typage via une classe n'est pas pris en charge**

Cette fonction peut casser ou compliquer certains scénarios i18n, elle a donc été ajoutée comme extension fonctionnelle. Si elle s'avère efficace, nous l'ajouterons probablement à une classe pour éviter de caster les fonctions exportées.

**Pourquoi les méthodes intégrées peuvent échouer**

L'implémentation du parcours des structures imbriquées et des types conditionnels à l'aide des méthodes de fonction intégrées typées est une tâche suffisamment complexe. C'est pourquoi le typage ne fonctionne que lors de l'utilisation d'un appel de fonction direct et d'un appel `bind` jusqu'au troisième argument.

**Pourquoi ne puis-je pas générer un fichier ts directement pour typer également les valeurs des clés ?**

Vous pouvez le faire en passant le type de résultat à `I18NFn`. Cependant, avec des tailles de fichiers importantes, ts commence à consommer d'énormes quantités de ressources, ralentissant considérablement l'IDE, mais avec un fichier JSON, ce n'est pas le cas.

**Pourquoi les autres méthodes de la classe I18N n'ont-elles pas été typées ?**

Elles peuvent être typées, nous apprécierions votre aide pour leur implémentation. Le cas est que les autres méthodes sont utilisées dans 1% des cas.