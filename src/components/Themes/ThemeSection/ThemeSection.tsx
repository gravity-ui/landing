import React from 'react';

import {block} from '../../../utils';
import {ThemeSectionType} from '../types';

import './ThemeSection.scss';

export interface ThemeSectionProps {
    sectionType: ThemeSectionType;
}

const b = block('theme-section');

//TODO: need to create section logic
const config = {
    [ThemeSectionType.Colors]: {
        Component: () => <span>color</span>,
    },
    [ThemeSectionType.Typography]: {
        Component: () => <span>Typography</span>,
    },
    [ThemeSectionType.BorderRadius]: {
        Component: () => <span>BorderRadius</span>,
    },
    [ThemeSectionType.Preview]: {
        Component: () => <span>Preview</span>,
    },
};

const useSectionConfig = (sectionType: ThemeSectionType) => {
    return config[sectionType];
};

export const ThemeSection = ({sectionType}: ThemeSectionProps) => {
    const {Component} = useSectionConfig(sectionType);
    return (
        <div className={b()}>
            <Component />
        </div>
    );
};
