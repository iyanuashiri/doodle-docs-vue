<template>
  <div id="">
    <NavBar></NavBar>
    <form @submit.prevent="signIn" class="mx-auto w-50">
      <div class="form-group">
        <input v-model="model.email" type="text" class="form-control" id="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input v-model="model.password" type="password" class="form-control" id="password" placeholder="Password" required>
      </div>
      <button type="submit" class="btn btn-block btn-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from './NavBar'
export default {
  name: 'Signin',
  components: { NavBar },
  data () {
    return {
      page_title: 'Sign In',
      model: {}
    }
  },
  methods: {
    signIn: async function () {
      let url = 'http://127.0.0.1:8000/api/auth/token/create/'
      axios.post(url, this.model).then(response => {
        localStorage.setItem('authToken', response.auth_token)
        localStorage.setItem('email', this.model.email)
        alert('You have logged in successfully')
        this.$router.push({ name: 'doc-list' })
      })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
