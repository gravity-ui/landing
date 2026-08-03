import {Play} from '@gravity-ui/icons';
import {Button, Dialog, Flex, Icon, Spin, Text, TextArea} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';
import {openStackblitzFromGenerated} from '../MDXRenderer/Sandbox/stackblitz';

import {AiDisclaimer} from './AiDisclaimer';
import './GeneratePlaygroundModal.scss';
import {LoadingText} from './LoadingText';
import {EXAMPLES, LOADING_TEXTS, MAX_LENGTH} from './constants';
import {useGeneratePlayground} from './hooks/useGeneratePlayground';

const b = block('generate-playground-modal');

interface GeneratePlaygroundModalProps {
    open: boolean;
    onClose: () => void;
}

export const GeneratePlaygroundModal: React.FC<GeneratePlaygroundModalProps> = ({
    open,
    onClose,
}) => {
    const {input, setInput, loading, result, error, isOverLimit, handleGenerate, reset} =
        useGeneratePlayground();

    const handleClose = () => {
        reset();
        onClose();
    };

    return (
        <Dialog className={b()} maxWidth="s" open={open} onClose={handleClose}>
            <Dialog.Header caption="AI-генерация playground" />
            <Dialog.Body>
                {result ? (
                    <Flex direction="column" alignItems="center" justifyContent="center" gap={4}>
                        <Button
                            view="outlined-action"
                            size="xl"
                            onClick={() => openStackblitzFromGenerated(result)}
                        >
                            <Icon data={Play} size={18} />
                            Открыть Playground
                        </Button>
                        <AiDisclaimer />
                    </Flex>
                ) : (
                    <Flex direction="column" gap={4}>
                        <Text variant="body-2" color="secondary">
                            Опишите, какой интерфейс нужен — AI сгенерирует playground с кодом на
                            основе Gravity UI
                        </Text>
                        <div className={b('textarea-wrap')}>
                            <TextArea
                                className={b('textarea')}
                                value={input}
                                onUpdate={setInput}
                                placeholder={`Например: «${EXAMPLES[0]}»`}
                                minRows={4}
                                maxRows={10}
                                disabled={loading}
                                validationState={isOverLimit ? 'invalid' : undefined}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                                        handleGenerate();
                                    }
                                }}
                            />
                            <Text
                                className={b('counter')}
                                variant="caption-2"
                                color={isOverLimit ? 'danger' : 'secondary'}
                            >
                                {input.length}/{MAX_LENGTH}
                            </Text>
                        </div>
                        {error && (
                            <Text color="danger" variant="body-2">
                                {error}
                            </Text>
                        )}
                        <AiDisclaimer />
                    </Flex>
                )}
            </Dialog.Body>
            {result ? (
                <Dialog.Footer onClickButtonCancel={handleClose} textButtonCancel="Закрыть" />
            ) : (
                <Dialog.Footer
                    onClickButtonCancel={handleClose}
                    onClickButtonApply={handleGenerate}
                    textButtonApply="Сгенерировать"
                    textButtonCancel="Отмена"
                    propsButtonApply={{loading, disabled: !input.trim() || isOverLimit}}
                />
            )}
            {loading && (
                <div className={b('overlay')}>
                    <Spin size="l" />
                    <LoadingText active={loading} texts={LOADING_TEXTS} />
                </div>
            )}
        </Dialog>
    );
};
