# Gravity UI landing page

https://gravity-ui.com/

## Development

Add `.env` file to the root of project with the following content:

```sh
GITHUB_TOKEN=<TOKEN>
```

`<TOKEN>` is your [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

Install dependencies:

```sh
npm ci
```

Start dev server:

```sh
npm run start
```

#### Optional env variables

```sh
GITHUB_PROFILE="your profile" # default gravity-ui, target profile for pulling documentation from components

# Dev branches for testing component documentation
DEV_BRANCH_UIKIT="dev-branch-name"
DEV_BRANCH_COMPONENTS="dev-branch-name"
DEV_BRANCH_DATE_COMPONENTS="dev-branch-name"
```
