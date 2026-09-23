import shuffle from 'lodash/shuffle';
import React, {useEffect, useMemo, useState} from 'react';
import {Tags} from 'src/components/Tags/Tags';
import {PreviewLayout} from 'src/components/UISamples';
import {block} from 'src/utils';

import {SampleComponent, useSampleComponents} from '../../samples';

import './UISamplesDesktop.scss';

const b = block('ui-samples-block-desktop');

export const UISamplesDesktop = () => {
    const sampleComponents = useSampleComponents();
    const [sampleOrder, setSampleOrder] = useState(() => Object.values(SampleComponent));
    const [selectedTab, setSelectedTab] = useState<SampleComponent>();

    useEffect(() => {
        // Shuffle after hydration so the server and initial client render match.
        setSampleOrder(shuffle(Object.values(SampleComponent)));
    }, []);

    const activeTab = selectedTab ?? sampleOrder[0];
    const tags = useMemo(
        () =>
            [...sampleComponents]
                .sort(
                    (left, right) =>
                        sampleOrder.indexOf(left.type) - sampleOrder.indexOf(right.type),
                )
                .map((sample) => ({
                    value: sample.type,
                    title: sample.title,
                })),
        [sampleComponents, sampleOrder],
    );
    const {blank, Component, title, type, breadCrumbsItems} =
        sampleComponents.find((sample) => sample.type === activeTab) ?? sampleComponents[0];

    return (
        <div className={b()}>
            <Tags wrap="nowrap" value={activeTab} onChange={setSelectedTab} items={tags} />
            {blank ? (
                <Component />
            ) : (
                <PreviewLayout id={type} title={title} breadCrumbsItems={breadCrumbsItems ?? []}>
                    {(props) => <Component {...props} />}
                </PreviewLayout>
            )}
        </div>
    );
};
