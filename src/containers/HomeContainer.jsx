import { connect } from 'react-redux'
import HomeComponent from '../pages/Home'

const mapStateToProps = ( state ) => ( {
  auth: state.auth
} )

const HomeContainer = connect( mapStateToProps )( HomeComponent )

export default HomeContainer
