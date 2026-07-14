import {Play, SparklesFill} from '@gravity-ui/icons';
import {AnimateBlock} from '@gravity-ui/page-constructor';
import {Button, Icon, Spin, Text, TextArea} from '@gravity-ui/uikit';
import React from 'react';

import {AiDisclaimer} from '../../components/AiDisclaimer';
import {LoadingText} from '../../components/LoadingText';
import {openStackblitzFromGenerated} from '../../components/MDXRenderer/Sandbox/stackblitz';
import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './GeneratePlaygroundBlock.scss';

const b = block('generate-playground-block');

const MAX_LENGTH = 200;

const EXAMPLES = [
    'Кнопка, открывающая модалку',
    'Форма с полями и валидацией',
    'Таблица с сортировкой',
    'Карточка с аватаром и кнопками',
];

const LOADING_TEXTS = [
    'Пишем компонент',
    'Создаем playground',
    'Реализуем стили',
    'Собираем структуру',
    'Подключаем зависимости',
    'Настраиваем окружение',
    'Генерируем разметку',
];

export type GeneratePlaygroundBlockModel = {
    type: CustomBlock.GeneratePlayground;
    animated?: boolean;
};

export const GeneratePlaygroundBlock: React.FC<GeneratePlaygroundBlockModel> = ({animated}) => {
    const [input, setInput] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [result, setResult] = React.useState('');

    const isOverLimit = input.length > MAX_LENGTH;

    const handleGenerate = async () => {
        if (!input.trim() || isOverLimit || loading) return;

        setLoading(true);
        setError('');
        setResult('');

        try {
            const response = await fetch('/api/generate-code', {
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

    const handleReset = () => {
        setResult('');
        setError('');
        setInput('');
    };

    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('inner')}>
                <Text variant="display-2" className={b('title')}>
                    Попробуйте прямо сейчас
                </Text>
                {result ? (
                    <>
                        <div className={b('actions')}>
                            <Button
                                view="action"
                                size="xl"
                                onClick={() => openStackblitzFromGenerated(result)}
                            >
                                <Icon data={Play} size={16} />
                                Открыть Playground
                            </Button>
                            <Button view="outlined" size="xl" onClick={handleReset}>
                                Начать заново
                            </Button>
                        </div>
                        <AiDisclaimer />
                    </>
                ) : (
                    <div className={b('input-area')}>
                        <div className={b('input-wrap')}>
                            <div className={b('textarea-wrap')}>
                                <TextArea
                                    className={b('textarea')}
                                    value={input}
                                    onUpdate={setInput}
                                    placeholder={`Например: "${EXAMPLES[0]}"`}
                                    minRows={2}
                                    maxRows={4}
                                    disabled={loading}
                                    validationState={isOverLimit ? 'invalid' : undefined}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                                            handleGenerate();
                                        }
                                    }}
                                />
                                <Text
                                    className={b('counter', {over: isOverLimit})}
                                    variant="caption-2"
                                    color={isOverLimit ? 'danger' : 'secondary'}
                                >
                                    {input.length}/{MAX_LENGTH}
                                </Text>
                            </div>
                            <Button
                                className={b('button')}
                                view="action"
                                size="xl"
                                loading={loading}
                                disabled={!input.trim() || isOverLimit}
                                onClick={handleGenerate}
                            >
                                <Icon data={SparklesFill} size={16} />
                                Сгенерировать Playground
                            </Button>
                        </div>
                        {loading && (
                            <div className={b('overlay')}>
                                <Spin size="m" />
                                <LoadingText active={loading} texts={LOADING_TEXTS} />
                            </div>
                        )}
                    </div>
                )}
                {error && (
                    <Text color="danger" variant="body-2">
                        {error}
                    </Text>
                )}
                {!result && (
                    <div className={b('examples')}>
                        {EXAMPLES.map((example) => (
                            <button
                                key={example}
                                className={b('example-chip')}
                                onClick={() => setInput(example)}
                            >
                                {example}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </AnimateBlock>
    );
};
