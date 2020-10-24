import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from '../reducer'

const store = createStore( reducer, initialState, applyMiddleware( logger ) )

export default store
