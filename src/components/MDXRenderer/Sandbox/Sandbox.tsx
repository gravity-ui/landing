import {Alert, CopyToClipboard, Icon, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';
import {CodeEditor, useLiveRunner} from 'react-live-runner';

import codeIcon from '../../../assets/icons/code.svg';
import stackblitzIcon from '../../../assets/icons/stackblitz.svg';
import themeIcon from '../../../assets/icons/theme.svg';
import {block} from '../../../utils';
import {ClipboardIcon} from '../../ClipboardIcon/ClipboardIcon';
import {UIKitDemoFrame} from '../../UIKitDemoFrame/UIKitDemoFrame';

import './Sandbox.scss';
import {UIKitReadmeIframe} from './UIKitReadmeIframe';
import {editorDarkTheme, scope, uikit8Scope} from './constants';
import {openStackblitz} from './stackblitz';

const b = block('sandbox');

export type SandboxProps = {
    code: string;
    uikit8?: boolean;
};

export const Sandbox = ({code: initialCode, uikit8}: SandboxProps) => {
    const [isEditorOpen, setIsEditorOpen] = React.useState(false);
    const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');
    const [frameError, setFrameError] = React.useState<string | null>(null);

    const {
        element,
        error: runnerError,
        code,
        onChange,
    } = useLiveRunner({
        initialCode,
        scope: uikit8 ? uikit8Scope : scope,
    });

    // Drag sensors attach to the window where their code runs.
    const needsOwnWindow =
        uikit8 &&
        /['"](?:@hello-pangea\/dnd|@gravity-ui\/uikit\/(?:hello-pangea-dnd|legacy))['"]/.test(code);
    const error = needsOwnWindow ? frameError : runnerError;
    const [errorTitle = 'Error', errorMessage = ''] = (error ?? '').split(':', 2);

    const handleToggleEditorOpen = () => {
        setIsEditorOpen((prev) => !prev);
    };

    const handleToggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const handleStackblitzOpen = () => {
        openStackblitz(code, uikit8);
    };

    return (
        <div className={b()}>
            {needsOwnWindow && (
                <UIKitReadmeIframe code={code} theme={theme} onError={setFrameError} />
            )}
            {uikit8 && !needsOwnWindow && (
                <UIKitDemoFrame theme={theme} title="UIKit sandbox">
                    {element}
                </UIKitDemoFrame>
            )}
            {!uikit8 && (
                <ThemeProvider
                    theme={theme}
                    scoped
                    rootClassName={b('theme-root', {theme}, 'sandbox')}
                >
                    <div className={b('content')}>{element}</div>
                </ThemeProvider>
            )}

            <div className={b('controls')}>
                <button
                    type="button"
                    className={b('control', {active: isEditorOpen})}
                    onClick={handleToggleEditorOpen}
                    aria-label="Toggle code"
                >
                    <Icon data={codeIcon} size={16} />
                </button>
                <button
                    type="button"
                    className={b('control')}
                    onClick={handleToggleTheme}
                    aria-label="Toggle theme"
                >
                    <Icon data={themeIcon} size={18} />
                </button>
                <button
                    type="button"
                    className={b('control')}
                    onClick={handleStackblitzOpen}
                    aria-label="Open in Stackblitz"
                >
                    <Icon data={stackblitzIcon} size={18} />
                </button>
            </div>

            <div className={b('editor-container', {visible: isEditorOpen})}>
                <div className={b('editor-scroll')}>
                    <CodeEditor
                        textareaClassName={b('editor-textarea')}
                        padding={16}
                        tabSize={4}
                        language="tsx"
                        theme={editorDarkTheme}
                        value={code}
                        onChange={onChange}
                    />
                </div>
                <CopyToClipboard text={code} timeout={1000}>
                    {(status) => (
                        <button
                            type="button"
                            className={[
                                b('copy-button'),
                                b('control', {active: status === 'success'}),
                            ].join(' ')}
                            aria-label="Copy code"
                        >
                            <ClipboardIcon status={status} />
                        </button>
                    )}
                </CopyToClipboard>

                <Alert
                    className={b('alert', {visible: Boolean(error) && isEditorOpen})}
                    theme="danger"
                    title={errorTitle}
                    message={errorMessage}
                />
            </div>
        </div>
    );
};
