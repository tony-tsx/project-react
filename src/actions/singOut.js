import ACTIONS from '../constants/actions'
import SESSIONS from '../constants/sessions'

const signOut = () => {
  sessionStorage.removeItem( SESSIONS.USER_DATA )
  return { type: ACTIONS.SIGN_OUT }
}

export default signOut
