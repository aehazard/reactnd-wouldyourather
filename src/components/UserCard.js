import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Avatar sx={{ width: 100, height: 100, margin: 2}} alt="Nathan" src="https://media.istockphoto.com/photos/background-of-galaxy-and-stars-picture-id1035676256?b=1&k=20&m=1035676256&s=170667a&w=0&h=NOtiiFfDhhUhZgQ4wZmHPXxHvt3RFVD-lTmnWCeyIG4="/>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="body2" color="text.secondary" component="div">
            Would you rather...
          </Typography>
          <Typography component="div" variant="h6">
            This is a Question!
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            submitted by So-and-so on MM/DD/YYYY
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
