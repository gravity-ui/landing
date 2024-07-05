import {Plus} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {SelectableCard} from '../../../SelectableCard/SelectableCard';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {DefaultFontFamilyType} from '../../lib/typography/constants';

import './TypographyTab.scss';

const FONT_FAMILIES_OPTION: {
    name: string;
    variableName: DefaultFontFamilyType;
    fonts: {title: string; key: string; link: string}[];
}[] = [
    {
        name: 'Sans Font Family',
        variableName: DefaultFontFamilyType.Sans,
        fonts: [
            {
                title: 'Inter',
                key: 'inter',
                link: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
            },
            {
                title: 'Merriweather',
                key: 'merriweather',
                link: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
            },
            {
                title: 'Titillium Web',
                key: 'titillium_web',
                link: 'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap',
            },
        ],
    },
    {
        name: 'Monospace Font Family',
        variableName: DefaultFontFamilyType.Monospace,
        fonts: [
            {
                title: 'Roboto Mono',
                key: 'roboto_mono',
                link: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap',
            },
            {
                title: 'Ubuntu Mono',
                key: 'ubuntu_mono',
                link: 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            },
            {
                title: 'IBM Plex Mono',
                key: 'ibm_plex_mono',
                link: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
            },
        ],
    },
];

const b = block('typography-tab');

export const FontFamilyPicker = () => {
    const {
        typography: {
            baseSetting: {fontFamily},
        },
    } = useThemeCreator();

    const {updateFontFamily} = useThemeCreatorMethods();

    return (
        <Flex direction="column" alignItems="flex-start" gap={5} width="100%">
            <Text variant="display-2">Font Families</Text>
            {FONT_FAMILIES_OPTION.map((option) => (
                <Flex direction="column" gap={5} style={{width: '100%'}} key={option.variableName}>
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Text variant="body-3">{option.name}</Text>

                        <Flex gap={4}>
                            {option.fonts.map((font) => (
                                <SelectableCard
                                    key={font.key}
                                    className={b('font-card')}
                                    selected={fontFamily[option.variableName].title === font.title}
                                    text={font.title}
                                    textProps={{
                                        variant: 'header-1',
                                        style: {
                                            fontFamily: font.title,
                                        },
                                    }}
                                    pureText
                                    onClick={() => {
                                        updateFontFamily({
                                            fontType: option.variableName,
                                            value: {
                                                title: font.title,
                                                key: font.key,
                                                link: font.link,
                                            },
                                        });
                                    }}
                                />
                            ))}
                            <SelectableCard
                                key={'custom'}
                                className={b('font-card')}
                                selected={false}
                                text="Custom (disable)"
                                textProps={{
                                    variant: 'body-3',
                                }}
                                pureText
                                onClick={() => {
                                    //TODO add logic
                                }}
                            />
                        </Flex>
                    </Flex>
                    {/*//TODO add logic*/}
                    {/*{selectedFonts[option.variableName] === 'Custom' && (*/}
                    {/*    <Flex>custom font settings</Flex>*/}
                    {/*)}*/}
                </Flex>
            ))}
            <Button size="xl" view="outlined-action" disabled>
                <Icon data={Plus} />
                Add Font Family
            </Button>
        </Flex>
    );
};
