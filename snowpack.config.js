module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  buildOptions: {
    out: './docs'
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-optimize',
    '@snowpack/plugin-dotenv'
  ],
  alias: {
    '~': './src'
  },
  devOptions: {
    open: 'none'
  }
}