import React from 'react';

export const EnvironmentContext = React.createContext({
    isClient: false,
    isRtl: false,
    hideLocalePicker: false,
});
