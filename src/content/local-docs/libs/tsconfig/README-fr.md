```html
<!--
  This file is part of the @gravity-ui/tsconfig library.

  Copyright (c) 2021-2023 Gravity Technologies.

  For the full copyright and license information, please view the LICENSE
  file that was distributed with this source code.
-->
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@gravity-ui/tsconfig</title>
    <style>
      body {
        font-family: sans-serif;
        line-height: 1.6;
        margin: 20px;
      }
      h1, h2 {
        color: #333;
      }
      code {
        background-color: #f4f4f4;
        padding: 2px 5px;
        border-radius: 3px;
      }
      pre {
        background-color: #f4f4f4;
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
      }
      .language-options {
        margin-bottom: 20px;
        font-size: 0.9em;
        color: #666;
      }
      .language-options a {
        margin-right: 10px;
        text-decoration: none;
        color: #007bff;
      }
      .language-options a.active {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="language-options">
      <a href="../README.md">English</a>
      <a href="./README.fr.md" class="active">Français</a>
    </div>

    <h1>@gravity-ui/tsconfig</h1>

    <h2>Installation</h2>
    <p>Ajoutez le package <code>@gravity-ui/tsconfig</code> en tant que dépendance de développement :</p>
    <pre><code class="language-bash">
npm install --save-dev @gravity-ui/tsconfig
</code></pre>

    <h2>Utilisation</h2>
    <p>Créez un fichier <code>tsconfig.json</code> à la racine de votre projet avec le contenu suivant :</p>
    <pre><code class="language-json">
{
    "extends": "@gravity-ui/tsconfig/tsconfig.json"
}
</code></pre>
  </body>
</html>
```