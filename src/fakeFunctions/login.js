const users = [ {
  id: Math.trunc( Math.random() * 100 ),
  email: 'tony.js@zoho.eu',
  password: '123456789',
}, {
  id: Math.trunc( Math.random() * 100 ),
  email: 'admin@example.com',
  password: '987654321',
} ]

const login = ( email, password ) => new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    const user = users.find( user => user.email === email && user.password === password )
    if ( user ) return resolve( user )
    else {
      const error = new Error( 'user not found' )
      error.status = 404
      return reject( error )
    }
  }, Math.trunc( Math.random() * 2000 ) )
} )

export default login
