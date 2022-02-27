import React, { Component } from 'react'
import NavBar from './NavBar'
import LoginView from './LoginView'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  state = {
    authedUser: false
  }
  render() {
    return (
      <div>
        {this.state.authedUser === true
          ? <NavBar/>
          : <LoginView/>
        }
      </div>
    );
  }
}

export default connect()(App)
