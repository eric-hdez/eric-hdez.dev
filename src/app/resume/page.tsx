import React from 'react';
import { Box, Typography } from '@mui/joy';

export default function Resume() {
  return (
    <>
      <Box height="535px" alignContent="center">
        <object
          data="/eric_hdez_resume_dec.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <Typography textAlign="center">
            This brower does not have a PDF plugin. Use the download button
            above to view the media.
          </Typography>
        </object>
      </Box>
    </>
  );
}
