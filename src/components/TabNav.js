import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TabView from './TabView'
import { Box } from '@mui/material';

class TabNav extends Component {

  render() {
    console.log("TabNav rendering")
    return (
      <Router>
        <Box sx={{ width: '100%' }} id="TabNav Box!">
          <Route path='/' exact render={() => <TabView tabVisible={"questions"} view={"questions"}/>}/>
          <Route path='/leaderboard' render={() => <TabView tabVisible={"leaderboard"} view={"leaderboard"}/>}/>
          <Route path='/add' render={() => <TabView tabVisible={"add"} view={"add"}/>}/>
          <Route path='/questions' render={() => <TabView tabVisible={"questions"} view={"questions"}/>}/>
        </Box>
      </Router>
    )
  }
}

function mapStateToProps( {authedUser, users} ){
  return { user: users[authedUser] };
}

export default connect(mapStateToProps)(TabNav)
