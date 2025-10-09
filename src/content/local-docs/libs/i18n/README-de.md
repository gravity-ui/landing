# @gravity-ui/i18n &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/i18n)](https://www.npmjs.com/package/@gravity-ui/i18n) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/i18n/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/i18n/actions/workflows/ci.yml?query=branch:main)

## I18N-Dienstprogramme

Die Dienstprogramme im I18N-Paket sind für die Internationalisierung von Gravity UI-Diensten konzipiert.

### Installation

`npm install --save @gravity-ui/i18n`

### API

#### constructor(options)

Akzeptiert ein `options`-Objekt mit einem optionalen `logger`, das zur Protokollierung von Warnungen der Bibliothek verwendet wird.

##### logger

Der Logger sollte über eine explizite `log`-Methode mit folgender Signatur verfügen:

 * `message` - Zeichenkette der zu protokollierenden Nachricht
 * `options` - Objekt mit Protokollierungsoptionen:
   * `level` - Ebene für die Protokollierungsnachricht, immer `'info'`
   * `logger` - wohin Bibliotheksnachrichten protokolliert werden sollen
   * `extra` - zusätzliches Optionsobjekt mit einem einzelnen `type`-String, der immer `i18n` ist

### Anwendungsbeispiele

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
); // -> "No access to the chart

// Keyset ermöglicht eine einfachere Abfrage von Übersetzungen
const keyset = i18n.keyset('wizard');
console.log(
    keyset('label_error-widget-no-access')
); // -> "No access to the chart"


i18n.setLang('ru');
console.log(
    keyset('label_error-widget-no-access')
); // -> "Нет доступа к чарту"

// Überprüfen, ob ein Keyset einen Schlüssel hat
if (i18n.has('wizard', 'label_error-widget-no-access')) {
    i18n.i18n('wizard', 'label_error-widget-no-access')
}
```

### Vorlagen (Templating)

Die Bibliothek unterstützt Vorlagen. Vorlagenvariablen sind in doppelten geschweiften Klammern eingeschlossen, und die Werte werden als Schlüssel-Wert-Wörterbuch an die i18n-Funktion übergeben:

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

### Pluralisierung

Die Pluralisierung kann zur einfachen Lokalisierung von Schlüsseln verwendet werden, die von numerischen Werten abhängen. Die aktuelle Bibliothek verwendet [CLDR Plural Rules](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html) über die [Intl.PluralRules API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules).

Möglicherweise müssen Sie die [Intl.Plural Rules API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) [polyfillen](https://github.com/eemeli/intl-pluralrules), falls sie im Browser nicht verfügbar ist.

Es gibt 6 Pluralformen (siehe [resolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions)):

- zero (wird auch verwendet, wenn count = 0 ist, auch wenn die Form in der Sprache nicht unterstützt wird)
- one (Singular)
- two (Dual)
- few (Paucal)
- many (wird auch für Brüche verwendet, wenn diese eine eigene Klasse haben)
- other (erforderliche Form für alle Sprachen – allgemeine Pluralform – wird auch verwendet, wenn die Sprache nur eine einzige Form hat)

#### Beispiel für `keysets.json` mit Plural-Schlüssel

```json
{
  "label_seconds": {
    "one": "{{count}} second is left",
    "other":"{{count}} seconds are left",
    "zero": "No time left"
  }
}
```

#### Verwendung in JS

```js
i18n('label_seconds', {count: 1});  // => 1 second
i18n('label_seconds', {count: 3});  // => 3 seconds
i18n('label_seconds', {count: 7});  // => 7 seconds
i18n('label_seconds', {count: 10}); // => 10 seconds
i18n('label_seconds', {count: 0});  // => No time left
```

#### [Veraltet] Altes Pluralformat

Das alte Format wird in v2 entfernt.

```json
{
  "label_seconds": ["{{count}} second is left", "{{count}} seconds are left", "{{count}} seconds are left", "No time left"]
}
```

Ein pluralisierter Schlüssel enthält 4 Werte, die jeweils einem `PluralForm`-Enum-Wert entsprechen. Die Enum-Werte sind `One`, `Few`, `Many` und `None`. Der Vorlagenvariablenname für die Pluralisierung ist `count`.

#### [Veraltet] Benutzerdefinierte Pluralisierung

Da jede Sprache ihre eigene Art der Pluralisierung hat, bietet die Bibliothek eine Methode zur Konfiguration der Regeln für jede ausgewählte Sprache.

Die Konfigurationsfunktion akzeptiert ein Objekt mit Sprachen als Schlüssel und Pluralisierungsfunktionen als Werte.

Eine Pluralisierungsfunktion akzeptiert eine Zahl und die `PluralForm`-Enum und soll je nach angegebener Zahl einen der Enum-Werte zurückgeben.

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

#### [Veraltet] Bereitgestellte Pluralisierungsregelsätze

Die beiden sofort unterstützten Sprachen sind Englisch und Russisch.

##### Englisch

Sprachenschlüssel: `en`.
* `One` entspricht 1 und -1.
* `Few` wird nicht verwendet.
* `Many` entspricht jeder anderen Zahl außer 0.
* `None` entspricht 0.

##### Russisch

Sprachenschlüssel: `ru`.
* `One` entspricht jeder Zahl, die auf 1 endet, außer ±11.
* `Few` entspricht jeder Zahl, die auf 2, 3 oder 4 endet, außer ±12, ±13 und ±14.
* `Many` entspricht jeder anderen Zahl außer 0.
* `None` entspricht 0.

```html
<!-- LANGUAGE_OPTIONS -->
<span style="color:red">
<!--/LANGUAGE_OPTIONS-->

