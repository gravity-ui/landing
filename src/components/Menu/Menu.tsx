import React from 'react';
import {Grid, Row, Col, Link} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import linkArrowIcon from '../../assets/icons/link-arrow.svg';
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

export const Menu: React.FC<MenuProps> = ({items}) => (
    <Grid className={b()}>
        <Row>
            <Col sizes={{sm: 12}}>
                <div className={b('wrapper')}>
                    <div className={b('logo')}>GravityUI</div>
                    <nav className={b('list')}>
                        {items.map((item) => (
                            <div className={b('list-item')}>
                                <Link className={b('link')} url={item.url}>
                                    <span>{item.title}</span>
                                    <Icon
                                        className={b('link-icon')}
                                        data={linkArrowIcon}
                                        size={LINK_ICON_SIZE}
                                    />
                                </Link>
                            </div>
                        ))}
                    </nav>
                </div>
            </Col>
        </Row>
    </Grid>
);
