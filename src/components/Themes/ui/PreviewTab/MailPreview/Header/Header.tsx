import {Flex} from '@gravity-ui/uikit';
import {block} from 'src/utils';

import {getBlockName} from '../cn';

import './Header.scss';

const b = block(getBlockName('header'));

export const Header = ({children}: React.PropsWithChildren) => (
    <Flex justifyContent="space-between" alignItems="center" className={b()}>
        {children}
    </Flex>
);
