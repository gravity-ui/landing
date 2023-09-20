import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import React, {useCallback, useEffect, useState} from 'react';

import {block} from '../../../../utils';
import {useInteractiveContext} from '../../InteractiveContext';

import './InteractiveCard.scss';

const b = block('interactive-card');

interface InteractiveCardProps {
    children: React.ReactNode;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({children}) => {
    const {color, theme: globalTheme} = useInteractiveContext();
    const [localTheme, setLocalTheme] = useState<Theme>('dark');

    useEffect(() => {
        setLocalTheme(globalTheme);
    }, [globalTheme]);

    const flip = useCallback(() => {
        setLocalTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const isFlipped = localTheme === 'light';

    return (
        <div className={b({flipped: isFlipped})} onClick={flip}>
            <div className={b('body')}>
                <div className={b('side', {front: true})}>
                    <ThemeProvider theme="dark" rootClassName={b('theme-wrapper', {color})} scoped>
                        <div className={b('card')}>{children}</div>
                    </ThemeProvider>
                </div>
                <div className={b('side', {back: true})}>
                    <ThemeProvider theme="light" rootClassName={b('theme-wrapper', {color})} scoped>
                        <div className={b('card')}>{children}</div>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};
