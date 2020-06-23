import React from 'react';
import { Container, Grid, Paper } from './style';

// Add photo to Paper
// Create table
// Load data from API
// Ability to sort data
// Persist sorting

const Home = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Paper>
            <h1>ONE</h1>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
          <h1>TWO</h1>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <h1>THREE</h1>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
