import {Animatable, AnimateBlock, Col, Grid, HTML, Row} from '@gravity-ui/page-constructor';
import {Button, ButtonProps, Icon} from '@gravity-ui/uikit';
import {SVGIconData} from '@gravity-ui/uikit/build/esm/components/Icon/types';
import React from 'react';
import TimeAgo from 'react-timeago';

import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './CustomHeader.scss';

const b = block('custom-header');

type CustomButton = ButtonProps & {
    text: string;
    icon?: SVGIconData;
};

type NewsItem = {
    date: string;
    content: string;
};

export type CustomHeaderProps = Animatable & {
    title: string;
    buttons?: CustomButton[];
    news?: {
        title?: string;
        items: NewsItem[];
    };
};

export type CustomHeaderModel = CustomHeaderProps & {
    type: CustomBlock.CustomHeader;
};

export const CustomHeader: React.FC<CustomHeaderProps> = ({
    animated,
    title,
    buttons = [],
    news,
}) => {
    const showNewsBlock = news && news.items && news.items.length > 0;

    return (
        <AnimateBlock className={b()} animate={animated}>
            <Grid>
                <Row>
                    <Col sizes={{all: 12, lg: showNewsBlock ? 8 : 12}}>
                        <h1 className={b('title')}>
                            <HTML>{title}</HTML>
                        </h1>
                        {buttons?.length > 0 ? (
                            <div className={b('buttons')}>
                                {buttons.map((button) => {
                                    const {icon, text, ...buttonProps} = button;
                                    return (
                                        <Button
                                            key={text}
                                            className={b('button')}
                                            size="xl"
                                            {...buttonProps}
                                        >
                                            {icon ? (
                                                <Icon
                                                    className={b('button-icon')}
                                                    data={icon}
                                                    size={16}
                                                />
                                            ) : null}
                                            {text}
                                        </Button>
                                    );
                                })}
                            </div>
                        ) : null}
                    </Col>
                    {showNewsBlock ? (
                        <Col sizes={{md: 12, lg: 4}}>
                            <div className={b('news')}>
                                {news.title ? (
                                    <div className={b('news-title')}>{news.title}</div>
                                ) : null}

                                {news.items.map((newsItem, index) =>
                                    newsItem.content ? (
                                        <div key={index} className={b('news-item')}>
                                            <div className={b('news-item-date')}>
                                                <TimeAgo date={newsItem.date} />
                                            </div>
                                            <div className={b('news-item-content')}>
                                                <HTML>{newsItem.content}</HTML>
                                            </div>
                                        </div>
                                    ) : null,
                                )}
                            </div>
                        </Col>
                    ) : null}
                </Row>
            </Grid>
        </AnimateBlock>
    );
};

export default CustomHeader;
