import listDemos from '../../content/components/uikit/List/readme-examples.md';
import listItemViewDemos from '../../content/components/uikit/ListItemView/readme-examples.md';

const listExamples = new Map(
    Array.from(
        (listDemos + '\n' + listItemViewDemos).matchAll(/^## (\w+)\s*\n```tsx\n([\s\S]*?)^```$/gm),
        ([, name, code]) => [name, code.trim()] as const,
    ),
);

export function prepareUIKitReadme(readme: string) {
    return readme
        .replace(/<br\s*>/gi, '<br />')
        .replace(/^<(List\w+) *\/>$/gm, (tag, name: string) => {
            const code = listExamples.get(name);
            return code ? `<Sandbox code={${JSON.stringify(code)}} />` : tag;
        });
}
