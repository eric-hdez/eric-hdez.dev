'use client';

import { usePathname } from 'next/navigation';
import { Stack, IconButton, Box } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import ModeToggle from '../ModeToggle';
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
  console.log(path);

  return (
    <Stack direction="row" height={height} alignItems="center" gap={2} px={3}>
      <Box
        zIndex={2}
        display={{ md: 'none' }}
        position="absolute"
        top={48}
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
          {navItems.map(({ name, color }) => (
            <Box
              key={name}
              borderRadius={8}
              sx={{
                display: {
                  xs:
                    path === `/${name}` || (path === '/' && name === 'home')
                      ? 'flex'
                      : 'none',
                  md: 'flex',
                },
                bgcolor:
                  path === `/${name}` || (path === '/' && name === 'home')
                    ? `var(--joy-palette-${color}-outlinedHoverBg)`
                    : 'transparent',
              }}
            >
              <NavItem {...{ name, color }} />
            </Box>
          ))}
        </Box>
        <Box zIndex={2} position="absolute" top={48} right={32}>
          <ModeToggle />
        </Box>
      </Box>
    </Stack>
  );
};
