import React, { useState } from 'react';
import {
  Accordion, AccordionSummary, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import { grey } from '@mui/material/colors';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import HeatherSummary from './HeaderSummary';
import HeatherDetails from './HeaderDetails';

function HeaderIndex() {
  const [acor1, setAcor1] = useState(false);

  const hangleChange = () => {
    setAcor1((n) => !n);
  };
  const [subAcor1, setSubAcor1] = useState(false);

  const suBHangleChange = () => {
    setSubAcor1((n) => !n);
  };
  return (
    <Accordion expanded={acor1} onChange={hangleChange} sx={{ bgcolor: grey[100] }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="header"
      >
        <ViewInArIcon />
        <Typography component="h1" variant="h5">
          Header
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Accordion
          expanded={subAcor1}
          onChange={suBHangleChange}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <HeatherSummary />
          </AccordionSummary>
          <AccordionDetails>
            <HeatherDetails />
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
}

export default HeaderIndex;
