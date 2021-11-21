import { call, put, takeLatest } from "redux-saga/effects"
import { getUsers, setError } from "../../actions/index"
import { USERS } from "../../constants"
import fetchGetUsers from "../requests/fetchUsers"

function* handleGetUsers() {
  try {
    const users = yield call(fetchGetUsers)
    yield put(getUsers(users))
  } catch (err) {
    yield put(setError(err.message))
  }
}

function* watcherUserSaga() {
  yield takeLatest(USERS.GET_USERS_REQUESTED, handleGetUsers)
}

export default watcherUserSaga
