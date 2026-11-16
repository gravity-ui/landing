import {FormRow} from '@gravity-ui/components';
import {ArrowUpRightFromSquare} from '@gravity-ui/icons';
import {
    Alert,
    Avatar,
    Button,
    Flex,
    Icon,
    Select,
    Text,
    TextArea,
    TextInput,
} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {
    MAX_DESCRIPTION_LENGTH,
    MAX_TAGS,
    MAX_THEME_NAME_LENGTH,
} from '../../../../api/themes/types';
import {block} from '../../../../utils/block';
import {THEME_TAGS, type ThemeTag} from '../../gallery';
import type {SubmissionDraft, SubmissionFieldErrors} from '../../lib/submissionValidation';
import {TAG_LABEL_KEYS} from '../ThemeCard/ThemeCard';

import {ERROR_KEYS} from './submissionErrors';
import type {GithubUser, SubmissionErrorCode} from './useThemeSubmission';

const b = block('theme-submit');

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

interface FormContentProps {
    user: GithubUser;
    draft: SubmissionDraft;
    themeId: string;
    errorCode: SubmissionErrorCode | null;
    forkUrl?: string;
    hasCustomFont: boolean;
    fieldErrors: SubmissionFieldErrors;
    onChange: (patch: Partial<SubmissionDraft>) => void;
    onSignOut: () => void;
}

export const FormContent: React.FC<FormContentProps> = ({
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
    const [touched, setTouched] = React.useState<Partial<Record<keyof SubmissionDraft, boolean>>>(
        {},
    );
    const fieldError = (field: keyof SubmissionDraft) => {
        const code = fieldErrors[field];
        if (
            !code ||
            (!touched[field] && !draft[field].length && errorCode !== 'invalid-metadata')
        ) {
            return undefined;
        }
        return t(`submit_theme_field_${field}_${code}`);
    };
    const touch = (field: keyof SubmissionDraft) =>
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
