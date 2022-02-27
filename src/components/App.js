import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'
import NavBar from './NavBar'
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
            : <NavBar/>
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
