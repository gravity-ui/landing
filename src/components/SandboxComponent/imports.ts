import dynamic from 'next/dynamic';
import {ElementType} from 'react';

type ComponenDictType = {
    [key: string]: ElementType;
};

const componenDict: ComponenDictType = {
    button: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Button)),
    label: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Label)),
};

export default componenDict;
