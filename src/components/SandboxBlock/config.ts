import {OptionsType} from './types';

const mappingOptions = (arr: string[]) =>
    arr.map((item) => ({
        value: item,
        content: item,
    }));

const configOptions: OptionsType = {
    button: {
        select: {
            view: mappingOptions([
                'normal',
                'action',
                'raised',
                'outlined',
                'outlined-info',
                'outlined-danger',
                'flat',
                'flat-info',
                'flat-danger',
                'flat-secondary',
                'normal-contrast',
                'outlined-contrast',
                'flat-contrast',
            ]),
        },
        radioButton: {
            width: mappingOptions(['auto', 'max']),
            size: mappingOptions(['xs', 's', 'm', 'l', 'xl']),
        },
        switch: {
            state: ['disabled', 'loading'],
        },
        input: {
            state: ['text'],
        },
    },

    label: {
        select: {
            theme: mappingOptions([
                'normal',
                'info',
                'success',
                'warning',
                'danger',
                'unknown',
                'clear',
            ]),
        },
        radioButton: {
            size: mappingOptions(['xs', 's', 'm']),
            type: mappingOptions(['default', 'close', 'copy']),
        },
        switch: {
            state: ['disabled'],
        },
        input: {
            state: ['text', 'value'],
        },
    },
};

export {configOptions};
