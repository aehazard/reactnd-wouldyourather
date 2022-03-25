import * as React from 'react';
import { connect } from 'react-redux';
import {
  AppBar,
  Paper,
  Box,
  Stack,
  Avatar,
  Divider,
  Typography
} from '@mui/material';

function LeaderBoard(props) {
  console.log("LeaderBoard rendering")

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Paper name='Leader Board' sx={{maxWidth:'500px', minWidth:'500px'}}>
        <AppBar position="static" sx={{elevation:'0', p:"12px 16px"}}>
          <Typography>CURRENT RANKINGS</Typography>
        </AppBar>
        <Box sx={{padding:"2em"}}>
          <Stack spacing={2}>
            {Object.values(props.users)
            .sort((a,b) => {
              return b.total - a.total
            }).map((user, index) => (
              <Paper key={user.id} sx={{textAlign: 'center', padding: 2}}>
              <Stack direction='row' alignItems="center" justifyContent='space-evenly'>
                <Avatar sx={{ width: 100, height: 100, margin: 2}} alt={user.name} src={user.avatarURL}/>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                  <Typography variant='body1' paragraph={true}>
                    #{index+1} {user.name}
                  </Typography>
                  <Typography variant='body2' paragraph={true}>
                    Questions Asked: {user.asked}
                  </Typography>
                  <Typography variant='body2' paragraph={true}>
                    Questions Answered: {user.answered}
                  </Typography>
                </Box>
              </Stack>
              </Paper>
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
