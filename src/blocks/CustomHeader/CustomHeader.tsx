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
    banner?: BannerBlockProps;
};

export type CustomHeaderModel = CustomHeaderProps & {
    type: CustomBlock.CustomHeader;
};

interface BannerImage {
    href: string;
    src: string;
    alt: string;
    title: string;
}
interface BannerBlockProps {
    image: BannerImage;
    title?: string;
    content?: string;
}

const Banner: React.FC<BannerBlockProps> = ({image, title, content}) => {
    const img = (
        <img className={b('banner-image')} src={image.src} alt={image.alt} title={image.title} />
    );

    return (
        <div className={b('banner')}>
            {image.href ? <a href={image.href}>{img}</a> : img}
            <div className={b('banner-text')}>
                {title && <div className={b('banner-title')}>{title}</div>}
                {content && (
                    <div className={b('banner-content')}>
                        <HTML>{content}</HTML>
                    </div>
                )}
            </div>
        </div>
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

    const showNewsBlock = !banner && news && news.items && news.items.length > 0;

    return (
        <AnimateBlock className={b()} animate={animated}>
            <Grid>
                <Row>
                    <Col sizes={{all: 12, lg: banner || showNewsBlock ? 8 : 12}}>
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
                    {banner && (
                        <Col sizes={{md: 12, lg: 4}}>
                            <Banner {...banner} />
                        </Col>
                    )}
                </Row>
            </Grid>
        </AnimateBlock>
    );
};

export default CustomHeader;
