import React from 'react';

import {block} from '../../../utils';

import './IconsNotFound.scss';

const b = block('icons-not-found');

export const IconsNotFound = () => (
    <div className={b()}>
        <div className={b('title')}>No results found for your request</div>
        <div className={b('subtitle')}>Please check the spelling or try another keywords.</div>
    </div>
);
