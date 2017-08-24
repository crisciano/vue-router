<template>
  <nav>
  <div class="container">
    <div class="row">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Logo</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </div>
  </div>
  </nav>
</template>

<script>
// import { router } from '../router/index.js'

export default {
  name: 'nav',
  data () {
    return {
      msg: 'Nav '
      // router
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
