const fs = require('fs');
const path = require('path');

// The theme gallery fetches its files one by one, so the catalog of
// @gravity-ui/themes is copied next to the client chunks instead of being
// bundled. The directory is named after the catalog content hash: the files
// are served, and uploaded to the CDN, with the same immutable cache as the
// chunks.
const CATALOG_DIR = path.dirname(require.resolve('@gravity-ui/themes/catalog/manifest.json'));
const {hash} = JSON.parse(fs.readFileSync(path.join(CATALOG_DIR, 'manifest.json'), 'utf8'));

const THEME_CATALOG_PATH = `static/themes/${hash.slice(0, 16)}`;

class ThemeCatalogPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tapPromise('ThemeCatalogPlugin', async () => {
            const target = path.join(compiler.outputPath, THEME_CATALOG_PATH);
            if (fs.existsSync(target)) {
                return;
            }
            // Copy aside and rename, so an interrupted copy is never taken for a complete one.
            const temporary = `${target}.tmp-${process.pid}`;
            await fs.promises.rm(temporary, {recursive: true, force: true});
            await fs.promises.cp(CATALOG_DIR, temporary, {recursive: true});
            await fs.promises.rename(temporary, target);
        });
    }
}

module.exports = {THEME_CATALOG_PATH, ThemeCatalogPlugin};
