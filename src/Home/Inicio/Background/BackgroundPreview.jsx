import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function BackgroundPreview() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
    >
      <Grid
        container
        maxWidth="md"
        sx={{
          m: 2,
          borderRadius: 1,
          border: 1,
          width: '100%',
          display: 'flex',
        }}
      >
        <Grid item xs={6} overflow="hidden" sx={{ position: 'relative' }}>
          <Box
            component="img"
            src="https://www.tuexperto.com/wp-content/uploads/2022/01/paginas-descargar-fondos-de-pantalla.jpg.webp"
            alt="test"
            sx={{
              m: 0,
              width: '150%',
              marginLeft: '-25%',
              height: 250,
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Box
            component="div"
            sx={{
              width: '20%',
              height: '100%',
              background: 'linear-gradient(90deg, rgba(255, 125, 0, 0), #f5f5f5)',
              position: 'absolute',
              top: 0,
              right: 0,
            }}
          />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Typography sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '80%',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
          >
            La PC gamer de tu sueños a un click, consulta con nosotros.
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Typography component="h1" variant="h4" sx={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
            <span>A</span>
            <span>S</span>
            <span>H</span>
            <span>O</span>
            <span>P</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BackgroundPreview;
