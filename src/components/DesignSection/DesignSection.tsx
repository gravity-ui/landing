import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import Link from 'next/link';
import React from 'react';

import {Component} from '../..//content/components/types';
import {libs} from '../../content/components';
import {sections} from '../../content/design';
import {block} from '../../utils';

import './DesignSection.scss';

const b = block('design-section');

type Props = {
    sectionId: string;
};

export const DesignSection: React.FC<Props> = ({sectionId}) => {
    const section = sections.find((item) => item.id === sectionId);

    if (!section) return null;

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
                                <Link href={component.url}>
                                    <a target="_blank" className={b('component')}>
                                        <div className={b('component-image')} />
                                        <div className={b('component-title')}>
                                            {component.title}
                                        </div>
                                        <div className={b('component-description')}>
                                            {component.description}
                                        </div>
                                    </a>
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
                <h1 className={b('title')}>{section.title}</h1>
                <div className={b('description')}>{section.description}</div>
            </div>

            <div className={b('articles')}>
                {section.articles.map((article) => {
                    return (
                        <div key={article.id} className={b('article-wrapper')}>
                            <Link href={`/design/${section.id}/${article.id}`}>
                                <a className={b('article')}>{article.title}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
