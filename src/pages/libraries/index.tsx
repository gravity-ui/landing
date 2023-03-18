import Link from 'next/link';

import {Layout} from '../../components/Layout/Layout';
import librariesInfo from '../../libraries-info.json';
import '../../styles.scss';
import '../../vendors.scss';

export const Libraries = () => {
    return (
        <Layout title="Libraries">
            <Link href="/">Back to home</Link>
            <div>LIBRARIES:</div>
            {Object.keys(librariesInfo).map((id) => {
                return (
                    <div key={id}>
                        <Link href={`/libraries/${id}`}>{id}</Link>
                    </div>
                );
            })}
        </Layout>
    );
};

export default Libraries;
