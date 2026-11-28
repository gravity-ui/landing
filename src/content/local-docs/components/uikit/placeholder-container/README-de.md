GRAVITY_TRANSLATION_BLOCK_0_END

`PlaceholderContainer` ist eine Komponente zur Anzeige von Inhalten mit einem Bild, Textinhalt und Aktionssteuerelementen.

## Ausrichtung

`PlaceholderContainer` hat die Ausrichtungen `row` und `column` für das Layout des Inhalts. Zur Verwaltung verwenden Sie die Eigenschaft `direction`. Die Standardausrichtung ist `row`.

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe des `PlaceholderContainer` zu verwalten. Die Standardgröße ist `l`. Die möglichen Werte sind `s`, `m`, `l` und `promo`. Der Wert `promo` setzt die volle Breite des Inhaltsbereichs ohne minimale Inhalts höhe und eine größere Titelgröße.

## Aktionssteuerelemente

`PlaceholderContainer` kann Schaltflächensteuerelemente oder ein Array von Schaltflächen rendern. Zur Anzeige verwenden Sie die Eigenschaft `actions`.

GRAVITY_TRANSLATION_BLOCK_1_END

Sie können auch benutzerdefinierte Steuerelemente rendern:

GRAVITY_TRANSLATION_BLOCK_2_END

## Bild und Inhalt

Die Eigenschaft `image` ermöglicht die Konfiguration der `src`- und `alt`-Einstellungen des Bildes oder eines React-Knotens.

GRAVITY_TRANSLATION_BLOCK_3_END

Der Inhalt von `PlaceholderContainer` besteht aus Titel- und Beschreibungsbereichen, die Sie mit den entsprechenden Eigenschaften festlegen können. Zum Rendern von benutzerdefiniertem Inhalt verwenden Sie die Eigenschaft `content`.

```tsx
<PlaceholderContainer
  title="Beispiel mit benutzerdefiniertem Inhalt"
  description="Eine Beschreibung für die Demo der PlaceholderContainer-Komponente"
  direction="row"
  size="s"
  align="center"
  image={
    <svg width="230" height="230" viewBox="0 0 230 230" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#DDDDDD" height="100%" transform="matrix(1 0 0 1 0 0)" width="100%" />
        <text
          fill="#999999"
          fontFamily="Sans-serif"
          fontSize="16"
          strokeWidth="0"
          textAnchor="middle"
          transform="matrix(1.88041 0 0 1.88041 -48.1289 -81.7475)"
          x="86.49"
          y="114"
        >
          1:1
        </text>
      </g>
    </svg>
  }
  content={
    <div>
      <h3>Hier gibt es einen benutzerdefinierten Titel</h3>
      <p>
        Sie können <strong>hier</strong> beliebigen langen Text mit benutzerdefiniertem Inhalt hinzufügen und die benutzerdefinierte Inhaltsgröße verwenden, um sehr lange Texte anzuzeigen.
      </p>
    </div>
  }
/>
```

## Ausrichtung

Zur Verwaltung der Ausrichtung des Inhalts innerhalb des übergeordneten Containers verwenden Sie die Eigenschaft `align`. Der Standardwert ist `center`.

## Eigenschaften

| Name        | Beschreibung                                                                                             |                                     Typ                                      |  Standardwert   |
| :---------- | :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------: | :-------------: |
| className   | `class` HTML-Attribut (optional)                                                                         |                                   `string`                                    |                 |
| direction   | Wird verwendet, um die Layout-Richtung des Inhalts festzulegen. Mögliche Werte sind `"row"` und `"column"`. |                                   `string`                                    |     `"row"`     |
| size        | Komponenten-Größe. Mögliche Werte sind `"s"`, `"m"`, `"l"` und `"promo"`.                               |                                   `string`                                    |      `"l"`      |
| align       | Wird verwendet, um die horizontale Ausrichtung des Inhalts festzulegen. Mögliche Werte sind `"center"` und `"left"`. |                                   `string`                                    |   `"center"`    |
| title       | Titeltext des Inhalts                                                                                    |                                   `string`                                    |                 |
| description | Beschreibungstext des Inhalts                                                                            |                                   `string`                                    |                 |
| image       | Wird verwendet, um ein Bild über `src` festzulegen oder einen React-Knoten bereitzustellen                | `PlaceholderContainerImageNodeProps`<br/> `\| PlaceholderContainerImageProps` |                 |
| content     | Wird verwendet, um einen Knoten anstelle des Inhalts (Titel, Beschreibung und Aktionen) zu rendern        |                               `React.ReactNode`                               |                 |
| actions     | Wird verwendet, um ein Array von Schaltflächensteuerelementen oder einen benutzerdefinierten Knoten zu rendern |     `PlaceholderContainerActionProps[]`<br/> `\|        React.ReactNode `     |                 |
| maxWidth    | Wird verwendet, um die Standard-Maximale Breite des Containers zu überschreiben                            |                               `number` `string`                               |                 |