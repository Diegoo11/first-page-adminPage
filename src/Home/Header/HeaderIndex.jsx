import React, { useState } from 'react';
import {
  Accordion, AccordionSummary, CircularProgress, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useQuery } from '@apollo/client';
import { grey } from '@mui/material/colors';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import HeatherSummary from './HeaderSummary';
import HeatherDetails from './HeaderDetails';
import { QUERY_MODULE } from '../../Operations/query';

function HeaderIndex() {
  const { loading, data } = useQuery(QUERY_MODULE, {
    variables: {
      id: '64a4ced84c622ac3d7588672',
    },
  });

  const [acor1, setAcor1] = useState(false);

  const handleChange = () => {
    setAcor1((n) => !n);
  };
  const [subAcor1, setSubAcor1] = useState(false);

  const suBHangleChange = () => {
    setSubAcor1((n) => !n);
  };
  return (
    <Accordion expanded={acor1} onChange={handleChange} sx={{ bgcolor: grey[100] }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="header"
      >
        <ViewInArIcon sx={{ m: 2 }} />
        <Typography sx={{ display: 'flex', alignItems: 'center' }} component="h1" variant="h5">
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
            {loading
              ? <CircularProgress />
              : (
                <HeatherSummary
                  images={data.findForModule.image}
                  texts={data.findForModule.text}
                />
              )}
          </AccordionSummary>
          <AccordionDetails>
            {loading
              ? <CircularProgress />
              : (
                <HeatherDetails
                  images={data.findForModule.image}
                  texts={data.findForModule.text}
                />
              )}
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
}

export default HeaderIndex;
