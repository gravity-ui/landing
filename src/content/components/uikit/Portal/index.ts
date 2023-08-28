import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Portal'};

export const portalConfig = {
    id: 'portal',
    title: 'Portal',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
};
