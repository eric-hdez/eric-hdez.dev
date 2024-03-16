import React from 'react';
import { Grid, Stack, Typography } from '@mui/joy';
import Image from 'next/image';

import eric from '../../../public/eric_arboretum.webp';

export default function About() {
  return (
    <Grid container m={0} p={2} justifyContent="center">
      <Grid p={2} xs={12} md={7} lg={8}>
        <Stack direction="column" justifyContent="space-between">
          <Stack direction="column" spacing={1} overflow="scroll">
            <Typography level="h1">About Me</Typography>
            <Typography>
              Hi there, My name is Eric! I&apos;m a 22 years old Software
              Engineer at Bloomberg LP in New York City. I completed a BS in
              Computer Science at the University of California, Santa Cruz in
              2023.
            </Typography>
            <Typography>
              Outside of my professional pursuits, you can catch me embracing
              the beauty of nature on a hike, pushing myself at the gym, getting
              lost in the verses of romantic poets, or taking in the
              breath-taking beauty of the night sky. I recently discovered a
              passion for recreating some of my favorite traditional dishes from
              Mexican culture/cuisine. I love sharing my culinary creations with
              friends and family to show my appreciation for them!
            </Typography>
            <Typography>
              I enjoy having conversations about tech or any of the hobbies that
              I&apos;m passionate about. Feel free to reach out to me via social
              media or email if you would like to have a chat!
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
