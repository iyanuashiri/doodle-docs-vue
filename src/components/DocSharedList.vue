<template>
  <div id="DocSharedList">
    <Navbar></Navbar>
    <h1>{{ page_title }}</h1>

    <div v-for="doc in docs.results" :key="doc.id">
      <div class="card w-75 mx-auto border-info">
        <div class="card-body">
          <div>
            <h2><router-link :to="{name: 'doc-detail', params: {id: doc.id}}">{{ doc.title}}</router-link></h2>
            <p>{{ doc.body | truncate(20) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import Navbar from '@/components/NavBar.vue'
export default {
  name: 'DocSharedList',
  components: {
    Navbar
  },
  data () {
    return {
      page_title: 'Shared List',
      docs: []
    }
  },
  methods: {
    getDocs: async function () {
      this.docs = await api.sharedDocs()
    }
  },
  filters: {
    truncate: function (value, length) {
      length = length || 15
      if (!value || typeof value !== 'string') return ''
      if (value.length <= length) return value
      return value.substring(0, length) + '...'
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
