import React, { useState } from 'react';
import {
  Accordion, AccordionSummary, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

function Heather() {
  const [acor1, setAcor1] = useState(false);

  const hangleChange = () => {
    setAcor1((n) => !n);
  };
  return (
    <Accordion expanded={acor1} onChange={hangleChange} sx={{ bgcolor: grey[100] }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="header"
      >
        <Typography>
          Header
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{
          m: 2, borderRadius: 1, boxShadow: 2, p: 2, bgcolor: 'white',
        }}
        >
          <Box />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default Heather;
