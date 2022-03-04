import * as React from 'react';
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

function getQID (location) {
  const regex = /(?<=:).*/
  return location.match(regex)[0]
}

function AnsweringMode(props) {
  const { qid, question, authedUser, author } = props
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
              >
                <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne} />
                <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo} />
              </RadioGroup>
            </FormControl>
          </Stack>
        </Box>
        <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant='contained' size='small'>Submit</Button>
          <Button variant='outlined' size='small'>Cancel</Button>
        </Stack>
      </Paper>
  )
}

function ResultsMode(props) {
  const { qid, question, authedUser, author } = props
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
                <Typography variant="h4" color="text.secondary" component="span">{question.optionOne.votes.length}</Typography>
                <Typography variant="body2" color="text.secondary" component="span">{question.optionOne.text}</Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant='contained' size='small'>Submit</Button>
          <Button variant='outlined' size='small'>Cancel</Button>
        </Stack>
      </Paper>
  )
}

function PollView(props) {
  console.log("PollView rendering")
  const { authedUser,  questions, users } = props
  const qid = getQID(this.props.location.pathname)
  const question = questions[qid]
  const answered = ( question.optionOne.includes(authedUser) || question.optionOne.includes(authedUser) )
  const author = users[question.author]
  const propsToSend = { qid, question, authedUser, author }
  if (answered) {
    return(<ResultsMode {...propsToSend}/>)
  } else {
    return(<AnsweringMode {...propsToSend}/>)
  }
}

function mapStateToProps( {authedUser, questions, users} ){
  return { authedUser,  questions, users };
}

export default withRouter(connect(mapStateToProps)(PollView))
