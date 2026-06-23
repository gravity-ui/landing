# Browserslist-Konfiguration der Gravity UI-Paketfamilie

## Kompatible Browser

Kompatible Browser finden Sie unter [browsersl.ist](https://browsersl.ist/#q=baseline%20widely%20available%20on%202025-01-01%20with%20downstream).

## Installation

```bash
npm i --save-dev @gravity-ui/browserslist-config
```

Fügen Sie die Konfiguration im Abschnitt `browserslist` Ihrer `package.json` hinzu:

```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config"
  ]
}
```

Sie können zusätzliche Browser basierend auf Ihrem Publikum angeben, z. B.:
```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config",
    "Chrome >= 100",
    "Firefox >= 100"
  ]
}
```

## Verwendung

Das Paket stellt die Produktionsversion von browserslist bereit.