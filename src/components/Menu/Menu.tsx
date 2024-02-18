import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import linkArrowIcon from '../../assets/icons/link-arrow.svg';
import menuCloseIcon from '../../assets/icons/menu-close.svg';
import menuOpenIcon from '../../assets/icons/menu-open.svg';
import soonLabelIcon from '../../assets/icons/soon-label.svg';
import {menu} from '../../content/menu';
import {socialLinks} from '../../content/social-links';
import {block} from '../../utils';

import './Menu.scss';

const b = block('menu');

const LINK_ICON_SIZE = 8;

export const Menu: React.FC = () => {
    const router = useRouter();

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <div className={b()}>
            <div className={b('wrapper', {open: mobileMenuOpen})}>
                <Link href="/" className={b('logo')}>
                    <span className={b('logo-image')} />
                </Link>

                <div className={b('desktop-menu')}>
                    <div className={b('desktop-menu-items')}>
                        {menu.map((item) => (
                            <div
                                key={item.title}
                                className={b('desktop-menu-item', {
                                    active: router.asPath.startsWith(item.url),
                                })}
                            >
                                {item.isComingSoon ? (
                                    <div
                                        className={b('link', {
                                            lg: true,
                                            disabled: true,
                                        })}
                                    >
                                        <div className={b('comming-soon')}>
                                            <div className={b('comming-soon-text')}>
                                                {item.title}
                                            </div>
                                            <div className={b('comming-soon-label')}>
                                                <Icon data={soonLabelIcon} width={46} height={20} />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={item.url} className={b('link', {lg: true})}>
                                        {item.title}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <nav className={b('desktop-social-links')}>
                    {socialLinks.map((item) => (
                        <div key={item.title} className={b('desktop-social-links-item')}>
                            <a
                                className={b('link', {social: true})}
                                href={item.url}
                                target="_blank"
                            >
                                <Icon data={item.icon} size={20} />
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
                        className={b('mobile-menu-button', {open: mobileMenuOpen})}
                        onClick={() => {
                            setMobileMenuOpen(!mobileMenuOpen);
                        }}
                    >
                        <Icon data={mobileMenuOpen ? menuCloseIcon : menuOpenIcon} size={16} />
                    </div>
                </div>
            </div>

            <div className={b('mobile-menu', {open: mobileMenuOpen})}>
                <Grid>
                    <Row>
                        <Col sizes={{sm: 12}}>
                            <div className={b('mobile-menu-items')}>
                                {menu.map((item) => (
                                    <div className={b('mobile-menu-item')} key={item.title}>
                                        {item.isComingSoon ? (
                                            <div className={b('link', {lg: true, disabled: true})}>
                                                <div className={b('comming-soon')}>
                                                    <div className={b('comming-soon-text')}>
                                                        {item.title}
                                                    </div>
                                                    <div className={b('comming-soon-label')}>
                                                        <Icon
                                                            data={soonLabelIcon}
                                                            width={46}
                                                            height={20}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.url}
                                                key={item.title}
                                                className={b('link', {lg: true})}
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className={b('mobile-social-links')}>
                                {socialLinks.map((item) => (
                                    <div className={b('mobile-social-link')} key={item.title}>
                                        <a
                                            className={b('link', {social: true})}
                                            href={item.url}
                                            target="_blank"
                                        >
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
