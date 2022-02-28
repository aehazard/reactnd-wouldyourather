import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

export default function MediaControlCard(props) {
  //const theme = useTheme();

  const { user, question } = props

  function getDate(timestamp) {
    const date = new Date(timestamp)
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
  }

  return (
    <Card sx={{ display: 'flex' }}>
      <Avatar sx={{ width: 100, height: 100, margin: 2}} alt={user.name} src={user.avatarURL}/>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant='h6' paragraph={true}>
            Would you rather {question.optionOne.text} or {question.optionTwo.text}?
          </Typography>
          <Typography variant='body2' paragraph={true}>
            submitted by {user.name} on {getDate(question.timestamp)}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
