import {Animatable, AnimateBlock, SliderBlock, useTheme} from '@gravity-ui/page-constructor';
import React from 'react';

import {useIsMobile} from '../../hooks/useIsMobile';
import {block, getLibById, getThemedValue} from '../../utils';
import {CustomBlock} from '../constants';

import './Libraries.scss';
import {LibraryPreview} from './components/LibraryPreview/LibraryPreview';

const b = block('libraries-block');

type Item = {
    id?: string;
    title: string;
    description?: string;
};

export type LibrariesProps = Animatable & {
    title?: string;
    items: Item[];
    backgroundColor?: string;
    backdropFilter?: string;
};

export type LibrariesModel = LibrariesProps & {
    type: CustomBlock.Libraries;
};

export const Libraries: React.FC<LibrariesProps> = ({
    title,
    items,
    animated,
    backgroundColor,
    backdropFilter,
}) => {
    const [theme] = useTheme();
    const isMobile = useIsMobile();

    const itemsInBlock = isMobile ? items.length : 2;
    const primaryItemHeight = isMobile ? 1 : 2;

    const contentStyle: Record<string, unknown> = {};

    if (backgroundColor) {
        contentStyle.backgroundColor = getThemedValue(backgroundColor, theme);
    }

    if (backdropFilter) {
        contentStyle.backdropFilter = getThemedValue(backdropFilter, theme);
    }

    const getSliderItems = () => {
        const components = [];
        let i = 0;
        while (i < items.length) {
            const blockComponents = [];
            let rowsTaken = 0;

            const end = Math.min(i + itemsInBlock, items.length);
            for (let j = i; j < end; j++) {
                let rowsToTake = 1;
                const item = items[j];
                const {id, title: itemTitle, description: itemDescription} = item;
                if (id) {
                    const {config: libConfig} = getLibById(id);
                    if (libConfig?.primary) {
                        rowsToTake = primaryItemHeight;
                    }
                }
                if (rowsTaken + rowsToTake > itemsInBlock) {
                    break;
                }
                blockComponents.push(
                    <LibraryPreview
                        key={itemTitle}
                        id={id}
                        title={itemTitle}
                        description={itemDescription}
                        contentStyle={contentStyle}
                    />,
                );
                rowsTaken += rowsToTake;
            }
            components.push(
                <div className={b('slider-item-wrapper')} key={`block-${items[i].title}`}>
                    {blockComponents}
                </div>,
            );
            i += blockComponents.length;
        }
        return components;
    };

    return (
        <AnimateBlock className={b()} animate={animated}>
            <SliderBlock
                lazyLoad
                blockClassName={b('slider')}
                title={title ? {text: title} : undefined}
                slidesToShow={{
                    xl: 3,
                    lg: 2,
                    md: 1,
                    sm: 1,
                }}
            >
                {getSliderItems()}
            </SliderBlock>
        </AnimateBlock>
    );
};

export default Libraries;
