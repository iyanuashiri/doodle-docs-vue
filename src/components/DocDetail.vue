<template>
  <div id="doc-detail">
    <Navbar></Navbar>
    <h1>{{ page_title }}</h1>
    <div class="card">

        <article>
          <h2 class="card-title">{{ doc.title }}</h2>
          <p class="card-body">{{ doc.body }}</p>
        </article>
      <router-link :to="{ name: 'doc-update', params: { id: doc.id } }">Edit Doc</router-link>
      <a href="#" v-on:click.prevent="deleteThisDoc">Delete Doc</a>
      <a type="button" class="mx-auto btn btn-primary btn active" data-toggle="modal" data-target="#exampleModal">Share Doc</a>
      <a type="button" class="mx-auto btn btn-primary btn active" data-toggle="modal" data-target="#exampleModal1">Unshare Doc</a>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <v-select v-model="selected" label="email" :options="users.results"></v-select>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button v-on:click.prevent="shareThisDoc" type="submit" class="btn btn-primary">Share</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel1">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <v-select v-model="selected" label="email" :options="users.results"></v-select>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button v-on:click.prevent="unshareThisDoc" type="submit" class="btn btn-primary">Unshare</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import api from '@/api'
import Navbar from '@/components/NavBar.vue'
export default {
  name: 'doc-detail',
  components: {
    Navbar,
    'v-select': vSelect
  },
  data () {
    return {
      page_title: 'Detail',
      doc: {},
      users: [],
      selected: ''
    }
  },
  methods: {
    getThisDoc: async function () {
      this.doc = await api.getDoc(this.$route.params.id)
    },
    deleteThisDoc: async function () {
      if (confirm('Are you sure you want to delete this doc?')) {
        await api.deleteDoc(this.$route.params.id)
        await this.$router.push({ name: 'doc-list' })
        alert('Document has been deleted successfully')
      }
    },
    shareThisDoc: async function () {
      await api.shareDoc(this.$route.params.id, this.selected['id'])
    },
    unshareThisDoc: async function () {
      await api.unshareDoc(this.$route.params.id, this.selected['id'])
    },
    getUsers: async function () {
      this.users = await api.getUsers()
    }
  },
  async mounted () {
    this.getThisDoc()
    this.getUsers()
  }

}
</script>

<style scoped>

</style>
