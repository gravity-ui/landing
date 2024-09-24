import {Animatable, AnimateBlock, Col, Grid, HTML, Row} from '@gravity-ui/page-constructor';
import {SVGIconData} from '@gravity-ui/uikit/build/esm/components/Icon/types';
import {Button, ButtonProps, Icon} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';
import ReactTimeAgo from 'react-time-ago';

import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './CustomHeader.scss';

const b = block('custom-header');

type CustomButton = ButtonProps & {
    text: string;
    icon?: SVGIconData;
};

type NewsItem = {
    title?: string;
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
    showCustomNewsBlock?: boolean;
};

export type CustomHeaderModel = CustomHeaderProps & {
    type: CustomBlock.CustomHeader;
};

interface CustomNewsBlockProps {
    news?: {
        title?: string;
        items: NewsItem[];
    };
}

const CustomNewsBlock: React.FC<CustomNewsBlockProps> = ({news}) => {
    return (
        <div className={b('custom-news')}>
            <a href="/libraries/markdown-editor/playground">
                <img
                    className={b('custom-news-banner')}
                    src="./static/images/markdown-editor/banner.png"
                    alt="markdown-editor"
                />
            </a>
            <div className={b('custom-news-text')}>
                <h2>{news?.items[0].title}</h2>
                <p>{news?.items[0].content}</p>
            </div>
        </div>
    );
};

export const CustomHeader: React.FC<CustomHeaderProps> = ({
    animated,
    title,
    buttons = [],
    news,
    showCustomNewsBlock = true,
}) => {
    const {i18n} = useTranslation();

    const showNewsBlock = !showCustomNewsBlock && news && news.items && news.items.length > 0;

    return (
        <AnimateBlock className={b()} animate={animated}>
            <Grid>
                <Row>
                    <Col sizes={{all: 12, lg: showCustomNewsBlock || showNewsBlock ? 8 : 12}}>
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
                    {showNewsBlock && (
                        <Col sizes={{md: 12, lg: 4}}>
                            <div className={b('news')}>
                                {news.title ? (
                                    <div className={b('news-title')}>{news.title}</div>
                                ) : null}

                                {news.items.map((newsItem, index) =>
                                    newsItem.content ? (
                                        <div key={index} className={b('news-item')}>
                                            <div className={b('news-item-date')}>
                                                <ReactTimeAgo
                                                    date={new Date(newsItem.date)}
                                                    locale={i18n.language}
                                                />
                                            </div>
                                            <div className={b('news-item-content')}>
                                                <HTML>{newsItem.content}</HTML>
                                            </div>
                                        </div>
                                    ) : null,
                                )}
                            </div>
                        </Col>
                    )}
                    {showCustomNewsBlock && (
                        <Col sizes={{md: 12, lg: 4}}>
                            <CustomNewsBlock news={news} />
                        </Col>
                    )}
                </Row>
            </Grid>
        </AnimateBlock>
    );
};

export default CustomHeader;
