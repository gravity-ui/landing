import {HandPointUp} from '@gravity-ui/icons';
import {Icon} from '@gravity-ui/uikit';
import {useCallback, useEffect, useRef, useState} from 'react';

import {block} from '../../../utils';
import {useInteractiveContext} from '../InteractiveContext';
import {allColors} from '../constants';

import './ColorPicker.scss';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const b = block('color-picker');

export const ColorPicker = () => {
    const {changeColor, color: currentColor} = useInteractiveContext();
    const [animationsStatuses, setAnimationStatuses] = useState<boolean[]>(
        allColors.map(() => false),
    );
    const lastClickTime = useRef<number>(Date.now() / 1000);
    const tickRef = useRef<NodeJS.Timer>();
    const isAnimationStarted = useRef(false);

    const startAnimation = useCallback(async () => {
        let currentAnumationIndex = 0;

        isAnimationStarted.current = true;

        while (isAnimationStarted.current && currentAnumationIndex < animationsStatuses.length) {
            // eslint-disable-next-line
            setAnimationStatuses((prev) => {
                const newStat = [...prev];
                newStat[currentAnumationIndex] = true;
                return newStat;
            });

            await sleep(2300);
            changeColor(allColors[currentAnumationIndex]);
            await sleep(200);

            // eslint-disable-next-line
            setAnimationStatuses((prev) => {
                const newStat = [...prev];
                newStat[currentAnumationIndex] = false;
                return newStat;
            });

            currentAnumationIndex++;
            await sleep(2000);
        }

        isAnimationStarted.current = false;
    }, []);

    const tick = useCallback(() => {
        if (!isAnimationStarted.current && Date.now() / 1000 - lastClickTime.current >= 5) {
            isAnimationStarted.current = true;
            startAnimation();
        }
    }, [lastClickTime]);

    const handleDocumentClick = useCallback(() => {
        lastClickTime.current = Date.now() / 1000;

        // stop animations
        isAnimationStarted.current = false;
        setAnimationStatuses(() => allColors.map(() => false));
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        document.body.addEventListener('click', handleDocumentClick);

        tickRef.current = setInterval(tick, 1000);

        return () => {
            document.body.removeEventListener('click', handleDocumentClick);
            clearInterval(tickRef.current);
        };
    }, [handleDocumentClick]);

    return (
        <div className={b()}>
            {allColors.map((color, index) => (
                <div
                    key={color}
                    className={b('circle', {color, active: color === currentColor})}
                    onClick={() => changeColor(color)}
                >
                    <div className={b('circle-inner')} />
                    {animationsStatuses[index] && (
                        <span className={b('animated-hand')}>
                            <Icon data={HandPointUp} size={56} />
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};
