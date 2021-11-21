import { USERS } from "../constants/index"

const loadUsers = () => ({
  type: USERS.GET_USERS_REQUESTED,
})

const getUsers = (users) => ({
  type: USERS.GET_USERS_SUCCESS,
  users,
})

const setError = (error) => ({
  type: USERS.GET_USERS_FAILED,
  error,
})

export { loadUsers, getUsers, setError }
