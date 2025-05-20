import * as Components from '@gravity-ui/components';
import * as DateComponents from '@gravity-ui/date-components';
import * as Navigation from '@gravity-ui/navigation';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import * as UIKit from '@gravity-ui/uikit';
import type {MDXComponents} from 'mdx/types';
import React from 'react';

import * as DateComponentsExamples from '../../content/components/date-components/examples/components';
import * as UIKitExamples from '../../content/components/uikit/examples/components';

import {ExampleBlock} from './ExampleBlock/ExampleBlock';

export const componentsAvailableInMDX: MDXComponents = {
    Grid,
    Row,
    Col,
    ExampleBlock,
    UIKitExamples,
    DateComponentsExamples,
    React: React as unknown as Record<string, MDXComponents>,
    UIKit: UIKit as unknown as Record<string, MDXComponents>,
    Components: Components as unknown as Record<string, MDXComponents>,
    DateComponents: DateComponents as unknown as Record<string, MDXComponents>,
    Navigation: Navigation as unknown as Record<string, MDXComponents>,
};
