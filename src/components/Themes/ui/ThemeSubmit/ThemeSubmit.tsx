import {ArrowUpRightFromSquare} from '@gravity-ui/icons';
import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {Button, Flex, Icon, Loader} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {useWindowBreakpoint} from 'src/hooks/useWindowBreakpoint';

import githubIcon from '../../../../assets/icons/github.svg';
import {block} from '../../../../utils/block';
import {THEME_TAGS, type ThemeMetadata, type ThemeTag} from '../../gallery';
import {toThemeId} from '../../gallery/schema';
import {useThemeCreator, useThemePaletteColor} from '../../hooks';
import type {SubmissionDraft} from '../../lib/submissionValidation';
import {
    clearSubmitDraft,
    loadSubmitDraft,
    saveSubmitDraft,
} from '../../lib/themeCreatorPersistence';
import {isBuiltInFontFamily} from '../../lib/typography/utils';
import {ThemeCard} from '../ThemeCard/ThemeCard';

import {ThemeCardLivePreview} from './ThemeCardLivePreview';
import './ThemeSubmit.scss';
import {ThemeSubmitDialog} from './ThemeSubmitDialog';
import {ThemeSubmitForm} from './ThemeSubmitForm';
import {ThemeSubmitSheet} from './ThemeSubmitSheet';
import {ProgressWait, SignInContent, SuccessContent} from './ThemeSubmitStatus';
import type {ThemeSubmitProps} from './types';
import {type SubmissionErrorCode, useThemeSubmission} from './useThemeSubmission';

const b = block('theme-submit');

const INITIAL_DRAFT: SubmissionDraft = {
    name: '',
    descriptionEn: '',
    descriptionRu: '',
    tags: [],
};

