import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import type {Component} from '../../types';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Avatar'};

export const avatarConfig: Component = {
    id: 'avatar',
    title: 'Avatar',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Avatar)),
        props: {
            size: {
                type: 'select',
                values: mappingOptions(['xs', 's', 'm', 'l', 'xl']),
                defaultValue: 'xl',
            },
            theme: {
                type: 'radioButton',
                values: mappingOptions(['normal', 'brand']),
                defaultValue: 'normal',
            },
            view: {
                type: 'radioButton',
                values: mappingOptions(['filled', 'outlined']),
                defaultValue: 'filled',
            },
            imgUrl: {
                type: 'input',
            },
            fallbackImgUrl: {
                type: 'input',
            },
            sizes: {
                type: 'input',
            },
            srcSet: {
                type: 'input',
            },
            alt: {
                type: 'input',
            },
            icon: {
                type: 'input',
                defaultValue:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>',
            },
            text: {
                type: 'input',
            },
            backgroundColor: {
                type: 'input',
            },
            borderColor: {
                type: 'input',
            },
            color: {
                type: 'input',
            },
            title: {
                type: 'input',
            },
        },
    },
};
