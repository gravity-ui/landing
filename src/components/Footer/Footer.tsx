import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import {SVGIconData} from '@gravity-ui/uikit/build/esm/components/Icon/types';
import React from 'react';

import linkArrowIcon from '../../assets/icons/link-arrow.svg';
import {block} from '../../utils';

import './Footer.scss';

const b = block('footer');

type MenuItem = {
    title: string;
    url: string;
    icon: SVGIconData;
};

export type FooterProps = {
    text: string;
    menu: MenuItem[];
};

export const Footer: React.FC<FooterProps> = ({text, menu}) => (
    <Grid>
        <Row>
            <Col sizes={{sm: 12}}>
                <footer className={b()}>
                    <div className={b('menu')}>
                        {menu.map((item) => (
                            <a
                                key={item.title}
                                className={b('menu-link')}
                                href={item.url}
                                target="_blank"
                            >
                                <Icon className={b('menu-link-icon')} data={item.icon} size={24} />
                                <div className={b('menu-link-text')}>
                                    <span>{item.title}</span>
                                    <Icon
                                        className={b('menu-link-arrow')}
                                        data={linkArrowIcon}
                                        size={8}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className={b('text')}>{text}</div>
                </footer>
            </Col>
        </Row>
    </Grid>
);
