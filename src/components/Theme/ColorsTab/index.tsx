import {Grid} from '@gravity-ui/page-constructor';
import {Flex} from '@gravity-ui/uikit';
import React from 'react';

import {BasicPalette} from './BasicPalette/BasicPalette';
import {MainSettings} from './MainSettings/MainSettings';

export const ColorsTab = () => {
    return (
        <Grid>
            <Flex direction="column" gap={10}>
                <MainSettings />
                <BasicPalette />
            </Flex>
        </Grid>
    );
};
