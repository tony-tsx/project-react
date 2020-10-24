const createStore = ( reduce, initialState ) => {
  let state = initialState
  const observers = []
  const compareAndUpdateState = ( action ) => {
    const oldState = store.getState()
    const newState = reduce( oldState, action )
    if ( oldState !== newState )
      observers.forEach( listener => listener( newState ) )
  
    state = newState
  }
  const store = {
    getState() { return state },
    dispatch( action ) { compareAndUpdateState( action ) },
    observer( observer ) { observers.push( observer ) },
  }

  return store
}

const initialState = {}
const reduce = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'SIGN_IN': return Object.assign( {}, state, {
      userAuth: {
        user: action.user,
        pass: action.pass
      }
    } )
    case 'SIGN_OUT': return Object.assign( {}, state, { userAuth: null } )
    case 'WRONG_ACTION': return Object.assign( state, { unique: Symbol( 'unique-symbol' ) } )
    default: return state
  }
}

const store = createStore( reduce, initialState )

store.observer( ( state ) => {
  console.log( 'o estado foi alterado', state, '\n' )
} )

store.dispatch( { type: 'SIGN_IN', user: 'tony-tsx', pass: '123456' } )

store.dispatch( { type: 'REGISTER', user: 'tony-tsx', pass: '123456', document: '13456789' } )

store.dispatch( { type: 'SIGN_OUT' } )

store.dispatch( { type: 'WRONG_ACTION', user: '__iam_user', pass: '123456789' } )

console.log( 'final state' )

console.log( store.getState() )
