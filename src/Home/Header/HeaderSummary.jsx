import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function HeaderSummary() {
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
          paddingLeft: 5,
          paddingRight: 5,
          display: 'flex',
        }}
      >
        <Grid item xs sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/512/8297/8297984.png"
            alt="ico"
            sx={{
              m: 1, borderRadius: 1, width: 60, height: 60,
            }}
          />
          <Typography component="h1" variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
            Eshop
          </Typography>
        </Grid>
        <Grid item sx={{ display: 'flex' }}>
          <List sx={{ display: 'flex' }}>
            <ListItem>
              <ListItemText>
                <Typography component="h1" variant="h6">
                  Inicio
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography component="h1" variant="h6">
                  Productos
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography component="h1" variant="h6">
                  Marcas
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <Typography component="h1" variant="h6">
                Tiendas
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography component="h1" variant="h6">
                  Comprar
                </Typography>
              </ListItemText>
            </ListItem>
          </List>

        </Grid>
      </Grid>
    </Box>
  );
}

export default HeaderSummary;
