import type {Theme} from '@gravity-ui/uikit-themer';
import React from 'react';

export type ThemableRow = {
    id: string;
    title: string;
    renderTitle?: () => React.ReactNode;
    render: (theme: Theme) => React.ReactNode;
};
