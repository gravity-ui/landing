import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const packagesMap = {
    '@gravity-ui/uikit': 'uikit',
    '@gravity-ui/components': 'components',
    '@gravity-ui/date-components': 'date-components',
    '@gravity-ui/navigation': 'navigation',
    '@gravity-ui/graph': 'graph',
};

const packageJsonPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../package.json');
const packagesVersionsPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '../src/data/packages-versions.json',
);

const getPackagesVersions = () => {
    try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const dependencies = packageJson.dependencies;

        const result = {};
        Object.keys(packagesMap).forEach((packageName) => {
            if (dependencies[packageName]) {
                result[packagesMap[packageName]] = dependencies[packageName].replace(/[\^~]/g, '');
            } else {
                console.warn(`Missed package when getting versions: ${packageName}`);
            }
        });

        console.log('Package versions: ', result);

        fs.writeFileSync(packagesVersionsPath, JSON.stringify(result), 'utf8');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

getPackagesVersions();
