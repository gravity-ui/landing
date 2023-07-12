import {ArrowUpRightFromSquare, Magnifier} from '@gravity-ui/icons';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button, Icon, TextInput} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {useIsMobile} from '../../hooks/useIsMobile';
import {block} from '../../utils';

import {IconCollection} from './IconCollection';
import {IconDialog} from './IconDialog/IconDialog';
import './Icons.scss';
import {IconsNotFound} from './IconsNotFound';
import {allIcons} from './constants';
import type {IconItem} from './types';

const b = block('icons');

interface IconsProps {
    currentIcon?: string;
    onChangeCurrentIcon?: (iconName?: string) => void;
}

export const Icons: React.FC<IconsProps> = ({currentIcon, onChangeCurrentIcon}) => {
    const {t, i18n} = useTranslation();

    const isMobile = useIsMobile();

    const [filterString, setFilterString] = React.useState('');
    const [iconForDialog, setIconForDialog] = React.useState<IconItem>();

    const pageTitleRef = React.useRef<HTMLHeadingElement>(null);
    const searchInputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (!isMobile) {
            searchInputRef.current?.focus();
        }
    }, [isMobile]);

    React.useEffect(() => {
        if (currentIcon && currentIcon !== iconForDialog?.name) {
            const iconToShow = allIcons.find((icon) => icon.name === currentIcon);

            if (iconToShow) {
                setIconForDialog(iconToShow);
            }
        }
    }, [currentIcon]);

    React.useEffect(() => {
        onChangeCurrentIcon?.(iconForDialog?.name);
    }, [onChangeCurrentIcon, iconForDialog]);

    const handleSelectIcon = React.useCallback((item: IconItem) => {
        setIconForDialog(item);
    }, []);

    const handleCloseDialog = React.useCallback(() => {
        setIconForDialog(undefined);
    }, []);

    const handleClickToKeyword = React.useCallback((keyword: string) => {
        setFilterString(keyword);
        handleCloseDialog();

        // note: the scroll must be done after the modal is hidden
        setTimeout(() => {
            pageTitleRef.current?.scrollIntoView({behavior: 'smooth'});
        }, 100);
    }, []);

    const icons = React.useMemo(() => {
        if (!filterString) {
            return allIcons;
        }

        const searchLower = filterString.toLowerCase();

        return allIcons.filter(
            ({meta}) =>
                meta.name.toLowerCase().includes(searchLower) ||
                meta.componentName.toLowerCase().includes(searchLower) ||
                meta.keywords.some((keyword: string) =>
                    keyword.toLowerCase().includes(searchLower),
                ),
        );
    }, [filterString]);

    return (
        <Grid className={b()}>
            <Row>
                <Col sizes={12} className={b('heading')}>
                    <h1 className={b('title')} ref={pageTitleRef}>
                        {t('icons.title')}
                    </h1>
                    <div className={b('actions')}>
                        <Button
                            href={`${
                                i18n.language === 'en' ? '' : `/${i18n.language}`
                            }/libraries/icons`}
                            target="_blank"
                            className={b('library-button')}
                            size="xl"
                            view="outlined-contrast"
                        >
                            {t('icons.goToLibrary')}
                            <Icon data={ArrowUpRightFromSquare} size={16} />
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className={b('search')}>
                <Col sizes={12}>
                    <TextInput
                        controlRef={searchInputRef}
                        className={b('search-input')}
                        value={filterString}
                        onUpdate={setFilterString}
                        size="xl"
                        placeholder={t('icons.filterPlaceholder')}
                        leftContent={
                            <div className={b('search-icon')}>
                                <Icon data={Magnifier} size={20} />
                            </div>
                        }
                        autoFocus={!isMobile}
                        hasClear
                    />
                </Col>
            </Row>
            <Row>
                <Col sizes={12}>
                    {icons.length ? (
                        <IconCollection icons={icons} onSelectIcon={handleSelectIcon} />
                    ) : (
                        <IconsNotFound />
                    )}
                </Col>
            </Row>
            {iconForDialog ? (
                <IconDialog
                    icon={iconForDialog}
                    onClose={handleCloseDialog}
                    onClickToKeyword={handleClickToKeyword}
                />
            ) : null}
        </Grid>
    );
};
