import {
    Animatable,
    AnimateBlock,
    BlockHeader,
    Col,
    GridColumnSizesType,
    Row,
    ThemedImage,
    TitleProps,
} from '@gravity-ui/page-constructor';
import {useThemeValue} from '@gravity-ui/page-constructor/build/esm/context/theme/useThemeValue';
import React from 'react';

import {block, getThemedValue} from '../../utils';
import {CustomBlock} from '../constants';

import './CustomExtendedFeatures.scss';
import {FeatureItem} from './components/FeatureItem/FeatureItem';

const b = block('custom-extended-features');

const DEFAULT_SIZES = {
    all: 12,
    sm: 6,
    md: 4,
};

type Item = {
    title?: string;
    text: string;
    icon?: ThemedImage;
    githubId?: string;
    npmId?: string;
    storybookUrl?: string;
};

export type CustomExtendedFeaturesProps = Animatable & {
    items: Item[];
    title?: TitleProps | string;
    description?: string;
    colSizes?: GridColumnSizesType;
    backgroundColor?: string;
    backdropFilter?: string;
};

export type CustomExtendedFeaturesModel = CustomExtendedFeaturesProps & {
    type: CustomBlock.CustomExtendedFeatures;
};

export const CustomExtendedFeatures = ({
    title,
    description,
    items,
    colSizes = DEFAULT_SIZES,
    animated,
    backgroundColor,
    backdropFilter,
}: CustomExtendedFeaturesProps) => {
    const theme = useThemeValue();

    const contentStyle: Record<string, unknown> = {};

    if (backgroundColor) {
        contentStyle.backgroundColor = getThemedValue(backgroundColor, theme);
    }

    if (backdropFilter) {
        contentStyle.backdropFilter = getThemedValue(backdropFilter, theme);
    }

    return (
        <AnimateBlock className={b()} animate={animated}>
            <BlockHeader title={title} description={description} className={b('header')} />
            <div className={b('items')}>
                <Row>
                    {items.map(({title: itemTitle, text, icon, githubId, npmId, storybookUrl}) => {
                        return (
                            <Col className={b('item')} key={text || itemTitle} sizes={colSizes}>
                                <FeatureItem
                                    title={itemTitle}
                                    text={text}
                                    icon={icon}
                                    contentStyle={contentStyle}
                                    githubId={githubId}
                                    npmId={npmId}
                                    storybookUrl={storybookUrl}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </AnimateBlock>
    );
};

export default CustomExtendedFeatures;
