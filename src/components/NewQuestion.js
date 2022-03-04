import * as React from 'react';
import { TextField, Paper, Button, Box, Stack, Typography } from '@mui/material';

export default function NewQuestion() {
  console.log("NewQuestion rendering")
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Paper sx={{width:'50%', padding:2}}>
        <Box sx={{mb:1}}>
          <Typography variant="overline" color="text.secondary" component="span" display='block'>
            New Question
          </Typography>
          <Typography variant="h6" color="text.secondary" component="span" display='block'>
            Would you rather...
          </Typography>
        </Box>
        <TextField
          id="outlined-multiline-static"
          label="First option"
          multiline
          rows={2}
          sx={{
            width:'100%',
            mb: 2
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Second Option"
          multiline
          rows={2}
          sx={{
            width:'100%'
          }}
        />
        <Stack direction="row" spacing={2}  sx={{mt: '16px', display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant='contained' size='small'>Submit</Button>
          <Button variant='outlined' size='small'>Cancel</Button>
        </Stack>
      </Paper>
  </Box>
  )
}
