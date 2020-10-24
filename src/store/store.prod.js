import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import initialState from './initialState'

const store = createStore( reducer, initialState, applyMiddleware() )

export default store
