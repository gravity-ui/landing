import React from 'react';

import {Layout} from '../components/Layout/Layout';
import {Colors} from '../components/Theme/Colors';

export const ThemePage = () => {
    return (
        <Layout title="Theme">
            <Colors />
        </Layout>
    );
};

export default ThemePage;