<!--LANDING_BLOCK
<span style={{color: 'red'}}>
LANDING_BLOCK-->

Die maximale Verschachtelungstiefe ist begrenzt – nur 1 Ebene (für Glossare).
</span>

Verschachtelung ermöglicht es Ihnen, auf andere Schlüssel in einer Übersetzung zu verweisen. Dies kann nützlich sein, um Glossarbegriffe zu erstellen.

#### Grundlegend

Schlüssel

```json
{
  "nesting1": "1 $t{nesting2}",
  "nesting2": "2"
}
```

Beispiel

```ts
i18n('nesting1'); // -> "1 2"
```

Sie können auf Schlüssel aus anderen Keysets verweisen, indem Sie den Keysetsnamen voranstellen:
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

### Typisierung

Um die Funktion `i18nInstance.i18n` zu typisieren, befolgen Sie diese Schritte:

#### Vorbereitung

Bereiten Sie eine JSON-Keyset-Datei vor, damit das Typisierungsverfahren Daten abrufen kann. Fügen Sie dort, wo Sie Keysets abrufen, die Erstellung einer zusätzlichen `data.json`-Datei hinzu. Um die Dateigröße zu reduzieren und das Parsen der IDE zu beschleunigen, können Sie alle Werte durch `'str'` ersetzen.

```ts
async function createFiles(keysets: Record<Lang, LangKeysets>) {
    await mkdirp(DEST_PATH);

    const createFilePromises = Object.keys(keysets).map((lang) => {
        const keysetsJSON = JSON.stringify(keysets[lang as Lang], null, 4);
        const content = umdTemplate(keysetsJSON);
        const hash = getContentHash(content);
        const filePath = path.resolve(DEST_PATH, `${lang}.${hash.slice(0, 8)}.js`);

        // <Neue Zeilen>
        let typesPromise;

        if (lang === 'ru') {
            const keyset = keysets[lang as Lang];
            Object.keys(keyset).forEach((keysetName) => {
                const keyPhrases = keyset[keysetName];
                Object.keys(keyPhrases).forEach((keyName) => {
                    // Objekt mutieren!
                    keyPhrases[keyName] = 'str';
                });
            });

            const JSONForTypes = JSON.stringify(keyset, null, 4);
            typesPromise = writeFile(path.resolve(DEST_PATH, `data.json`), JSONForTypes, 'utf-8');
        }
        // </Neue Zeilen>

        return Promise.all([typesPromise, writeFile(filePath, content, 'utf-8')]);
    });

    await Promise.all(createFilePromises);
}
```

