import React, { Component } from 'react'
import TabNav from './TabNav'
import LoginView from './LoginView'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <div>
          {this.props.isLoggedIn
            ? <LoginView/>
            : <TabNav/>
          }
        </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isLoggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
