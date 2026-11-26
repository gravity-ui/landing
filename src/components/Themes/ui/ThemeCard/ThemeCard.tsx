import {Moon, Sun} from '@gravity-ui/icons';
import {Button, Flex, Label, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../../utils';
import type {LocalizedString, ThemeMetadata, ThemePreviewMode, ThemeTag} from '../../gallery';

import './ThemeCard.scss';

const b = block('theme-card');

// Theme metadata only ships `en`/`ru` copy; every other locale reads the
// English original rather than a raw key.
const pickLocalized = (value: LocalizedString, language: string) =>
    language.startsWith('ru') ? value.ru : value.en;

// Spelled out rather than built from the tag at call time: the keys stay
// greppable for the translation tooling, and adding a tag without a label
// fails the typecheck.
const TAG_LABEL_KEYS: Record<ThemeTag, string> = {
    'high-contrast': 'gallery_tag_high-contrast',
    accessible: 'gallery_tag_accessible',
    creative: 'gallery_tag_creative',
    modern: 'gallery_tag_modern',
    'high-readability': 'gallery_tag_high-readability',
    corporate: 'gallery_tag_corporate',
    minimal: 'gallery_tag_minimal',
};

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
    const {t, i18n} = useTranslation('themes');
    // Every card opens dark regardless of `metadata.previewMode` — a mixed
    // light/dark grid reads as visual noise. The light preview is one click
    // away on the mode toggle below the card.
    const [previewMode, setPreviewMode] = React.useState<ThemePreviewMode>('dark');

    return (
        <div
            className={b({selected}, className)}
            style={{['--theme-card-brand' as string]: metadata.brandColor}}
        >
            {/* The whole preview is the hit area — the Apply Theme button
                stays as the visible affordance and the keyboard-reachable
                control, its click just bubbles up to this handler. */}
            <div className={b('preview-stack')} onClick={() => onApply?.(metadata.id, previewMode)}>
                <div className={b('preview-area')} data-mode={previewMode}>
                    <img
                        className={b('preview-image')}
                        src={`/themes/previews/${metadata.id}-${previewMode}.png`}
                        alt={t(
                            previewMode === 'dark'
                                ? 'gallery_card_preview_alt_dark'
                                : 'gallery_card_preview_alt_light',
                            {name: metadata.name},
                        )}
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
                            {pickLocalized(metadata.description, i18n.language)}
                        </Text>
                        {metadata.tags.length > 0 && (
                            <div className={b('tags')}>
                                {metadata.tags.slice(0, 3).map((tag) => (
                                    <Label key={tag} theme="unknown" size="s">
                                        {t(TAG_LABEL_KEYS[tag])}
                                    </Label>
                                ))}
                            </div>
                        )}
                    </div>
                    <Button view="action" size="l">
                        {t('gallery_card_apply')}
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
                        {t('gallery_card_author', {author: metadata.author.name})}
                    </Text>
                </Flex>
                <div className={b('mode-toggle')}>
                    <Button
                        view="flat-secondary"
                        size="s"
                        selected={previewMode === 'dark'}
                        onClick={() => setPreviewMode('dark')}
                        aria-label={t('gallery_card_show_dark_aria')}
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
                        aria-label={t('gallery_card_show_light_aria')}
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
