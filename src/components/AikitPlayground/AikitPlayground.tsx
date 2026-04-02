import {AIStudioChat} from '@gravity-ui/aikit';
import {useTranslation} from 'next-i18next';
import React, {memo} from 'react';

import {block} from '../../utils';
import {PlaygroundWrap} from '../PlaygroundWrap';

import './AikitPlayground.scss';

const b = block('aikit-playground');

export const AikitPlayground = memo(() => {
    const {t} = useTranslation('aikit');

    return (
        <PlaygroundWrap title={t('title')} libraryId="aikit" goToLibraryText={t('goToLibrary')}>
            <div className={b()}>
                <AIStudioChat
                    apiUrl="/api/chat"
                    showClose={false}
                    welcomeConfig={{
                        title: t('welcome.title'),
                        description: t('welcome.description'),
                    }}
                    showActionsOnHover={true}
                    systemPrompt="You are a helpful AI assistant. Respond in the same language as the user message."
                    i18nConfig={{
                        header: {
                            defaultTitle: t('chat.title'),
                        },
                        emptyState: {
                            title: t('chat.emptyTitle'),
                            description: t('chat.emptyDescription'),
                        },
                        promptInput: {
                            placeholder: t('chat.placeholder'),
                        },
                    }}
                    promptInputProps={{
                        maxLength: 4000,
                        bodyProps: {
                            minRows: 1,
                            maxRows: 6,
                        },
                    }}
                />
            </div>
        </PlaygroundWrap>
    );
});

AikitPlayground.displayName = 'AikitPlayground';
