import {HandPointUp, Moon, Sun} from '@gravity-ui/icons';
import {Icon} from '@gravity-ui/uikit';
import {useCallback, useEffect, useRef, useState} from 'react';

import {block} from '../../../utils';
import {useInteractiveContext} from '../InteractiveContext';
import {allColors} from '../constants';

import './Settings.scss';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const b = block('settings');

const defaultAnimationStatuses = [...allColors.map(() => false), false];

const getCurrentTime = () => Date.now() / 1000;

const INACTIVE_TIME = 30;
const ANIMATION_TIME = 2300;

export const Settings = () => {
    const {changeColor, color: currentColor, switchTheme, theme} = useInteractiveContext();
    const [animationsStatuses, setAnimationStatuses] =
        useState<boolean[]>(defaultAnimationStatuses);
    const lastClickTime = useRef<number>(getCurrentTime());
    const tickRef = useRef<NodeJS.Timer>();
    const isAnimationStarted = useRef(false);

    const isHandDisabled = useRef(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        // @ts-ignore
        window.disableHand = () => {
            isHandDisabled.current = true;
        };
        // @ts-ignore
        window.enableHand = () => {
            isHandDisabled.current = false;
        };
    }, []);

    const enableHandAtIndex = (index: number) =>
        setAnimationStatuses((prev) => {
            const newStat = [...prev];
            newStat[index] = true;
            return newStat;
        });

    const disableHandAtIndex = (index: number) =>
        setAnimationStatuses((prev) => {
            const newStat = [...prev];
            newStat[index] = false;
            return newStat;
        });

    const startAnimation = useCallback(async () => {
        if (isHandDisabled.current) {
            return;
        }

        let currentColorIndex = 0;

        isAnimationStarted.current = true;

        while (isAnimationStarted.current && currentColorIndex < allColors.length) {
            // Включаем анимацию для цвета
            enableHandAtIndex(currentColorIndex);

            await sleep(ANIMATION_TIME);
            if (!isAnimationStarted.current) {
                break;
            }
            // Анимация закончилась, включаем цвет
            changeColor(allColors[currentColorIndex]);

            // Выжидаем немного перед тем как убрать руку
            await sleep(200);

            // Убираем руку с цвета
            disableHandAtIndex(currentColorIndex);
            currentColorIndex++;

            await sleep(2000);

            if (!isAnimationStarted.current) {
                break;
            }
            // Показываем руку на переключателе темы
            enableHandAtIndex(4);
            await sleep(ANIMATION_TIME);

            if (!isAnimationStarted.current) {
                break;
            }
            // Анимация закончилась, меняем тему
            switchTheme();
            // Выжидаем немного перед тем как убрать руку
            await sleep(200);
            // Убираем руку с темы
            disableHandAtIndex(4);

            await sleep(2000);
        }

        isAnimationStarted.current = false;
    }, []);

    const tick = useCallback(() => {
        if (
            !isAnimationStarted.current &&
            getCurrentTime() - lastClickTime.current >= INACTIVE_TIME
        ) {
            startAnimation();
        }
    }, [lastClickTime]);

    const handleDocumentClick = useCallback(() => {
        lastClickTime.current = getCurrentTime();

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
            <div className={b('theme-switcher')} onClick={switchTheme}>
                <Icon
                    className={b('theme-icon', {active: theme === 'dark'})}
                    data={Sun}
                    size={32}
                />
                <Icon
                    className={b('theme-icon', {active: theme === 'light'})}
                    data={Moon}
                    size={32}
                />
                {animationsStatuses[4] && (
                    <span className={b('animated-hand')}>
                        <Icon data={HandPointUp} size={56} />
                    </span>
                )}
            </div>
        </div>
    );
};
