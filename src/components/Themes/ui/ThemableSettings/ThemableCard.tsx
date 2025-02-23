import {Moon, Sun} from '@gravity-ui/icons';
import {Flex, Icon, Text, ThemeProvider} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../../utils';
import {useThemeUtilityColor} from '../../hooks';
import {ThemeVariant} from '../../lib/types';
import {ThemePicker} from '../ThemePicker';

import './ThemableCard.scss';
import {ThemableRow} from './types';

const b = block('themable-card');

interface ThemableCardProps {
    rows: ThemableRow[];
    theme: ThemeVariant;
    onChangeTheme?: (newTheme: ThemeVariant) => void;
    showTitle?: boolean;
}

export const ThemableCard: React.FC<ThemableCardProps> = ({
    rows,
    theme,
    onChangeTheme,
    showTitle = true,
}) => {
    const {t} = useTranslation('themes');
    const [backgroundColor] = useThemeUtilityColor({name: 'base-background', theme});

    const renderRow = React.useCallback(
        (row: ThemableRow) => {
            return (
                <div key={row.id} className={b('row')}>
                    <div className={b('row-title')}>
                        {row.renderTitle ? (
                            row.renderTitle()
                        ) : (
                            <Text variant="body-2">{row.title}</Text>
                        )}
                    </div>
                    {row.render(theme)}
                </div>
            );
        },
        [theme],
    );

    return (
        <ThemeProvider theme={theme} rootClassName={b('theme-root', 'sandbox')} scoped>
            <Flex
                className={b({[theme]: true})}
                gap={6}
                direction="column"
                style={{backgroundColor}}
            >
                {showTitle && (
                    <Flex gap={4} space={6}>
                        <Icon data={theme === 'dark' ? Moon : Sun} size={24} />
                        <Text variant="subheader-3">
                            {theme === 'dark' ? t('dark_theme') : t('light_theme')}
                        </Text>
                    </Flex>
                )}
                {onChangeTheme && <ThemePicker value={theme} onUpdate={onChangeTheme} />}
                <Flex gap={4} direction="column">
                    {rows.map(renderRow)}
                </Flex>
            </Flex>
        </ThemeProvider>
    );
};