export const ThemeSubmit: React.FC<ThemeSubmitProps> = ({isOpen, onClose}) => {
    const {t} = useTranslation('themes');
    const breakpoint = useWindowBreakpoint();
    const isDesktop = breakpoint >= BREAKPOINTS.sm;

    const [draft, setDraft] = React.useState<SubmissionDraft>(INITIAL_DRAFT);
    const {
        user,
        isUserLoading,
        state,
        fieldErrors,
        isRenderedVersionStale,
        signIn,
        signOut,
        submit,
        reset,
    } = useThemeSubmission(isOpen, draft);
    const [brandColor] = useThemePaletteColor({token: 'brand', theme: 'light'});
    const {gravityTheme} = useThemeCreator();

    // The saved draft is read after mount: storage is not available during SSR.
    React.useEffect(() => {
        const saved = loadSubmitDraft();
        if (saved) {
            setDraft({
                ...saved,
                tags: saved.tags.filter((tag): tag is ThemeTag =>
                    THEME_TAGS.includes(tag as ThemeTag),
                ),
            });
        }
    }, []);

    const updateDraft = React.useCallback((patch: Partial<SubmissionDraft>) => {
        setDraft((prev) => {
            const next = {...prev, ...patch};
            saveSubmitDraft(next);
            return next;
        });
    }, []);

    // An opened pull request ends the draft.
    React.useEffect(() => {
        if (state.status === 'success') {
            clearSubmitDraft();
        }
    }, [state.status]);

    const themeId = toThemeId(draft.name);
    // The gallery stores only the theme JSON, so the loading link of a custom
    // font would be lost and the published theme would fall back to the default font.
    const hasCustomFont = Object.entries(gravityTheme.typography.fontFamilies).some(
        ([fontType, options]) => !isBuiltInFontFamily(fontType, options?.mainFont),
    );
    const canSubmit = !Object.keys(fieldErrors).length && !hasCustomFont;
    const actionClassName = b('action', {wide: !isDesktop});

    const previewMetadata: ThemeMetadata = {
        id: themeId || 'new-theme',
        name: draft.name.trim() || t('submit_theme_name_placeholder'),
        author: {name: user?.name || user?.login || t('submit_theme_author_placeholder')},
        description: {
            en: draft.descriptionEn.trim() || t('submit_theme_description_placeholder'),
            ru: draft.descriptionRu.trim() || draft.descriptionEn.trim(),
        },
        tags: draft.tags,
        brandColor: brandColor.value,
    };

    // The dialog closes during submission too: the job is durable and its polling goes on,
    // so reopening shows its progress or result.
    const handleClose = () => {
        if (state.status === 'success') {
            setDraft(INITIAL_DRAFT);
            reset();
        }
        onClose();
    };

    let main: React.ReactNode;
    let buttons: React.ReactNode;

    if (isUserLoading) {
        main = (
            <Flex alignItems="center" justifyContent="center" className={b('loading')}>
                <Loader size="m" />
            </Flex>
        );
    } else if (!user) {
        main = <SignInContent errorCode={state.status === 'error' ? state.code : null} />;
        buttons = (
            <Button
                view="action"
                size="xl"
                pin="round-round"
                onClick={signIn}
                className={actionClassName}
            >
                <Icon data={githubIcon} size={20} />
                {t('submit_theme_sign_in_btn')}
            </Button>
        );
    } else if (state.status === 'submitting') {
        main = (
            <ProgressWait
                step={state.stepIndex}
                value={state.stepCount ? ((state.stepIndex + 1) / state.stepCount) * 100 : 0}
            />
        );
        buttons = (
            <Button
                view="action"
                size="xl"
                pin="round-round"
                loading
                disabled
                className={actionClassName}
            >
                {t('submit_theme_submit_btn')}
            </Button>
        );
    } else if (state.status === 'success') {
        main = <SuccessContent pullRequestUrl={state.pullRequestUrl} />;
        buttons = (
            <React.Fragment>
                <Button
                    view="action"
                    pin="round-round"
                    size="xl"
                    href={state.pullRequestUrl}
                    target="_blank"
                    className={actionClassName}
                >
                    {t('submit_theme_open_pr_btn')}
                    <Icon data={ArrowUpRightFromSquare} size={16} />
                </Button>
                <Button
                    view="outlined-action"
                    pin="round-round"
                    size="xl"
                    onClick={handleClose}
                    className={actionClassName}
                >
                    {t('submit_theme_done_btn')}
                </Button>
            </React.Fragment>
        );
    } else {
        const errorCode: SubmissionErrorCode | null = state.status === 'error' ? state.code : null;
        const buttonLabel =
            state.status === 'error' ? t('submit_theme_retry_btn') : t('submit_theme_submit_btn');
        main = (
            <ThemeSubmitForm
                user={user}
                draft={draft}
                themeId={themeId}
                errorCode={errorCode}
                forkUrl={state.status === 'error' ? state.forkUrl : undefined}
                hasCustomFont={hasCustomFont}
                fieldErrors={{
                    ...fieldErrors,
                    ...(state.status === 'error' ? state.fields : undefined),
                }}
                isRenderedVersionStale={isRenderedVersionStale}
                onChange={updateDraft}
                onSignOut={signOut}
                onStartOver={reset}
            />
        );
        buttons = (
            <Button
                view="action"
                pin="round-round"
                size="xl"
                disabled={!canSubmit}
                onClick={submit}
                className={actionClassName}
            >
                {buttonLabel}
            </Button>
        );
    }

    const content = (
        <div className={b('layout', {stacked: !isDesktop})}>
            <div className={b('main')}>{main}</div>
            <div className={b('card')}>
                <ThemeCard
                    metadata={previewMetadata}
                    renderPreview={(mode) => <ThemeCardLivePreview mode={mode} />}
                />
            </div>
        </div>
    );

    return isDesktop ? (
        <ThemeSubmitDialog
            isOpen={isOpen}
            onClose={handleClose}
            breakpoint={breakpoint}
            buttons={buttons}
        >
            {content}
        </ThemeSubmitDialog>
    ) : (
        <ThemeSubmitSheet isOpen={isOpen} onClose={handleClose} buttons={buttons}>
            {content}
        </ThemeSubmitSheet>
    );
};
