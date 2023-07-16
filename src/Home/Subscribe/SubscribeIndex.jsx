import React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, CircularProgress,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubscribePreview from './SubscribePreview/SubscribePreview';
import SubscribeForm from './SuscribeForm/SuscribeForm';
import { useToggle } from '../../util';
import { QUERY_MODULE } from '../../Operations/query';

function SubscribeIndex() {
  const { open, handleChange } = useToggle();

  const { data, loading } = useQuery(QUERY_MODULE, {
    variables: {
      id: '64b357906a48bf84a89365dc',
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
        <SubscribePreview images={images} texts={texts} />
      </AccordionSummary>
      <AccordionDetails>
        <SubscribeForm images={images} texts={texts} />
      </AccordionDetails>
    </Accordion>
  );
}

export default SubscribeIndex;
