import ACTIONS from '../constants/actions'
import SESSIONS from '../constants/sessions'

const signIn = ( user ) => {
  sessionStorage.setItem( SESSIONS.USER_DATA, JSON.stringify( user ) )
  return { type: ACTIONS.SIGN_IN, user }
}

export default signIn
