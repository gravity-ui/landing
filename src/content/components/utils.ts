import {TARGET_BRANCH, TARGET_PROFILE} from '../../constants';
import {Repos} from '../../types/common';

const uikitTargetBranch = process.env.UIKIT_TARGET_BRANCH || TARGET_BRANCH;
const componentsTargetBranch = process.env.COMPONENTS_TARGET_BRANCH || TARGET_BRANCH;
const githubTargetprofile = process.env.GITHUB_PROFILE || TARGET_PROFILE;

const TARGET_REPOS_BRANCHES = {
    [Repos.Uikit]: uikitTargetBranch,
    [Repos.Components]: componentsTargetBranch,
};

export type GetterProps = {componentName: string; repoName: Repos};

type RepoInfoGetterFunc = (props: GetterProps) => string;

export const mappingOptions = (arr: string[]) =>
    arr.map((item) => ({
        value: item,
        content: item,
    }));

export const getReadmeUrl: RepoInfoGetterFunc = ({componentName, repoName}) =>
    `https://raw.githubusercontent.com/${githubTargetprofile}/${repoName}/${TARGET_REPOS_BRANCHES[repoName]}/src/components/${componentName}/README.md`;

export const getGithubUrl: RepoInfoGetterFunc = ({componentName, repoName}) =>
    `https://github.com/${githubTargetprofile}/${repoName}/tree/main/src/components/${componentName}`;
