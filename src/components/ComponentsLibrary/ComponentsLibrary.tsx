import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import {libs} from '../../content/components';
import {block} from '../../utils';

import './ComponentsLibrary.scss';

const b = block('components-library');

type Props = {
    libId: string;
};

export const ComponentsLibrary: React.FC<Props> = ({libId}) => {
    const router = useRouter();
    const {tabId} = router.query;

    const lib = libs.find((item) => item.id === libId);

    if (!lib) return null;

    return (
        <div className={b()}>
            <div className={b('header', {primary: lib.primary})}>
                <h1 className={b('title')}>{lib.title}</h1>
                <div className={b('description')}>{lib.description}</div>
            </div>

            <div className={b('components')}>
                <Grid>
                    <Row>
                        {lib.components.map((component) => {
                            return (
                                <Col
                                    key={component.id}
                                    className={b('col')}
                                    sizes={{all: 12, lg: 6, xl: 4}}
                                >
                                    <Link
                                        href={`/components/${lib.id}/${component.id}${
                                            tabId ? `?tabId=${tabId}` : ''
                                        }`}
                                    >
                                        <a
                                            className={b('component', {
                                                primary: lib.primary,
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
