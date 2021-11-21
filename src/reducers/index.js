import users from "./users"
import { combineReducers } from "redux"

//To combine more than one reducer
const reducers = combineReducers({
  users,
})

export default reducers
