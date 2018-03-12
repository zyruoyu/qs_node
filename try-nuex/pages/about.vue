<template>
  <div>
      <p>Hi from {{name}}</p>
      <nuxt-link to="/">about</nuxt-link>
  </div>
</template>

<script>
export default {
    asyncData(){
        return{
            name:process.static ? 'static' : (process.server ? 'server' : 'client')

        }
        // nuxt的本质就是将。vue交给后端去渲染
        // webpack server-side-renderer
        // react next.js
        // .vue => html css js
    },
    head:{
        title: 'About Page'
    }
}
</script>

<style>

</style>
