import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function HeaderDetails() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({ data });
    console.log({
      src: data.get('src'),
      alt: data.get('alt'),
      text: data.get('text'),
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      <Grid
        container
        maxWidth="md"
        sx={{
          marginLeft: -3,
          width: '100%',
          display: 'flex',
        }}
        rowSpacing={2}
      >
        <Grid item xs={12}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/8297/8297984.png"
                alt="ico"
                sx={{
                  m: 1, borderRadius: 1, width: 60, height: 60,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="src"
                label="Direction"
                name="src"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="alt"
                label="Description"
                name="alt"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography component="h1" variant="h4">
                Eshop
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="text"
                label="Text"
                name="text"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} />
        <Grid item xs={2}>
          <Button type="submit" fullWidth variant="contained">
            <Typography component="h1" variant="h6" color="white">
              Save
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeaderDetails;
