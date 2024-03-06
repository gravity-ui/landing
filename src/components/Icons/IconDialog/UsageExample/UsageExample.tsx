import {CopyToClipboardStatus} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {ClipboardArea} from '../../../ClipboardArea/ClipboardArea';
import {ClipboardIcon} from '../../../ClipboardIcon/ClipboardIcon';
import type {IconItem} from '../../types';

import './UsageExample.scss';
import {buildIconImportLine, buildIconSvgPath} from './helpers';

const b = block('icon-usage-example');

interface UsageExampleProps {
    icon: IconItem;
    variant: 'react' | 'svg';
}

export const UsageExample: React.FC<UsageExampleProps> = ({icon, variant}) => {
    const importCode =
        variant === 'react'
            ? buildIconImportLine(icon.meta.componentName)
            : buildIconSvgPath(icon.meta.svgName, icon.meta.componentName);

    return (
        <div className={b()}>
            <div className={b('title')}>{variant === 'react' ? 'React component' : 'SVG'}</div>
            <ClipboardArea
                textToCopy={importCode}
                tooltipContent={variant === 'react' ? 'Copy react component' : 'Copy SVG import'}
            >
                {(status) => (
                    <div className={b('wrapper')}>
                        <div
                            className={b('code', {
                                copied: status === CopyToClipboardStatus.Success,
                            })}
                        >
                            {importCode}
                        </div>
                        <div className={b('copy-button')}>
                            <ClipboardIcon status={status} className={b('copy-icon')} />
                        </div>
                    </div>
                )}
            </ClipboardArea>
        </div>
    );
};
