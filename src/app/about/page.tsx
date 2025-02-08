import React from 'react';
import { Grid, Stack, Typography } from '@mui/joy';
import Image from 'next/image';

import eric from '../../../public/eric_birthday.webp';

export default function About() {
  return (
    <Grid container m={0} p={2} justifyContent="center">
      <Grid p={2} xs={12} md={7} lg={8}>
        <Stack direction="column" justifyContent="space-between">
          <Stack direction="column" spacing={1} overflowY="scroll">
            <Typography level="h1">About Me</Typography>
            <Typography>
              Hi there, My name is Eric! I&apos;m a 23 year old Software
              Engineer at Bloomberg LP with a B.S. in Computer Science from the
              University of California, Santa Cruz. At Bloomberg, I design and
              develop backend services, pipelines, and distributed data stores
              for fixed income instruments on the Bloomberg Terminal.
            </Typography>
            <Typography>
              Outside of work, I enjoy long walks, reading poetry, listening to
              music, cooking, and playing video games. I will start learning how
              to play the guitar very soon!
            </Typography>
            <Typography>
              I enjoy having conversations about tech or any of the hobbies that
              I mentioned above. Feel free to reach out to me via social media
              or email if you would like to have a chat!
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        container
        xs={12}
        md={5}
        lg={4}
        justifyContent="center"
        alignContent="center"
      >
        <Image
          src={eric}
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="Eric posing with a banana slug statue at the UC Santa Cruz Arboretum"
          quality={80}
          placeholder="blur"
          priority
        />
      </Grid>
    </Grid>
  );
}
