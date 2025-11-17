import {Animatable, AnimateBlock, YFMWrapper} from '@gravity-ui/page-constructor';
import {Button} from '@gravity-ui/uikit';
import React from 'react';

import {Contributor} from '../../api';
import {ExpandableContributorList} from '../../components/ExpandableContributorList';
import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './Contributors.scss';

const b = block('contributors');

type TelegramLink = {
    title: string;
    href: string;
};

export type ContributorsProps = Animatable & {
    title: string;
    link: TelegramLink;
    contributors: Contributor[];
};

export type ContributorsModel = ContributorsProps & {
    type: CustomBlock.Contributors;
};

export const ContributorsBlock: React.FC<ContributorsProps> = ({
    animated,
    title,
    link,
    contributors,
}) => {
    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('header-wrapper')}>
                <h2 className={b('header-title')}>
                    <YFMWrapper content={title} modifiers={{constructor: true}} />
                </h2>
                <div className={b('header-count')}>{contributors.length}</div>
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
                <ExpandableContributorList contributors={contributors} />
            </section>
        </AnimateBlock>
    );
};
