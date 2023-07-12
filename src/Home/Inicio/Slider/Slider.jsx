import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useToggle } from '../../../util';
import SliderPreview from './SliderPreview';
import SliderDetails from './SliderDetails';

function Slider({ images, texts }) {
  const { open, hangleChange } = useToggle;
  return (
    <Accordion expanded={open} onChange={hangleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <SliderPreview images={images} />
      </AccordionSummary>
      <AccordionDetails>
        <SliderDetails images={images} />
      </AccordionDetails>
    </Accordion>
  );
}

export default Slider;
