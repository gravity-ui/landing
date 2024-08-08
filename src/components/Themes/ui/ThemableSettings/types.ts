import React from 'react';

import {ThemeVariant} from '../../lib/types';

export type ThemableRow = {
    id: string;
    title: string;
    renderTitle?: () => React.ReactNode;
    render: (theme: ThemeVariant) => React.ReactNode;
};
