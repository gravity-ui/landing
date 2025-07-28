import yaml from 'yaml';

export default function (source) {
    const parsed = yaml.parse(source);
    return `export default ${JSON.stringify(parsed)};`;
}
