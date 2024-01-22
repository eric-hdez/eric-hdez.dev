'use client';

import { Box, Stack } from '@mui/joy';
import NavItem from './item';
import { navItems } from './navigation';
import BackDrop from '../BackDrop';

export interface NavDrawerProps {
  handleDrawerOpen: () => void;
  drawerOpen: boolean;
}

export const NavDrawer = ({ drawerOpen, handleDrawerOpen }: NavDrawerProps) => {
  return (
    <>
      <Box
        display={{ xs: drawerOpen ? 'flex' : 'none', md: 'none' }}
        position="fixed"
        height="max-content"
        width="inherit"
        zIndex={2}
        bgcolor="background.body"
        justifyContent="center"
        borderBottom={2}
      >
        <Stack direction="column" p={1.25} spacing={2}>
          {navItems.map(({ name, color }) => (
            <NavItem key={name} {...{ name, color, handleDrawerOpen }} />
          ))}
        </Stack>
      </Box>
      {drawerOpen && <BackDrop onClick={handleDrawerOpen} />}
    </>
  );
};