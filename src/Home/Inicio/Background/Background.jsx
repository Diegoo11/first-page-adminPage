import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BackgroundPreview from './BackgroundPreview';
import BackgroundDetails from './BackgroundDetails';
import { useToggle } from '../../../util';

function Background({ images, texts }) {
  const { open, hangleChange } = useToggle();

  return (
    <Accordion expanded={open} onChange={hangleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <BackgroundPreview images={images} texts={texts} />
      </AccordionSummary>
      <AccordionDetails>
        <BackgroundDetails images={images} texts={texts} />
      </AccordionDetails>
    </Accordion>
  );
}

export default Background;
