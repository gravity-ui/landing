import {Text} from '@gravity-ui/uikit';
import {Fragment} from 'react';

import {block} from '../../../../utils';
import {PaletteColor} from '../../lib/types';

import {AddExtraColor} from './AddExtraColor/AddExtraColor';
import './AdvancedSettingsTable.scss';
import {useColumns, useExtraColors} from './hooks';

const b = block('advanced-color-settings-table');

export interface AdvancedSettingsTableProps {
    colorGroups: {
        title?: string;
        variables: PaletteColor[];
        hasExtraColors?: boolean;
    }[];
    variablesTitle: string;
    className?: string;
}

export const AdvancedSettingsTable = ({
    colorGroups,
    variablesTitle,
    className,
}: AdvancedSettingsTableProps) => {
    const extraColors = useExtraColors();
    const columns = useColumns({variablesTitle});

    return (
        <table className={b(null, className)}>
            <thead>
                <tr className={b('row')}>
                    {columns.map(({title: Title}, index) => (
                        <th className={b('cell', {header: true})} key={`header-${index}`}>
                            <Title />
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className={b('body')}>
                {colorGroups.map(({title, variables, hasExtraColors}) => {
                    return (
                        <Fragment>
                            {title && (
                                <tr className={b('row')}>
                                    {columns.map(({key}) => (
                                        <td
                                            className={b('cell', {group: true})}
                                            key={`${title}-${key}`}
                                        >
                                            {key === 'variable' ? (
                                                <Text variant="subheader-1">{title}</Text>
                                            ) : (
                                                ''
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            )}
                            {hasExtraColors && (
                                <Fragment>
                                    {Object.entries(extraColors).map(([colorName, value]) => (
                                        <tr className={b('row')} key={colorName}>
                                            {columns.map(({render: Render, key}) => (
                                                <td
                                                    className={b('cell')}
                                                    key={`${colorName}-${key}`}
                                                >
                                                    <Render
                                                        colorName={colorName}
                                                        light={
                                                            value.light?.ref ?? value.light?.value
                                                        }
                                                        dark={value.dark?.ref ?? value.dark?.value}
                                                        extraVariable
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan={columns.length}>
                                            <AddExtraColor />
                                        </td>
                                    </tr>
                                </Fragment>
                            )}

                            {variables.map(({colorName, light, dark}) => (
                                <tr className={b('row')} key={colorName}>
                                    {columns.map(({render: Render, key}) => (
                                        <td className={b('cell')} key={`${colorName}-${key}`}>
                                            <Render
                                                colorName={colorName}
                                                light={light?.ref ?? light?.value}
                                                dark={dark?.ref ?? dark?.value}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </Fragment>
                    );
                })}
            </tbody>
        </table>
    );
};
