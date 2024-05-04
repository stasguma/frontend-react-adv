![Static Badge](https://img.shields.io/badge/designed%20by%20Feature--Sliced%20Design-3193FF?style=flat-square&link=https%3A%2F%2Ffeature-sliced.design%2F)

![image](https://github.com/stasguma/frontend-react-adv/assets/15160733/1cc9ac46-dd36-4f41-a382-b564acd0267e)

An open source frontend application built using the **React** ⚛️ and **Feature-Sliced Design** 🍰.

> This app is a work in progress. See the roadmap below.

- TypeScript, React, Redux Toolkit, RTK Query, React Hook Form, Valibot
- Webpack, ESlint, Stylelint, Vitest, Testing Library
- Architecture based on [Feature-Sliced Design](https://feature-sliced.design/)

## Live demo

- [Application](https://frontend-react-adv.onrender.com/) (login: admin; password: supadupapass)
- [Storybook](https://main--65c1748bed8d59893ba6a94f.chromatic.com/)

## About project

This project will be an example of how to create a large-scale project with clean code. Project based on a Feature-Sliced Design methodology. Currently it doesn't have much functionality. In the future it will have all the basic features that most projects have.

Don't pay too much attention to the design, that's not the point of this project. Maybe in the future it'll be enhanced.

## Features

- Typed (API adapters, form variables validators by `Valibot`)
- Developing by Feature-Sliced Design (Layers isolation and composition, Public API, DDD)
- Fully API emulation with `Mock Config Server`
- Tested with `Vitest`, `Testing Library`
- Storybook stories (Can change theme and language)
- Mock API calls for tests and storybook with `Mock Service Worker`
- Dark mode (Capability to easily implement a new theme)
- Localization with `i18next`
- Code splitting or lazy loading (Lazy load react components and redux store (reducers))
- Linting TS and styles with `ESlint`, `Stylelint`
- Regression testing with `Chromatic`
- CI using GitHub Actions linting and testing on `push` and `pull request` actions

# Roadmap

App business logic:

- [x] Profile pages
- [ ] Upload avatar feature 

Technologies:

- [ ] ...

Other:

- [ ] Fix FSD errors
- [ ] Fix TODO into code
- [ ] Create a nice looking design

## Running locally

1. Install dependencies

```bash
pnpm install
```
```bash
npm install
```
```bash
yarn install
```

2. Copy `.env.example` to `.env`

```bash
cp .env.example .env
```

3. Start Webpack development server

```bash
pnpm dev
```
```bash
npm run dev
```
```bash
yarn dev
```

or start Storybook

```bash
pnpm storybook
```
```bash
npm run storybook
```
```bash
yarn storybook
```

## Troubleshoots

- the `cross-env` package needs for a workaround, because the `ts-node` package has a bug with esm type modules and crashes during initialization. It needs to wait for fix it. ([Issue 1](https://github.com/TypeStrong/ts-node/issues/1997#issuecomment-1915868832)) ([Issue 2](https://github.com/webpack/webpack-cli/issues/2458#issuecomment-1915865909))
- we should name the file `babel.config.cjs` with the extension `cjs` and not `js`, because of [esm bug](https://stackoverflow.com/questions/61146112/error-while-loading-config-you-appear-to-be-using-a-native-ecmascript-module-c).
- `json-server` has a [bug](https://github.com/typicode/json-server/issues/1500) on the last version (`v1.0.0-alpha.23`) so we use `0.17.4` version instead. (temporary replace package on [Mock Config Server](https://github.com/siberiacancode/mock-config-server/))

## License

Licensed under the MIT license.