<template>
  <div id="doc-detail">
    <Navbar></Navbar>
    <h1>{{ page_title }}</h1>
    <div>
        <article>
          <h2>{{ doc.title }}</h2>
          <p>{{ doc.body }}</p>
        </article>
        <a href="#" v-on:click.prevent="populatePostToEdit(doc)">Edit Doc</a>
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
      doc: {},
      model: {}
    }
  },
  methods: {
    getThisDoc: async function () {
      this.doc = await api.getDoc(this.$route.params.id)
    },
    deleteThisDoc: function (id) {
      if (confirm('Are you sure you want to delete this doc?')) {
        if (this.model.id === id) {
          this.model = {}
        }
        api.deleteDoc(this.$route.params.id)
      }
    },
    populatePostToEdit: function (doc) {
      this.model = Object.assign({}, doc)
    }

  },
  async mounted () {
    this.getThisDoc()
  }

}
</script>

<style scoped>

</style>
