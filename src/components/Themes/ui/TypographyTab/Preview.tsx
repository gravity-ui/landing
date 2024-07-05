import {Card, Flex, Text, TextProps, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {useThemeCreator} from '../../hooks';
import {exportTheme} from '../../lib/themeCreatorExport';

import './TypographyTab.scss';

const TYPOGRAPHY_STYLES_PREVIEW: {
    title: string;
    variants: {title: string; variant: TextProps['variant']}[];
}[] = [
    {
        title: 'Caption',
        variants: [
            {
                title: 'Caption 1',
                variant: 'caption-1',
            },
            {
                title: 'Caption 2',
                variant: 'caption-2',
            },
        ],
    },
    {
        title: 'Body Text',
        variants: [
            {
                title: 'Body 1 Short',
                variant: 'body-short',
            },
            {
                title: 'Body 1',
                variant: 'body-1',
            },
            {
                title: 'Body 2',
                variant: 'body-2',
            },
            {
                title: 'Body 3',
                variant: 'body-3',
            },
        ],
    },
    {
        title: 'Code',
        variants: [
            {
                title: 'Code 1',
                variant: 'code-1',
            },
            {
                title: 'Code 1 Inline',
                variant: 'code-inline-1',
            },
            {
                title: 'Code 2',
                variant: 'code-2',
            },
            {
                title: 'Code 2 Inline',
                variant: 'code-inline-2',
            },
            {
                title: 'Code 3',
                variant: 'code-3',
            },
            {
                title: 'Code 3 Inline',
                variant: 'code-inline-3',
            },
        ],
    },
    {
        title: 'Subheader',
        variants: [
            {
                title: 'Subheader 1',
                variant: 'subheader-1',
            },
            {
                title: 'Subheader 2',
                variant: 'subheader-2',
            },
            {
                title: 'Subheader 3',
                variant: 'subheader-3',
            },
        ],
    },
    {
        title: 'Header',
        variants: [
            {
                title: 'Header 1',
                variant: 'header-1',
            },
            {
                title: 'Header 2',
                variant: 'header-2',
            },
        ],
    },
    {
        title: 'Display',
        variants: [
            {
                title: 'Display 1',
                variant: 'display-1',
            },
            {
                title: 'Display 2',
                variant: 'display-2',
            },
            {
                title: 'Display 3',
                variant: 'display-3',
            },
            {
                title: 'Display 4',
                variant: 'display-4',
            },
        ],
    },
];

const b = block('typography-tab__preview');

export const Preview = () => {
    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(
        () => exportTheme({themeState, ignoreDefaultValues: false}),
        [themeState],
    );

    return (
        <Flex direction="column" gap={10} style={{width: '100%'}}>
            <Text variant="display-2">Typography Styles</Text>
            <Card size="l">
                <ThemeProvider theme="dark" scoped rootClassName={`${b()} ${b({theme: 'dark'})}`}>
                    {themeStyles ? (
                        <style>
                            {`.gravity-ui-landing-typography-tab__preview_theme_dark {${themeStyles.dark}}`}
                        </style>
                    ) : null}
                    <Flex gap={10} style={{padding: 80}} justifyContent="center">
                        {TYPOGRAPHY_STYLES_PREVIEW.map(({title, variants}) => {
                            return (
                                <Flex direction="column" gap={10} key={title}>
                                    <Text
                                        variant="subheader-3"
                                        color="brand"
                                        className={b('variant-title')}
                                    >
                                        {title}
                                    </Text>
                                    {variants.map((variant) => (
                                        <Text variant={variant.variant} key={variant.variant}>
                                            {variant.title}
                                        </Text>
                                    ))}
                                </Flex>
                            );
                        })}
                    </Flex>
                </ThemeProvider>
            </Card>
        </Flex>
    );
};
