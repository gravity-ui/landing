import {Picture, Xmark} from '@gravity-ui/icons';
import {Button, Icon, Loader} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../utils';

import './ImageSearch.scss';

const b = block('image-search');

interface ImageSearchProps {
    onResults: (componentNames: string[]) => void;
    onClear: () => void;
    isActive: boolean;
}

async function searchByImage(base64: string): Promise<{name: string; componentName: string}[]> {
    const res = await fetch('/api/icons-search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({image: base64, topK: 12}),
    });

    if (!res.ok) {
        throw new Error(`Search failed: ${res.status}`);
    }

    const data = await res.json();
    return data.results;
}

function fileToBase64(file: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result as string;
            // strip data:image/...;base64, prefix
            const base64 = result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

export const ImageSearch: React.FC<ImageSearchProps> = ({onResults, onClear, isActive}) => {
    const {t} = useTranslation();

    const [preview, setPreview] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [dragging, setDragging] = React.useState(false);
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const dragCounterRef = React.useRef(0);

    const handleImage = React.useCallback(
        async (file: Blob) => {
            const base64 = await fileToBase64(file);
            const dataUrl = `data:image/png;base64,${base64}`;
            setPreview(dataUrl);
            setLoading(true);

            try {
                const results = await searchByImage(base64);
                onResults(results.map((r) => r.componentName));
            } catch {
                onResults([]);
            } finally {
                setLoading(false);
            }
        },
        [onResults],
    );

    const handleFileChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                handleImage(file);
            }
        },
        [handleImage],
    );

    const handlePaste = React.useCallback(
        (e: ClipboardEvent) => {
            const items = e.clipboardData?.items;
            if (!items) return;

            for (const item of items) {
                if (item.type.startsWith('image/')) {
                    e.preventDefault();
                    const file = item.getAsFile();
                    if (file) {
                        handleImage(file);
                    }
                    return;
                }
            }
        },
        [handleImage],
    );

    React.useEffect(() => {
        document.addEventListener('paste', handlePaste);
        return () => document.removeEventListener('paste', handlePaste);
    }, [handlePaste]);

    const handleDragEnter = React.useCallback((e: DragEvent) => {
        e.preventDefault();
        dragCounterRef.current++;
        if (e.dataTransfer?.types.includes('Files')) {
            setDragging(true);
        }
    }, []);

    const handleDragLeave = React.useCallback((e: DragEvent) => {
        e.preventDefault();
        dragCounterRef.current--;
        if (dragCounterRef.current === 0) {
            setDragging(false);
        }
    }, []);

    const handleDragOver = React.useCallback((e: DragEvent) => {
        e.preventDefault();
    }, []);

    const handleDrop = React.useCallback(
        (e: DragEvent) => {
            e.preventDefault();
            dragCounterRef.current = 0;
            setDragging(false);

            const file = e.dataTransfer?.files[0];
            if (file && file.type.startsWith('image/')) {
                handleImage(file);
            }
        },
        [handleImage],
    );

    React.useEffect(() => {
        document.addEventListener('dragenter', handleDragEnter);
        document.addEventListener('dragleave', handleDragLeave);
        document.addEventListener('dragover', handleDragOver);
        document.addEventListener('drop', handleDrop);
        return () => {
            document.removeEventListener('dragenter', handleDragEnter);
            document.removeEventListener('dragleave', handleDragLeave);
            document.removeEventListener('dragover', handleDragOver);
            document.removeEventListener('drop', handleDrop);
        };
    }, [handleDragEnter, handleDragLeave, handleDragOver, handleDrop]);

    const handleClear = React.useCallback(() => {
        setPreview(null);
        setLoading(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        onClear();
    }, [onClear]);

    const handleButtonClick = React.useCallback(() => {
        fileInputRef.current?.click();
    }, []);

    return (
        <React.Fragment>
            <div className={b()}>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className={b('file-input')}
                    onChange={handleFileChange}
                />

                {isActive && preview ? (
                    <div className={b('preview')}>
                        <img src={preview} alt="" className={b('preview-image')} />
                        {loading && <Loader className={b('loader')} size="s" />}
                        <Button
                            view="flat"
                            size="s"
                            className={b('clear-button')}
                            onClick={handleClear}
                        >
                            <Icon data={Xmark} size={12} />
                        </Button>
                    </div>
                ) : (
                    <Button
                        view="flat"
                        size="xl"
                        className={b('upload-button')}
                        onClick={handleButtonClick}
                        title={t('icons:imageSearch_tooltip')}
                    >
                        <Icon data={Picture} size={20} />
                    </Button>
                )}
            </div>

            {dragging && (
                <div className={b('drop-overlay')}>
                    <div className={b('drop-content')}>
                        <Icon data={Picture} size={32} />
                        <span>{t('icons:imageSearch_drop')}</span>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};
