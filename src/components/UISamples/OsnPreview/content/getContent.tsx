import CkeckMark from '../../../../assets/osn-landing/check-mark-icon.svg';
import Code from '../../../../assets/osn-landing/code-bg.svg';
import Cube from '../../../../assets/osn-landing/cube-bg.svg';
import Cubes from '../../../../assets/osn-landing/cubes-bg.svg';
import HeaderLandingDark from '../../../../assets/osn-landing/header-landing-dark.png';
import HeaderLanding from '../../../../assets/osn-landing/header-landing.png';
import LayoutImage from '../../../../assets/osn-landing/layout-image.png';
import Mail from '../../../../assets/osn-landing/mail-bg.svg';
import RandomNumbers from '../../../../assets/osn-landing/random-numbers-bg.svg';
import Result from '../../../../assets/osn-landing/result.svg';
import Store from '../../../../assets/osn-landing/store-bg.svg';
import TimeLineFirstDark from '../../../../assets/osn-landing/timeline-1-dark.svg';
import TimeLineFirst from '../../../../assets/osn-landing/timeline-1.svg';
import TimeLineSecondDark from '../../../../assets/osn-landing/timeline-2-dark.svg';
import TimeLineSecond from '../../../../assets/osn-landing/timeline-2.svg';
import TimeLineThirdDark from '../../../../assets/osn-landing/timeline-3-dark.svg';
import TimeLineThird from '../../../../assets/osn-landing/timeline-3.svg';
import TimeLineFourthDark from '../../../../assets/osn-landing/timeline-4-dark.svg';
import TimeLineFourth from '../../../../assets/osn-landing/timeline-4.svg';
import TimeLineFifthDark from '../../../../assets/osn-landing/timeline-5-dark.svg';
import TimeLineFifth from '../../../../assets/osn-landing/timeline-5.svg';
import TimeLineSixthDark from '../../../../assets/osn-landing/timeline-6-dark.svg';
import TimeLineSixth from '../../../../assets/osn-landing/timeline-6.svg';
import UsersIcon from '../../../../assets/osn-landing/users-icon.svg';
import YandexIcon from '../../../../assets/osn-landing/yandex-icon.svg';

