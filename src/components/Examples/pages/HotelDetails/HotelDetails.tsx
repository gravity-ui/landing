import {Link, Text} from '@gravity-ui/uikit';

import {block} from '../../../../utils';

const b = block('examples-hotel-details');
import './HotelDetails.scss';

type HotelDetailsProps = {};

// @todo-opensourcenight Make hotel-details page
// https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20358&t=cBOGiZgT0jwhnCOY-4
export const HotelDetails: React.FC<HotelDetailsProps> = () => {
    return (
        <div className={b()}>
            <main className={b('main')}>
                <Text variant="code-3">
                    @todo-opensourcenight make{' '}
                    <Link
                        href={
                            'https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20358&t=cBOGiZgT0jwhnCOY-4'
                        }
                        target="_blank"
                    >
                        hotel-details page
                    </Link>
                </Text>
            </main>
            <footer className={b('footer')}>
                <Link href={'/examples'}>Open in Examples page</Link>
                <Link href={'/examples/hotel-details'}>Open in Separate page</Link>
            </footer>
        </div>
    );
};
