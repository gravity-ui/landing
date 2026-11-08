import fs from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);

/**
 * Resolve an installed package without assuming a flat node_modules layout.
 *
 * @param {string} packageName npm package name.
 * @param {string} projectRoot Directory from which Node would resolve the package.
 * @returns {{packageRoot: string, packageJson: Record<string, unknown>}}
 */
export function resolveInstalledPackage(packageName, projectRoot) {
    let entryPath;

    try {
        entryPath = require.resolve(packageName, {paths: [projectRoot]});
    } catch (error) {
        throw new Error(`Cannot resolve installed package ${packageName} from ${projectRoot}`, {
            cause: error,
        });
    }

    let currentDir = path.dirname(fs.realpathSync(entryPath));
    const filesystemRoot = path.parse(currentDir).root;

    while (currentDir !== filesystemRoot) {
        const packageJsonPath = path.join(currentDir, 'package.json');

        if (fs.existsSync(packageJsonPath)) {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

            if (packageJson.name === packageName) {
                return {packageRoot: currentDir, packageJson};
            }
        }

        currentDir = path.dirname(currentDir);
    }

    throw new Error(`Cannot find package.json for installed package ${packageName}`);
}
