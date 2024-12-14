import React from 'react';

import {Tasks} from './Tasks';

export interface EditorProps {}
export const Editor: React.FC<EditorProps> = () => {
    return (
        <div>
            <Tasks />
            <>Add Editor here</>
        </div>
    );
};
