import {Play} from '@gravity-ui/icons';
import {Button, Dialog, Flex, Icon, Spin, Text, TextArea} from '@gravity-ui/uikit';
import React from 'react';

import {openStackblitzFromGenerated} from '../../components/MDXRenderer/Sandbox/stackblitz';
import {block} from '../../utils';

import './GenerateCodeModal.scss';

const b = block('generate-code-modal');

const MAX_LENGTH = 200;

const LOADING_TEXTS = ['Пишем компонент', 'Создаем песочницу', 'Реализуем стили', 'Отлаживаем'];

function useLoadingText(active: boolean) {
    const [index, setIndex] = React.useState(0);
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        if (!active) return;

        setIndex(Math.floor(Math.random() * LOADING_TEXTS.length));
        setVisible(true);

        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex(Math.floor(Math.random() * LOADING_TEXTS.length));
                setVisible(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [active]);

    return {text: LOADING_TEXTS[index], visible};
}

interface GenerateCodeModalProps {
    open: boolean;
    onClose: () => void;
}

export const GenerateCodeModal: React.FC<GenerateCodeModalProps> = ({open, onClose}) => {
    const [input, setInput] = React.useState('');
    const [result, setResult] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const {text: loadingText, visible: loadingTextVisible} = useLoadingText(loading);

    const isOverLimit = input.length > MAX_LENGTH;

    const handleGenerate = async () => {
        if (!input.trim() || isOverLimit) return;

        setLoading(true);
        setResult('');

        try {
            const response = await fetch('/api/generate-code', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({input}),
            });

            const data = await response.json();
            const output = data.code ?? data.error ?? '';
            setResult(output);
            if (data.code) {
                openStackblitzFromGenerated(data.code);
            }
        } catch {
            setResult('Произошла ошибка. Попробуйте ещё раз.');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setInput('');
        setResult('');
        onClose();
    };

    return (
        <Dialog className={b()} size="m" open={open} onClose={handleClose}>
            <Dialog.Header caption="Сгенерировать playground" />
            <Dialog.Body>
                <Flex direction="column" gap={4}>
                    <div className={b('textarea-wrap')}>
                        <TextArea
                            className={b('textarea')}
                            value={input}
                            onUpdate={setInput}
                            placeholder="Опишите что хотите сгенерировать..."
                            minRows={4}
                            maxRows={10}
                            disabled={loading}
                            validationState={isOverLimit ? 'invalid' : undefined}
                        />
                        {loading && (
                            <div className={b('textarea-loader')}>
                                <Spin size="m" />
                                <Text
                                    className={b('loader-text', {visible: loadingTextVisible})}
                                    variant="body-2"
                                    color="secondary"
                                >
                                    {loadingText}
                                </Text>
                            </div>
                        )}
                        <Text
                            className={b('counter')}
                            variant="caption-2"
                            color={isOverLimit ? 'danger' : 'secondary'}
                        >
                            {input.length}/{MAX_LENGTH}
                        </Text>
                    </div>
                    {result && (
                        <Button
                            view="outlined-action"
                            size="l"
                            onClick={() => openStackblitzFromGenerated(result)}
                        >
                            <Icon data={Play} size={16} />
                            Открыть Playground
                        </Button>
                    )}
                </Flex>
            </Dialog.Body>
            <Dialog.Footer
                onClickButtonCancel={handleClose}
                onClickButtonApply={handleGenerate}
                textButtonApply="Сгенерировать"
                textButtonCancel="Отмена"
                propsButtonApply={{loading, disabled: !input.trim() || isOverLimit}}
            />
        </Dialog>
    );
};
