import http from '../http-common'
/* eslint-disable camelcase */
interface IGuanoData {
  TableName: string
  Item: {
    transaction_hash: { S: string }
    referrer_address: { S: string }
    transaction_index: { N: string }
    block_hash: { S: string }
    block_number: { N: string }
    status: { N: string }
    address_from: { S: string }
    address_to: { S: string }
    contract_address: { S: string }
  }
}

const getAll = () => {
  return http.get('/marketing')
}

const get = (id: any) => {
  return http.get(`/marketing/${id}`)
}

const create = (data: IGuanoData) => {
  return http.post('/marketing', data)
}

const update = (id: any, data: IGuanoData) => {
  return http.put(`/marketing/${id}`, data)
}

const remove = (id: any) => {
  return http.delete(`/marketing/${id}`)
}

const guanoService = {
  getAll,
  get,
  create,
  update,
  remove,
}

export default guanoService
