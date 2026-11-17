import InternalError from '@gravity-ui/illustrations/InternalError';
import {Button, Flex, PlaceholderContainer, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../../utils';

import './GalleryLoadError.scss';

const b = block('gallery-load-error');

const ILLUSTRATION_SIZE = 150;

export interface GalleryLoadErrorProps {
    onRetry: () => void;
    // A failed next page keeps the loaded cards on screen, so it only needs a line under them.
    inline?: boolean;
}

export const GalleryLoadError: React.FC<GalleryLoadErrorProps> = ({onRetry, inline}) => {
    const {t} = useTranslation('themes');

    if (inline) {
        return (
            <Flex alignItems="center" justifyContent="center" gap={3}>
                <Text color="secondary">{t('gallery_modal_load_error')}</Text>
                <Button view="outlined" onClick={onRetry}>
                    {t('gallery_modal_retry')}
                </Button>
            </Flex>
        );
    }

    return (
        <PlaceholderContainer
            size="m"
            direction="column"
            image={<InternalError width={ILLUSTRATION_SIZE} height={ILLUSTRATION_SIZE} />}
            title={t('gallery_modal_load_error')}
            description={t('gallery_modal_load_error_description')}
            actions={[
                {text: t('gallery_modal_retry'), view: 'outlined', size: 'l', onClick: onRetry},
            ]}
            className={b()}
        />
    );
};
