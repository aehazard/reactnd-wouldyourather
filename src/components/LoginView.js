import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthUser } from '../actions/authedUser'
import {
  Paper,
  Button,
  Box,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';

class LoginView extends Component {
  state = {
    selectedUserId: null,
    selectedUsername: ''
  }

  handleChange = (event) => {
    console.log(event.target)
    this.setState(() => ({
      selectedUserId: event.target.value,
      selectedUsername: event.target.value
    }))
  };

  handleSubmit = () => {
    this.props.dispatch(setAuthUser(this.state.selectedUserId))
    console.log(`User set to ${this.state.selectedUserId}`)
  }

  render () {
    console.log("LoginView rendering")
    return (
      <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', minHeight:'400px'}}>
        <Paper sx={{width:'50%', padding:2}}>
          <Box sx={{mb:1}}>
            <Typography variant="overline" color="text.secondary" component="span" display='block'>
              Log in to "Would you rather..." as
            </Typography>
          </Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.selectedUsername}
              label="User"
              onChange={this.handleChange}
            >{this.props.userIds.map((id) =>(
              <MenuItem key={id} value={id}>{this.props.users[id].name}</MenuItem>
            ))}
            </Select>
          </FormControl>
          <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
            <Button
              variant='contained'
              size='small'
              onClick={this.handleSubmit}
              >
                Submit
              </Button>
          </Stack>
        </Paper>
    </Box>
    )
  }
}

function mapStateToProps( {users} ){
  return { userIds: Object.keys(users), users: users };
}

export default connect(mapStateToProps)(LoginView)
