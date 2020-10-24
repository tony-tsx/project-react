import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from '../reducer'
import initialState from './initialState'

const store = createStore( reducer, initialState, applyMiddleware( logger ) )

export default store
