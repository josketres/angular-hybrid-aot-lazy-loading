# angular-hybrid-aot-lazy-loading
Demonstration of a hybrid app with aot, code-splitting and lazy-loading

```sh
# build
npm install
ng build --aot

# take a look at the dist/vendor.bundle.js 
# make sure that the compiler.js is not included.
npx source-map-explorer dist/vendor.bundle.js

# now run it
ng serve --target=production --open
```
