# UI-Router for Angular 2 QuickStart Source

### Start development

Install the npm packages described in the `package.json` and verify that it works:

```bash
git clone https://github.com/ui-router/quickstart-ng2.git
cd quickstart-ng2
npm install
npm run tsc
npm start
```

### UI-Router for NG2 quickstart highlights:

- We're using npm and systemjs.  We added a dependency on latest `ui-router-ng2` in [package.json](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/package.json#L19)
- Import UI-Router classes [directly from `"ui-router-ng2"`](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/app.component.ts#L2)
- Either [bootstrap a `UIView` component](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/_bootstrap/bootstrap.ts#L14), or add a `<ui-view></ui-view>` viewport to your root component.
- [Create application states](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/app.states.ts#L16-L20) (as defined by Ng2StateDeclaration]]) which will fill in the `ui-view` viewports with component.
- Create a `UIRouterConfig` and apply any router config in the `UIRouterConfig.configure()` function.
- Bootstrap a `@UIRouterModule`. Provide UI-Router using [the `provideUIRouter` helper](https://github.com/ui-router/quickstart-ng2/blob/c69c19d30fbeb25e99a2d5c3b3fb72866513ab03/src/app.module.ts#L34).

#### Foo module

- Simple nested views
- Update browser hash value

#### Bar module

- Resolve data from server (bar list)
- Query parameter
- Nested view (bar detail renders inside bar list)

#### Baz module

- This module is lazy loaded using a "Future State" with a [`lazyLoad` function](https://ui-router.github.io/docs/latest/interfaces/state.statedeclaration.html#lazyload)
- Resolve data from server (baz list)
- Path parameter
- View targeting (baz detail replaces the baz list) 

---

You're ready to write your application.

Remember the npm scripts in `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.

(This repo is forked from https://github.com/angular/quickstart)

