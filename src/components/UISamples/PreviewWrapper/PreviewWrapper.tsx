import {Moon, Sun} from '@gravity-ui/icons';
import {
    Icon,
    SegmentedRadioGroup,
    Theme,
    ThemeProvider,
    Toaster,
    ToasterProvider,
} from '@gravity-ui/uikit';
import React, {ReactNode, useState} from 'react';

import {block} from '../../../utils';

import './PreviewWrapper.scss';

export interface PreviewWrapperProps {
    styles?: string;
    children: (arg: {themeSwitcher: ReactNode; theme: Theme; isLightTheme: boolean}) => ReactNode;
}

const b = block('themes-preview-wrapper');

export function PreviewWrapper({styles, ...props}: PreviewWrapperProps) {
    const [theme, setTheme] = useState<Theme>('dark');

    return (
        <ThemeProvider theme={theme} scoped rootClassName={`${b()} ${b({theme})}`}>
            {styles ? <style>{styles}</style> : undefined}
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
        <SegmentedRadioGroup
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

    const [toaster, setToaster] = React.useState<Toaster>();

    React.useEffect(() => {
        if (!toaster) {
            setToaster(new Toaster());
        }
    }, [toaster]);

    if (!toaster) {
        return null;
    }

    return (
        <ToasterProvider toaster={toaster}>
            {children({
                themeSwitcher,
                theme,
                isLightTheme: theme.includes('light'),
            })}
        </ToasterProvider>
    );
}
