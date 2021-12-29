import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      name: "index"
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      name: "index"
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: "index"
    },
  ],
  external: [/core-js/, /@babel\/runtime/, 'react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",    // 防止转义node_modules下的文件
      extensions: ['.js', '.jsx', '.mjs'],
      babelHelpers: "runtime"
    }),
  ]
};