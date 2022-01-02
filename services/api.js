import axios from "axios"

async function getUsers() {
  const url = "https://api.social.danielvaknine.com/user/getUsers"
  const response = await axios(url)
  return response.data
}

async function getUser(id) {
  const url = "https://api.social.danielvaknine.com/user/getUsers"
  const response = await axios(url)
  return response.data.filter((item) => {
    return item.id === parseInt(id)
  })
}

async function getPosts() {
  const url =
    "https://api.social.danielvaknine.com/blog/getAllPosts/43899173-63de-422a-9f98-1aa058c9078b/22"
  const response = await axios(url)
  return response.data
}

async function getSongs() {
  const url =
    "https://api.social.danielvaknine.com/song/getSongs/43899173-63de-422a-9f98-1aa058c9078b/22"
  const response = await axios(url)
  return response.data
}

async function getMessages() {
  const url =
    "https://api.social.danielvaknine.com/message/getMessages/22/1/43899173-63de-422a-9f98-1aa058c9078b/22"
  const response = await axios(url)
  return response.data
}

async function loginUser(data) {
  const url = "https://api.social.danielvaknine.com/login"
  const response = await axios.post(url, data)
  return response.data
}

export { getUsers, getUser, getPosts, getSongs, getMessages, loginUser }
