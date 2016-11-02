[![Build Status](https://travis-ci.org/mlaval/optimize-angular-app.svg?branch=master)](https://travis-ci.org/mlaval/optimize-angular-app)

# optimize-angular-app
Let's optimize an Angular application for production.

This repository shows how to apply a number of techniques on a technical demo application. This includes bundling, tree shaking, ahead of time compilation, lazy loading and pre-rendering with universal.

You can build the demo yourself, or check it at: [http://mlaval.github.io/optimize-angular-app/](http://mlaval.github.io/optimize-angular-app/)

## Running scripts
- `npm install` to prepare your environment
- `npm run build` to build all versions of the application (it takes several minutes)
- `npm start` to serve the files at [http://localhost:8080/](http://localhost:8080/)

### Step by step
The build task executes a number of independent steps which can be executed separately if needed:
- `npm run clean`: clean all generated files
- `npm run public`: generate and copy static assets
- `npm run dev`
- `npm run bundling-app`
- `npm run bundling-full`
- `npm run treeshaking-rollup`
- `npm run treeshaking-webpack`
- `npm run aot-rollup`
- `npm run aot-webpack`
- `npm run lazyloading`
- `npm run universal`

## Development
To develop the application itself, here is the workflow:
- `npm run clean`
- `npm run public`
- `npm run watch`: watch and transpile the application source code
- `npm start` to serve the files at [http://localhost:8080/](http://localhost:8080/)

To run integration tests:
- `npm run build`
- `npm test`

To generate a performance report:
- `npm run build`
- `npm run perf`
