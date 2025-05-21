import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';

import {block} from '../../utils';

import './GraphPlayground.scss';
import {GraphPlayground} from './Playground/GraphPlayground';

const b = block('graph');

export const GraphPlayround = () => {
    const {t} = useTranslation('graph');

    return (
        <Grid className={b()} containerClass={b('container')}>
            <Row className={b('title')}>
                <Col sizes={12} className={b('heading')}>
                    <h1 className={b('title')}>{t('title')}</h1>
                    <div className={b('actions')}>
                        <Button
                            href={'/libraries/graph'}
                            className={b('library-button')}
                            size="xl"
                            view="outlined-contrast"
                        >
                            {t('goToLibrary')}
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className={b('playground')}>
                <GraphPlayground className={b('graph-viewer')} />
            </Row>
        </Grid>
    );
};
