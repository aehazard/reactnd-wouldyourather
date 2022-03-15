import React, { Component } from 'react'
import {
  TextField,
  Paper,
  Button,
  Box,
  Stack,
  Avatar,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Card,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import { handleSubmitAnswer } from '../actions/questions'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink, withRouter, Redirect } from 'react-router-dom'
import AnsweringMode from "./AnsweringMode"
import ResultsMode from './ResultsMode'

function getQID (location) {
  const regex = /(?<=:).*/
  return location.match(regex)[0]
}

class PollView extends Component {
  state = {

  }

  componentDidMount () {

  }

  render(){
    console.log("PollView rendering")
    const { authedUser,  questions, users } = this.props
    const qid = getQID(this.props.location.pathname)
    const question = questions[qid]
    const answered = ( question.optionOne.votes.includes(authedUser) || question.optionOne.votes.includes(authedUser) )
    const author = users[question.author]
    const propsToSend = { qid, question, authedUser, author }
    if (answered) {
      return(<ResultsMode {...propsToSend}/>)
    } else {
      return(<AnsweringMode {...propsToSend}/>)
    }
  }
}

function mapStateToProps( {authedUser, questions, users} ){
  return { authedUser,  questions, users };
}

export default withRouter(connect(mapStateToProps)(PollView))
