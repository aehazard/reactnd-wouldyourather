import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { withRouter } from 'react-router-dom'
import {
  Tab,
  Tabs,
  Box,
  Stack,
  AppBar,
  Paper
} from '@mui/material';

class QuestionList extends Component {

  state = {
    tabVisible: 0
  }

  filteredQuestions = (tabValue) => {
    const { users, authedUser, questions } = this.props
    const thisUserAnswers = Object.keys(users[authedUser].answers)
    if (tabValue === 0) {
      console.log('tabValue is === to 0')
      return Object.values(questions).filter((question) => (
        !thisUserAnswers.includes(question.id)
      ))
    } else {
      return Object.values(questions).filter((question) => (
        thisUserAnswers.includes(question.id)
      ))
    }
  }

  handleChange = (event, tabValue) => {
    console.log("change detected");
    console.log(event)
    console.log(tabValue)
    this.setState(() => ({
      tabVisible: tabValue
    }))
  }

  render () {
    return (
        <Paper name='Question List' sx={{maxWidth:'500px', minWidth:'500px'}}>
          <AppBar position="static" sx={{elevation:'0'}}>
            <Tabs
              value={this.state.tabVisible}
              variant='fullWidth'
              indicatorColor="secondary"
              textColor="inherit"
              onChange={this.handleChange}
            >
              <Tab
                label='Unanswered'
                value={0}
              />
              <Tab
                label='Answered'
                value={1}
              />
            </Tabs>
          </AppBar>
          <Box sx={{padding:"2em"}}>
            <Stack spacing={2}>
            {this.filteredQuestions(this.state.tabVisible)
              .sort((a,b) => {
                return b.timestamp - a.timestamp
              }).map((question) => (
              <UserCard
                key={question.id}
                qid={question.id}
              />
            ))}
            </Stack>
          </Box>
        </Paper>
    );
  }
}

function mapStateToProps( {questions, users, authedUser} ){
  return { questionIds: Object.keys(questions), questions, users, authedUser };
}

export default withRouter(connect(mapStateToProps)(QuestionList))
