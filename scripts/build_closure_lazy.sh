java -jar node_modules/google-closure-compiler/compiler.jar --flagfile closure.conf --entry_point=./tmp/es6/app/main.lazy --output_manifest=./tmp/0.MF --js_output_file=tmp/waste.js
java -jar node_modules/google-closure-compiler/compiler.jar --flagfile closure.conf --entry_point=./tmp/es6/app/list/list.module.ngfactory --output_manifest=./tmp/1.MF --js_output_file=tmp/waste.js
java -jar node_modules/google-closure-compiler/compiler.jar --flagfile closure.conf --entry_point=./tmp/es6/app/search/search.module.ngfactory --output_manifest=./tmp/2.MF --js_output_file=tmp/waste.js
java -jar node_modules/google-closure-compiler/compiler.jar --flagfile closure.conf --entry_point=./tmp/es6/app/subscribe/subscribe.module.ngfactory --output_manifest=./tmp/3.MF --js_output_file=tmp/waste.js

node ./scripts/build_closure_modules.js

java -jar node_modules/google-closure-compiler/compiler.jar --flagfile ./tmp/closure.lazy.conf \
--entry_point=./tmp/es6/app/main.lazy \
--entry_point=./tmp/es6/app/list/list.module.ngfactory \
--entry_point=./tmp/es6/app/search/search.module.ngfactory \
--entry_point=./tmp/es6/app/subscribe/subscribe.module.ngfactory \
--output_manifest=tmp/manifest.MF \
--module_output_path_prefix=dist/lazyloading-closure/ \
  "--module_wrapper=bundle1:(self._S=self._S||[]).push((function(){%s}));
//# sourceMappingURL=%basename%.map" \
  "--module_wrapper=bundle2:(self._S=self._S||[]).push((function(){%s}));
//# sourceMappingURL=%basename%.map" \
  "--module_wrapper=bundle3:(self._S=self._S||[]).push((function(){%s}));
//# sourceMappingURL=%basename%.map"
