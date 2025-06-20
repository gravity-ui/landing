import {HTML, Image, ThemedImage, useTheme} from '@gravity-ui/page-constructor';
import React from 'react';

import {block, getMediaImage, getThemedValue} from '../../../../utils';

import './FeatureItem.scss';

const b = block('custom-extended-features-feature-item');

export type FeatureItemProps = {
    id?: string;
    title: string;
    description?: string;
    icon?: ThemedImage;
    contentStyle: Record<string, unknown>;
};

export const FeatureItem: React.FC<FeatureItemProps> = ({
    title,
    description,
    icon,
    contentStyle,
}) => {
    const [theme] = useTheme();

    const iconThemed = icon && getThemedValue(icon, theme);
    const iconData = iconThemed && getMediaImage(iconThemed);

    return (
        <div className={b()}>
            <div className={b('content')} style={contentStyle}>
                {iconData && <Image {...iconData} className={b('icon')} />}

                <div className={b('header')}>
                    {title ? (
                        <h5 className={b('title')}>
                            <HTML>{title}</HTML>
                        </h5>
                    ) : null}
                </div>

                <div className={b('text')}>{description}</div>
            </div>
        </div>
    );
};