export function getContent(theme: 'light' | 'dark' = 'light') {
    return {
        blocks: [
            {
                type: 'header-block',
                title: 'Sample Service',
                theme: theme,
                description:
                    '<p>The service does good and provides you with a lot of opportunities and features. With the highest tech in mind we created a solution that could you suit you the best way possible</p>',
                width: 's',
                verticalOffset: 'l',
                background: {
                    dark: {
                        image: HeaderLandingDark,
                    },
                    light: {
                        image: HeaderLanding,
                    },
                },
            },
            {
                type: 'extended-features-block',
                title: {
                    text: 'Why this solution is good',
                    color: 'red',
                },
                items: [
                    {
                        title: 'Scalability',
                        icon: YandexIcon,
                        text: '<p>You can have either one or multiple instances depending on your demands including your organization size and number of emplyees. We have something both for big companies and small startups, and everything is backed by our expertise in different fields.</p>',
                    },
                    {
                        title: 'Features',
                        icon: UsersIcon,
                        text: '<p>Working in the field you are likely to use a lot of tools and we want to aknowledge that we follow all the industry stadards and even more — we can make something specifically tailored for your needs and requirements. So whatever you want, we’re likely to offer you that.</p>',
                    },
                    {
                        title: 'Price',
                        icon: CkeckMark,
                        text: '<p>When thinking about the price a lot of company managers feel that they could pay less. Think no more and pay less today as our prices are lowest on the market. We offer subscription-based models as well as hour-based. Choose whichever is better for you and adjust it any time.</p>',
                    },
                ],
            },
            {
                type: 'content-layout-block',
                textWidth: 's',
                theme: 'dark',
                textContent: {
                    text: '',
                    title: {
                        text: 'We have some additional content for you to discover on our knowledge database',
                    },
                    buttons: [
                        {
                            text: 'Learn More',
                            view: 'normal-contrast',
                        },
                    ],
                },
                background: LayoutImage,
            },
            {
                type: 'card-layout-block',
                title: 'Tell a story and build a narrative',
                description:
                    '<p>We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.</p>',
                colSizes: {
                    all: 6,
                    lg: 3,
                    md: 4,
                    sm: 6,
                },
                children: [
                    {
                        type: 'layout-item',
                        content: {
                            title: 'Discover Terms',
                            text: '<p>The very first step when you get all the information you possibly need</p>',
                        },
                        media: {
                            dark: {
                                image: TimeLineFirstDark,
                            },
                            light: {
                                image: TimeLineFirst,
                            },
                        },
                    },
                    {
                        type: 'layout-item',
                        content: {
                            title: 'Create Application',
                            text: '<p>After you’re done with the information collection, proceed to the application</p>',
                        },
                        media: {
                            dark: {
                                image: TimeLineSecondDark,
                            },
                            light: {
                                image: TimeLineSecond,
                            },
                        },
                    },
                    {
                        type: 'layout-item',
                        content: {
                            title: 'Prepare all papers',
                            text: '<p>In order to continue you’ll need to prepare everything according with the roadmap we’ll give you</p>',
                        },
                        media: {
                            dark: {
                                image: TimeLineThirdDark,
                            },
                            light: {
                                image: TimeLineThird,
                            },
                        },
                    },
                    {
                        type: 'layout-item',
                        content: {
                            title: 'Fill the Form',
                            text: '<p>A couple more questions for you and a couple more answers for us</p>',
                        },
                        media: {
                            dark: {
                                image: TimeLineFourthDark,
                            },
                            light: {
                                image: TimeLineFourth,
                            },
                        },
                    },
                    {
                        type: 'layout-item',
                        content: {
                            title: 'Meet with the manager',
                            text: '<p>Our managers will guide you throughout the entire process</p>',
                        },
                        media: {
                            dark: {
                                image: TimeLineFifthDark,
                            },
                            light: {
                                image: TimeLineFifth,
                            },
                        },
                    },
                    {
                        type: 'layout-item',
                        content: {
                            title: 'Submit the Application',
                            text: '<p>Now everything is ready</p>',
                        },
                        media: {
                            dark: {
                                image: TimeLineSixthDark,
                            },
                            light: {
                                image: TimeLineSixth,
                            },
                        },
                    },
                ],
            },
            {
                type: 'card-layout-block',
                title: 'Some more cards for your information',
                description:
                    '<p>They represent both the areas we are profficient at and some of the case studies regarding the projects we participated at. Usually it’s a good starting point for a conversation</p>',
                colSizes: {
                    all: 12,
                    lg: 3,
                    md: 4,
                    sm: 6,
                },
                children: [
                    {
                        type: 'background-card',
                        title: 'The Cube',
                        text: '<p>A simplistic yet powerful volume geometry primitive</p>',
                        backgroundColor: '#5B768C',
                        background: {
                            src: Cube,
                            alt: 'cube',
                        },
                        paddingBottom: 'm',
                        theme: 'dark',
                    },
                    {
                        type: 'background-card',
                        title: 'Pile of Cubes',
                        text: '<p>If you put two cubes together and then one above them it saves the space and enhances the storage</p>',
                        backgroundColor: '#277270',
                        background: {
                            src: Cubes,
                            alt: 'cubes',
                        },
                        paddingBottom: 'm',
                        theme: 'dark',
                    },
                    {
                        type: 'background-card',
                        title: 'Random Numbers',
                        text: '<p>Some of the random number generators are not quite random and therefore can’t help with tough management decisions</p>',
                        backgroundColor: '#F7AF49',
                        background: {
                            src: RandomNumbers,
                            alt: 'random numbers',
                        },
                        paddingBottom: 'm',
                        theme: 'light',
                    },
                    {
                        type: 'background-card',
                        title: 'Code Assistant',
                        text: '<p>Some day it might change the way the industry operates</p>',
                        backgroundColor: '#4761D6',
                        background: {
                            src: Code,
                            alt: 'code',
                        },
                        paddingBottom: 'm',
                        theme: 'dark',
                    },
                    {
                        type: 'background-card',
                        title: 'Mail List Service',
                        text: '<p>Although every orgnization has its own sort od messenger to use, the mail still provides some great experience</p>',
                        backgroundColor: '#77E369',
                        background: {
                            src: Mail,
                            alt: 'mail',
                        },
                        paddingBottom: 'm',
                        theme: 'light',
                    },
                    {
                        type: 'background-card',
                        title: 'Store all the Project Data',
                        text: '<p>Whether it’s just a file or anything different, safely share it with your team and collaborate</p>',
                        backgroundColor: '#FAE26F',
                        background: {
                            src: Store,
                            alt: 'store',
                        },
                        paddingBottom: 'm',
                        theme: 'light',
                    },
                    {
                        type: 'background-card',
                        title: 'That’s not all',
                        text: 'Click the button to learn more',
                        backgroundColor: theme === 'light' ? 'white' : '#383438',
                        paddingBottom: 'm',
                        theme: theme,
                        buttons: [
                            {
                                text: 'Learn more',
                                theme: 'monochrome',
                            },
                        ],
                    },
                ],
            },
            {
                largeMedia: true,
                mediaOnly: false,
                size: 'l',
                type: 'media-block',
                direction: 'content-media',
                anchor: {
                    url: '1',
                    text: 'Фильм',
                },
                title: 'Discover our latest webinar',
                additionalInfo:
                    'Our managers and engineers share their expertise on the best practices',
                media: {
                    image: Result,
                },
                disableShadow: true,
            },
            {
                type: 'content-layout-block',
                size: 'l',
                centered: true,
                textContent: {
                    title: '',
                    text: '',
                    additionalInfo: '',
                    buttons: [
                        {
                            text: 'Built with GravityUI',
                            theme: 'normal',
                            img: 'https://storage.yandexcloud.net/cloud-www-assets/pages/open-source/open-source-gravity-ui-button.svg',
                            url: 'https://gravity-ui.com/',
                        },
                    ],
                },
            },
        ],
    };
}
