import * as React from 'react';
import { TextField, Paper, Button, Box, Stack, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function LoginView() {
  const [user, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            value={user}
            label="User"
            onChange={handleChange}
          >
            <MenuItem value={10}>Karen</MenuItem>
            <MenuItem value={20}>Sharon</MenuItem>
            <MenuItem value={30}>Nathan</MenuItem>
          </Select>
        </FormControl>
        <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant='contained' size='small'>Submit</Button>
          <Button variant='outlined' size='small'>Cancel</Button>
        </Stack>
      </Paper>
  </Box>
  )
}
