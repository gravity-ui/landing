import {AIStudioChat, BaseMessageActionType, FeedbackForm} from '@gravity-ui/aikit';
import type {
    AIStudioChatProps,
    DefaultMessageAction,
    FeedbackOption,
    TAssistantMessage,
    TUserMessage,
} from '@gravity-ui/aikit';
import {useTranslation} from 'next-i18next';
import React, {memo, useMemo} from 'react';

import {block} from '../../utils';
import {PlaygroundWrap} from '../PlaygroundWrap';

import './AikitPlayground.scss';

const b = block('aikit-playground');

// AIStudioChat requires a fileUpload option even when attachments are not used.
// The attachment button is hidden via promptInputProps.footerProps.attachmentContent below.
const fileUpload: AIStudioChatProps['fileUpload'] = {
    upload: async (file) => ({id: file.name, name: file.name}),
};

function getAssistantText(content: TAssistantMessage['content']): string {
    if (typeof content === 'string') return content;
    if (Array.isArray(content)) {
        return content
            .map((part) => {
                if (typeof part === 'string') return part;
                if (part.type === 'text' && part.data?.text) return part.data.text;
                return '';
            })
            .join('\n');
    }
    if (content && content.type === 'text' && content.data?.text) {
        return content.data.text;
    }
    return '';
}

function copyText(text: string) {
    if (text) {
        navigator.clipboard.writeText(text);
    }
}

export const AikitPlayground = memo(() => {
    const {t} = useTranslation('aikit');

    const userActions = useMemo<DefaultMessageAction<TUserMessage>[]>(
        () => [
            {
                type: BaseMessageActionType.Copy,
                onClick: (message) => copyText(message.content),
            },
        ],
        [],
    );

    const assistantActions = useMemo<DefaultMessageAction<TAssistantMessage>[]>(
        () => [
            {
                type: BaseMessageActionType.Copy,
                onClick: (message) => copyText(getAssistantText(message.content)),
            },
            {
                type: BaseMessageActionType.Like,
                onClick: (message) => {
                    // eslint-disable-next-line no-console
                    console.log('AIKit feedback: like', {
                        messageId: message.id,
                        content: getAssistantText(message.content),
                    });
                },
            },
            {
                type: BaseMessageActionType.Dislike,
                onClick: (message) => {
                    // eslint-disable-next-line no-console
                    console.log('AIKit feedback: dislike', {
                        messageId: message.id,
                        content: getAssistantText(message.content),
                    });
                },
                popup: {
                    title: t('feedback.popupTitle'),
                    placement: 'bottom-start',
                    getContent: (message, ctx) => {
                        const options: FeedbackOption[] = [
                            {id: 'incorrect', label: t('feedback.reasonIncorrect')},
                            {id: 'incomplete', label: t('feedback.reasonIncomplete')},
                            {id: 'not-helpful', label: t('feedback.reasonNotHelpful')},
                            {id: 'other', label: t('feedback.reasonOther')},
                        ];

                        const handleSubmit = (reasons: string[], comment: string) => {
                            // eslint-disable-next-line no-console
                            console.log('AIKit feedback: dislike form submitted', {
                                messageId: message.id,
                                reasons,
                                comment,
                            });
                            ctx.setTitle(undefined);
                            ctx.setContent(<div>{t('feedback.thankYou')}</div>);
                            setTimeout(() => ctx.closePopup(), 2000);
                        };

                        return (
                            <FeedbackForm
                                options={options}
                                commentPlaceholder={t('feedback.commentPlaceholder')}
                                submitLabel={t('feedback.submit')}
                                onSubmit={handleSubmit}
                            />
                        );
                    },
                },
            },
        ],
        [t],
    );

    return (
        <PlaygroundWrap title={t('title')} libraryId="aikit" goToLibraryText={t('goToLibrary')}>
            <div className={b()}>
                <AIStudioChat
                    apiUrl="/api/chat"
                    fileUpload={fileUpload}
                    showClose={false}
                    showActionsOnHover
                    welcomeConfig={{
                        title: t('welcome.title'),
                        description: t('welcome.description'),
                        suggestions: [
                            {id: 'fakePost', title: t('welcome.suggestion_fakePost')},
                            {id: 'capabilities', title: t('welcome.suggestion_capabilities')},
                        ],
                    }}
                    texts={{
                        headerTitle: t('chat.title'),
                        emptyStateTitle: t('chat.emptyTitle'),
                        emptyStateDescription: t('chat.emptyDescription'),
                        promptPlaceholder: t('chat.placeholder'),
                        errorText: t('error.apiError'),
                    }}
                    messageListConfig={{
                        userActions,
                        assistantActions,
                    }}
                    promptInputProps={{
                        maxLength: 4000,
                        bodyProps: {
                            minRows: 1,
                            maxRows: 6,
                        },
                        footerProps: {
                            attachmentContent: false,
                        },
                    }}
                />
            </div>
        </PlaygroundWrap>
    );
});

AikitPlayground.displayName = 'AikitPlayground';
