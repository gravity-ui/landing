import uikitComponentPaths from 'scripts/component-catalog/uikit-component-paths.json';

import {TARGET_PROFILE} from '../../constants';
import packagesVersions from '../../data/packages-versions.json';
import {Repos} from '../../types/common';

const githubTargetProfile = process.env.GITHUB_PROFILE || TARGET_PROFILE;

const TARGET_REPOS_VERSIONS = {
    [Repos.Uikit]: process.env.DEV_BRANCH_UIKIT || `v${packagesVersions[Repos.Uikit]}`,
    [Repos.Components]:
        process.env.DEV_BRANCH_COMPONENTS || `v${packagesVersions[Repos.Components]}`,
    [Repos.DateComponents]:
        process.env.DEV_BRANCH_DATE_COMPONENTS || `v${packagesVersions[Repos.DateComponents]}`,
    [Repos.Navigation]:
        process.env.DEV_BRANCH_NAVIGATION || `v${packagesVersions[Repos.Navigation]}`,
};

export type GetterProps = {componentName: string; repoName: Repos};

type RepoInfoGetterFunc = (props: GetterProps) => string;

const getComponentPath = ({repoName, componentName}: GetterProps) =>
    repoName === Repos.Uikit
        ? (uikitComponentPaths as Record<string, string>)[componentName] ?? componentName
        : componentName;

export const getGithubUrl: RepoInfoGetterFunc = (options) => {
    const {repoName} = options;
    const ref = repoName === Repos.Uikit ? TARGET_REPOS_VERSIONS[repoName] : 'main';
    return `https://github.com/${githubTargetProfile}/${repoName}/tree/${ref}/src/components/${getComponentPath(
        options,
    )}`;
};

type ReadmeInfoGetterFunc = (props: GetterProps) => {
    en: string;
    ru: string;
};

export const getReadmeUrl: ReadmeInfoGetterFunc = (options) => {
    const {repoName} = options;
    const url = `https://raw.githubusercontent.com/${githubTargetProfile}/${repoName}/${
        TARGET_REPOS_VERSIONS[repoName]
    }/src/components/${getComponentPath(options)}`;
    return {
        en: `${url}/README.md`,
        ru: `${url}/README-ru.md`,
    };
};

export const mappingOptions = (arr: string[]) =>
    arr.map((item) => ({
        value: item,
        content: item,
    }));
