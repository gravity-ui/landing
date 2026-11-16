import {CircleInfo} from '@gravity-ui/icons';
import {Alert, Flex, Icon, Link, Progress, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {SUBMISSION_STEP} from '../../../../api/themes/types';
import {block} from '../../../../utils/block';

import {ERROR_KEYS} from './submissionErrors';
import type {SubmissionErrorCode} from './useThemeSubmission';

const b = block('theme-submit');

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

export const SignInContent: React.FC<{errorCode: SubmissionErrorCode | null}> = ({errorCode}) => {
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
}

export const SuccessContent: React.FC<SuccessContentProps> = ({pullRequestUrl}) => {
    const {t} = useTranslation('themes');

    return (
        <React.Fragment>
            <Heading
                title={t('submit_theme_success_title')}
                description={t('submit_theme_success_body')}
            />
            <Link href={pullRequestUrl} target="_blank" className={b('pr-link')}>
                {pullRequestUrl.replace(/^https:\/\//, '')}
            </Link>
        </React.Fragment>
    );
};

// Same control as the Interactive "Progress" card on the main page.
// Step indexes come from the submission job: 0 sending, 1 waiting for CI, 2 rendering, 3+ PR.
const PROGRESS_TITLE_KEYS: Record<number, string> = {
    [SUBMISSION_STEP.sending]: 'submit_theme_progress_sending',
    [SUBMISSION_STEP.waiting]: 'submit_theme_progress_starting',
    [SUBMISSION_STEP.rendering]: 'submit_theme_progress_previews',
};

export const ProgressWait: React.FC<{step: number; value: number}> = ({step, value}) => {
    const {t} = useTranslation('themes');
    const rendering = step === SUBMISSION_STEP.waiting || step === SUBMISSION_STEP.rendering;

    return (
        <React.Fragment>
            <Heading
                title={t(PROGRESS_TITLE_KEYS[step] ?? 'submit_theme_progress_pull_request')}
                description={rendering ? t('submit_theme_progress_previews_hint') : undefined}
            />
            <Progress value={value} size="s" className={b('progress')} />
        </React.Fragment>
    );
};
