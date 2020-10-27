import SESSIONS from '../constants/sessions'

const userData = sessionStorage.getItem( SESSIONS.USER_DATA )

const auth = userData ? JSON.parse( userData ) : null

const initialState = {
  auth
}

export default initialState
