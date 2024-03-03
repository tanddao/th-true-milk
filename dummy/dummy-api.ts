import axios from "axios"

export const getDummyUsers = () => {
  return axios.get(`https://reqres.in/api/users`)
}
