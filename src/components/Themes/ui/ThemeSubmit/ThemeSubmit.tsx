import {Moon, Sun, Xmark} from '@gravity-ui/icons';
import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {
    Button,
    Flex,
    Icon,
    Label,
    Loader,
    Modal,
    SegmentedRadioGroup,
    Text,
} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {useWindowBreakpoint} from 'src/hooks/useWindowBreakpoint';

import githubIcon from '../../../../assets/icons/github.svg';
import {block} from '../../../../utils/block';
import {THEME_TAGS, type ThemePreviewMode, type ThemeTag} from '../../gallery';
import {useThemeCreator} from '../../hooks';
import type {SubmissionDraft} from '../../lib/submissionValidation';
import {
    clearSubmitDraft,
    loadSubmitDraft,
    saveSubmitDraft,
} from '../../lib/themeCreatorPersistence';
import {isBuiltInFontFamily} from '../../lib/typography/utils';
import {TAG_LABEL_KEYS} from '../ThemeCard/ThemeCard';

import {ThemeCardLivePreview} from './ThemeCardLivePreview';
import './ThemeSubmit.scss';
import {ThemeSubmitForm} from './ThemeSubmitForm';
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

export const ThemeSubmit: React.FC<ThemeSubmitProps> = ({isOpen, onClose, onCreateTheme}) => {
    const {t, i18n} = useTranslation('themes');
    const titleId = React.useId();
    const [previewLanguage, setPreviewLanguage] = React.useState(() =>
        i18n.language.startsWith('ru') ? 'ru' : 'en',
    );
    const [previewMode, setPreviewMode] = React.useState<ThemePreviewMode>('dark');
    const breakpoint = useWindowBreakpoint();
    const isDesktop = breakpoint >= BREAKPOINTS.sm;

    const [draft, setDraft] = React.useState<SubmissionDraft>(INITIAL_DRAFT);
    const {
        user,
        isUserLoading,
        state,
        fieldErrors,
        isJobDispatched,
        isRenderedVersionStale,
        signIn,
        signOut,
        submit,
        reset,
    } = useThemeSubmission(isOpen, draft);
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

    // The gallery stores only the theme JSON, so the loading link of a custom
    // font would be lost and the published theme would fall back to the default font.
    const hasCustomFont = Object.entries(gravityTheme.typography.fontFamilies).some(
        ([fontType, options]) => !isBuiltInFontFamily(fontType, options?.mainFont),
    );
    const canSubmit = !Object.keys(fieldErrors).length && !hasCustomFont;
    const controlSize = isDesktop ? 'l' : 'xl';
    const author = user?.login
        ? `@${user.login}`
        : t('submit_theme_author_placeholder', {lng: previewLanguage});
    const russianDescription = previewLanguage === 'ru' ? draft.descriptionRu.trim() : '';
    const description = russianDescription || draft.descriptionEn.trim();
    const descriptionLanguage = russianDescription ? 'ru' : 'en';

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
            <Button view="action" size="xl" onClick={signIn}>
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
            <Button view="action" size="xl" loading disabled>
                {t('submit_theme_submit_btn')}
            </Button>
        );
    } else if (state.status === 'success') {
        main = (
            <SuccessContent
                name={draft.name}
                pullRequestUrl={state.pullRequestUrl}
                pullRequestNumber={state.pullRequestNumber}
            />
        );
        buttons = (
            <React.Fragment>
                <Button
                    size="xl"
                    onClick={() => {
                        setDraft(INITIAL_DRAFT);
                        reset();
                        onCreateTheme();
                    }}
                >
                    {t('submit_theme_create_new_btn')}
                </Button>
                <Button view="action" size="xl" onClick={handleClose}>
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
                size={controlSize}
                draft={draft}
                errorCode={errorCode}
                forkUrl={state.status === 'error' ? state.forkUrl : undefined}
                hasCustomFont={hasCustomFont}
                fieldErrors={{
                    ...fieldErrors,
                    ...(state.status === 'error' ? state.fields : undefined),
                }}
                isRenderedVersionStale={isRenderedVersionStale}
                onChange={updateDraft}
                onStartOver={reset}
            />
        );
        buttons = (
            <Button
                view="action"
                size="xl"
                // Retry of a dispatched job only resumes the rendered version, whatever the draft is now.
                disabled={!isJobDispatched && !canSubmit}
                onClick={submit}
            >
                {buttonLabel}
            </Button>
        );
    }

    const showAccount = user && state.status !== 'success' && state.status !== 'submitting';

    return (
        <Modal
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) handleClose();
            }}
            aria-labelledby={titleId}
            contentClassName={b('modal', {touch: !isDesktop})}
            contentOverflow="visible"
            disableHeightTransition
        >
            <div className={b('panel')}>
                <header className={b('header')}>
                    <Text as="h2" id={titleId} variant="header-1">
                        {t('submit_theme_title')}
                    </Text>
                    <Button
                        view="flat-secondary"
                        size={controlSize}
                        onClick={handleClose}
                        aria-label={t('submit_theme_close')}
                    >
                        <Icon data={Xmark} size={16} />
                    </Button>
                </header>
                <div
                    className={b('body')}
                    key={state.status === 'success' ? 'success' : 'submission'}
                >
                    <div className={b('preview')}>
                        <div className={b('preview-toolbar')}>
                            <Text variant="subheader-1">{t('submit_theme_preview')}</Text>
                            <div className={b('preview-controls')}>
                                <SegmentedRadioGroup
                                    size={controlSize}
                                    value={previewLanguage}
                                    onUpdate={setPreviewLanguage}
                                    aria-label={t('submit_theme_preview_language')}
                                    options={[
                                        {value: 'en', content: 'EN'},
                                        {value: 'ru', content: 'RU'},
                                    ]}
                                />
                                <SegmentedRadioGroup
                                    size={controlSize}
                                    value={previewMode}
                                    onUpdate={(mode) =>
                                        setPreviewMode(mode === 'light' ? 'light' : 'dark')
                                    }
                                    aria-label={t('submit_theme_preview_mode')}
                                >
                                    <SegmentedRadioGroup.Option
                                        value="dark"
                                        controlProps={{
                                            'aria-label': t('gallery_card_show_dark_aria'),
                                        }}
                                    >
                                        <Icon data={Moon} size={16} />
                                    </SegmentedRadioGroup.Option>
                                    <SegmentedRadioGroup.Option
                                        value="light"
                                        controlProps={{
                                            'aria-label': t('gallery_card_show_light_aria'),
                                        }}
                                    >
                                        <Icon data={Sun} size={16} />
                                    </SegmentedRadioGroup.Option>
                                </SegmentedRadioGroup>
                            </div>
                        </div>
                        <div className={b('preview-card')}>
                            <div className={b('preview-image')}>
                                {isOpen && (
                                    <ThemeCardLivePreview
                                        mode={previewMode}
                                        language={previewLanguage}
                                    />
                                )}
                            </div>
                            <div className={b('preview-details')} lang={previewLanguage}>
                                <Text variant="header-1" as="div">
                                    {draft.name.trim() ||
                                        t('submit_theme_name_label', {lng: previewLanguage})}
                                </Text>
                                <Text color="secondary" as="div" className={b('preview-author')}>
                                    {author}
                                </Text>
                                {description && (
                                    <Text
                                        color="secondary"
                                        as="p"
                                        className={b('preview-description')}
                                        lang={descriptionLanguage}
                                    >
                                        {description}
                                    </Text>
                                )}
                                {draft.tags.length > 0 && (
                                    <Flex gap={2} wrap className={b('preview-tags')}>
                                        {draft.tags.map((tag) => (
                                            <Label key={tag} size="m" theme="unknown">
                                                {t(TAG_LABEL_KEYS[tag], {lng: previewLanguage})}
                                            </Label>
                                        ))}
                                    </Flex>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={b('main')}>{main}</div>
                </div>
                {(showAccount || buttons) && (
                    <footer className={b('footer', {account: Boolean(showAccount)})}>
                        {showAccount && (
                            <div className={b('account')}>
                                <Icon data={githubIcon} size={16} />
                                <Text>{author}</Text>
                                <Button view="flat-secondary" size={controlSize} onClick={signOut}>
                                    {t('submit_theme_sign_out_btn')}
                                </Button>
                            </div>
                        )}
                        <div className={b('actions')}>{buttons}</div>
                    </footer>
                )}
            </div>
        </Modal>
    );
};
