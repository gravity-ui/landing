import {ArrowUpRightFromSquare, Magnifier} from '@gravity-ui/icons';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button, Icon, TextInput} from '@gravity-ui/uikit';

import {IconsNotFound} from './IconsNotFound';

import React from 'react';

import figmaIcon from '../../assets/icons/figma.svg';
import {block} from '../../utils';
import {IconCollection} from '../IconCollection';

import './Icons.scss';
import {allIcons} from './constants';

const b = block('icons');

interface IconsProps {}

export const Icons: React.FC<IconsProps> = () => {
    const [filterString, setFilterString] = React.useState('');

    const icons = React.useMemo(() => {
        if (!filterString) {
            return allIcons;
        }

        const searchLower = filterString.toLowerCase();
        return allIcons.filter(({name}) => name.toLowerCase().includes(searchLower));
    }, [filterString]);

    return (
        <Grid className={b()}>
            <Row>
                <Col sizes={12} className={b('heading')}>
                    <h1 className={b('title')}>Icons</h1>
                    <div className={b('actions')}>
                        <Button size="xl" view="outlined-contrast">
                            Go to library
                            <Icon data={ArrowUpRightFromSquare} size={16} />
                        </Button>
                        <Button size="xl" view="outlined-contrast">
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
                        leftContent={<Icon data={Magnifier} size={20} />}
                        hasClear
                    />
                </Col>
            </Row>
            <Row>
                <Col sizes={12}>
                    {icons.length ? <IconCollection icons={icons} /> : <IconsNotFound />}
                </Col>
            </Row>
        </Grid>
    );
};
