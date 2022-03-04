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

import { connect } from 'react-redux'
import { setAuthUser } from '../actions/authedUser'

class TabView extends Component {

  handleChange = (event, newValue) => {
    event.preventDefault()
    const newRoute = (newValue === 'questions') ? '/' : `/${newValue}`
    this.props.history.push(newRoute)
  };

  logout = () => {
    this.props.dispatch(setAuthUser(null))
  }

  tabPanel(view) {
    switch (view) {
      case 'questions': return <QuestionsView/>;
      case 'add': return <NewQuestion/>;
      case 'leaderboard': return <LeaderBoard/>;
      case 'poll': return <PollView/>;
      default: return <QuestionsView/>
    }
  }

  render() {
    console.log(`TabView Rendering with tabVisible "${this.props.tabVisible}" and view "${this.props.view}"`)
    const { user, view, tabVisible } = this.props
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 10}}>
          <Tabs value={tabVisible} onChange={this.handleChange} aria-label="basic tabs example">
            <Tab label="Questions" value="questions" />
            <Tab label="New Question" value= "add"/>
            <Tab label="Leader Board" value="leaderboard" />
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', alignContent: 'center'}}>
              <Avatar sx={{ bgcolor: deepPurple[500], height: '30.75px', width: '30.75px', margin: '0px 16px'}} alt={user.name} src={user.avatarURL}>N</Avatar>
              <Box sx={{display: 'flex', alignContent: 'center', flexWrap: 'wrap', mr: '16px'}}><Typography variant="body2">Welcome {user.name}!</Typography></Box>
              <Button onClick={this.logout} variant='contained' size='small' sx={{margin: '0px 16px'}}>Logout</Button>
            </Box>
          </Tabs>
        </Box>
        <Container>
          <Box>
            {this.tabPanel(view)}
          </Box>
        </Container>
      </Box>
    )
  }
}

function mapStateToProps( {authedUser, users} ){
  return { user: users[authedUser] };
}

export default withRouter(connect(mapStateToProps)(TabView))
