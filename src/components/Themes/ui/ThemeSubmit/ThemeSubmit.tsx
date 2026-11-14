import {ArrowUpRightFromSquare, CircleInfo} from '@gravity-ui/icons';
import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {
    Alert,
    Avatar,
    Button,
    Flex,
    Icon,
    Link,
    Loader,
    Progress,
    Select,
    Text,
    TextArea,
    TextInput,
} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {useWindowBreakpoint} from 'src/hooks/useWindowBreakpoint';

import {
    MAX_DESCRIPTION_LENGTH,
    MAX_TAGS,
    MAX_THEME_NAME_LENGTH,
} from '../../../../api/themes/config';
import githubIcon from '../../../../assets/icons/github.svg';
import {block} from '../../../../utils/block';
import {THEME_TAGS, type ThemeMetadata, type ThemeTag} from '../../gallery';
import {toThemeId} from '../../gallery/schema';
import {useThemePaletteColor} from '../../hooks';
import {ThemeActionDialog} from '../ThemeActionDialog/ThemeActionDialog';
import {ThemeActionSheet} from '../ThemeActionSheet/ThemeActionSheet';
import {TAG_LABEL_KEYS, ThemeCard} from '../ThemeCard/ThemeCard';

import {ThemeCardLivePreview} from './ThemeCardLivePreview';
import './ThemeSubmit.scss';
import {clearSubmitDraft, loadSubmitDraft, saveSubmitDraft} from './submitReturn';
import {
    type GithubUser,
    type SubmissionErrorCode,
    type ThemeSubmissionDraft,
    useThemeSubmission,
} from './useThemeSubmission';

const b = block('theme-submit');

const ERROR_KEYS: Record<SubmissionErrorCode, {title: string; message: string}> = {
    'name-taken': {
        title: 'submit_theme_error_name_taken_title',
        message: 'submit_theme_error_name_taken_message',
    },
    'rate-limit': {
        title: 'submit_theme_error_rate_limit_title',
        message: 'submit_theme_error_rate_limit_message',
    },
    github: {
        title: 'submit_theme_error_github_title',
        message: 'submit_theme_error_github_message',
    },
    invalid: {
        title: 'submit_theme_error_invalid_title',
        message: 'submit_theme_error_invalid_message',
    },
    'sign-in': {
        title: 'submit_theme_error_sign_in_title',
        message: 'submit_theme_error_sign_in_message',
    },
    'fork-outdated': {
        title: 'submit_theme_error_fork_outdated_title',
        message: 'submit_theme_error_fork_outdated_message',
    },
    'session-expired': {
        title: 'submit_theme_error_session_expired_title',
        message: 'submit_theme_error_session_expired_message',
    },
};

const INITIAL_DRAFT: ThemeSubmissionDraft = {
    name: '',
    descriptionEn: '',
    descriptionRu: '',
    tags: [],
};

