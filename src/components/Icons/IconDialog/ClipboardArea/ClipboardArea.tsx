import {CopyToClipboard, CopyToClipboardStatus, Popup} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';

import './ClipboardArea.scss';

const b = block('clipboard-area');

const TIMEOUT = 1000;

interface ClipboardAreaProps {
    textToCopy: string;
    children: (status: CopyToClipboardStatus) => React.ReactElement;
}

export const ClipboardArea: React.FC<ClipboardAreaProps> = ({textToCopy, children}) => {
    const anchorRef = React.createRef<HTMLDivElement>();
    const [isCopied, setCopied] = React.useState(false);

    const timerId = React.useRef<number>();

    React.useEffect(
        () => () => {
            clearTimeout(timerId.current);
        },
        [],
    );

    const handleSuccessCopy = React.useCallback(() => {
        setCopied(true);
        clearTimeout(timerId.current);

        timerId.current = window.setTimeout(() => {
            setCopied(false);
        }, TIMEOUT);
    }, []);

    return (
        <React.Fragment>
            <Popup
                className={b('popup')}
                open={isCopied}
                placement="top"
                anchorRef={anchorRef}
                hasArrow
            >
                Copied
            </Popup>
            <CopyToClipboard text={textToCopy} timeout={TIMEOUT} onCopy={handleSuccessCopy}>
                {(status) => (
                    <div className={b()} ref={anchorRef}>
                        {children(status)}
                    </div>
                )}
            </CopyToClipboard>
        </React.Fragment>
    );
};
