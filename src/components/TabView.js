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

import { connect } from 'react-redux'
import { setAuthUser } from '../actions/authedUser'

class TabView extends Component {

  handleChange = (event, newValue) => {
    event.preventDefault()
    const newRoute = (newValue === "home") ? "/" : `/${newValue}`
    this.props.history.push(newRoute)
  };

  logout = () => {
    this.props.dispatch(setAuthUser(null))
  }

  tabPanel(value) {
    switch (value) {
      case 'home': return <QuestionList/>;
      case 'add': return <NewQuestion/>;
      case 'leaderboard': return <LeaderBoard/>;
      default: return <QuestionList/>
    }
  }

  render() {
    console.log(`Props value of TabView is ${this.props.value}`)
    const { user } = this.props
    const tabPanel = this.tabPanel(this.props.value)
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 10}}>
          <Tabs value={this.props.value} onChange={this.handleChange} aria-label="basic tabs example">
            <Tab label="Home" value="home" />
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
            {tabPanel}
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
