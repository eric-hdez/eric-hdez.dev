import React from 'react';
import { Grid, Stack, Typography } from '@mui/joy';
import Image from 'next/image';

import eric from '../../../public/IMG_2699.jpeg';

export default function About() {
  return (
    <Grid container m={0} p={2} justifyContent="center">
      <Grid p={2} xs={12} md={7} lg={8}>
        <Stack direction="column" justifyContent="space-between">
          <Stack direction="column" spacing={1} overflow="scroll">
            <Typography level="h1">About Me</Typography>
            <Typography>
              Hi there, My name is Eric! I am 22 years old and recently graduated from the
              University of California, Santa Cruz with a B.S. in Computer Science. In February
              2024, I am relocating to New York City to start my career as a Software Engineer at
              Bloomberg LP.
            </Typography>
            <Typography>
              Outside of my professional pursuits, you can catch me embracing the beauty of nature
              on a hike, pushing myself at the gym, getting lost in the verses of romantic poets, or
              taking in the breath-taking beauty of the night sky. As a first generation
              Mexican-American, I recently discovered a passion for remaking some of my favorite
              traditional dishes from Mexican culture. I love sharing my culinary creations with
              friends and family to show my appreciation for them!
            </Typography>
            <Typography>
              I enjoy having conversations about tech or any of the hobbies that I am passionate
              about. Feel free to reach out to me via social media or email if you would like to
              have a chat!
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid container xs={12} md={5} lg={4} justifyContent="center" alignContent="center">
        <Image
          src={eric}
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="Eric posing at the UC Santa Cruz Arboretum"
          quality={75}
          priority
        />
      </Grid>
    </Grid>
  );
}
