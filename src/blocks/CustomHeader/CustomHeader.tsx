import {ChevronRight} from '@gravity-ui/icons';
import {Animatable, AnimateBlock, Col, Grid, HTML, Row} from '@gravity-ui/page-constructor';
import {Button, ButtonProps, Icon} from '@gravity-ui/uikit';
import {SVGIconData} from '@gravity-ui/uikit/build/esm/components/Icon/types';
import {useTranslation} from 'next-i18next';
import React from 'react';
import ReactTimeAgo from 'react-time-ago';

import {Link} from '../../components/Link';
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
    banner?: BannerBlockProps;
};

export type CustomHeaderModel = CustomHeaderProps & {
    type: CustomBlock.CustomHeader;
};

interface BannerBlockProps {
    content: string;
    href?: string;
}

const Banner: React.FC<BannerBlockProps> = ({content, href}) => {
    return (
        <Link className={b('banner')} href={href ?? ''}>
            <span className={b('banner-content')}>{content}</span>
            {href && <ChevronRight className={b('banner-icon')} />}
        </Link>
    );
};

export const CustomHeader: React.FC<CustomHeaderProps> = ({
    animated,
    title,
    buttons = [],
    news,
    banner,
}) => {
    const {i18n} = useTranslation();

    const showNewsBlock = news && news.items && news.items.length > 0;
    const showBannerBlock = banner?.content;
    const hasExtra = Boolean(showNewsBlock) || Boolean(showBannerBlock);

    return (
        <AnimateBlock className={b()} animate={animated}>
            <Grid>
                <Row>
                    <Col sizes={{all: 12, lg: hasExtra ? 8 : 12}}>
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
                    {hasExtra && (
                        <Col className={b('extra')} sizes={{md: 12, lg: 4}}>
                            {showBannerBlock && <Banner {...banner} />}
                            {showNewsBlock && (
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
                            )}
                        </Col>
                    )}
                </Row>
            </Grid>
        </AnimateBlock>
    );
};

export default CustomHeader;
