import axios from 'axios'

export const Login = (email, password) => {
  return axios.post('http://127.0.0.1:8000/api/login', {
    email: email,
    password: password
  })
}

//voltar para o logout e criar outra api de cadastro
export const Logout = token => {
  return axios.delete('http://127.0.0.1:8000/api/logout', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}

export const auth = user => {
  return axios.post('http://127.0.0.1:8000/api/users-site', user)
}
