export const buildIconSvgPath = (svgName: string, componentName: string) =>
    `import ${componentName}Icon from '@gravity-ui/icons/svgs/${svgName}.svg';`;

export const buildIconImportLine = (componentName: string) =>
    `import {${componentName}} from '@gravity-ui/icons';`;
