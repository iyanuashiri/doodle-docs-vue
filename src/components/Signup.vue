<template>
  <div id="">
    <NavBar></NavBar>
    <form @submit.prevent="signUp" class="mx-auto w-50">
      <div class="form-group">
        <input v-model="model.email" type="email" class="form-control" id="email" placeholder="Email Address" required>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <input v-model="model.first_name" type="text" class="form-control" id="firstname" placeholder="First Name" required>
        </div>
        <div class="form-group col-md-6">
          <input v-model="model.last_name" type="text" class="form-control" id="lastname" placeholder="Last Name" required>
        </div>
        <div class="form-group col-md-6">
          <input v-model="model.password" type="password" class="form-control" id="password" placeholder="Password" required>
        </div>
      </div>
      <button type="submit" class="btn btn-block btn-primary">Sign up</button>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
import NavBar from './NavBar'
export default {
  name: 'Signup',
  components: { NavBar },
  data () {
    return {
      page_title: 'Sign Up',
      model: {}
    }
  },
  methods: {
    signUp: async function () {
      let url = 'http://127.0.0.1:8000/api/auth/users/create/'
      axios.post(url, this.model).then(response => {
        alert('Your account has been created successfully')
        this.$router.push({ name: 'sign-in' })
      })
    }
  }
}
</script>

<style scoped>

</style>
