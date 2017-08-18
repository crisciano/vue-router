<template>
  <section id="separador">
    <div class="container">
      <div class="row">
        <h1>{{ msg }}</h1>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'separador',
  data () {
    return {
      msg: 'separador'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #separador{
    background: url(../assets/img/sample-1.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; 
  }
  section{ padding: 80px 0  }
  h1,h2,h3,h4,h5{ color: #fff; }
</style>
