import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import HeaderIndex from './Header/HeaderIndex';
import InicioIndex from './Inicio/InicioIndex';

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
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          padding: 10,
        }}
      >
        <Stack spacing={3}>
          <HeaderIndex />
          <InicioIndex />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
