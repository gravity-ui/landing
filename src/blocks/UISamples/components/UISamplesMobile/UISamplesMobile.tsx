import Image, {type StaticImageData} from 'next/image';
import React from 'react';
import {block} from 'src/utils';

import {useSampleComponents} from '../../samples';

import './UISamplesMobile.scss';

const b = block('ui-samples-mobile');

type UISampleCardProps = {
    image: StaticImageData;
    alt: string;
};

const UISampleCard: React.FC<UISampleCardProps> = ({image, alt}) => {
    // next/image rather than a plain <img>: the source files are up to 2212px wide while the
    // cards render at roughly viewport width, so the originals wasted around 1 MB on mobile.
    // This resizes per device and serves WebP/AVIF.
    return <Image className={b('card')} src={image} alt={alt} sizes="100vw" loading="lazy" />;
};

export const UISamplesMobile: React.FC = () => {
    const samples = useSampleComponents();

    return (
        <div className={b()}>
            {samples.map(({type, imagePreview, title}) => (
                <UISampleCard key={type} image={imagePreview} alt={title} />
            ))}
        </div>
    );
};
