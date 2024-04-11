import React from 'react';
import { Grid, LinearProgress, Typography } from '@mui/material';

const ProgressBar = ({ progress }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Application Progress
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Request Submitted</Typography>
        <LinearProgress
          variant="determinate"
          value={progress.requestSubmitted}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Received Application</Typography>
        <LinearProgress
          variant="determinate"
          value={progress.receivedApplication}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Under Review</Typography>
        <LinearProgress variant="determinate" value={progress.underReview} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Complete</Typography>
        <LinearProgress variant="determinate" value={progress.complete} />
      </Grid>
    </Grid>
  );
};

export default ProgressBar;
