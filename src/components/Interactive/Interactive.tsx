import {Theme} from '@gravity-ui/uikit';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';

import {block} from '../../utils';

import './Interactive.scss';
import {InteractiveContextProvider} from './InteractiveContext';
import {Settings} from './Settings';
import {ColorTheme, firstSliderItems, secondSliderItems, thirdSliderItems} from './constants';

const b = block('interactive');

interface SimpleSliderProps {
    items: React.FC[];
    reverseDirection?: boolean;
    autoplayDisabled?: boolean;
}

const SimpleSlider: React.FC<SimpleSliderProps> = React.memo(
    ({items, reverseDirection = false, autoplayDisabled}) => {
        const swiperInstance = useRef<SwiperClass>();
        const clonnedComponents = [...items, ...items, ...items, ...items, ...items, ...items];

        useEffect(() => {
            if (autoplayDisabled) {
                swiperInstance.current?.autoplay.stop();
            } else {
                swiperInstance.current?.autoplay.start();
            }
        }, [autoplayDisabled]);

        const handleInit = useCallback((swiper: SwiperClass) => {
            swiperInstance.current = swiper;
        }, []);

        const handlePauseAutoplay = useCallback((swiper: SwiperClass) => {
            swiper.autoplay.resume();
        }, []);

        return (
            <Swiper
                onInit={handleInit}
                slidesPerView="auto"
                loop={true}
                spaceBetween={20}
                speed={reverseDirection ? 200000 : 10000}
                allowTouchMove={false}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: true,
                    reverseDirection,
                }}
                modules={[Autoplay]}
                noSwipingClass="gravity-ui-landing-interactive-card"
                grabCursor={false}
                className={b('slider-simple', {autoplay: !autoplayDisabled})}
                onAutoplayPause={handlePauseAutoplay}
            >
                {clonnedComponents.map((Comp, index) => (
                    <SwiperSlide key={index}>
                        <Comp />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    },
);

export const Interactive = () => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [color, setColor] = useState<ColorTheme>(ColorTheme.Yellow);
    const [autoplayDisabled, setAutoplayDisabled] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        // prevent scroll page
        document.body.style.overflow = 'hidden';

        // @ts-ignore
        window.enableAutoplay = () => {
            setAutoplayDisabled(false);
        };
        // @ts-ignore
        window.disableAutoplay = () => {
            setAutoplayDisabled(true);
        };
    }, []);

    const switchTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const value = React.useMemo(() => {
        return {theme, color, switchTheme, changeColor: setColor};
    }, [theme, color, switchTheme, setColor]);

    return (
        <InteractiveContextProvider value={value}>
            <div className={b(null, color)}>
                <div className={b('logo')}>
                    <span className={b('logo-image')} />
                </div>
                <div className={b('sliders')}>
                    <SimpleSlider items={firstSliderItems} autoplayDisabled={autoplayDisabled} />
                    <SimpleSlider items={secondSliderItems} autoplayDisabled={autoplayDisabled} />
                    <SimpleSlider items={thirdSliderItems} autoplayDisabled={autoplayDisabled} />
                </div>
                <div className={b('settings')}>
                    <Settings />
                </div>
            </div>
        </InteractiveContextProvider>
    );
};
