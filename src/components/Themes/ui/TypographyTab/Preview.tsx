import {Card, Col, Flex, Row, Text, TextProps, ThemeProvider} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
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
    const {t} = useTranslation('themes');

    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(
        () =>
            exportTheme({
                themeState,
                ignoreDefaultValues: false,
                customRootClassName: 'gravity-ui-landing-typography-tab__preview',
            }),
        [themeState],
    );

    return (
        <Flex direction="column" gap={10} style={{width: '100%'}}>
            <Text variant="display-2">{t('title_typography-styles')}</Text>
            <Card size="l">
                <ThemeProvider theme="dark" scoped rootClassName={`${b()} ${b({theme: 'dark'})}`}>
                    {themeStyles ? <style>{themeStyles}</style> : null}
                    <Row
                        space={{l: 0, m: 0, s: 0}}
                        spaceRow={{l: 0, s: 10}}
                        className={b('wrapper')}
                    >
                        {TYPOGRAPHY_STYLES_PREVIEW.map(({title, variants}) => {
                            return (
                                <Col l="2" m="4" s="12" key={title}>
                                    <Flex direction="column" gap={10} width="100%" key={title}>
                                        <Text
                                            variant="subheader-3"
                                            color="brand"
                                            className={b('variant-title')}
                                        >
                                            {title}
                                        </Text>
                                        {variants.map((variant) => (
                                            <Text
                                                variant={variant.variant}
                                                key={variant.variant}
                                                style={{whiteSpace: 'nowrap'}}
                                            >
                                                {variant.title}
                                            </Text>
                                        ))}
                                    </Flex>
                                </Col>
                            );
                        })}
                    </Row>
                </ThemeProvider>
            </Card>
        </Flex>
    );
};
