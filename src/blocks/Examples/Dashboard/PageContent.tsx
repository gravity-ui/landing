import {Card} from '@gravity-ui/uikit';
import {block} from 'src/utils';

import './PageLayout.scss';
import {DashboardContent} from './components/DashboardContent';
import {HeaderActionBar} from './components/HeaderActionBar';

const b = block('dashboard-example');

export const PageContent = () => {
    return (
        <div className={b('content-wrapper')}>
            <Card className={b('content')} view="filled">
                <HeaderActionBar />
                <DashboardContent />
            </Card>
        </div>
    );
};
