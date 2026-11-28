import {Icon, Theme, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import codeIcon from '../../../assets/icons/code.svg';
import themeIcon from '../../../assets/icons/theme.svg';
import {block} from '../../../utils';
import {ClipboardArea} from '../../ClipboardArea/ClipboardArea';
import {ClipboardIcon} from '../../ClipboardIcon/ClipboardIcon';
import {UIKitDemoFrame} from '../../UIKitDemoFrame/UIKitDemoFrame';

import './ExampleBlock.scss';

const b = block('example-block');

export type ExampleBlockProps = {
    code?: string;
    uikit8?: boolean;
    background?: string;
    children: React.ReactNode;
};

export const ExampleBlock: React.FC<ExampleBlockProps> = ({code, background, children, uikit8}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [theme, setTheme] = React.useState<Theme>('dark');

    const codePrepared = code?.trim();

    return (
        <div className={b()}>
            {uikit8 ? (
                <UIKitDemoFrame theme={theme} title="UIKit example" background={background}>
                    {children}
                </UIKitDemoFrame>
            ) : (
                <ThemeProvider
                    theme={theme}
                    scoped
                    rootClassName={b('theme-root', {theme}, 'sandbox')}
                >
                    <div className={b('content')} style={{background}}>
                        {children}
                    </div>
                </ThemeProvider>
            )}
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
                    <ClipboardArea textToCopy={codePrepared} isNeedPopup={false}>
                        {(status) => (
                            <div
                                className={b('container', {
                                    copied: status === 'success',
                                })}
                            >
                                <pre>
                                    <code className="language-tsx">{codePrepared}</code>
                                </pre>
                                <ClipboardIcon status={status} className={b('copy-icon')} />
                            </div>
                        )}
                    </ClipboardArea>
                </div>
            ) : null}
        </div>
    );
};
