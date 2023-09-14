import {Icon, Theme, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import codeIcon from '../../../assets/icons/code.svg';
import themeIcon from '../../../assets/icons/theme.svg';
import {block} from '../../../utils';

import './ExampleBlock.scss';

const b = block('example-block');

export type ExampleBlockProps = {
    code?: string;
    background?: string;
    children: React.ReactNode;
};

export const ExampleBlock: React.FC<ExampleBlockProps> = ({code, background, children}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [theme, setTheme] = React.useState<Theme>('dark');

    const codePrepared = code?.trim();

    return (
        <div className={b()}>
            <ThemeProvider theme={theme} scoped rootClassName={b('theme-root', 'sandbox')}>
                <div className={b('content')} {...(background ? {style: {background}} : {})}>
                    {children}
                </div>
            </ThemeProvider>
            <div className={b('controls')}>
                {codePrepared ? (
                    <div
                        tabIndex={0}
                        role="button"
                        className={b('control', {open: isOpen})}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <Icon data={codeIcon} size={16} />
                    </div>
                ) : null}
                <div
                    tabIndex={0}
                    role="button"
                    className={b('control')}
                    onClick={() => {
                        setTheme(theme === 'dark' ? 'light' : 'dark');
                    }}
                >
                    <Icon data={themeIcon} size={18} />
                </div>
            </div>
            {codePrepared ? (
                <div className={b('code', {open: isOpen})}>
                    <pre>
                        <code className="language-tsx">{codePrepared}</code>
                    </pre>
                </div>
            ) : null}
        </div>
    );
};
