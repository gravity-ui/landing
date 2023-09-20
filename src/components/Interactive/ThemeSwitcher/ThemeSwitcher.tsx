import {Moon, Sun} from '@gravity-ui/icons';
import {Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../utils';
import {useInteractiveContext} from '../InteractiveContext';

import './ThemeSwitcher.scss';

const b = block('theme-switcher');

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, changeTheme} = useInteractiveContext();

    const switchTheme = React.useCallback(() => {
        changeTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme, changeTheme]);

    return (
        <div className={b(null, className)} onClick={switchTheme}>
            <Icon data={theme === 'dark' ? Moon : Sun} size={32} />
        </div>
    );
};
