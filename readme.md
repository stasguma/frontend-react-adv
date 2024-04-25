![Static Badge](https://img.shields.io/badge/designed%20by%20Feature--Sliced%20Design-3193FF?style=flat-square&link=https%3A%2F%2Ffeature-sliced.design%2F)

![image](https://github.com/stasguma/frontend-react-adv/assets/15160733/1cc9ac46-dd36-4f41-a382-b564acd0267e)

An open source frontend application built using the **React** ⚛️ and **Feature-Sliced Design** 🍰.

> This app is a work in progress. See the roadmap below.

- TypeScript, React, Redux Toolkit, RTK Query, React Hook Form, Valibot
- Webpack, ESlint, Stylelint, Vitest, Testing Library
- Architecture based on [Feature-Sliced Design](https://feature-sliced.design/)

## Live demo

- [Application]()
- [Storybook](https://main--65c1748bed8d59893ba6a94f.chromatic.com/)

## About project

This project will be an example of how to create a large-scale large project with clean code. Project based on a Feature-Sliced Design methodology.

## Features

- Fully Typed (API adapters, catched error with type guards, form and env variables validators by valibot)
- Developing by Feature-Sliced Design (Layers isolation and composition, Public API, DDD)
- Fully API emulation with `Mock Config Server`
- Storybook stories

# Roadmap

App business logic:

- [ ] Profile pages

Technologies:

- [ ] ...

Other:

- [ ] Fix FSD errors
- [ ] Fix TODO into code

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

or start Storybook stand

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