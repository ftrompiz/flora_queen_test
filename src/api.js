import axios from 'axios'

const client = axios.create({
  json: true
})

export default {
  async execute (method, resource, data, params) {
    return client({
      method,
      url: resource,
      data,
      params
    }).then(req => {
      return req.data
    }).catch(function (error) {
      alert(`An error has ocurred. Motive: ${error.message}`)
      console.log(error.toJSON())
    })
  },
  getBouquets () {
    return this.execute('get', '/api/bouquets')
  },
  getBouquet (bouquet_id) {
    return this.execute('get', `/api/bouquets/${bouquet_id}`)
  },
  createBouquet (data) {
    return this.execute('post', '/api/bouquets', data)
  },
  updateBouquet (bouquet_id, data) {
    return this.execute('put', `/api/bouquets/${bouquet_id}`, data)
  },
  deleteBouquet (bouquet_id) {
    return this.execute('delete', `/api/bouquets/${bouquet_id}`)
  },
  getReports () {
    return this.execute('get', `/report`)
  },
  getReportsFromTodo (todoId) {
    return this.execute('get', `/report/${todoId}`)
  },
  getReportsBy (action, orderBy) {
    let params = { }
    if (action !== '') {
      params['action'] = action
    }
    if (orderBy !== 'none') {
      params['order_by'] = orderBy
    }
    return this.execute('get', `/report`, {}, params)
  }
}
