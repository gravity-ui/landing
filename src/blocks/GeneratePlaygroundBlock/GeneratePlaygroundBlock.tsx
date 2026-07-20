import {Play, SparklesFill} from '@gravity-ui/icons';
import {AnimateBlock} from '@gravity-ui/page-constructor';
import {Button, Icon, Spin, Text, TextArea} from '@gravity-ui/uikit';
import React from 'react';

import {AiDisclaimer} from '../../components/GeneratePlaygroundModal/AiDisclaimer';
import {LoadingText} from '../../components/GeneratePlaygroundModal/LoadingText';
import {
    EXAMPLES,
    LOADING_TEXTS,
    MAX_LENGTH,
} from '../../components/GeneratePlaygroundModal/constants';
import {useGeneratePlayground} from '../../components/GeneratePlaygroundModal/hooks/useGeneratePlayground';
import {openStackblitzFromGenerated} from '../../components/MDXRenderer/Sandbox/stackblitz';
import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './GeneratePlaygroundBlock.scss';

const b = block('generate-playground-block');

export type GeneratePlaygroundBlockModel = {
    type: CustomBlock.GeneratePlayground;
    animated?: boolean;
};

export const GeneratePlaygroundBlock: React.FC<GeneratePlaygroundBlockModel> = ({animated}) => {
    const {input, setInput, loading, result, error, isOverLimit, handleGenerate, reset} =
        useGeneratePlayground();

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
                            <Button view="outlined" size="xl" onClick={reset}>
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
            </div>
        </AnimateBlock>
    );
};
