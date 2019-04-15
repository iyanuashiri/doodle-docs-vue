<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a>Real Time Docs</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link :to="{name: 'doc-list'}" class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></router-link>
        <a class="nav-item nav-link" href="#">Shared Docs</a>
      </div>
    </div>
    <button v-on:click="signOut" class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
  </nav>

</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
export default {
  name: 'NavBar',
  methods: {
    signOut: async function () {
      let url = 'http://127.0.0.1:8000/api/auth/token/destroy/'
      await axios.post(url)
      localStorage.removeItem('authToken')
      alert('You have logged out successfully')
    }
  }
}
</script>

<style scoped>

</style>
