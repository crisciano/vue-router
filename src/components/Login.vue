<template>
  <div class="login">
  <section>
    <div class="container">
      <div class="row">
        <h1>{{ msg }}</h1>  
        <div class="col s6 offset-s3">
          <div class="row">
            <form @submit.prevent="login()">
              <div class="input-field col s12">
                <input id="email" type="email" v-model="user.email" class="validate">
                <label for="email">Email</label>
              </div>
              <div class="input-field col s12">
                <input type="password" id="pass" v-model="user.password" class="validate">
                <label for="pass">Password</label>
              </div>
              <button type="submit" class="waves-effect waves-light btn">login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'login',
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.user.email, this.user.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 { font-weight: normal; }
  ul { list-style-type: none; padding: 0; }
  li { display: inline-block; margin: 0 10px; }
  a { color: #42b983; }
  .btn{color: #fff ;}
</style>
