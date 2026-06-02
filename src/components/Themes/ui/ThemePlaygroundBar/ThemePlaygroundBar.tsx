import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {Button, Text} from '@gravity-ui/uikit';
import React from 'react';

import galleryBgDesktopPng from '../../../../assets/themes/gallery-bg-desktop.png';
import galleryBgDesktopWebp from '../../../../assets/themes/gallery-bg-desktop.webp';
import galleryBgMobilePng from '../../../../assets/themes/gallery-bg-mobile.png';
import galleryBgTabletPng from '../../../../assets/themes/gallery-bg-tablet.png';
import galleryBgTabletWebp from '../../../../assets/themes/gallery-bg-tablet.webp';
import {useWindowBreakpoint} from '../../../../hooks/useWindowBreakpoint';
import {block} from '../../../../utils';
import {BRAND_COLORS_PRESETS, type BrandPreset} from '../../lib/constants';

import './ThemePlaygroundBar.scss';

const b = block('theme-playground-bar');

interface ThemePlaygroundBarProps {
    activePresetIndex?: number | null;
    onSelectPreset?: (preset: BrandPreset, index: number) => void;
    onOpenGallery?: () => void;
    className?: string;
    firstSwatchRef?: React.Ref<HTMLButtonElement>;
}

export const ThemePlaygroundBar: React.FC<ThemePlaygroundBarProps> = ({
    activePresetIndex = null,
    onSelectPreset,
    onOpenGallery,
    className,
    firstSwatchRef,
}) => {
    const breakpoint = useWindowBreakpoint();
    const isDesktop = breakpoint >= BREAKPOINTS.xl;
    const isMobile = breakpoint < BREAKPOINTS.sm;
    // Mobile source ships PNG only — WebP came out larger than the PNG for
    // that asset so the variant was dropped during compression.
    const webp = isDesktop ? galleryBgDesktopWebp : isMobile ? null : galleryBgTabletWebp;
    const png = isDesktop
        ? galleryBgDesktopPng
        : isMobile
        ? galleryBgMobilePng
        : galleryBgTabletPng;

    return (
        <div className={b(null, className)}>
            <picture className={b('background')} aria-hidden="true">
                {webp && <source srcSet={webp.src} type="image/webp" />}
                <img className={b('background-img')} src={png.src} alt="" />
            </picture>
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
                                    ref={i === 0 ? firstSwatchRef : undefined}
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
