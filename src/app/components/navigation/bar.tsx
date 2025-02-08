'use client';

import { usePathname } from 'next/navigation';
import {
  ColorPaletteProp,
  Container,
  Box,
  Button,
  Link as JoyLink,
  Stack,
  Typography,
  Divider,
} from '@mui/joy';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import ModeToggle from '../mode-toggle';
import NavItem from './item';
import { navItems, NavProps } from './navigation';

interface NavBarProps extends NavProps {
  height: string | number | undefined;
}

export const NavBar = ({
  height,
  drawerOpen,
  handleDrawerOpen,
}: NavBarProps) => {
  const path = usePathname();

  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        height={height}
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Box display="flex">
          <Typography level="h4">Eric Hernandez</Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Stack
            direction="row"
            spacing={1}
          >
            {navItems.flatMap(({ decorator, name, route, color }) => (
              [
                <Box
                  key={name}
                  sx={{
                    display: {
                      xs: path === route ? 'flex' : 'none',
                      md: 'flex',
                    },
                  }}
                >
                  <NavItem {...{ decorator, name, route, color }} />
                </Box>,
                <Divider key="" orientation="vertical" />,
              ]
            )).slice(0, -1)}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
