import { USERS } from "../constants/index"

const initialState = {
  users: [],
  loading: false,
  error: null,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case USERS.GET_USERS_REQUESTED:
      return { ...state, loading: true }
    case USERS.GET_USERS_SUCCESS:
      return { ...state, loading: false, users: action.users }
    case USERS.GET_USERS_FAILED:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

export default users
