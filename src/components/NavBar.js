/* Developed from base at https://mui.com/components/tabs/ */

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
import AppBar from '@mui/material/AppBar';

import UserCard from './UserCard';
import QuestionList from './QuestionList';
import NewQuestion from './NewQuestion';
import PollView from './PollView';
import LeaderBoard from './LeaderBoard';

import { connect } from 'react-redux'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="New Question" {...a11yProps(1)} />
          <Tab label="Leader Board" {...a11yProps(2)} />
          <Tab label="Answer Poll*" {...a11yProps(3)} />
          <Tab label="Poll Results*" {...a11yProps(4)} />
          <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', alignContent: 'center'}}>
            <Avatar sx={{ bgcolor: deepPurple[500], height: '30.75px', width: '30.75px', margin: '0px 16px'}}>N</Avatar>
            <Box sx={{display: 'flex', alignContent: 'center', flexWrap: 'wrap', mr: '16px'}}><Typography variant="body2">Welcome Nathan!</Typography></Box>
            <Button variant='contained' size='small' sx={{margin: '0px 16px'}}>Logout</Button>
          </Box>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <QuestionList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewQuestion />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LeaderBoard/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PollView answered={0}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PollView answered={1}/>
      </TabPanel>
    </Box>
  );
}
