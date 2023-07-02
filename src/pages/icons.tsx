import {useRouter} from 'next/router';
import React from 'react';

import {Icons} from '../components/Icons';
import {Layout} from '../components/Layout/Layout';

const ICON_QUERY_KEY = 'icon';

export const IconsPage = () => {
    const router = useRouter();
    const {[ICON_QUERY_KEY]: iconFromQuery} = router.query;
    const currentIcon = typeof iconFromQuery === 'string' ? iconFromQuery : undefined;

    const handleChangeCurrentIcon = React.useCallback((newIcon?: string) => {
        const query = new URLSearchParams(window.location.search);

        if (newIcon) {
            query.set(ICON_QUERY_KEY, newIcon);
        } else {
            query.delete(ICON_QUERY_KEY);
        }

        router.push({pathname: router.pathname, search: query.toString()});
    }, []);

    return (
        <Layout title="Icons">
            <Icons currentIcon={currentIcon} onChangeCurrentIcon={handleChangeCurrentIcon} />
        </Layout>
    );
};

export default IconsPage;
