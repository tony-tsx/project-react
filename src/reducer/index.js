import ACTIONS from '../constants/actions'
import initialState from '../store/initialState'

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case ACTIONS.SIGN_IN:
      return Object.assign( {}, state, { auth: action.user } )
    case ACTIONS.SIGN_OUT:
      return Object.assign( {}, state, { auth: null } )
    default: return state
  }
}

export default reducer
