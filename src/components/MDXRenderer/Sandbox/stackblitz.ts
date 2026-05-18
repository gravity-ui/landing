import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import prettierConfig from '@gravity-ui/prettier-config';
import sdk from '@stackblitz/sdk';
import rootPackageJson from 'package.json';

import {scope} from './constants';

const {dependencies, devDependencies} = rootPackageJson;

const packageJsonBase = {
    name: 'gravity-ui-live-editor',
    private: true,
    scripts: {start: 'vite'},
    dependencies: {
        react: dependencies.react,
        'react-dom': dependencies['react-dom'],
        '@gravity-ui/uikit': dependencies['@gravity-ui/uikit'],
    },
    devDependencies: {
        '@types/react': devDependencies['@types/react'],
        '@types/react-dom': devDependencies['@types/react-dom'],
        typescript: dependencies.typescript,
        prettier: devDependencies.prettier,
        '@gravity-ui/tsconfig': devDependencies['@gravity-ui/tsconfig'],
        vite: '^8.0.0',
        '@vitejs/plugin-react': '^6.0.0',
    },
};

const tsconfig = {
    extends: '@gravity-ui/tsconfig/tsconfig',
    compilerOptions: {
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'Bundler',
        jsx: 'react-jsx',
        noEmit: true,
        types: ['vite/client'],
    },
    include: ['src'],
};

const prettierrc = {
    ...prettierConfig,
    // Overrides do not work in Stackblitz, so we need to remove them
    overrides: undefined,
};

const indexHtml = `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gravity UI Live Editor</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
    </body>
</html>
`;

const main = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme="dark">
            <div className="container">
                <App />
            </div>
        </ThemeProvider>
    </React.StrictMode>,
);
`;

const styles = `
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    flex-wrap: wrap;
    row-gap: 20px;
}

.container > * {
    margin: 0 8px;
}

@media (max-width: ${BREAKPOINTS.lg - 1}px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .container > * {
        margin-top: 16px;
    }

    .container > *:first-child {
        margin-top: 0;
    }
}
`;

const viteConfig = `
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
});
`;

function openStackblitz(source: string) {
    const packageJson = {
        ...packageJsonBase,
        dependencies: {
            ...packageJsonBase.dependencies,
            ...getExtraDependencies(source),
        },
    };

    sdk.openProject(
        {
            title: 'Gravity UI live editor',
            description: 'Generated from landing live editor',
            template: 'node',
            files: {
                'package.json': JSON.stringify(packageJson, null, 4),
                'tsconfig.json': JSON.stringify(tsconfig, null, 4),
                '.prettierrc': JSON.stringify(prettierrc, null, 4),
                'index.html': indexHtml.trim(),
                'src/main.tsx': main.trim(),
                'src/App.tsx': source.trim(),
                'src/styles.css': styles.trim(),
                'vite.config.ts': viteConfig.trim(),
            },
        },
        {
            openFile: 'src/App.tsx',
            newWindow: true,
        },
    );
}

function getExtraDependencies(source: string): Record<string, string> {
    const extra: Record<string, string> = {};

    for (const specifier of collectImportSpecifiers(source)) {
        const packageName = getPackageName(specifier);

        if (!packageName || packageName in packageJsonBase.dependencies) {
            continue;
        }

        const scopePackageNames = Object.keys(scope.import);
        const inScope = scopePackageNames.some(
            (s) => specifier === s || specifier.startsWith(`${s}/`),
        );

        if (!inScope) {
            continue;
        }

        if (isProjectDependency(packageName)) {
            extra[packageName] = dependencies[packageName];
        }
    }

    return extra;
}

// import {Button} from '@gravity-ui/uikit' -> '@gravity-ui/uikit'
// import '@gravity-ui/uikit/styles/styles.css' -> '@gravity-ui/uikit/styles/styles.css'
const patterns = [/\bfrom\s+['"]([^'"]+)['"]/g, /\bimport\s+['"]([^'"]+)['"]/g];

function collectImportSpecifiers(source: string): string[] {
    const result = new Set<string>();

    for (const regexp of patterns) {
        let match: RegExpExecArray | null = regexp.exec(source);

        while (match !== null) {
            result.add(match[1]);
            match = regexp.exec(source);
        }
    }

    return Array.from(result);
}

// '@gravity-ui/uikit/styles/styles.css' -> '@gravity-ui/uikit'
// 'react-dom/client' -> 'react-dom'
// './App' -> undefined
function getPackageName(specifier: string): string | undefined {
    if (!specifier || specifier.startsWith('.') || specifier.startsWith('/')) {
        return undefined;
    }

    if (specifier.startsWith('@')) {
        const parts = specifier.split('/');
        return parts.length >= 2 ? `${parts[0]}/${parts[1]}` : undefined;
    }

    const slash = specifier.indexOf('/');

    return slash === -1 ? specifier : specifier.slice(0, slash);
}

function isProjectDependency(name: string): name is keyof typeof dependencies {
    return name in dependencies;
}

export {openStackblitz};
