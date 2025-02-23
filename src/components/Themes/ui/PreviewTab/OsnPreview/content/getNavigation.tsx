import gravityUiLogo from '../../../../../../assets/osn-landing/gravity-ui-logo.svg';

export function getNavigation() {
    return {
        logo: {
            icon: gravityUiLogo,
        },
        header: {
            leftItems: [
                {
                    type: 'link',
                    text: 'Projects',
                },
                {
                    type: 'link',
                    text: 'Technology',
                },
                {
                    type: 'link',
                    text: 'Contacts',
                },
            ],
            rightItems: [
                {
                    type: 'dropdown',
                    text: 'Language',
                    items: [
                        {
                            text: 'Russian',
                            type: 'link',
                        },
                        {
                            text: 'English',
                            type: 'link',
                        },
                    ],
                },
            ],
        },
    };
}
