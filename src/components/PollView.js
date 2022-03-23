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
import FalseRoute from './FalseRoute'

function getQID (location) {
  const regex = /(?<=:).*/
  return location.match(regex)[0]
}

class PollView extends Component {

  render(){
    console.log("PollView rendering")
    const { validRoute, authedUser, qid, question, answered, author } = this.props
    const propsToSend = { qid, question, author, authedUser }
    if (validRoute) {
      if (answered) {
        return(<ResultsMode {...propsToSend}/>)
      } else {
        return(<AnsweringMode {...propsToSend}/>)
      }
    } else {
      return (<FalseRoute/>)
    }
  }
}

function mapStateToProps( {authedUser, questions, users}, props ){
  const qid = getQID(props.location.pathname)
  const qids = Object.keys(questions)
  const validRoute = qids.includes(qid)
  if ( validRoute ) {
    const question = questions[qid]
    const author = users[question.author]
    const answered = ( question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser) )
    return { validRoute, authedUser, qid, question, answered, author }
  } else {
    return { validRoute }
  }
}

export default withRouter(connect(mapStateToProps)(PollView))
