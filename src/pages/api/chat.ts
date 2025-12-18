import type {NextApiRequest, NextApiResponse} from 'next';
import OpenAI from 'openai';

/**
 * API route configuration to support streaming
 */
export const config = {
    api: {
        // Disable response buffering
        responseLimit: false,
    },
};

/**
 * Chat message type
 */
export type ChatMessage = {
    role: 'user' | 'assistant' | 'system';
    content: string;
};

/**
 * Chat API request body
 */
type ChatRequestBody = {
    messages: ChatMessage[];
};

const API_KEY = process.env.OPENAI_API_KEY;

const MODEL = process.env.OPENAI_MODEL;
const SYSTEM_PROMPT =
    'You are a helpful AI assistant. Respond in the same language as the user message.';

/**
 * API endpoint for Yandex Cloud AI interaction
 * Uses OpenAI-compatible API with streaming
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({error: 'Method not allowed'});
    }

    try {
        const {messages} = req.body as ChatRequestBody;

        // Validate messages
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({error: 'Messages are required'});
        }

        const openai = new OpenAI({
            apiKey: API_KEY,
            baseURL: 'https://rest-assistant.api.cloud.yandex.net/v1',
        });

        // Set SSE headers
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders();

        // Filter system messages from input (they go to instructions)
        const inputMessages = messages.filter((msg) => msg.role !== 'system');

        // Create streaming request via Responses API
        const events = await openai.responses.create({
            model: MODEL,
            input: inputMessages,
            instructions: SYSTEM_PROMPT,
            stream: true,
        });

        // Process event stream
        for await (const event of events) {
            // Send all events to client
            const data = JSON.stringify({
                event: event.type,
                data: event,
            });
            res.write(`data: ${data}\n\n`);

            // Force flush buffer if flush method is available
            const resWithFlush = res as unknown as {flush?: () => void};
            if (typeof resWithFlush.flush === 'function') {
                resWithFlush.flush();
            }
        }

        // Signal stream completion
        res.write('data: [DONE]\n\n');
        return res.end();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error in chat API:', error);

        // If headers not sent yet, send JSON error
        if (!res.headersSent) {
            return res.status(500).json({
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }

        // If streaming already started, send error via SSE
        res.write(
            `data: ${JSON.stringify({
                error: error instanceof Error ? error.message : 'Unknown error',
            })}\n\n`,
        );
        return res.end();
    }
}
