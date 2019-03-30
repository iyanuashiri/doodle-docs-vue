import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  json: true
})

export default {
  async execute (method, resource, data) {
    let accessToken = await Vue.prototype.$auth.getAccessToken()
    return client({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(req => {
      return req.data
    })
  },
  getDocs () {
    return this.execute('get', '/docs')
  },
  getDoc (id) {
    return this.execute('get', `/docs/${id}`)
  },
  createDoc (data) {
    return this.execute('post', '/docs')
  },
  updateDoc (id, data) {
    return this.execute('put', `/docs/${id}`, data)
  },
  deleteDoc (id) {
    return this.execute('delete', `/docs/${id}`)
  }

}
