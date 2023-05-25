import {Icon, Theme, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import codeIcon from '../../../assets/icons/code.svg';
import themeIcon from '../../../assets/icons/theme.svg';
import {block} from '../../../utils';

import './ExampleBlock.scss';

const b = block('example-block');

export type ExampleBlockProps = {
    background?: string;
    children: React.ReactNode;
};

export const ExampleBlock: React.FC<ExampleBlockProps> = ({background, children}) => {
    const [theme, setTheme] = React.useState<Theme>('dark');

    return (
        <div className={`${b()}`}>
            <ThemeProvider theme={theme} scoped rootClassName={`${b('theme-root')}`}>
                <div
                    className={b('content', {theme})}
                    {...(background ? {style: {background}} : {})}
                >
                    {children}
                </div>
            </ThemeProvider>
            <div className={b('controls')}>
                <div tabIndex={0} role="button" className={b('control')}>
                    <Icon data={codeIcon} size={16} />
                </div>
                <div
                    tabIndex={0}
                    role="button"
                    className={b('control')}
                    onClick={() => {
                        setTheme(theme === 'dark' ? 'light' : 'dark');
                    }}
                >
                    <Icon data={themeIcon} size={18} />
                </div>
            </div>
        </div>
    );
};
