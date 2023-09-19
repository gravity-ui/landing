import React from 'react';
import Slider, {Settings} from 'react-slick';

import {block} from '../../utils';

import './Interactive.scss';
import {FirstSliderItems} from './components/FirstSliderItems';

const b = block('interactive');

export default function SimpleSlider() {
    const settings: Settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        // autoplay: true,
        autoplaySpeed: 2000, // TODO make a smooth transition
    };

    return <Slider {...settings}>{FirstSliderItems}</Slider>;
}

export const Interactive = () => {
    return (
        <div className={b()}>
            <SimpleSlider />
        </div>
    );
};
