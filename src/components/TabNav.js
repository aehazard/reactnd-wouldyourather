/* Developed from base at https://mui.com/components/tabs/ */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, NavLink, withRouter, Redirect } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import UserCard from './UserCard';
import QuestionList from './QuestionList';
import NewQuestion from './NewQuestion';
import PollView from './PollView';
import LeaderBoard from './LeaderBoard';
import TabView from './TabView'

import { connect } from 'react-redux'
import { setAuthUser } from '../actions/authedUser'

class TabNav extends Component {

  logout = () => {
    this.props.dispatch(setAuthUser(null))
  }
  render() {
    return (
      <Router>
        <Box sx={{ width: '100%' }}>
          <Route path='/' exact render={() => <TabView value={"home"}/>}/>
          <Route path='/leaderboard' exact render={() => <TabView value={"leaderboard"}/>}/>
          <Route path='/add' exact render={() => <TabView value={"add"}/>}/>
        </Box>
      </Router>
    )
  }
}

function mapStateToProps( {authedUser, users} ){
  return { user: users[authedUser] };
}

export default connect(mapStateToProps)(TabNav)
