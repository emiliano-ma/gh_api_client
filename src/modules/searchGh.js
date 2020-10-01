import axios from 'axios'

const getSearch = async(input) => {
  let response = await axios.get(`/search/users?q=${input}`)
  debugger
  return response.data
}

export { getSearch };