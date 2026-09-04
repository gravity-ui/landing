import {ArrowUpRightFromSquare, ChevronRight, Magnifier, Xmark} from '@gravity-ui/icons';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button, Icon, Sheet, TextInput} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import photoSearchIcon from '../../assets/icons/photo-search.svg';
import {useIsMobile} from '../../hooks/useIsMobile';
import {block} from '../../utils';

import {IconCollection} from './IconCollection';
import {IconDialog} from './IconDialog/IconDialog';
import './Icons.scss';
import {IconsNotFound} from './IconsNotFound';
import {useImageSearch} from './ImageSearch';
import {iconCategories, isIconInCategory} from './categories';
import {allIcons} from './constants';
import type {IconItem} from './types';

const b = block('icons');

interface IconsProps {
    currentIcon?: string;
    onChangeCurrentIcon?: (iconName?: string) => void;
}

export const Icons: React.FC<IconsProps> = ({currentIcon, onChangeCurrentIcon}) => {
    const {t} = useTranslation();

    const isMobile = useIsMobile();

    const [filterString, setFilterString] = React.useState('');
    const [categoryId, setCategoryId] = React.useState('all');
    const [isCategorySheetOpen, setIsCategorySheetOpen] = React.useState(false);
    const [imageSearchResults, setImageSearchResults] = React.useState<string[] | null>(null);

    const [isOpenIconDialog, setIsOpenIconDialog] = React.useState(false);
    const [iconForDialog, setIconForDialog] = React.useState<IconItem>();

    const pageTitleRef = React.useRef<HTMLHeadingElement>(null);
    const searchInputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (!isMobile) {
            searchInputRef.current?.focus();
        }
    }, [isMobile]);

    const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

    React.useEffect(() => {
        if (currentIcon && currentIcon !== iconForDialog?.name) {
            const iconToShow = allIcons.find((icon) => icon.name === currentIcon);

            if (iconToShow) {
                setIsOpenIconDialog(true);
                clearTimeout(closeTimeoutRef.current);
                setIconForDialog(iconToShow);
            }
        }
    }, [currentIcon]);

    const handleSelectIcon = React.useCallback(
        (item: IconItem) => {
            setIsOpenIconDialog(true);
            clearTimeout(closeTimeoutRef.current);
            setIconForDialog(item);
            onChangeCurrentIcon?.(item?.name);
        },
        [onChangeCurrentIcon],
    );

    const handleCloseDialog = React.useCallback(() => {
        setIsOpenIconDialog(false);
        closeTimeoutRef.current = setTimeout(() => {
            setIconForDialog(undefined);
            onChangeCurrentIcon?.(undefined);
        }, 500);
    }, [onChangeCurrentIcon]);

    const handleClickToKeyword = React.useCallback((keyword: string) => {
        setFilterString(keyword);
        handleCloseDialog();

        // note: the scroll must be done after the modal is hidden
        setTimeout(() => {
            pageTitleRef.current?.scrollIntoView({behavior: 'smooth'});
        }, 100);
    }, []);

    const handleImageSearchResults = React.useCallback((componentNames: string[]) => {
        setImageSearchResults(componentNames);
        setFilterString('');
    }, []);

    const handleImageSearchClear = React.useCallback(() => {
        setImageSearchResults(null);
    }, []);

    const imageSearch = useImageSearch({
        onResults: handleImageSearchResults,
        onClear: handleImageSearchClear,
        isActive: imageSearchResults !== null,
    });

    const searchedIcons = React.useMemo(() => {
        if (imageSearchResults) {
            const resultSet = new Set(imageSearchResults);
            const matched = allIcons.filter(({name}) => resultSet.has(name));
            // preserve the ranking order from the search results
            matched.sort(
                (first, second) =>
                    imageSearchResults.indexOf(first.name) -
                    imageSearchResults.indexOf(second.name),
            );
            return matched;
        }

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
    }, [filterString, imageSearchResults]);

    const categoryCounts = React.useMemo(
        () =>
            Object.fromEntries(
                iconCategories.map((category) => [
                    category.id,
                    allIcons.filter((icon) => isIconInCategory(icon, category.id)).length,
                ]),
            ),
        [],
    );

    const isSearching = Boolean(filterString) || imageSearch.isActive;

    const icons = React.useMemo(
        () =>
            isSearching || categoryId === 'all'
                ? searchedIcons
                : searchedIcons.filter((icon) => isIconInCategory(icon, categoryId)),
        [categoryId, isSearching, searchedIcons],
    );

    const selectedCategory = iconCategories.find(({id}) => id === categoryId);
    const allIconsTitle = t('icons:allIcons');
    const resultsTitle =
        !isSearching && selectedCategory
            ? t(`icons:categories.${selectedCategory.id}`)
            : allIconsTitle;
    const resultsCount = isSearching ? allIcons.length : icons.length;

    const handleSelectCategory = React.useCallback((nextCategoryId: string) => {
        setCategoryId(nextCategoryId);
        setIsCategorySheetOpen(false);
    }, []);

    const categoryOptions = (
        <React.Fragment>
            <button
                type="button"
                disabled={isSearching}
                aria-pressed={!isSearching && categoryId === 'all'}
                className={b('category', {
                    selected: !isSearching && categoryId === 'all',
                })}
                onClick={() => handleSelectCategory('all')}
            >
                <span>{allIconsTitle}</span>
                <span className={b('category-count')}>{allIcons.length}</span>
            </button>
            {iconCategories.map((category) => (
                <button
                    type="button"
                    key={category.id}
                    disabled={isSearching}
                    aria-pressed={!isSearching && categoryId === category.id}
                    className={b('category', {
                        selected: !isSearching && categoryId === category.id,
                    })}
                    onClick={() => handleSelectCategory(category.id)}
                >
                    <span>{t(`icons:categories.${category.id}`)}</span>
                    <span className={b('category-count')}>{categoryCounts[category.id]}</span>
                </button>
            ))}
        </React.Fragment>
    );

    const searchStartContent = imageSearch.isActive ? (
        imageSearch.startContent
    ) : (
        <div className={b('search-icon')}>
            <Icon data={Magnifier} size={20} />
        </div>
    );

    const searchEndContent = imageSearch.isActive ? (
        <div className={b('clear-icon')} onClick={imageSearch.handleClear}>
            <Icon data={Xmark} size={16} />
        </div>
    ) : (
        <div className={b('photo-search-icon')} onClick={imageSearch.triggerFileSelect}>
            <Icon data={photoSearchIcon} size={20} />
        </div>
    );

    return (
        <Grid className={b()}>
            <Row>
                <Col sizes={12} className={b('heading')}>
                    <h1 className={b('title')} ref={pageTitleRef}>
                        {t('icons:title')}
                    </h1>
                    <div className={b('actions')}>
                        <Button
                            href={'/libraries/icons'}
                            target="_blank"
                            className={b('library-button')}
                            size="xl"
                            view="outlined-contrast"
                        >
                            {t('icons:goToLibrary')}
                            <Icon data={ArrowUpRightFromSquare} size={16} />
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className={b('search')}>
                <Col sizes={12} className={b('search-row')}>
                    {imageSearch.fileInput}
                    <TextInput
                        controlRef={searchInputRef}
                        className={b('search-input')}
                        value={imageSearch.isActive ? imageSearch.fileName ?? '' : filterString}
                        onUpdate={(value) => {
                            if (!imageSearch.isActive) {
                                setFilterString(value);
                                if (value) {
                                    setImageSearchResults(null);
                                }
                            }
                        }}
                        size="xl"
                        placeholder={t('icons:filterPlaceholder')}
                        startContent={searchStartContent}
                        autoFocus={!isMobile}
                        hasClear={false}
                        endContent={searchEndContent}
                        controlProps={{
                            readOnly: imageSearch.isActive,
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col sizes={12}>
                    <div className={b('catalog')}>
                        <aside className={b('categories')} aria-label={t('icons:categoriesLabel')}>
                            <h2 className={b('section-title')}>{t('icons:category')}</h2>
                            <div className={b('category-list')}>{categoryOptions}</div>
                        </aside>
                        <button
                            type="button"
                            className={b('mobile-category-trigger')}
                            disabled={isSearching}
                            aria-haspopup="dialog"
                            aria-expanded={isCategorySheetOpen}
                            onClick={() => setIsCategorySheetOpen(true)}
                        >
                            <span>
                                <span className={b('mobile-category-label')}>{resultsTitle}</span>{' '}
                                <span className={b('mobile-category-count')}>{resultsCount}</span>
                            </span>
                            <Icon data={ChevronRight} size={16} />
                        </button>
                        <section className={b('results')}>
                            <div className={b('results-heading')}>
                                <h2 className={b('section-title')}>{resultsTitle}</h2>
                                <span className={b('results-count')}>{resultsCount}</span>
                            </div>
                            {icons.length ? (
                                <IconCollection icons={icons} onSelectIcon={handleSelectIcon} />
                            ) : (
                                <IconsNotFound />
                            )}
                        </section>
                    </div>
                </Col>
            </Row>

            <IconDialog
                isOpen={isOpenIconDialog}
                icon={iconForDialog}
                onClose={handleCloseDialog}
                onClickToKeyword={handleClickToKeyword}
            />

            {isMobile && (
                <Sheet
                    className={b('category-sheet')}
                    contentClassName={b('category-sheet-content')}
                    visible={isCategorySheetOpen}
                    onClose={() => setIsCategorySheetOpen(false)}
                    title={t('icons:category')}
                >
                    <div
                        className={b('category-sheet-list')}
                        aria-label={t('icons:mobileCategoriesLabel')}
                    >
                        {categoryOptions}
                    </div>
                </Sheet>
            )}

            {imageSearch.dropOverlay}
        </Grid>
    );
};
