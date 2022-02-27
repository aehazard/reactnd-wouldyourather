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

function QuestionList() {
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
            <UserCard />
            <UserCard />
            <UserCard />
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

export default QuestionList;
