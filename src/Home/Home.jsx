import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import {
  Box, List, ListItem, Divider, ListItemButton, ListItemIcon, Drawer, ListItemText, Toolbar,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HeaderIndex from './Header/HeaderIndex';
import InicioIndex from './Inicio/InicioIndex';
import SubscribeIndex from './Subscribe/SubscribeIndex';
import CatalogoIndex from './Catalogo/CatalogoIndex';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

const drawerWidth = 300;

function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Container
          component="main"
          maxWidth="xl"
          sx={{
            padding: 10,
          }}
        >
          <Stack spacing={3}>
            <HeaderIndex />
            <InicioIndex />
            <SubscribeIndex />
            <CatalogoIndex />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
