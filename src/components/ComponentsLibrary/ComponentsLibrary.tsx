import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import soonLabelIcon from '../../assets/icons/soon-label.svg';
import {Lib} from '../../content/components/types';
import {block} from '../../utils';

import './ComponentsLibrary.scss';

const b = block('components-library');

type Props = {
    lib: Lib;
};

export const ComponentsLibrary: React.FC<Props> = ({lib}) => {
    const router = useRouter();
    const {tabId} = router.query;

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
                            const WrapperComponent = (component.isComingSoon
                                ? 'div'
                                : Link) as unknown as React.FC<{
                                className: string;
                                href?: string;
                                children: React.ReactNode;
                            }>;

                            const wrapperComponentProps = component.isComingSoon
                                ? {}
                                : {
                                      href: `/components/${lib.id}/${component.id}${
                                          tabId ? `?tabId=${tabId}` : ''
                                      }`,
                                  };

                            return (
                                <Col
                                    key={component.id}
                                    className={b('col')}
                                    sizes={{all: 12, lg: 6, xl: 4}}
                                >
                                    <WrapperComponent
                                        className={b('wrapper')}
                                        {...wrapperComponentProps}
                                    >
                                        <a
                                            className={b('component', {
                                                primary: lib.primary,
                                                soon: component.isComingSoon,
                                            })}
                                        >
                                            <div className={b('component-image')} />
                                            <div className={b('component-title')}>
                                                {component.title}
                                            </div>
                                            <div className={b('component-description')}>
                                                {component.description}
                                            </div>
                                            {component.isComingSoon ? (
                                                <div className={b('component-soon-label')}>
                                                    <Icon
                                                        data={soonLabelIcon}
                                                        width={46}
                                                        height={20}
                                                    />
                                                </div>
                                            ) : null}
                                        </a>
                                    </WrapperComponent>
                                </Col>
                            );
                        })}
                    </Row>
                </Grid>
            </div>
        </div>
    );
};
