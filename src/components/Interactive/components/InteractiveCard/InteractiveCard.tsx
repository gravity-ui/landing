import {Theme, ThemeProvider, ToasterComponent, ToasterProvider} from '@gravity-ui/uikit';
import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {block} from '../../../../utils';
import {useInteractiveContext} from '../../InteractiveContext';

import './InteractiveCard.scss';

const b = block('interactive-card');

interface InteractiveCardProps {
    children: React.ReactNode;
    className?: string;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({children, className}) => {
    const {color, theme: globalTheme} = useInteractiveContext();
    const [localTheme, setLocalTheme] = useState<Theme>('dark');

    useEffect(() => {
        setLocalTheme(globalTheme);
    }, [globalTheme]);

    const flip = useCallback(() => {
        setLocalTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const isFlipped = useMemo(() => {
        return localTheme === 'light';
    }, [localTheme]);

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
            flip();
        },
        [flip],
    );

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (globalTheme !== localTheme) {
            timeoutId = setTimeout(() => {
                flip();
            }, 5000);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [localTheme, globalTheme]);

    return (
        <div className={b({flipped: isFlipped})} onClick={handleClick}>
            <div className={b('body')}>
                <div className={b('side', {front: true})}>
                    <ThemeProvider theme="dark" rootClassName={b('theme-wrapper', {color})} scoped>
                        <ToasterProvider>
                            <div className={b('card', className)}>
                                {children}
                                <div className={b('toaster')}>
                                    <ToasterComponent hasPortal={false} />
                                </div>
                            </div>
                        </ToasterProvider>
                    </ThemeProvider>
                </div>
                <div className={b('side', {back: true})}>
                    <ThemeProvider theme="light" rootClassName={b('theme-wrapper', {color})} scoped>
                        <ToasterProvider>
                            <div className={b('card', className)}>
                                {children}
                                <div className={b('toaster')}>
                                    <ToasterComponent hasPortal={false} />
                                </div>
                            </div>
                        </ToasterProvider>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};
