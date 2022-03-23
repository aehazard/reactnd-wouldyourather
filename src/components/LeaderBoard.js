import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  AppBar,
  Paper,
  Box,
  Stack,
  Avatar,
  Divider,
  Typography
} from '@mui/material';

import { connect } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function LeaderBoard(props) {
  console.log("LeaderBoard rendering")

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Paper name='Question List' sx={{width:'50%'}}>
        <AppBar position="static" sx={{elevation:'0', p:"12px 16px"}}>
          <Typography>Current Leaders</Typography>
        </AppBar>
        <Box sx={{padding:"2em"}}>
          <Stack spacing={2}>
            {Object.values(props.users)
            .sort((a,b) => {
              return b.total - a.total
            }).map((user, index) => (
              <Item key={user.id}>
              <Stack direction='row' alignItems="center">
                <Avatar sx={{ width: 100, height: 100, margin: 2}} alt={user.name} src={user.avatarURL}/>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h4' paragraph={true}>
                    #{index+1}
                  </Typography>
                  <Typography variant='body1' paragraph={true}>
                    {user.name}
                  </Typography>
                  <Typography variant='body1' paragraph={true}>
                    Questions Asked: {user.asked} Questions Answered: {user.answered}
                  </Typography>
                </Box>
              </Stack>
              </Item>
            ))}
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

function mapStateToProps( {users} ){
  return {
    users: Object.values(users).map((user) => ({
      id: user.id,
      name: user.name,
      answered: Object.keys(user.answers).length,
      asked: user.questions.length,
      total: Object.keys(user.answers).length + user.questions.length,
      avatarURL: user.avatarURL
    })).sort((a, b) => (a.total > b.total) ? -1 : 1)
  }
}

export default connect(mapStateToProps)(LeaderBoard)
