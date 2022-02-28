import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import UserCard from './UserCard';
import AppBar from '@mui/material/AppBar';
import NavBar from './NavBar'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { connect } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function LeaderBoard(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Paper name='Question List' sx={{width:'50%'}}>
        <AppBar position="static" sx={{elevation:'0', p:"12px 16px"}}>
          <Typography>Current Leaders</Typography>
        </AppBar>
        <Box sx={{padding:"2em"}}>
          <Stack spacing={2}>
            {Object.values(props.users).map((user) => (
              <Item key={user.id}>
              <p>{user.name}</p>
              <p>Questions Asked: {user.asked} Questions Answered: {user.answered}</p>
              <p>TOTAL: {user.total}</p>
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
      total: Object.keys(user.answers).length + user.questions.length
    })).sort((a, b) => (a.total > b.total) ? -1 : 1)
  }
}

export default connect(mapStateToProps)(LeaderBoard)
