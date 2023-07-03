import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const isLoading = (trueFalse, component, className = '', secondComponent = null) => {
  if (secondComponent) {
    return (
      trueFalse
        ? secondComponent
        : component
    );
  }
  return (
    trueFalse
      ? <div className={className}><CircularProgress /></div>
      : component
  );
};

export const findID = (id) => (obj) => obj.id === id;

export function FormImage({
  img, setSrc, setAlt, setSrcMobile, setImgLink, src, alt, srcMobile, srcLink,
}) {
  return (
    <Grid item xs={12}>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src={img.src}
            alt={img.alt}
            sx={{
              m: 1, borderRadius: 1, width: 100, height: 100,
            }}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container columnGap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="src"
                label="Direction"
                name="src"
                onChange={(e) => setSrc(e.target.value)}
                value={src}
              />
            </Grid>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="alt"
                label="Description"
                name="alt"
                onChange={(e) => setAlt(e.target.value)}
                value={alt}
              />
            </Grid>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                fullWidth
                id="srcMobile"
                label="Direction for view mobile"
                name="srcMobile"
                disabled
                onChange={(e) => setSrcMobile(e.target.value)}
                value={srcMobile}
              />
            </Grid>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                fullWidth
                id="link"
                label="Redirection"
                name="link"
                onChange={(e) => setImgLink(e.target.value)}
                value={srcLink}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export function FormText({
  text, setName, setDescription, setTextLink, name, description, textLink,
}) {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography component="h1" variant="h4">
            {text.name}
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container columnGap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                fullWidth
                required
                id="name"
                label="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Grid>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                fullWidth
                id="link"
                label="Redirection"
                name="link"
                onChange={(e) => setTextLink(e.target.value)}
                value={textLink}
              />
            </Grid>
            <Grid item xs={11} md={11.2}>
              <TextField
                margin="normal"
                fullWidth
                id="description"
                label="Description"
                name="description"
                multiline
                placeholder="Placeholder"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
