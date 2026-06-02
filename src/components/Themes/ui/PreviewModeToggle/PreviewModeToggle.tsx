import {Moon, Sun} from '@gravity-ui/icons';
import {Button, Flex, Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import type {ThemePreviewMode} from '../../gallery';

import './PreviewModeToggle.scss';

interface PreviewModeToggleProps {
    value: ThemePreviewMode | null;
    onChange: (mode: ThemePreviewMode) => void;
    className?: string;
}

const b = block('preview-mode-toggle');

export const PreviewModeToggle: React.FC<PreviewModeToggleProps> = ({
    value,
    onChange,
    className,
}) => {
    const selected: ThemePreviewMode = value ?? 'dark';
    return (
        <Flex className={b(null, className)} gap={1} alignItems="center">
            <Button
                view={selected === 'dark' ? 'normal' : 'flat-secondary'}
                size="l"
                selected={selected === 'dark'}
                onClick={() => onChange('dark')}
                aria-label="Use dark preview"
                aria-pressed={selected === 'dark'}
            >
                <Button.Icon>
                    <Icon data={Moon} />
                </Button.Icon>
            </Button>
            <Button
                view={selected === 'light' ? 'normal' : 'flat-secondary'}
                size="l"
                selected={selected === 'light'}
                onClick={() => onChange('light')}
                aria-label="Use light preview"
                aria-pressed={selected === 'light'}
            >
                <Button.Icon>
                    <Icon data={Sun} />
                </Button.Icon>
            </Button>
        </Flex>
    );
};
