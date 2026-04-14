import {Picture} from '@gravity-ui/icons';
import {Icon, Loader, Portal, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../utils';

import './ImageSearch.scss';

const b = block('image-search');

interface UseImageSearchOptions {
    onResults: (componentNames: string[]) => void;
    onClear: () => void;
    isActive: boolean;
}

async function searchByImage(file: Blob): Promise<{name: string; componentName: string}[]> {
    const res = await fetch('/api/icons-search', {
        method: 'POST',
        headers: {'Content-Type': file.type || 'image/png'},
        body: file,
    });

    if (!res.ok) {
        throw new Error(`Search failed: ${res.status}`);
    }

    const data = await res.json();
    return data.results;
}

export function useImageSearch({onResults, onClear, isActive}: UseImageSearchOptions) {
    const {t} = useTranslation('icons');

    const [preview, setPreview] = React.useState<string | null>(null);
    const [fileName, setFileName] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [dragging, setDragging] = React.useState(false);
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const dragCounterRef = React.useRef(0);

    const handleImage = React.useCallback(
        async (file: File | Blob) => {
            const name = file instanceof File ? file.name : 'image.png';
            setPreview((prev) => {
                if (prev) URL.revokeObjectURL(prev);
                return URL.createObjectURL(file);
            });
            setFileName(name);
            setLoading(true);

            try {
                const results = await searchByImage(file);
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
        setPreview((prev) => {
            if (prev) URL.revokeObjectURL(prev);
            return null;
        });
        setFileName(null);
        setLoading(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        onClear();
    }, [onClear]);

    const triggerFileSelect = React.useCallback(() => {
        fileInputRef.current?.click();
    }, []);

    const fileInput = (
        <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            className={b('file-input')}
            onChange={handleFileChange}
        />
    );

    const startContent =
        isActive && preview ? (
            <div className={b('input-preview')}>
                <img src={preview} alt="" className={b('input-preview-image')} />
                {loading && <Loader className={b('input-loader')} size="s" />}
            </div>
        ) : null;

    const dropOverlay = dragging ? (
        <Portal>
            <div className={b('drop-overlay')}>
                <div className={b('drop-content')}>
                    <Icon data={Picture} size={60} />
                    <Text variant="header-2">{t('imageSearch_drop')}</Text>
                </div>
            </div>
        </Portal>
    ) : null;

    return {
        preview,
        fileName,
        loading,
        isActive: isActive && preview !== null,
        fileInput,
        startContent,
        dropOverlay,
        triggerFileSelect,
        handleClear,
    };
}
