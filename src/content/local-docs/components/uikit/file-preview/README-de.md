<!--GITHUB_BLOCK-->

# FilePreview

<!--/GITHUB_BLOCK-->

`FilePreview` ist eine kompakte Vorschaukarte für eine einzelne Datei, die eine Miniaturansicht oder ein Dateityp-Symbol zusammen mit dem Dateinamen und optionalen Aktionen anzeigt.

```tsx
import {FilePreview} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

```tsx
<FilePreview
  file={{name: 'my-file.docs', type: 'text/docs'} as File}
  onClick={() => action('onClick')}
  actions={[
    {
      icon: <Link width={14} height={14} />,
      title: 'Link',
      onClick: () => action('onLink'),
    },
    {
      icon: <Xmark width={14} height={14} />,
      title: 'Close',
      onClick: () => action('onClose'),
    },
  ]}
/>
```

<!-- Storybook example -->

<FilePreviewExample />

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {Link, Xmark} from '@gravity-ui/icons';
import {FilePreview} from '@gravity-ui/uikit';

export default function () {
    return (
        <FilePreview
            file={{name: 'my-file.docs', type: 'text/docs'} as File}
            onClick={() => console.log('onClick')}
            actions={[
                {
                    icon: <Link width={14} height={14} />,
                    title: 'Link',
                    onClick: () => console.log('onLink'),
                },
                {
                    icon: <Xmark width={14} height={14} />,
                    title: 'Close',
                    onClick: () => console.log('onClose'),
                },
            ]}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

## Eigenschaften

| Name                | Beschreibung                                                                                                                            | Typ                   | Erforderlich | Standard   |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- | :-------------------- | :----------: | :--------- |
| file                | Die `File`-Schnittstelle stellt Informationen über Dateien bereit und ermöglicht JavaScript auf einer Webseite den Zugriff auf deren Inhalt. | `File`                |      ✓       |            |
| imageSrc            | Quelle für die Bildvorschau                                                                                                             | `string`              |              |            |
| description         | Beschreibung, die unter dem Dateinamen angezeigt wird                                                                                   | `string`              |              |            |
| selected            | Aktiviert oder deaktiviert ausgewählte Stile                                                                                            | `boolean`             |              | `false`    |
| className           | Klassenname für den Datei-Container                                                                                                     | `string`              |              |            |
| onClick             | Klick-Handler für den Datei-Container                                                                                                   | `function`            |              |            |
| [actions](#actions) | Ein Array von interaktiven Aktionen                                                                                                     | `FilePreviewAction[]` |              | `[]`       |
| view                | Der Ansichtsmodus der Dateivorschau (der Text ist für die `compact`-Ansicht nicht sichtbar)                                            | `default`, `compact`  |              | `default`  |

#### Aktionen

Für eine Datei können Sie Aktionen festlegen, die beim Überfahren mit der Maus sichtbar sind.

| Name              | Beschreibung                                                                                                                                                           | Typ
