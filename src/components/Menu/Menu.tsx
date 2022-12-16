import React from 'react';
import {Grid, Row, Col} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import logoIcon from '../../assets/icons/logo.svg';
import linkArrowIcon from '../../assets/icons/link-arrow.svg';
import menuOpenIcon from '../../assets/icons/menu-open.svg';
import menuCloseIcon from '../../assets/icons/menu-close.svg';
import {block} from '../../utils';
import './Menu.scss';

const b = block('menu');

const LINK_ICON_SIZE = 8;

type MenuItem = {
    title: string;
    url: string;
};

export type MenuProps = {
    items: MenuItem[];
};

export const Menu: React.FC<MenuProps> = ({items}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <div className={b()}>
            <Grid>
                <Row>
                    <Col sizes={{sm: 12}}>
                        <div className={b('wrapper')}>
                            <div className={b('logo')}>
                                <Icon data={logoIcon} className={b('logo-icon')} />
                            </div>

                            <nav className={b('desktop-menu')}>
                                {items.map((item) => (
                                    <div className={b('desktop-menu-item')}>
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

                            <nav className={b('mobile-menu')}>
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
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Grid>

            <div className={b('mobile-menu-items', {open: mobileMenuOpen})}>
                <Grid>
                    <Row>
                        <Col sizes={{sm: 12}}>
                            {items.map((item) => (
                                <div className={b('mobile-menu-item')}>
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
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
};
