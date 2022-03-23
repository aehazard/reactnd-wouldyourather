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
    const optionOneTotal = question.optionOne.votes.length
    const optionTwoTotal = question.optionTwo.votes.length
    const optionOnePercent = parseFloat((optionOneTotal / (optionOneTotal + optionTwoTotal))*100).toFixed(0)+'%'
    const optionTwoPercent = parseFloat((optionTwoTotal / (optionOneTotal + optionTwoTotal))*100).toFixed(0)+'%'
    const optionOneVoteText = optionOneTotal + ((optionOneTotal > 1) ? ' votes' : ' vote')
    const optionTwoVoteText = optionTwoTotal + ((optionTwoTotal > 1) ? ' votes' : ' vote')
    const optionOneText = question.optionOne.text + ((question.optionOne.votes.includes(authedUser)) ? '*' : '')
    const optionTwoText = question.optionTwo.text + ((question.optionTwo.votes.includes(authedUser)) ? '*' : '')

    console.log(`Show answered question, id: ${qid}`)
    console.log(this.props)
    return (
        <Paper sx={{width: '50%', padding:2}} id="Results Paper!">
          <Box sx={{ width:'100%'}} id="Results Box!">

              <Box sx={{width:'auto', margin:2}}>
                <Typography variant="overline" color="text.secondary" component="span" display='block'>Results so far:</Typography>
                <Divider sx={{marginBottom:2}}/>
                <Stack direction="row" justifyContent="space-evenly">
                  <Box sx={{width: "25%"}}>
                    <Typography variant="h4" color="text.secondary" component="p">{optionOnePercent}</Typography>
                    <Typography variant="body2" color="text.secondary" component="p">{optionOneVoteText}</Typography>
                  </Box>
                  <Box sx={{width: "25%"}}>
                    <Typography variant="body2" color="text.secondary" component="p">{optionOneText}</Typography>
                  </Box>
                  <Box sx={{width: "25%"}}>
                    <Typography variant="h4" color="text.secondary" component="p">{optionTwoPercent}</Typography>
                    <Typography variant="body2" color="text.secondary" component="p">{optionTwoVoteText}</Typography>
                  </Box>
                  <Box sx={{width: "25%"}}>
                    <Typography variant="body2" color="text.secondary" component="p">{optionTwoText}</Typography>
                  </Box>
                </Stack>
                <Divider sx={{marginBottom:2, marginTop:2}}/>
                <Typography variant="body2" color="text.secondary" component="p">*your selection</Typography>
              </Box>

          </Box>
          <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant='contained' size='small' onClick={this.handleCancel}>Back to Questions</Button>
          </Stack>
        </Paper>
    )
  }
}

export default withRouter(ResultsMode)
