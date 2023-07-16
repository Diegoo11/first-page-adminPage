import React, { useState } from 'react';
import {
  Accordion, CircularProgress, AccordionDetails, AccordionSummary, Typography, Stack,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { grey } from '@mui/material/colors';
import Background from './Background/Background';
import { QUERY_MODULE } from '../../Operations/query';
import Slider from './Slider/Slider';
import Products from './Products/Products';

function InicioIndex() {
  const [open, setOpen] = useState(false);
  const { loading, data } = useQuery(QUERY_MODULE, {
    variables: {
      id: '64a4dbacb464c4051e9b4a73',
    },
  });
  if (loading) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh',
      }}
      >
        <CircularProgress size={60} />
      </div>
    );
  }

  const hangleChange = () => {
    setOpen((o) => !o);
  };

  const images = data.findForModule.image;
  const texts = data.findForModule.text;

  return (
    <Accordion expanded={open} onChange={hangleChange} sx={{ bgcolor: grey[100] }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ViewInArIcon sx={{ m: 2 }} />
        <Typography sx={{ display: 'flex', alignItems: 'center' }} component="h1" variant="h5">
          Inicio
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={3}>
          <Background images={images} texts={texts} />
          <Slider images={images} texts={texts} />
          <Products images={images} texts={texts} />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default InicioIndex;
