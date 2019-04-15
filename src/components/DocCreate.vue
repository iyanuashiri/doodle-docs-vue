<template>
  <div id="doc-create">
    <Navbar></Navbar>
    <h1>{{ page_title }}</h1>
    <!--<diV class="mx-auto w-75">-->

      <form v-on:submit.prevent="saveDoc" class="w-auto p-3">
        <div class="w-100 p-3">
          <label for="title">Title</label>
          <input class="w-100 p-3" type="text" name="title" id="title" v-model="model.title" required>
        </div>
        <!--<div class="w-auto p-3">-->
          <!--<label for="body">Body</label>-->
          <!--<input class="w-100 p-3" type="text" name="body" id="body" v-model="model.body" required>-->
        <!--</div>-->
        <div class="w-auto p-3">
          <label for="body">Body</label>
          <vue-ckeditor type="classic" v-model="model.body" :editors="editors" name="body" id="body"></vue-ckeditor>
        </div>
        <div class="w-auto p-3">
          <button class="mx-auto btn btn-primary btn active w-25" type="submit">Save Doc</button>
        </div>
      </form>
  <!--</div>-->
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import VueCkeditor from 'vue-ckeditor5'
import api from '@/api'
import Navbar from '@/components/NavBar.vue'

export default {
  name: 'doc-create',
  components: {
    Navbar,
    'vue-ckeditor': VueCkeditor.component
  },
  data () {
    return {
      page_title: 'Create Doc',
      model: {},
      editors: {
        classic: ClassicEditor
      }
    }
  },
  methods: {
    saveDoc: async function () {
      await api.createDoc(this.model)
      await this.$router.push({ name: 'doc-detail', params: { id: this.model.id } })
    }
  },
  created () {
    this.model.email = localStorage.getItem('email')
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
