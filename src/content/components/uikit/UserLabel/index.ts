import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'UserLabel'};

export const userLabelConfig = {
    id: 'user-label',
    title: 'UserLabel',
    githubUrl: getGithubUrl(getterOptions),
    isComingSoon: true,
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.UserLabel)),
        props: {
            avatar: {
                type: 'input',
                defaultValue:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/193px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg',
            },
            type: {
                type: 'radioButton',
                values: mappingOptions(['person', 'email', 'empty']),
                defaultValue: 'person',
            },
            view: {
                type: 'radioButton',
                values: mappingOptions(['outlined', 'clear']),
                defaultValue: 'outlined',
            },
            children: {
                type: 'input',
                defaultValue: 'Charles Darwin',
            },
        },
    },
};
