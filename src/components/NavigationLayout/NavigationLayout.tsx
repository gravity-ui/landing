import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import React from 'react';

import arrowIcon from '../../assets/icons/arrow.svg';
import menuCloseIcon from '../../assets/icons/menu-close.svg';
import {CONTENT_WRAPPER_ID} from '../../constants';
import {block} from '../../utils';

import {Navigation} from './Navigation/Navigation';
import './NavigationLayout.scss';
import {Section, SubSection} from './types';

const b = block('navigation-layout');

export type NavigationLayoutProps = {
    sections: Section[];
    sectionId: string;
    subSectionId?: string;
    mobileTitle: string;
    searchPlaceholder?: string;
    emptySearchPlaceholder?: string;
    children?: React.ReactNode;
};

export const NavigationLayout: React.FC<NavigationLayoutProps> = ({
    sections,
    sectionId,
    subSectionId,
    mobileTitle,
    searchPlaceholder,
    emptySearchPlaceholder = 'Nothing found',
    children,
}) => {
    const [isOpenMobileNavigation, setIsOpenMobileNavigation] = React.useState(false);

    const section = sections.find((item) => item.id === sectionId);
    const subSection = section?.subSections?.find((item) => item.id === subSectionId);

    const clickOnLinkHandler = React.useCallback(() => {
        setIsOpenMobileNavigation(false);

        const content = document.getElementById(CONTENT_WRAPPER_ID);
        if (content) {
            content.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, []);

    if (!section) {
        return null;
    }

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
                                <span className={b('mobile-navigation-control-section')}>
                                    {section.title}
                                </span>
                                {subSection ? (
                                    <span className={b('mobile-navigation-control-sub-section')}>
                                        {' '}
                                        • {subSection.title}
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
                                    {mobileTitle}
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
                            <Navigation
                                sections={sections}
                                sectionId={sectionId}
                                subSectionId={subSectionId}
                                searchPlaceholder={searchPlaceholder}
                                emptySearchPlaceholder={emptySearchPlaceholder}
                                onClickOnLink={clickOnLinkHandler}
                            />
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

export type {Section, SubSection};
