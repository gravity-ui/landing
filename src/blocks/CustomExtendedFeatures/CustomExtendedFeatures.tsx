import {
    Animatable,
    AnimateBlock,
    Button,
    Col,
    GridColumnSizesType,
    HTML,
    Row,
    ThemedImage,
    useTheme,
} from '@gravity-ui/page-constructor';
import React from 'react';

import {Link} from '../../components/Link';
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
    title?: string;
    button?: CustomButton;
    items: Item[];
    colSizes?: GridColumnSizesType;
    backgroundColor?: string;
    backdropFilter?: string;
};

export type CustomExtendedFeaturesModel = CustomExtendedFeaturesProps & {
    type: CustomBlock.CustomExtendedFeatures;
};

export const CustomExtendedFeatures: React.FC<CustomExtendedFeaturesProps> = ({
    title,
    button,
    items,
    colSizes = DEFAULT_SIZES,
    animated,
    backgroundColor,
    backdropFilter,
}) => {
    const [theme] = useTheme();

    const contentStyle: Record<string, unknown> = {};

    if (backgroundColor) {
        contentStyle.backgroundColor = getThemedValue(backgroundColor, theme);
    }

    if (backdropFilter) {
        contentStyle.backdropFilter = getThemedValue(backdropFilter, theme);
    }

    return (
        <AnimateBlock className={b()} animate={animated}>
            {Boolean(title) && (
                <div className={b('header')}>
                    <h2 className={b('header-title')}>
                        <HTML>{title}</HTML>
                    </h2>
                    {button && (
                        <div className={b('button-desktop')}>
                            <Link href={button.href} passHref legacyBehavior>
                                <Button size="xl" theme="outlined" text={button.text} />
                            </Link>
                        </div>
                    )}
                </div>
            )}
            <div className={b('items')}>
                <Row>
                    {items.map(({id, title: itemTitle, description: itemDescription, icon}) => {
                        return (
                            <Col className={b('item')} key={id ?? itemTitle} sizes={colSizes}>
                                <FeatureItem
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
                    <Link href={button.href} passHref legacyBehavior>
                        <Button size="xl" theme="outlined" text={button.text} />
                    </Link>
                </div>
            )}
        </AnimateBlock>
    );
};

export default CustomExtendedFeatures;