interface FieldProps {
    label: string;
    hint?: string;
    children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({label, hint, children}) => (
    <div className={b('field')}>
        <Text variant="subheader-2">{label}</Text>
        {children}
        {hint && (
            <Text variant="caption-2" color="secondary">
                {hint}
            </Text>
        )}
    </div>
);

const Heading: React.FC<{title: string; description?: string}> = ({title, description}) => {
    const {t} = useTranslation('themes');

    return (
        <div className={b('heading')}>
            <span className={b('overline')}>{t('submit_theme_overline')}</span>
            <Text variant="header-1">{title}</Text>
            {description && (
                <Text variant="body-2" color="secondary">
                    {description}
                </Text>
            )}
        </div>
    );
};

const SignInContent: React.FC<{errorCode: SubmissionErrorCode | null}> = ({errorCode}) => {
    const {t} = useTranslation('themes');
    const error = errorCode ? ERROR_KEYS[errorCode] : null;

    return (
        <React.Fragment>
            <Heading
                title={t('submit_theme_sign_in_title')}
                description={t('submit_theme_sign_in_body')}
            />
            {error && <Alert theme="danger" title={t(error.title)} message={t(error.message)} />}
            <Flex gap={2} alignItems="flex-start" className={b('note')}>
                <Icon data={CircleInfo} size={16} />
                <Text variant="body-1" color="secondary">
                    {t('submit_theme_permissions_note')}
                </Text>
            </Flex>
        </React.Fragment>
    );
};

interface SuccessContentProps {
    pullRequestUrl: string;
    pullRequestNumber: number;
}

const SuccessContent: React.FC<SuccessContentProps> = ({pullRequestUrl, pullRequestNumber}) => {
    const {t} = useTranslation('themes');

    return (
        <React.Fragment>
            <Heading
                title={t('submit_theme_success_title')}
                description={t('submit_theme_success_body')}
            />
            <Link href={pullRequestUrl} target="_blank" className={b('pr-link')}>
                github.com/gravity-ui/landing/pull/{pullRequestNumber}
            </Link>
        </React.Fragment>
    );
};

// Same control as the Interactive "Progress" card on the main page.
const ProgressWait: React.FC<{value: number}> = ({value}) => {
    const {t} = useTranslation('themes');

    return (
        <React.Fragment>
            <Heading title={t('submit_theme_progress_title')} />
            <Progress value={value} size="s" className={b('progress')} />
        </React.Fragment>
    );
};

interface FormContentProps {
    user: GithubUser;
    draft: ThemeSubmissionDraft;
    themeId: string;
    errorCode: SubmissionErrorCode | null;
    forkUrl?: string;
    onChange: (patch: Partial<ThemeSubmissionDraft>) => void;
    onSignOut: () => void;
}

const FormContent: React.FC<FormContentProps> = ({
    user,
    draft,
    themeId,
    errorCode,
    forkUrl,
    onChange,
    onSignOut,
}) => {
    const {t} = useTranslation('themes');
    const error = errorCode ? ERROR_KEYS[errorCode] : null;
    // A name without letters or digits gives no id, so the submit button stays off.
    const isNameWithoutId = Boolean(draft.name.trim()) && !themeId;

    let nameHint: string | undefined;
    if (themeId) {
        nameHint = t('submit_theme_name_note', {id: themeId});
    } else if (isNameWithoutId) {
        nameHint = t('submit_theme_name_no_id');
    }

    return (
        <React.Fragment>
            <Flex alignItems="center" justifyContent="space-between" gap={2}>
                <Flex alignItems="center" gap={2}>
                    <Avatar imgUrl={user.avatarUrl} size="m" />
                    <Flex direction="column">
                        <Text variant="subheader-1">{user.name}</Text>
                        <Text variant="caption-2" color="secondary">
                            @{user.login}
                        </Text>
                    </Flex>
                </Flex>
                <Button view="flat-secondary" size="m" onClick={onSignOut}>
                    {t('submit_theme_sign_out_btn')}
                </Button>
            </Flex>
            {error && (
                <Alert
                    theme="danger"
                    title={t(error.title)}
                    message={t(error.message)}
                    actions={
                        forkUrl ? (
                            <Button view="normal" href={forkUrl} target="_blank">
                                {t('submit_theme_open_fork_btn')}
                                <Icon data={ArrowUpRightFromSquare} size={14} />
                            </Button>
                        ) : undefined
                    }
                />
            )}
            <Field label={t('submit_theme_name_label')} hint={nameHint}>
                <TextInput
                    size="xl"
                    pin="round-round"
                    value={draft.name}
                    placeholder={t('submit_theme_name_placeholder')}
                    onUpdate={(name) => onChange({name})}
                    controlProps={{maxLength: MAX_THEME_NAME_LENGTH}}
                    validationState={
                        errorCode === 'name-taken' || isNameWithoutId ? 'invalid' : undefined
                    }
                />
            </Field>
            <Field label={t('submit_theme_description_en_label')}>
                <TextArea
                    className={b('textarea')}
                    size="xl"
                    minRows={2}
                    maxRows={4}
                    value={draft.descriptionEn}
                    placeholder={t('submit_theme_description_placeholder')}
                    onUpdate={(descriptionEn) => onChange({descriptionEn})}
                    controlProps={{maxLength: MAX_DESCRIPTION_LENGTH}}
                />
            </Field>
            <Field label={t('submit_theme_description_ru_label')}>
                <TextArea
                    className={b('textarea')}
                    size="xl"
                    minRows={2}
                    maxRows={4}
                    value={draft.descriptionRu}
                    placeholder={t('submit_theme_description_ru_placeholder')}
                    onUpdate={(descriptionRu) => onChange({descriptionRu})}
                    controlProps={{maxLength: MAX_DESCRIPTION_LENGTH}}
                />
            </Field>
            <Field label={t('submit_theme_tags_label')}>
                <Select
                    size="xl"
                    pin="round-round"
                    width="max"
                    multiple
                    hasClear
                    value={draft.tags}
                    placeholder={t('submit_theme_tags_placeholder')}
                    onUpdate={(tags) => onChange({tags: tags.slice(0, MAX_TAGS) as ThemeTag[]})}
                    options={THEME_TAGS.map((tag) => ({
                        value: tag,
                        content: t(TAG_LABEL_KEYS[tag]),
                    }))}
                />
            </Field>
        </React.Fragment>
    );
};

export interface ThemeSubmitProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ThemeSubmit: React.FC<ThemeSubmitProps> = ({isOpen, onClose}) => {
    const {t} = useTranslation('themes');
    const breakpoint = useWindowBreakpoint();
    const isDesktop = breakpoint >= BREAKPOINTS.sm;

