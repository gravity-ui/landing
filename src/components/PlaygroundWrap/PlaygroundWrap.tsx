import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button} from '@gravity-ui/uikit';
import React, {PropsWithChildren, memo} from 'react';

import {block} from '../../utils';

import './PlaygroundWrap.scss';

const b = block('playground-wrap');

type Props = {
    title: string;
    libraryId: string;
    goToLibraryText?: string;
};

export const PlaygroundWrap = memo<PropsWithChildren<Props>>(
    ({title, libraryId, goToLibraryText, children}) => {
        return (
            <Grid className={b()} containerClass={b('container')}>
                <Row className={b('title')}>
                    <Col sizes={12} className={b('heading')}>
                        <h1 className={b('title')}>{title}</h1>
                        <div className={b('actions')}>
                            {goToLibraryText && (
                                <Button
                                    href={`/libraries/${libraryId}`}
                                    className={b('library-button')}
                                    size="xl"
                                    view="outlined-contrast"
                                >
                                    {goToLibraryText}
                                </Button>
                            )}
                        </div>
                    </Col>
                </Row>
                <Row className={b('playground')}>{children}</Row>
            </Grid>
        );
    },
);

PlaygroundWrap.displayName = 'PlaygroundWrap';
