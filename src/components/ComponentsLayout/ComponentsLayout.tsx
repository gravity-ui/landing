import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import React from 'react';

import arrowIcon from '../../assets/icons/arrow.svg';
import menuCloseIcon from '../../assets/icons/menu-close.svg';
import {libComponents} from '../../content/components';
import {block} from '../../utils';

import './ComponentsLayout.scss';
import {Navigation} from './Navigation/Navigation';

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
    const [isOpenMobileNavigation, setIsOpenMobileNavigation] = React.useState(false);

    const curLib = libComponents.find((item) => item.id === libId);
    const curComponent = curLib?.components.find((item) => item.id === componentId);

    return (
        <div className={b()}>
            <Grid className={b('layout-grid')}>
                <Row>
                    <Col sizes={{all: 12, lg: 3}}>
                        <div
                            tabIndex={0}
                            role="button"
                            className={b('mobile-navigation-control')}
                            onClick={() => {
                                setIsOpenMobileNavigation(true);
                            }}
                        >
                            <div className={b('mobile-navigation-control-label')}>
                                <span className={b('mobile-navigation-control-library')}>
                                    {curLib?.title}
                                </span>
                                {curComponent ? (
                                    <span className={b('mobile-navigation-control-component')}>
                                        {' '}
                                        • {curComponent.title}
                                    </span>
                                ) : null}
                            </div>
                            <div className={b('mobile-navigation-control-arrow')}>
                                <Icon data={arrowIcon} width={10} height={6} />
                            </div>
                        </div>
                        <div className={b('navigation', {'mobile-open': isOpenMobileNavigation})}>
                            <div className={b('mobile-navigation-header')}>
                                <div className={b('mobile-navigation-header-title')}>
                                    Components
                                </div>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className={b('mobile-navigation-header-close')}
                                    onClick={() => {
                                        setIsOpenMobileNavigation(false);
                                    }}
                                >
                                    <Icon data={menuCloseIcon} width={16} />
                                </div>
                            </div>
                            <Navigation libId={libId} componentId={componentId} />
                        </div>
                    </Col>
                    <Col sizes={{all: 12, lg: 9}}>
                        <div className={b('content')}>{children}</div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};
