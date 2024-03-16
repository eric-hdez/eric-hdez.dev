import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ColorPaletteProp,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

import eric from '../../../public/eric_birthday.webp';

const buttons = [
  {
    link: 'https://www.linkedin.com/in/eric-hdez',
    description: 'Eric\'s LinkedIn Profile',
    icon: <LinkedInIcon />,
    color: 'primary',
  },
  {
    link: 'https://github.com/eric-hdez',
    description: 'Eric\'s GitHub Profile',
    icon: <GitHubIcon />,
    color: 'danger',
  },
  {
    link: 'https://www.instagram.com/eric_witha_c',
    description: 'Eric\'s Instagram Profile',
    icon: <InstagramIcon />,
    color: 'success',
  },
  {
    link: 'https://www.twitter.com/eric_witha__c',
    description: 'Eric\'s X Profile',
    icon: <XIcon />,
    color: 'warning',
  },
];

export default function Home() {
  return (
    <Grid container m={0} p={2} justifyContent="center">
      <Grid container p={2} xs={12} md={7} lg={8}>
        <Stack direction="column" justifyContent="space-between" spacing={8}>
          <Stack direction="column" spacing={1}>
            <Typography level="h1" textAlign="left">
              Eric Hernandez
            </Typography>
            <Typography level="body-lg">
              I&apos;m a Software Engineer at Bloomberg LP with a B.S. in
              Computer Science from the University of California, Santa Cruz.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            {buttons.map(({ link, description, icon, color }) => (
              <Link
                key={description}
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconButton
                  title={description}
                  aria-label={description}
                  color={color as ColorPaletteProp}
                  variant="outlined"
                  size="lg"
                >
                  {icon}
                </IconButton>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid container xs={12} md={5} lg={4} justifyContent="center">
        <Image
          src={eric}
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="Portrait of Eric on his birthday"
          quality={80}
          placeholder="blur"
          priority
        />
      </Grid>
    </Grid>
  );
}
