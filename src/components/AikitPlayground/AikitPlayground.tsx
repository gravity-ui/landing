import {ChatContainer, useOpenAIStreamAdapter} from '@gravity-ui/aikit';
import type {
    ChatStatus,
    TAssistantMessage,
    TChatMessage,
    TSubmitData,
    TUserMessage,
} from '@gravity-ui/aikit';
import {useTranslation} from 'next-i18next';
import React, {memo, useCallback, useState} from 'react';

import {block} from '../../utils';
import {PlaygroundWrap} from '../PlaygroundWrap';

import './AikitPlayground.scss';

const b = block('aikit-playground');

/**
 * API message type
 */
type ApiMessage = {
    role: 'user' | 'assistant' | 'system';
    content: string;
};

/** Stream options for useOpenAIStreamAdapter: initialMessages and assistantMessageId are set when the request starts. */
type StreamOptions = {
    initialMessages: TChatMessage[];
    assistantMessageId: string;
};

/**
 * Extracts text content from chat message
 */
function getMessageContent(message: TChatMessage): string {
    if (message.role === 'user') {
        return message.content;
    }

    const {content} = message;

    if (typeof content === 'string') {
        return content;
    }

    if (Array.isArray(content)) {
        return content
            .map((item) => {
                if (typeof item === 'string') return item;
                if (item.type === 'text' && item.data?.text) return item.data.text;
                return '';
            })
            .join('\n');
    }

    if (content && typeof content === 'object' && 'type' in content) {
        if (content.type === 'text' && content.data?.text) {
            return content.data.text;
        }
    }

    return '';
}

const getChatStatus = (hasResponse: boolean, isFetching: boolean, status: string): ChatStatus => {
    if (!hasResponse) {
        return isFetching ? 'submitted' : 'ready';
    }
    if (status === 'streaming') return 'streaming';
    if (status === 'error') return 'error';
    return 'ready';
};

/**
 * AIKit Playground component
 * Uses /api/chat endpoint for OpenAI interaction and useOpenAIStreamAdapter for response handling
 */
export const AikitPlayground = memo(() => {
    const {t} = useTranslation('aikit');

    const [messages, setMessages] = useState<TChatMessage[]>([]);
    const [controller, setController] = useState<AbortController | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [streamResponse, setStreamResponse] = useState<Response | null>(null);
    const [streamOptions, setStreamOptions] = useState<StreamOptions | null>(null);

    const handleStreamEnd = useCallback((finalMessages: TChatMessage[]) => {
        // Drop assistant messages with empty content (stream adapter may leave a placeholder)
        const committed = finalMessages.filter(
            (msg) => msg.role !== 'assistant' || getMessageContent(msg) !== '',
        );

        setMessages(committed);
        setStreamResponse(null);
        setStreamOptions(null);
    }, []);

    const streamResult = useOpenAIStreamAdapter(streamResponse, {
        initialMessages: streamOptions?.initialMessages ?? [],
        assistantMessageId: streamOptions?.assistantMessageId ?? 'assistant-idle',
        onStreamEnd: handleStreamEnd,
    });

    const hasResponse = Boolean(streamResponse);
    const displayMessages =
        hasResponse && streamResult.messages.length > 0 ? streamResult.messages : messages;
    const chatStatus = getChatStatus(hasResponse, isFetching, streamResult.status);

    /**
     * Message send handler
     * Passes fetch Response to useOpenAIStreamAdapter; all stream parsing is done in the hook
     */
    const handleSendMessage = useCallback(
        async (data: TSubmitData) => {
            const userMessage: TUserMessage = {
                id: Date.now().toString(),
                role: 'user',
                content: data.content,
            };
            const initialMessages: TChatMessage[] = [...messages, userMessage];
            const assistantMessageId = (Date.now() + 1).toString();

            setMessages(initialMessages);
            setIsFetching(true);

            const abortController = new AbortController();
            setController(abortController);

            try {
                const apiMessages: ApiMessage[] = [
                    {
                        role: 'system',
                        content:
                            'You are a helpful AI assistant. Respond in the same language as the user message.',
                    },
                    ...messages
                        .filter((msg) => msg.role !== 'assistant' || getMessageContent(msg) !== '')
                        .map((msg) => ({
                            role: msg.role as 'user' | 'assistant',
                            content: getMessageContent(msg),
                        })),
                    {role: 'user' as const, content: data.content},
                ];

                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'text/event-stream',
                    },
                    body: JSON.stringify({messages: apiMessages}),
                    signal: abortController.signal,
                });

                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }

                if (!response.body) {
                    throw new Error('No response body');
                }

                // Set stream and options in one tick so the hook never sees new options with stream=null
                setStreamResponse(response);
                setStreamOptions({initialMessages, assistantMessageId});
            } catch (error) {
                if ((error as Error).name !== 'AbortError') {
                    // eslint-disable-next-line no-console
                    console.error('Chat error:', error);

                    const errorMessage: TAssistantMessage = {
                        id: (Date.now() + 2).toString(),
                        role: 'assistant',
                        content: t('error.apiError'),
                    };
                    setMessages((prev) => {
                        const filtered = prev.filter(
                            (msg) => msg.role !== 'assistant' || msg.content !== '',
                        );
                        return [...filtered, errorMessage];
                    });
                }
                setStreamResponse(null);
                setStreamOptions(null);
            } finally {
                setIsFetching(false);
                setController(null);
            }
        },
        [messages, t],
    );

    const handleCancel = useCallback(async () => {
        controller?.abort();
        setStreamResponse(null);
        setStreamOptions(null);
    }, [controller]);

    return (
        <PlaygroundWrap title={t('title')} libraryId="aikit" goToLibraryText={t('goToLibrary')}>
            <div className={b()}>
                <ChatContainer
                    showHistory={false}
                    showNewChat={false}
                    showClose={false}
                    welcomeConfig={{
                        title: t('welcome.title'),
                        description: t('welcome.description'),
                    }}
                    showActionsOnHover={true}
                    messages={displayMessages}
                    onSendMessage={handleSendMessage}
                    onCancel={handleCancel}
                    status={chatStatus}
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
