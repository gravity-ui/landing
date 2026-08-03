import {Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../utils';

import './LoadingText.scss';

const b = block('loading-text');

function useLoadingText(active: boolean, texts: string[]) {
    const [index, setIndex] = React.useState(0);
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        if (!active) return;

        setIndex(Math.floor(Math.random() * texts.length));
        setVisible(true);

        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex(Math.floor(Math.random() * texts.length));
                setVisible(true);
            }, 300);
        }, 2000);

        return () => clearInterval(interval);
    }, [active, texts]);

    return {text: texts[index] ?? '', visible};
}

interface LoadingTextProps {
    active: boolean;
    texts: string[];
}

export const LoadingText: React.FC<LoadingTextProps> = ({active, texts}) => {
    const {text, visible} = useLoadingText(active, texts);

    return (
        <Text className={b({visible})} variant="body-2" color="secondary">
            {text}
            <span className={b('dots')} />
        </Text>
    );
};
