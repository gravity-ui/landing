import {Link, Text} from '@gravity-ui/uikit';

import {block} from '../../../../utils';

const b = block('examples-vm-overview');
import './VmOverview.scss';

type VmOverviewProps = {};

// @todo-opensourcenight Make vm-overview page
// https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-19953&t=cBOGiZgT0jwhnCOY-4
export const VmOverview: React.FC<VmOverviewProps> = () => {
    return (
        <div className={b()}>
            <main className={b('main')}>
                <Text variant="code-3">
                    @todo-opensourcenight make{' '}
                    <Link
                        href={
                            'https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-19953&t=cBOGiZgT0jwhnCOY-4'
                        }
                        target="_blank"
                    >
                        vm-overview page
                    </Link>
                </Text>
            </main>
            <footer className={b('footer')}>
                <Link href={'/examples'}>Open in Examples page</Link>
                <Link href={'/examples/vm-overview'}>Open in Separate page</Link>
            </footer>
        </div>
    );
};
