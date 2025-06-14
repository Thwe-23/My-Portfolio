import React from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const stats = [
  {
    icon: <EngineeringIcon fontSize="large" color="primary" />,
    number: '1+',
    label: 'Years Experience',
  },
  {
    icon: <EmojiEventsIcon fontSize="large" color="primary" />,
    number: '1',
    label: 'Projects Completed',
  },
  // {
  //   icon: <EmojiPeopleIcon fontSize="large" color="primary" />,
  //   number: '0',
  //   label: 'Happy Clients',
  // },
];

export default function CardComponent() {
  return (
    <Grid container spacing={4} justifyContent="center" sx={{margin: 5}}>
      {stats.map((stat, index) => (
        <Grid item key={index}>
          <Card sx={{ width: 200, borderRadius: 3, boxShadow: 3 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Box mb={2}>{stat.icon}</Box>
              <Typography variant="h5" fontWeight="bold" color="primary">
                {stat.number}
              </Typography>
              <Typography variant="body1">{stat.label}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
