import {GetServerSideProps} from 'next';
import {Api} from 'src/api';

let cachePromise: Promise<unknown> | null = null;

export const getServerSideProps: GetServerSideProps = async ({res}) => {
    if (!cachePromise) {
        cachePromise = Promise.all([
            Api.instance.fetchAllContributorsWithCache(),
            Api.instance.fetchAllLibs(),
        ]).catch(() => {
            cachePromise = null;
        });
    }

    await cachePromise;

    res.setHeader('Content-Type', 'application/json');

    res.statusCode = 200;
    res.write(
        JSON.stringify({
            status: 'ok',
            timestamp: new Date().toISOString(),
        }),
    );
    res.end();

    return {
        props: {},
    };
};

export default function Health() {
    return null;
}
