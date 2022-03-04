import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import UserCard from './UserCard';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router, Route, NavLink, withRouter, Redirect } from 'react-router-dom'

import { connect } from 'react-redux';

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
    const { questionIds, users, authedUser } = this.props
    const thisUserAnswers = Object.keys(users[authedUser].answers)
    if (value === 0) {
      return questionIds.filter((id) => (
        thisUserAnswers.includes(id)
      ))
    } else {
      return questionIds.filter((id) => (
        !thisUserAnswers.includes(id)
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
    const { questionIds, questions, users, authedUser } = this.props
    return (
        <Paper name='Question List' sx={{width:'50%'}}>
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
            {this.filteredQuestions(this.state.value).map((id) => (
              <UserCard
                key={id}
                qid={id}
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
