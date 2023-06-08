import guide1Content from './content/guide1.mdx';
import guide2Content from './content/guide2.mdx';

export const guides = {
    id: 'guides',
    title: 'Design guides',
    description: 'Design guides description',
    content: '#Design',
    articles: [
        {
            id: 'guide1',
            title: 'Guide 1',
            description: 'Lorem ipsum dolor',
            content: guide1Content,
        },
        {
            id: 'guide2',
            title: 'Guide 2',
            description: 'Lorem ipsum dolor',
            content: guide2Content,
        },
    ],
};
