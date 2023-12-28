import { combineReducers, createStore } from "redux"
import basic from './reducers/basic'

const reducers = combineReducers({
    basic,
})

const store = createStore(reducers)

export default store
window.store = store