import * as Components from '@gravity-ui/components';
import * as DateComponents from '@gravity-ui/date-components';
import * as Navigation from '@gravity-ui/navigation';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import * as UIKit from '@gravity-ui/uikit';
import * as UIKit8 from '@gravity-ui/uikit-v8';
import type {MDXComponents, MDXContent} from 'mdx/types';
import React from 'react';

import * as DateComponentsExamples from '../../content/components/date-components/examples/components';
import * as UIKitExamples from '../../content/components/uikit/examples/components';

import {ExampleBlock} from './ExampleBlock/ExampleBlock';
import {Sandbox} from './Sandbox';

const UIKit8ExampleBlock = (props: React.ComponentProps<typeof ExampleBlock>) =>
    React.createElement(ExampleBlock, {...props, uikit8: true});
const UIKit8Sandbox = (props: React.ComponentProps<typeof Sandbox>) =>
    React.createElement(Sandbox, {...props, uikit8: true});

export const componentsAvailableInMDX: MDXComponents = {
    Grid,
    // TODO remove cast after update mdx to 3 major version
    Row: Row as MDXContent,
    Col: Col as MDXContent,
    ExampleBlock: ExampleBlock as MDXContent,
    Sandbox: Sandbox as MDXContent,
    UIKitExamples,
    DateComponentsExamples,
    React: React as unknown as Record<string, MDXComponents>,
    UIKit: UIKit as unknown as Record<string, MDXComponents>,
    Components: Components as unknown as Record<string, MDXComponents>,
    DateComponents: DateComponents as unknown as Record<string, MDXComponents>,
    Navigation: Navigation as unknown as Record<string, MDXComponents>,
};

export const uikit8ComponentsAvailableInMDX: MDXComponents = {
    ...componentsAvailableInMDX,
    ExampleBlock: UIKit8ExampleBlock as MDXContent,
    Sandbox: UIKit8Sandbox as MDXContent,
    UIKit: UIKit8 as unknown as Record<string, MDXComponents>,
};
