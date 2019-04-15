<template>
  <div id="doc-update">
    <Navbar></Navbar>
    <h1>{{ page_title }}</h1>

    <form v-on:submit.prevent="saveDoc" class="form-example">
      <div class="form-example">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="model.title" required>
      </div>
      <div class="w-auto p-3">
        <label for="body">Body</label>
        <vue-ckeditor type="classic" v-model="model.body" :editors="editors" name="body" id="body"></vue-ckeditor>
      </div>
      <div class="form-example">
        <button type="submit">Save Doc</button>
      </div>
    </form>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import VueCkeditor from 'vue-ckeditor5'
import api from '@/api'
import Navbar from '@/components/NavBar.vue'

export default {
  name: 'doc-update',
  components: {
    Navbar,
    'vue-ckeditor': VueCkeditor.component
  },
  data () {
    return {
      page_title: 'Update Doc',
      model: {},
      editors: {
        classic: ClassicEditor
      }
    }
  },
  methods: {
    getThisDoc: async function () {
      this.model = await api.getDoc(this.$route.params.id)
    },
    saveDoc: async function () {
      await api.updateDoc(this.model.id, this.model)
      await this.$router.push({ name: 'doc-detail', params: { id: this.model.id } })
    }
  },
  async mounted () {
    this.getThisDoc()
  }
}
</script>

<style scoped>
  form.form-example {
    display: table;
  }

  div.form-example {
    display: table-row;
  }

  label, input {
    display: table-cell;
    margin-bottom: 10px;
  }

  label {
    padding-right: 10px;
  }
</style>
