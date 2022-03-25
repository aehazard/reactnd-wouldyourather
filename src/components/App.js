import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import TabNav from './TabNav'
import LoginView from './LoginView'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log("App rendering")
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
