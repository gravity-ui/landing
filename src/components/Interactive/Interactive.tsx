import {Theme} from '@gravity-ui/uikit';
import React, {useState} from 'react';
import Slider, {Settings} from 'react-slick';

import {block} from '../../utils';

import {ColorPicker} from './ColorPicker';
import './Interactive.scss';
import {InteractiveContextProvider} from './InteractiveContext';
import {ThemeSwitcher} from './ThemeSwitcher';
import {ColorTheme, firstSliderItems, secondSliderItems, thirdSliderItems} from './constants';

const b = block('interactive');

interface SimpleSliderProps {
    items: React.FC[];
    slidesToScroll?: number;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({items, slidesToScroll = 3}) => {
    const settings: Settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 20000,
        slidesToShow: 1, // for infinite
        slidesToScroll,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 0, // TODO make a smooth transition
        cssEase: 'linear',
        className: b('slider'),
        pauseOnFocus: true,
        pauseOnHover: true,
    };

    return (
        <Slider {...settings}>
            {items.map((Comp, index) => (
                <Comp key={index} />
            ))}
        </Slider>
    );
};

export const Interactive = () => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [color, setColor] = useState<ColorTheme>(ColorTheme.Yellow);

    return (
        <InteractiveContextProvider
            value={{theme, color, changeTheme: setTheme, changeColor: setColor}}
        >
            <div className={b()}>
                <div className={b('logo')}>
                    <span className={b('logo-image')} />
                </div>
                <div className={b('sliders')}>
                    <SimpleSlider items={firstSliderItems} />
                    <SimpleSlider items={secondSliderItems} slidesToScroll={-1} />
                    <SimpleSlider items={thirdSliderItems} />
                </div>
                <div className={b('settings')}>
                    <ColorPicker />
                    <ThemeSwitcher className={b('theme-switch')} />
                </div>
            </div>
        </InteractiveContextProvider>
    );
};
