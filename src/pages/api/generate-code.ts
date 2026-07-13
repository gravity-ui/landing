import type {NextApiRequest, NextApiResponse} from 'next';
import OpenAI from 'openai';

type GenerateCodeRequestBody = {
    input: string;
};

const DEFAULT_BASE_URL = 'https://ai.api.cloud.yandex.net/v1';
const API_KEY = process.env.OPENAI_API_KEY;
const BASE_URL = process.env.BASE_URL || DEFAULT_BASE_URL;
const PROJECT_ID = process.env.YANDEX_PROJECT_ID;
const PROMPT_ID = process.env.GENERATE_CODE_PROMPT_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({error: 'Method not allowed'});
    }

    try {
        const {input} = req.body as GenerateCodeRequestBody;

        if (!input || typeof input !== 'string' || input.trim().length === 0) {
            return res.status(400).json({error: 'Input is required'});
        }

        const openai = new OpenAI({
            apiKey: API_KEY,
            baseURL: BASE_URL,
            defaultHeaders: PROJECT_ID ? {'OpenAI-Project': PROJECT_ID} : undefined,
        });

        const response = await openai.responses.create({
            prompt: PROMPT_ID ? {id: PROMPT_ID} : undefined,
            input,
            tools: [
                {
                    type: 'web_search',
                    filters: {
                        allowed_domains: [
                            'https://gravity-ui.com/ru/components/',
                            'https://github.com/gravity-ui/uikit/',
                        ],
                    },
                    search_context_size: 'medium',
                    user_location: {
                        type: 'approximate',
                        region: '225',
                    },
                },
            ],
        });

        return res.status(200).json({output: response.output_text});
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error in generate-code API:', error);

        return res.status(500).json({
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}
