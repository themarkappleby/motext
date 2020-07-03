import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const output = {
  globals: {
    gsap: 'gsap'
  },
  file: 'dist/motext.js',
  format: 'umd',
  name: 'motext'
}

export default {
  input: 'src/motext.js',
  output: [
    output,
    {
      ...output,
      file: 'dist/motext.min.js',
      plugins: [terser()]
    }
  ],
  plugins: [babel({ babelHelpers: 'bundled' })],
  external: ['gsap']
}
