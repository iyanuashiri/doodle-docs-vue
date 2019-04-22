import axios from 'axios'

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  json: true
})

export default {
  async execute (method, resource, data) {
    let accessToken = await localStorage.getItem('authToken')
    return client({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Token ${accessToken}`
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
    return this.execute('post', '/docs/', data)
  },
  updateDoc (id, data) {
    return this.execute('put', `/docs/${id}/`, data)
  },
  deleteDoc (id) {
    return this.execute('delete', `/docs/${id}`)
  },
  getsharedDocs () {
    return this.execute('get', `/v2/shared_docs/`)
  },
  shareDoc (docId, userId) {
    return this.execute('put', `/${userId}/share/${docId}/`)
  },
  unshareDoc (docId, userId) {
    return this.execute('put', `/${userId}/remove/${docId}/`)
  },
  getUsers () {
    return this.execute('get', `/accounts`)
  }

}
