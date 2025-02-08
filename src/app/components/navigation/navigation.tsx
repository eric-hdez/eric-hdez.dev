'use client';

import React, { useState } from 'react';
import { Box } from '@mui/joy';
import { NavBar } from './bar';
import { NavDrawer } from './drawer';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export interface NavProps {
  drawerOpen?: boolean;
  handleDrawerOpen?: () => void;
}

export interface NavItemData {
  decorator: React.JSX.Element
  name: string;
  route: string;
  color: string;
}

const height: number = 72;

export const navItems: NavItemData[] = [
  {
    decorator: <LinkedInIcon />,
    name: 'LinkedIn',
    route: 'https://www.linkedin.com/in/eric-hdez',
    color: 'primary',
  },
  {
    decorator: <GitHubIcon />,
    name: 'Github',
    route: 'https://www.github.com/eric-hdez',
    color: 'primary',
  },
];

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box
        width="100%"
        position="fixed"
        top={0}
        zIndex={2}
        bgcolor="background.body"
      >
        <NavBar {...{ height, drawerOpen, handleDrawerOpen }} />
      </Box>
      <Box height={height} />
      <Box width="100%" height="100%">
        <NavDrawer {...{ drawerOpen, handleDrawerOpen }} />
      </Box>
    </>
  );
}
