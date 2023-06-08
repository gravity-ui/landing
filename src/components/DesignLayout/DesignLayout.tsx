import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import React from 'react';

import arrowIcon from '../../assets/icons/arrow.svg';
import menuCloseIcon from '../../assets/icons/menu-close.svg';
import {sections} from '../../content/design';
import {block} from '../../utils';

import './DesignLayout.scss';
import {DesignNavigation} from './DesignNavigation/DesignNavigation';

const b = block('design-layout');

export type DesignLayoutProps = {
    sectionId: string;
    articleId?: string;
    children?: React.ReactNode;
};

export const DesignLayout: React.FC<DesignLayoutProps> = ({sectionId, articleId, children}) => {
    const [isOpenMobileNavigation, setIsOpenMobileNavigation] = React.useState(false);

    const curSection = sections.find((item) => item.id === sectionId);
    const curArticle = curSection?.articles.find((item) => item.id === articleId);

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
                                    {curSection?.title}
                                </span>
                                {curArticle ? (
                                    <span className={b('mobile-navigation-control-component')}>
                                        {' '}
                                        • {curArticle.title}
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
                            <DesignNavigation sectionId={sectionId} articleId={articleId} />
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
