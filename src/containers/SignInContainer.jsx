import { connect } from 'react-redux'
import signIn from '../actions/singIn'
import SignInComponent from '../pages/SignIn'

const mapStateToProps = ( state ) => ( {
  auth: state.auth
} )

const mapDispatchToProps = ( dispatch ) => ( {
  signIn: ( user ) => dispatch( signIn( user ) )
} )

const SignInContainer = connect( mapStateToProps, mapDispatchToProps )( SignInComponent )

export default SignInContainer
