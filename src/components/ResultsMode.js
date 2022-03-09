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

class ResultsMode extends Component {

  handleCancel = (event) => {
    event.preventDefault()
    this.props.history.push('/')
  }

  render(){
    const { qid, question, authedUser, author } = this.props
    console.log(`Show answered question, id: ${qid}`)
    return (
        <Paper sx={{width: '50%', padding:2}}>
          <Box sx={{ width:'100%'}}>
            <Stack direction='row'>
              <Avatar sx={{ width: 100, height: 100, margin: 2}} alt={author.name} src={author.avatarURL}/>
              <Box sx={{width:'auto', margin:2}}>
                <Typography variant="overline" color="text.secondary" component="span" display='block'>Results so far:</Typography>
                <Stack direction="row" spacing={2}  sx={{display: 'flex', justifyContent: 'space-around', width:'100%'}}>
                  <Typography variant="h4" color="text.secondary" component="span">{question.optionOne.votes.length}</Typography>
                  <Typography variant="body2" color="text.secondary" component="span">{question.optionOne.text}</Typography>
                  <Typography variant="h4" color="text.secondary" component="span">{question.optionTwo.votes.length}</Typography>
                  <Typography variant="body2" color="text.secondary" component="span">{question.optionTwo.text}</Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant='contained' size='small' onClick={this.handleCancel}>Back to Questions</Button>
          </Stack>
        </Paper>
    )
  }
}

export default withRouter(ResultsMode)
