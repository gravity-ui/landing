import {Flex} from '@gravity-ui/uikit';
import React, {useMemo, useState} from 'react';
import {Tags} from 'src/components/Tags/Tags';
import {PreviewLayout} from 'src/components/UISamples';
import {block} from 'src/utils';

import {SampleComponent, useSampleComponents} from '../../samples';

import './UISamplesDesktop.scss';

const b = block('ui-samples-block-desktop');

function useSampleTags() {
    const sampleComponents = useSampleComponents();
    return useMemo(
        () =>
            sampleComponents.map((sample) => ({
                value: sample.type,
                title: sample.title,
            })),
        [sampleComponents],
    );
}

function useSampleComponent(activeTab: SampleComponent) {
    const sampleComponents = useSampleComponents();
    return useMemo(
        () => sampleComponents.find((sample) => sample.type === activeTab) ?? sampleComponents[0],
        [activeTab],
    );
}

export const UISamplesDesktop = () => {
    const [activeTab, setActiveTab] = useState<SampleComponent>(SampleComponent.Dashboard);
    const tags = useSampleTags();
    const {blank, Component, title, type, breadCrumbsItems} = useSampleComponent(activeTab);

    return (
        <Flex direction="column" gap={8} className={b()}>
            <Tags wrap="nowrap" value={activeTab} onChange={setActiveTab} items={tags} />
            {blank ? (
                <Component />
            ) : (
                <PreviewLayout id={type} title={title} breadCrumbsItems={breadCrumbsItems ?? []}>
                    {(props) => <Component {...props} />}
                </PreviewLayout>
            )}
        </Flex>
    );
};
