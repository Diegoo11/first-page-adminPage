import React, {
  forwardRef, useState, useImperativeHandle, useRef,
} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

export const FormImage = forwardRef(({
  img,
}, ref) => {
  const [src, setSrc] = useState(img.src);
  const [alt, setAlt] = useState(img.alt);
  const [srcMobile, setSrcMobile] = useState(img.srcMobile || '');
  const [link, setLink] = useState(img.link || '');
  useImperativeHandle(ref, () => ({
    getData: () => ({
      src, alt, srcMobile, link, id: img.id,
    }),
  }));
  return (
    <Grid item xs={12}>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src={img.src}
            alt={img.alt}
            sx={{
              m: 1, borderRadius: 1, width: '100%',
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
                value={src}
                onChange={(e) => setSrc(e.target.value)}
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
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                fullWidth
                id="srcMobile"
                label="Direction for view mobile"
                name="srcMobile"
                value={srcMobile}
                onChange={(e) => setSrcMobile(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                fullWidth
                id="link"
                label="Redirection"
                name="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

export const FormText = forwardRef(({
  text,
}, ref) => {
  const [name, setName] = useState(text.name);
  const [description, setDescription] = useState(text.description || '');
  const [link, setLink] = useState(text.link || '');

  useImperativeHandle(ref, () => ({
    getData: () => ({
      name, description, link, id: text.id,
    }),
  }));

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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                fullWidth
                id="link"
                label="Redirection"
                name="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

export function FormBox({ handleSubmit, children, changes }) {
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
        {children}
        <Grid item xs={10} />
        <Grid item xs={2}>
          <Button type="submit" fullWidth variant="contained" disabled={changes}>
            <Typography component="h1" variant="h6" color="white">
              Save
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
/*
export const useImage = (img) => {
  const [src, setSrc] = useState(img.src);
  const [alt, setAlt] = useState(img.alt);
  const [srcMobile, setSrcMobile] = useState(img.srcMobile);
  const [imgLink, setImgLink] = useState(img.link);
};
*/

export const useForm = () => {
  const ref = useRef();
  const getData = () => ref.current.getData();
  return [ref, getData];
};

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  const hangleChange = () => setOpen((o) => !o);

  return { open, hangleChange };
};
