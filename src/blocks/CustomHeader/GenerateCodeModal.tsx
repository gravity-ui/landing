import {Play} from '@gravity-ui/icons';
import {Button, Dialog, Flex, Icon, Spin, Text, TextArea} from '@gravity-ui/uikit';
import React from 'react';

import {openStackblitzFromGenerated} from '../../components/MDXRenderer/Sandbox/stackblitz';
import {block} from '../../utils';

import './GenerateCodeModal.scss';

const b = block('generate-code-modal');

const MAX_LENGTH = 200;

const LOADING_TEXTS = [
    'Пишем компонент',
    'Создаем playground',
    'Реализуем стили',
    'Собираем структуру',
    'Подключаем зависимости',
    'Настраиваем окружение',
    'Генерируем разметку',
];

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
        }, 2000);

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

    const warningNode = (
        <Text variant="caption-2" color="secondary">
            ⚠️ Результат создаётся с помощью AI и может содержать ошибки — рекомендуем проверить
            сгенерированный код
        </Text>
    );
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
                        {warningNode}
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
                                placeholder="Например: «Форма авторизации с email и паролем»"
                                minRows={4}
                                maxRows={10}
                                disabled={loading}
                                validationState={isOverLimit ? 'invalid' : undefined}
                            />
                            <Text
                                className={b('counter')}
                                variant="caption-2"
                                color={isOverLimit ? 'danger' : 'secondary'}
                            >
                                {input.length}/{MAX_LENGTH}
                            </Text>
                        </div>
                        {warningNode}
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
                    <Text
                        className={b('loader-text', {visible: loadingTextVisible})}
                        variant="body-2"
                        color="secondary"
                    >
                        {loadingText}
                        <span className={b('dots')} />
                    </Text>
                </div>
            )}
        </Dialog>
    );
};
