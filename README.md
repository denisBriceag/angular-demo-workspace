# Angular Demo Workspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.0.

## CSR Application

To start a local development server, run:

```bash
ng serve csr-demo
```

To build in dev or prod configuration, run:

```bash
ng build csr-demo --configuration {development/production}
```

## CSR Application

To start a local development server, run:

```bash
ng serve ssr-demo
```

To start app in SSR mode:

```bash
node dist/ssr-demo/server/server.mjs
```

To build in dev or prod configuration, run:

```bash
ng build ssr-demo --configuration {development/production}
```

This will compile your project and store the build artifacts in the `dist/{ssr-demo/csr-demo}` directory. By default, the production build optimizes your application for performance and speed.

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name --project={ssr-demo/csr-demo}
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
