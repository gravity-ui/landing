import {
    Animatable,
    AnimateBlock,
    BlockHeader,
    Button,
    Col,
    GridColumnSizesType,
    Row,
    ThemedImage,
    TitleProps,
} from '@gravity-ui/page-constructor';
import {useThemeValue} from '@gravity-ui/page-constructor/build/esm/context/theme/useThemeValue';
import Link from 'next/link';
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
    id?: string;
    title: string;
    description?: string;
    icon?: ThemedImage;
};

type CustomButton = {
    text: string;
    href: string;
};

export type CustomExtendedFeaturesProps = Animatable & {
    title?: TitleProps | string;
    description?: string;
    button?: CustomButton;
    items: Item[];
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
    button,
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
            <div className={b('header')}>
                <div className={b('header-title')}>
                    <BlockHeader title={title} description={description} />
                </div>
                {button && (
                    <div className={b('button-desktop')}>
                        <Link href={button.href}>
                            <a>
                                <Button size="xl" theme="outlined" text={button.text} />
                            </a>
                        </Link>
                    </div>
                )}
            </div>
            <div className={b('items')}>
                <Row>
                    {items.map(({id, title: itemTitle, description: itemDescription, icon}) => {
                        return (
                            <Col className={b('item')} key={id} sizes={colSizes}>
                                <FeatureItem
                                    id={id}
                                    title={itemTitle}
                                    description={itemDescription}
                                    icon={icon}
                                    contentStyle={contentStyle}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </div>
            {button && (
                <div className={b('button-mobile')}>
                    <Link href={button.href}>
                        <a>
                            <Button size="xl" theme="outlined" text={button.text} />
                        </a>
                    </Link>
                </div>
            )}
        </AnimateBlock>
    );
};

export default CustomExtendedFeatures;
