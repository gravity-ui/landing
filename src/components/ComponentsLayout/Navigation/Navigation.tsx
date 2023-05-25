import {TextInput} from '@gravity-ui/uikit';
import React from 'react';

import {libComponents} from '../../../content/components';
import {block} from '../../../utils';

import {LibraryBlock} from './LibraryBlock/LibraryBlock';
import './Navigation.scss';

const b = block('components-layout-navigation');

export type ComponentsLayoutProps = {
    libId: string;
    componentId?: string;
};

export const Navigation: React.FC<ComponentsLayoutProps> = ({libId, componentId}) => {
    const [filterString, setFilterString] = React.useState('');

    const [openState, setOpenState] = React.useState(() => {
        return libComponents.reduce<Record<string, boolean>>((acc, item) => {
            acc[item.id] = true;
            return acc;
        }, {});
    });

    const [filteredLibs, setFilteredLibs] = React.useState(libComponents);

    const filterStringUpdateHandle = React.useCallback(
        (newValue: string) => {
            setFilterString(newValue);
            if (newValue) {
                const newOpenState = {...openState};
                const filterStringLower = newValue.toLowerCase();

                const filteredLibComponents = filterStringLower
                    ? libComponents.reduce<any[]>((acc, lib) => {
                          if (lib.title.toLowerCase().includes(filterStringLower)) {
                              newOpenState[lib.id] = true;

                              const components = lib.components.filter((component) =>
                                  component.title.toLowerCase().includes(filterStringLower),
                              );
                              acc.push({...lib, components});
                          } else {
                              const components = lib.components.filter((component) =>
                                  component.title.toLowerCase().includes(filterStringLower),
                              );
                              if (components.length > 0) {
                                  newOpenState[lib.id] = true;
                                  acc.push({...lib, components});
                              }
                          }

                          return acc;
                      }, [])
                    : libComponents;

                setOpenState(newOpenState);
                setFilteredLibs(filteredLibComponents);
            } else {
                setFilteredLibs(libComponents);
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
                placeholder="Search by component name"
            />

            <div className={b('items')}>
                {filteredLibs.length > 0 ? (
                    filteredLibs.map((lib) => {
                        return (
                            <LibraryBlock
                                key={lib.id}
                                data={lib}
                                isOpen={openState[lib.id]}
                                setIsOpen={(val) => {
                                    setOpenState({...openState, [lib.id]: val});
                                }}
                                libId={libId}
                                componentId={componentId}
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
