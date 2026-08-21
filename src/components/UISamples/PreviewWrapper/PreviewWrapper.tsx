import {Moon, Sun} from '@gravity-ui/icons';
import {
    Icon,
    PortalProvider,
    SegmentedRadioGroup,
    Theme,
    ThemeProvider,
    Toaster,
    ToasterProvider,
} from '@gravity-ui/uikit';
import React, {ReactNode, useState} from 'react';

import {block} from '../../../utils';
import {usePreviewModeContext} from '../PreviewModeContext/PreviewModeContext';

import './PreviewWrapper.scss';

export interface PreviewWrapperProps {
    styles?: string;
    children: (arg: {themeSwitcher: ReactNode; theme: Theme; isLightTheme: boolean}) => ReactNode;
}

const b = block('themes-preview-wrapper');

export function PreviewWrapper({styles, ...props}: PreviewWrapperProps) {
    const {forcedMode, hideToggle} = usePreviewModeContext();
    const [localTheme, setLocalTheme] = useState<Theme>('dark');
    const containerRef = React.useRef<HTMLDivElement>(null);

    const theme: Theme = forcedMode ?? localTheme;

    return (
        <ThemeProvider theme={theme} scoped rootClassName={`${b()} ${b({theme})}`}>
            {styles ? <style>{styles}</style> : undefined}
            <div className={b('content')} ref={containerRef}>
                <PortalProvider container={containerRef}>
                    <Content
                        {...props}
                        theme={theme}
                        onThemeUpdate={setLocalTheme}
                        hideThemeSwitcher={hideToggle}
                    />
                </PortalProvider>
            </div>
        </ThemeProvider>
    );
}

function Content({
    children,
    theme,
    onThemeUpdate,
    hideThemeSwitcher,
}: Pick<PreviewWrapperProps, 'children'> & {
    theme: Theme;
    onThemeUpdate: (value: Theme) => void;
    hideThemeSwitcher: boolean;
}) {
    const themeSwitcher: ReactNode = hideThemeSwitcher ? null : (
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
