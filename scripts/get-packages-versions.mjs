import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const packagesMap = {
    '@gravity-ui/uikit': 'uikit',
    '@gravity-ui/components': 'components',
    // '@gravity-ui/date-components': 'date-components',
};

const packageJsonPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../package.json');
const packagesVersionsPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '../src/packages-versions.json',
);

const getPackagesVersions = () => {
    try {
        console.log('GET_PACKAGES_VERSIONS_START');

        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const dependencies = packageJson.dependencies;

        const result = {};
        Object.keys(packagesMap).forEach((packageName) => {
            if (dependencies[packageName]) {
                result[packagesMap[packageName]] = dependencies[packageName].replace(/[\^~]/g, '');
            } else {
                console.warn('GET_PACKAGES_VERSIONS_MISSED_PACKAGE', packageName);
            }
        });

        console.log('GET_PACKAGES_VERSIONS_RESULT', result);

        fs.writeFileSync(packagesVersionsPath, JSON.stringify(result), 'utf8');

        console.log('GET_PACKAGES_VERSIONS_FINISH');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

getPackagesVersions();
