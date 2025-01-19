import guideBasicsContent from '../../../content/design/guides/content/Basics.mdx';
import guideResourcesContent from '../../../content/design/guides/content/Resources.mdx';
import guideTypographyContent from '../../../content/design/guides/content/Typography.mdx';

export const settings = {
    id: 'settings',
    title: 'Editor settings',
    description: 'Configure your editor',
    articles: [
        {
            id: 'modes',
            title: 'Modes',
            description: '',
            content: guideResourcesContent,
        },
        {
            id: 'split',
            title: 'Split mode',
            description: '',
            content: guideBasicsContent,
        },
        {
            id: 'light-theme',
            title: 'Theme',
            description: '',
            content: guideTypographyContent,
        },
    ],
};

export const presets = {
    id: 'presets',
    title: 'Presets',
    description: 'Set presets',
    articles: [
        {
            id: 'markdown',
            title: 'Markdown',
            description: '',
            content: guideResourcesContent,
        },
        {
            id: 'yfm',
            title: 'Yfm',
            description: '',
            content: guideBasicsContent,
        },
    ],
};
