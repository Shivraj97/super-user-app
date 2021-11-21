const url = "https://randomuser.me/api/?results=50"

const fetchGetUsers = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })
}

export default fetchGetUsers
