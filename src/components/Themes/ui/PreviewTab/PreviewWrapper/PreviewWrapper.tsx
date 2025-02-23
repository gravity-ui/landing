import {Moon, Sun} from '@gravity-ui/icons';
import {Icon, RadioButton, Theme, ThemeProvider} from '@gravity-ui/uikit';
import React, {Fragment, ReactNode, useState} from 'react';

import {block} from '../../../../../utils';
import {exportTheme} from '../../../lib/themeCreatorExport';

import './PreviewWrapper.scss';

export interface PreviewWrapperProps {
    styles: ReturnType<typeof exportTheme>;
    children: (arg: {themeSwitcher: ReactNode; theme: Theme; isLightTheme: boolean}) => ReactNode;
}

const b = block('themes-preview-wrapper');

export function PreviewWrapper({styles, ...props}: PreviewWrapperProps) {
    const [theme, setTheme] = useState<Theme>('dark');

    return (
        <ThemeProvider theme={theme} scoped rootClassName={`${b()} ${b({theme})}`}>
            {styles ? (
                <style>{`${
                    styles.fontImports
                }\n.gravity-ui-landing-themes-preview-wrapper_theme_${theme} {${
                    styles[theme as 'light' | 'dark']
                }}`}</style>
            ) : null}
            <div className={b('content')}>
                <Content {...props} theme={theme} onThemeUpdate={setTheme} />
            </div>
        </ThemeProvider>
    );
}

function Content({
    children,
    theme,
    onThemeUpdate,
}: Pick<PreviewWrapperProps, 'children'> & {
    theme: Theme;
    onThemeUpdate: (value: Theme) => void;
}) {
    const themeSwitcher = (
        <RadioButton
            name="theme"
            defaultValue="light"
            value={theme}
            onChange={(event) => {
                onThemeUpdate(event.target.value as 'light' | 'dark');
            }}
            options={[
                {
                    value: 'light',
                    content: <Icon data={Sun} />,
                },
                {
                    value: 'dark',
                    content: <Icon data={Moon} />,
                },
            ]}
        />
    );
    return (
        <Fragment>
            {children({
                themeSwitcher,
                theme,
                isLightTheme: theme.includes('light'),
            })}
        </Fragment>
    );
}
