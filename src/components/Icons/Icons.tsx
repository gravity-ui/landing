import {ArrowUpRightFromSquare, Magnifier} from '@gravity-ui/icons';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button, Icon, TextInput} from '@gravity-ui/uikit';
import React from 'react';

import figmaIcon from '../../assets/icons/figma.svg';
import {block} from '../../utils';

import {IconCollection} from './IconCollection';
import {IconDialog} from './IconDialog/IconDialog';
import './Icons.scss';
import {IconsNotFound} from './IconsNotFound';
import {allIcons, iconsLibrary, iconsLibraryGithubUrl} from './constants';
import type {IconItem} from './types';

const b = block('icons');

interface IconsProps {
    currentIcon?: string;
    onChangeCurrentIcon?: (iconName?: string) => void;
}

export const Icons: React.FC<IconsProps> = ({currentIcon, onChangeCurrentIcon}) => {
    const [filterString, setFilterString] = React.useState('');
    const [iconForDialog, setIconForDialog] = React.useState<IconItem>();

    const pageTitleRef = React.useRef<HTMLHeadingElement>(null);

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
                        Icons
                    </h1>
                    <div className={b('actions')}>
                        <Button
                            className={b('library-button')}
                            size="xl"
                            view="outlined-contrast"
                            href={iconsLibraryGithubUrl}
                            target="_blank"
                        >
                            Go to library
                            <Icon data={ArrowUpRightFromSquare} size={16} />
                        </Button>
                        <Button
                            className={b('figma-button')}
                            size="xl"
                            view="outlined-contrast"
                            href={iconsLibrary.config.storybookUrl}
                            target="_blank"
                        >
                            <Icon data={figmaIcon} size={16} />
                            Open in Figma
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className={b('search')}>
                <Col sizes={12}>
                    <TextInput
                        className={b('search-input')}
                        value={filterString}
                        onUpdate={setFilterString}
                        size="xl"
                        placeholder="Filter by icon name"
                        leftContent={
                            <div className={b('search-icon')}>
                                <Icon data={Magnifier} size={20} />
                            </div>
                        }
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
