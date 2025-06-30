import {BlockType, SubBlockType} from '@gravity-ui/page-constructor';
import {TFunction} from 'next-i18next';
import {CustomPageContent} from 'src/content/types';

export const getContent = (_t: TFunction): CustomPageContent => ({
    background: {
        image: '',
    },
    blocks: [
        {
            title: 'Tell a story and build a narrative',
            description:
                'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
            additionalInfo: '',
            links: [],
            buttons: [
                {
                    text: 'Learn more',
                    theme: 'action',
                    url: 'https://example.com',
                },
                {
                    text: 'Learn less',
                    theme: 'outlined',
                    url: '#',
                },
            ],
            list: [],
            media: {
                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
            },
            type: BlockType.MediaBlock,
        },
        {
            type: BlockType.CardLayoutBlock,
            children: [
                {
                    type: SubBlockType.BackgroundCard,
                    title: 'Tell a story and build a narrative',
                    text: 'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
                },
                {
                    type: SubBlockType.BackgroundCard,
                    title: 'Tell a story and build a narrative',
                    text: 'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
                },
                {
                    type: SubBlockType.BackgroundCard,
                    title: 'Tell a story and build a narrative',
                    text: 'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
                },
            ],
            title: 'Articles',
            description:
                'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
        },
        {
            type: BlockType.FilterBlock,
            title: 'Webinars',
            description:
                'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.\n',
            tags: [
                {
                    id: 'one',
                    label: 'YouTube',
                },
                {
                    id: 'two',
                    label: 'Cloud Video',
                },
            ],
            items: [
                {
                    tags: ['one'],
                    card: {
                        type: SubBlockType.LayoutItem,
                        media: {
                            dark: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                            light: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                        },
                        content: {
                            title: 'Tell a story and build a narrative',
                            text: 'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
                        },
                    },
                },
                {
                    tags: ['two'],
                    card: {
                        type: SubBlockType.LayoutItem,
                        media: {
                            dark: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                            light: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                        },
                        content: {
                            title: 'Lorem&nbsp;ipsum&nbsp;2',
                            text: 'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
                        },
                    },
                },
                {
                    tags: ['one'],
                    card: {
                        type: SubBlockType.LayoutItem,
                        media: {
                            dark: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                            light: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                        },
                        content: {
                            title: 'Lorem&nbsp;ipsum&nbsp;3',
                            text: 'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
                        },
                    },
                },
                {
                    tags: ['one'],
                    card: {
                        type: SubBlockType.LayoutItem,
                        media: {
                            dark: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                            light: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                        },
                        content: {
                            title: 'Lorem&nbsp;ipsum&nbsp;4',
                            text: 'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
                        },
                    },
                },
                {
                    tags: ['two'],
                    card: {
                        type: SubBlockType.LayoutItem,
                        media: {
                            dark: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                            light: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                        },
                        content: {
                            title: 'Lorem&nbsp;ipsum&nbsp;5',
                            text: 'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
                        },
                    },
                },
                {
                    tags: ['two'],
                    card: {
                        type: SubBlockType.LayoutItem,
                        media: {
                            dark: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                            light: {
                                image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/main/new/media-01-01.jpg',
                            },
                        },
                        content: {
                            title: 'Lorem&nbsp;ipsum&nbsp;6',
                            text: 'We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.',
                        },
                    },
                },
            ],
            allTag: false,
        },
        {
            type: BlockType.ContentLayoutBlock,
            textWidth: 's',
            centered: true,
            background: {
                src: '',
                style: {
                    backgroundColor: '#23151E',
                    color: '',
                },
            },
            textContent: {
                title: 'Остались вопросы?',
                text: 'Напишите нам',
                buttons: [
                    {
                        text: 'Заполнить форму',
                        theme: 'action',
                        url: '/training?from=compute-banner',
                    },
                ],
            },
            theme: 'dark',
        },
    ],
});
