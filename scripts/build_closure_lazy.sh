OPTS=(
  "--language_in=ES6_STRICT"
  "--language_out=ES5"
  "--compilation_level=ADVANCED_OPTIMIZATIONS"
  "--js_output_file=tmp/waste.js"
  "--create_source_map=%outname%.map"
  "--variable_renaming_report=tmp/variable_renaming_report"
  "--property_renaming_report=tmp/property_renaming_report"
  "--warning_level=QUIET"

  # Don't include ES6 polyfills
  "--rewrite_polyfills=false"

  # List of path prefixes to be removed from ES6 & CommonJS modules.
  "--js_module_root=node_modules/@angular/common"
  "--js_module_root=node_modules/@angular/core"
  "--js_module_root=node_modules/@angular/forms"
  "--js_module_root=node_modules/@angular/http"
  "--js_module_root=node_modules/@angular/platform-browser"
  "--js_module_root=node_modules/@angular/router"
  "--js_module_root=node_modules"
  "--js_module_root=lib/vendor"

  # Uncomment for easier debugging
  #"--formatting=PRETTY_PRINT"
  #"--debug"

  # Include zone.js as externs rather than the source code.
  # Allows us to use --dependency_mode=STRICT below.
  # Otherwise the zone.js file is not imported anywhere and gets dropped.
  # See index.html
  #node_modules/zone.js/dist/zone.js
  "node_modules/@angular/core/src/testability/testability.externs.js"
  "node_modules/zone.js/dist/zone_externs.js"

  $(find lib/vendor/rxjs -name '*.js')
  node_modules/@angular/core/@angular/core.js
  node_modules/@angular/common/@angular/common.js
  node_modules/@angular/compiler/@angular/compiler.js
  node_modules/@angular/forms/@angular/forms.js
  node_modules/@angular/http/@angular/http.js
  node_modules/@angular/platform-browser/@angular/platform-browser.js
  node_modules/@angular/router/@angular/router.js
  $(find lib/vendor/@ng-bootstrap/ng-bootstrap -name '*.js')
  $(find tmp/es6 -name '*.js')

  # Trim files not imported (transitively) from bootstrap.js
  "--dependency_mode=STRICT"
)

JVM_ARGS=""
# To attach a remote debugger:
#JVM_ARGS="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005"

set -ex
java $JVM_ARGS -jar node_modules/google-closure-compiler/compiler.jar --entry_point=./tmp/es6/app/main.lazy --output_manifest=tmp/0.MF $(echo ${OPTS[*]})
java $JVM_ARGS -jar node_modules/google-closure-compiler/compiler.jar --entry_point=./tmp/es6/app/list/list.module.ngfactory --output_manifest=tmp/1.MF $(echo ${OPTS[*]})
java $JVM_ARGS -jar node_modules/google-closure-compiler/compiler.jar --entry_point=./tmp/es6/app/search/search.module.ngfactory --output_manifest=tmp/2.MF $(echo ${OPTS[*]})
java $JVM_ARGS -jar node_modules/google-closure-compiler/compiler.jar --entry_point=./tmp/es6/app/subscribe/subscribe.module.ngfactory --output_manifest=tmp/3.MF $(echo ${OPTS[*]})

node ./scripts/build_closure_modules.js

OPTS=(
  "--language_in=ES6_STRICT"
  "--language_out=ES5"
  "--compilation_level=ADVANCED_OPTIMIZATIONS"
  "--module_output_path_prefix=dist/lazyloading-closure/"
  "--create_source_map=%outname%.map"
  "--variable_renaming_report=tmp/variable_renaming_report"
  "--property_renaming_report=tmp/property_renaming_report"
  "--warning_level=QUIET"

  # Don't include ES6 polyfills
  "--rewrite_polyfills=false"

  # List of path prefixes to be removed from ES6 & CommonJS modules.
  "--js_module_root=node_modules/@angular/common"
  "--js_module_root=node_modules/@angular/core"
  "--js_module_root=node_modules/@angular/forms"
  "--js_module_root=node_modules/@angular/http"
  "--js_module_root=node_modules/@angular/platform-browser"
  "--js_module_root=node_modules/@angular/router"
  "--js_module_root=node_modules"
  "--js_module_root=lib/vendor"

  # Uncomment for easier debugging
  #"--formatting=PRETTY_PRINT"
  #"--debug"

  # Include zone.js as externs rather than the source code.
  # Allows us to use --dependency_mode=STRICT below.
  # Otherwise the zone.js file is not imported anywhere and gets dropped.
  # See index.html
  #node_modules/zone.js/dist/zone.js
  "node_modules/@angular/core/src/testability/testability.externs.js"
  "node_modules/zone.js/dist/zone_externs.js"
  $(cat tmp/modules.txt)

  # Trim files not imported (transitively) from bootstrap.js
  "--entry_point=./tmp/es6/app/main.lazy"
  "--entry_point=./tmp/es6/app/list/list.module.ngfactory"
  "--entry_point=./tmp/es6/app/search/search.module.ngfactory"
  "--entry_point=./tmp/es6/app/subscribe/subscribe.module.ngfactory"


  "--dependency_mode=STRICT"
  "--output_manifest=tmp/manifest.MF"
)

JVM_ARGS=""
# To attach a remote debugger:
#JVM_ARGS="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005"

set -ex
java $JVM_ARGS -jar node_modules/google-closure-compiler/compiler.jar $(echo ${OPTS[*]}) \
  "--module_wrapper=bundle1:(self._S=self._S||[]).push((function(){%s}));
//# sourceMappingURL=%basename%.map" \
  "--module_wrapper=bundle2:(self._S=self._S||[]).push((function(){%s}));
//# sourceMappingURL=%basename%.map" \
  "--module_wrapper=bundle3:(self._S=self._S||[]).push((function(){%s}));
//# sourceMappingURL=%basename%.map"
