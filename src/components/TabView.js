import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAuthUser } from '../actions/authedUser'
import QuestionsView from './QuestionsView';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import {
  Tab,
  Tabs,
  Typography,
  Box,
  Button,
  Avatar,
  Container
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';

class TabView extends Component {

  handleChange = (event, newValue) => {
    event.preventDefault()
    const newRoute = (newValue === 'questions') ? '/' : `/${newValue}`
    this.props.history.push(newRoute)
  };

  logout = () => {
    this.props.history.push("/")
    this.props.dispatch(setAuthUser(null))
  }

  tabPanel(view) {
    switch (view) {
      case 'questions': return <QuestionsView/>;
      case 'add': return <NewQuestion/>;
      case 'leaderboard': return <LeaderBoard/>;
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
          <Box id="TabView Box!">
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
