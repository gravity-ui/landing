import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';

const legacyUikitReadmes = {
    'password-input': 'controls/PasswordInput',
    tabs: 'tabs',
    'text-area': 'controls/TextArea',
    'text-input': 'controls/TextInput',
};

const readText = async (file) =>
    readFile(file, 'utf8').catch((error) => {
        if (error.code === 'ENOENT') {
            return '';
        }
        throw error;
    });

export async function syncComponentReadmes({catalog, docsRoot, locales, fetchReadme = fetch}) {
    const pending = [];

    for (const [libraryId, {components, githubRepository, ref}] of Object.entries(
        catalog.libraries,
    )) {
        const urls = new Map(components.map(({id, readmeUrl}) => [id, readmeUrl.en]));
        if (libraryId === 'uikit') {
            for (const [id, name] of Object.entries(legacyUikitReadmes)) {
                urls.set(
                    id,
                    `https://raw.githubusercontent.com/${githubRepository}/${ref}/src/components/${name}/README.md`,
                );
            }
        }

        for (const [id, url] of urls) {
            const directory = path.join(docsRoot, libraryId, id);
            const input = path.join(directory, 'README.md');
            const outputs = locales.map((locale) => path.join(directory, `README-${locale}.md`));
            const response = await fetchReadme(url, {signal: AbortSignal.timeout(30_000)});
            if (!response.ok) {
                throw new Error(`Unable to fetch ${url}: ${response.status}`);
            }
            const content = await response.text();
            if (!content.trim()) {
                throw new Error(`Empty component README: ${url}`);
            }

            const changed = (await readText(input)) !== content;
            const translations = await Promise.all(outputs.map(readText));
            if (changed) {
                await mkdir(directory, {recursive: true});
                await writeFile(input, content);
            }
            if (changed || translations.some((translation) => !translation.trim())) {
                const needed = changed
                    ? locales
                    : locales.filter((_, index) => !translations[index].trim());
                pending.push({
                    input,
                    locales: needed.join(' '),
                    outputs: needed.map((locale) => path.join(directory, `README-${locale}.md`)),
                });
            }
        }
    }

    return pending;
}
