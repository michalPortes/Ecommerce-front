import axios from 'axios'

export const http = axios.create({
  // baseURL: 'http://127.0.0.1:8001/api/'
})

getAdsDayOfWeek: (group_id, company_id, params = null) => {
  return http.get('ads/' + group_id + '/' + company_id + '/campaigns_by_day', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    },
    params: params
  })
}
