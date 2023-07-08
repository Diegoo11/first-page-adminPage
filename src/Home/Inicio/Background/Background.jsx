import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BackgroundPreview from './BackgroundPreview';
import BackgroundDetails from './BackgroundDetails';

function Background({ images, texts }) {
  const [open, setOpen] = useState(false);

  const hangleChange = () => {
    setOpen((o) => !o);
  };

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
