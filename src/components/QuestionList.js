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
    value: 0
  }

  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  filteredQuestions = (value) => {
    const { users, authedUser, questions } = this.props
    const thisUserAnswers = Object.keys(users[authedUser].answers)
    if (value === 0) {
      return Object.values(questions).filter((question) => (
        !thisUserAnswers.includes(question.id)
      ))
    } else {
      return Object.values(questions).filter((question) => (
        thisUserAnswers.includes(question.id)
      ))
    }
  }

  handleChange = (event, newValue) => {
    console.log("change detected");
    console.log(event)
    this.setState(() => ({
      value: newValue
    }))
  }

  render () {
    return (
        <Paper name='Question List' sx={{maxWidth:'500px', minWidth:'500px'}}>
          <AppBar position="static" sx={{elevation:'0'}}>
            <Tabs
              value={this.state.value}
              variant='fullWidth'
              indicatorColor="secondary"
              textColor="inherit"
              onChange={this.handleChange}
            >
              <Tab
                label='Unanswered' {...this.a11yProps(0)}
                value={0}
              />
              <Tab
                label='Answered' {...this.a11yProps(1)}
                value={1}
              />
            </Tabs>
          </AppBar>
          <Box sx={{padding:"2em"}}>
            <Stack spacing={2}>
            {this.filteredQuestions(this.state.value)
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
