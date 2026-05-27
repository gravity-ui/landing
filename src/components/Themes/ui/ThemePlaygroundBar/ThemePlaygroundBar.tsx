import {Button, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {BRAND_COLORS_PRESETS, type BrandPreset} from '../../lib/constants';

import './ThemePlaygroundBar.scss';

const b = block('theme-playground-bar');

interface ThemePlaygroundBarProps {
    activePresetIndex?: number | null;
    onSelectPreset?: (preset: BrandPreset, index: number) => void;
    onOpenGallery?: () => void;
    className?: string;
}

const DECO_SHAPE_NAMES = ['a', 'b', 'c', 'd', 'e'] as const;

const Decorations: React.FC<{side: 'left' | 'right'}> = ({side}) => (
    <div className={b('decorations', {side})} aria-hidden="true">
        {DECO_SHAPE_NAMES.map((name) => (
            <div key={name} className={b('deco', {n: name})}>
                <div className={b('deco-rotate')}>
                    <div className={b('deco-box', {n: name})}>
                        <div className={b('deco-img-wrap', {n: name})} />
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export const ThemePlaygroundBar: React.FC<ThemePlaygroundBarProps> = ({
    activePresetIndex = null,
    onSelectPreset,
    onOpenGallery,
    className,
}) => {
    return (
        <div className={b(null, className)}>
            <div className={b('background')} aria-hidden="true">
                <div className={b('main-image')}>
                    <img src="/themes/playground-bar/rectangle.png" alt="" />
                    <div className={b('main-image-tint')} />
                    <div className={b('main-image-gradient')} />
                </div>
                <Decorations side="right" />
                <Decorations side="left" />
            </div>
            <div className={b('content')}>
                <div className={b('text')}>
                    <Text variant="header-1" className={b('title')}>
                        Theme playground
                    </Text>
                    <Text variant="body-2" className={b('description')}>
                        Switch basic themes instantly here, and check out designer themes
                    </Text>
                </div>
                <div className={b('bottom-row')}>
                    <div className={b('swatches')}>
                        {BRAND_COLORS_PRESETS.map((preset, i) => {
                            const active = i === activePresetIndex;
                            return (
                                <button
                                    key={preset.brandColor}
                                    type="button"
                                    className={b('swatch', {active})}
                                    onClick={() => onSelectPreset?.(preset, i)}
                                    aria-label={`Apply brand preset ${preset.brandColor}`}
                                    aria-pressed={active}
                                >
                                    <span
                                        className={b('swatch-color')}
                                        style={{background: preset.brandColor}}
                                    />
                                </button>
                            );
                        })}
                    </div>
                    <Button view="outlined-contrast" size="l" onClick={onOpenGallery}>
                        Theme Gallery
                    </Button>
                </div>
            </div>
        </div>
    );
};
