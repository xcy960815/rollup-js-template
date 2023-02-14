import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve'; //将外部引入的js打包进来
import babel from 'rollup-plugin-babel';
import del from 'rollup-plugin-delete';
import commonjs from '@rollup/plugin-commonjs'; //将CommonJS模块转换为ES6, 方便rollup直接调用
import livereload from 'rollup-plugin-livereload';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/index.umd.js',
      format: 'umd',
      name: 'rollupJsTemplate',
    },
    {
      file: './dist/index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    // 源代码更改马上清空dist文件夹下面打包过的文件 防止代码冗余
    del({ targets: ['dist'] }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    isProduction && terser(),
    babel({
      exclude: 'node_modules/**',
    }),
    // 热更新
    !isProduction && livereload(),
  ],
};