    const {user, isUserLoading, state, signIn, signOut, submit, reset} = useThemeSubmission(isOpen);
    const [draft, setDraft] = React.useState<ThemeSubmissionDraft>(INITIAL_DRAFT);
    const [brandColor] = useThemePaletteColor({token: 'brand', theme: 'light'});

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

    const updateDraft = React.useCallback((patch: Partial<ThemeSubmissionDraft>) => {
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
    const canSubmit = Boolean(themeId && draft.descriptionEn.trim());
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

    const handleClose = () => {
        if (state.status === 'submitting') {
            return;
        }
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
        main = (
            <SuccessContent
                pullRequestUrl={state.pullRequestUrl}
                pullRequestNumber={state.pullRequestNumber}
            />
        );
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
        main = (
            <FormContent
                user={user}
                draft={draft}
                themeId={themeId}
                errorCode={state.status === 'error' ? state.code : null}
                forkUrl={state.status === 'error' ? state.forkUrl : undefined}
                onChange={updateDraft}
                onSignOut={signOut}
            />
        );
        buttons = (
            <Button
                view="action"
                pin="round-round"
                size="xl"
                disabled={!canSubmit}
                onClick={() => submit(draft)}
                className={actionClassName}
            >
                {state.status === 'error'
                    ? t('submit_theme_retry_btn')
                    : t('submit_theme_submit_btn')}
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
        <ThemeActionDialog
            open={isOpen}
            onClose={handleClose}
            breakpoint={breakpoint}
            title={t('submit_theme_title')}
            bottomContent={
                <Flex
                    gap={2}
                    width="100%"
                    justifyContent="flex-end"
                    className={b('dialog-buttons')}
                >
                    {buttons}
                </Flex>
            }
        >
            {content}
        </ThemeActionDialog>
    ) : (
        <ThemeActionSheet
            open={isOpen}
            onClose={handleClose}
            title={t('submit_theme_title')}
            bottomContentWrapperClassName={b('sheet-buttons')}
            bottomContent={buttons}
        >
            {content}
        </ThemeActionSheet>
    );
};
