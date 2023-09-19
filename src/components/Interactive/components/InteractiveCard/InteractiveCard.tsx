import {ThemeProvider} from '@gravity-ui/uikit';
import React, {useCallback, useState} from 'react';

import {block} from '../../../../utils';

import './InteractiveCard.scss';

const b = block('interactive-card');

interface InteractiveCardProps {
    children: React.ReactNode;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({children}) => {
    const [isFlipped, setFlipped] = useState(false);

    const flip = useCallback(() => setFlipped((prev) => !prev), []);

    return (
        <div className={b({flipped: isFlipped})} onClick={flip}>
            <div className={b('body')}>
                <div className={b('side', {front: true})}>
                    <ThemeProvider theme="dark" rootClassName={b('theme-wrapper')} scoped>
                        <div className={b('card')}>{children}</div>
                    </ThemeProvider>
                </div>
                <div className={b('side', {back: true})}>
                    <ThemeProvider theme="light" rootClassName={b('theme-wrapper')} scoped>
                        <div className={b('card')}>{children}</div>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};
