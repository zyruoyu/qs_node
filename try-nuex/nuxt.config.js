module.exports = {
  build: {
      // vendor lib
      vendor: ['axios']
  },
  loading:{
      color: '#4FC08D',
      failedColor: '#bf5050',
      duration: 1500
  },
  head: {
      title: 'Nuxt vue blog'
  },
  generate: {
    routes: [
      './posts/1'
    ]
  }
}