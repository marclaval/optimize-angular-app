import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'app/main.aot.ts',
  dest: 'dist/aot-rollup/app.min.js',
  sourceMap: false,
  format: 'iife',
  plugins: [
    typescript({
      typescript: require('typescript'),
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true
    }),
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: 'node_modules/rxjs/**',
    }),
    uglify()
  ]
}