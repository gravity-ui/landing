import gravityUiLogoDark from '../../../../assets/osn-landing/gravity-ui-logo-dark.svg';
import gravityUiLogo from '../../../../assets/osn-landing/gravity-ui-logo.svg';

export function getNavigation() {
    return {
        logo: {
            light: {
                icon: gravityUiLogo,
            },
            dark: {
                icon: gravityUiLogoDark,
            },
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
