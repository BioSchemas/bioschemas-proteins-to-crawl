import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import cjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/BioschemasProteinsToCrawl.js',
        format: 'iife',
        name: 'BioschemasProteinsToCrawl',
        sourcemap: true
       },
    plugins: [
        nodeResolve({jsnext: true}),
        babel({
            exclude: 'node_modules/**'
        }),
        globals(),
        cjs({
          exclude: 'node_modules/process-es6/**',
          include: [
            'node_modules/create-react-class/**',
            'node_modules/fbjs/**',
            'node_modules/object-assign/**',
            'node_modules/react/**',
            'node_modules/react-dom/**',
            'node_modules/prop-types/**'
          ]
        })
    ]
};