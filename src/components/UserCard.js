import React, { Component } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { BrowserRouter as Router, Route, NavLink, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class UserCard extends Component {

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
    const { authedUser, question, author, qid } = this.props
    console.log(`UserCard rendering for question id: ${qid}`)
    return (
      <Card sx={{ display: 'flex' }}>
        <CardActionArea onClick={(e) => {this.showPoll(e, qid)}}>
          <Avatar sx={{ width: 100, height: 100, margin: 2}} alt={author.name} src={author.avatarURL}/>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant='h6' paragraph={true}>
                Would you rather {question.optionOne.text} or {question.optionTwo.text}?
              </Typography>
              <Typography variant='body2' paragraph={true}>
                submitted by {author.name} on {this.getDate(question.timestamp)}
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    )
  }
}

function mapStateToProps( {authedUser, questions, users}, {qid} ){
  return { authedUser,  question: questions[qid], author: users[questions[qid].author] };
}

export default withRouter(connect(mapStateToProps)(UserCard))
