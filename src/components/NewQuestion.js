import React, { Component } from 'react';
import { TextField, Paper, Button, Box, Stack, Typography } from '@mui/material';
import { handleSubmitQuestion } from '../actions/shared'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleChange = (event) => {
    this.setState(() => ({
      [event.target.name] : event.target.value
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { author, dispatch } = this.props
    const question = {
      optionOneText,
      optionTwoText,
      author
    }
    console.log("submitting question")
    console.log(question)

    dispatch(handleSubmitQuestion(question))

    this.props.history.push('/')
  }

  render() {
    console.log("NewQuestion rendering")
    return (
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Paper sx={{width:'50%', padding:2}}>
          <Box sx={{mb:1}}>
            <Typography variant="overline" color="text.secondary" component="span" display='block'>
              New Question
            </Typography>
            <Typography variant="h6" color="text.secondary" component="span" display='block'>
              Would you rather...
            </Typography>
          </Box>
          <TextField
            id="outlined-multiline-static"
            label="First option"
            multiline
            rows={2}
            sx={{
              width:'100%',
              mb: 2
            }}
            name="optionOneText"
            onChange={this.handleChange}
          />
          <TextField
            id="outlined-multiline-static"
            label="Second Option"
            multiline
            rows={2}
            sx={{
              width:'100%'
            }}
            name="optionTwoText"
            onChange={this.handleChange}
          />
          <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant='contained' size='small' onClick={this.handleSubmit}>Submit</Button>
            <Button variant='outlined' size='small'>Cancel</Button>
          </Stack>
        </Paper>
    </Box>
    )
  }
}

function mapStateToProps( {authedUser} ){
  return { author: authedUser };
}

export default withRouter(connect(mapStateToProps)(NewQuestion))
