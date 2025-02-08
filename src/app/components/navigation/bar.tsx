'use client';

import { usePathname } from 'next/navigation';
import {
  ColorPaletteProp,
  Box,
  IconButton,
  Link as JoyLink,
  Stack,
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
    <Stack direction="row" height={height} alignItems="center" gap={2} px={3}>
      <Box
        zIndex={2}
        display={{ md: 'none' }}
        position="absolute"
        top={32.5}
        left={32}
      >
        <IconButton
          variant="outlined"
          aria-label="open-drawer"
          onClick={handleDrawerOpen}
          size="lg"
          sx={{
            bgcolor: drawerOpen
              ? `var(--joy-palette-neutral-outlinedHoverBg)`
              : 'transparent',
          }}
        >
          <MenuIcon
            sx={{
              color: drawerOpen
                ? `var(--joy-palette-neutral-plainHoverColor)`
                : `var(--Icon-color)`,
            }}
          />
        </IconButton>
      </Box>
      <Box display="flex" flexGrow={1} justifyContent="center">
        <Box
          display="flex"
          flexGrow={1}
          justifyContent={{ xs: 'center', md: 'space-evenly' }}
        >
          {navItems.map(({ name, route, color }) => (
            <Box
              key={name}
              borderRadius={8}
              sx={{
                display: {
                  xs: path === route ? 'flex' : 'none',
                  md: 'flex',
                },
              }}
            >
              <NavItem {...{ name, route, color }} />
              {path === '/resume' ? (
                <JoyLink
                  component="a"
                  href="/eric_hdez_resume.pdf"
                  download
                >
                  <IconButton
                    variant="outlined"
                    size="lg"
                    color={color as ColorPaletteProp}
                    sx={{
                      ml: 2,
                      display: path === route ? 'flex' : 'none',
                    }}
                  >
                    <DownloadIcon />
                  </IconButton>
                </JoyLink>
              ) : (
                <></>
              )}
            </Box>
          ))}
        </Box>
        <Box zIndex={2} position="absolute" top={32.5} right={32}>
          <ModeToggle />
        </Box>
      </Box>
    </Stack>
  );
};
