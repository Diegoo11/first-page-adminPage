import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Heather from './Heather';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
  },
});

function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <Heather />
      </Container>
    </ThemeProvider>
  );
}

export default Home;
