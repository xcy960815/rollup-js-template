import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve' //将外部引入的js打包进来
import commonjs from '@rollup/plugin-commonjs' //将外部引入的js打包进来
import babel from 'rollup-plugin-babel'
export default {
    input: './src/handler.js',
    output: [
        {
            file: './dist/handler.umd.js',
            format: 'umd',
            name: 'handler',
        },
        {
            file: './dist/handler.amd.js',
            format: 'amd',
            name: 'handler',
        },
        {
            file: './dist/handler.es.js',
            format: 'es',
            name: 'handler',
        },
    ],
    plugins: [
        nodeResolve(),
        commonjs({
            include: 'node_modules/**',
        }),

        terser(),
        babel({
            exclude: 'node_modules/**',
        }),
    ],
}
