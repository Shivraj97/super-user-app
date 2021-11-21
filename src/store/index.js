import { createStore, applyMiddleware, compose } from "redux"
import reducers from "../reducers/index"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(reducers)

sagaMiddleware.run(rootSaga)

export default store