import React, { Component } from 'react'
import {
  Paper,
  Button,
  Box,
  Stack,
  Avatar,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel
} from '@mui/material';
import { handleSubmitAnswer } from '../actions/shared'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class AnsweringMode extends Component {
  state = {
    selectedOption: "optionOne"
  }

  handleChange = (event) => {
    event.preventDefault()
    console.log(`handle change to ${event.target.value}`)
    this.setState(()=>({
      selectedOption: event.target.value
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { dispatch, authedUser, qid } = this.props
    const answer = this.state.selectedOption
    console.log(`handle submit answer ${answer}`)

    dispatch(handleSubmitAnswer({
      authedUser,
      qid,
      answer
    }))

    const newRoute = `/questions/:${qid}`
    this.props.history.push(newRoute)
  }

  handleCancel = (event) => {
    event.preventDefault()
    this.props.history.push('/')
  }

  render(){
    const { qid, question, author } = this.props
    console.log(`Show unanswered question, id: ${qid}`)
    return (
        <Paper sx={{width: '50%', padding:2}}>
          <Box sx={{ width:'100%'}}>
            <Stack direction='row'>
              <Avatar sx={{ width: 100, height: 100, margin: 2}} alt={author.name} src={author.avatarURL}/>
              <FormControl component="fieldset" sx={{width:'auto', margin:2}}>
                <FormLabel component="legend">Would you rather...</FormLabel>
                <RadioGroup
                  aria-label="question"
                  defaultValue="optionOne"
                  name="radio-buttons-group"
                  onChange={this.handleChange}
                >
                  <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                  <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Box>
          <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant='contained' size='small' onClick={this.handleSubmit}>Submit</Button>
            <Button variant='outlined' size='small' onClick={this.handleCancel}>Cancel</Button>
          </Stack>
        </Paper>
    )
  }
}

export default withRouter(connect()(AnsweringMode))
