import axios from 'axios'

export const Login = (email, password) => {
  return axios.post('http://127.0.0.1:8000/api/login', {
    email: email,
    password: password
  })
}
