import {Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import {Fragment} from 'react';

import {block} from '../../../../utils';
import {DEFAULT_ADVANCED_COLORS} from '../../lib/constants';
import type {AdvancedColorType} from '../../lib/types';

import {AddExtraColor} from './AddExtraColor/AddExtraColor';
import './AdvancedSettingsTable.scss';
import {useColumns, useExtraColors} from './hooks';

const b = block('advanced-color-settings-table');

export interface AdvancedSettingsTableProps {
    colorType: AdvancedColorType;
}

export const AdvancedSettingsTable = ({colorType}: AdvancedSettingsTableProps) => {
    const {t} = useTranslation('themes');
    const extraColors = useExtraColors();
    const columns = useColumns({colorType});

    return (
        <table className={b()}>
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
                {Object.entries(DEFAULT_ADVANCED_COLORS[colorType]).map(([group, variables]) => {
                    return (
                        <Fragment key={group}>
                            <tr className={b('row')}>
                                {columns.map(({key}) => (
                                    <td
                                        className={b('cell', {group: true})}
                                        key={`${group}-${key}`}
                                    >
                                        {key === 'variable' ? (
                                            <Text variant="subheader-1">
                                                {t(`title_advance-color-settings-group-${group}`)}
                                            </Text>
                                        ) : (
                                            ''
                                        )}
                                    </td>
                                ))}
                            </tr>

                            {colorType === 'basic-palette' && group === 'extra-color' && (
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
