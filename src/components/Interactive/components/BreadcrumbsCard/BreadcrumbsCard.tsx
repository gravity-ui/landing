import {Breadcrumbs, Flex} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {InteractiveCard} from '../InteractiveCard';

import './BreadcrumbsCard.scss';

const b = block('breadcrumbs-card');

const firstItems = ['Harder', 'Better'];
const secondItems = ['Harder', 'Better', 'Faster'];
const thirdItems = ['Harder', 'Better', 'Faster', 'Stronger'];

export const BreadcrumbsCard = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <InteractiveCard>
            <div className={b()}>
                <Flex className={b('wrapper')} direction="column" space={3} width={290}>
                    <Breadcrumbs showRoot>
                        {firstItems.map((item, index) => (
                            <Breadcrumbs.Item key={`${index}-${item}`}>{item}</Breadcrumbs.Item>
                        ))}
                    </Breadcrumbs>
                    <Breadcrumbs showRoot>
                        {secondItems.map((item, index) => (
                            <Breadcrumbs.Item key={`${index}-${item}`}>{item}</Breadcrumbs.Item>
                        ))}
                    </Breadcrumbs>
                    <Breadcrumbs showRoot>
                        {thirdItems.map((item, index) => (
                            <Breadcrumbs.Item key={`${index}-${item}`}>{item}</Breadcrumbs.Item>
                        ))}
                    </Breadcrumbs>
                </Flex>
            </div>
        </InteractiveCard>
    );
};
