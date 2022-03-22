import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, withRouter, Redirect } from 'react-router-dom'
import QuestionList from './QuestionList'
import PollView from './PollView'
import { connect } from 'react-redux'
import { Box } from '@mui/material';

class QuestionsView extends Component {

  render () {
    console.log("QuestionView rendering")
    return (
      <Router>
        <Box sx={{display: 'flex', justifyContent: 'center'}} id="QuestionView Box!">
          <Route path='/' exact render={() => <QuestionList />}/>
          <Route path='/questions' render={() => <PollView />}/>
        </Box>
      </Router>
    )
  }
}

export default QuestionsView
