import {TextInput} from '@gravity-ui/uikit';
import React from 'react';

import {libComponents} from '../../../content/components';
import {sections} from '../../../content/design';
import {block} from '../../../utils';

import './DesignNavigation.scss';
import {SectionBlock} from './SectionBlock/SectionBlock';

const b = block('design-layout-design-navigation');

export type ComponentsLayoutProps = {
    sectionId: string;
    articleId?: string;
};

export const DesignNavigation: React.FC<ComponentsLayoutProps> = ({sectionId, articleId}) => {
    const componentsSections = libComponents.reduce<{id: string; title: string; libId: string}[]>(
        (acc, item) => {
            acc.push(
                ...item.components
                    .filter((component) => Boolean(component.design))
                    .map((component) => ({
                        id: component.id,
                        title: component.title,
                        libId: item.id,
                    })),
            );
            return acc;
        },
        [],
    );

    const allSections = [
        ...sections,
        {
            id: '__components',
            title: 'Components',
            description: 'Components design guides',
            content: '#Components',
            articles: componentsSections.map((item) => ({
                id: item.id,
                title: item.title,
                description: '',
                link: `/components/${item.libId}/${item.id}?tabId=design`,
            })),
        },
    ] as any[];

    const [filterString, setFilterString] = React.useState('');

    const [openState, setOpenState] = React.useState(() => {
        return allSections.reduce<Record<string, boolean>>((acc, item) => {
            acc[item.id] = true;
            return acc;
        }, {});
    });

    const [filteredSections, setFilteredSections] = React.useState(allSections);

    const filterStringUpdateHandle = React.useCallback(
        (newValue: string) => {
            setFilterString(newValue);
            if (newValue) {
                const newOpenState = {...openState};
                const filterStringLower = newValue.toLowerCase();

                const filteredSections = filterStringLower
                    ? allSections.reduce<any[]>((acc, section) => {
                          if (section.title.toLowerCase().includes(filterStringLower)) {
                              newOpenState[section.id] = true;

                              const articles = section.articles.filter((article: any) =>
                                  article.title.toLowerCase().includes(filterStringLower),
                              );
                              acc.push({...section, articles});
                          } else {
                              const articles = section.articles.filter((article: any) =>
                                  article.title.toLowerCase().includes(filterStringLower),
                              );
                              if (articles.length > 0) {
                                  newOpenState[section.id] = true;
                                  acc.push({...section, articles});
                              }
                          }

                          return acc;
                      }, [])
                    : allSections;

                setOpenState(newOpenState);
                setFilteredSections(filteredSections);
            } else {
                setFilteredSections(allSections);
            }
        },
        [openState],
    );

    return (
        <div className={b()}>
            <TextInput
                value={filterString}
                onUpdate={filterStringUpdateHandle}
                size="xl"
                placeholder="Search by article name"
            />

            <div className={b('items')}>
                {filteredSections.length > 0 ? (
                    filteredSections.map((lib) => {
                        return (
                            <SectionBlock
                                key={lib.id}
                                data={lib}
                                isOpen={openState[lib.id]}
                                setIsOpen={(val) => {
                                    setOpenState({...openState, [lib.id]: val});
                                }}
                                sectionId={sectionId}
                                articleId={articleId}
                            />
                        );
                    })
                ) : (
                    <div className={b('empty')}>Nothing found</div>
                )}
            </div>
        </div>
    );
};
