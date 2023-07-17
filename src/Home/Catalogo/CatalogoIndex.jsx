import React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, CircularProgress,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useQuery } from '@apollo/client';
import { useToggle } from '../../util';
import CatalogoPreview from './CatalogoPreview/CatalogoPreview';
import CatalogoForm from './CatalogoForm/CatalogoFrom';
import { QUERY_MODULE } from '../../Operations/query';

function CatalogoIndex() {
  const { open, handleChange } = useToggle();

  const { data, loading } = useQuery(QUERY_MODULE, {
    variables: {
      id: '64b49575f62ec34fb6e17df7',
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

  const images = data.findForModule.image;
  const texts = data.findForModule.text;

  return (
    <Accordion expanded={open} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <CatalogoPreview images={images} texts={texts} />
      </AccordionSummary>
      <AccordionDetails>
        <CatalogoForm images={images} texts={texts} />
      </AccordionDetails>
    </Accordion>
  );
}

export default CatalogoIndex;
