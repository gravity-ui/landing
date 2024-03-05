import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Persona'};

export const personaConfig = {
    id: 'persona',
    title: 'Persona',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Avatar)),
        props: {
            text: {
                type: 'input',
                defaultValue: 'Charles Darwin',
            },
            image: {
                type: 'input',
                defaultValue:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/193px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg',
            },
            type: {
                type: 'radioButton',
                values: mappingOptions(['person', 'email', 'empty']),
                defaultValue: 'person',
            },
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'n']),
                defaultValue: 's',
            },
            hasBorder: {
                type: 'switch',
                defaultValue: true,
            },
        },
    },
};
