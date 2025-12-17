import type {NextApiRequest, NextApiResponse} from 'next';
import OpenAI from 'openai';

/**
 * Конфигурация API route для поддержки streaming
 */
export const config = {
    api: {
        // Отключаем буферизацию ответа
        responseLimit: false,
    },
};

/**
 * Тип сообщения в чате
 */
export type ChatMessage = {
    role: 'user' | 'assistant' | 'system';
    content: string;
};

/**
 * Тело запроса к API чата
 */
type ChatRequestBody = {
    messages: ChatMessage[];
    model?: string;
};

const YANDEX_CLOUD_FOLDER = process.env.YANDEX_CLOUD_FOLDER;
const YANDEX_CLOUD_API_KEY = process.env.YANDEX_CLOUD_API_KEY;

const YANDEX_CLOUD_MODEL = 'aliceai-llm/latest';
const MODEL = `gpt://${YANDEX_CLOUD_FOLDER}/${YANDEX_CLOUD_MODEL}`;
const SYSTEM_PROMPT =
    'You are a helpful AI assistant. Respond in the same language as the user message.';

/**
 * API endpoint для взаимодействия с Yandex Cloud AI
 * Использует OpenAI-совместимый API со streaming
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Разрешаем только POST запросы
    if (req.method !== 'POST') {
        return res.status(405).json({error: 'Method not allowed'});
    }

    try {
        // eslint-disable-next-line no-console
        console.log('MODEL', MODEL);

        const {messages, model = MODEL} = req.body as ChatRequestBody;

        // Проверяем наличие сообщений
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({error: 'Messages are required'});
        }

        const openai = new OpenAI({
            apiKey: YANDEX_CLOUD_API_KEY,
            baseURL: 'https://rest-assistant.api.cloud.yandex.net/v1',
            defaultHeaders: {
                'OpenAI-Project': YANDEX_CLOUD_FOLDER,
            },
        });

        // Настраиваем заголовки для SSE
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders();

        // Фильтруем системные сообщения из input (они идут в instructions)
        const inputMessages = messages.filter((msg) => msg.role !== 'system');

        // Создаём streaming запрос через Responses API
        const events = await openai.responses.create({
            model,
            input: inputMessages,
            instructions: SYSTEM_PROMPT,
            stream: true,
        });

        // Обрабатываем поток событий
        for await (const event of events) {
            // Отправляем все события клиенту
            const data = JSON.stringify({
                event: event.type,
                data: event,
            });
            res.write(`data: ${data}\n\n`);

            // Принудительно сбрасываем буфер (если доступен метод flush)
            const resWithFlush = res as unknown as {flush?: () => void};
            if (typeof resWithFlush.flush === 'function') {
                resWithFlush.flush();
            }
        }

        // Сигнализируем о завершении потока
        res.write('data: [DONE]\n\n');
        return res.end();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error in chat API:', error);

        // Если заголовки ещё не отправлены, отправляем JSON ошибку
        if (!res.headersSent) {
            return res.status(500).json({
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }

        // Если streaming уже начался, отправляем ошибку через SSE
        res.write(
            `data: ${JSON.stringify({
                error: error instanceof Error ? error.message : 'Unknown error',
            })}\n\n`,
        );
        return res.end();
    }
}
