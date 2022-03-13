module.exports = {
  preprocess: require('svelte-preprocess')({
    scss: {
      prependData: '@import "./src/scss/main.scss";'
    },
    postcss: {
      plugins: [
        require('autoprefixer')()
      ]
    }
  }) 
}