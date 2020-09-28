import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
export default {
    input: './src/handler.js',
    output: {
        file: './dist/handler.js',
        format: 'umd',
        name: 'xuchongyu',
    },
    plugins: [
        terser(),
        babel({
            exclude: 'node_modules/**',
        }),
    ],
}
