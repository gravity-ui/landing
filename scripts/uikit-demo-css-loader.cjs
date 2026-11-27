const {createHash} = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

module.exports = function uikitDemoCssLoader() {
    const styles = path.dirname(this.resourcePath);
    const components = path.join(styles, '../build/esm');
    this.addContextDependency(components);
    const files = [
        path.join(styles, 'fonts.css'),
        this.resourcePath,
        ...fs
            .globSync('**/*.css', {cwd: components})
            .sort()
            .map((file) => path.join(components, file)),
    ];
    const css = files.map((file) => {
        this.addDependency(file);
        return fs.readFileSync(file, 'utf8').replace(/^@charset[^;]+;\s*/i, '');
    }).join('\n');
    const hash = createHash('sha256').update(css).digest('hex').slice(0, 12);
    const filename = `static/css/uikit-demo.${hash}.css`;

    this.emitFile(filename, css);
    return `export default __webpack_public_path__ + ${JSON.stringify(filename)};`;
};
