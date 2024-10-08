'use client';

import { useState } from 'react';
import { Box } from '@mui/joy';
import { NavBar } from './bar';
import { NavDrawer } from './drawer';

export interface NavProps {
  drawerOpen?: boolean;
  handleDrawerOpen?: () => void;
}

export interface NavItemData {
  name: string;
  route: string;
  color: string;
}

const height: number = 110;

export const navItems: NavItemData[] = [
  { name: 'home', route: '/', color: 'primary' },
  { name: 'about', route: '/about', color: 'danger' },
  { name: 'resume', route: '/resume', color: 'success' },
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
