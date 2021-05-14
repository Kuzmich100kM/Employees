import { applyMiddleware, createStore, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import reducers from "./reducers"

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store
