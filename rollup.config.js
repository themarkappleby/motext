import babel from '@rollup/plugin-babel'

export default {
  input: 'src/motext.js',
  output: {
    globals: {
      gsap: 'gsap'
    },
    file: 'dist/motext.js',
    format: 'umd',
    name: 'motext'
  },
  plugins: [babel({ babelHelpers: 'bundled' })],
  external: ['gsap']
}
