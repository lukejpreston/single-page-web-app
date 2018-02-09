import {connect} from 'react-redux'
import reducer from './default-reducer'
import actions from './actions'
import Component from './single-page-web-app'

export default connect(reducer('spwa'), actions)(Component)
