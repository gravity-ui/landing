import {AnimateBlock, HTML} from '@gravity-ui/page-constructor';
import {Button} from '@gravity-ui/uikit';
import React from 'react';
import {LazyExpandableContributorsList} from 'src/components/ExpandableContributorList';

import {block} from '../../utils';

import './Contributors.scss';
import {ContributorsProps} from './types';

const b = block('contributors');

export const ContributorsBlock: React.FC<ContributorsProps> = ({animated, title, link}) => {
    const [contributorsCount, setContributorsCount] = React.useState('');

    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('header-wrapper')}>
                <h2 className={b('header-title')}>
                    <HTML>{title}</HTML>
                </h2>
                <div className={b('header-count')}>{contributorsCount}</div>
                <div>
                    <Button
                        size="xl"
                        pin="circle-circle"
                        view="outlined"
                        href={link.href}
                        target="_blank"
                    >
                        {link.title}
                    </Button>
                </div>
            </div>

            <section className={b('section')}>
                <LazyExpandableContributorsList
                    onLoad={(_, props) => {
                        setContributorsCount(String(props.contributors.length) || '0');
                    }}
                />
            </section>
        </AnimateBlock>
    );
};
