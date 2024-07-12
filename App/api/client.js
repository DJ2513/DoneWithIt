import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'http://10.11.10.81:9000/api',
})

export default apiClient