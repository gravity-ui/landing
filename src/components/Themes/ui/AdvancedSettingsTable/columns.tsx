import {Moon, Sun} from '@gravity-ui/icons';
import {Flex, HelpMark, Icon, SegmentedRadioGroup, Text} from '@gravity-ui/uikit';
import {
    type Theme,
    type UtilityColor,
    createInternalUtilityColorReference,
    createUtilityColorCssVariable,
    isUtilityColorToken,
} from '@gravity-ui/uikit-themer';
import {useTranslation} from 'next-i18next';

import {block} from '../../../../utils';
import {useThemePaletteColor, useThemePrivateColorOptions, useThemeUtilityColor} from '../../hooks';
import {useThemeSemanticColorOption} from '../../hooks/useThemeSemanticColorOption';
import {getColorName, getColorPrefix} from '../../lib/utils';
import {ColorPickerInput} from '../ColorPickerInput/ColorPickerInput';
import {GravityColorSelect} from '../GravityColorSelect';

import {ExtraColorName} from './ExtraColorName/ExtraColorName';

type ColumnProps = {colorName: string; theme: Theme; value?: string};

const b = block('advanced-color-settings-table');

const PaletteThemeValueColumn = ({colorName, theme, value}: ColumnProps) => {
    const [color, setColor] = useThemePaletteColor({
        token: colorName,
        theme,
    });

    return (
        <ColorPickerInput
            value={color.value}
            defaultValue={value ?? '#000000'}
            onChange={setColor}
            withBorderInPreview
            size="s"
            view="clear"
        />
    );
};

const utilityColorsForDefaultColorPicker: UtilityColor[] = ['base-background'];

const UtilityThemeValueColumn = ({
    colorName,
    theme,
    value,
}: Omit<ColumnProps, 'colorName'> & {colorName: UtilityColor}) => {
    const [color, setColor] = useThemeUtilityColor({
        name: colorName,
        theme,
    });

    const themePrivateColorOptions = useThemePrivateColorOptions(theme);
    const themeSemanticColorOptions = useThemeSemanticColorOption(
        theme,
        createInternalUtilityColorReference(colorName),
    );

    if (utilityColorsForDefaultColorPicker.includes(colorName)) {
        return (
            <ColorPickerInput
                value={color}
                defaultValue={value ?? '#000000'}
                onChange={setColor}
                withBorderInPreview
                size="s"
                view="clear"
            />
        );
    }

    return (
        <GravityColorSelect
            privateGroups={themePrivateColorOptions}
            semanticGroups={themeSemanticColorOptions}
            defaultValue={value ?? '#000000'}
            value={color}
            onChange={setColor}
            inputProps={{view: 'clear', size: 's'}}
            buttonProps={{size: 's'}}
        />
    );
};

const ThemeValueColumn = ({colorName, theme, value}: ColumnProps) => {
    const isUtilityColor = isUtilityColorToken(colorName);

    if (isUtilityColor) {
        return <UtilityThemeValueColumn colorName={colorName} theme={theme} value={value} />;
    }

    return <PaletteThemeValueColumn colorName={colorName} theme={theme} value={value} />;
};

const TitleColumn = ({value}: {value: string}) => {
    return <Text variant="header-1">{value}</Text>;
};

const ThemeToggleTitleColumn = ({
    theme,
    toggleTheme,
}: {
    theme: Theme;
    toggleTheme: (theme: Theme) => void;
}) => {
    const {t} = useTranslation('themes');

    return (
        <SegmentedRadioGroup
            size="xl"
            defaultValue={theme}
            className={b('theme-toggle')}
            onChange={(e) => {
                toggleTheme(e.target.value as Theme);
            }}
        >
            <SegmentedRadioGroup.Option value="light">
                <Icon data={Sun} />
                {t('theme_name_light')}
            </SegmentedRadioGroup.Option>
            <SegmentedRadioGroup.Option value="dark">
                <Icon data={Moon} />
                {t('theme_name_dark')}
            </SegmentedRadioGroup.Option>
        </SegmentedRadioGroup>
    );
};

const UtilityVariableDescription = ({name}: {name: UtilityColor}) => {
    const {t} = useTranslation('themes');
    const content = t(`text_utility-color_${name}_description`);

    return (
        <Flex direction="column" gap={1} justifyContent="center">
            <Text variant="body-1" color="secondary">
                {createUtilityColorCssVariable(name)}
            </Text>
            <Text variant="body-1" color="primary">
                {content}
            </Text>
        </Flex>
    );
};

const VariableColumn = ({name, extraVariable}: {name: string; extraVariable?: boolean}) => {
    if (extraVariable) {
        return <ExtraColorName token={name} />;
    }

    const isUtilityColor = isUtilityColorToken(name as UtilityColor);

    return (
        <Flex justifyContent="space-between" gap={2}>
            <Text variant="body-1" color="secondary">
                {getColorPrefix(name)}
                <Text variant="body-1" color="primary">
                    {getColorName(name)}
                </Text>
            </Text>
            {isUtilityColor && (
                <HelpMark iconSize="m" popoverProps={{placement: 'top-start'}}>
                    <UtilityVariableDescription name={name as UtilityColor} />
                </HelpMark>
            )}
        </Flex>
    );
};

export {ThemeValueColumn, TitleColumn, VariableColumn, ThemeToggleTitleColumn};
