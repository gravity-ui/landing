import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {libs} from '../../content/components';
import {Component} from '../../content/components/types';
import {Section} from '../../content/design/types';
import {block} from '../../utils';
import {Link} from '../Link';

import './DesignSection.scss';

const b = block('design-section');

type Props = {
    section: Section;
};

export const DesignSection: React.FC<Props> = ({section}) => {
    const {t} = useTranslation();

    if (section.id === 'components') {
        const componentsWithDesign = libs.reduce<(Component & {url: string})[]>((acc, lib) => {
            acc.push(
                ...lib.components
                    .filter((component) => Boolean(component.content?.design))
                    .map((component) => ({
                        ...component,
                        url: `/components/${lib.id}/${component.id}?tabId=design`,
                    })),
            );
            return acc;
        }, []);

        return (
            <Grid>
                <Row>
                    {componentsWithDesign.map((component) => {
                        return (
                            <Col
                                key={component.id}
                                className={b('col')}
                                sizes={{all: 12, lg: 6, xl: 4}}
                            >
                                <Link
                                    href={component.url}
                                    target="_blank"
                                    className={b('component')}
                                >
                                    <div className={b('component-image')} />
                                    <div className={b('component-title')}>{component.title}</div>
                                    <div className={b('component-description')}>
                                        {component.description}
                                    </div>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Grid>
        );
    }

    return (
        <div className={b()}>
            <div className={b('header')}>
                <h1 className={b('title')}>{t(`section_${section.id}_title`)}</h1>
                <div className={b('description')}>{t(`section_${section.id}_description`)}</div>
            </div>

            <div className={b('articles')}>
                {section.articles.map((article) => {
                    return (
                        <div key={article.id} className={b('article-wrapper')}>
                            <Link
                                href={`/design/${section.id}/${article.id}`}
                                className={b('article')}
                            >
                                {t(`section_${section.id}_article_${article.id}_title`)}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
