import {FormRow} from '@gravity-ui/components';
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
import {useThemeCreator, useThemePaletteColor} from '../../hooks';
import {type SubmissionFieldErrors, validateSubmissionDraft} from '../../lib/submissionValidation';
import {isBuiltInFontFamily} from '../../lib/typography/utils';
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
    'receipt-expired': {
        title: 'submit_theme_error_receipt_title',
        message: 'submit_theme_error_receipt_expired_message',
    },
    'receipt-invalid': {
        title: 'submit_theme_error_receipt_title',
        message: 'submit_theme_error_receipt_invalid_message',
    },
    'dispatch-unconfirmed': {
        title: 'submit_theme_error_receipt_title',
        message: 'submit_theme_error_dispatch_unconfirmed_message',
    },
    'workflow-input-too-large': {
        title: 'submit_theme_error_invalid_title',
        message: 'submit_theme_error_workflow_input_message',
    },
    'name-taken': {
        title: 'submit_theme_error_name_taken_title',
        message: 'submit_theme_error_name_taken_message',
    },
    'rate-limit': {
        title: 'submit_theme_error_rate_limit_title',
        message: 'submit_theme_error_rate_limit_message',
    },
    preview: {
        title: 'submit_theme_error_preview_title',
        message: 'submit_theme_error_preview_message',
    },
    github: {
        title: 'submit_theme_error_github_title',
        message: 'submit_theme_error_github_message',
    },
    invalid: {
        title: 'submit_theme_error_invalid_title',
        message: 'submit_theme_error_invalid_message',
    },
    'invalid-metadata': {
        title: 'submit_theme_error_metadata_title',
        message: 'submit_theme_error_metadata_message',
    },
    storage: {
        title: 'submit_theme_error_storage_title',
        message: 'submit_theme_error_storage_message',
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
    fieldId: string;
    label: string;
    hint?: string;
    children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({fieldId, label, hint, children}) => (
    <FormRow
        direction="column"
        fieldId={fieldId}
        className={b('field')}
        label={<Text variant="subheader-2">{label}</Text>}
    >
        {children}
        {hint && (
            <Text variant="caption-2" color="secondary">
                {hint}
            </Text>
        )}
    </FormRow>
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
    hasCustomFont: boolean;
    fieldErrors: SubmissionFieldErrors;
    onChange: (patch: Partial<ThemeSubmissionDraft>) => void;
    onSignOut: () => void;
}

const FormContent: React.FC<FormContentProps> = ({
    user,
    draft,
    themeId,
    errorCode,
    forkUrl,
    hasCustomFont,
    fieldErrors,
    onChange,
    onSignOut,
}) => {
    const {t} = useTranslation('themes');
    const error = errorCode ? ERROR_KEYS[errorCode] : null;
    const fieldId = React.useId();
    const [touched, setTouched] = React.useState<
        Partial<Record<keyof ThemeSubmissionDraft, boolean>>
    >({});
    const fieldError = (field: keyof ThemeSubmissionDraft) => {
        const code = fieldErrors[field];
        if (
            !code ||
            (!touched[field] && !draft[field].length && errorCode !== 'invalid-metadata')
        ) {
            return undefined;
        }
        return t(`submit_theme_field_${field}_${code}`);
    };
    const touch = (field: keyof ThemeSubmissionDraft) =>
        setTouched((prev) => ({...prev, [field]: true}));
    const nameError =
        errorCode === 'name-taken'
            ? t('submit_theme_error_name_taken_message')
            : fieldError('name');
    const nameHint = themeId ? t('submit_theme_name_note', {id: themeId}) : undefined;

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
            {hasCustomFont && (
                <Alert
                    theme="warning"
                    title={t('submit_theme_custom_font_title')}
                    message={t('submit_theme_custom_font_message')}
                />
            )}
            <Field fieldId={`${fieldId}-name`} label={t('submit_theme_name_label')} hint={nameHint}>
                <TextInput
                    id={`${fieldId}-name`}
                    size="xl"
                    pin="round-round"
                    onBlur={() => touch('name')}
                    errorMessage={nameError}
                    value={draft.name}
                    placeholder={t('submit_theme_name_placeholder')}
                    onUpdate={(name) => onChange({name})}
                    controlProps={{maxLength: MAX_THEME_NAME_LENGTH}}
                    validationState={nameError ? 'invalid' : undefined}
                />
            </Field>
            <Field
                fieldId={`${fieldId}-descriptionEn`}
                label={t('submit_theme_description_en_label')}
            >
                <TextArea
                    className={b('textarea')}
                    size="xl"
                    minRows={2}
                    maxRows={4}
                    id={`${fieldId}-descriptionEn`}
                    onBlur={() => touch('descriptionEn')}
                    validationState={fieldError('descriptionEn') ? 'invalid' : undefined}
                    errorMessage={fieldError('descriptionEn')}
                    value={draft.descriptionEn}
                    placeholder={t('submit_theme_description_placeholder')}
                    onUpdate={(descriptionEn) => onChange({descriptionEn})}
                    controlProps={{maxLength: MAX_DESCRIPTION_LENGTH}}
                />
            </Field>
            <Field
                fieldId={`${fieldId}-descriptionRu`}
                label={t('submit_theme_description_ru_label')}
            >
                <TextArea
                    className={b('textarea')}
                    size="xl"
                    minRows={2}
                    maxRows={4}
                    id={`${fieldId}-descriptionRu`}
                    onBlur={() => touch('descriptionRu')}
                    validationState={fieldError('descriptionRu') ? 'invalid' : undefined}
                    errorMessage={fieldError('descriptionRu')}
                    value={draft.descriptionRu}
                    placeholder={t('submit_theme_description_ru_placeholder')}
                    onUpdate={(descriptionRu) => onChange({descriptionRu})}
                    controlProps={{maxLength: MAX_DESCRIPTION_LENGTH}}
                />
            </Field>
            <Field fieldId={`${fieldId}-tags`} label={t('submit_theme_tags_label')}>
                <Select
                    id={`${fieldId}-tags`}
                    aria-label={t('submit_theme_tags_label')}
                    size="xl"
                    pin="round-round"
                    width="max"
                    multiple
                    hasClear
                    validationState={fieldError('tags') ? 'invalid' : undefined}
                    errorMessage={fieldError('tags')}
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

    const [draft, setDraft] = React.useState<ThemeSubmissionDraft>(INITIAL_DRAFT);
    const {user, isUserLoading, state, preflight, retryValidation, signIn, signOut, submit, reset} =
        useThemeSubmission(isOpen, draft);
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

    const updateDraft = React.useCallback(
        (patch: Partial<ThemeSubmissionDraft>) => {
            reset();
            setDraft((prev) => {
                const next = {...prev, ...patch};
                saveSubmitDraft(next);
                return next;
            });
        },
        [reset],
    );

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
    const fieldErrors = validateSubmissionDraft(draft);
    const canRetryValidation = preflight.status === 'error' && preflight.code === 'github';
    const canSubmit =
        !Object.keys(fieldErrors).length &&
        !hasCustomFont &&
        (preflight.status === 'valid' || canRetryValidation);
    const checking = !Object.keys(fieldErrors).length && preflight.status === 'pending';
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
        let errorCode: SubmissionErrorCode | null = null;
        if (preflight.status === 'error') {
            errorCode = preflight.code || 'github';
        }
        if (state.status === 'error') {
            errorCode = state.code;
        }
        let buttonLabel = t('submit_theme_submit_btn');
        if (state.status === 'error' || canRetryValidation) {
            buttonLabel = t('submit_theme_retry_btn');
        }
        if (checking) {
            buttonLabel = t('submit_theme_checking');
        }
        main = (
            <FormContent
                user={user}
                draft={draft}
                themeId={themeId}
                errorCode={errorCode}
                forkUrl={state.status === 'error' ? state.forkUrl : undefined}
                hasCustomFont={hasCustomFont}
                fieldErrors={{
                    ...fieldErrors,
                    ...(preflight.status === 'error' ? preflight.fields : undefined),
                    ...(state.status === 'error' ? state.fields : undefined),
                }}
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
                loading={checking}
                onClick={() => (canRetryValidation ? retryValidation() : submit())}
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
