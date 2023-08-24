import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'List'};

export const listConfig = {
    id: 'list',
    title: 'List',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
};
