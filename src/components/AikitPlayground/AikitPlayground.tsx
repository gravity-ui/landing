import {ChatContainer} from '@gravity-ui/aikit';
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
 * Тип сообщения для API
 */
type ApiMessage = {
    role: 'user' | 'assistant' | 'system';
    content: string;
};

/**
 * Тип события из Responses API
 */
type ResponseEvent = {
    event: string;
    data: {
        type: string;
        delta?: string;
        text?: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
    };
    error?: string;
};

/**
 * Парсит данные из SSE потока
 */
function parseStreamData(line: string): ResponseEvent | null {
    try {
        return JSON.parse(line.slice(6)) as ResponseEvent;
    } catch {
        return null;
    }
}

/**
 * Извлекает текст из события Responses API
 */
function extractTextFromEvent(event: ResponseEvent): string | null {
    // Обрабатываем события с текстовыми дельтами
    const isOutputTextDelta =
        event.event === 'response.output_text.delta' ||
        event.data?.type === 'response.output_text.delta';

    if (isOutputTextDelta) {
        return event.data?.delta || null;
    }

    // Обрабатываем события контента
    const isContentPartDelta =
        event.event === 'response.content_part.delta' ||
        event.data?.type === 'response.content_part.delta';

    if (isContentPartDelta) {
        return event.data?.delta || null;
    }

    // Fallback для старого формата
    if (event.event === 'content' && event.data?.content) {
        return event.data.content;
    }

    return null;
}

/**
 * Извлекает текстовое содержимое из сообщения чата
 */
function getMessageContent(message: TChatMessage): string {
    if (message.role === 'user') {
        return message.content;
    }

    // Для assistant сообщений content может быть разных типов
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

/**
 * Компонент Playground для демонстрации AIKit
 * Использует API endpoint /api/chat для взаимодействия с OpenAI
 */
export const AikitPlayground = memo(() => {
    const {t} = useTranslation('aikit');

    const [messages, setMessages] = useState<TChatMessage[]>([]);
    const [status, setStatus] = useState<ChatStatus>('ready');
    const [controller, setController] = useState<AbortController | null>(null);

    /**
     * Обработчик отправки сообщения
     * Поддерживает streaming ответов от API
     */
    const handleSendMessage = useCallback(
        async (data: TSubmitData) => {
            // Добавляем сообщение пользователя
            const userMessage: TUserMessage = {
                id: Date.now().toString(),
                role: 'user',
                content: data.content,
            };
            setMessages((prev) => [...prev, userMessage]);

            // Запускаем streaming
            setStatus('submitted');
            const abortController = new AbortController();
            setController(abortController);

            try {
                // Формируем историю сообщений для API
                const apiMessages: ApiMessage[] = [
                    {
                        role: 'system',
                        content:
                            'You are a helpful AI assistant. Respond in the same language as the user message.',
                    },
                    ...messages.map((msg) => ({
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

                const reader = response.body?.getReader();
                if (!reader) {
                    throw new Error('No response body');
                }

                const decoder = new TextDecoder();

                // ID сообщения ассистента для обновления
                const assistantMessageId = (Date.now() + 1).toString();

                // Добавляем пустое сообщение ассистента
                setMessages((prev) => [
                    ...prev,
                    {
                        id: assistantMessageId,
                        role: 'assistant',
                        content: '',
                    } as TAssistantMessage,
                ]);

                let buffer = '';
                // Локальная переменная для накопления текста
                let accumulatedContent = '';

                setStatus('streaming');
                // Читаем поток данных
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    const {done, value} = await reader.read();

                    if (done) {
                        break;
                    }

                    buffer += decoder.decode(value, {stream: true});
                    const lines = buffer.split('\n');
                    buffer = lines.pop() || '';

                    for (const line of lines) {
                        const trimmedLine = line.trim();

                        if (trimmedLine === 'data: [DONE]') {
                            continue;
                        }

                        if (!trimmedLine.startsWith('data: ')) {
                            continue;
                        }

                        const parsedEvent = parseStreamData(trimmedLine);
                        if (!parsedEvent) continue;

                        if (parsedEvent.error) {
                            throw new Error(parsedEvent.error);
                        }

                        const textContent = extractTextFromEvent(parsedEvent);
                        if (textContent) {
                            // Накапливаем текст в локальной переменной
                            accumulatedContent += textContent;
                            // Копируем значение для замыкания
                            const newContent = accumulatedContent;

                            setMessages((prev) => {
                                return prev.map((msg): TChatMessage => {
                                    if (msg.id === assistantMessageId && msg.role === 'assistant') {
                                        return {
                                            ...msg,
                                            content: newContent,
                                        } as TAssistantMessage;
                                    }
                                    return msg;
                                });
                            });
                        }
                    }
                }
            } catch (error) {
                if ((error as Error).name !== 'AbortError') {
                    // eslint-disable-next-line no-console
                    console.error('Chat error:', error);

                    // Добавляем сообщение об ошибке
                    const errorMessage: TAssistantMessage = {
                        id: (Date.now() + 2).toString(),
                        role: 'assistant',
                        content: t('error.apiError'),
                    };

                    setMessages((prev) => {
                        // Удаляем пустое сообщение ассистента, если оно есть
                        const filtered = prev.filter(
                            (msg) => msg.role !== 'assistant' || msg.content !== '',
                        );
                        return [...filtered, errorMessage];
                    });
                }
            } finally {
                setStatus('ready');
                setController(null);
            }
        },
        [messages, t],
    );

    /**
     * Обработчик отмены запроса
     */
    const handleCancel = useCallback(async () => {
        controller?.abort();
        setStatus('ready');
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
                    messages={messages}
                    onSendMessage={handleSendMessage}
                    onCancel={handleCancel}
                    status={status}
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
