import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { findID, FormImage, FormText } from '../../util';
import { UPDATE_MODULE } from './Mutation';

function HeaderDetails({ images, texts }) {
  const idImageLogo = '649e0f0de59b27af2756c89d';
  const imgLogo = images.find(findID(idImageLogo));
  const idTextLogo = '649f8b8fe527c66bfbf3f850';
  const textLogo = texts.find(findID(idTextLogo));

  const [src, setSrc] = useState(imgLogo.src);
  const [alt, setAlt] = useState(imgLogo.alt);
  const [srcMobile, setSrcMobile] = useState(imgLogo.srcMobile);
  const [imgLink, setImgLink] = useState(imgLogo.link);

  const [name, setName] = useState(textLogo.name);
  const [description, setDescription] = useState(textLogo.description);
  const [textLink, setTextLink] = useState(textLogo.link);

  const [changes, setChanges] = useState(true);

  useEffect(() => {
    if (src !== imgLogo.src
      || alt !== imgLogo.alt
      || srcMobile !== imgLogo.srcMobile
      || imgLink !== imgLogo.link
      || name !== textLogo.name
      || description !== textLogo.description
      || textLink !== textLogo.link
    ) {
      setChanges(false);
    } else {
      setChanges(true);
    }
  }, [src, alt, srcMobile, imgLink, name, description, textLink]);

  const [updateModule, { loading, error }] = useMutation(UPDATE_MODULE);
  if (loading) return 'Submitting...';
  if (error) { console.log(error); return `Submission error! ${error.message}`; }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateModule({
      variables: {
        editImageId: idImageLogo,
        src,
        alt,
        srcMobile,
        imgLink,
        editTextId: idTextLogo,
        name,
        description,
        textLink,
      },
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
        <FormImage
          img={imgLogo}
          src={src}
          alt={alt}
          srcMobile={srcMobile}
          imgLink={imgLink}
          setSrc={setSrc}
          setAlt={setAlt}
          setSrcMobile={setSrcMobile}
          setImgLink={setImgLink}
        />
        <FormText
          text={textLogo}
          name={name}
          description={description}
          textLink={textLink}
          setName={setName}
          setDescription={setDescription}
          setTextLink={setTextLink}
        />
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

export default HeaderDetails;
