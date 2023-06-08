import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../components/Layout/Layout';
import {sections} from '../../content/design';

export const DesignPage = () => {
    const router = useRouter();

    React.useEffect(() => {
        const firstSection = sections[0];
        if (firstSection) {
            router.replace(`/design/${firstSection.id}`);
        } else {
            router.replace('/');
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title="Design" />;
};

export default DesignPage;
