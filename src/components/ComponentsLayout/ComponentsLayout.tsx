import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {TextInput} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';

import {libComponents} from '../../content/components';
import {block} from '../../utils';

import './ComponentsLayout.scss';

const b = block('components-layout');

export type ComponentsLayoutProps = {
    libId: string;
    componentId?: string;
    children?: React.ReactNode;
};

export const ComponentsLayout: React.FC<ComponentsLayoutProps> = ({
    libId,
    componentId,
    children,
}) => {
    const [filterString, setFilterString] = React.useState('');

    return (
        <div className={b()}>
            <Grid className={b('header-grid')}>
                <Row>
                    <Col sizes={3}>
                        <TextInput
                            value={filterString}
                            onUpdate={setFilterString}
                            size="xl"
                            placeholder="Search by component name"
                        />

                        <div className={b('navigation')}>
                            {libComponents.map((lib) => {
                                const overviewUrl = `/components/${lib.id}`;

                                return (
                                    <div key={lib.id} className={b('library')}>
                                        <div className={b('library-title')}>{lib.title}</div>
                                        <div className={b('library-components')}>
                                            <Link key="__overview" href={overviewUrl}>
                                                <a
                                                    className={b('component', {
                                                        active:
                                                            libId === lib.id &&
                                                            componentId === undefined,
                                                    })}
                                                >
                                                    Overview
                                                </a>
                                            </Link>
                                            {lib.components.map((component) => {
                                                const componentUrl = `${overviewUrl}/${component.id}`;

                                                return (
                                                    <Link key={component.id} href={componentUrl}>
                                                        <a
                                                            className={b('component', {
                                                                active:
                                                                    libId === lib.id &&
                                                                    componentId === component.id,
                                                            })}
                                                        >
                                                            {component.title}
                                                        </a>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                    <Col sizes={9}>{children}</Col>
                </Row>
            </Grid>
        </div>
    );
};
