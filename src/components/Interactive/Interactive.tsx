import React from 'react';
import Slider, {Settings} from 'react-slick';

import {block} from '../../utils';

import './Interactive.scss';
import {firstSliderItems} from './constants';

const b = block('interactive');

export default function SimpleSlider() {
    const settings: Settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // for infinite
        slidesToScroll: 1,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 2000, // TODO make a smooth transition
        className: b('slider'),
    };

    return (
        <Slider {...settings}>
            {firstSliderItems.map((Comp, index) => (
                <Comp key={index} />
            ))}
        </Slider>
    );
}

export const Interactive = () => {
    return (
        <div className={b()}>
            <div className={b('logo')}>
                <span className={b('logo-image')} />
            </div>
            <div className={b('sliders')}>
                <SimpleSlider />
                <SimpleSlider />
                <SimpleSlider />
            </div>
        </div>
    );
};
