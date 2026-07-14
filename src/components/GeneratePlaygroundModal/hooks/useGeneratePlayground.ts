import React from 'react';

import {openStackblitzFromGenerated} from '../../MDXRenderer/Sandbox/stackblitz';
import {MAX_LENGTH} from '../constants';

export function useGeneratePlayground() {
    const [input, setInput] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState('');
    const [error, setError] = React.useState('');

    const isOverLimit = input.length > MAX_LENGTH;

    const handleGenerate = async () => {
        if (!input.trim() || isOverLimit || loading) return;

        setLoading(true);
        setError('');
        setResult('');

        try {
            const response = await fetch('/api/generate-playground', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({input}),
            });

            const data = await response.json();
            if (data.code) {
                setResult(data.code);
                openStackblitzFromGenerated(data.code);
            } else {
                setError(data.error ?? 'Что-то пошло не так');
            }
        } catch {
            setError('Произошла ошибка. Попробуйте ещё раз.');
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setInput('');
        setResult('');
        setError('');
    };

    return {input, setInput, loading, result, error, isOverLimit, handleGenerate, reset};
}
