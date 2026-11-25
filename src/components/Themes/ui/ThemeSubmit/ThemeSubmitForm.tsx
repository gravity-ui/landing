import {ArrowUpRightFromSquare, Check} from '@gravity-ui/icons';
import {Alert, Button, Flex, Icon, Text, TextArea, TextInput} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {
    MAX_DESCRIPTION_LENGTH,
    MAX_TAGS,
    MAX_THEME_NAME_LENGTH,
} from '../../../../api/themes/types';
import {block} from '../../../../utils/block';
import {THEME_TAGS} from '../../gallery';
import type {SubmissionDraft, SubmissionFieldErrors} from '../../lib/submissionValidation';
import {TAG_LABEL_KEYS} from '../ThemeCard/ThemeCard';

import {ERROR_KEYS} from './submissionErrors';
import type {SubmissionErrorCode} from './useThemeSubmission';

const b = block('theme-submit');

interface FieldProps {
    fieldId: string;
    label: string;
    annotation?: string;
    children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({fieldId, label, annotation, children}) => (
    <div className={b('field')}>
        <label htmlFor={fieldId} className={b('field-label')}>
            <Text variant="subheader-1">{label}</Text>
            {annotation && (
                <Text color="secondary" variant="caption-2">
                    {annotation}
                </Text>
            )}
        </label>
        {children}
    </div>
);

interface ThemeSubmitFormProps {
    size: 'l' | 'xl';
    draft: SubmissionDraft;
    errorCode: SubmissionErrorCode | null;
    forkUrl?: string;
    hasCustomFont: boolean;
    fieldErrors: SubmissionFieldErrors;
    isRenderedVersionStale: boolean;
    onChange: (patch: Partial<SubmissionDraft>) => void;
    onStartOver: () => void;
}

export const ThemeSubmitForm: React.FC<ThemeSubmitFormProps> = ({
    size,
    draft,
    errorCode,
    forkUrl,
    hasCustomFont,
    fieldErrors,
    isRenderedVersionStale,
    onChange,
    onStartOver,
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
        errorCode === 'name-taken' ? t('submit_theme_field_name_name-taken') : fieldError('name');

    return (
        <React.Fragment>
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
            {isRenderedVersionStale && (
                <Alert
                    theme="warning"
                    title={t('submit_theme_rendered_version_title')}
                    message={t('submit_theme_rendered_version_message')}
                    actions={
                        <Button view="normal" onClick={onStartOver}>
                            {t('submit_theme_start_over_btn')}
                        </Button>
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
            <Field fieldId={`${fieldId}-name`} label={t('submit_theme_name_label')}>
                <TextInput
                    id={`${fieldId}-name`}
                    className={b('name-input')}
                    size={size}
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
                    size={size}
                    rows={3}
                    id={`${fieldId}-descriptionEn`}
                    onBlur={() => touch('descriptionEn')}
                    validationState={fieldError('descriptionEn') ? 'invalid' : undefined}
                    errorMessage={fieldError('descriptionEn')}
                    value={draft.descriptionEn}
                    placeholder={t('submit_theme_description_placeholder')}
                    onUpdate={(descriptionEn) => onChange({descriptionEn})}
                    controlProps={{
                        className: b('textarea-control'),
                        maxLength: MAX_DESCRIPTION_LENGTH,
                    }}
                />
            </Field>
            <Field
                fieldId={`${fieldId}-descriptionRu`}
                label={t('submit_theme_description_ru_label')}
                annotation={t('submit_theme_optional')}
            >
                <TextArea
                    className={b('textarea')}
                    size={size}
                    rows={3}
                    id={`${fieldId}-descriptionRu`}
                    onBlur={() => touch('descriptionRu')}
                    validationState={fieldError('descriptionRu') ? 'invalid' : undefined}
                    errorMessage={fieldError('descriptionRu')}
                    value={draft.descriptionRu}
                    placeholder={t('submit_theme_description_ru_placeholder')}
                    onUpdate={(descriptionRu) => onChange({descriptionRu})}
                    controlProps={{
                        className: b('textarea-control'),
                        maxLength: MAX_DESCRIPTION_LENGTH,
                    }}
                />
            </Field>
            <div role="group" aria-labelledby={`${fieldId}-tags`} className={b('field')}>
                <Flex justifyContent="space-between" gap={2}>
                    <Text id={`${fieldId}-tags`} variant="subheader-1">
                        {t('submit_theme_tags_label')}
                    </Text>
                    <Text color="secondary" variant="caption-2">
                        {t('submit_theme_tags_count', {count: draft.tags.length, max: MAX_TAGS})}
                    </Text>
                </Flex>
                <Flex wrap className={b('tag-list')}>
                    {THEME_TAGS.map((tag) => {
                        const selected = draft.tags.includes(tag);
                        return (
                            <Button
                                key={tag}
                                size={size}
                                view="normal"
                                className={b('tag', {selected})}
                                selected={selected}
                                aria-pressed={selected}
                                disabled={!selected && draft.tags.length >= MAX_TAGS}
                                onClick={() =>
                                    onChange({
                                        tags: selected
                                            ? draft.tags.filter((value) => value !== tag)
                                            : [...draft.tags, tag],
                                    })
                                }
                            >
                                {selected && <Icon data={Check} size={14} />}
                                {t(TAG_LABEL_KEYS[tag])}
                            </Button>
                        );
                    })}
                </Flex>
                {fieldError('tags') && <Text color="danger">{fieldError('tags')}</Text>}
            </div>
        </React.Fragment>
    );
};
