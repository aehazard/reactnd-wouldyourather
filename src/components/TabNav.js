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
import QuestionsView from './QuestionsView';
import NewQuestion from './NewQuestion';
import PollView from './PollView';
import LeaderBoard from './LeaderBoard';
import TabView from './TabView'

import { connect } from 'react-redux'
import { setAuthUser } from '../actions/authedUser'

class TabNav extends Component {

  render() {
    console.log("TabNav rendering")
    return (
      <Router>
        <Box sx={{ width: '100%' }}>
          <Route path='/' exact render={() => <TabView tabVisible={"questions"} view={"questions"}/>}/>
          <Route path='/leaderboard' render={() => <TabView tabVisible={"leaderboard"} view={"leaderboard"}/>}/>
          <Route path='/add' render={() => <TabView tabVisible={"add"} view={"add"}/>}/>
          <Route path='/questions' render={() => <TabView tabVisible={"questions"} view={"poll"}/>}/>
        </Box>
      </Router>
    )
  }
}

function mapStateToProps( {authedUser, users} ){
  return { user: users[authedUser] };
}

export default connect(mapStateToProps)(TabNav)
