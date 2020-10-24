import devStore from './store.dev'
import prodStore from './store.prod'

let store
if ( process.env.NODE_ENV === 'production' ) store = prodStore

else store = devStore

export default store
