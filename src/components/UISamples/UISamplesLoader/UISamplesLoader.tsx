import {Loader} from '@gravity-ui/uikit';
import {block} from 'src/utils';

import './UISamplesLoader.scss';

const b = block('uisamples-loader');

export const UISamplesLoader: React.FC = () => {
    return <Loader size="l" className={b()} />;
};
