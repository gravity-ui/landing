import {Theme} from '@gravity-ui/uikit';
import React, {useCallback, useState} from 'react';
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
}

const SimpleSlider: React.FC<SimpleSliderProps> = React.memo(
    ({items, reverseDirection = false}) => {
        const clonnedComponents = [...items, ...items, ...items, ...items, ...items, ...items];

        const handlePauseAutoplay = (swiper: SwiperClass) => {
            swiper.autoplay.resume();
        };

        return (
            <Swiper
                slidesPerView="auto"
                loop={true}
                spaceBetween={20}
                speed={reverseDirection ? 200000 : 10000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: true,
                    reverseDirection,
                }}
                modules={[Autoplay]}
                className="slider-simple"
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

    const switchTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    return (
        <InteractiveContextProvider value={{theme, color, switchTheme, changeColor: setColor}}>
            <div className={b(null, color)}>
                <div className={b('logo')}>
                    <span className={b('logo-image')} />
                </div>
                <div className={b('sliders')}>
                    <SimpleSlider items={firstSliderItems} />
                    <SimpleSlider items={secondSliderItems} />
                    <SimpleSlider items={thirdSliderItems} />
                </div>
                <div className={b('settings')}>
                    <Settings />
                </div>
            </div>
        </InteractiveContextProvider>
    );
};
