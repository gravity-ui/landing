import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {useInteractiveContext} from '../../InteractiveContext';

import './InteractiveCard.scss';

const b = block('interactive-card');

interface InteractiveCardProps {
    className?: string;
    children?: React.ReactNode;
    renderContent?: () => React.ReactNode;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
    className,
    children,
    renderContent,
}) => {
    const {color, theme: globalTheme} = useInteractiveContext();
    const [localTheme, setLocalTheme] = React.useState<Theme>('dark');

    React.useEffect(() => {
        setLocalTheme(globalTheme);
    }, [globalTheme]);

    const flip = React.useCallback(() => {
        setLocalTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const isFlipped = React.useMemo(() => {
        return localTheme === 'light';
    }, [localTheme]);

    React.useEffect(() => {
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
        <div className={b({flipped: isFlipped})} onClick={flip}>
            <div className={b('body')}>
                <div className={b('side', {front: true})}>
                    {/*Workaround for missing theme class in ThemeProvider*/}
                    <ThemeProvider
                        theme="dark"
                        rootClassName={b('theme-wrapper', {color, theme: 'dark'})}
                        scoped
                    >
                        <div className={b('card', className)}>
                            {renderContent ? renderContent() : children}
                        </div>
                    </ThemeProvider>
                </div>
                <div className={b('side', {back: true})}>
                    {/*Workaround for missing theme class in ThemeProvider*/}
                    <ThemeProvider
                        theme="light"
                        rootClassName={b('theme-wrapper', {color, theme: 'light'})}
                        scoped
                    >
                        <div className={b('card', className)}>
                            {renderContent ? renderContent() : children}
                        </div>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};
