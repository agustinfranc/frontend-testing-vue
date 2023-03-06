# frontend-testing-vue

Frontend testing implementation (Codely)

## Testing Library

https://testing-library.com/docs/

https://testing-library.com/docs/vue-testing-library/intro

### The problem

You want to write maintainable tests for your Vue components. As a part of this goal, you want your tests to avoid including implementation details of your components. You'd rather focus on making your tests give you the confidence for which they are intended.

### This solution

Vue Testing Library is a very light-weight solution for testing Vue components. It provides light utility functions on top of @vue/test-utils, in a way that encourages better testing practices.

Its primary guiding principle is:

    [The more your tests resemble the way your software is used, the more confidence they can give you.](https://testing-library.com/docs/guiding-principles)

So rather than dealing with instances of rendered Vue components, your tests will work with actual DOM nodes.

The utilities this library provides facilitate querying the DOM in the same way the user would. They allow you to find elements by their label text, finding links and buttons from their text, and assert that your application is accessible.

It also exposes a recommended way to find elements by a data-testid as an "escape hatch" for elements where the text content and label do not make sense or is not practical.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```
