<template>
  <div id="doc-detail">
    <Navbar></Navbar>
    <h1>{{ page_title }}</h1>
    <div class="card">

        <article>
          <h2 class="card-title">{{ doc.title }}</h2>
          <p class="card-body">{{ doc.body }}</p>
        </article>
      <router-link :to="{ name: 'doc-update', params: {id: doc.id}}">Edit Doc</router-link>
        <a href="#" v-on:click.prevent="deleteThisDoc(doc.id)">Delete Doc</a>
    </div>

  </div>

</template>

<script>
import api from '@/api'
import Navbar from '@/components/NavBar.vue'
export default {
  name: 'doc-detail',
  components: {
    Navbar
  },
  data () {
    return {
      page_title: 'Detail',
      doc: {}
      // model: {}
    }
  },
  methods: {
    getThisDoc: async function () {
      this.doc = await api.getDoc(this.$route.params.id)
    },
    deleteThisDoc: async function (id) {
      if (confirm('Are you sure you want to delete this doc?')) {
        if (this.doc.id === id) {
          // this.model = {}
        }
        api.deleteDoc(this.$route.params.id)
        await this.$router.push({ name: 'doc-list' })
        alert('Document has been deleted successfully')
      }
    }
  },
  async mounted () {
    this.getThisDoc()
  }

}
</script>

<style scoped>

</style>
