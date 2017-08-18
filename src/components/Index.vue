<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <h1>{{ msg }}</h1>

          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img src="../assets/img/sample-1.jpg">
                <span class="card-title">Card Title</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>

          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img src="../assets/img/sample-1.jpg">
                <span class="card-title">Card Title</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!--  separador  -->
    <separador></separador>
  </div>
</template>

<script>
import Separador from '@/components/Separador'

export default {
  name: 'index',
  data () {
    return {
      msg: 'index'
    }
  },
  components: {
    Separador
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 { font-weight: normal; }
  ul { list-style-type: none; padding: 0; }
  li { display: inline-block; margin: 0 10px; }
  a { color: #42b983; }
</style>
