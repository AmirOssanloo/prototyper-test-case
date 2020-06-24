import React from 'react';
import { Container, Grid, Box } from './style';

// Add photo to Paper
// Create table
// Load data from API
// Ability to sort data
// Persist sorting
// https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK

const Home = () => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Box>
            <h2>Transition asset</h2>
            <p>An off-balance sheet asset created under FAS 87 rules when pension plan assets exceed the projected benefit obligation (PBO).</p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <h2>Trade credit</h2>
            <p>Credit granted by a supplier to a customer to finance the customer’s purchase of goods or services from the supplier.</p>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box branded>
            <h2>Debt security</h2>
            <p>Any financial instrument representing a creditor relationship between the issuer (the debtor) and the holder of the instrument (the creditor). This generally includes all U.S. Treasury securities, municipal securities, corporate bonds, convertible debt, commercial paper, and securitized debt instruments such as CMOs and REMICs.</p>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
