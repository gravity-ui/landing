import {TextInput} from '@gravity-ui/uikit';
import React, {memo} from 'react';

import {block} from '../../../utils';
import {SectionBlock} from '../SectionBlock/SectionBlock';
import {Section} from '../types';

import './Navigation.scss';

const b = block('navigation-layout-navigation');

export type NavigationProps = {
    sections: Section[];
    sectionId: string;
    subSectionId?: string;
    searchPlaceholder?: string;
    emptySearchPlaceholder?: string;
    onClickOnLink: () => void;
};

export const Navigation = memo<NavigationProps>(
    ({
        sections,
        sectionId,
        subSectionId,
        searchPlaceholder,
        emptySearchPlaceholder,
        onClickOnLink,
    }) => {
        const [filterString, setFilterString] = React.useState('');

        const [openState, setOpenState] = React.useState(() => {
            return sections.reduce<Record<string, boolean>>((acc, item) => {
                // eslint-disable-next-line no-param-reassign
                acc[item.id] = true;
                return acc;
            }, {});
        });

        const [filteredSections, setFilteredSections] = React.useState(sections);
        React.useEffect(() => {
            setFilteredSections(sections);
        }, [sections]);

        const filterStringUpdateHandle = React.useCallback(
            (newValue: string) => {
                setFilterString(newValue);

                if (newValue) {
                    const newOpenState = {...openState};
                    const filterStringLower = newValue.toLowerCase();

                    const filtered = filterStringLower
                        ? sections.reduce<Section[]>((acc, section) => {
                              if (section.title.toLowerCase().includes(filterStringLower)) {
                                  newOpenState[section.id] = true;

                                  const subSections = section.subSections?.filter((subSection) =>
                                      subSection.title.toLowerCase().includes(filterStringLower),
                                  );
                                  acc.push({...section, subSections});
                              } else {
                                  const subSections = section.subSections?.filter((subSection) =>
                                      subSection.title.toLowerCase().includes(filterStringLower),
                                  );
                                  if (subSections && subSections.length > 0) {
                                      newOpenState[section.id] = true;
                                      acc.push({...section, subSections});
                                  }
                              }

                              return acc;
                          }, [])
                        : sections;

                    setOpenState(newOpenState);
                    setFilteredSections(filtered);
                } else {
                    setFilteredSections(sections);
                }
            },
            [openState, sections],
        );

        return (
            <div className={b()}>
                <TextInput
                    value={filterString}
                    onUpdate={filterStringUpdateHandle}
                    size="xl"
                    placeholder={searchPlaceholder}
                    hasClear
                />

                <div className={b('items')}>
                    {filteredSections.length > 0 ? (
                        filteredSections.map((section) => {
                            return (
                                <SectionBlock
                                    key={section.id}
                                    data={section}
                                    isOpen={openState[section.id]}
                                    setIsOpen={(val) => {
                                        setOpenState({...openState, [section.id]: val});
                                    }}
                                    curSectionId={sectionId}
                                    curSubSectionId={subSectionId}
                                    onClickOnLink={onClickOnLink}
                                />
                            );
                        })
                    ) : (
                        <div className={b('empty')}>{emptySearchPlaceholder}</div>
                    )}
                </div>
            </div>
        );
    },
);

Navigation.displayName = 'Navigation';
