import * as Components from '@gravity-ui/components';
import * as DateComponents from '@gravity-ui/date-components';
import * as Icons from '@gravity-ui/icons';
import * as Navigation from '@gravity-ui/navigation';
import * as PageConstructor from '@gravity-ui/page-constructor';
import * as UIKit from '@gravity-ui/uikit';
import React from 'react';
import type {Scope, Theme} from 'react-live-runner';

export const scope = {
    import: {
        react: React,
        '@gravity-ui/uikit': UIKit,
        '@gravity-ui/date-components': DateComponents,
        '@gravity-ui/navigation': Navigation,
        '@gravity-ui/components': Components,
        '@gravity-ui/page-constructor': PageConstructor,
        '@gravity-ui/icons': Icons,
    },
} as const satisfies Scope;

export const editorDarkTheme: Theme = {
    plain: {
        color: '#cccccc',
        backgroundColor: '#160d1b',
        fontFamily:
            'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
        lineHeight: 1.45,
        fontSize: '14px',
        textWrap: 'nowrap',
        width: 'fit-content',
        minWidth: '100%',
    },
    styles: [
        {
            types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
            style: {color: '#999999'},
        },
        {types: ['punctuation'], style: {color: '#cccccc'}},
        {types: ['namespace', 'tag', 'deleted', 'attr-name'], style: {color: '#e2777a'}},
        {types: ['function-name'], style: {color: '#6196cc'}},
        {types: ['boolean', 'function', 'number'], style: {color: '#f08d49'}},
        {types: ['class-name', 'constant', 'property', 'symbol'], style: {color: '#f8c555'}},
        {
            types: ['atrule', 'builtin', 'important', 'keyword', 'selector'],
            style: {color: '#cc99cd'},
        },
        {types: ['attr-value', 'char', 'regex', 'string', 'variable'], style: {color: '#7ec699'}},
        {types: ['entity', 'operator', 'url'], style: {color: '#67cdcc'}},
        {types: ['inserted'], style: {color: 'green'}},
        {types: ['italic'], style: {fontStyle: 'italic'}},
        {types: ['bold', 'important'], style: {fontWeight: 'bold'}},
        {types: ['maybe-class-name'], style: {color: '#f8c555'}},
        {
            types: ['template-string', 'template-punctuation', 'interpolation'],
            style: {color: '#7ec699'},
        },
    ],
};
