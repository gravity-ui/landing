import {Link, Text} from '@gravity-ui/uikit';

import {block} from '../../../../utils';

const b = block('examples-landing');
import './Landing.scss';

type LandingProps = {};

// @todo-opensourcenight Make landing page
// https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-21586&t=cBOGiZgT0jwhnCOY-4
export const Landing: React.FC<LandingProps> = () => {
    return (
        <div className={b()}>
            <main className={b('main')}>
                <Text variant="code-3">
                    @todo-opensourcenight make{' '}
                    <Link
                        href={
                            'https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-21586&t=cBOGiZgT0jwhnCOY-4'
                        }
                        target="_blank"
                    >
                        landing page
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
                <Link href={'/examples/landing'}>Open in Separate page</Link>
            </footer>
        </div>
    );
};
