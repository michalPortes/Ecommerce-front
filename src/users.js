import axios from 'axios'

export const Login = (email, password) => {
  return axios.post('http://127.0.0.1:8000/api/login', {
    email: email,
    password: password
  })
}

//voltar para o logout e criar outra api de cadastro
export const Logout = token => {
  return axios.post('http://127.0.0.1:8000/api/users', {
    name: 'Michael Portes',
    email: 'michael11portes@hotmail.com'
  })
}
