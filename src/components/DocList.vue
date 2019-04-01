<template>
  <div id="doc-list">
    <Navbar></Navbar>
      <h1>{{ page_title }}</h1>

      <div v-for="doc in docs.results" :key="doc.id">
        <router-link :to="{name : 'doc-detail', params: {id: doc.id} }" >
          <article>
            <h2>{{ doc.title }}</h2>
          </article>
        </router-link>

      </div>
  </div>
</template>

<script>
import api from '@/api'
import Navbar from '@/components/NavBar.vue'
export default {
  name: 'doc-list',
  components: {
    Navbar
  },
  data () {
    return {
      page_title: 'List',
      docs: []
    }
  },
  methods: {
    getDocs: async function () {
      this.docs = await api.getDocs()
    }
  },
  async mounted () {
    this.getDocs()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
