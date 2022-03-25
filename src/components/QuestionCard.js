import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Avatar,
  Divider,
  Stack
} from '@mui/material';


class QuestionCard extends Component {

  showPoll = (event, qid) => {
    event.preventDefault()
    console.log("show question poll")
    console.log(event)
    const newRoute = `/questions/:${qid}`
    this.props.history.push(newRoute)
  }

  getDate = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
  }

  render() {
    const { question, author, qid } = this.props
    console.log(`UserCard rendering for question id: ${qid}`)
    return (
      <Card sx={{ display: 'flex' }}>
        <CardActionArea onClick={(e) => {this.showPoll(e, qid)}}>
          <Stack direction='row'>
            <Avatar sx={{ width: 100, height: 100, margin: 2}} alt={author.name} src={author.avatarURL}/>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant='body1' paragraph={true}>
                  Would you rather {question.optionOne.text} or {question.optionTwo.text}?
                </Typography>
                <Typography variant='caption'>
                  submitted by {author.name} on {this.getDate(question.timestamp)}
                </Typography>
              </CardContent>
            </Box>
          </Stack>
        </CardActionArea>
      </Card>
    )
  }
}

function mapStateToProps( {authedUser, questions, users}, {qid} ){
  return { authedUser,  question: questions[qid], author: users[questions[qid].author] };
}

export default withRouter(connect(mapStateToProps)(QuestionCard))
