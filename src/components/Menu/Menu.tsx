import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';

import linkArrowIcon from '../../assets/icons/link-arrow.svg';
import logoIcon from '../../assets/icons/logo.svg';
import menuCloseIcon from '../../assets/icons/menu-close.svg';
import menuOpenIcon from '../../assets/icons/menu-open.svg';
import {menu} from '../../content/menu';
import {socialLinks} from '../../content/social-links';
import {block} from '../../utils';

import './Menu.scss';

const b = block('menu');

const LINK_ICON_SIZE = 8;

export const Menu: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <div className={b()}>
            <Grid>
                <Row>
                    <Col sizes={{sm: 12}}>
                        <div className={b('wrapper')}>
                            <div className={b('logo')}>
                                <Link href="/">
                                    <a>
                                        <Icon data={logoIcon} className={b('logo-icon')} />
                                    </a>
                                </Link>
                            </div>

                            <div className={b('desktop-menu')}>
                                <div className={b('desktop-menu-items')}>
                                    {menu.map((item) => (
                                        <div key={item.title} className={b('desktop-menu-item')}>
                                            <Link href={item.url}>
                                                <a className={b('link', {lg: true})}>
                                                    {item.title}
                                                </a>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <nav className={b('desktop-social-links')}>
                                {socialLinks.map((item) => (
                                    <div
                                        key={item.title}
                                        className={b('desktop-social-links-item')}
                                    >
                                        <a className={b('link')} href={item.url} target="_blank">
                                            <span>{item.title}</span>
                                            <Icon
                                                className={b('link-icon')}
                                                data={linkArrowIcon}
                                                size={LINK_ICON_SIZE}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </nav>

                            <div className={b('mobile-menu-button-wrapper')}>
                                <div
                                    className={b('mobile-menu-button')}
                                    onClick={() => {
                                        setMobileMenuOpen(!mobileMenuOpen);
                                    }}
                                >
                                    <Icon
                                        data={mobileMenuOpen ? menuCloseIcon : menuOpenIcon}
                                        size={16}
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>

            <div className={b('mobile-menu', {open: mobileMenuOpen})}>
                <Grid>
                    <Row>
                        <Col sizes={{sm: 12}}>
                            <div className={b('mobile-menu-items')}>
                                {menu.map((item) => (
                                    <div className={b('mobile-menu-item')} key={item.title}>
                                        <Link href={item.url} key={item.title}>
                                            <a className={b('link', {lg: true})}>{item.title}</a>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className={b('mobile-social-links')}>
                                {socialLinks.map((item) => (
                                    <div className={b('mobile-social-link')} key={item.title}>
                                        <a className={b('link')} href={item.url} target="_blank">
                                            <span>{item.title}</span>
                                            <Icon
                                                className={b('link-icon')}
                                                data={linkArrowIcon}
                                                size={LINK_ICON_SIZE}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
};
