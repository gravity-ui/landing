import {Moon, Sun} from '@gravity-ui/icons';
import {Button, Flex, Label, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import type {ThemeMetadata, ThemePreviewMode} from '../../gallery';

import './ThemeCard.scss';

const b = block('theme-card');

const formatTagLabel = (tag: string) =>
    tag
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');

interface ThemeCardProps {
    metadata: ThemeMetadata;
    selected?: boolean;
    onApply?: (id: string, mode: ThemePreviewMode) => void;
    className?: string;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({
    metadata,
    selected = false,
    onApply,
    className,
}) => {
    const [previewMode, setPreviewMode] = React.useState<ThemePreviewMode>(metadata.previewMode);

    return (
        <div
            className={b({selected}, className)}
            style={{['--theme-card-brand' as string]: metadata.brandColor}}
        >
            <div className={b('preview-stack')}>
                <div className={b('preview-area')} data-mode={previewMode}>
                    <img
                        className={b('preview-image')}
                        src={`/themes/previews/${metadata.id}-${previewMode}.png`}
                        alt={`${metadata.name} ${previewMode} preview`}
                        loading="lazy"
                        decoding="async"
                        onError={(event) => {
                            // eslint-disable-next-line no-param-reassign
                            event.currentTarget.style.visibility = 'hidden';
                        }}
                    />
                    <span className={b('preview-name')} aria-hidden="true">
                        {metadata.name}
                    </span>
                </div>
                <div className={b('selection-frame')} aria-hidden="true" />
                <div className={b('hover-content')}>
                    <div className={b('overlay-text-block')}>
                        <Text variant="body-2" className={b('description')}>
                            {metadata.description.en}
                        </Text>
                        {metadata.tags.length > 0 && (
                            <div className={b('tags')}>
                                {metadata.tags.slice(0, 3).map((tag) => (
                                    <Label key={tag} theme="unknown" size="s">
                                        {formatTagLabel(tag)}
                                    </Label>
                                ))}
                            </div>
                        )}
                    </div>
                    <Button
                        view="action"
                        size="l"
                        onClick={() => onApply?.(metadata.id, previewMode)}
                    >
                        Apply Theme
                    </Button>
                </div>
            </div>
            <Flex
                className={b('meta')}
                alignItems="flex-start"
                justifyContent="space-between"
                gap={3}
            >
                <Flex direction="column" className={b('name-block')}>
                    <Text variant="subheader-1" className={b('name')}>
                        {metadata.name}
                    </Text>
                    <Text variant="body-1" className={b('author')}>
                        by {metadata.author.name}
                    </Text>
                </Flex>
                <div className={b('mode-toggle')}>
                    <Button
                        view="flat-secondary"
                        size="s"
                        selected={previewMode === 'dark'}
                        onClick={() => setPreviewMode('dark')}
                        aria-label="Show dark preview"
                        aria-pressed={previewMode === 'dark'}
                    >
                        <Button.Icon>
                            <Moon />
                        </Button.Icon>
                    </Button>
                    <Button
                        view="flat-secondary"
                        size="s"
                        selected={previewMode === 'light'}
                        onClick={() => setPreviewMode('light')}
                        aria-label="Show light preview"
                        aria-pressed={previewMode === 'light'}
                    >
                        <Button.Icon>
                            <Sun />
                        </Button.Icon>
                    </Button>
                </div>
            </Flex>
        </div>
    );
};
