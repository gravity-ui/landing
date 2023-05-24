import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import Link from 'next/link';
import React from 'react';

import {libComponents} from '../../content/components';
import {block, getLibById} from '../../utils';

import './LibraryComponents.scss';

const b = block('library-components');

type Props = {
    id: string;
};

export const LibraryComponents: React.FC<Props> = ({id}) => {
    const lib = getLibById(id);

    const libComponentsInfo = libComponents.find((item) => item.id === id);

    if (!libComponentsInfo) return null;

    return (
        <div className={b()}>
            <div className={b('header', {primary: lib.config.primary})}>
                <h1 className={b('title')}>{libComponentsInfo.title}</h1>
                <div className={b('description')}>{libComponentsInfo.description}</div>
            </div>

            <div className={b('components')}>
                <Grid>
                    <Row>
                        {libComponentsInfo.components.map((component) => {
                            return (
                                <Col
                                    key={component.id}
                                    className={b('col')}
                                    sizes={{all: 12, md: 6, lg: 4}}
                                >
                                    <Link
                                        href={`/components/${libComponentsInfo.id}/${component.id}`}
                                    >
                                        <a
                                            className={b('component', {
                                                primary: lib.config.primary,
                                            })}
                                        >
                                            <div className={b('component-image')} />
                                            <div className={b('component-title')}>
                                                {component.title}
                                            </div>
                                            <div className={b('component-description')}>
                                                {component.description}
                                            </div>
                                        </a>
                                    </Link>
                                </Col>
                            );
                        })}
                    </Row>
                </Grid>
            </div>
        </div>
    );
};
