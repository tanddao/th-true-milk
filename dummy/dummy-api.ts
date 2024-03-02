import axios from 'axios'

export const getDummyUsers = () => {
  console.log('getDummyUsers api called')
  return axios.get(`https://reqres.in/api/users`)
}
