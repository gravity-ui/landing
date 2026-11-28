import {ArrowUpRightFromSquare, CircleCheck, CodePullRequest} from '@gravity-ui/icons';
import {Alert, Flex, Icon, Link, Progress, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {SUBMISSION_STEP} from '../../../../api/themes/types';
import {block} from '../../../../utils/block';

import {ERROR_KEYS} from './submissionErrors';
import type {SubmissionErrorCode} from './useThemeSubmission';

const b = block('theme-submit');

const Heading: React.FC<{title: string; description?: string}> = ({title, description}) => {
    return (
        <div className={b('heading')}>
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
        </React.Fragment>
    );
};

interface SuccessContentProps {
    name: string;
    pullRequestUrl: string;
    pullRequestNumber: number;
}

export const SuccessContent: React.FC<SuccessContentProps> = ({
    name,
    pullRequestUrl,
    pullRequestNumber,
}) => {
    const {t} = useTranslation('themes');
    const repository = pullRequestUrl.match(/github\.com\/([^/]+\/[^/]+)\/pull\//)?.[1];

    return (
        <React.Fragment>
            <Flex alignItems="center" gap={3}>
                <Text color="positive">
                    <Icon data={CircleCheck} size={16} />
                </Text>
                <Text variant="header-1">{t('submit_theme_success_title')}</Text>
            </Flex>
            <Link href={pullRequestUrl} target="_blank" view="primary" className={b('pr-link')}>
                <Icon data={CodePullRequest} size={16} />
                <Flex direction="column" className={b('pr-text')}>
                    <Text variant="subheader-2">
                        {name.trim()
                            ? t('submit_theme_pr_title', {name: name.trim()})
                            : t('submit_theme_open_pr_btn')}
                    </Text>
                    <Text color="secondary">
                        {repository
                            ? `${repository} · #${pullRequestNumber}`
                            : `#${pullRequestNumber}`}
                    </Text>
                </Flex>
                <Icon data={ArrowUpRightFromSquare} size={16} />
            </Link>
            <Text color="secondary">{t('submit_theme_success_body')}</Text>
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
