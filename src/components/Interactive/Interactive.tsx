import {Theme} from '@gravity-ui/uikit';
import React from 'react';
import 'swiper/css';
import {Autoplay, EffectCreative} from 'swiper/modules';
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
        const swiperInstance = React.useRef<SwiperClass>();
        const clonnedComponents = [...items, ...items, ...items, ...items, ...items, ...items];

        React.useEffect(() => {
            if (autoplayDisabled) {
                swiperInstance.current?.autoplay.stop();
            } else {
                swiperInstance.current?.autoplay.start();
            }
        }, [autoplayDisabled]);

        const handleInit = React.useCallback((swiper: SwiperClass) => {
            swiperInstance.current = swiper;
        }, []);

        const handlePauseAutoplay = React.useCallback((swiper: SwiperClass) => {
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

const Title = () => (
    <div className={b('title-wrapper')}>
        <Swiper
            slidesPerView={1}
            loop={true}
            direction="vertical"
            className={b('title-slider')}
            spaceBetween={10}
            speed={700}
            allowTouchMove={false}
            autoplay={{
                delay: 4000,
                reverseDirection: true,
                disableOnInteraction: true,
            }}
            creativeEffect={{
                next: {
                    translate: [0, '110%', 0],
                    opacity: 0,
                },
                prev: {
                    translate: [0, '-170%', 0],
                    opacity: 0,
                },
            }}
            modules={[Autoplay, EffectCreative]}
            height={64}
            effect={'creative'}
            fadeEffect={{crossFade: true}}
        >
            <SwiperSlide>
                <span>Design system</span>
            </SwiperSlide>
            <SwiperSlide>
                <span>Components</span>
            </SwiperSlide>
            <SwiperSlide>
                <span>Libraries</span>
            </SwiperSlide>
        </Swiper>
    </div>
);

export const Interactive = () => {
    const [theme, setTheme] = React.useState<Theme>('dark');
    const [color, setColor] = React.useState<ColorTheme>(ColorTheme.Yellow);
    const [autoplayDisabled, setAutoplayDisabled] = React.useState(false);

    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    React.useEffect(() => {
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

    const switchTheme = React.useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const value = React.useMemo(() => {
        return {theme, color, switchTheme, changeColor: setColor};
    }, [theme, color, switchTheme, setColor]);

    if (!isClient) {
        return null;
    }

    return (
        <InteractiveContextProvider value={value}>
            <div className={b(null, color)}>
                <div className={b('header')}>
                    <span className={b('logo-image')} />
                    <Title />
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
