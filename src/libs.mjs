const getReadmeUrls = (branchUrl) => ({
    en: `${branchUrl}/README.md`,
    ru: `${branchUrl}/README-ru.md`,
});

export const libs = [
    {
        id: 'uikit',
        githubId: 'gravity-ui/uikit',
        npmId: '@gravity-ui/uikit',
        title: 'UIKit',
        primary: true,
        landing: true,
        tags: ['ui'],
        storybookUrl: 'https://preview.gravity-ui.com/uikit/',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/uikit/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/uikit/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'markdown-editor',
        githubId: 'gravity-ui/markdown-editor',
        npmId: '@gravity-ui/markdown-editor',
        title: 'Markdown editor',
        primary: false,
        landing: true,
        tags: ['ui'],
        storybookUrl: 'https://preview.gravity-ui.com/md-editor/',
        readmeUrl: getReadmeUrls(
            'https://raw.githubusercontent.com/gravity-ui/markdown-editor/main',
        ),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/markdown-editor/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'graph',
        githubId: 'gravity-ui/graph',
        npmId: '@gravity-ui/graph',
        title: 'Graph',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl: 'https://preview.gravity-ui.com/graph/',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/graph/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/graph/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'components',
        githubId: 'gravity-ui/components',
        npmId: '@gravity-ui/components',
        title: 'Components',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl:
            'https://preview.gravity-ui.com/components/?path=/story/components-adaptivetabs--default',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/components/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/components/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'icons',
        githubId: 'gravity-ui/icons',
        npmId: '@gravity-ui/icons',
        title: 'Icons',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl: 'https://preview.gravity-ui.com/icons/',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/icons/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/icons/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'illustrations',
        githubId: 'gravity-ui/illustrations',
        npmId: '@gravity-ui/illustrations',
        title: 'Illustrations',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl: 'https://preview.gravity-ui.com/illustrations/',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/illustrations/main'),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/illustrations/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'dynamic-forms',
        githubId: 'gravity-ui/dynamic-forms',
        npmId: '@gravity-ui/dynamic-forms',
        title: 'Dynamic Forms',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl: 'https://preview.gravity-ui.com/dynamic-forms/',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/dynamic-forms/main'),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/dynamic-forms/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'page-constructor',
        githubId: 'gravity-ui/page-constructor',
        npmId: '@gravity-ui/page-constructor',
        title: 'Page constructor',
        primary: false,
        landing: true,
        tags: ['ui'],
        storybookUrl: 'https://preview.gravity-ui.com/page-constructor/',
        readmeUrl: getReadmeUrls(
            'https://raw.githubusercontent.com/gravity-ui/page-constructor/main',
        ),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/page-constructor/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'blog-constructor',
        githubId: 'gravity-ui/blog-constructor',
        npmId: '@gravity-ui/blog-constructor',
        title: 'Blog Constructor',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl: 'https://preview.yandexcloud.dev/blog-constructor/',
        readmeUrl: getReadmeUrls(
            'https://raw.githubusercontent.com/gravity-ui/blog-constructor/main',
        ),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/blog-constructor/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'chartkit',
        githubId: 'gravity-ui/chartkit',
        npmId: '@gravity-ui/chartkit',
        title: 'ChartKit',
        primary: false,
        landing: true,
        tags: ['ui'],
        storybookUrl: 'https://preview.gravity-ui.com/chartkit/',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/chartkit/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/chartkit/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'table',
        githubId: 'gravity-ui/table',
        npmId: '@gravity-ui/table',
        title: 'Table',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/table/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/table/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'dashkit',
        githubId: 'gravity-ui/dashkit',
        npmId: '@gravity-ui/dashkit',
        title: 'DashKit',
        primary: false,
        landing: true,
        tags: ['ui'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/dashkit/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/dashkit/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'yagr',
        githubId: 'gravity-ui/yagr',
        npmId: '@gravity-ui/yagr',
        title: 'Yagr',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/yagr/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/yagr/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'nodekit',
        githubId: 'gravity-ui/nodekit',
        npmId: '@gravity-ui/nodekit',
        title: 'NodeKit',
        primary: false,
        landing: false,
        tags: ['nodejs'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/nodekit/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/nodekit/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'expresskit',
        githubId: 'gravity-ui/expresskit',
        npmId: '@gravity-ui/expresskit',
        title: 'ExpressKit',
        primary: false,
        landing: false,
        tags: ['nodejs'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/expresskit/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/expresskit/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'app-layout',
        githubId: 'gravity-ui/app-layout',
        npmId: '@gravity-ui/app-layout',
        title: 'App Layout',
        primary: false,
        landing: false,
        tags: ['nodejs'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/app-layout/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/app-layout/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    // {
    //     id: 'app-builder',
    //     githubId: 'gravity-ui/app-builder',
    //     npmId: '@gravity-ui/app-builder',
    //     title: 'App Builder',
    //     primary: false,
    //     landing: false,
    //     tags: ['infrastructure'],
    //     storybookUrl: '',
    //     readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/app-builder/main'),
    //     changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/app-builder/main/CHANGELOG.md',
    //     mainBranch: 'main',
    // },
    {
        id: 'navigation',
        githubId: 'gravity-ui/navigation',
        npmId: '@gravity-ui/navigation',
        title: 'Navigation',
        primary: false,
        landing: true,
        tags: ['ui'],
        storybookUrl: 'https://preview.gravity-ui.com/navigation/',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/navigation/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/navigation/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'date-utils',
        githubId: 'gravity-ui/date-utils',
        npmId: '@gravity-ui/date-utils',
        title: 'Date Utils',
        primary: false,
        landing: false,
        tags: ['ui', 'nodejs'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/date-utils/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/date-utils/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'date-components',
        githubId: 'gravity-ui/date-components',
        npmId: '@gravity-ui/date-components',
        title: 'Date Components',
        primary: false,
        landing: true,
        tags: ['ui'],
        storybookUrl:
            'https://preview.gravity-ui.com/date-components/?path=/docs/components-calendar--docs',
        readmeUrl: getReadmeUrls(
            'https://raw.githubusercontent.com/gravity-ui/date-components/main',
        ),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/date-components/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'axios-wrapper',
        githubId: 'gravity-ui/axios-wrapper',
        npmId: '@gravity-ui/axios-wrapper',
        title: 'Axios wrapper',
        primary: false,
        landing: false,
        tags: ['ui', 'nodejs'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/axios-wrapper/main'),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/axios-wrapper/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'dialog-fields',
        githubId: 'gravity-ui/dialog-fields',
        npmId: '@gravity-ui/dialog-fields',
        title: 'Dialog Fields',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/dialog-fields/main'),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/dialog-fields/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'i18n',
        githubId: 'gravity-ui/i18n',
        npmId: '@gravity-ui/i18n',
        title: 'I18n',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/i18n/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/i18n/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'data-source',
        githubId: 'gravity-ui/data-source',
        npmId: '@gravity-ui/data-source',
        title: 'Data Source',
        primary: false,
        landing: false,
        tags: ['ui'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/data-source/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/data-source/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'eslint-config',
        githubId: 'gravity-ui/eslint-config',
        npmId: '@gravity-ui/eslint-config',
        title: 'ESlint Config',
        primary: false,
        landing: false,
        tags: ['infrastructure'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/eslint-config/main'),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/eslint-config/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'tsconfig',
        githubId: 'gravity-ui/tsconfig',
        npmId: '@gravity-ui/tsconfig',
        title: 'TSconfig',
        primary: false,
        landing: false,
        tags: ['infrastructure'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/tsconfig/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/tsconfig/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'prettier-config',
        githubId: 'gravity-ui/prettier-config',
        npmId: '@gravity-ui/prettier-config',
        title: 'Prettier Config',
        primary: false,
        landing: false,
        tags: ['infrastructure'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls(
            'https://raw.githubusercontent.com/gravity-ui/prettier-config/main',
        ),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/prettier-config/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'stylelint-config',
        githubId: 'gravity-ui/stylelint-config',
        npmId: '@gravity-ui/stylelint-config',
        title: 'Stylelint Config',
        primary: false,
        landing: false,
        tags: ['infrastructure'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls(
            'https://raw.githubusercontent.com/gravity-ui/stylelint-config/main',
        ),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/stylelint-config/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'babel-preset',
        githubId: 'gravity-ui/babel-preset',
        npmId: '@gravity-ui/babel-preset',
        title: 'Babel Preset',
        primary: false,
        landing: false,
        tags: ['infrastructure'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls('https://raw.githubusercontent.com/gravity-ui/babel-preset/main'),
        changelogUrl: 'https://raw.githubusercontent.com/gravity-ui/babel-preset/main/CHANGELOG.md',
        mainBranch: 'main',
    },
    {
        id: 'browserslist-config',
        githubId: 'gravity-ui/browserslist-config',
        npmId: '@gravity-ui/browserslist-config',
        title: 'Browserslist Config',
        primary: false,
        landing: false,
        tags: ['infrastructure'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls(
            'https://raw.githubusercontent.com/gravity-ui/browserslist-config/master',
        ),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/browserslist-config/master/CHANGELOG.md',
        mainBranch: 'master',
    },
    {
        id: 'webpack-i18n-assets-plugin',
        githubId: 'gravity-ui/webpack-i18n-assets-plugin',
        npmId: '@gravity-ui/webpack-i18n-assets-plugin',
        title: 'Webpack i18n plugin',
        primary: false,
        landing: false,
        tags: ['ui', 'infrastructure'],
        storybookUrl: '',
        readmeUrl: getReadmeUrls(
            'https://raw.githubusercontent.com/gravity-ui/webpack-i18n-assets-plugin/main',
        ),
        changelogUrl:
            'https://raw.githubusercontent.com/gravity-ui/webpack-i18n-assets-plugin/main/CHANGELOG.md',
        mainBranch: 'main',
    },
];
