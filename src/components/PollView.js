import * as React from 'react';
import {
  TextField,
  Paper,
  Button,
  Box,
  Stack,
  Avatar,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Card,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

function AnsweringMode() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Paper sx={{width: '50%', padding:2}}>
        <Box sx={{ width:'100%'}}>
          <Stack direction='row'>
            <Avatar sx={{ width: 100, height: 100, margin: 2}} alt="Nathan" src="https://media.istockphoto.com/photos/background-of-galaxy-and-stars-picture-id1035676256?b=1&k=20&m=1035676256&s=170667a&w=0&h=NOtiiFfDhhUhZgQ4wZmHPXxHvt3RFVD-lTmnWCeyIG4="/>
            <FormControl component="fieldset" sx={{width:'auto', margin:2}}>
              <FormLabel component="legend">Would you rather...</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          </Stack>
        </Box>
        <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant='contained' size='small'>Submit</Button>
          <Button variant='outlined' size='small'>Cancel</Button>
        </Stack>
      </Paper>
    </Box>
  )
}

function ResultsMode() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Paper sx={{width: '50%', padding:2}}>
        <Box sx={{ width:'100%'}}>
          <Stack direction='row'>
            <Avatar sx={{ width: 100, height: 100, margin: 2}} alt="Nathan" src="https://media.istockphoto.com/photos/background-of-galaxy-and-stars-picture-id1035676256?b=1&k=20&m=1035676256&s=170667a&w=0&h=NOtiiFfDhhUhZgQ4wZmHPXxHvt3RFVD-lTmnWCeyIG4="/>
            <Box sx={{width:'auto', margin:2}}>
              <Typography variant="overline" color="text.secondary" component="span" display='block'>Results so far:</Typography>
              <Stack direction="row" spacing={2}  sx={{display: 'flex', justifyContent: 'space-around', width:'100%'}}>
                <Typography variant="h4" color="text.secondary" component="span">40%</Typography>
                <Typography variant="body2" color="text.secondary" component="span">Would rather option 1</Typography>
                <Typography variant="h4" color="text.secondary" component="span">60%</Typography>
                <Typography variant="body2" color="text.secondary" component="span">Would rather option 2</Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant='contained' size='small'>Submit</Button>
          <Button variant='outlined' size='small'>Cancel</Button>
        </Stack>
      </Paper>
    </Box>
  )
}

export default function PollView(props) {
  const { answered } = props
  if (answered) {
    return(<ResultsMode/>)
  } else {
    return(<AnsweringMode/>)
  }
}
