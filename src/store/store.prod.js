import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'

const store = createStore( reducer, initialState, applyMiddleware() )

export default store
