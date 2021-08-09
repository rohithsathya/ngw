For library deployment and npm publish
https://angular.io/guide/creating-libraries#use-typescript-path-mapping-for-peer-dependencies

> link to documents :
https://rohithsathya.github.io/ngw/


>git add .
>git status
>git commit -m "first Draft"
>git push  (git push -u origin master)


npm run build
npm publish 
npm uninstall defaeco-core --save;
npm install  defaeco-core@latest --save;

# to publish pages
install angular-cli-ghpages
> ng add angular-cli-ghpages
>ng deploy --base-href=/ngw/

# Ngw

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.