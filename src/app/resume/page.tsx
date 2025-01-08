import React from 'react';
import { Stack, Typography } from '@mui/joy';

export default function Resume() {
  return (
    <>
      <Stack direction="column" alignItems="center" p={2} m={0} spacing={2}>
        <iframe 
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Jwc3V4OWl4ZmZqbnd3cGJzcGJseHR3YWc5d2U4azl4cDZscHp1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13HBDT4QSTpveU/giphy.gif"
          width="480"
          height="360"
          frameBorder="0"
        />
        <Typography textAlign="center" level="h4">
          Under construction! Check back soon for an updated resume.
        </Typography>
      </Stack>
    </>
  );
}
