import React from 'react';

import {block} from '../../utils';
import {ClipboardArea} from '../ClipboardArea/ClipboardArea';
import {ClipboardIcon} from '../ClipboardIcon/ClipboardIcon';

import './CodeExample.scss';

const b = block('code-example');

interface UsageExampleProps {
    code: string;
    tooltipContent?: string;
    className?: string;
}

export const CodeExample: React.FC<UsageExampleProps> = ({code, tooltipContent, className}) => {
    return (
        <ClipboardArea textToCopy={code} tooltipContent={tooltipContent}>
            {(status) => (
                <div className={b(null, className)}>
                    <div className={b('inner')}>
                        <div
                            className={b('code', {
                                copied: status === 'success',
                            })}
                        >
                            {code}
                        </div>
                        <div className={b('copy-button')}>
                            <ClipboardIcon status={status} className={b('copy-icon')} />
                        </div>
                    </div>
                </div>
            )}
        </ClipboardArea>
    );
};
