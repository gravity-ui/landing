import Link from 'next/link';
import React from 'react';

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
