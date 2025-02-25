import {Col, Grid, GridProps, Row} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import React from 'react';

import linkArrowIcon from '../../assets/icons/link-arrow.svg';
import {footer} from '../../content/footer';
import {socialLinks} from '../../content/social-links';
import {block} from '../../utils';

import './Footer.scss';

const b = block('footer');

export const Footer: React.FC<Pick<GridProps, 'className' | 'containerClass'>> = ({
    className,
    containerClass,
}) => (
    <Grid className={className} containerClass={containerClass}>
        <Row>
            <Col sizes={{sm: 12}}>
                <footer className={b()}>
                    <div className={b('menu')}>
                        {socialLinks.map((item) => (
                            <a
                                key={item.title}
                                className={b('menu-link')}
                                href={item.url}
                                target="_blank"
                            >
                                <Icon className={b('menu-link-icon')} data={item.icon} size={16} />
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
                    <div className={b('text')}>{footer.text}</div>
                </footer>
            </Col>
        </Row>
    </Grid>
);
