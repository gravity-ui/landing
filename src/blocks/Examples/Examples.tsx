import {Animatable, AnimateBlock, HTML} from '@gravity-ui/page-constructor';
import {Button, Icon, RadioButton, Select, SelectOption, Theme} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import darkThemeIcon from '../../assets/icons/dark-theme.svg';
import lightThemeIcon from '../../assets/icons/light-theme.svg';
import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './Examples.scss';
import {Showcase} from './components/Showcase/Showcase';

const b = block('examples');

export type ExamplesProps = Animatable & {
    title: string;
    colors: {
        title: string;
        value: string;
    }[];
};

export type ExamplesModel = ExamplesProps & {
    type: CustomBlock.Examples;
};

const themes = [
    {
        value: 'dark' as const,
        icon: <Icon className={b('theme-icon')} data={darkThemeIcon} size={16} />,
    },
    {
        value: 'light' as const,
        icon: <Icon className={b('theme-icon')} data={lightThemeIcon} size={16} />,
    },
];

export const Examples: React.FC<ExamplesProps> = ({animated, title, colors}) => {
    const {t} = useTranslation();

    const [color, setColor] = React.useState(colors[0].value);
    const [theme, setTheme] = React.useState<Theme>(themes[0].value);

    const renderOption = React.useCallback((option: SelectOption) => {
        return (
            <div key={option.value} className={b('color-option')}>
                <div className={b('color-option-icon', {color: option.value})} />
                {option.content}
            </div>
        );
    }, []);

    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('header-wrapper')}>
                <h2 className={b('header-title')}>
                    <HTML>{title}</HTML>
                </h2>
                <div className={b('controls')}>
                    <div className={b('control', {type: 'color'})}>
                        <Select
                            value={[color]}
                            renderOption={renderOption}
                            renderSelectedOption={renderOption}
                            onUpdate={([newValue]) => setColor(newValue)}
                            size="xl"
                            width="max"
                        >
                            {colors.map((item) => {
                                return (
                                    <Select.Option
                                        key={item.value}
                                        value={item.value}
                                        content={item.title}
                                    />
                                );
                            })}
                        </Select>
                    </div>

                    <div className={b('control', {type: 'theme'})}>
                        <RadioButton
                            options={themes.map((item) => ({
                                content: item.icon,
                                value: item.value,
                            }))}
                            value={theme}
                            onUpdate={(newValue) => {
                                setTheme(newValue);
                            }}
                            size="xl"
                        />
                    </div>
                </div>
                <div>
                    <Button
                        size="xl"
                        pin="circle-circle"
                        view="outlined"
                        href="https://preview.gravity-ui.com/uikit"
                        target="_blank"
                    >
                        {t('actions.storybook')}
                    </Button>
                </div>
            </div>

            <div className={b('showcase-wrapper')}>
                <Showcase color={color} theme={theme} />
            </div>
        </AnimateBlock>
    );
};

export default Examples;
