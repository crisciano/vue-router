<template>
  <div id="app">
    <header-cp></header-cp>
    <router-view></router-view>
    <footer-cp></footer-cp>
  </div>
</template>

<script>
import HeaderCp from '@/components/Header'
import FooterCp from '@/components/Footer'

export default {
  name: 'app',
  components: {
    HeaderCp,
    FooterCp
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
