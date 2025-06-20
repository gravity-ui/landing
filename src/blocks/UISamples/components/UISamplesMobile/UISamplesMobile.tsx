import {Flex} from '@gravity-ui/uikit';
import React from 'react';
import {block} from 'src/utils';

import {useSampleComponents} from '../../samples';

import './UISamplesMobile.scss';

const b = block('ui-samples-mobile');

type UISampleCardProps = {
    imageSrc: string;
};

const UISampleCard: React.FC<UISampleCardProps> = ({imageSrc}) => {
    return <img className={b('card')} src={imageSrc} loading="lazy" />;
};

export const UISamplesMobile: React.FC = () => {
    const samples = useSampleComponents();

    return (
        <Flex direction="column" gap={4} className={b()}>
            {samples.map(({type, imagePreviewSrc}) => (
                <UISampleCard key={type} imageSrc={imagePreviewSrc} />
            ))}
        </Flex>
    );
};
