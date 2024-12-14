import {Link, Text} from '@gravity-ui/uikit';

import {block} from '../../../../utils';

const b = block('examples-overview');
import './Overview.scss';

type OverviewProps = {};

// @todo-opensourcenight Make overview page
// https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-19953&t=cBOGiZgT0jwhnCOY-4
export const Overview: React.FC<OverviewProps> = () => {
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
                        overview page
                    </Link>
                </Text>
                {/* can imagine that page height is too big */}
                {new Array(100).fill(1).map((item) => (
                    <div key={item}>
                        <Text variant="code-1">can imagine that page height is too big</Text>
                    </div>
                ))}
            </main>
            <footer className={b('footer')}>
                <Link href={'/examples'}>Open in Examples page</Link>
                <Link href={'/examples/overview'}>Open in Separate page</Link>
            </footer>
        </div>
    );
};