#### Verbindung

Importieren Sie in Ihren `ui/utils/i18n`-Verzeichnissen (wo Sie i18n konfigurieren und für alle Schnittstellen exportieren) die Typisierungsfunktion `I18NFn` mit Ihren `Keysets`. Nachdem Ihr i18n konfiguriert wurde, geben Sie die gecastete Funktion zurück.

```ts
import {I18NFn} from '@gravity-ui/i18n';
// Dies muss ein typisierter Import sein!
import type Keysets from '../../../dist/public/build/i18n/data.json';

const i18nInstance = new I18N();
type TypedI18n = I18NFn<typeof Keysets>;
// ...
export const ci18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common');
export const cui18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common.units');
export const i18n = i18nInstance.i18n.bind(i18nInstance) as TypedI18n;
```

#### Zusätzliche Probleme

**Typisierungslogik**

Es gibt mehrere Anwendungsfälle für die Typisierung:

- Aufrufen einer Funktion mit als String-Literalen übergebenen Schlüsseln

```ts
i18n('common', 'label_subnet'); // ok
i18n('dcommon', 'label_dsubnet'); // Fehler: Argument vom Typ '"dcommon"' ist nicht zuweisbar zu Parameter vom Typ ...
i18n('common', 'label_dsubnet'); // Fehler: Argument vom Typ '"label_dsubnet"' ist nicht zuweisbar zu Parameter vom Typ ...
```

- Aufrufen einer Funktion, der Strings übergeben werden, die nicht in Literale umgewandelt werden können (wenn TS den String-Typ nicht ableiten kann, wird kein Fehler ausgelöst)

```ts
const someUncomputebleString = `label_random-index-${Math.floor(Math.random() * 4)}`;
i18n('some_service', someUncomputebleString); // ok

for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_random-index-${i}`); // ok
}
```

- Aufrufen einer Funktion, der Strings übergeben werden, die in Literale umgewandelt werden können

```ts
const labelColors = ['red', 'green', 'yelllow', 'white'] as const;
for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_color-${labelColors[i]}`); // ok
}

const labelWrongColors = ['red', 'not-existing', 'yelllow', 'white'] as const;
for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_color-${labelWrongColors[i]}`); // Fehler: Argument vom Typ '"not-existing"' ist nicht zuweisbar zu Parameter vom Typ ...
}
```

**Warum die Typisierung über eine Klasse nicht unterstützt wird**

Diese Funktion kann einige i18n-Szenarien beeinträchtigen oder verkomplizieren, daher wurde sie als funktionale Erweiterung hinzugefügt. Wenn sie sich als effektiv erweist, würden wir sie wahrscheinlich in eine Klasse aufnehmen, um das Casting von exportierten Funktionen zu vermeiden.

**Warum integrierte Methoden fehlschlagen könnten**

Die Implementierung der Traversierung verschachtelter Strukturen und bedingter Typen mithilfe von typisierten integrierten Funktionsmethoden ist eine ausreichend komplexe Aufgabe. Deshalb funktioniert die Typisierung nur bei direkten Funktionsaufrufen und `bind`-Aufrufen bis zum dritten Argument.

**Warum kann ich nicht direkt eine TS-Datei generieren, um auch Schlüsselwerte umzuwandeln?**

Sie können dies tun, indem Sie den Ergebnistyp an `I18NFn` übergeben. Bei großen Dateigrößen beginnt TS jedoch, riesige Mengen an Ressourcen zu verbrauchen, was die IDE dramatisch verlangsamt. Bei JSON-Dateien ist dies jedoch nicht der Fall.

**Warum wurden andere Methoden der I18N-Klasse nicht typisiert?**

Sie können typisiert werden, wir würden uns freuen, wenn Sie bei der Implementierung helfen. Der Fall ist, dass andere Methoden in 1 % der Fälle verwendet werden.
```