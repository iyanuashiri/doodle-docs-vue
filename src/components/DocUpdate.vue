<template>
  <div id="doc-update">
    <Navbar></Navbar>
    <h1>{{ page_title }}</h1>

    <form v-on:submit.prevent="saveDoc" class="w-auto p-3">
      <div class="w-100 p-3">
        <label for="title">Title</label>
        <input class="w-100 p-3" type="text" name="title" id="title" v-model="model.title" required>
      </div>
      <div class="w-auto p-3">
        <label for="body">Body</label>
        <editor v-model="model.body" name="body" id="body"></editor>
      </div>
      <div class="w-auto p-3">
        <button class="mx-auto btn btn-primary btn active w-25" type="submit">Save Doc</button>
      </div>
    </form>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import api from '@/api'
import Navbar from '@/components/NavBar.vue'

export default {
  name: 'doc-update',
  components: {
    Navbar,
    'editor': Editor
  },
  data () {
    return {
      page_title: 'Update Doc',
      model: {}
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
